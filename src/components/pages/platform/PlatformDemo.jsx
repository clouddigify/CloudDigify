import React, { useState } from 'react';
import SEO from '../../common/SEO';
import { LoadingButton } from '../../common/LoadingSpinner';

const initialFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  companyType: '',
  userCount: '',
  currentTools: '',
  interests: [],
  message: '',
  website: '',
};

const interestOptions = [
  'CRM',
  'Billing',
  'Cloud Billing',
  'Subscription & License Operations',
  'Customer Portal',
  'Organization & Access Management',
];

const PlatformDemo = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(interest);
      return {
        ...prev,
        interests: isSelected
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.website) {
      setStatus({ submitting: false, success: true, error: '' });
      return;
    }

    if (!formData.name || !formData.company || !formData.email || !formData.companyType || !formData.userCount) {
      setStatus({ submitting: false, success: false, error: 'Please complete all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: '' });

    const formattedMessage = [
      'Platform Demo Request',
      `Company Type: ${formData.companyType}`,
      `Users/Customers: ${formData.userCount}`,
      `Current CRM/Billing Tools: ${formData.currentTools || 'Not provided'}`,
      `Areas of Interest: ${formData.interests.length ? formData.interests.join(', ') : 'Not specified'}`,
      '',
      'Additional Message:',
      formData.message || 'None',
    ].join('\n');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formattedMessage,
          formType: 'platform-demo',
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit demo request right now.');
      }

      setStatus({ submitting: false, success: true, error: '' });
      setFormData(initialFormData);
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message || 'Submission failed.' });
    }
  };

  return (
    <>
      <SEO
        title="Request Demo | CloudDigify Platform"
        description="Request a CloudDigify Platform demo for your MSP, CSP, cloud reseller, or IT services business."
        canonicalUrl="https://clouddigify.com/platform/demo"
        keywords={[
          'CloudDigify Platform demo',
          'request SaaS demo',
          'MSP platform demo',
          'cloud reseller software demo',
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a CloudDigify Platform Demo</h1>
            <p className="text-lg text-blue-100 max-w-4xl">
              Tell us about your business model and operating priorities. Our team will schedule a tailored product walkthrough.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              {status.success && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
                  Demo request submitted successfully. Our team will contact you shortly.
                </div>
              )}
              {status.error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Type *</label>
                    <select
                      name="companyType"
                      value={formData.companyType}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select company type</option>
                      <option value="MSP">MSP</option>
                      <option value="Microsoft CSP Partner">Microsoft CSP Partner</option>
                      <option value="Cloud Solution Provider">Cloud Solution Provider</option>
                      <option value="Cloud Reseller">Cloud Reseller</option>
                      <option value="IT Service Company">IT Service Company</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Users/Customers *</label>
                    <select
                      name="userCount"
                      value={formData.userCount}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select range</option>
                      <option value="1-25">1-25</option>
                      <option value="26-100">26-100</option>
                      <option value="101-500">101-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Current CRM/Billing Tools</label>
                  <input
                    type="text"
                    name="currentTools"
                    value={formData.currentTools}
                    onChange={handleChange}
                    placeholder="Example: Zoho, Dynamics, Tally, spreadsheets"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Share priorities, rollout timeline, or process pain points."
                  />
                </div>

                <LoadingButton
                  type="submit"
                  loading={status.submitting}
                  loadingText="Submitting..."
                  className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Request a CloudDigify Platform Demo
                </LoadingButton>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlatformDemo;
