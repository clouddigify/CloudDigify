import React from 'react';
import IconRenderer from '../IconRenderer';
import { BRAND_COLORS } from '../../utils/brandColors';

const cloudProviders = [
  {
    name: 'AWS',
    fullName: 'Amazon Web Services',
    icon: 'fa-aws',
    description: 'Market-leading cloud platform with extensive service offering'
  },
  {
    name: 'Microsoft Azure',
    fullName: 'Microsoft Azure',
    icon: 'fa-microsoft',
    description: 'Integrated cloud services for enterprise applications'
  },
  {
    name: 'Google Cloud',
    fullName: 'Google Cloud Platform',
    icon: 'fa-google',
    description: 'High-performance infrastructure for modern applications'
  },
  {
    name: 'Oracle Cloud',
    fullName: 'Oracle Cloud Infrastructure',
    icon: 'fa-database',
    description: 'Enterprise-grade cloud solutions with focus on database services'
  },
  {
    name: 'Alibaba Cloud',
    fullName: 'Alibaba Cloud',
    icon: 'fa-alipay',
    description: 'Global cloud services focusing on Asia Pacific markets'
  },
  {
    name: 'DataBricks',
    fullName: 'DataBricks',
    icon: 'fa-cubes',
    description: 'Unified data analytics platform for AI and ML'
  }
];

const cloudServices = [
  {
    category: 'Compute Services',
    services: [
      { name: 'EC2', platform: 'AWS', description: 'Elastic Compute Cloud' },
      { name: 'Azure VM', platform: 'Azure', description: 'Virtual Machines' },
      { name: 'Compute Engine', platform: 'Google Cloud', description: 'Scalable compute services' },
      { name: 'OCI Compute', platform: 'Oracle Cloud', description: 'Oracle compute instances' }
    ]
  },
  {
    category: 'Storage Services',
    services: [
      { name: 'S3', platform: 'AWS', description: 'Simple Storage Service' },
      { name: 'Blob Storage', platform: 'Azure', description: 'Object storage solution' },
      { name: 'Cloud Storage', platform: 'Google Cloud', description: 'Unified object storage' },
      { name: 'Object Storage', platform: 'Oracle Cloud', description: 'Oracle object storage' }
    ]
  },
  {
    category: 'Database Services',
    services: [
      { name: 'RDS', platform: 'AWS', description: 'Relational Database Service' },
      { name: 'Cosmos DB', platform: 'Azure', description: 'Globally distributed database' },
      { name: 'BigQuery', platform: 'Google Cloud', description: 'Serverless data warehouse' },
      { name: 'Oracle Database', platform: 'Oracle Cloud', description: 'Managed database service' }
    ]
  }
];

const IconCard = ({ provider }) => {
  const { name, fullName, icon, description } = provider;
  const brandColor = BRAND_COLORS[name] || BRAND_COLORS[fullName] || '#666';
  
  return (
    <div className="rounded-lg shadow-md bg-white p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 flex items-center justify-center mb-4" style={{ color: brandColor }}>
        <IconRenderer icon={icon} className="w-12 h-12" title={name} />
      </div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: brandColor }}>{name}</h3>
      <p className="text-gray-500 text-center text-sm">{description}</p>
    </div>
  );
};

const ServiceItem = ({ service }) => {
  const { name, platform, description } = service;
  const brandColor = BRAND_COLORS[platform] || '#666';
  
  return (
    <div className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors">
      <div className="w-8 h-8 flex items-center justify-center mr-4" style={{ color: brandColor }}>
        <IconRenderer icon={null} className="w-6 h-6" title={platform} />
      </div>
      <div>
        <div className="flex items-center">
          <h4 className="font-medium">{name}</h4>
          <span className="ml-2 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: brandColor, color: 'white' }}>
            {platform}
          </span>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const BrandedIconsDemo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Branded Cloud Provider Icons</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Visual showcase of cloud provider icons with appropriate branding and colors.
          Each icon is styled according to the provider's brand guidelines.
        </p>
      </div>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Cloud Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cloudProviders.map(provider => (
            <IconCard key={provider.name} provider={provider} />
          ))}
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Cloud Services by Category</h2>
        <div className="space-y-10">
          {cloudServices.map(category => (
            <div key={category.category} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <h3 className="text-xl font-medium">{category.category}</h3>
              </div>
              <div className="divide-y">
                {category.services.map(service => (
                  <ServiceItem key={`${service.platform}-${service.name}`} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Color Palette Reference</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {Object.entries(BRAND_COLORS).map(([brand, color]) => (
            <div key={brand} className="flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-full mb-2 shadow-inner" 
                style={{ backgroundColor: color }}
              />
              <span className="text-sm font-medium">{brand}</span>
              <span className="text-xs text-gray-500">{color}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandedIconsDemo; 