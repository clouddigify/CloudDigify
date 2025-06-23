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
    
    console.log('=== EMAIL SERVICE DEBUG ===');
    console.log('Environment variables:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER ? process.env.SMTP_USER.substring(0, 5) + '...' : 'MISSING',
      password: process.env.SMTP_PASSWORD ? 'SET' : 'MISSING'
    });
    console.log('Email config:', this.config);
    console.log('Email data:', { to, cc, subject });
    
    try {
      console.log('Creating transporter...');
      const transporter = this.createTransporter();
      
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
      
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

      console.log('Mail options:', mailOptions);
      console.log('Attempting to send email...');
      
      const info = await transporter.sendMail(mailOptions);
      
      console.log('=== EMAIL SENT SUCCESSFULLY ===');
      console.log('Message ID:', info.messageId);
      console.log('Response:', info.response);
      console.log('Accepted:', info.accepted);
      console.log('Rejected:', info.rejected);
      console.log('==============================');
      
      return {
        success: true,
        messageId: info.messageId,
        response: info.response,
        accepted: info.accepted,
        rejected: info.rejected
      };
    } catch (error) {
      console.error('=== EMAIL SENDING FAILED ===');
      console.error('Error:', error.message);
      console.error('Error code:', error.code);
      console.error('Error stack:', error.stack);
      console.error('============================');
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