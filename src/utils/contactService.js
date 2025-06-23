/**
 * Contact Form Utility Service
 * 
 * This service handles sending contact form submissions to the backend.
 * While the frontend displays contact@clouddigify.com,
 * submissions will be sent to info@clouddigify.com
 */

/**
 * Send contact form data to the backend email service
 * @param {Object} formData - The contact form data (name, email, phone, subject, message)
 * @returns {Promise} - Promise resolving to the submission result
 */
export const submitContactForm = async (formData) => {
  try {
    console.log('Sending contact form to email API with data:', formData);
    
    // Call the real email API
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        message: formData.subject ? `Subject: ${formData.subject}\n\n${formData.message}` : formData.message,
        formType: 'contact-page'
      }),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit contact form');
    }
    
    return {
      success: true,
      message: 'Contact form submitted successfully',
      messageId: result.messageId
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}; 