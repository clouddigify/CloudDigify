import React from 'react';
import { motion } from 'framer-motion';
import { FaCookieBite, FaInfoCircle, FaListAlt, FaUserCog, 
         FaBullseye, FaToggleOn, FaGlobeAmericas, FaClock,
         FaShieldAlt, FaQuestionCircle, FaHistory } from 'react-icons/fa';

const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
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

  const sections = [
    {
      id: 'what-are-cookies',
      title: '1. What Are Cookies',
      icon: <FaInfoCircle className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer, smartphone, tablet, or other device 
            when you visit our website or use our services. They are widely used to make websites work more 
            efficiently, provide a better user experience, and give website owners information about how 
            visitors use their site.
          </p>
          <p className="mb-4">
            Cookies may be set by the website you're visiting (first-party cookies) or by third parties, 
            such as those who serve content or provide advertising or analytics services on the website (third-party cookies).
          </p>
          <p>
            When you visit our website, we may collect information from you automatically through cookies 
            or similar technologies.
          </p>
        </>
      )
    },
    {
      id: 'types-of-cookies',
      title: '2. Types of Cookies We Use',
      icon: <FaListAlt className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">We use several types of cookies on our website:</p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Essential Cookies</h4>
              <p className="text-gray-700">
                These cookies are necessary for the website to function properly. They enable core functionality 
                such as security, network management, and account access. You cannot opt out of these cookies.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Functionality Cookies</h4>
              <p className="text-gray-700">
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Performance/Analytics Cookies</h4>
              <p className="text-gray-700">
                These cookies allow us to count visits and traffic sources so we can measure and improve the 
                performance of our site. They help us to know which pages are the most and least popular and 
                see how visitors move around the site.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Targeting/Advertising Cookies</h4>
              <p className="text-gray-700">
                These cookies may be set through our site by our advertising partners. They may be used by those 
                companies to build a profile of your interests and show you relevant advertisements on other sites.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'specific-cookies',
      title: '3. Specific Cookies We Use',
      icon: <FaBullseye className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">Here are details about specific cookies used on our website:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Cookie Name</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Purpose</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Duration</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-gray-700">_session</td>
                  <td className="py-3 px-4 text-gray-700">Keeps you logged in during a session</td>
                  <td className="py-3 px-4 text-gray-700">Session</td>
                  <td className="py-3 px-4 text-gray-700">Essential</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">_preferences</td>
                  <td className="py-3 px-4 text-gray-700">Stores your preferences for site functionality</td>
                  <td className="py-3 px-4 text-gray-700">1 year</td>
                  <td className="py-3 px-4 text-gray-700">Functionality</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">_ga</td>
                  <td className="py-3 px-4 text-gray-700">Google Analytics - Distinguishes users</td>
                  <td className="py-3 px-4 text-gray-700">2 years</td>
                  <td className="py-3 px-4 text-gray-700">Analytics</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">_gid</td>
                  <td className="py-3 px-4 text-gray-700">Google Analytics - Distinguishes users</td>
                  <td className="py-3 px-4 text-gray-700">24 hours</td>
                  <td className="py-3 px-4 text-gray-700">Analytics</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">_fbp</td>
                  <td className="py-3 px-4 text-gray-700">Facebook Pixel - Used to deliver advertisements</td>
                  <td className="py-3 px-4 text-gray-700">3 months</td>
                  <td className="py-3 px-4 text-gray-700">Advertising</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      id: 'managing-cookies',
      title: '4. Managing Your Cookie Preferences',
      icon: <FaUserCog className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            You can control and manage cookies in various ways. Please keep in mind that removing or 
            blocking cookies can negatively impact your user experience and parts of our website may 
            no longer be fully accessible.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Browser Controls</h4>
              <p className="text-gray-700 mb-2">
                Most browsers automatically accept cookies, but you can choose to accept or decline cookies 
                through your browser controls. Each browser is different, so check the 'Help' menu of your 
                browser to learn how to change your cookie preferences.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><span className="font-semibold">Google Chrome:</span> Settings → Privacy and Security → Cookies and other site data</li>
                <li><span className="font-semibold">Mozilla Firefox:</span> Options → Privacy & Security → Cookies and Site Data</li>
                <li><span className="font-semibold">Safari:</span> Preferences → Privacy → Cookies and website data</li>
                <li><span className="font-semibold">Microsoft Edge:</span> Settings → Site permissions → Cookies and site data</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Cookie Management Tools</h4>
              <p className="text-gray-700">
                You can also manage cookies through our Cookie Consent Tool, which you can access by clicking 
                on "Cookie Settings" in the footer of our website.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Third-Party Opt-Out Tools</h4>
              <p className="text-gray-700">
                You can opt out of targeted advertising by using the privacy settings on the social media platforms 
                where we have profiles, or by visiting these websites:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Digital Advertising Alliance: <a href="https://www.aboutads.info/choices/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.aboutads.info/choices/</a></li>
                <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">https://optout.networkadvertising.org/</a></li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'third-party-cookies',
      title: '5. Third-Party Cookies',
      icon: <FaGlobeAmericas className="h-8 w-8 text-indigo-600" />,
      content: (
        <p>
          Our website may use third-party services, such as Google Analytics, Facebook Pixel, and other 
          marketing and analytics tools, which set their own cookies. These third parties may collect information 
          about your online activities across different websites. We do not control these cookies and you should 
          check the relevant third-party website for more information about these cookies and how to manage them.
        </p>
      )
    },
    {
      id: 'cookie-lifespan',
      title: '6. Cookie Lifespan',
      icon: <FaClock className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">Cookies can remain on your device for varying periods of time:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Session Cookies:</span> These are temporary and are deleted when you close your browser.
            </li>
            <li>
              <span className="font-semibold">Persistent Cookies:</span> These remain on your device until they expire or you delete them.
              How long a persistent cookie remains on your device varies from cookie to cookie.
            </li>
          </ul>
        </>
      )
    },
    {
      id: 'policy-changes',
      title: '7. Changes to This Cookie Policy',
      icon: <FaHistory className="h-8 w-8 text-indigo-600" />,
      content: (
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology, regulation, 
          or our business practices. Any changes will be posted on this page with an updated revision date. 
          If we make significant changes to this policy, we may notify you through a notice on our website or 
          by email.
        </p>
      )
    },
    {
      id: 'contact-us',
      title: '8. Contact Us',
      icon: <FaQuestionCircle className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            If you have any questions or concerns about our use of cookies or this Cookie Policy, 
            please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-2"><span className="font-semibold">Email:</span> privacy@clouddigify.com</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
            <p><span className="font-semibold">Address:</span> CloudDigify Privacy Office, 123 Tech Plaza, Suite 500, San Francisco, CA 94105, USA</p>
          </div>
        </>
      )
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4 border-indigo-600"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cookie Policy</h1>
          <div className="flex items-center text-gray-600">
            <FaHistory className="mr-2" />
            <p>Last Updated: {currentDate}</p>
          </div>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="bg-indigo-50 rounded-lg p-8 mb-10"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-indigo-600">
              <FaCookieBite className="w-16 h-16 md:w-24 md:h-24" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">About This Cookie Policy</h2>
              <p className="text-gray-700">
                This Cookie Policy explains how CloudDigify ("we", "us", or "our") uses cookies and similar technologies 
                to recognize you when you visit our website. It explains what these technologies are and why we use them, 
                as well as your rights to control our use of them.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Policy sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 bg-indigo-50 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800" id={section.id}>{section.title}</h2>
              </div>
              <div className="prose max-w-none text-gray-700 ml-16">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cookie Consent Banner Info */}
        <motion.div
          className="mt-10 bg-white rounded-lg shadow-md p-8"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaToggleOn className="h-6 w-6 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Cookie Consent Banner</h3>
          </div>
          <p className="text-gray-700 mb-4">
            When you first visit our website, you will see a cookie banner that allows you to accept or decline 
            non-essential cookies. You can change your preferences at any time by clicking on "Cookie Settings" 
            in the footer of our website.
          </p>
          <p className="text-gray-700">
            If you choose to decline non-essential cookies, we will only set cookies that are essential 
            to provide you with the basic features of our website.
          </p>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          className="mt-10 bg-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
          variants={itemVariants}
        >
          <FaShieldAlt className="h-16 w-16 text-indigo-600" />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Committed to Transparency</h3>
            <p className="text-gray-700">
              CloudDigify is committed to being transparent about the data we collect and how we use it. 
              We strive to use cookies and similar technologies in a way that respects your privacy while 
              providing you with the best possible user experience.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-10 bg-indigo-600 rounded-lg p-8 text-center text-white"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-4">Have Questions About Cookies?</h3>
          <p className="mb-6">
            Our privacy team is ready to assist you with any questions regarding our use of cookies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
            <a href="/privacy" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 text-center text-gray-600"
        >
          <p>© {new Date().getFullYear()} CloudDigify. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CookiePolicy; 