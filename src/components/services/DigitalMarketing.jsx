import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaSearch, FaChartLine, FaUsers, FaGlobe, FaEnvelopeOpenText, FaLightbulb, FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle, FaTrophy } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../common/ServiceInquiryForm';
import SEO from '../common/SEO';

const DigitalMarketing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Digital Marketing');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openInquiryForm = (serviceType) => {
    setInquiryType(`Digital Marketing - ${serviceType}`);
    setShowInquiryForm(true);
  };

  const MarketingVisual = () => (
    <div className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-2xl mt-8">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <FaBullhorn className="text-6xl text-pink-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Our Digital Marketing Services</h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'SEO', icon: FaSearch, color: '#3B82F6' },
            { name: 'SEM', icon: FaGoogle, color: '#10B981' },
            { name: 'Social Media', icon: FaUsers, color: '#F59E0B' },
            { name: 'Content', icon: FaEnvelopeOpenText, color: '#EC4899' },
            { name: 'Analytics', icon: FaChartLine, color: '#8B5CF6' },
            { name: 'Branding', icon: FaLightbulb, color: '#2563EB' },
          ].map((layer, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 p-4 rounded-lg border flex flex-col items-center text-center transition-transform transition-shadow duration-200 hover:shadow-lg hover:scale-105 cursor-pointer"
              style={{ borderColor: layer.color }}
            >
              <layer.icon className="text-2xl mb-2" style={{ color: layer.color }} />
              <div className="text-[#333] font-bold text-sm">{layer.name}</div>
            </div>
          ))}
        </div>
        <div
          className="mt-8 bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 rounded-full shadow-md text-white font-semibold cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-200"
          onClick={() => openInquiryForm('Consultation')}
          aria-label="Open consultation form"
          tabIndex={0}
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') openInquiryForm('Consultation'); }}
        >
          Grow Your Brand Online
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title="Digital Marketing Services | CloudDigify"
        description="Amplify your brand's reach and drive measurable results with our full-spectrum digital marketing solutions: SEO, SEM, Social Media, Content, Analytics, and more."
        canonicalUrl="https://clouddigify.com/services/digital-marketing"
        keywords={['digital marketing', 'SEO', 'SEM', 'social media', 'content marketing', 'analytics', 'CloudDigify']}
      />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-yellow-100">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-yellow-500">
            {[...Array(8)].map((_, i) => (
              <motion.div key={i} className="absolute flex items-center justify-center" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ y: [0, Math.random() * 60 - 30], x: [0, Math.random() * 60 - 30], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: Math.random() * 10 + 15, repeat: Infinity, repeatType: "reverse" }}>
                <FaBullhorn className="text-white opacity-20" style={{ fontSize: `${Math.random() * 30 + 20}px` }} />
              </motion.div>
            ))}
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle].map((Icon, i) => (
              <motion.div key={`icon-${i}`} className="absolute text-white opacity-10" style={{ fontSize: `${Math.random() * 30 + 25}px`, left: `${(i * 12) + Math.random() * 10}%`, top: `${Math.random() * 80}%` }} animate={{ y: [0, Math.random() * 40 - 20], rotate: [0, Math.random() * 20 - 10] }} transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                <Icon />
              </motion.div>
            ))}
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div className="text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <motion.div className="text-4xl mb-6 mx-auto" initial={{ scale: 0 }} animate={{ scale: 1, rotate: [0, 15, 0] }} transition={{ duration: 0.8, delay: 0.3 }}>
                <FaBullhorn className="text-white text-6xl inline-block" />
              </motion.div>
              <motion.h1 className="text-4xl sm:text-5xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                Digital Marketing Services
              </motion.h1>
              <motion.p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                Amplify your brand's reach and drive measurable results with our full-spectrum digital marketing solutions.
              </motion.p>
              <motion.button onClick={() => openInquiryForm('Consultation')} className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg flex items-center mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get Started <FaArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,100 C240,0 480,0 720,0 C960,0 1200,0 1440,0 L1440,100 L0,100 Z" fill="white" />
            </svg>
          </div>
        </section>
        {/* Visual Section */}
        <section className="py-8 bg-white bg-opacity-60">
          <MarketingVisual />
        </section>
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.4 }} className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose Our Digital Marketing Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: FaChartLine, title: "Data-Driven Results", description: "We leverage analytics and insights to optimize campaigns and maximize ROI." },
                { icon: FaUsers, title: "Audience Targeting", description: "Reach the right people at the right time with precision targeting across channels." },
                { icon: FaLightbulb, title: "Creative Excellence", description: "Our team crafts compelling content and visuals that engage and convert." }
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.3, delay: index * 0.1 }} className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <feature.icon className="text-4xl text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <motion.h2 ref={ref} initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.8 }} className="text-4xl font-bold text-gray-900 text-center mb-16">
              Our Digital Marketing Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FaSearch, title: "SEO (Search Engine Optimization)", description: "Improve your website's visibility and ranking on search engines to attract organic traffic." },
                { icon: FaGoogle, title: "SEM (Search Engine Marketing)", description: "Drive targeted traffic and conversions with paid search campaigns (Google Ads, Bing Ads)." },
                { icon: FaFacebook, title: "Social Media Marketing", description: "Engage your audience and grow your brand on Facebook, Instagram, LinkedIn, and more." },
                { icon: FaEnvelopeOpenText, title: "Content Marketing", description: "Build authority and trust with high-quality blogs, articles, and multimedia content." },
                { icon: FaChartLine, title: "Analytics & Reporting", description: "Track, measure, and optimize your campaigns with actionable insights and dashboards." },
                { icon: FaGlobe, title: "Online Reputation Management", description: "Protect and enhance your brand's reputation across digital channels." }
              ].map((feature, index) => (
                <motion.div key={index} initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <feature.icon className="text-4xl text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} className="text-4xl font-bold text-gray-900 text-center mb-16">
              Business Benefits
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Increased Traffic", value: "+120%", description: "Boost in website visitors through organic and paid channels." },
                { title: "Lead Generation", value: "+80%", description: "More qualified leads and inquiries for your business." },
                { title: "Brand Awareness", value: "+150%", description: "Greater visibility and recognition across digital platforms." },
                { title: "ROI Growth", value: "3x", description: "Higher return on marketing investment with data-driven strategies." }
              ].map((benefit, index) => (
                <motion.div key={index} initial={{ scale: 0.9, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                  <p className="text-pink-100">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-yellow-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Grow Your Business Online?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Partner with us for innovative digital marketing solutions that deliver real business results.
            </p>
            <button className="bg-white text-pink-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg" onClick={() => openInquiryForm('Marketing Consultation')}>
              Request a Free Consultation
            </button>
          </div>
        </section>
        {/* Service Inquiry Form Modal */}
        {showInquiryForm && (
          <ServiceInquiryForm isOpen={showInquiryForm} onClose={() => setShowInquiryForm(false)} serviceName={inquiryType} />
        )}
      </div>
    </>
  );
};

export default DigitalMarketing; 