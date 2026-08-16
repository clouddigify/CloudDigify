import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import { PLATFORM_EDITIONS, PLATFORM_ROUTES } from '../../../config/platformConfig';

const editionDetails = {
  Starter: [
    'Designed for early-stage operational standardization',
    'Core CRM and billing foundations',
    'Entry-level subscription and customer collaboration workflows',
  ],
  Professional: [
    'Built for growing teams handling multi-process operations',
    'Expanded billing, cloud consumption, and reconciliation workflows',
    'Broader subscription and renewal operations controls',
  ],
  Enterprise: [
    'Designed for larger, multi-team business operations',
    'Advanced role and access controls for structured governance',
    'Deeper operational flexibility across modules and workflows',
  ],
};

const PlatformPricing = () => {
  return (
    <>
      <SEO
        title="Platform Pricing | CloudDigify"
        description="Explore CloudDigify Platform editions: Starter, Professional, and Enterprise. Request a demo or connect with sales for commercial details."
        canonicalUrl="https://clouddigify.com/platform/pricing"
        keywords={[
          'CloudDigify Platform pricing',
          'Starter Professional Enterprise',
          'SaaS pricing for MSP',
          'CSP platform pricing',
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CloudDigify Platform Editions</h1>
            <p className="text-lg text-blue-100 max-w-4xl">
              CloudDigify Platform is offered in Starter, Professional, and Enterprise editions.
              Commercial pricing is shared through a guided sales conversation to align package scope with your business model.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PLATFORM_EDITIONS.map((edition) => (
                <article
                  key={edition}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{edition}</h2>
                  <p className="text-blue-700 font-semibold mb-4">Talk to Sales</p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    {editionDetails[edition].map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={PLATFORM_ROUTES.demo}
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Demo
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need package guidance?</h2>
              <p className="text-gray-600 mb-6">
                Share your current operating model and we will map the right edition to your team size,
                customer volume, and process complexity.
              </p>
              <Link
                to={PLATFORM_ROUTES.demo}
                className="inline-flex items-center px-6 py-3 rounded-lg border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
              >
                Request a CloudDigify Platform Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlatformPricing;
