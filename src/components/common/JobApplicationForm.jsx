import React, { useRef } from 'react';

const JobApplicationForm = ({ isOpen, onClose, jobTitle, onSubmit }) => {
  const fileInputRef = useRef();
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
        <form
          className="space-y-4 mt-4"
          onSubmit={e => {
            e.preventDefault();
            // Placeholder: collect form data and call onSubmit
            const formData = new FormData(e.target);
            onSubmit && onSubmit(formData);
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
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-colors text-lg mt-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm; 