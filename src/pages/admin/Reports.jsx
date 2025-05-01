import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  MenuItem,
  TextField,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  PictureAsPdf as PdfIcon,
  TableChart as ExcelIcon,
  FilterList as FilterIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { useExpense } from '../../context/ExpenseContext';
import { formatCurrency } from '../../utils/formatters';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend,
  ArcElement
);

const Reports = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedMember, setSelectedMember] = useState('all');
  const { expenses, contributions } = useExpense();

  // Chart data
  const expenseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Expenses',
      data: [3000, 2500, 3500, 2800, 3200, 3424.11],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }]
  };

  const contributionByUser = {
    labels: ['Manish', 'Chirag', 'Deepak'],
    datasets: [{
      data: [25000, 25000, 25000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ]
    }]
  };

  const handleExportPDF = () => {
    // Implement PDF export
    console.log('Exporting PDF...');
  };

  const handleExportExcel = () => {
    // Implement Excel export
    console.log('Exporting Excel...');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Financial Reports</Typography>
        <Stack direction="row" spacing={2}>
          <Tooltip title="Export as PDF">
            <IconButton onClick={handleExportPDF}>
              <PdfIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Export as Excel">
            <IconButton onClick={handleExportExcel}>
              <ExcelIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      {/* Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            select
            label="Month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">All Time</MenuItem>
            <MenuItem value="current">Current Month</MenuItem>
            <MenuItem value="previous">Previous Month</MenuItem>
          </TextField>
          <TextField
            select
            label="Member"
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">All Members</MenuItem>
            <MenuItem value="manish">Manish</MenuItem>
            <MenuItem value="chirag">Chirag</MenuItem>
            <MenuItem value="deepak">Deepak</MenuItem>
          </TextField>
        </Stack>
      </Paper>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Expense Trend</Typography>
            <Line data={expenseData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                }
              }
            }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Contributions by Member</Typography>
            <Pie data={contributionByUser} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                }
              }
            }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports; 