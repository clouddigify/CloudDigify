import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Receipt as ReceiptIcon,
  AccountBalance as AccountBalanceIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import AdminDashboard from './AdminDashboard';
import ExpenseForm from './ExpenseForm';
import ContributionForm from './ContributionForm';
import Reports from './Reports';
import Settings from './Settings';
import * as storageService from '../../services/storageService';
import { toast } from 'react-toastify';

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [expenses, setExpenses] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [stats, setStats] = useState({
    totalExpenses: 0,
    totalContributions: 0,
    balance: 0,
    memberBalances: {},
    recentExpenses: [],
    recentContributions: []
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('expense');
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    if (path && ['dashboard', 'expenses', 'contributions', 'reports', 'settings'].includes(path)) {
      setActiveSection(path);
    }
    // Check for edit data in location state
    if (location.state?.editData) {
      setSelectedItem(location.state.editData);
      setIsEditMode(true);
      setDialogType(location.state.editData.contributedBy ? 'contribution' : 'expense');
    }
  }, [location.pathname, location.state]);

  const loadData = () => {
    const expensesData = storageService.getExpenses();
    const contributionsData = storageService.getContributions();
    const statsData = storageService.getSummaryStats();
    
    setExpenses(expensesData);
    setContributions(contributionsData);
    setStats(statsData);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleAddExpense = async (expenseData) => {
    try {
      const updatedExpenses = storageService.addExpense(expenseData);
      setExpenses(updatedExpenses);
      loadData();
      toast.success('Expense added successfully!');
      handleCloseDialog();
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Failed to add expense: ' + error.message);
    }
  };

  const handleAddContribution = async (contributionData) => {
    try {
      const updatedContributions = storageService.addContribution(contributionData);
      setContributions(updatedContributions);
      loadData();
      toast.success('Contribution added successfully!');
      handleCloseDialog();
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Failed to add contribution: ' + error.message);
    }
  };

  const handleEditExpense = async (expenseData) => {
    try {
      const updatedExpenses = storageService.updateExpense(expenseData);
      setExpenses(updatedExpenses);
      loadData();
      toast.success('Expense updated successfully!');
      handleCloseDialog();
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Failed to update expense: ' + error.message);
    }
  };

  const handleEditContribution = async (contributionData) => {
    try {
      const updatedContributions = storageService.updateContribution(contributionData);
      setContributions(updatedContributions);
      loadData();
      toast.success('Contribution updated successfully!');
      handleCloseDialog();
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Failed to update contribution: ' + error.message);
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      const updatedExpenses = storageService.deleteExpense(expenseId);
      setExpenses(updatedExpenses);
      loadData();
      toast.success('Expense deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete expense: ' + error.message);
    }
  };

  const handleDeleteContribution = async (contributionId) => {
    try {
      const updatedContributions = storageService.deleteContribution(contributionId);
      setContributions(updatedContributions);
      loadData();
      toast.success('Contribution deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete contribution: ' + error.message);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    setIsEditMode(false);
    setSelectedItem(null);
    navigate(`/admin/${section}`);
  };

  const handleSubmit = (data) => {
    if (isEditMode) {
      if (dialogType === 'expense' || data.paidBy) {
        handleEditExpense(data);
      } else {
        handleEditContribution(data);
      }
    } else {
      if (dialogType === 'expense' || data.paidBy) {
        handleAddExpense(data);
      } else {
        handleAddContribution(data);
      }
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setIsEditMode(false);
    setSelectedItem(null);
    // Clear location state
    navigate(location.pathname, { replace: true, state: {} });
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'expenses', label: 'Add Expense', icon: <ReceiptIcon /> },
    { id: 'contributions', label: 'Add Contribution', icon: <AccountBalanceIcon /> },
    { id: 'reports', label: 'Reports', icon: <AssessmentIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon /> }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <AppBar 
        position="static" 
        sx={{ 
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
        }}
        elevation={0}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="primary" sx={{ mr: 2, fontWeight: 600 }}>
            Admin Portal
          </Typography>
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ 
              flex: 1,
              display: { xs: mobileMenuOpen ? 'flex' : 'none', md: 'flex' },
              flexDirection: { xs: 'column', md: 'row' },
              position: { xs: 'absolute', md: 'static' },
              top: { xs: '100%', md: 'auto' },
              left: { xs: 0, md: 'auto' },
              right: { xs: 0, md: 'auto' },
              bgcolor: { xs: 'background.paper', md: 'transparent' },
              zIndex: { xs: 1000, md: 1 },
              py: { xs: 2, md: 0 },
              px: { xs: 2, md: 0 },
              boxShadow: { xs: 3, md: 0 }
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.id}
                startIcon={item.icon}
                onClick={() => handleSectionChange(item.id)}
                color={activeSection === item.id ? 'primary' : 'inherit'}
                variant={activeSection === item.id ? 'contained' : 'text'}
                fullWidth={isMobile}
                sx={{ 
                  borderRadius: 2,
                  textTransform: 'none',
                  justifyContent: isMobile ? 'flex-start' : 'center'
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <IconButton 
            color="error" 
            onClick={handleLogout}
            sx={{ ml: 2 }}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container 
        maxWidth="xl" 
        sx={{ 
          py: 3, 
          flex: 1,
          px: { xs: 1, sm: 3 }
        }}
      >
        {/* Main Content */}
        <Box>
          {activeSection === 'dashboard' && (
            <AdminDashboard 
              expenses={expenses}
              contributions={contributions}
              stats={stats}
              onAddExpense={handleAddExpense}
              onAddContribution={handleAddContribution}
              onEditExpense={handleEditExpense}
              onEditContribution={handleEditContribution}
              onDeleteExpense={handleDeleteExpense}
              onDeleteContribution={handleDeleteContribution}
            />
          )}
          {activeSection === 'expenses' && (
            <ExpenseForm 
              onSubmit={handleSubmit}
              initialData={selectedItem}
            />
          )}
          {activeSection === 'contributions' && (
            <ContributionForm 
              onSubmit={handleSubmit}
              initialData={selectedItem}
            />
          )}
          {activeSection === 'reports' && (
            <Reports 
              expenses={expenses}
              contributions={contributions}
              stats={stats}
            />
          )}
          {activeSection === 'settings' && (
            <Settings />
          )}
        </Box>

        {/* Form Dialog */}
        <Dialog 
          open={dialogOpen} 
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {isEditMode ? 'Edit' : 'Add'} {dialogType === 'expense' ? 'Expense' : 'Contribution'}
          </DialogTitle>
          <DialogContent>
            {dialogType === 'expense' ? (
              <ExpenseForm 
                onSubmit={handleSubmit}
                initialData={isEditMode ? selectedItem : null}
              />
            ) : (
              <ContributionForm 
                onSubmit={handleSubmit}
                initialData={isEditMode ? selectedItem : null}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default AdminPage; 