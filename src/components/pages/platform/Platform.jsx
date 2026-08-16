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

// Real product screenshots only — set true once files exist in public/images/platform/
const SHOW_SCREENSHOTS = false;
const screenshots = [
  { src: '/images/platform/platform-crm.webp', alt: 'CloudDigify Platform CRM showing lead and customer management', caption: 'CRM' },
  { src: '/images/platform/platform-billing.webp', alt: 'CloudDigify Platform invoice and billing view with GST details', caption: 'Billing' },
  { src: '/images/platform/platform-renewals.webp', alt: 'CloudDigify Platform subscription and renewal management', caption: 'Renewals' },
];

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
        <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white">
          <div className="container-site py-16 md:py-24">
            <p className="inline-flex items-center text-xs font-semibold tracking-wider uppercase bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 mb-6 text-blue-100">
              CloudDigify Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl leading-tight">
              Run sales, billing and cloud operations in one product.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-[700px] mb-8">
              A commercial SaaS platform for MSPs, CSP partners, cloud resellers and IT service companies — CRM, billing, cloud consumption, subscriptions, renewals and customer collaboration in one place.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-4">
              <Link to={PLATFORM_ROUTES.demo} className="btn-primary bg-white text-blue-700 hover:bg-blue-50">
                Request Demo
              </Link>
              <Link to={PLATFORM_ROUTES.pricing} className="btn-secondary border-white/60 text-white bg-transparent hover:bg-white/10">
                View Pricing
              </Link>
            </div>
            <p className="text-sm text-blue-200">14-day supervised trial · guided onboarding by our team</p>
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

        <section className="pb-16">
          <div className="container-site">
            <h2 className="section-heading mt-14 mb-8">Platform Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PLATFORM_MODULES.map((module, index) => (
                <article
                  key={module.title}
                  className="card p-6 hover:shadow-md transition-shadow"
                >
                  <div className="icon-tile mb-4">
                    {moduleIcons[index]}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1.5">{module.title}</h3>
                  <p className="text-slate-600 text-sm">{module.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {SHOW_SCREENSHOTS && (
          <section className="section section-tinted">
            <div className="container-site">
              <h2 className="section-heading text-center mb-10">See the Platform</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {screenshots.map((shot) => (
                  <figure key={shot.caption} className="card overflow-hidden">
                    <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                    <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
                    <figcaption className="px-4 py-3 text-sm font-medium text-slate-700">{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

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
        <section className="section bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See CloudDigify in action</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a guided walkthrough tailored to your sales, billing and cloud operations.
            </p>
            <Link to={PLATFORM_ROUTES.demo} className="btn-primary bg-white text-blue-700 hover:bg-blue-50">
              Request a CloudDigify Platform Demo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Platform;
