import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useExpense } from '../../context/ExpenseContext';

const MEMBERS = ['Manish', 'Chirag', 'Deepak']; // TODO: Make this dynamic
const CONTRIBUTION_CATEGORIES = ['Capital', 'Additional', 'Other'];

const ContributionForm = () => {
  const { addContribution } = useExpense();
  const [formData, setFormData] = useState({
    amount: '',
    date: new Date(),
    description: '',
    category: '',
    contributedBy: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.description || !formData.category || !formData.contributedBy) {
      alert('Please fill in all required fields');
      return;
    }

    const success = await addContribution(formData);
    if (success) {
      setFormData({
        amount: '',
        date: new Date(),
        description: '',
        category: '',
        contributedBy: ''
      });
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Add Contribution
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  label="Category"
                >
                  {CONTRIBUTION_CATEGORIES.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Contributed By</InputLabel>
                <Select
                  name="contributedBy"
                  value={formData.contributedBy}
                  onChange={handleInputChange}
                  label="Contributed By"
                >
                  {MEMBERS.map((member) => (
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
              >
                Add Contribution
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ContributionForm; 