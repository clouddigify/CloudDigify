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

      <div className="min-h-screen bg-white">
        <section className="bg-[#101B33] text-white">
          <div className="container-site py-16 md:py-20">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">How can we help?</h1>
            <p className="text-lg text-slate-300 max-w-[700px]">
              Support for the CloudDigify Platform and our cloud services — Monday to Friday, 9:00 AM to 6:00 PM IST.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-site grid grid-cols-1 md:grid-cols-3 gap-5">
            <article className="card p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Product Support</h2>
              <p className="text-slate-600 text-sm mb-4">
                Questions or issues with the CloudDigify Platform — CRM, billing, cloud billing, subscriptions or the customer portal.
              </p>
              <a className="btn-tertiary" href="mailto:info@clouddigify.com">info@clouddigify.com →</a>
            </article>
            <article className="card p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Billing & Account</h2>
              <p className="text-slate-600 text-sm mb-4">
                Invoices, subscription changes, plan questions and account administration.
              </p>
              <a className="btn-tertiary" href="mailto:info@clouddigify.com">info@clouddigify.com →</a>
            </article>
            <article className="card p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Security</h2>
              <p className="text-slate-600 text-sm mb-4">
                Report a suspected security issue or vulnerability to our security team.
              </p>
              <a className="btn-tertiary" href="mailto:security@clouddigify.com">security@clouddigify.com →</a>
            </article>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-site max-w-5xl">
            <article className="card p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">When reporting an issue, include</h2>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Company name</li>
                <li>• Your user email</li>
                <li>• Affected area (for example CRM, billing, cloud billing, renewals)</li>
                <li>• Brief issue description</li>
                <li>• Screenshot or error message where appropriate</li>
              </ul>
              <p className="text-sm text-slate-500 mt-6">
                Phone: +91 7011112386 · Business hours: Monday–Friday, 9:00 AM–6:00 PM IST. Support requests are handled through our email and phone channels during business hours.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
