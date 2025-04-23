import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChartLine, FaShieldAlt, FaCogs, FaServer, FaArrowRight } from 'react-icons/fa';

// Modern animation variants
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Grid pattern SVG as a base64 string
const gridPattern = `data:image/svg+xml;base64,${btoa(`
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5"/>
  </pattern>
  <rect width="100" height="100" fill="url(#grid)" />
</svg>
`)}`;

// Unified template component for creating various types of pages
const PageTemplate = ({ pageInfo, pageType = 'service' }) => {
  // Helper to determine the page type
  const isService = pageType === 'service';
  const isIndustry = pageType === 'industry';
  const isContent = pageType === 'content';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...pageTransition}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section with modern gradient and glass effect */}
        <section className={`relative overflow-hidden`}>
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-r ${pageInfo?.heroBackground || 'from-blue-600 via-indigo-600 to-blue-800'} opacity-90`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `url("${gridPattern}")`,
              backgroundSize: '20px 20px'
            }} 
          />
          
          <div className="relative py-24 px-6">
            <motion.div 
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-3xl backdrop-blur-sm bg-white/10 p-8 rounded-2xl">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {isIndustry ? `${pageInfo?.title} Solutions` : pageInfo?.title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/90 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {pageInfo?.description}
                </motion.p>
                {pageInfo?.showCta !== false && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Link
                      to={pageInfo?.ctaLink || "/contact"}
                      className="group inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
                    >
                      <span className="mr-2">
                        {pageInfo?.ctaText || (isService ? "Request a Consultation" : isContent ? pageInfo?.defaultCtaText || "Learn More" : "Schedule a Consultation")}
                      </span>
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section with glass morphism */}
        <section className="py-20 px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <motion.div 
                variants={itemVariants} 
                className="md:w-2/3 backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {pageInfo.overviewTitle || (
                    isService ? "Overview" : 
                    isContent ? pageInfo.defaultOverviewTitle || "Overview" :
                    `${pageInfo.title} Industry Overview`
                  )}
                </h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {pageInfo.overviewDescription1}
                </p>
                <p className="text-gray-700 mb-10 text-lg leading-relaxed">
                  {pageInfo.overviewDescription2}
                </p>
                
                {pageInfo.showBenefits !== false && (
                  <>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                      {pageInfo.benefitsTitle || (
                        isService ? "Key Benefits" : 
                        isContent ? pageInfo.defaultBenefitsTitle || "Key Points" : 
                        "Industry Challenges We Solve"
                      )}
                    </h3>
                    <ul className="space-y-4">
                      {(isService ? pageInfo.benefits : isContent ? pageInfo.benefits : pageInfo.challenges)?.map((item, index) => (
                        <motion.li 
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: index * 0.1 }
                            }
                          }}
                          className="flex items-start group"
                        >
                          <span className="text-green-500 mr-3 transform group-hover:scale-110 transition-transform">
                            <FaCheckCircle className="mt-1 h-5 w-5" />
                          </span>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
              
              {pageInfo.showSidebar !== false && (
                <motion.div 
                  variants={itemVariants} 
                  className="md:w-1/3 backdrop-blur-sm bg-gradient-to-br from-blue-50 to-indigo-50/50 p-8 rounded-2xl shadow-xl"
                >
                  {(isService || isContent) && pageInfo.icon && (
                    <motion.div 
                      className="text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {pageInfo.icon}
                    </motion.div>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                    {pageInfo.sidebarTitle || (
                      isService ? "Our Approach" : 
                      isContent ? pageInfo.defaultSidebarTitle || "Additional Information" :
                      `Why Choose Us for ${pageInfo.title}`
                    )}
                  </h3>
                  <ul className="space-y-4">
                    {pageInfo.approachPoints?.map((point, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: { delay: index * 0.1 }
                          }
                        }}
                        className="flex items-start group"
                      >
                        <span className="text-green-500 mr-3 transform group-hover:scale-110 transition-transform">✓</span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {pageInfo.showSecondaryCta !== false && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-8"
                    >
                      <Link 
                        to={pageInfo.secondaryCtaLink || "/contact"}
                        className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {pageInfo.secondaryCta || (
                          isService ? "Get Started" : 
                          isContent ? pageInfo.defaultSecondaryCta || "Learn More" :
                          "Schedule a Consultation"
                        )}
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </section>

        {/* Features Section with modern cards */}
        {pageInfo.showFeatures !== false && (
          <section className="py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50 backdrop-blur-3xl" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto relative z-10"
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {isService 
                    ? (pageInfo.featuresTitle || "Our Services")
                    : isContent
                    ? (pageInfo.featuresTitle || pageInfo.defaultFeaturesTitle || "Key Features")
                    : (pageInfo.solutionsTitle || `Our ${pageInfo.title} Solutions`)}
                </h2>
                {(isService || isContent) && pageInfo.showFeaturesDescription !== false && (
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    {pageInfo.featuresDescription || (
                      isService 
                        ? "Comprehensive solutions tailored to your specific requirements."
                        : pageInfo.defaultFeaturesDescription || "Important information you need to know"
                    )}
                  </p>
                )}
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(isService ? pageInfo.features : isContent ? pageInfo.features : pageInfo.solutions)?.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
                  >
                    {(isIndustry || (isContent && item.icon)) && (
                      <motion.div 
                        className="mb-6 text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.icon}
                      </motion.div>
                    )}
                    <h3 className={`text-${isIndustry ? '2xl' : 'xl'} font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    {(isIndustry || (isContent && item.features)) && item.features && (
                      <>
                        <h4 className="font-medium text-gray-800 mb-4">Key Features:</h4>
                        <ul className="space-y-3">
                          {item.features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start group"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { delay: idx * 0.1 }
                                }
                              }}
                            >
                              <span className="text-green-500 mr-3 transform group-hover:scale-110 transition-transform">✓</span>
                              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Additional Sections with consistent styling */}
        {pageInfo.additionalSections?.map((section, index) => (
          <section key={index} className={`py-20 px-8 relative overflow-hidden ${index % 2 === 0 ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto relative z-10"
            >
              {section.content}
            </motion.div>
          </section>
        ))}

        {/* Final CTA Section */}
        {pageInfo.showFinalCta && (
          <section className="py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center relative z-10"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {pageInfo.finalCtaTitle || "Ready to Get Started?"}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {pageInfo.finalCtaDescription || "Join us on your journey to digital transformation."}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={pageInfo.finalCtaLink || "/contact"}
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 group"
                >
                  <span className="mr-2">{pageInfo.finalCtaText || "Contact Us"}</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </section>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTemplate;