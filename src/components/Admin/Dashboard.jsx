import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaFileAlt, FaImages, FaBars, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newMenuItem, setNewMenuItem] = useState({ title: '', url: '', order: 0 });

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('authToken');
    if (!token) {
      setIsAuthenticated(false);
    } else {
      // Fetch menu items from API
      fetchMenuItems();
    }
  }, []);

  const fetchMenuItems = async () => {
    setIsLoading(true);
    try {
      // This would fetch from your API
      const response = await fetch('/api/menus');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch menu items');
      }
      
      setMenuItems(data);
    } catch (err) {
      console.error('Error fetching menu items:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const handleAddMenuItem = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This would connect to your API
      const response = await fetch('/api/menus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify(newMenuItem),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to add menu item');
      }
      
      // Refresh menu items
      fetchMenuItems();
      // Reset form
      setNewMenuItem({ title: '', url: '', order: 0 });
    } catch (err) {
      console.error('Error adding menu item:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMenuItem = async (id) => {
    if (!window.confirm('Are you sure you want to delete this menu item?')) {
      return;
    }
    
    setIsLoading(true);
    try {
      // This would connect to your API
      const response = await fetch(`/api/menus/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete menu item');
      }
      
      // Refresh menu items
      fetchMenuItems();
    } catch (err) {
      console.error('Error deleting menu item:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full px-4 py-2 ${activeTab === 'dashboard' ? 'bg-blue-900' : ''}`}
              >
                <FaHome className="mr-2" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('menus')}
                className={`flex items-center w-full px-4 py-2 ${activeTab === 'menus' ? 'bg-blue-900' : ''}`}
              >
                <FaBars className="mr-2" />
                Manage Menus
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('content')}
                className={`flex items-center w-full px-4 py-2 ${activeTab === 'content' ? 'bg-blue-900' : ''}`}
              >
                <FaFileAlt className="mr-2" />
                Edit Content
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('images')}
                className={`flex items-center w-full px-4 py-2 ${activeTab === 'images' ? 'bg-blue-900' : ''}`}
              >
                <FaImages className="mr-2" />
                Manage Images
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('users')}
                className={`flex items-center w-full px-4 py-2 ${activeTab === 'users' ? 'bg-blue-900' : ''}`}
              >
                <FaUsers className="mr-2" />
                Manage Users
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-auto p-4">
          <button
            onClick={handleLogout}
            className="flex items-center text-white"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="px-4 py-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'menus' && 'Manage Menus'}
              {activeTab === 'content' && 'Edit Content'}
              {activeTab === 'images' && 'Manage Images'}
              {activeTab === 'users' && 'Manage Users'}
            </h1>
          </div>
        </header>

        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Welcome to Admin Panel</h2>
                <p className="text-gray-600">
                  Use the sidebar to navigate to different sections and manage your website content.
                </p>
                <div className="mt-4">
                  <Link to="/" className="text-blue-600 hover:underline">
                    View Website
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <div className="text-2xl font-bold text-blue-700">5</div>
                    <div className="text-sm text-gray-600">Menu Items</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-2xl font-bold text-green-700">12</div>
                    <div className="text-sm text-gray-600">Pages</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded">
                    <div className="text-2xl font-bold text-yellow-700">8</div>
                    <div className="text-sm text-gray-600">Images</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded">
                    <div className="text-2xl font-bold text-purple-700">2</div>
                    <div className="text-sm text-gray-600">Users</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'menus' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Manage Navigation Menu</h2>
              
              {/* Add new menu item */}
              <div className="mb-6 p-4 border rounded-lg">
                <h3 className="text-lg font-medium mb-3">Add New Menu Item</h3>
                <form onSubmit={handleAddMenuItem}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-2 border rounded"
                        value={newMenuItem.title}
                        onChange={(e) => setNewMenuItem({...newMenuItem, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-2 border rounded"
                        value={newMenuItem.url}
                        onChange={(e) => setNewMenuItem({...newMenuItem, url: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Display Order
                      </label>
                      <input
                        type="number"
                        className="w-full p-2 border rounded"
                        value={newMenuItem.order}
                        onChange={(e) => setNewMenuItem({...newMenuItem, order: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isLoading ? 'Adding...' : 'Add Menu Item'}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Menu items list */}
              <div>
                <h3 className="text-lg font-medium mb-3">Current Menu Items</h3>
                {isLoading ? (
                  <p>Loading menu items...</p>
                ) : menuItems.length === 0 ? (
                  <p>No menu items found. Add some using the form above.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            URL
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {menuItems.map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.url}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.order}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button 
                                onClick={() => handleDeleteMenuItem(item.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Edit Page Content</h2>
              <p className="text-gray-600 mb-4">
                Select a page to edit its content. Changes will be saved directly to your GitHub repository.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/admin/edit/home" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Home Page</h3>
                  <p className="text-sm text-gray-600">Edit main landing page content</p>
                </Link>
                <Link to="/admin/edit/about" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">About Page</h3>
                  <p className="text-sm text-gray-600">Edit about us information</p>
                </Link>
                <Link to="/admin/edit/services" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Services</h3>
                  <p className="text-sm text-gray-600">Edit service offerings</p>
                </Link>
                <Link to="/admin/edit/contact" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Contact Page</h3>
                  <p className="text-sm text-gray-600">Edit contact information</p>
                </Link>
                <Link to="/admin/edit/training" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Training Page</h3>
                  <p className="text-sm text-gray-600">Edit training content</p>
                </Link>
                <Link to="/admin/edit/blogs" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Blogs Page</h3>
                  <p className="text-sm text-gray-600">Edit blog listings</p>
                </Link>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Service Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/admin/edit/services/devops" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">DevOps</h3>
                  <p className="text-sm text-gray-600">Edit DevOps service page</p>
                </Link>
                <Link to="/admin/edit/services/cloud-migration" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Cloud Migration</h3>
                  <p className="text-sm text-gray-600">Edit Cloud Migration service page</p>
                </Link>
                <Link to="/admin/edit/services/managed-services" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Managed Services</h3>
                  <p className="text-sm text-gray-600">Edit Managed Services page</p>
                </Link>
                <Link to="/admin/edit/services/infrastructure-as-code" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Infrastructure as Code</h3>
                  <p className="text-sm text-gray-600">Edit Infrastructure as Code service page</p>
                </Link>
                <Link to="/admin/edit/services/architecture-design" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Architecture Design</h3>
                  <p className="text-sm text-gray-600">Edit Architecture Design service page</p>
                </Link>
                <Link to="/admin/edit/services/security-compliance" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Security & Compliance</h3>
                  <p className="text-sm text-gray-600">Edit Security & Compliance service page</p>
                </Link>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Legal Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/admin/edit/terms" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Terms & Conditions</h3>
                  <p className="text-sm text-gray-600">Edit terms and conditions page</p>
                </Link>
                <Link to="/admin/edit/privacy" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Privacy Policy</h3>
                  <p className="text-sm text-gray-600">Edit privacy policy page</p>
                </Link>
                <Link to="/admin/edit/cookies" className="border p-4 rounded hover:bg-gray-50">
                  <h3 className="font-medium">Cookie Policy</h3>
                  <p className="text-sm text-gray-600">Edit cookie policy page</p>
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Manage Images</h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload New Image
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                  <button
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Upload
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-3">Image Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="border rounded overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-2">
                    <div className="text-sm truncate">header-image.jpg</div>
                    <button className="text-xs text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="border rounded overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-2">
                    <div className="text-sm truncate">about-hero.jpg</div>
                    <button className="text-xs text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="border rounded overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-2">
                    <div className="text-sm truncate">service-cloud.jpg</div>
                    <button className="text-xs text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
              <div className="mb-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Add New User
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Username
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        admin
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        admin@clouddigify.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Administrator
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 