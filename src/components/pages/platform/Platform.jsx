import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressBook, FaFileInvoiceDollar, FaCloud, FaSyncAlt, FaUserShield, FaUsersCog } from 'react-icons/fa';
import SEO from '../../common/SEO';
import { PLATFORM_AUDIENCES, PLATFORM_MODULES, PLATFORM_ROUTES } from '../../../config/platformConfig';

const moduleIcons = [
  <FaAddressBook className="text-2xl" />,
  <FaFileInvoiceDollar className="text-2xl" />,
  <FaCloud className="text-2xl" />,
  <FaSyncAlt className="text-2xl" />,
  <FaUserShield className="text-2xl" />,
  <FaUsersCog className="text-2xl" />,
];

// Real product screenshots (sanitized, fictional demo data) — set false to fall back to abstract motifs
const SHOW_SCREENSHOTS = true;
// Maps PLATFORM_MODULES index -> screenshot; modules without one keep the abstract motif
const moduleScreenshots = {
  0: { src: '/images/platform/platform-crm.webp', alt: 'CloudDigify CRM leads workspace showing lead status, ownership and follow-up management' },
  1: { src: '/images/platform/platform-billing.webp', alt: 'CloudDigify billing invoice workspace showing GST calculation, line items and totals' },
  3: { src: '/images/platform/platform-renewals.webp', alt: 'CloudDigify renewals center showing upcoming subscription renewals and seat details' },
};

// Plan availability per verified feature matrix
const modulePlans = ['All plans', 'All plans', 'Professional+', 'Professional+', 'Enterprise', 'All plans'];

// Capabilities sourced from module descriptions / features page — no new claims
const moduleCapabilities = [
  ['Lead capture & assignment', 'Activities & follow-ups', 'Bulk lead imports', 'Sales reporting'],
  ['Quotations & invoices', 'GST/TDS handling', 'Payments & receivables', 'Customer statements'],
  ['Cloud consumption tracking', 'Distributor invoice reconciliation', 'Margin visibility', 'Customer cloud spend control'],
  ['Subscription lifecycle', 'Seat & plan changes', 'Renewal tracking', 'Day-to-day license operations'],
  ['Invoices & quotes access', 'Subscription & renewal visibility', 'Cloud spend view', 'Account statements'],
  ['Tenant administration', 'Users & roles', 'Entitlements', 'Controlled module access'],
];

const ScreenshotFigure = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    width="1600"
    height="1000"
    loading="lazy"
    decoding="async"
    className="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm"
  />
);

// Safe abstract UI fragment (no fake customer data) — replaced by real screenshot per module later
const ModuleMotif = ({ tag }) => (
  <div className="card overflow-hidden" aria-hidden="true">
    <div className="bg-[#F7F9FC] border-b border-[#E5E7EB] px-4 py-2 flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
      <span className="ml-2 text-[11px] font-semibold tracking-wider uppercase text-[#6B7280]">{tag}</span>
    </div>
    <div className="p-4 space-y-2.5">
      <div className="flex gap-2">
        <span className="h-2.5 rounded bg-[#EEF4FF] w-1/3" />
        <span className="h-2.5 rounded bg-[#F7F9FC] w-1/4" />
        <span className="h-2.5 rounded bg-[#F7F9FC] w-1/5" />
      </div>
      {[0, 1, 2, 3].map((row) => (
        <div key={row} className="flex items-center gap-2">
          <span className="h-2 rounded bg-[#E5E7EB] w-2/5" />
          <span className="h-2 rounded bg-[#F7F9FC] w-1/5" />
          <span className="h-2 rounded bg-[#F7F9FC] w-1/6" />
          <span className="ml-auto h-4 w-14 rounded-full bg-[#EEF4FF]" />
        </div>
      ))}
    </div>
  </div>
);

