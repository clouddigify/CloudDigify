// Consent-gated analytics loader. GA4/GTM load only after explicit user acceptance.
const CONSENT_KEY = 'clouddigify_cookie_consent_v1';
const GA_ID = 'G-ZRMKN7K7BB';
const GTM_ID = 'GTM-NZ8LCJ2J';

let analyticsLoaded = false;

export const getAnalyticsConsent = () => {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === 'accepted' || value === 'rejected') return value;
    return null;
  } catch {
    return null;
  }
};

export const setAnalyticsConsent = (value) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage unavailable — treat as no persisted choice.
  }
};

export const resetAnalyticsConsent = () => {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignore
  }
};

export const loadAnalytics = () => {
  if (analyticsLoaded || typeof document === 'undefined') return;
  if (document.getElementById('cd-ga4-script')) {
    analyticsLoaded = true;
    return;
  }
  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);

  const gaScript = document.createElement('script');
  gaScript.id = 'cd-ga4-script';
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const gtmScript = document.createElement('script');
  gtmScript.id = 'cd-gtm-script';
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtmScript);
};

export const initAnalyticsFromStoredConsent = () => {
  if (getAnalyticsConsent() === 'accepted') {
    loadAnalytics();
  }
};

export const trackPageview = (path) => {
  if (getAnalyticsConsent() !== 'accepted') return;
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('config', GA_ID, { page_path: path });
};
