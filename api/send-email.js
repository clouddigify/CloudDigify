// API endpoint to handle form submissions and send emails
const EmailService = require('./email-service');

// Handler for API requests
module.exports = async (req, res) => {
  console.log('Email API endpoint called with method:', req.method);
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('Rejecting non-POST request:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Processing form submission...');
    
    // Verify request body
    if (!req.body || typeof req.body !== 'object') {
      console.error('Invalid request body:', req.body);
      return res.status(400).json({ error: 'Invalid request body' });
    }
    
    const { name, email, phone, company, message, formType, attachment } = req.body;
    
    console.log('Received form data:', { name, email, formType });

    if (!name || !email || !message) {
      console.error('Missing required fields');
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Email content
    const ccRecipients = ['chirag@clouddigify.com'];
    
    // Determine which email address to use as primary recipient based on form type
    const toEmail = 'info@clouddigify.com';
    
    // Enhanced professional subject line
    const getSubjectLine = (formType, name) => {
      const today = new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      });
      
      switch(formType) {
        case 'job-application':
          return `🎯 Job Application: ${name} | ${today}`;
        case 'service-inquiry':
          return `💼 Service Inquiry: ${name} | ${today}`;
        case 'contact-page':
          return `📧 Contact Request: ${name} | ${today}`;
        case 'quick-contact':
          return `⚡ Quick Contact: ${name} | ${today}`;
        default:
          return `📞 New Contact: ${name} | ${today}`;
      }
    };
    
    const subject = getSubjectLine(formType, name);
    
    console.log('Preparing email to:', toEmail, 'with cc:', ccRecipients);
    
    // Enterprise-level professional email template
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CloudDigify Contact Form</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f7f8fc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <!-- Email Container -->
        <div style="max-width: 650px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 40px; text-align: center;">
            <div style="background-color: rgba(255,255,255,0.1); display: inline-block; padding: 15px 25px; border-radius: 50px; margin-bottom: 15px;">
              <span style="color: #ffffff; font-size: 24px; font-weight: bold;">CloudDigify</span>
            </div>
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">New Contact Received</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
              ${formType === 'job-application' ? 'Job Application Submitted' : 
                formType === 'service-inquiry' ? 'Service Inquiry Received' :
                formType === 'contact-page' ? 'Contact Form Submitted' :
                'Quick Contact Request'}
            </p>
          </div>

          <!-- Form Type Badge -->
          <div style="text-align: center; margin-top: -20px; position: relative; z-index: 10;">
            <span style="background-color: ${
              formType === 'job-application' ? '#10b981' :
              formType === 'service-inquiry' ? '#3b82f6' :
              formType === 'contact-page' ? '#8b5cf6' :
              '#f59e0b'
            }; color: #ffffff; padding: 8px 20px; border-radius: 25px; font-size: 14px; font-weight: 600; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              ${formType.replace('-', ' ').toUpperCase()}
            </span>
          </div>

          <!-- Content -->
          <div style="padding: 40px;">
            
            <!-- Contact Details Card -->
            <div style="background-color: #f8fafc; border-radius: 10px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #667eea;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-weight: 600; width: 140px; vertical-align: top;">👤 Full Name:</td>
                  <td style="padding: 12px 0; color: #1e293b; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-weight: 600; vertical-align: top;">✉️ Email:</td>
                  <td style="padding: 12px 0;">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500; background-color: #eef2ff; padding: 6px 12px; border-radius: 6px; display: inline-block;">
                      ${email}
                    </a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-weight: 600; vertical-align: top;">📱 Phone:</td>
                  <td style="padding: 12px 0;">
                    <a href="tel:${phone}" style="color: #10b981; text-decoration: none; font-weight: 500; background-color: #ecfdf5; padding: 6px 12px; border-radius: 6px; display: inline-block;">
                      ${phone}
                    </a>
                  </td>
                </tr>` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-weight: 600; vertical-align: top;">🏢 Company:</td>
                  <td style="padding: 12px 0; color: #1e293b; font-weight: 500;">${company}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-weight: 600; vertical-align: top;">⏰ Submitted:</td>
                  <td style="padding: 12px 0; color: #1e293b; font-weight: 500;">${new Date().toLocaleString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}</td>
                </tr>
              </table>
            </div>

            <!-- Message Card -->
            <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 10px; padding: 25px; margin-bottom: 25px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                💬 Message
              </h2>
              <div style="background-color: #f1f5f9; border-radius: 8px; padding: 20px; color: #334155; line-height: 1.6; font-size: 15px; border-left: 4px solid #94a3b8;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px; display: inline-block; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                📧 Reply to ${name}
              </a>
              ${phone ? `
              <a href="tel:${phone}" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px; display: inline-block; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);">
                📞 Call ${name}
              </a>
              ` : ''}
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 25px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0; font-size: 14px; line-height: 1.5;">
              <strong>CloudDigify</strong> | Transforming What's Next<br>
              This email was automatically generated from your website contact form.<br>
              <span style="color: #94a3b8;">Timestamp: ${new Date().toISOString()}</span>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Configure email data with modified from address for Zoho
    // Note: With Zoho, the from address typically must match the authenticated user
    const smtpUser = process.env.SMTP_USER;
    const fromEmail = smtpUser || 'noreply@clouddigify.com';
    
    const mailOptions = {
      from: `"CloudDigify Website" <${fromEmail}>`,
      to: toEmail,
      cc: ccRecipients.join(','),
      replyTo: email,
      subject: subject,
      html: htmlContent,
      text: `
        New Form Submission
        -------------------
        
        Form Type: ${formType === 'quick-contact' ? 'Quick Contact' : 'Contact Page'}
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}\n` : ''}
        ${company ? `Company: ${company}\n` : ''}
        
        Message:
        ${message}
      `
    };

    console.log('Creating email service...');
    // Create email service instance
    const emailService = new EmailService();
    
    // Prepare email data for the service
    const emailData = {
      to: toEmail,
      cc: ccRecipients.join(','),
      replyTo: email,
      subject: subject,
      html: htmlContent,
      text: `
        New Form Submission
        -------------------
        
        Form Type: ${formType === 'quick-contact' ? 'Quick Contact' : 'Contact Page'}
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}\n` : ''}
        ${company ? `Company: ${company}\n` : ''}
        
        Message:
        ${message}
      `,
      attachments: attachment ? [{
        filename: attachment.filename,
        content: attachment.content,
        encoding: 'base64',
        contentType: attachment.contentType
      }] : undefined
    };

    console.log('Sending email via EmailService...');
    const result = await emailService.sendEmail(emailData);
    console.log('Email sent successfully:', result);

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: result.messageId || 'No message ID returned'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Detailed error logging
    if (error.code) console.error('Error code:', error.code);
    if (error.command) console.error('Failed command:', error.command);
    if (error.response) console.error('Server response:', error.response);
    if (error.responseCode) console.error('Response code:', error.responseCode);
    
    let errorMessage = 'Failed to send email';
    
    // Provide more helpful error messages based on common issues
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your Zoho credentials.';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Network error. Please check your SMTP host and port settings.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection error. The mail server may be unavailable.';
    }
    
    return res.status(500).json({ 
      error: errorMessage, 
      details: error.message,
      code: error.code || 'UNKNOWN',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}; 