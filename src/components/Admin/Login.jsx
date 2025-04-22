import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLock, FaUser, FaCloud, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define default credentials for fallback (in case env variables aren't set)
const DEFAULT_ADMIN_USERNAME = 'admin';
const DEFAULT_ADMIN_PASSWORD = 'password123';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        // Try to decode token to validate it's still good
        const decoded = JSON.parse(atob(token));
        
        // Check if token is expired
        if (decoded.exp && decoded.exp < Math.floor(Date.now() / 1000)) {
          console.log('Token expired, clearing...');
          localStorage.removeItem('authToken');
          return;
        }
        
        // Valid token, redirect to dashboard or intended destination
        const destination = location.state?.from || '/admin/dashboard';
        navigate(destination);
      } catch (e) {
        // Invalid token, clear it
        console.error('Invalid token found:', e);
        localStorage.removeItem('authToken');
      }
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
    
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    
    try {
      setIsLoggingIn(true);
      setError('');
      
      // Access environment variables for admin credentials
      // First check Vercel environment variables
      // Fallback to default credentials if env variables aren't set
      const envUsername = import.meta.env?.ADMIN_USERNAME || 
                         process.env?.REACT_APP_ADMIN_USERNAME || 
                         DEFAULT_ADMIN_USERNAME;
      
      const envPassword = import.meta.env?.ADMIN_PASSWORD || 
                         process.env?.REACT_APP_ADMIN_PASSWORD || 
                         DEFAULT_ADMIN_PASSWORD;
      
      // Verify credentials
      if (username !== envUsername || password !== envPassword) {
        throw new Error('Invalid username or password');
      }
      
      // If credentials are valid, create a token that expires in 7 days
      const token = btoa(JSON.stringify({
        username: username,
        role: 'admin',
        exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) // 7 days
      }));
      
      // Store token
      localStorage.setItem('authToken', token);
      
      // If remember me is checked, store credentials in localStorage
      if (rememberMe) {
        localStorage.setItem('rememberedUser', username);
      } else {
        localStorage.removeItem('rememberedUser');
      }
      
      // Navigate to dashboard or intended destination
      const destination = location.state?.from || '/admin/dashboard';
      navigate(destination);
      
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Load remembered username if exists
  useEffect(() => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      setUsername(rememberedUser);
      setRememberMe(true);
    }
  }, []);

  // Variants for framer-motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" 
           style={{ backgroundImage: "url('/images/cloud-bg.jpg')" }}></div>
      
      <motion.div 
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center">
          <div className="flex justify-center">
            <div className="p-4 bg-blue-600 rounded-full inline-flex items-center justify-center">
              <FaCloud className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
            CloudDigify
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Admin Portal
          </p>
        </motion.div>
        
        {error && (
          <motion.div 
            variants={itemVariants}
            className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 rounded-md"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </motion.div>
        )}
        
        <motion.form 
          className="mt-8 space-y-6" 
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <motion.button
              type="submit"
              disabled={isLoggingIn}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white 
                ${isLoggingIn ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                transition-all duration-200 ease-in-out`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaSignInAlt className={`h-5 w-5 ${isLoggingIn ? 'text-blue-300' : 'text-blue-500 group-hover:text-blue-400'}`} />
              </span>
              {isLoggingIn ? 'Signing in...' : 'Sign in'}
            </motion.button>
          </div>
          
          <div className="text-center text-sm text-gray-600 mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-blue-700">Secure Access</span>
            </div>
            <p className="font-medium mb-1">Please enter your admin credentials</p>
            <p className="text-xs text-gray-500">For testing purposes, use:</p>
            <p>Username: <span className="font-mono bg-gray-100 px-2 py-1 rounded">admin</span></p>
            <p>Password: <span className="font-mono bg-gray-100 px-2 py-1 rounded">password123</span></p>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login; 