# Service Page Template Guide

This guide explains how to create or update service pages using the shared `ServiceTemplate` component for the CloudDigify website.

## Overview

CloudDigify uses a modular approach for service pages with a central `ServiceTemplate` component that handles the layout, animations, and common UI elements. Each service page supplies its specific content through a `serviceInfo` object.

This approach ensures:
- Consistent UI across all service pages
- Centralized management of layout changes
- Reduced code duplication
- Faster creation of new service pages

## Creating a New Service Page

### Step 1: Create a New File

Create a new file in `src/components/pages/services/` with the name matching your service (e.g., `CloudMigration.jsx`).

### Step 2: Import Required Components

```jsx
import React from 'react';
import ServiceTemplate from '../../templates/ServiceTemplate';
import { FaIcon1, FaIcon2 } from 'react-icons/fa'; // Import icons you'll need
```

### Step 3: Define the Service Content

Create a component that defines a `serviceInfo` object with all the required properties:

```jsx
const YourServiceName = () => {
  const serviceInfo = {
    // Required basic info
    title: "Your Service Title",
    description: "Concise description of the service for the hero section.",
    icon: <FaIcon1 />,
    heroBackground: "from-blue-700 to-indigo-800", // Gradient colors
    
    // Overview section
    overviewTitle: "Custom Overview Title", // Optional, defaults to "About Our [Service]"
    overviewParagraphs: [
      "First paragraph of the overview description.",
      "Second paragraph with more details."
    ],
    
    // Benefits and approach
    benefits: [
      "First benefit of the service",
      "Second benefit of the service",
      // Add more benefits...
    ],
    sidebarTitle: "Our Approach", // Optional
    approach: [
      "First approach item",
      "Second approach item",
      // Add more items...
    ],
    sidebarCta: "Custom CTA text", // Optional
    
    // Features section
    featuresTitle: "Custom Features Title", // Optional
    featuresSubtitle: "Description text for the features section.",
    features: [
      {
        title: "Feature 1",
        description: "Description of feature 1."
      },
      {
        title: "Feature 2",
        description: "Description of feature 2."
      },
      // Add more features...
    ],
    
    // Optional custom middle section with JSX
    middleSection: (
      <>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Custom Section Title</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Custom section description.
          </p>
        </div>
        
        {/* Add any custom JSX here */}
      </>
    ),
    
    // Technologies section
    technologiesTitle: "Custom Technologies Title", // Optional
    technologiesSubtitle: "Description text for technologies section.", // Optional
    technologiesUsed: [
      "Technology 1",
      "Technology 2",
      // Add more technologies...
    ],
    
    // Case study section
    caseStudy: {
      title: "Case Study Title",
      client: "Client Name",
      industry: "Client Industry", // Optional
      challenge: "Description of the challenge the client faced.",
      solution: "Description of the solution provided.",
      results: [
        "First result or benefit achieved",
        "Second result with metrics",
        // Add more results...
      ]
    },
    
    // Call-to-action section
    ctaTitle: "Custom CTA Title", // Optional
    ctaDescription: "Custom CTA description.", // Optional
    ctaButtonText: "Button Text" // Optional
  };

  return <ServiceTemplate serviceInfo={serviceInfo} />;
};

export default YourServiceName;
```

### Step 4: Register the Route

1. Add the new page path to `pagePathMap` in `api/content.js`:

```js
const pagePathMap = {
  // existing entries...
  'services/your-service-slug': 'src/components/pages/services/YourServiceName.jsx',
};
```

2. Add the route to `servicePages` in `src/config/pageConfig.js`:

```js
export const servicePages = {
  // existing entries...
  yourServiceKey: { path: '/services/your-service-slug' },
};
```

## Updating an Existing Service Page

To update an existing page that hasn't been converted to use the template yet:

1. Import the `ServiceTemplate` component
2. Replace the entire JSX structure with a `serviceInfo` object
3. Return `<ServiceTemplate serviceInfo={serviceInfo} />` from your component

## Available Customization Options

The `ServiceTemplate` component supports many customization options:

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Service title (required) |
| `description` | string | Service description (required) |
| `icon` | React element | Icon component (required) |
| `heroBackground` | string | Tailwind gradient classes |
| `overviewTitle` | string | Title for overview section |
| `overviewParagraphs` | string[] | Array of paragraphs for overview |
| `benefits` | string[] | Array of benefits |
| `sidebarTitle` | string | Title for sidebar |
| `approach` | string[] | Array of approach items |
| `sidebarCta` | string | Call-to-action text for sidebar |
| `featuresTitle` | string | Title for features section |
| `featuresSubtitle` | string | Subtitle for features section |
| `features` | Object[] | Array of feature objects with title and description |
| `middleSection` | JSX | Custom JSX for middle section |
| `technologiesTitle` | string | Title for technologies section |
| `technologiesSubtitle` | string | Subtitle for technologies section |
| `technologiesUsed` | string[] | Array of technology names |
| `caseStudy` | Object | Case study details |
| `ctaTitle` | string | Title for CTA section |
| `ctaDescription` | string | Description for CTA section |
| `ctaButtonText` | string | Text for CTA button |
| `ctaText` | string | Text for hero section CTA button |

## Example

See `src/components/pages/services/ArchitectureDesign.jsx` and `src/components/pages/services/DisasterRecovery.jsx` for complete examples of service pages using the template. 