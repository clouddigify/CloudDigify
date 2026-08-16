import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import { PLATFORM_ROUTES } from '../../../config/platformConfig';

const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    recommended: false,
    description:
      'For small cloud resellers and service teams that need CRM, quotations, invoicing and customer operations in one place.',
    includes: [
      'Sales CRM',
      'GST Billing & Receivables',
      'AI Invoice Extraction',
      'Excel Import / Export / Reports',
      'Organization Administration',
      'Custom Team Roles & Permissions',
    ],
    excludes: ['Cloud Billing', 'License & Renewal Management', 'Customer Portal', 'API Access'],
    ctaLabel: 'Request Demo',
  },
  {
    name: 'Professional',
    price: '₹6,999',
    period: '/month',
    recommended: true,
    description:
      'For growing MSPs and CSP partners managing cloud consumption, distributors, subscriptions and renewals.',
    includesLabel: 'Everything in Starter, plus:',
    includes: [
      'Cloud Billing',
      'Distributor Management',
      'Distributor Price Lists',
      'Cloud Consumption Billing',
      'Cloud Spend',
      'License & Renewal Management',
      'Subscription Operations',
      'Renewal Management',
    ],
    excludes: ['Customer Portal', 'API Access by default'],
    ctaLabel: 'Request Demo',
  },
  {
    name: 'Enterprise',
    price: '₹14,999',
    period: '/month',
    recommended: false,
    description:
      'For larger service providers requiring customer self-service, API access and higher-scale operations.',
    includesLabel: 'Everything in Professional, plus:',
    includes: ['Customer Portal', 'API Access', 'Enterprise-scale limits'],
    excludes: [],
    ctaLabel: 'Contact Sales',
  },
];

const matrixRows = [
  { capability: 'CRM', starter: '✓', professional: '✓', enterprise: '✓' },
  { capability: 'GST Billing & Receivables', starter: '✓', professional: '✓', enterprise: '✓' },
  { capability: 'AI Invoice Extraction', starter: '✓', professional: '✓', enterprise: '✓' },
  { capability: 'Excel Import / Export / Reports', starter: '✓', professional: '✓', enterprise: '✓' },
  { capability: 'Custom Team Roles', starter: '✓', professional: '✓', enterprise: '✓' },
  { capability: 'Cloud Billing', starter: '—', professional: '✓', enterprise: '✓' },
  { capability: 'Distributor Operations', starter: '—', professional: '✓', enterprise: '✓' },
  { capability: 'License & Renewal Management', starter: '—', professional: '✓', enterprise: '✓' },
  { capability: 'Customer Portal', starter: '—', professional: '—', enterprise: '✓' },
  { capability: 'API Access', starter: '—', professional: 'Add-on / Contact Sales', enterprise: '✓' },
  { capability: 'Team Members', starter: 'Up to 10', professional: 'Up to 50', enterprise: 'Unlimited' },
  { capability: 'Export Size', starter: 'Up to 5,000 rows', professional: 'Up to 20,000 rows', enterprise: 'Unlimited' },
];

const PlatformPricing = () => {
  return (
    <>
      <SEO
        title="Platform Pricing | CloudDigify"
        description="CloudDigify Platform pricing for MSPs, CSP partners and cloud resellers. Starter ₹2,999/mo, Professional ₹6,999/mo, Enterprise ₹14,999/mo. CRM, GST billing, cloud billing and renewal management."
        canonicalUrl="https://clouddigify.com/platform/pricing"
        keywords={[
          'MSP billing software',
          'CSP billing platform',
          'cloud reseller CRM and billing',
          'subscription renewal management',
          'cloud billing platform pricing',
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="bg-[#101B33] text-white">
          <div className="container-site py-16 md:py-20">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">CloudDigify Platform Pricing</h1>
            <p className="text-lg text-slate-300 max-w-4xl mb-6">
              Simple monthly plans for MSPs, CSP partners, cloud resellers and IT service companies.
              All plans include a 14-day free trial through supervised onboarding.
            </p>
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-slate-200">
              Annual billing: pay for 10 months, get 12 months — equivalent to 2 months free
            </div>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col bg-white rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md ${
                    plan.recommended
                      ? 'border-2 border-[#1E5EFF] md:scale-105 shadow-md'
                      : 'border border-[#E5E7EB]'
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1E5EFF] text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                      Recommended
                    </span>
                  )}
                  <h2 className="text-2xl font-bold text-gray-900 mb-1 mt-2">{plan.name}</h2>
                  <p className="mb-4">
                    <span className="text-3xl font-bold text-[#1E5EFF] tabular-nums">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </p>
                  <p className="text-gray-600 text-sm mb-5">{plan.description}</p>

                  {plan.includesLabel && (
                    <p className="text-sm font-semibold text-gray-900 mb-2">{plan.includesLabel}</p>
                  )}
                  <ul className="space-y-2 text-gray-700 text-sm mb-5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.excludes.length > 0 && (
                    <ul className="space-y-2 text-gray-400 text-sm mb-6">
                      {plan.excludes.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="mr-2">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto">
                    <Link
                      to={PLATFORM_ROUTES.demo}
                      className={`inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg font-semibold transition-colors ${
                        plan.recommended
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'border border-blue-600 text-blue-700 hover:bg-blue-50'
                      }`}
                    >
                      {plan.ctaLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center mt-8">
              Prices exclude applicable taxes. Final pricing may vary based on selected add-ons, usage and commercial terms.
            </p>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Compare Plans</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="py-3.5 px-4 font-semibold text-gray-900">Capability</th>
                    <th className="py-3.5 px-4 font-semibold text-gray-900">Starter</th>
                    <th className="py-3.5 px-4 font-semibold text-blue-700">
                      Professional
                      <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Recommended</span>
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {matrixRows.map((row, index) => (
                    <tr key={row.capability} className={index % 2 === 1 ? 'bg-gray-50/60' : ''}>
                      <td className="py-3 px-4 text-gray-800 font-medium">{row.capability}</td>
                      <td className="py-3 px-4 text-gray-700">{row.starter}</td>
                      <td className="py-3 px-4 text-gray-700 bg-blue-50/40">{row.professional}</td>
                      <td className="py-3 px-4 text-gray-700">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Usage allowances are subject to fair-use and plan policy.
            </p>
          </div>
        </section>

        {/* Trial & Annual */}
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">14-day free trial</h3>
              <p className="text-gray-600 text-sm">
                Every plan starts with a 14-day free trial. Onboarding is guided by our team to set up your
                organization, users and workflows correctly from day one.
              </p>
            </article>
            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual billing</h3>
              <p className="text-gray-600 text-sm">
                Annual customers pay the equivalent of 10 monthly payments and receive 12 months of service —
                two months free compared to monthly billing.
              </p>
            </article>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Not sure which plan fits?</h2>
              <p className="text-gray-600 mb-6">
                Tell us about your team size, customer volume and cloud operations — we will recommend the right edition.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to={PLATFORM_ROUTES.demo}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request a Demo
                </Link>
                <Link
                  to={PLATFORM_ROUTES.demo}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlatformPricing;
