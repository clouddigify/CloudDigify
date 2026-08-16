export const PLATFORM_ROUTES = {
  landing: '/platform',
  features: '/platform/features',
  pricing: '/platform/pricing',
  demo: '/platform/demo',
};

// Centralized app-login destination for easy cutover when app subdomain is finalized.
const configuredLoginUrl =
  import.meta.env.VITE_PLATFORM_LOGIN_URL ||
  import.meta.env.VITE_APP_LOGIN_URL ||
  'https://app.clouddigify.com/login';

export const PLATFORM_LOGIN_URL = configuredLoginUrl;

export const PLATFORM_AUDIENCES = [
  'MSPs',
  'Microsoft CSP Partners',
  'Cloud Solution Providers',
  'Cloud Resellers',
  'IT Service Companies',
];

export const PLATFORM_MODULES = [
  {
    title: 'CRM',
    description:
      'Lead management, assignments, activities, follow-ups, imports, and reporting in one workspace.',
  },
  {
    title: 'Billing',
    description:
      'Quotations, invoices, payments, GST/TDS handling, receivables, statements, and financial documents.',
  },
  {
    title: 'Cloud Billing',
    description:
      'Cloud consumption tracking, distributor invoice reconciliation, margin visibility, and customer cloud spend control.',
  },
  {
    title: 'Subscription & License Operations',
    description:
      'Subscription lifecycle, seat and plan changes, renewals, and day-to-day license operations.',
  },
  {
    title: 'Customer Portal',
    description:
      'A secure customer-facing experience for invoices, quotes, subscriptions, cloud spend, statements, and renewals.',
  },
  {
    title: 'Organization & Access Management',
    description:
      'Tenant administration, users, roles, entitlements, and controlled module access.',
  },
];

export const PLATFORM_EDITIONS = ['Starter', 'Professional', 'Enterprise'];