import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressBook, FaFileInvoiceDollar, FaCloud, FaSyncAlt, FaUserShield, FaUsersCog } from 'react-icons/fa';
import SEO from '../../common/SEO';
import { PLATFORM_AUDIENCES, PLATFORM_MODULES, PLATFORM_ROUTES } from '../../../config/platformConfig';

const moduleIcons = [
  <FaAddressBook className="text-2xl text-blue-600" />,
  <FaFileInvoiceDollar className="text-2xl text-blue-600" />,
  <FaCloud className="text-2xl text-blue-600" />,
  <FaSyncAlt className="text-2xl text-blue-600" />,
  <FaUserShield className="text-2xl text-blue-600" />,
  <FaUsersCog className="text-2xl text-blue-600" />,
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

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CloudDigify Platform</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mb-8">
              A commercial SaaS platform for MSPs, CSP partners, cloud resellers, and IT service companies to manage sales, customers, billing, cloud consumption, subscriptions, renewals, and customer collaboration in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={PLATFORM_ROUTES.demo}
                className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
              >
                Request a CloudDigify Platform Demo
              </Link>
              <Link
                to={PLATFORM_ROUTES.features}
                className="px-6 py-3 rounded-lg border border-blue-200 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Platform
              </Link>
            </div>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 mt-14">Platform Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLATFORM_MODULES.map((module, index) => (
                <article
                  key={module.title}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {moduleIcons[index]}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Platform;
