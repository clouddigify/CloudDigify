// API endpoint to handle form submissions and send emails
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

// Handler for API requests
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message, formType } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Email content
    const ccRecipients = ['chirag@clouddigify.com', 'manish@clouddigify.com', 'deepak@clouddigify.com'];
    
    // Determine which email address to use as primary recipient based on form type
    const toEmail = formType === 'quick-contact' ? 'info@clouddigify.com' : 'contact@clouddigify.com';
    
    // Format subject line
    const subject = `New ${formType === 'quick-contact' ? 'Quick Contact' : 'Contact Form'} Submission from ${name}`;
    
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

    // Configure email data
    const mailOptions = {
      from: `"CloudDigify Website" <noreply@clouddigify.com>`,
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

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}; 