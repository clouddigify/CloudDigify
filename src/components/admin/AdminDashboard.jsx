import React, { useState, useEffect, useRef } from 'react';
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
  LinearProgress,
  Avatar,
  AvatarGroup
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
  TableChart as TableChartIcon,
  MonetizationOn as MonetizationOnIcon,
  Payments as PaymentsIcon,
  ShowChart as ShowChartIcon,
  People as PeopleIcon,
  Download as DownloadIcon
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
import { Chart } from 'chart.js/auto';

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

// Enhanced MetricCard component
const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = 'primary.main',
  tooltip,
  breakdown,
  onClick,
  avatars,
  progress,
  className
}) => {
  const theme = useTheme();
  
  return (
    <Card
      onClick={onClick}
      sx={{
        height: '100%',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': onClick ? {
          transform: 'translateY(-4px)',
          boxShadow: 3,
        } : {},
        bgcolor: trend?.isPositive ? 'success.alpha4' : trend?.isNegative ? 'error.alpha4' : 'background.paper'
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ 
            p: 1, 
            borderRadius: 1, 
            bgcolor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2
          }}>
            <Icon sx={{ color: 'common.white' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle2" color="text.secondary">
                {title}
              </Typography>
              {tooltip && (
                <Tooltip title={tooltip} arrow placement="top">
                  <HelpOutlineIcon sx={{ ml: 1, fontSize: 16, color: 'text.secondary' }} />
                </Tooltip>
              )}
            </Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 500, my: 1 }}>
              {value}
            </Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>

        {trend && (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            {trend.isPositive ? (
              <ArrowUpwardIcon sx={{ color: 'success.main', fontSize: 16 }} />
            ) : (
              <ArrowDownwardIcon sx={{ color: 'error.main', fontSize: 16 }} />
            )}
            <Typography 
              variant="body2" 
              sx={{ 
                color: trend.isPositive ? 'success.main' : 'error.main',
                fontWeight: 500
              }}
            >
              {trend.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              vs last month
            </Typography>
          </Stack>
        )}

        {progress && (
          <Box sx={{ mt: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress.value} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: 'background.neutral',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4
                }
              }} 
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
              {progress.label}
            </Typography>
          </Box>
        )}

        {avatars && (
          <Box sx={{ mt: 2 }}>
            <AvatarGroup max={4} sx={{ justifyContent: 'flex-start' }}>
              {avatars.map((avatar, index) => (
                <Avatar 
                  key={index}
                  alt={avatar.name}
                  src={avatar.image}
                  sx={{ width: 24, height: 24 }}
                >
                  {avatar.name.charAt(0)}
                </Avatar>
              ))}
            </AvatarGroup>
          </Box>
        )}

        {breakdown && (
          <Box sx={{ mt: 2 }}>
            <Divider sx={{ my: 1 }} />
            {Object.entries(breakdown).map(([key, val]) => (
              <Box 
                key={key} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 0.5
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {key}
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {val}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

// Quick Action Button component
const QuickActionButton = ({ icon: Icon, label, onClick, color = 'primary' }) => (
  <Button
    variant="outlined"
    color={color}
    startIcon={<Icon />}
    onClick={onClick}
    sx={{
      borderRadius: 2,
      py: 1,
      px: 2,
      textTransform: 'none',
      fontWeight: 500
    }}
  >
    {label}
  </Button>
);

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

  // Add chart reference
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Effect to handle chart cleanup
  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  // Effect to update chart data
  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Expenses',
            data: [3000, 2500, 3500, 2800, monthlyStats.currentMonth?.expenses || 0],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            },
            tooltip: {
              callbacks: {
                label: (context) => `₹${context.formattedValue}`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `₹${value}`
              }
            }
          }
        }
      });
    }
  }, [monthlyStats.currentMonth?.expenses]);

  useEffect(() => {
    const calculateStats = () => {
      try {
        setLoading(true);

        // Debug: Log raw data
        console.log('Raw expenses:', expenses);
        console.log('Raw contributions:', contributions);

        // Validate transactions before calculation
        const validExpenses = expenses.map(expense => {
          const validation = validateTransaction(expense);
          console.log('Expense validation:', {
            expense,
            validation,
            isValid: validation.isValid,
            errors: validation.errors
          });
          return { transaction: expense, isValid: validation.isValid };
        });

        const validContributions = contributions.map(contribution => {
          const validation = validateTransaction(contribution);
          console.log('Contribution validation:', {
            contribution,
            validation,
            isValid: validation.isValid,
            errors: validation.errors
          });
          return { transaction: contribution, isValid: validation.isValid };
        });

        // Log validation summary
        console.log('Validation Summary:', {
          totalExpenses: expenses.length,
          validExpenses: validExpenses.filter(v => v.isValid).length,
          totalContributions: contributions.length,
          validContributions: validContributions.filter(v => v.isValid).length
        });

        // Calculate stats with validated data
        const stats = calculateMonthlyMetrics({ 
          expenses: expenses.filter((_, idx) => validExpenses[idx].isValid),
          contributions: contributions.filter((_, idx) => validContributions[idx].isValid)
        });

        // Debug: Log calculated stats
        console.log('Calculated stats:', stats);

        setMonthlyStats(stats || DEFAULT_STATS);
        setError(null);

        // If all transactions are invalid, show a specific error
        if (validExpenses.every(v => !v.isValid) && validContributions.every(v => !v.isValid)) {
          setError('No valid transactions found. Please check transaction data format.');
        }
      } catch (err) {
        console.error('Error calculating stats:', err);
        setError('Failed to calculate statistics: ' + err.message);
        setMonthlyStats(DEFAULT_STATS);
      } finally {
        setLoading(false);
      }
    };

    calculateStats();
  }, [expenses, contributions]);

  // Add test data function for debugging
  const addTestData = async () => {
    try {
      // Add a test contribution
      const testContribution = {
        id: Date.now(),
        amount: "25000",
        date: new Date().toISOString().split('T')[0],
        contributedBy: "Chirag",
        category: "Capital",
        type: "contribution"
      };

      // Add a test expense
      const testExpense = {
        id: Date.now() + 1,
        amount: "5000",
        date: new Date().toISOString().split('T')[0],
        paidBy: "Manish",
        category: "Office Supplies",
        type: "expense"
      };

      await addContribution(testContribution);
      await addExpense(testExpense);
      toast.success('Test data added successfully');
    } catch (error) {
      toast.error('Failed to add test data: ' + error.message);
    }
  };

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
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Financial Overview</Typography>
        </Breadcrumbs>
        
        <Box sx={{ 
          mt: 2,
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="h4" component="h1">
            Financial Overview
          </Typography>
          
          <Stack direction="row" spacing={2}>
            <QuickActionButton
              icon={AddIcon}
              label="Quick Add"
              onClick={(e) => setQuickAddAnchorEl(e.currentTarget)}
            />
            <IconButton onClick={(e) => setSettingsAnchorEl(e.currentTarget)}>
              <SettingsIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* Main Metrics Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Total Contributions */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Contributions"
            value={formatCurrency(monthlyStats.allTime?.contributions || 0)}
            subtitle={`This Month: ${formatCurrency(monthlyStats.currentMonth?.contributions || 0)}`}
            icon={MonetizationOnIcon}
            color={theme.palette.success.main}
            trend={{
              value: monthlyStats.growth?.contributions?.percentage || '0%',
              isPositive: monthlyStats.growth?.contributions?.isPositive
            }}
            tooltip="Total funds contributed by all members to date"
          />
        </Grid>

        {/* Total Expenses */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Expenses"
            value={formatCurrency(monthlyStats.allTime?.expenses || 0)}
            subtitle={`This Month: ${formatCurrency(monthlyStats.currentMonth?.expenses || 0)}`}
            icon={ReceiptIcon}
            color={theme.palette.error.main}
            trend={{
              value: monthlyStats.growth?.expenses?.percentage || '0%',
              isPositive: monthlyStats.growth?.expenses?.isPositive
            }}
            tooltip="Total expenses incurred by all members to date"
            breakdown={{
              "Per Member": formatCurrency((monthlyStats.currentMonth?.expenses || 0) / 3)
            }}
          />
        </Grid>

        {/* Available Balance */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Available Balance"
            value={formatCurrency((monthlyStats.allTime?.contributions || 0) - (monthlyStats.allTime?.expenses || 0))}
            subtitle="Net = Contributions - Expenses"
            icon={AccountBalanceIcon}
            color={theme.palette.info.main}
            tooltip="Current balance after all transactions"
            breakdown={{
              "This Month": formatCurrency((monthlyStats.currentMonth?.contributions || 0) - (monthlyStats.currentMonth?.expenses || 0))
            }}
          />
        </Grid>

        {/* Active Members */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Active Members"
            value={`${monthlyStats.currentMonth?.activeMembers || 3}`}
            icon={PeopleIcon}
            color={theme.palette.warning.main}
            progress={{
              value: ((monthlyStats.currentMonth?.activeMembers || 3) / 3) * 100,
              label: `${monthlyStats.currentMonth?.activeMembers || 3} of 3 members active`
            }}
            avatars={[
              { name: 'Manish' },
              { name: 'Chirag' },
              { name: 'Deepak' }
            ]}
          />
        </Grid>

        {/* Monthly Growth */}
        <Grid item xs={12} sm={6} md={6}>
          <MetricCard
            title="Monthly Growth"
            value={monthlyStats.growth?.balance?.percentage || '+0%'}
            icon={ShowChartIcon}
            color={theme.palette.success.main}
            trend={{
              value: monthlyStats.growth?.balance?.percentage || '+0%',
              isPositive: monthlyStats.growth?.balance?.isPositive
            }}
            tooltip="Percentage change in net balance compared to last month"
            breakdown={{
              "Previous Month": formatCurrency(monthlyStats.previousMonth?.balance || 0),
              "Current Month": formatCurrency(monthlyStats.currentMonth?.balance || 0)
            }}
          />
        </Grid>

        {/* Expense Trend */}
        <Grid item xs={12} sm={6} md={6}>
          <MetricCard
            title="Expense Trend"
            value="+8.2%"
            icon={TimelineIcon}
            color={theme.palette.warning.main}
            trend={{
              value: "+8.2%",
              isPositive: true
            }}
            tooltip="Month-over-month change in expenses"
            breakdown={{
              "Previous Month": formatCurrency(monthlyStats.previousMonth?.expenses || 0),
              "Current Month": formatCurrency(monthlyStats.currentMonth?.expenses || 0)
            }}
          />
        </Grid>
      </Grid>

      {/* Recent Activity Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recent Activity</Typography>
        {(!loading && recentActivity.length === 0) ? (
          <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.neutral' }}>
            <Typography color="text.secondary">
              No recent activities to display
            </Typography>
          </Paper>
        ) : (
          <List>
            {recentActivity.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  bgcolor: 'background.paper',
                  mb: 1,
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'background.neutral'
                  }
                }}
              >
                <ListItemIcon>
                  {item.type === 'expense' ? (
                    <ReceiptIcon color="error" />
                  ) : (
                    <MonetizationOnIcon color="success" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={item.description}
                  secondary={`${item.type === 'expense' ? 'Paid by' : 'Contributed by'}: ${
                    item.paidBy || item.contributedBy
                  } • ${new Date(item.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}`}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: item.type === 'expense' ? 'error.main' : 'success.main',
                    fontWeight: 500,
                    mr: 2
                  }}
                >
                  {item.type === 'expense' ? '-' : '+'}
                  {formatCurrency(item.amount)}
                </Typography>
                <IconButton 
                  edge="end"
                  onClick={(e) => handleActionMenuOpen(e, item)}
                >
                  <MoreVertIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Menus */}
      <Menu
        anchorEl={quickAddAnchorEl}
        open={Boolean(quickAddAnchorEl)}
        onClose={() => setQuickAddAnchorEl(null)}
      >
        <MenuItem onClick={() => {
          handleOpenDialog('expense');
          setQuickAddAnchorEl(null);
        }}>
          <ListItemIcon>
            <ReceiptIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Expense</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => {
          handleOpenDialog('contribution');
          setQuickAddAnchorEl(null);
        }}>
          <ListItemIcon>
            <MonetizationOnIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Contribution</ListItemText>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={settingsAnchorEl}
        open={Boolean(settingsAnchorEl)}
        onClose={() => setSettingsAnchorEl(null)}
      >
        <MenuItem onClick={() => {
          navigate('/admin/reports');
          setSettingsAnchorEl(null);
        }}>
          <ListItemIcon>
            <AssessmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>View Reports</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => {
          navigate('/admin/users');
          setSettingsAnchorEl(null);
        }}>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Manage Users</ListItemText>
        </MenuItem>
        <Divider />
        {process.env.NODE_ENV === 'development' && (
          <MenuItem onClick={() => {
            addTestData();
            setSettingsAnchorEl(null);
          }}>
            <ListItemIcon>
              <CloudDownloadIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add Test Data</ListItemText>
          </MenuItem>
        )}
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

      {/* Chart Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2,
          mb: 4,
          bgcolor: 'background.paper' 
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          📊 Expense Trend
        </Typography>
        <Box sx={{ height: 300, position: 'relative' }}>
          <canvas ref={chartRef} />
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminDashboard; 