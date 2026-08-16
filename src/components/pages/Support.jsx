import React from 'react';
import SEO from '../common/SEO';

const Support = () => {
  return (
    <>
      <SEO
        title="Support | CloudDigify"
        description="Official CloudDigify support information, support contact channels, and issue reporting guidance."
        canonicalUrl="https://clouddigify.com/support"
        keywords={['CloudDigify support', 'technical support', 'help', 'contact support']}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CloudDigify Support</h1>
            <p className="text-lg text-blue-100 max-w-4xl">
              For support requests, please contact our team through the channels below with relevant issue details.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-gray-700 mb-3">
                For product support, account assistance, billing questions or technical issues, contact{' '}
                <a className="text-blue-700 font-medium" href="mailto:info@clouddigify.com">info@clouddigify.com</a>.
              </p>
              <p className="text-gray-700 mb-3">Phone: +91 7011112386</p>
              <p className="text-gray-700">Business Hours: Monday–Friday, 9:00 AM–6:00 PM IST</p>
            </article>

            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Concerns</h2>
              <p className="text-gray-700 mb-3">
                For suspected security incidents, contact:
              </p>
              <p className="text-gray-700">
                <a className="text-blue-700 font-medium" href="mailto:security@clouddigify.com">security@clouddigify.com</a>
              </p>
            </article>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">When reporting an issue, include</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Company name</li>
                <li>• Your user email</li>
                <li>• Affected area (for example CRM, billing, cloud billing, renewals)</li>
                <li>• Brief issue description</li>
                <li>• Screenshot or error message where appropriate</li>
              </ul>
              <p className="text-sm text-gray-600 mt-6">
                Support requests are handled through our email and phone channels during business hours.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
