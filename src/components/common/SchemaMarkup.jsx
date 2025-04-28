import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({ type, data }) => {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name,
          url: data.url,
          logo: data.logo,
          sameAs: data.socialLinks,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.phone,
            contactType: 'customer service',
            email: data.email,
            areaServed: data.areaServed,
            availableLanguage: data.languages
          }
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name,
          description: data.description,
          provider: {
            '@type': 'Organization',
            name: data.providerName,
            url: data.providerUrl
          },
          areaServed: data.areaServed,
          serviceType: data.serviceType,
          offers: {
            '@type': 'Offer',
            price: data.price,
            priceCurrency: data.priceCurrency,
            availability: data.availability
          }
        };

      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline,
          description: data.description,
          image: data.image,
          datePublished: data.datePublished,
          dateModified: data.dateModified,
          author: {
            '@type': 'Organization',
            name: data.authorName,
            url: data.authorUrl
          },
          publisher: {
            '@type': 'Organization',
            name: data.publisherName,
            logo: {
              '@type': 'ImageObject',
              url: data.publisherLogo
            }
          }
        };

      case 'BreadcrumbList':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@id': item.url,
              name: item.name
            }
          }))
        };

      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup; 