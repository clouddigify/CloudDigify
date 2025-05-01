import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      const loginPath = 'admin/login';
      navigate(loginPath, { 
        state: { from: location.pathname },
        replace: true 
      });
    }
  }, [isAuthenticated, loading, navigate, location]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default AdminRoute; 