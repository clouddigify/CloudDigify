import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-16 px-6"
  >
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      
      <div className="prose max-w-none text-gray-700">
        <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to CloudDigify ("Company", "we", "our", "us")! These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website located at [www.clouddigify.com] (the "Service") operated by CloudDigify.
        </p>
        <p>
          Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Communications</h2>
        <p>
          By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing us at [contact@clouddigify.com].
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Purchases</h2>
        <p>
          If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
        </p>
        <p>
          You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
        </p>
        <p>
          The service may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
        </p>
        <p>
          We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
        </p>
        <p>
          We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Services</h2>
        <p>
          The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
        </p>
        
        {/* Add more sections as needed */}
        
      </div>
    </div>
  </motion.div>
);

export default TermsAndConditions; 