import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import { PLATFORM_ROUTES } from '../../../config/platformConfig';

const sections = [
  {
    title: 'Sales & CRM',
    points: [
      'Lead lifecycle management',
      'Assignment and ownership workflows',
      'Follow-up and activity tracking',
      'Bulk imports and structured onboarding',
      'Pipeline and performance reporting',
    ],
  },
  {
    title: 'Billing & Finance',
    points: [
      'Quotations and customer-ready proposals',
      'Invoice generation and payment tracking',
      'GST and TDS handling',
      'Receivables and statement visibility',
      'Credit and debit notes for adjustments',
    ],
  },
  {
    title: 'Cloud & Resale Operations',
    points: [
      'Distributor price list handling',
      'Distributor invoice ingestion',
      'AI-assisted invoice extraction',
      'Reconciliation workflows',
      'Cloud consumption billing with margin visibility',
    ],
  },
  {
    title: 'Subscription & Renewal Operations',
    points: [
      'Subscription lifecycle management',
      'Seat and quantity changes',
      'Plan change tracking',
      'Renewal center workflows',
      'Renewal operations automation support',
    ],
  },
  {
    title: 'Customer Collaboration',
    points: [
      'Customer portal access',
      'Invoice and financial document visibility',
      'Quote review and acceptance',
      'Renewal request workflows',
      'Customer statement visibility',
    ],
  },
  {
    title: 'Organization Administration',
    points: [
      'User onboarding and management',
      'Role-based controls',
      'Module access control',
      'Entitlement-driven packaging',
      'Tenant-level administration controls',
    ],
  },
];

const PlatformFeatures = () => {
  return (
    <>
      <SEO
        title="Platform Features | CloudDigify"
        description="Explore CloudDigify Platform features across CRM, billing, cloud operations, subscription management, customer collaboration, and organization administration."
        canonicalUrl="https://clouddigify.com/platform/features"
        keywords={[
          'CloudDigify Platform features',
          'CRM billing platform',
          'cloud billing software',
          'subscription operations',
          'customer portal software',
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CloudDigify Platform Features</h1>
            <p className="text-lg text-blue-100 max-w-4xl">
              Business outcomes first. CloudDigify Platform helps teams run sales, billing, cloud operations, subscription renewals, and customer collaboration from one product environment.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <article key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.points.map((point) => (
                      <li key={point} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">See how this fits your operating model</h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Request a guided demo focused on your sales, billing, cloud operations, and subscription workflows.
              </p>
              <Link
                to={PLATFORM_ROUTES.demo}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
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

export default PlatformFeatures;
