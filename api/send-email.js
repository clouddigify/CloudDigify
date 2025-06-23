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
    
    const { name, email, phone, company, message, formType } = req.body;
    
    console.log('Received form data:', { name, email, formType });

    if (!name || !email || !message) {
      console.error('Missing required fields');
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Email content
    const ccRecipients = ['chirag@clouddigify.com'];
    
    // Determine which email address to use as primary recipient based on form type
    const toEmail = formType === 'quick-contact' ? 'info@clouddigify.com' : 'contact@clouddigify.com';
    
    // Format subject line
    const subject = `New ${formType === 'quick-contact' ? 'Quick Contact' : 'Contact Form'} Submission from ${name}`;
    
    console.log('Preparing email to:', toEmail, 'with cc:', ccRecipients);
    
    // Create HTML email body with better formatting
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
        <h2 style="color: #0070f3; margin-top: 0;">New Form Submission</h2>
        <p style="color: #333; font-size: 16px;"><strong>Form Type:</strong> ${formType === 'quick-contact' ? 'Quick Contact' : 'Contact Page'}</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;">
        
        <h3 style="color: #333;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; color: #333;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #0070f3; text-decoration: none;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
            <td style="padding: 8px 0; color: #333;">${phone}</td>
          </tr>` : ''}
          ${company ? `
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
            <td style="padding: 8px 0; color: #333;">${company}</td>
          </tr>` : ''}
        </table>
        
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;">
        
        <h3 style="color: #333;">Message</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
          <p>This is an automated message from your CloudDigify website.</p>
        </div>
      </div>
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
      `
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