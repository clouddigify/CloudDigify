import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaToggleOn, FaToggleOff, FaEdit, FaSearch, FaChevronDown } from 'react-icons/fa';

// Import the page configuration
import {
  mainPages,
  servicePages,
  industryPages,
  legalPages
} from '../../config/pageConfig';

const PageManager = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filter, setFilter] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    main: true,
    services: true,
    industries: true,
    legal: true
  });
  
  // Create state for each page category
  const [mainPagesState, setMainPagesState] = useState(mainPages);
  const [servicePagesState, setServicePagesState] = useState(servicePages);
  const [industryPagesState, setIndustryPagesState] = useState(industryPages);
  const [legalPagesState, setLegalPagesState] = useState(legalPages);
  
  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/admin/login', { state: { from: '/admin/pages' } });
      return;
    }
    
    // Simplified token check - just verify it exists
    // We trust that the login component has validated credentials
    setIsAuthenticated(true);
    
  }, [navigate]);
  
  // Function to toggle section expand/collapse
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  // Function to toggle page status
  const togglePageStatus = (pageKey, category) => {
    let updatedState;
    
    switch (category) {
      case 'main':
        updatedState = {
          ...mainPagesState,
          [pageKey]: {
            ...mainPagesState[pageKey],
            enabled: !mainPagesState[pageKey].enabled
          }
        };
        setMainPagesState(updatedState);
        savePageConfig('mainPages', updatedState);
        break;
        
      case 'service':
        updatedState = {
          ...servicePagesState,
          [pageKey]: {
            ...servicePagesState[pageKey],
            enabled: !servicePagesState[pageKey].enabled
          }
        };
        setServicePagesState(updatedState);
        savePageConfig('servicePages', updatedState);
        break;
        
      case 'industry':
        updatedState = {
          ...industryPagesState,
          [pageKey]: {
            ...industryPagesState[pageKey],
            enabled: !industryPagesState[pageKey].enabled
          }
        };
        setIndustryPagesState(updatedState);
        savePageConfig('industryPages', updatedState);
        break;
        
      case 'legal':
        updatedState = {
          ...legalPagesState,
          [pageKey]: {
            ...legalPagesState[pageKey],
            enabled: !legalPagesState[pageKey].enabled
          }
        };
        setLegalPagesState(updatedState);
        savePageConfig('legalPages', updatedState);
        break;
        
      default:
        break;
    }
  };
  
  // Function to save changes to local storage
  // In a real application, this would save to a database
  const savePageConfig = (configName, configData) => {
    try {
      localStorage.setItem(`clouddigify_${configName}`, JSON.stringify(configData));
      // Simulate updating the actual config file
      console.log(`Updated ${configName}:`, configData);
    } catch (error) {
      console.error('Error saving page configuration:', error);
      alert('There was an error saving your changes. Please try again.');
    }
  };
  
  // Load saved configurations from local storage
  useEffect(() => {
    const loadSavedConfig = (configName, setStateFunc, defaultConfig) => {
      const savedConfig = localStorage.getItem(`clouddigify_${configName}`);
      if (savedConfig) {
        try {
          setStateFunc(JSON.parse(savedConfig));
        } catch (error) {
          console.error(`Error parsing saved ${configName}:`, error);
          setStateFunc(defaultConfig);
        }
      }
    };
    
    loadSavedConfig('mainPages', setMainPagesState, mainPages);
    loadSavedConfig('servicePages', setServicePagesState, servicePages);
    loadSavedConfig('industryPages', setIndustryPagesState, industryPages);
    loadSavedConfig('legalPages', setLegalPagesState, legalPages);
  }, []);
  
  // Filter pages based on search term
  const filterPages = (pages) => {
    if (!filter) return pages;
    
    return Object.entries(pages).filter(([key, page]) => {
      const path = page.path.toLowerCase();
      const keyLower = key.toLowerCase();
      const searchTerm = filter.toLowerCase();
      
      return path.includes(searchTerm) || keyLower.includes(searchTerm);
    });
  };
  
  // Handle navigation to edit page
  const navigateToEdit = (pagePath) => {
    navigate(`/admin/edit/${pagePath.replace(/^\//, '')}`);
  };
  
  if (!isAuthenticated) {
    return <div className="p-8">Authenticating...</div>;
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">Page Manager</h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Filter pages..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {/* Main Pages Section */}
      <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
        <div 
          className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('main')}
        >
          <h2 className="text-lg font-semibold">Main Pages</h2>
          <FaChevronDown className={`transition-transform ${expandedSections.main ? 'rotate-180' : ''}`} />
        </div>
        
        {expandedSections.main && (
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-2">Page Name</th>
                  <th className="text-left p-2">Path</th>
                  <th className="text-center p-2">Status</th>
                  <th className="text-center p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filterPages(mainPagesState).map(([key, page]) => (
                  <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-2 capitalize">{key}</td>
                    <td className="p-2">{page.path}</td>
                    <td className="p-2 text-center">
                      <button
                        className="focus:outline-none"
                        onClick={() => togglePageStatus(key, 'main')}
                        title={page.enabled ? 'Disable page' : 'Enable page'}
                      >
                        {page.enabled ? (
                          <FaToggleOn className="text-green-500 text-2xl" />
                        ) : (
                          <FaToggleOff className="text-gray-400 text-2xl" />
                        )}
                      </button>
                    </td>
                    <td className="p-2 text-center">
                      <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={() => navigateToEdit(page.path)}
                        title="Edit page"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Service Pages Section */}
      <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
        <div 
          className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('services')}
        >
          <h2 className="text-lg font-semibold">Service Pages</h2>
          <FaChevronDown className={`transition-transform ${expandedSections.services ? 'rotate-180' : ''}`} />
        </div>
        
        {expandedSections.services && (
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-2">Page Name</th>
                  <th className="text-left p-2">Path</th>
                  <th className="text-center p-2">Status</th>
                  <th className="text-center p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filterPages(servicePagesState).map(([key, page]) => (
                  <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                    <td className="p-2">{page.path}</td>
                    <td className="p-2 text-center">
                      <button
                        className="focus:outline-none"
                        onClick={() => togglePageStatus(key, 'service')}
                        title={page.enabled ? 'Disable page' : 'Enable page'}
                      >
                        {page.enabled ? (
                          <FaToggleOn className="text-green-500 text-2xl" />
                        ) : (
                          <FaToggleOff className="text-gray-400 text-2xl" />
                        )}
                      </button>
                    </td>
                    <td className="p-2 text-center">
                      <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={() => navigateToEdit(page.path)}
                        title="Edit page"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Industry Pages Section */}
      <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
        <div 
          className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('industries')}
        >
          <h2 className="text-lg font-semibold">Industry Pages</h2>
          <FaChevronDown className={`transition-transform ${expandedSections.industries ? 'rotate-180' : ''}`} />
        </div>
        
        {expandedSections.industries && (
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-2">Page Name</th>
                  <th className="text-left p-2">Path</th>
                  <th className="text-center p-2">Status</th>
                  <th className="text-center p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filterPages(industryPagesState).map(([key, page]) => (
                  <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                    <td className="p-2">{page.path}</td>
                    <td className="p-2 text-center">
                      <button
                        className="focus:outline-none"
                        onClick={() => togglePageStatus(key, 'industry')}
                        title={page.enabled ? 'Disable page' : 'Enable page'}
                      >
                        {page.enabled ? (
                          <FaToggleOn className="text-green-500 text-2xl" />
                        ) : (
                          <FaToggleOff className="text-gray-400 text-2xl" />
                        )}
                      </button>
                    </td>
                    <td className="p-2 text-center">
                      <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={() => navigateToEdit(page.path)}
                        title="Edit page"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Legal Pages Section */}
      <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
        <div 
          className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('legal')}
        >
          <h2 className="text-lg font-semibold">Legal Pages</h2>
          <FaChevronDown className={`transition-transform ${expandedSections.legal ? 'rotate-180' : ''}`} />
        </div>
        
        {expandedSections.legal && (
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-2">Page Name</th>
                  <th className="text-left p-2">Path</th>
                  <th className="text-center p-2">Status</th>
                  <th className="text-center p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filterPages(legalPagesState).map(([key, page]) => (
                  <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-2 capitalize">{key}</td>
                    <td className="p-2">{page.path}</td>
                    <td className="p-2 text-center">
                      <button
                        className="focus:outline-none"
                        onClick={() => togglePageStatus(key, 'legal')}
                        title={page.enabled ? 'Disable page' : 'Enable page'}
                      >
                        {page.enabled ? (
                          <FaToggleOn className="text-green-500 text-2xl" />
                        ) : (
                          <FaToggleOff className="text-gray-400 text-2xl" />
                        )}
                      </button>
                    </td>
                    <td className="p-2 text-center">
                      <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={() => navigateToEdit(page.path)}
                        title="Edit page"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <p className="text-blue-800 text-sm">
          <strong>Note:</strong> Changes made here are saved to the browser's local storage. In a production environment, 
          these changes would be saved to a database or configuration file on the server.
        </p>
      </div>
    </div>
  );
};

export default PageManager; 