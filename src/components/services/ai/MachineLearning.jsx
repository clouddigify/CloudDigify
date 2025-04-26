import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBrain, FaChartLine, FaCode, FaDatabase, FaRobot, FaCloud, FaSearch, FaMicrochip, FaArrowRight,
         FaLightbulb, FaClipboardCheck, FaCogs, FaServer, FaChartBar } from 'react-icons/fa';

  {/* Use Cases Section */}
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          Machine Learning Solutions for Your Business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Discover how our ML solutions can transform your operations and drive business growth
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={() => openInquiryForm(useCase.title)}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
              <useCase.icon className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {useCase.title}
            </h3>
            <p className="text-gray-600">{useCase.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Implementation Process Section */}
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-6">
          CloudDigify Machine Learning Implementation Process
        </h2>
        <p className="text-xl text-gray-600">
          Our structured approach ensures successful machine learning adoption with measurable results
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: FaLightbulb,
            title: "Business Problem Assessment",
            description: "We identify your key business challenges and determine how machine learning can provide the most value."
          },
          {
            icon: FaClipboardCheck,
            title: "Data Readiness Analysis",
            description: "Our team evaluates your data landscape and prepares high-quality datasets for model training."
          },
          {
            icon: FaCogs,
            title: "Model Selection & Design",
            description: "We select and design the optimal machine learning algorithms based on your specific business needs."
          },
          {
            icon: FaBrain,
            title: "Model Training & Validation",
            description: "Your custom ML models are trained, tested, and validated to ensure high performance and accuracy."
          },
          {
            icon: FaServer,
            title: "Enterprise Integration",
            description: "We seamlessly integrate ML models with your existing systems and business processes."
          },
          {
            icon: FaChartBar,
            title: "Continuous Improvement",
            description: "Ongoing monitoring, maintenance, and refinement keep your ML solutions performing at their best."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            onClick={() => openInquiryForm('Machine Learning Implementation')}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-gradient-to-r from-blue-100 to-teal-100 p-4 rounded-full">
                <item.icon className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */} 