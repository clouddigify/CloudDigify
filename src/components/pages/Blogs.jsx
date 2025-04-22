import React from 'react';
import { FaCalendarAlt, FaUser, FaTag, FaSearch, FaArrowRight, FaNewspaper } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';
import { Link } from 'react-router-dom';

const Blogs = () => {
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

  const pageInfo = {
    title: "Cloud Insights Blog",
    description: "Stay up-to-date with the latest cloud technology trends, best practices, and expert insights to accelerate your digital transformation journey.",
    icon: <FaNewspaper />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",
    
    // Default text configurations for content pages
    defaultCtaText: "Subscribe to Updates",
    defaultOverviewTitle: "Featured Articles",
    defaultBenefitsTitle: "Popular Topics",
    defaultSidebarTitle: "Blog Categories",
    defaultSecondaryCta: "Subscribe to Newsletter",
    defaultFeaturesTitle: "Latest Articles",
    defaultFeaturesDescription: "Stay informed with our newest content",
    defaultCtaTitle: "Want to Contribute?",
    defaultCtaDescription: "Are you a cloud expert with insights to share? We're always looking for guest contributors to our blog.",
    defaultFinalCta: "Become a Contributor",

    // Custom links
    ctaLink: "/subscribe",
    secondaryCtaLink: "/subscribe",
    finalCtaLink: "/contribute",
    
    // Content sections
    overviewTitle: "Featured Articles",
    overviewDescription1: "Our most popular and insightful content to help you navigate the cloud technology landscape.",
    overviewDescription2: "CloudDigify's experts share their knowledge about cloud migration, security, architecture, and cost optimization strategies.",
    
    // Blog topics (using benefits section)
    benefitsTitle: "Popular Topics",
    benefits: [
      "Cloud Strategy - Expert analysis and guidance for your cloud adoption journey",
      "DevOps - Best practices for implementing CI/CD and automation",
      "Security - Latest trends and approaches in cloud security",
      "Architecture - Deep dives into modern cloud architecture patterns",
      "Cost Optimization - Strategies to improve your cloud ROI"
    ],
    
    sidebarTitle: "Blog Categories",
    approachPoints: categories.map(cat => `${cat.name} (${cat.count})`),
    
    // Latest articles (using features section)
    featuresTitle: "Latest Articles",
    featuresDescription: "Stay informed with our newest content",
    features: posts.map(post => ({
      title: post.title,
      description: post.excerpt,
      link: `/blogs/${post.id}`,
      icon: <FaNewspaper />,
      features: [
        `Author: ${post.author}`,
        `Published: ${post.date}`,
        `Category: ${post.category}`,
        `Read Time: ${post.readTime}`
      ]
    })),
    
    // Custom sections for featured posts, articles grid, and newsletter
    additionalSections: [
      {
        content: (
          <>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Content</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our most popular and insightful articles
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
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
                      <button
                        className="w-full mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-medium flex items-center justify-center"
                      >
                        Read Article 
                        <FaArrowRight className="ml-2" size={12} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      },
      {
        content: (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Latest Articles</h2>
                  <p className="text-lg text-gray-600">
                    Stay informed with our newest content
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
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
                          <button
                            className="w-full mt-5 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-center font-medium flex items-center justify-center"
                          >
                            Read More
                            <FaArrowRight className="ml-2" size={12} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <button 
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
                  >
                    Load More Articles
                  </button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
                    <ul className="space-y-3">
                      {categories.map((category, index) => (
                        <li 
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                        >
                          <Link to={`/blogs/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                            <FaTag className="mr-2" size={12} />
                            {category.name}
                          </Link>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                            {category.count}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden text-white">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="mb-4 opacity-90">Get the latest cloud insights delivered to your inbox monthly.</p>
                    <form>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-3 mb-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button
                        className="w-full px-4 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition text-center font-medium"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    ],
    
    // CTA section
    ctaTitle: "Want to Contribute?",
    ctaDescription: "Are you a cloud expert with insights to share? We're always looking for guest contributors to our blog.",
    finalCta: "Become a Contributor",
    
    // Section visibility controls
    showCta: true,
    showBenefits: true,
    showSidebar: true,
    showSecondaryCta: true,
    showFeatures: true,
    showFeaturesDescription: true,
    showFinalCta: true
  };

  return <PageTemplate pageInfo={pageInfo} pageType="content" />;
};

export default Blogs; 