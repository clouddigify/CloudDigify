import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Grid, 
  Paper,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Divider,
  InputAdornment,
  Tooltip,
  Chip,
  OutlinedInput
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { formatCurrency, roundAmount, parseCurrencyInput } from '../../utils/formatters';
import { useExpense } from '../../context/ExpenseContext';
import * as storageService from '../../services/storageService';

const ExpenseForm = ({ onSubmit, initialData = null }) => {
  const { addExpense } = useExpense();
  const [formData, setFormData] = useState({
    id: null,
    date: null,
    description: '',
    amount: '',
    paidBy: '',
    paymentMode: '',
    category: '',
    transactionId: '',
    createdAt: null,
    splitBetween: []
  });

  const [loading, setLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [categories] = useState(storageService.getCategories());

  // Initialize form with initial data if available
  useEffect(() => {
    if (initialData && !isInitialized) {
      console.log('Initializing expense form with data:', initialData);
      setFormData({
        ...initialData,
        date: initialData.date ? new Date(initialData.date) : null,
        amount: initialData.amount ? roundAmount(initialData.amount).toString() : '',
        id: initialData.id,
        createdAt: initialData.createdAt,
        splitBetween: initialData.splitBetween || []
      });
      setIsInitialized(true);
    }
  }, [initialData, isInitialized]);

  const members = ['Manish', 'Chirag', 'Deepak'];
  const paymentModes = ['Cash', 'UPI', 'Bank Transfer', 'Credit Card'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for amount field
    if (name === 'amount') {
      // Only allow numbers and decimal point
      const numericValue = value.replace(/[^\d.]/g, '');
      // Prevent multiple decimal points
      const parts = numericValue.split('.');
      const formattedValue = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : numericValue;
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const handleSplitBetweenChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData(prev => ({
      ...prev,
      splitBetween: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form data
      if (!formData.date || !formData.description || !formData.amount || !formData.paidBy || !formData.paymentMode || !formData.category || formData.splitBetween.length === 0) {
        throw new Error('Please fill in all required fields');
      }

      // Calculate split amount (automatically split between all members)
      const amount = roundAmount(formData.amount);
      const splitAmount = roundAmount(amount / formData.splitBetween.length);

      const expenseData = {
        ...formData,
        amount,
        splitAmount,
        splitBetween: formData.splitBetween,
        date: formData.date.toISOString(),
        // For existing entries, preserve id and createdAt
        ...(formData.id && { 
          id: formData.id,
          createdAt: formData.createdAt 
        }),
        // Add or update the updatedAt timestamp
        updatedAt: new Date().toISOString()
      };

      const success = await addExpense(expenseData);
      
      if (success) {
        // Only reset form if adding new expense
        setFormData({
          id: null,
          date: null,
          description: '',
          amount: '',
          paidBy: '',
          paymentMode: '',
          category: '',
          transactionId: '',
          createdAt: null,
          splitBetween: []
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(error.message || 'Failed to process expense');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        {initialData ? 'Edit Expense' : 'Add New Expense'}
      </Typography>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Amount"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                required
                inputProps={{ min: 0, step: "0.01" }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <DatePicker
                label="Date"
                value={formData.date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} fullWidth required />}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                multiline
                rows={2}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Paid By</InputLabel>
                <Select
                  name="paidBy"
                  value={formData.paidBy}
                  onChange={handleChange}
                  label="Paid By"
                >
                  {members.map((member) => (
                    <MenuItem key={member} value={member}>
                      {member}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Split Between</InputLabel>
                <Select
                  multiple
                  name="splitBetween"
                  value={formData.splitBetween}
                  onChange={handleSplitBetweenChange}
                  input={<OutlinedInput label="Split Between" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {members.map((member) => (
                    <MenuItem key={member} value={member}>
                      {member}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Add Expense'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ExpenseForm; 