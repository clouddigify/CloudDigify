import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  schema,
  keywords = [],
  author = 'CloudDigify',
  twitterHandle = '@clouddigify'
}) => {
  const location = useLocation();
  const siteTitle = 'CloudDigify';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultImage = 'https://clouddigify.com/images/logo.png';
  
  // Generate canonical URL if not provided
  const baseUrl = 'https://clouddigify.com';
  const calculatedCanonicalUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  // Default schema if none provided
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": calculatedCanonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": siteTitle,
      "logo": {
        "@type": "ImageObject",
        "url": "https://clouddigify.com/images/logo.png"
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={calculatedCanonicalUrl} />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="max-age=86400, public" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={calculatedCanonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO; 