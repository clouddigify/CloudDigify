import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { useExpense } from '../../context/ExpenseContext';
import * as storageService from '../../services/storageService';

const MemberReport = () => {
  const { memberId } = useParams();
  const { expenses, contributions } = useExpense();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = () => {
      const summaryStats = storageService.getSummaryStats();
      setStats(summaryStats);
    };

    loadStats();
  }, [expenses, contributions]);

  const memberExpenses = expenses.filter(
    expense => expense.paidBy === memberId || expense.splitBetween.includes(memberId)
  );

  const memberContributions = contributions.filter(
    contribution => contribution.contributedBy === memberId
  );

  if (!stats) {
    return (
      <Box p={3}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  const memberBalance = stats.memberBalances[memberId] || { paid: 0, owes: 0, net: 0 };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Member Report: {memberId}
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Paid
              </Typography>
              <Typography variant="h4" color="primary">
                ₹{memberBalance.paid.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Owed
              </Typography>
              <Typography variant="h4" color="error">
                ₹{memberBalance.owes.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Net Balance
              </Typography>
              <Typography 
                variant="h4" 
                color={memberBalance.net >= 0 ? 'success.main' : 'error.main'}
              >
                ₹{memberBalance.net.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ mb: 3 }}>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Expenses
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Paid By</TableCell>
                <TableCell align="right">Total Amount</TableCell>
                <TableCell align="right">Share Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memberExpenses.map((expense) => {
                const shareAmount = expense.amount / expense.splitBetween.length;
                return (
                  <TableRow key={expense.id}>
                    <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>{expense.paidBy}</TableCell>
                    <TableCell align="right">
                      ₹{expense.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align="right">
                      ₹{shareAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Contributions
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memberContributions.map((contribution) => (
                <TableRow key={contribution.id}>
                  <TableCell>{new Date(contribution.date).toLocaleDateString()}</TableCell>
                  <TableCell>{contribution.description}</TableCell>
                  <TableCell>{contribution.category}</TableCell>
                  <TableCell align="right">
                    ₹{contribution.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MemberReport; 