import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  Alert
} from '@mui/material';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAdmin();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const success = login(credentials);
    if (success) {
      toast.success('Login successful!');
      const from = location.state?.from || '/admin/dashboard';
      navigate(from, { replace: true });
    } else {
      setError('Invalid credentials');
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Admin Login
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            required
            fullWidth
            label="Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="username"
          />

          <TextField
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin; 