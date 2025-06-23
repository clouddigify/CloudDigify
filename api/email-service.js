const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.config = {
      smtp: {
        host: process.env.SMTP_HOST || 'smtppro.zoho.in',
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: process.env.SMTP_SECURE === 'true' || true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      }
    };
  }

  // Create SMTP transporter
  createTransporter() {
    console.log('Creating SMTP transporter...');
    return nodemailer.createTransport(this.config.smtp);
  }

  // Send email function
  async sendEmail(emailData) {
    const { to, cc, bcc, subject, text, html, attachments, replyTo } = emailData;
    
    try {
      const transporter = this.createTransporter();
      
      // Verify connection
      await transporter.verify();
      
      const mailOptions = {
        from: `"CloudDigify" <${this.config.smtp.auth.user}>`,
        to,
        cc,
        bcc,
        replyTo,
        subject,
        text,
        html,
        attachments
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      
      return {
        success: true,
        messageId: info.messageId,
        response: info.response
      };
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  // Test SMTP connection
  async testConnection() {
    try {
      const transporter = this.createTransporter();
      await transporter.verify();
      return {
        success: true,
        message: 'SMTP connection successful'
      };
    } catch (error) {
      return {
        success: false,
        message: 'SMTP connection failed',
        error: error.message
      };
    }
  }
}

module.exports = EmailService; 