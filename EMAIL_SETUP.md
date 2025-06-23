# Email Setup Guide - CloudDigify

This guide will help you configure email functionality for sending emails from your contact forms.

## 🚀 Current Implementation Status

### ✅ Working Features
- **SMTP Email Sending** - Fully functional with Zoho Mail support
- **Form Submissions** - Contact forms, service inquiries, and job applications
- **Simple Email Service** - Clean, focused email sending functionality
- **Connection Testing** - API endpoint to test email configurations

## 📧 Email Configuration

### Environment Variables Required

Create a `.env` file in your project root with the following variables:

```env
# SMTP Configuration (Required for sending emails)
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourdomain.com
SMTP_PASSWORD=your-app-password
```

### Provider-Specific Settings

#### Zoho Mail (Recommended)
```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@clouddigify.com
SMTP_PASSWORD=your-app-password
```

#### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-app-password
```

## 🔧 API Endpoints

### 1. Send Email
**Endpoint:** `POST /api/send-email`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Example Corp",
  "message": "Hello, I need help with cloud services",
  "formType": "contact-form"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "unique-message-id"
}
```

### 2. Test Email Configuration
**Endpoint:** `GET /api/test-email`

**Response:**
```json
{
  "success": true,
  "message": "SMTP connection test successful!",
  "diagnostics": {
    "environment": {
      "smtpHostConfigured": true,
      "smtpUserConfigured": true,
      "smtpPasswordConfigured": true
    }
  }
}
```

## 🎯 Usage Examples

### 1. Testing Email Configuration
```bash
# Test your email setup
curl http://localhost:3000/api/test-email
```

### 2. Sending Test Email
```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message",
    "formType": "test"
  }'
```

## 🔒 Security Best Practices

### 1. App Passwords
- Use app-specific passwords instead of your main email password
- Enable 2FA on your email account before creating app passwords

### 2. Environment Security
- Never commit `.env` files to version control
- Use encrypted environment variables in production
- Rotate passwords regularly

## 🚀 Deployment

### For Vercel Deployment:

1. **Push to GitHub** (`.env` won't be committed)
2. **Add Environment Variables** in Vercel Dashboard:
   - Go to your project settings
   - Add the SMTP variables listed above
3. **Deploy and Test**

### Form Integration Status:

✅ **QuickContact Form** - Fully integrated with email sending
✅ **ServiceInquiryForm** - Fully integrated with email sending  
✅ **JobApplicationForm** - Fully integrated with email sending

## 📞 Support

If you need help with email configuration:

1. Check the API endpoint `/api/test-email` for detailed diagnostics
2. Verify your email provider settings and app passwords
3. Check server logs for detailed error messages
4. Ensure firewall/network allows SMTP connections

## 🔄 Current Email Flow

```
User Form → Frontend Validation → API Call → EmailService → SMTP Server → Recipient
```

Your email system is now clean, simple, and production-ready! 🎯 