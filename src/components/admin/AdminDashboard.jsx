import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExpense } from '../../context/ExpenseContext';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  useTheme,
  useMediaQuery,
  Stack,
  List,
  Divider,
  Breadcrumbs,
  Link,
  Tooltip,
  Chip,
  FormControlLabel,
  Switch
} from '@mui/material';
import {
  Add as AddIcon,
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
  Timeline as TimelineIcon,
  AccountBalance as AccountBalanceIcon,
  Receipt as ReceiptIcon,
  Settings as SettingsIcon,
  Assessment as AssessmentIcon,
  NavigateNext as NavigateNextIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
  Close as CloseIcon,
  HelpOutline as HelpOutlineIcon,
  CloudDownload as CloudDownloadIcon,
  PictureAsPdf as PictureAsPdfIcon,
  TableChart as TableChartIcon
} from '@mui/icons-material';
import { 
  formatCurrency, 
  roundAmount, 
  formatPercentage,
  calculateMonthlyMetrics,
  formatNetChange,
  formatAverage,
  calculateGrowthSafe,
  safeNumber,
  validateTransaction,
  validateTransactions
} from '../../utils/formatters';
import ContributionForm from './ContributionForm';
import ExpenseForm from './ExpenseForm';
import { toast } from 'react-toastify';

// Define members array at the top level
const MEMBERS = ['Manish', 'Chirag', 'Deepak'];

const TOOLTIPS = {
  monthlyGrowth: "Percentage change in net balance compared to last month",
  totalContributions: "Total funds contributed by all members to date",
  totalExpenses: "Total expenses incurred by all members to date",
  availableBalance: "Current balance (Total Contributions - Total Expenses)",
  avgPerMember: "Average expense per member this month",
  activeMembers: "Number of members with transactions this month"
};

// Default stats object to prevent undefined access
const DEFAULT_STATS = {
  growth: {
    expenses: 0,
    contributions: 0,
    balance: { value: 0, percentage: '0%', isPositive: false, trend: 'neutral' }
  },
  currentMonth: {
    expenses: 0,
    contributions: 0,
    balance: 0,
    expenseCategories: {},
    contributionCategories: {}
  },
  previousMonth: {
    expenses: 0,
    contributions: 0,
    balance: 0
  },
  allTime: {
    expenses: 0,
    contributions: 0,
    balance: 0
  },
  metadata: {
    hasData: false,
    error: null
  }
};

