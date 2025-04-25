import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLink, FaShieldAlt, FaChartLine, FaUsers, FaRocket, FaBuilding, FaLock, FaDatabase, FaNetworkWired, FaCode, FaCubes, FaExchangeAlt, FaFileContract, FaServer } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const Blockchain = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' },
    config: { tension: 300, friction: 20 }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Wave Pattern */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600"
        />
        <div className="absolute inset-0">
          {/* Animated Wave Pattern */}
          <svg className="absolute w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.2, y: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="0.2"
            />
            <motion.path
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }}
              d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="0.2"
            />
            {/* Floating Circles Animation */}
            {[...Array(6)].map((_, index) => (
              <motion.circle
                key={index}
                cx={200 + index * 200}
                cy={160}
                r={10}
                fill="white"
                fillOpacity="0.3"
                initial={{ y: 0 }}
                animate={{ y: [-20, 20] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
            ))}
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Enterprise Blockchain Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Secure, scalable, and efficient distributed ledger solutions for enterprise
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Solutions
          </motion.button>
        </div>
      </section>

      {/* Enterprise Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6 text-gray-800"
            >
              Enterprise Blockchain Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Leverage distributed ledger technology to transform your business operations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaFileContract,
                title: "Smart Contracts",
                description: "Automated contract execution with immutable records"
              },
              {
                icon: FaExchangeAlt,
                title: "Asset Tokenization",
                description: "Digital representation of physical and digital assets"
              },
              {
                icon: FaNetworkWired,
                title: "Supply Chain",
                description: "End-to-end visibility and traceability"
              },
              {
                icon: FaShieldAlt,
                title: "Security & Compliance",
                description: "Regulatory-compliant blockchain solutions"
              },
              {
                icon: FaCubes,
                title: "Distributed Storage",
                description: "Decentralized and secure data storage"
              },
              {
                icon: FaServer,
                title: "Private Networks",
                description: "Custom blockchain networks for enterprises"
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="text-2xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaBuilding className="text-4xl text-cyan-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Supply Chain Transformation</h3>
                  <p className="text-cyan-600">Fortune 500 Manufacturer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Implemented blockchain for end-to-end supply chain visibility, reducing costs by 40% and improving traceability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm">Supply Chain</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm">Traceability</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm">Cost Reduction</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaBuilding className="text-4xl text-cyan-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Cross-Border Payments</h3>
                  <p className="text-cyan-600">Global Financial Institution</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Reduced settlement time from days to minutes using blockchain-based payment network.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm">Payments</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm">Settlement</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm">Efficiency</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Technology Stack
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['Ethereum', 'Hyperledger', 'Corda', 'Quorum'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-cyan-100"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <FaCubes className="text-4xl text-cyan-600" />
                </div>
                <h3 className="font-semibold text-gray-800">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Schedule a consultation with our blockchain experts
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
          >
            Book Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Blockchain; 