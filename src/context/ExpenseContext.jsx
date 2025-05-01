import React, { createContext, useContext, useState, useEffect } from 'react';
import * as storageService from '../services/storageService';
import { toast } from 'react-toastify';

const ExpenseContext = createContext();

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};

export const ExpenseProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [contributions, setContributions] = useState([]);

  // Initialize storage and load data
  useEffect(() => {
    const initializeData = async () => {
      try {
        // Initialize storage first
        const storageInitialized = storageService.initializeStorage();
        if (!storageInitialized) {
          throw new Error('Failed to initialize storage');
        }

        // Initialize test data if needed
        storageService.initializeTestData();

        // Load data
        const loadedExpenses = storageService.getExpenses();
        const loadedContributions = storageService.getContributions();

        console.log('Initial data loaded:', {
          expenses: loadedExpenses,
          contributions: loadedContributions
        });

        setExpenses(loadedExpenses);
        setContributions(loadedContributions);
        setIsInitialized(true);
      } catch (error) {
        console.error('Error during initialization:', error);
        setError(error.message);
        toast.error('Failed to initialize application: ' + error.message);
      }
    };

    initializeData();
  }, []);

  // Show loading or error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  const handleExpenseAdd = async (expenseData) => {
    try {
      const updatedExpenses = storageService.addExpense(expenseData);
      setExpenses(updatedExpenses);
      toast.success('Expense added successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to add expense: ' + error.message);
      return false;
    }
  };

  const handleContributionAdd = async (contributionData) => {
    try {
      const updatedContributions = storageService.addContribution(contributionData);
      setContributions(updatedContributions);
      toast.success('Contribution added successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to add contribution: ' + error.message);
      return false;
    }
  };

  const handleExpenseEdit = async (expenseId, updatedData) => {
    try {
      const updatedExpenses = storageService.updateExpense({ ...updatedData, id: expenseId });
      setExpenses(updatedExpenses);
      toast.success('Expense updated successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to update expense: ' + error.message);
      return false;
    }
  };

  const handleContributionEdit = async (contributionId, updatedData) => {
    try {
      const updatedContributions = storageService.updateContribution({ ...updatedData, id: contributionId });
      setContributions(updatedContributions);
      toast.success('Contribution updated successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to update contribution: ' + error.message);
      return false;
    }
  };

  const handleExpenseDelete = async (expenseId) => {
    try {
      const updatedExpenses = storageService.deleteExpense(expenseId);
      setExpenses(updatedExpenses);
      toast.success('Expense deleted successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to delete expense: ' + error.message);
      return false;
    }
  };

  const handleContributionDelete = async (contributionId) => {
    try {
      const updatedContributions = storageService.deleteContribution(contributionId);
      setContributions(updatedContributions);
      toast.success('Contribution deleted successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to delete contribution: ' + error.message);
      return false;
    }
  };

  const value = {
    expenses,
    contributions,
    addExpense: handleExpenseAdd,
    addContribution: handleContributionAdd,
    editExpense: handleExpenseEdit,
    editContribution: handleContributionEdit,
    deleteExpense: handleExpenseDelete,
    deleteContribution: handleContributionDelete,
  };

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
}; 