const ActionCard = ({ title, icon: Icon, onClick, color = 'primary.main' }) => (
  <Card 
    sx={{ 
      height: '100%',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 3,
      }
    }}
    onClick={onClick}
  >
    <CardContent sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
      textAlign: 'center'
    }}>
      <Icon sx={{ fontSize: 40, color: color, mb: 2 }} />
      <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend = null, 
  color = 'primary.main',
  tooltip = '',
  subtitle = '',
  breakdown = null,
  secondaryMetric = null
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[4]
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Icon sx={{ color: color, mr: 1 }} />
          <Typography color="textSecondary" variant="subtitle1">
            {title}
          </Typography>
          {tooltip && (
            <Tooltip 
              title={tooltip} 
              arrow 
              placement="top"
              sx={{
                '& .MuiTooltip-tooltip': {
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  boxShadow: 1,
                  fontSize: '0.875rem',
                  p: 1,
                  borderRadius: 1
                }
              }}
            >
              <HelpOutlineIcon 
                sx={{ 
                  ml: 1, 
                  fontSize: 18, 
                  color: 'text.secondary',
                  cursor: 'help'
                }} 
              />
            </Tooltip>
          )}
        </Box>
        <Typography variant="h4" component="div" sx={{ mb: 1, fontWeight: 500 }}>
          {value}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {subtitle}
          </Typography>
        )}
        {secondaryMetric && (
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            {secondaryMetric.label}:
            <span style={{ 
              fontWeight: 500, 
              color: 'text.primary',
              marginLeft: '4px'
            }}>
              {secondaryMetric.value}
            </span>
          </Typography>
        )}
        {breakdown && Object.keys(breakdown).length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Divider sx={{ my: 1 }} />
            {Object.entries(breakdown).map(([category, amount]) => (
              <Box 
                key={category} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  my: 0.5,
                  '&:hover': {
                    bgcolor: 'action.hover',
                    borderRadius: 1
                  },
                  px: 1,
                  py: 0.5
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {category}
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {amount}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const StatisticsGrid = ({ monthlyStats = DEFAULT_STATS }) => {
  const formatGrowthRate = (rate) => {
    if (!rate || rate === Infinity || isNaN(rate)) return 'N/A';
    return `${rate >= 0 ? '+' : ''}${(rate * 100).toFixed(1)}%`;
  };

  const getGrowthColor = (value) => {
    if (!value || isNaN(value)) return 'text.secondary';
    return value > 0 ? 'error.main' : 'success.main';
  };

  const safeValue = (value) => {
    return value || 0;
  };

  // Safely access nested properties
  const allTimeContributions = safeValue(monthlyStats?.allTime?.contributions);
  const allTimeExpenses = safeValue(monthlyStats?.allTime?.expenses);
  const currentMonthContributions = safeValue(monthlyStats?.currentMonth?.contributions);
  const currentMonthExpenses = safeValue(monthlyStats?.currentMonth?.expenses);
  const previousMonthExpenses = safeValue(monthlyStats?.previousMonth?.expenses);
  const activeMembers = safeValue(monthlyStats?.activeMembers);

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Monthly Growth"
          value={formatGrowthRate(safeValue(monthlyStats?.growth?.expenses))}
          icon={TrendingUpIcon}
          color={getGrowthColor(safeValue(monthlyStats?.growth?.expenses))}
          tooltip={TOOLTIPS.monthlyGrowth}
          secondaryMetric={{
            label: "vs. Last Month",
            value: formatCurrency(currentMonthExpenses - previousMonthExpenses)
          }}
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Contributions"
          value={formatCurrency(allTimeContributions)}
          icon={AccountBalanceIcon}
          tooltip={TOOLTIPS.totalContributions}
          secondaryMetric={{
            label: "This Month",
            value: formatCurrency(currentMonthContributions)
          }}
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Expenses"
          value={formatCurrency(allTimeExpenses)}
          icon={ReceiptIcon}
          tooltip={TOOLTIPS.totalExpenses}
          secondaryMetric={{
            label: "This Month",
            value: formatCurrency(currentMonthExpenses)
          }}
          breakdown={{
            "Last Month": formatCurrency(previousMonthExpenses)
          }}
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Available Balance"
          value={formatCurrency(allTimeContributions - allTimeExpenses)}
          icon={AccountBalanceIcon}
          tooltip={TOOLTIPS.availableBalance}
          secondaryMetric={{
            label: "Active Members",
            value: `${activeMembers || 0}/${MEMBERS.length}`
          }}
          breakdown={{
            "This Month's Balance": formatCurrency(currentMonthContributions - currentMonthExpenses)
          }}
        />
      </Grid>
    </Grid>
  );
};

const AdminDashboard = () => {
  const [monthlyStats, setMonthlyStats] = useState(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [quickAddAnchorEl, setQuickAddAnchorEl] = useState(null);
  const [actionAnchorEl, setActionAnchorEl] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [showAdvancedStats, setShowAdvancedStats] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  
  const { 
    expenses = [], 
    contributions = [], 
    addExpense, 
    addContribution,
    deleteExpense,
    deleteContribution,
    updateExpense,
    updateContribution 
  } = useExpense() || {};

  useEffect(() => {
    const calculateStats = () => {
      try {
        setLoading(true);
        const stats = calculateMonthlyMetrics({ expenses, contributions });
        setMonthlyStats(stats || DEFAULT_STATS);
        setError(null);
      } catch (err) {
        console.error('Error calculating stats:', err);
        setError('Failed to calculate statistics');
        setMonthlyStats(DEFAULT_STATS);
      } finally {
        setLoading(false);
      }
    };

    calculateStats();
  }, [expenses, contributions]);

  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const handleQuickAddClick = (event) => {
    setQuickAddAnchorEl(event.currentTarget);
  };

  const handleQuickAddClose = () => {
    setQuickAddAnchorEl(null);
  };

  const handleActionMenuOpen = (event, item) => {
    event.stopPropagation();
    setSelectedItem(item);
    setActionAnchorEl(event.currentTarget);
  };

  const handleActionMenuClose = () => {
    setActionAnchorEl(null);
    setSelectedItem(null);
  };

  const handleOpenDialog = (type, isEdit = false, data = null) => {
    setDialogType(type);
    setIsEdit(isEdit);
    setSelectedItem(data);
    setDialogOpen(true);
    handleQuickAddClose();
    handleActionMenuClose();
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogType(null);
    setIsEdit(false);
    setSelectedItem(null);
  };

  const handleExpenseSubmit = async (data) => {
    try {
      if (isEdit && selectedItem) {
        await updateExpense(selectedItem.id, data);
        toast.success('Expense updated successfully');
      } else {
        await addExpense(data);
        toast.success('Expense added successfully');
      }
      handleCloseDialog();
    } catch (error) {
      toast.error(error.message || 'Failed to save expense');
    }
  };

  const handleContributionSubmit = async (data) => {
    try {
      if (isEdit && selectedItem) {
        await updateContribution(selectedItem.id, data);
        toast.success('Contribution updated successfully');
      } else {
        await addContribution(data);
        toast.success('Contribution added successfully');
      }
      handleCloseDialog();
    } catch (error) {
      toast.error(error.message || 'Failed to save contribution');
    }
  };

  const handleDelete = async () => {
    try {
      if (!selectedItem) return;
      
      if (selectedItem.type === 'expense') {
        await deleteExpense(selectedItem.id);
        toast.success('Expense deleted successfully');
      } else {
        await deleteContribution(selectedItem.id);
        toast.success('Contribution deleted successfully');
      }
      
      setDeleteDialogOpen(false);
      handleActionMenuClose();
    } catch (error) {
      toast.error(error.message || 'Failed to delete item');
    }
  };

  // Combine and sort recent activity
  const recentActivity = [...(expenses || []), ...(contributions || [])]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Loading dashboard...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">{error}</Typography>
        <Button 
          variant="contained" 
          onClick={() => window.location.reload()} 
          sx={{ mt: 2 }}
        >
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
        >
          <Link
            color="inherit"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Dashboard
          </Link>
          <Typography color="text.primary">Financial Overview</Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Financial Overview
        </Typography>
        <Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleQuickAddClick}
            sx={{ mr: 2 }}
          >
            Quick Add
          </Button>
          <IconButton onClick={handleSettingsClick}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      <StatisticsGrid monthlyStats={monthlyStats} />

      {/* Dialogs and Menus */}
      <Menu
        anchorEl={quickAddAnchorEl}
        open={Boolean(quickAddAnchorEl)}
        onClose={handleQuickAddClose}
      >
        <MenuItem onClick={() => handleOpenDialog('expense')}>
          <ListItemIcon>
            <ReceiptIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Expense</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleOpenDialog('contribution')}>
          <ListItemIcon>
            <AccountBalanceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Contribution</ListItemText>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={settingsAnchorEl}
        open={Boolean(settingsAnchorEl)}
        onClose={handleSettingsClose}
      >
        <MenuItem onClick={() => {
          setShowAdvancedStats(!showAdvancedStats);
          handleSettingsClose();
        }}>
          <ListItemIcon>
            <AssessmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {showAdvancedStats ? 'Hide Advanced Stats' : 'Show Advanced Stats'}
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={() => {
          navigate('/reports');
          handleSettingsClose();
        }}>
          <ListItemIcon>
            <TimelineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>View Reports</ListItemText>
        </MenuItem>
      </Menu>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {isEdit ? 'Edit' : 'Add'} {dialogType === 'expense' ? 'Expense' : 'Contribution'}
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {dialogType === 'expense' ? (
            <ExpenseForm
              onSubmit={handleExpenseSubmit}
              initialData={isEdit ? selectedItem : null}
              members={MEMBERS}
            />
          ) : (
            <ContributionForm
              onSubmit={handleContributionSubmit}
              initialData={isEdit ? selectedItem : null}
              members={MEMBERS}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this {selectedItem?.type}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard; 