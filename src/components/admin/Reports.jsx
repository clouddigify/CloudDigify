import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExpense } from '../../context/ExpenseContext';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  Stack,
  Breadcrumbs,
  Link,
  Menu,
  MenuItem,
  TextField,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  NavigateNext as NavigateNextIcon,
  CalendarToday as CalendarIcon,
  FilterList as FilterIcon,
  GetApp as DownloadIcon,
  PictureAsPdf as PdfIcon,
  TableChart as ExcelIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { formatCurrency } from '../../utils/formatters';
import { getSummaryStats } from '../../services/storageService';

// Sample data - replace with actual data from your state/API
const MEMBERS = ['Manish', 'Chirag', 'Deepak'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Reports = () => {
  const navigate = useNavigate();
  const { expenses, contributions } = useExpense();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const summaryStats = getSummaryStats();
    setStats(summaryStats);
  }, [expenses, contributions]);

  // Sample data for charts
  const contributionData = MEMBERS.map((member, index) => ({
    name: member,
    value: 25000,
    color: COLORS[index],
  }));

  const monthlyData = [
    { month: 'Jan', balance: 65000 },
    { month: 'Feb', balance: 68000 },
    { month: 'Mar', balance: 71575.89 },
  ];

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleMemberClick = (member) => {
    navigate(`/admin/reports/${member.toLowerCase()}`);
  };

  const handleExport = (type) => {
    // Implement export logic
    console.log(`Exporting as ${type}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />} 
        sx={{ mb: 3 }}
      >
        <Link 
          component="button"
          variant="body1"
          onClick={() => navigate('/')}
          sx={{ textDecoration: 'none' }}
        >
          Home
        </Link>
        <Link 
          component="button"
          variant="body1"
          onClick={() => navigate('/admin/dashboard')}
          sx={{ textDecoration: 'none' }}
        >
          Admin
        </Link>
        <Typography color="text.primary">Reports</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4 
      }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          📊 Report Dashboard
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            onClick={handleFilterClick}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={() => handleExport('all')}
          >
            Export Report
          </Button>
        </Stack>
      </Box>

      {/* Date and Period Selection */}
      <Card sx={{ mb: 4, bgcolor: theme.palette.background.default }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center">
                <CalendarIcon color="action" />
                <Typography variant="subtitle1">Period:</Typography>
                <DatePicker
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  views={['month', 'year']}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" size="small">This Month</Button>
                <Button variant="outlined" size="small">Last 3 Months</Button>
                <Button variant="outlined" size="small">Custom Range</Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Contributions
              </Typography>
              <Typography variant="h4" component="div">
                {formatCurrency(stats?.totalContributions || 0)}
              </Typography>
              <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                +12% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Expenses
              </Typography>
              <Typography variant="h4" component="div">
                {formatCurrency(stats?.totalExpenses || 0)}
              </Typography>
              <Typography variant="body2" color="error.main" sx={{ mt: 1 }}>
                -8% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Net Balance
              </Typography>
              <Typography variant="h4" component="div">
                {formatCurrency(stats?.balance || 0)}
              </Typography>
              <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                +15% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Member Contributions */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            👤 Member Contributions
          </Typography>
          <Grid container spacing={3}>
            {MEMBERS.map((member, index) => (
              <Grid item xs={12} md={4} key={member}>
                <Card 
                  variant="outlined" 
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s'
                    }
                  }}
                  onClick={() => handleMemberClick(member)}
                >
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="h6">{member}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          View detailed report
                        </Typography>
                      </Box>
                      <Typography variant="h6" color={`${COLORS[index]}`}>
                        {formatCurrency(stats?.memberBalances?.[member]?.net || 0)}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contribution Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={contributionData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {contributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Balance Trend
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Export Tools */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🧾 Export Tools
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<PdfIcon />}
              onClick={() => handleExport('pdf')}
            >
              Export as PDF
            </Button>
            <Button
              variant="outlined"
              startIcon={<ExcelIcon />}
              onClick={() => handleExport('excel')}
            >
              Export as Excel
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowDownIcon />}
              onClick={handleFilterClick}
            >
              Custom Export
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Filter Menu */}
      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={handleFilterClose}
      >
        <MenuItem onClick={handleFilterClose}>All Members</MenuItem>
        {MEMBERS.map((member) => (
          <MenuItem 
            key={member}
            onClick={() => {
              setSelectedMember(member);
              handleFilterClose();
            }}
          >
            {member}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default Reports; 