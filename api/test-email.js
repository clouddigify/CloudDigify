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
      zohoSpecific: {}
    };

    // Check environment variables 
    results.environment = {
      smtpHostConfigured: !!process.env.SMTP_HOST,
      smtpPortConfigured: !!process.env.SMTP_PORT,
      smtpUserConfigured: !!process.env.SMTP_USER,
      smtpPasswordConfigured: !!process.env.SMTP_PASSWORD,
      host: process.env.SMTP_HOST || 'Not configured',
      port: process.env.SMTP_PORT || 'Not configured',
      secureConnection: process.env.SMTP_SECURE === 'true' ? 'Yes (SSL)' : 'No (TLS)',
      userEmail: process.env.SMTP_USER ? 
        `${process.env.SMTP_USER.substring(0, 3)}...${process.env.SMTP_USER.split('@')[1] || ''}` : 
        'Not configured',
    };

    // Check if the from address will match the authenticated user (Zoho requirement)
    results.zohoSpecific = {
      isZohoMail: (process.env.SMTP_HOST || '').includes('zoho'),
      fromAddressMatchesAuthUser: process.env.SMTP_USER === 'info@clouddigify.com' || 
                                 process.env.SMTP_USER === 'contact@clouddigify.com' ||
                                 process.env.SMTP_USER === 'noreply@clouddigify.com',
      recommendedSetup: `For Zoho Mail, it's recommended to use the email as both the username and the from address`
    };

    // Set up transporter config with improved error handling
    const transportConfig = {
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true,
      logger: true
    };

    results.transporterSetup = {
      status: 'Configured',
      host: transportConfig.host,
      port: transportConfig.port,
      secure: transportConfig.secure,
      credentials: process.env.SMTP_USER && process.env.SMTP_PASSWORD ? 'Provided' : 'Missing'
    };

    // Create transporter
    const transporter = nodemailer.createTransport(transportConfig);

    // Test connection
    try {
      const verifyResult = await transporter.verify();
      results.connectionTest = {
        status: 'Success',
        details: 'SMTP connection verified successfully',
        verifyResult
      };
    } catch (verifyError) {
      results.connectionTest = {
        status: 'Failed',
        error: verifyError.message,
        code: verifyError.code || 'UNKNOWN',
        recommendation: getErrorRecommendation(verifyError)
      };
    }

    return res.status(200).json({
      success: results.connectionTest.status === 'Success',
      message: results.connectionTest.status === 'Success' ? 
        'SMTP connection test successful!' : 
        'SMTP connection test failed',
      diagnostics: results
    });
  } catch (error) {
    console.error('Error testing email configuration:', error);
    return res.status(500).json({ 
      error: 'Failed to test email configuration', 
      details: error.message 
    });
  }
};

// Helper function to provide recommendations based on error type
function getErrorRecommendation(error) {
  switch(error.code) {
    case 'EAUTH':
      return 'Authentication failed. Check your Zoho username and password. For Zoho, use the full email address as the username.';
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