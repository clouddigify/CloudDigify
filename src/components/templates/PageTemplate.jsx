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
            className={`absolute inset-0 bg-gradient-to-r ${pageInfo.heroBackground} opacity-90`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
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
                  {isIndustry ? `${pageInfo.title} Solutions` : pageInfo.title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/90 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {pageInfo.description}
                </motion.p>
                {pageInfo.showCta !== false && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Link
                      to={pageInfo.ctaLink || "/contact"}
                      className="group inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
                    >
                      <span className="mr-2">
                        {pageInfo.ctaText || (isService ? "Request a Consultation" : isContent ? pageInfo.defaultCtaText || "Learn More" : "Schedule a Consultation")}
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
          <section className="py-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50 backdrop-blur-3xl" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative z-10"
            >
              <div className="text-center mb-8 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {pageInfo.featuresTitle || (
                    isService ? "Our Services" :
                    isContent ? pageInfo.defaultFeaturesTitle || "Key Features" :
                    "Industry Solutions"
                  )}
                </h2>
                {pageInfo.featuresDescription && (
                  <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                    {pageInfo.featuresDescription}
                  </p>
                )}
              </div>

              {Array.isArray(pageInfo.features) && pageInfo.features.length > 0 && (
                <div className={pageInfo.featuresContainerClassName || 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl'}>
                  <div className={pageInfo.featuresWrapperClassName || `
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                    gap-3 lg:gap-4
                    auto-rows-fr
                    justify-items-center
                  `}>
                    {pageInfo.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: index * 0.1 
                            }
                          }
                        }}
                        whileHover={{ 
                          y: -4,
                          transition: { 
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }
                        }}
                        className={feature.className || `
                          relative bg-white rounded-xl p-4
                          shadow-md hover:shadow-xl
                          transition-all duration-300
                          h-full flex flex-col
                          min-h-[420px] w-full max-w-[240px]
                        `}
                      >
                        {feature.content}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
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