import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaSearch, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blogs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  // Featured blog posts
  const featuredPosts = [
    {
      id: 1,
      title: '5 Cloud Cost-Saving Strategies for Enterprises',
      excerpt: 'Learn how to optimize your cloud spend with these proven cost management techniques that can save your organization thousands.',
      image: '/images/blog/cost-savings.jpg',
      author: 'Sarah Johnson',
      date: 'June 2, 2023',
      category: 'Cloud Strategy',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'CI/CD Best Practices: Building Reliable Pipelines',
      excerpt: 'Discover how to implement robust CI/CD pipelines that improve deployment frequency and reduce time to market.',
      image: '/images/blog/cicd.jpg',
      author: 'Michael Chen',
      date: 'May 28, 2023',
      category: 'DevOps',
      readTime: '6 min read'
    }
  ];

  // Regular blog posts
  const posts = [
    {
      id: 3,
      title: 'AWS vs. Azure vs. Google Cloud: Choosing the Right Provider',
      excerpt: 'A comprehensive comparison of the top cloud providers to help you determine which platform best fits your needs.',
      image: '/images/blog/cloud-comparison.jpg',
      author: 'David Wilson',
      date: 'May 22, 2023',
      category: 'Cloud Strategy',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Kubernetes Security Best Practices',
      excerpt: 'Protect your containerized applications with these essential Kubernetes security recommendations.',
      image: '/images/blog/k8s-security.jpg',
      author: 'Olivia Rodriguez',
      date: 'May 17, 2023',
      category: 'Security',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Multi-Cloud Architecture: Benefits and Challenges',
      excerpt: 'Explore the advantages and potential pitfalls of implementing a multi-cloud strategy for your organization.',
      image: '/images/blog/multi-cloud.jpg',
      author: 'Sarah Johnson',
      date: 'May 12, 2023',
      category: 'Cloud Architecture',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Serverless Computing: When to Use It',
      excerpt: 'Understand the key use cases for serverless architecture and how to determine if its right for your applications.',
      image: '/images/blog/serverless.jpg',
      author: 'James Taylor',
      date: 'May 5, 2023',
      category: 'Serverless',
      readTime: '5 min read'
    }
  ];

  // Blog categories
  const categories = [
    { name: 'Cloud Strategy', count: 8 },
    { name: 'DevOps', count: 12 },
    { name: 'Security', count: 7 },
    { name: 'Cloud Architecture', count: 10 },
    { name: 'Serverless', count: 5 },
    { name: 'Machine Learning', count: 3 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Background Elements */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/3"
          animate={{
            scale: [1, 1.2, 1],
            x: [-100, -50, -100],
            y: [-100, -50, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 rounded-full opacity-40 blur-3xl translate-x-1/3 translate-y-1/4"
          animate={{
            scale: [1, 1.3, 1],
            x: [100, 50, 100],
            y: [100, 50, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block py-1 px-3 mb-4 bg-blue-100 text-blue-700 font-medium rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Insights & Resources
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Cloud Insights Blog
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Stay up-to-date with the latest cloud technology trends, best practices, 
              and expert insights to accelerate your digital transformation journey.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              className="relative max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full px-5 py-4 pr-12 rounded-full border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors">
                  <FaSearch size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Featured Articles</h2>
            <p className="text-lg text-gray-600">
              Our most popular and insightful content
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="md:w-2/5 h-64 md:h-auto bg-gray-200 relative">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: "url('/images/blog/placeholder.jpg')" }}
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2">
                        {post.author.split(' ').map(word => word[0]).join('')}
                      </div>
                      <span className="text-gray-700 text-sm">{post.author}</span>
                    </div>
                    <span className="text-gray-500 text-sm flex items-center">
                      <FaCalendarAlt className="mr-1" size={12} />
                      {post.date}
                    </span>
                  </div>
                  <Link to={`/blogs/${post.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-medium flex items-center justify-center"
                    >
                      Read Article 
                      <FaArrowRight className="ml-2" size={12} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Articles Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Latest Articles</h2>
                <p className="text-lg text-gray-600">
                  Stay informed with our newest content
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('/images/blog/placeholder.jpg')" }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-1" size={12} />
                          {post.date}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2">
                          {post.author.split(' ').map(word => word[0]).join('')}
                        </div>
                        <span className="text-gray-700 text-sm">{post.author}</span>
                      </div>
                      <Link to={`/blogs/${post.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-5 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-center font-medium flex items-center justify-center"
                        >
                          Read More
                          <FaArrowRight className="ml-2" size={12} />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Load More Articles
                </motion.button>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Link to={`/blogs/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                          <FaTag className="mr-2" size={12} />
                          {category.name}
                        </Link>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {category.count}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden text-white"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-4 opacity-90">Get the latest cloud insights delivered to your inbox monthly.</p>
                  <form>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 mb-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition text-center font-medium"
                    >
                      Subscribe
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Contribute?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Are you a cloud expert with insights to share? We're always looking for guest contributors to our blog.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Contributor
            </motion.button>
            <motion.button 
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Suggest a Topic
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 