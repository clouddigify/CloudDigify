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
    // In a real implementation, this would be an API call to your backend 
    // Here we're simulating the API call
    
    // This is where you'd modify the recipient email 
    const backendData = {
      ...formData,
      recipientEmail: 'info@clouddigify.com' // Backend email is different from what's shown on UI
    };
    
    console.log('Sending contact form to backend with data:', backendData);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Contact form submitted successfully'
        });
      }, 1500);
    });
    
    // In a real implementation, this would be something like:
    /*
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(backendData),
    });
    
    return await response.json();
    */
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}; 