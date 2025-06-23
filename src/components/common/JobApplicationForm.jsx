import React, { useRef, useState } from 'react';
import { LoadingButton } from './LoadingSpinner';

const JobApplicationForm = ({ isOpen, onClose, jobTitle, onSubmit }) => {
  const fileInputRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: null });
  
  if (!isOpen) return null;

  // Handler for overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={handleOverlayClick}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">Apply for {jobTitle}</h2>
        
        {submitStatus.success && (
          <div className="bg-green-50 text-green-700 p-3 rounded-lg text-center mb-4">
            Application submitted successfully! We'll be in touch soon.
          </div>
        )}
        
        {submitStatus.error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-center mb-4">
            Error: {submitStatus.error}
          </div>
        )}
        
        <form
          className="space-y-4 mt-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setSubmitting(true);
            setSubmitStatus({ success: false, error: null });
            
            try {
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              
              // Handle file attachment
              let resumeAttachment = null;
              if (data.resume && data.resume.size > 0) {
                // Convert file to base64
                const resumeFile = data.resume;
                const reader = new FileReader();
                
                resumeAttachment = await new Promise((resolve, reject) => {
                  reader.onload = () => {
                    const base64 = reader.result.split(',')[1]; // Remove data:mime;base64, prefix
                    resolve({
                      filename: resumeFile.name,
                      content: base64,
                      contentType: resumeFile.type
                    });
                  };
                  reader.onerror = reject;
                  reader.readAsDataURL(resumeFile);
                });
              }
              
              // Send job application email
              const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  company: data.linkedin ? `LinkedIn: ${data.linkedin}` : 'Not provided',
                  message: `Job Application for: ${jobTitle}\n\n${data.message}`,
                  formType: 'job-application',
                  attachment: resumeAttachment
                })
              });
              
              const result = await response.json();
              
              if (!response.ok) {
                throw new Error(result.error || 'Failed to submit application');
              }
              
              setSubmitStatus({ success: true, error: null });
              onSubmit && onSubmit(formData);
              
              // Close form after 2 seconds
              setTimeout(() => {
                onClose();
              }, 2000);
              
            } catch (error) {
              console.error('Error submitting application:', error);
              setSubmitStatus({ success: false, error: error.message });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <input type="hidden" name="jobTitle" value={jobTitle} />
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input name="name" type="text" required className="w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input name="email" type="email" required className="w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input name="phone" type="tel" required className="w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">LinkedIn Profile (optional)</label>
            <input name="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Resume (PDF, DOCX)</label>
            <input name="resume" type="file" accept=".pdf,.doc,.docx" ref={fileInputRef} required className="w-full border rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message / Why you're a fit</label>
            <textarea name="message" rows={4} required className="w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us why you're a great fit for this role..." />
          </div>
          <LoadingButton
            type="submit"
            loading={submitting}
            loadingText="Submitting..."
            className="w-full font-semibold py-3 rounded-lg shadow-lg transition-colors text-lg mt-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Submit Application
          </LoadingButton>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm; 