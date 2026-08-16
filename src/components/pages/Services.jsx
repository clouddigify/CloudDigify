import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaCodeBranch, FaShieldAlt, FaBrain, FaChartBar, FaAddressBook } from 'react-icons/fa';
import SEO from '../common/SEO';

const categories = [
  {
    title: 'Cloud & Infrastructure',
    icon: <FaCloud />,
    promise: 'Design, migrate and operate workloads on the major clouds with a practical, cost-aware approach.',
    links: [
      { title: 'AWS', path: '/services/cloud/aws' },
      { title: 'Microsoft Azure', path: '/services/cloud/azure' },
      { title: 'Google Cloud', path: '/services/cloud/googlecloud' },
      { title: 'Oracle Cloud', path: '/services/cloud/oraclecloud' },
      { title: 'Infrastructure Services', path: '/services/infrastructure' },
    ],
  },
  {
    title: 'DevOps & Engineering',
    icon: <FaCodeBranch />,
    promise: 'Ship faster with CI/CD, infrastructure as code, containers and modern engineering practices.',
    links: [
      { title: 'DevOps & CI/CD', path: '/services/devops/cicd' },
      { title: 'Infrastructure as Code', path: '/services/devops/iac' },
      { title: 'Containerization', path: '/services/devops/containerization' },
      { title: 'Serverless Architecture', path: '/services/devops/serverless' },
      { title: 'Quality Engineering', path: '/services/quality-engineering' },
    ],
  },
  {
    title: 'Security',
    icon: <FaShieldAlt />,
    promise: 'Strengthen your security posture with defence resiliency and privacy-focused practices.',
    links: [
      { title: 'Cyber Defence Resiliency', path: '/services/security/cyber-defence' },
      { title: 'Privacy SmartHub', path: '/services/security/privacy-smarthub' },
    ],
  },
  {
    title: 'AI & Automation',
    icon: <FaBrain />,
    promise: 'Apply AI, machine learning and automation where they create measurable business value.',
    links: [
      { title: 'Artificial Intelligence', path: '/services/ai/artificial-intelligence' },
      { title: 'Agentic AI', path: '/services/ai/agentic-ai' },
      { title: 'MLOps', path: '/services/ai/mlops' },
      { title: 'RPA Automations', path: '/services/ai/rpa' },
    ],
  },
  {
    title: 'Consulting & Data',
    icon: <FaChartBar />,
    promise: 'Turn data into decisions with analytics, BI, integration and pragmatic digital strategy.',
    links: [
      { title: 'Consulting Overview', path: '/services/consulting/overview' },
      { title: 'Data Analytics', path: '/services/consulting/data-analytics' },
      { title: 'Business Intelligence', path: '/services/consulting/business-intelligence' },
      { title: 'Digital Strategy', path: '/services/strategy' },
    ],
  },
  {
    title: 'CRM & Business Tools',
    icon: <FaAddressBook />,
    promise: 'Set up and integrate CRM and business productivity tools that fit how your teams work.',
    links: [
      { title: 'Zoho CRM', path: '/services/crm/zoho-crm' },
      { title: 'Zoho Mail', path: '/services/crm/zoho-mail' },
      { title: 'Microsoft Dynamics CRM', path: '/services/crm/microsoft-dynamics-crm' },
      { title: 'Microsoft Mail', path: '/services/crm/microsoft-mail' },
    ],
  },
];

const workSteps = [
  { step: '1', title: 'Understand', text: 'We start with your current environment, constraints and goals — not a template.' },
  { step: '2', title: 'Plan', text: 'A clear, scoped proposal with practical milestones and transparent effort.' },
  { step: '3', title: 'Deliver', text: 'Hands-on implementation with regular checkpoints and knowledge transfer.' },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Cloud & IT Services"
        description="Cloud, DevOps, security, AI, data and CRM services — designed, delivered and supported by CloudDigify."
        canonicalUrl="https://clouddigify.com/services"
        keywords={['cloud services', 'devops', 'security', 'ai', 'consulting', 'crm']}
      />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero */}
        <section className="bg-white border-b border-[#E5E7EB]">
          <div className="container-site py-14 md:py-20">
            <p className="eyebrow">Services</p>
            <h1 className="text-4xl md:text-5xl mb-4 max-w-3xl">Cloud & IT Services</h1>
            <p className="text-lg text-[#4B5563] max-w-[700px] mb-8">
              From cloud migration to AI adoption — practical engineering and consulting services
              delivered by a hands-on team.
            </p>
            <Link to="/contact" className="btn-primary">Talk to an Expert</Link>
          </div>
        </section>

        {/* Category grid */}
        <section className="section">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <article key={cat.title} className="card p-6 flex flex-col">
                  <div className="icon-tile mb-4">{cat.icon}</div>
                  <h2 className="text-lg font-semibold text-[#111827] mb-2">{cat.title}</h2>
                  <p className="text-sm text-[#4B5563] mb-4">{cat.promise}</p>
                  <ul className="space-y-1.5 mb-4">
                    {cat.links.map((link) => (
                      <li key={link.path}>
                        <Link to={link.path} className="text-sm text-[#1E5EFF] hover:text-[#1848CC] hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="section section-tinted">
          <div className="container-site">
            <h2 className="section-heading">How we work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {workSteps.map((s) => (
                <div key={s.step} className="card p-6">
                  <div className="icon-tile mb-4 font-bold">{s.step}</div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-1.5">{s.title}</h3>
                  <p className="text-sm text-[#4B5563]">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-navy">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Not sure where to start?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Tell us what you're trying to achieve and we'll recommend a practical path.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-[#101B33] hover:bg-blue-50">
              Talk to an Expert
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
