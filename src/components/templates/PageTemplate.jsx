import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChartLine, FaShieldAlt, FaCogs, FaServer, FaArrowRight } from 'react-icons/fa';

// Unified template component for creating various types of pages
const PageTemplate = ({ pageInfo, pageType = 'service' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Helper to determine the page type
  const isService = pageType === 'service';
  const isIndustry = pageType === 'industry';
  const isContent = pageType === 'content';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${pageInfo.heroBackground} text-white py-20 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isIndustry ? `${pageInfo.title} Solutions` : pageInfo.title}
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {pageInfo.description}
            </p>
            {pageInfo.showCta !== false && (
              <Link
                to={pageInfo.ctaLink || "/contact"}
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
              >
                {pageInfo.ctaText || (isService ? "Request a Consultation" : isContent ? pageInfo.defaultCtaText || "Learn More" : "Schedule a Consultation")}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-8 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div variants={itemVariants} className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">
                {pageInfo.overviewTitle || (
                  isService ? "Overview" : 
                  isContent ? pageInfo.defaultOverviewTitle || "Overview" :
                  `${pageInfo.title} Industry Overview`
                )}
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                {pageInfo.overviewDescription1}
              </p>
              <p className="text-gray-700 mb-10 text-lg">
                {pageInfo.overviewDescription2}
              </p>
              
              {pageInfo.showBenefits !== false && (
                <>
                  <h3 className="text-xl font-semibold mb-4">
                    {pageInfo.benefitsTitle || (
                      isService ? "Key Benefits" : 
                      isContent ? pageInfo.defaultBenefitsTitle || "Key Points" : 
                      "Industry Challenges We Solve"
                    )}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {(isService ? pageInfo.benefits : isContent ? pageInfo.benefits : pageInfo.challenges)?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">
                          <FaCheckCircle className="mt-1" />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
            
            {pageInfo.showSidebar !== false && (
              <motion.div variants={itemVariants} className="md:w-1/3 bg-blue-50 p-6 rounded-lg self-start">
                {(isService || isContent) && pageInfo.icon && (
                  <div className="text-5xl text-blue-600 mb-6">
                    {pageInfo.icon}
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-4">
                  {pageInfo.sidebarTitle || (
                    isService ? "Our Approach" : 
                    isContent ? pageInfo.defaultSidebarTitle || "Additional Information" :
                    `Why Choose Us for ${pageInfo.title}`
                  )}
                </h3>
                <ul className="space-y-3 mb-6">
                  {pageInfo.approachPoints?.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                
                {pageInfo.showSecondaryCta !== false && (
                  <Link 
                    to={pageInfo.secondaryCtaLink || "/contact"}
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
                  >
                    {pageInfo.secondaryCta || (
                      isService ? "Get Started" : 
                      isContent ? pageInfo.defaultSecondaryCta || "Learn More" :
                      "Schedule a Consultation"
                    )}
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      {pageInfo.showFeatures !== false && (
        <section className="py-16 px-6 bg-gray-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                {isService 
                  ? (pageInfo.featuresTitle || "Our Services")
                  : isContent
                  ? (pageInfo.featuresTitle || pageInfo.defaultFeaturesTitle || "Key Features")
                  : (pageInfo.solutionsTitle || `Our ${pageInfo.title} Solutions`)}
              </h2>
              {(isService || isContent) && pageInfo.showFeaturesDescription !== false && (
                <p className="text-gray-600 max-w-3xl mx-auto">
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
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {(isIndustry || (isContent && item.icon)) && (
                    <div className="mb-4">
                      {item.icon}
                    </div>
                  )}
                  <h3 className={`text-${isIndustry ? '2xl' : 'xl'} font-semibold mb-${isIndustry ? '4' : '3'}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {item.description}
                  </p>
                  {(isIndustry || (isContent && item.features)) && item.features && (
                    <>
                      <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
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

      {/* Additional Sections */}
      {pageInfo.additionalSections?.map((section, index) => (
        <section key={index} className={`py-16 px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {section.content}
          </motion.div>
        </section>
      ))}

      {/* Technologies Section - Only for Service Pages */}
      {isService && pageInfo.technologiesUsed && (
        <section className="py-16 px-8 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-center mb-6">
                {pageInfo.technologiesTitle || "Technologies & Tools"}
              </h2>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                {pageInfo.technologiesDescription || 
                  "We leverage industry-leading technologies to deliver robust, scalable, and secure solutions."}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {pageInfo.technologiesUsed.map((tech, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                  <span className="font-medium text-gray-800">{tech}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Case Study Section */}
      {pageInfo.caseStudy && (
        <section className="py-16 px-6 bg-gray-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
              {pageInfo.caseStudy.title}
            </motion.h2>
            
            <motion.div variants={itemVariants} className={`${isService ? 'bg-white' : 'bg-gray-50'} p-8 rounded-lg shadow-md ${isService ? 'border border-gray-100' : ''}`}>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">{pageInfo.caseStudy.client}</h3>
                <div className="text-sm text-blue-600 font-medium">
                  Industry: {pageInfo.caseStudy.industry || (isIndustry ? pageInfo.title : "Enterprise Technology")}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                <p className="text-gray-700 mb-4">{pageInfo.caseStudy.challenge}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                <p className="text-gray-700 mb-4">{pageInfo.caseStudy.solution}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Results</h4>
                <ul className="space-y-2">
                  {pageInfo.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* CTA Section */}
      {pageInfo.showFinalCta !== false && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {pageInfo.ctaTitle || (
                isContent ? pageInfo.defaultCtaTitle || "Want to Learn More?" :
                `Ready to Transform Your ${isIndustry ? pageInfo.title : 'Business'}?`
              )}
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              {pageInfo.ctaDescription || (
                isService 
                  ? `Our ${pageInfo.title} services are designed to help you achieve your business goals.` 
                  : isContent
                  ? pageInfo.defaultCtaDescription || "Contact us to learn more about how we can help you."
                  : `Our tailored solutions for the ${pageInfo.title} industry can help you overcome challenges and seize new opportunities.`
              )}
            </p>
            <Link
              to={pageInfo.finalCtaLink || "/contact"}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition duration-300"
            >
              {pageInfo.finalCta || (isContent ? pageInfo.defaultFinalCta || "Contact Us" : "Contact Us Today")}
            </Link>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default PageTemplate;