const Platform = () => {
  return (
    <>
      <SEO
        title="CloudDigify Platform"
        description="CloudDigify Platform is a commercial SaaS platform for MSPs, CSP partners, cloud resellers, and IT service companies to manage sales, billing, cloud operations, subscriptions, and customer collaboration."
        canonicalUrl="https://clouddigify.com/platform"
        keywords={[
          'CloudDigify Platform',
          'MSP platform',
          'CSP partner software',
          'cloud reseller platform',
          'CRM billing cloud platform',
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="bg-[#101B33] text-white">
          <div className="container-site py-16 md:py-24">
            <p className="eyebrow bg-white/10 border border-white/20 text-[#22D3EE]">
              CloudDigify Platform
            </p>
            <h1 className="text-4xl md:text-5xl mb-5 max-w-3xl text-white">
              Run sales, billing and cloud operations in one product.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-[700px] mb-8">
              A commercial SaaS platform for MSPs, CSP partners, cloud resellers and IT service companies — CRM, billing, cloud consumption, subscriptions, renewals and customer collaboration in one place.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-4">
              <Link to={PLATFORM_ROUTES.demo} className="btn-primary bg-white text-[#101B33] hover:bg-blue-50">
                Request Demo
              </Link>
              <Link to={PLATFORM_ROUTES.pricing} className="btn-secondary border-white/50 text-white bg-transparent hover:bg-white/10">
                View Pricing
              </Link>
            </div>
            <p className="text-sm text-slate-400">14-day supervised trial · guided onboarding by our team</p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Built for modern cloud-focused businesses</h2>
            <div className="flex flex-wrap gap-3">
              {PLATFORM_AUDIENCES.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">How CloudDigify Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Onboard</h3>
                <p className="text-gray-600 text-sm">Set up your organization, users, customers, subscriptions and access.</p>
              </article>
              <article className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Operate</h3>
                <p className="text-gray-600 text-sm">Manage CRM, quotations, billing, cloud operations and customer activity.</p>
              </article>
              <article className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Renew & Grow</h3>
                <p className="text-gray-600 text-sm">Track subscriptions, renewals, seats, customer requests and recurring operations.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="pb-4">
          <div className="container-site">
            <h2 className="section-heading mt-14 mb-10">Platform Modules</h2>
            <div className="space-y-12 md:space-y-16">
              {PLATFORM_MODULES.map((module, index) => (
                <article
                  key={module.title}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                >
                  <div className="md:[direction:ltr]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-tile">{moduleIcons[index]}</div>
                      <span className="plan-chip">{modulePlans[index]}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#111827] mb-2">{module.title}</h3>
                    <p className="text-[#4B5563] mb-4">{module.description}</p>
                    <ul className="space-y-1.5">
                      {moduleCapabilities[index].map((cap) => (
                        <li key={cap} className="flex items-start text-sm text-[#4B5563]">
                          <span className="text-[#059669] mr-2 mt-0.5" aria-hidden="true">✓</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:[direction:ltr]">
                    {SHOW_SCREENSHOTS && moduleScreenshots[index] ? (
                      <ScreenshotFigure {...moduleScreenshots[index]} />
                    ) : (
                      <ModuleMotif tag={module.title} />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Security & trust */}
        <section className="section section-tinted mt-14">
          <div className="container-site">
            <h2 className="section-heading">Built with practical security controls</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {['Tenant isolation', 'Role-based access', 'Entitlement enforcement', 'Audit logging', 'GST-ready billing', 'Backup & recovery'].map((item) => (
                <div key={item} className="card px-4 py-3.5 text-sm font-medium text-[#111827]">
                  ✓ <span className="ml-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="section section-brand-tint border-t border-slate-100">
          <div className="container-site text-center">
            <h2 className="section-heading">Simple plans that grow with you</h2>
            <p className="section-sub mx-auto mb-8">
              Starter, Professional and Enterprise editions — with annual billing that gives you 12 months for the price of 10.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={PLATFORM_ROUTES.pricing} className="btn-primary">View Pricing</Link>
              <Link to={PLATFORM_ROUTES.features} className="btn-secondary">Explore Features</Link>
            </div>
          </div>
        </section>

        {/* Final demo CTA */}
        <section className="section section-navy">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See CloudDigify in action</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a guided walkthrough tailored to your sales, billing and cloud operations.
            </p>
            <Link to={PLATFORM_ROUTES.demo} className="btn-primary bg-white text-[#101B33] hover:bg-blue-50">
              Request a CloudDigify Platform Demo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Platform;
