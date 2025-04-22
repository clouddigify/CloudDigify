// API endpoint to test email configuration
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const results = {
      environment: {},
      transporterSetup: {},
      connectionTest: {},
      zohoSpecific: {},
      detailedLogs: []
    };

    // Log helper function
    const addLog = (message, data = null) => {
      console.log(message, data || '');
      results.detailedLogs.push({
        timestamp: new Date().toISOString(),
        message,
        data: data ? JSON.stringify(data) : null
      });
    };

    addLog('Starting email configuration test');

    // Check environment variables 
    results.environment = {
      smtpHostConfigured: !!process.env.SMTP_HOST,
      smtpPortConfigured: !!process.env.SMTP_PORT,
      smtpUserConfigured: !!process.env.SMTP_USER,
      smtpPasswordConfigured: !!process.env.SMTP_PASSWORD,
      smtpSecureConfigured: process.env.SMTP_SECURE !== undefined,
      host: process.env.SMTP_HOST || 'Not configured',
      port: process.env.SMTP_PORT || 'Not configured',
      secureConnection: process.env.SMTP_SECURE === 'true' ? 'Yes (SSL)' : 'No (TLS)',
      userEmail: process.env.SMTP_USER ? 
        `${process.env.SMTP_USER.substring(0, 3)}...${process.env.SMTP_USER.split('@')[1] || ''}` : 
        'Not configured',
    };

    addLog('Environment variables checked', results.environment);

    // Check if the from address will match the authenticated user (Zoho requirement)
    results.zohoSpecific = {
      isZohoMail: (process.env.SMTP_HOST || '').includes('zoho'),
      fromAddressMatchesAuthUser: process.env.SMTP_USER === 'info@clouddigify.com' || 
                                 process.env.SMTP_USER === 'contact@clouddigify.com' ||
                                 process.env.SMTP_USER === 'noreply@clouddigify.com',
      recommendedSetup: `For Zoho Mail, it's recommended to use the email as both the username and the from address`,
      usingSecureConnection: process.env.SMTP_SECURE === 'true'
    };

    addLog('Zoho-specific checks completed', results.zohoSpecific);

    // Set up transporter config with improved error handling
    const transportConfig = {
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      debug: true,
      logger: true
    };

    results.transporterSetup = {
      status: 'Configured',
      host: transportConfig.host,
      port: transportConfig.port,
      secure: transportConfig.secure,
      credentials: process.env.SMTP_USER && process.env.SMTP_PASSWORD ? 'Provided' : 'Missing',
      exactConfig: {
        ...transportConfig,
        auth: {
          user: transportConfig.auth.user,
          pass: '***PASSWORD-HIDDEN***'
        }
      }
    };

    addLog('Transport configuration created', results.transporterSetup);

    // Create a custom logger for nodemailer
    const customLogger = {
      level(level) {
        addLog(`SMTP Log Level: ${level}`);
      },
      debug(data) {
        addLog(`SMTP Debug: ${data}`);
      },
      info(data) {
        addLog(`SMTP Info: ${data}`);
      },
      warn(data) {
        addLog(`SMTP Warning: ${data}`);
      },
      error(data) {
        addLog(`SMTP Error: ${data}`);
      }
    };

    // Create transporter with custom logger
    transportConfig.logger = customLogger;
    const transporter = nodemailer.createTransport(transportConfig);
    
    addLog('Email transporter created');

    // Test connection with more detailed error handling
    try {
      addLog('Attempting to verify SMTP connection...');
      const verifyResult = await transporter.verify();
      addLog('SMTP connection verified successfully', verifyResult);
      
      results.connectionTest = {
        status: 'Success',
        details: 'SMTP connection verified successfully',
        verifyResult
      };

      // Try sending a test email if connection verification succeeds
      if (req.query.sendTestEmail === 'true') {
        addLog('Attempting to send test email...');
        
        const smtpUser = process.env.SMTP_USER;
        const fromEmail = smtpUser || 'noreply@clouddigify.com';
        
        const testMailOptions = {
          from: `"Email Test" <${fromEmail}>`,
          to: fromEmail, // Send to the same address
          subject: 'CloudDigify SMTP Test Email',
          text: 'If you received this email, your SMTP configuration is working correctly.',
          html: '<p>If you received this email, your SMTP configuration is working correctly.</p>'
        };
        
        addLog('Test email options', {
          ...testMailOptions,
          from: testMailOptions.from,
          to: testMailOptions.to,
          subject: testMailOptions.subject
        });
        
        const sendResult = await transporter.sendMail(testMailOptions);
        addLog('Test email sent successfully', sendResult);
        
        results.testEmail = {
          status: 'Success',
          messageId: sendResult.messageId,
          details: 'Test email sent successfully'
        };
      }
      
    } catch (verifyError) {
      addLog('SMTP verification failed', { 
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
        response: verifyError.response
      });
      
      results.connectionTest = {
        status: 'Failed',
        error: verifyError.message,
        code: verifyError.code || 'UNKNOWN',
        command: verifyError.command || 'Unknown command',
        response: verifyError.response || 'No server response',
        responseCode: verifyError.responseCode || 'No response code',
        recommendation: getErrorRecommendation(verifyError),
        zohoSpecificIssue: getZohoSpecificIssue(verifyError)
      };
    }

    addLog('Test completed', { success: results.connectionTest.status === 'Success' });

    return res.status(200).json({
      success: results.connectionTest.status === 'Success',
      message: results.connectionTest.status === 'Success' ? 
        'SMTP connection test successful!' : 
        'SMTP connection test failed',
      detailedError: results.connectionTest.error,
      errorResponse: results.connectionTest.response,
      diagnostics: results
    });
  } catch (error) {
    console.error('Error testing email configuration:', error);
    return res.status(500).json({ 
      error: 'Failed to test email configuration', 
      details: error.message,
      stack: error.stack
    });
  }
};

// Helper function to provide recommendations based on error type
function getErrorRecommendation(error) {
  switch(error.code) {
    case 'EAUTH':
      return 'Authentication failed. Check your Zoho username and password. For Zoho, use the full email address as the username and consider using an app-specific password.';
    case 'ESOCKET':
      return 'Network error. Check your SMTP host and port settings. For Zoho Mail, try port 465 with secure=true or port 587 with secure=false.';
    case 'ETIMEDOUT':
      return 'Connection timed out. Your serverless function might be blocked from accessing the mail server, or the server is unavailable.';
    case 'ECONNECTION':
      return 'Connection error. The mail server is unreachable. Check network configuration and firewall settings.';
    default:
      return `Unknown error (${error.code}). Check the detailed error message for more information.`;
  }
}

// Helper function to provide Zoho-specific troubleshooting
function getZohoSpecificIssue(error) {
  if (error.code === 'EAUTH') {
    return {
      possibleIssues: [
        "Zoho requires app-specific passwords for third-party applications",
        "Two-factor authentication may be enabled on your account",
        "Zoho blocks sign-in attempts from less secure apps by default",
        "Your account might be locked due to too many login attempts"
      ],
      recommendations: [
        "Generate an app password in Zoho Mail → Settings → Security → App Passwords",
        "Enable 'Access from third-party applications' in Zoho Mail settings",
        "Try using port 465 with SMTP_SECURE set to 'true'",
        "Log in to your Zoho Mail account directly to check for account alerts"
      ]
    };
  }
  
  return null;
} 