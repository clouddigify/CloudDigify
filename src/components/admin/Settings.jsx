import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import * as storageService from '../../services/storageService';
import { toast } from 'react-toastify';

const Settings = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    browser: true,
    weeklyReport: true
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    const storedCategories = storageService.getCategories();
    setCategories(storedCategories);
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const updatedCategories = [...categories, newCategory.trim()];
      storageService.setCategories(updatedCategories);
      setCategories(updatedCategories);
      setNewCategory('');
      toast.success('Category added successfully!');
    }
  };

  const handleDeleteCategory = (category) => {
    const updatedCategories = categories.filter(c => c !== category);
    storageService.setCategories(updatedCategories);
    setCategories(updatedCategories);
    toast.success('Category deleted successfully!');
  };

  const handleEditCategory = (oldCategory) => {
    setEditingCategory(oldCategory);
    setNewCategory(oldCategory);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (newCategory.trim() && editingCategory) {
      const updatedCategories = categories.map(c => 
        c === editingCategory ? newCategory.trim() : c
      );
      storageService.setCategories(updatedCategories);
      setCategories(updatedCategories);
      setEditDialogOpen(false);
      setEditingCategory(null);
      setNewCategory('');
      toast.success('Category updated successfully!');
    }
  };

  const handleNotificationChange = (setting) => (event) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: event.target.checked
    }));
    toast.success(`${setting} notifications ${event.target.checked ? 'enabled' : 'disabled'}`);
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      storageService.clearAllData();
      loadCategories();
      toast.success('All data cleared successfully!');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Settings
        </Typography>

        <Grid container spacing={3}>
          {/* Category Management */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Manage Categories
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    size="small"
                    label="New Category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    sx={{ mb: 1 }}
                  />
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddCategory}
                    disabled={!newCategory.trim()}
                  >
                    Add Category
                  </Button>
                </Box>
                <List>
                  {categories.map((category, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <ListItemText primary={category} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            onClick={() => handleEditCategory(category)}
                            sx={{ mr: 1 }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            onClick={() => handleDeleteCategory(category)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      {index < categories.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* User Management */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  User Management
                </Typography>
                <List>
                  {['Manish', 'Chirag', 'Deepak'].map((user, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <ListItemText
                          primary={user}
                          secondary="Admin"
                        />
                      </ListItem>
                      {index < 2 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
                <Alert severity="info" sx={{ mt: 2 }}>
                  User management features will be available in future updates.
                </Alert>
              </CardContent>
            </Card>
          </Grid>

          {/* Notification Preferences */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Notification Preferences
                </Typography>
                <Stack spacing={2}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications.email}
                        onChange={handleNotificationChange('email')}
                      />
                    }
                    label="Email Notifications"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications.browser}
                        onChange={handleNotificationChange('browser')}
                      />
                    }
                    label="Browser Notifications"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications.weeklyReport}
                        onChange={handleNotificationChange('weeklyReport')}
                      />
                    }
                    label="Weekly Report"
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Data Management */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Data Management
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleClearData}
                >
                  Clear All Data
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Edit Category Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            fullWidth
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveEdit} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Settings; 