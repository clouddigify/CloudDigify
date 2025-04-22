import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaFileAlt, FaImages, FaBars, FaSignOutAlt, FaUser, FaEdit, FaUpload, FaTrash, FaCheck, FaTimes, FaToggleOn } from 'react-icons/fa';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newMenuItem, setNewMenuItem] = useState({ title: '', url: '', order: 0 });
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({ success: false, error: null });
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.log('No auth token found in dashboard, redirecting to login');
      navigate('/admin/login', { state: { from: '/admin/dashboard' } });
      return;
    }
    
    // Try to decode token to get user info
    try {
      const tokenData = JSON.parse(atob(token));
      if (!tokenData || !tokenData.role) {
        throw new Error('Invalid token data');
      }
      setUsername(tokenData.username || 'Admin');
    } catch (e) {
      console.error('Error parsing token:', e);
      localStorage.removeItem('authToken');
      navigate('/admin/login', { state: { from: '/admin/dashboard' } });
      return;
    }
    
    // Load pages and menu items on initial render
    fetchPages();
    fetchMenuItems();
    fetchImages();
  }, [navigate]);
  
  // Simple base64 decode function
  const atob = (str) => {
    try {
      return decodeURIComponent(escape(window.atob(str)));
    } catch (e) {
      return window.atob(str);
    }
  };
  
  const fetchMenuItems = async () => {
    setIsLoading(true);
    try {
      console.log('Fetching menu items...');
      const response = await fetch('/api/menus');
      
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      
      const data = await response.json();
      console.log('Fetched menu items:', data);
      setMenuItems(data);
    } catch (err) {
      console.error('Error fetching menu items:', err);
      setError('Failed to load menu items. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const fetchPages = async () => {
    setLoading(true);
    try {
      // We don't need to call a separate API to get the page list
      // Just use our predefined list to avoid unnecessary API calls
      const availablePages = [
        { id: 'home', title: 'Home Page', path: 'home' },
        { id: 'about', title: 'About Us', path: 'about' },
        { id: 'services', title: 'Services Overview', path: 'services' },
        { id: 'training', title: 'Training', path: 'training' },
        { id: 'blogs', title: 'Blogs', path: 'blogs' },
        { id: 'contact', title: 'Contact Us', path: 'contact' },
        
        // Service pages
        { id: 'devops', title: 'DevOps Services', path: 'services/devops' },
        { id: 'cloud-migration', title: 'Cloud Migration', path: 'services/cloud-migration' },
        { id: 'managed-services', title: 'Managed Services', path: 'services/managed-services' },
        { id: 'infrastructure', title: 'Infrastructure as Code', path: 'services/infrastructure-as-code' },
        { id: 'architecture', title: 'Architecture Design', path: 'services/architecture-design' },
        { id: 'security', title: 'Security Compliance', path: 'services/security-compliance' },
        
        // Legal pages
        { id: 'terms', title: 'Terms and Conditions', path: 'terms' },
        { id: 'privacy', title: 'Privacy Policy', path: 'privacy' },
        { id: 'cookies', title: 'Cookie Policy', path: 'cookies' },
      ];
      
      setPages(availablePages);
      setError(null);
    } catch (err) {
      console.error('Error loading pages:', err);
      setError('Failed to load pages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/admin/login');
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

  const fetchImages = async () => {
    setImageLoading(true);
    try {
      console.log('Fetching images...');
      const response = await fetch('/api/images');
      
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      
      const data = await response.json();
      console.log('Fetched images:', data);
      setImages(data);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError('Failed to load images. Please try again.');
    } finally {
      setImageLoading(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file is an image
    if (!file.type.match('image.*')) {
      setUploadStatus({ success: false, error: 'Please select an image file (PNG, JPG, GIF)' });
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadStatus({ success: false, error: 'Image must be less than 5MB' });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage({
        file: file,
        preview: e.target.result,
        name: file.name,
        description: ''
      });
      setUploadStatus({ success: false, error: null });
    };
    reader.readAsDataURL(file);
  };

  const handleDescriptionChange = (e) => {
    if (selectedImage) {
      setSelectedImage({
        ...selectedImage,
        description: e.target.value
      });
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;
    
    setImageLoading(true);
    setUploadStatus({ success: false, error: null });
    
    try {
      // Generate a safe filename (remove spaces, special chars)
      const safeFileName = selectedImage.file.name
        .toLowerCase()
        .replace(/[^a-z0-9.]/g, '-');
        
      const response = await fetch('/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          imageData: selectedImage.preview,
          fileName: safeFileName,
          description: selectedImage.description
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to upload image');
      }
      
      // Reset form and refresh images
      setSelectedImage(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchImages();
      setUploadStatus({ success: true, error: null });
    } catch (err) {
      console.error('Error uploading image:', err);
      setUploadStatus({ success: false, error: err.message || 'Failed to upload image' });
    } finally {
      setImageLoading(false);
    }
  };

  const handleDeleteImage = async (imageId) => {
    if (!window.confirm('Are you sure you want to delete this image? This cannot be undone.')) {
      return;
    }
    
    setImageLoading(true);
    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete image');
      }
      
      // Refresh images
      fetchImages();
    } catch (err) {
      console.error('Error deleting image:', err);
      setError('Failed to delete image. Please try again.');
    } finally {
      setImageLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  const renderImagesTab = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Manage Images</h2>
      
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-lg font-medium mb-3">Upload New Image</h3>
        
        {uploadStatus.success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded flex items-center">
            <FaCheck className="mr-2" />
            Image uploaded successfully!
          </div>
        )}
        
        {uploadStatus.error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded flex items-center">
            <FaTimes className="mr-2" />
            {uploadStatus.error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Image
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            
            {selectedImage && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Description (optional)
                </label>
                <input
                  type="text"
                  value={selectedImage.description}
                  onChange={handleDescriptionChange}
                  placeholder="Enter image description"
                  className="w-full p-2 border rounded"
                />
              </div>
            )}
            
            <div className="mt-4">
              <button
                onClick={handleImageUpload}
                disabled={!selectedImage || imageLoading}
                className={`flex items-center justify-center px-4 py-2 rounded ${
                  !selectedImage || imageLoading
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {imageLoading ? (
                  <>Loading...</>
                ) : (
                  <>
                    <FaUpload className="mr-2" />
                    Upload Image
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div>
            {selectedImage && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview
                </label>
                <div className="relative border rounded-lg overflow-hidden h-60 bg-gray-100 flex items-center justify-center">
                  <img
                    src={selectedImage.preview}
                    alt="Preview"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {selectedImage.file.name} - {Math.round(selectedImage.file.size / 1024)}KB
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-3">Image Gallery</h3>
        {imageLoading && !selectedImage ? (
          <p className="text-gray-500">Loading images...</p>
        ) : images.length === 0 ? (
          <p className="text-gray-500">No images found. Upload some using the form above.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.description || image.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-3">
                  <div className="font-medium truncate">{image.name}</div>
                  {image.description && (
                    <div className="text-sm text-gray-500 truncate">{image.description}</div>
                  )}
                  <div className="mt-2 flex justify-between items-center">
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

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
                {pages.map((page) => (
                  <Link
                    to={`/admin/edit/${page.path}`}
                    key={page.id}
                    className="border p-4 rounded hover:bg-gray-50"
                  >
                    <h3 className="font-medium">{page.title}</h3>
                    <p className="text-sm text-gray-600">Edit {page.title} content</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'images' && renderImagesTab()}

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
                        {username}
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

          {activeTab === 'dashboard' && (
            <div className="mt-6">
              <Link
                to="/admin/pages"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition"
              >
                <FaToggleOn className="text-blue-500" />
                <span>Page Manager</span>
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 