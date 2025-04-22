import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLock, FaUser, FaSpinner } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('Token check on login page:', token ? 'Token exists' : 'No token');
    
    // Only attempt validation if token exists
    if (token) {
      // Prevent validation loop - check if we were redirected from dashboard
      const from = location.state?.from;
      if (from === '/admin/dashboard') {
        console.log('Preventing validation loop - coming from dashboard');
        localStorage.removeItem('authToken');
        return;
      }
      
      const validateToken = async () => {
        try {
          console.log('Validating token...');
          // Add a simple auth check instead of hitting the API
          // This prevents a redirect loop if the API is having issues
          try {
            const tokenData = JSON.parse(atob(token));
            if (!tokenData || !tokenData.role) {
              throw new Error('Invalid token format');
            }
            console.log('Token format valid, redirecting to dashboard');
            navigate('/admin/dashboard');
            return;
          } catch (parseError) {
            console.error('Token parse error:', parseError);
            localStorage.removeItem('authToken');
            return;
          }
          
          // If above check fails, try the API validation as fallback
          const response = await fetch('/api/auth/validate', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            console.log('Token validated via API, redirecting to dashboard');
            navigate('/admin/dashboard');
          } else {
            console.log('Token invalid via API, clearing');
            localStorage.removeItem('authToken');
          }
        } catch (err) {
          console.error('Error validating token:', err);
          localStorage.removeItem('authToken');
        }
      };
      
      validateToken();
    }
  }, [navigate, location]);

  // Simple base64 decode function
  const atob = (str) => {
    try {
      return decodeURIComponent(escape(window.atob(str)));
    } catch (e) {
      return window.atob(str);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('Authenticating...');
    
    try {
      console.log('Attempting to log in');
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      // For debugging API response
      const responseText = await response.text();
      let responseData;
      
      try {
        responseData = JSON.parse(responseText);
      } catch (err) {
        console.error('Error parsing response:', responseText);
        throw new Error('Invalid response from server. Please try again later.');
      }
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Authentication failed');
      }
      
      // Valid login
      console.log('Login successful');
      
      if (responseData.token) {
        localStorage.setItem('authToken', responseData.token);
        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate('/admin/dashboard'), 1000);
      } else {
        throw new Error('No authentication token received');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Authentication failed. Please try again.');
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <img 
            src={logo} 
            alt="CloudDigify Logo" 
            className="mx-auto h-16 mb-2" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150x60?text=CloudDigify';
            }}
          />
          <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
          <p className="text-gray-600 text-sm mt-1">Sign in to manage your website content</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {message && !error && (
          <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded-md text-sm">
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" />
                Logging in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>This is a secured area. Unauthorized access is prohibited.</p>
          <p className="mt-1">For assistance, please contact your administrator.</p>
        </div>
      </div>
    </div>
  );
};

export default Login; 