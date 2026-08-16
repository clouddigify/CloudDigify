import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressBook, FaFileInvoiceDollar, FaCloud, FaSyncAlt, FaUserShield, FaUsersCog } from 'react-icons/fa';
import SEO from '../../common/SEO';
import { PLATFORM_ROUTES } from '../../../config/platformConfig';

const sections = [
  {
    title: 'Sales & CRM',
    icon: <FaAddressBook className="text-2xl" />,
    intro: 'Capture, qualify and convert leads with structured sales workflows.',
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
    icon: <FaFileInvoiceDollar className="text-2xl" />,
    intro: 'Quote, invoice and collect with GST-ready financial documents.',
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
    icon: <FaCloud className="text-2xl" />,
    intro: 'Turn distributor invoices and cloud consumption into clean customer billing.',
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
    icon: <FaSyncAlt className="text-2xl" />,
    intro: 'Stay ahead of every renewal, seat change and plan change.',
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
    icon: <FaUserShield className="text-2xl" />,
    intro: 'Give customers secure self-service access to their documents and renewals.',
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
    icon: <FaUsersCog className="text-2xl" />,
    intro: 'Control exactly who can see and do what across your team.',
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

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white">
          <div className="container-site py-16 md:py-20">
            <p className="inline-flex items-center text-xs font-semibold tracking-wider uppercase bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 mb-6 text-blue-100">
              CloudDigify Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Platform Features</h1>
            <p className="text-lg text-blue-100 max-w-[700px]">
              Business outcomes first — sales, billing, cloud operations, renewals and customer collaboration in one product environment.
            </p>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={section.title} className={index % 2 === 1 ? 'section section-tinted' : 'section'}>
            <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="icon-tile mb-4">{section.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{section.title}</h2>
                <p className="text-slate-600 max-w-md">{section.intro}</p>
              </div>
              <ul className="space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start text-slate-700">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="pb-16 pt-4">
          <div className="container-site">
            <div className="card p-8 md:p-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">See how this fits your operating model</h2>
              <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
                Request a guided demo focused on your sales, billing, cloud operations, and subscription workflows.
              </p>
              <Link to={PLATFORM_ROUTES.demo} className="btn-primary">
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
