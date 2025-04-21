import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-16 px-6"
  >
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      
      <div className="prose max-w-none text-gray-700">
        <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p>
          CloudDigify ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website [www.clouddigify.com] (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">2. Information We Collect</h2>
        <p>
          We collect several types of information from and about users of our Website, including information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>By which you may be personally identified, such as name, email address, telephone number ("personal information");</li>
          <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">3. How We Collect Information</h2>
        <p>
          We collect this information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Directly from you when you provide it to us.</li>
          <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">4. How We Use Your Information</h2>
        <p>
          We use information that we collect about you or that you provide to us, including any personal information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To present our Website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it.</li>
          <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
          <li>In any other way we may describe when you provide the information.</li>
          <li>For any other purpose with your consent.</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">5. Data Security</h2>
        <p>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">6. Changes to Our Privacy Policy</h2>
        <p>
          It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">7. Contact Information</h2>
        <p>
          To ask questions or comment about this privacy policy and our privacy practices, contact us at: [contact@clouddigify.com]
        </p>
      </div>
    </div>
  </motion.div>
);

export default PrivacyPolicy; 