// Storage keys
const STORAGE_KEYS = {
  EXPENSES: 'expenses',
  CONTRIBUTIONS: 'contributions',
  CATEGORIES: 'categories',
  LAST_SYNC: 'lastSync'
};

// Default categories
const DEFAULT_CATEGORIES = [
  'Food',
  'Transportation',
  'Entertainment',
  'Utilities',
  'Rent',
  'Shopping',
  'Healthcare',
  'Others'
];

// Helper function to safely parse JSON
const safeJSONParse = (data, fallback = []) => {
  try {
    return JSON.parse(data) || fallback;
  } catch (error) {
    console.error('Error parsing data:', error);
    return fallback;
  }
};

// Format date consistently
const formatDate = (date) => {
  try {
    const d = new Date(date);
    return d.toISOString().split('T')[0]; // YYYY-MM-DD
  } catch (error) {
    console.error('Error formatting date:', error);
    return new Date().toISOString().split('T')[0];
  }
};

// Format amount consistently
const formatAmount = (amount) => {
  try {
    if (amount === null || amount === undefined || amount === '') {
      console.warn('Empty amount provided:', amount);
      return "0";
    }
    
    // Remove any currency symbols and commas
    const cleanAmount = amount.toString().replace(/[₹,]/g, '').trim();
    
    // Parse and validate the number
    const num = parseFloat(cleanAmount);
    if (isNaN(num)) {
      console.warn('Invalid amount format:', amount);
      return "0";
    }
    
    // Ensure positive amount
    if (num < 0) {
      console.warn('Negative amount provided:', amount);
      return "0";
    }
    
    // Convert to string with 2 decimal places
    return num.toFixed(2).toString();
  } catch (error) {
    console.error('Error formatting amount:', error);
    return "0";
  }
};

// Initialize storage with default data if empty
export const initializeStorage = () => {
  try {
    if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(DEFAULT_CATEGORIES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.EXPENSES)) {
      localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CONTRIBUTIONS)) {
      localStorage.setItem(STORAGE_KEYS.CONTRIBUTIONS, JSON.stringify([]));
    }
    return true;
  } catch (error) {
    console.error('Error initializing storage:', error);
    return false;
  }
};

// Add test data if no data exists
export const initializeTestData = () => {
  try {
    const expenses = getExpenses();
    const contributions = getContributions();

    if (expenses.length === 0 && contributions.length === 0) {
      // Current month's data
      const currentDate = new Date();
      const currentMonth = formatDate(currentDate);
      
      // Previous month's data
      const previousDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 15);
      const previousMonth = formatDate(previousDate);

      const testExpenses = [
        {
          id: Date.now(),
          amount: "1500",
          date: currentMonth,
          description: "Team Lunch",
          category: "Food",
          paidBy: "Manish",
          splitBetween: ["Manish", "Chirag", "Deepak"],
          type: "expense",
          createdAt: new Date().toISOString()
        },
        {
          id: Date.now() + 1,
          amount: "3000",
          date: currentMonth,
          description: "Office Supplies",
          category: "Shopping",
          paidBy: "Chirag",
          splitBetween: ["Manish", "Chirag", "Deepak"],
          type: "expense",
          createdAt: new Date().toISOString()
        },
        {
          id: Date.now() + 2,
          amount: "2400",
          date: previousMonth,
          description: "Internet Bill",
          category: "Utilities",
          paidBy: "Deepak",
          splitBetween: ["Manish", "Chirag", "Deepak"],
          type: "expense",
          createdAt: new Date().toISOString()
        }
      ];

      const testContributions = [
        {
          id: Date.now() + 3,
          amount: "25000",
          date: currentMonth,
          description: "Monthly Contribution",
          contributedBy: "Chirag",
          category: "Capital",
          type: "contribution",
          createdAt: new Date().toISOString()
        },
        {
          id: Date.now() + 4,
          amount: "25000",
          date: currentMonth,
          description: "Monthly Contribution",
          contributedBy: "Manish",
          category: "Capital",
          type: "contribution",
          createdAt: new Date().toISOString()
        },
        {
          id: Date.now() + 5,
          amount: "25000",
          date: previousMonth,
          description: "Monthly Contribution",
          contributedBy: "Deepak",
          category: "Capital",
          type: "contribution",
          createdAt: new Date().toISOString()
        }
      ];

      console.log('Initializing test data:', {
        expenses: testExpenses,
        contributions: testContributions
      });

      localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(testExpenses));
      localStorage.setItem(STORAGE_KEYS.CONTRIBUTIONS, JSON.stringify(testContributions));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error initializing test data:', error);
    return false;
  }
};

// Get all expenses
export const getExpenses = () => {
  const data = localStorage.getItem(STORAGE_KEYS.EXPENSES);
  return safeJSONParse(data, []);
};

// Get all contributions
export const getContributions = () => {
  const data = localStorage.getItem(STORAGE_KEYS.CONTRIBUTIONS);
  return safeJSONParse(data, []);
};

// Add new expense
export const addExpense = (expense) => {
  const expenses = getExpenses();
  const newExpense = {
    ...expense,
    id: Date.now(),
    date: formatDate(expense.date),
    amount: formatAmount(expense.amount),
    type: "expense",
    createdAt: new Date().toISOString()
  };
  
  console.log('Adding new expense:', newExpense);
  
  expenses.push(newExpense);
  localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(expenses));
  return expenses;
};

// Add new contribution
export const addContribution = (contribution) => {
  const contributions = getContributions();
  const newContribution = {
    ...contribution,
    id: Date.now(),
    date: formatDate(contribution.date),
    amount: formatAmount(contribution.amount),
    type: "contribution",
    createdAt: new Date().toISOString()
  };
  
  console.log('Adding new contribution:', newContribution);
  
  contributions.push(newContribution);
  localStorage.setItem(STORAGE_KEYS.CONTRIBUTIONS, JSON.stringify(contributions));
  return contributions;
};

// Delete expense
export const deleteExpense = (expenseId) => {
  const expenses = getExpenses();
  const updatedExpenses = expenses.filter(exp => exp.id !== expenseId);
  localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(updatedExpenses));
  return updatedExpenses;
};

// Delete contribution
export const deleteContribution = (contributionId) => {
  const contributions = getContributions();
  const updatedContributions = contributions.filter(cont => cont.id !== contributionId);
  localStorage.setItem(STORAGE_KEYS.CONTRIBUTIONS, JSON.stringify(updatedContributions));
  return updatedContributions;
};

// Update expense
export const updateExpense = (updatedExpense) => {
  const expenses = getExpenses();
  // Ensure date is stored in a consistent format (YYYY-MM-DD)
  const expenseDate = new Date(updatedExpense.date);
  const formattedDate = expenseDate.toISOString().split('T')[0];

  const updatedExpenses = expenses.map(exp => 
    exp.id === updatedExpense.id 
      ? { 
          ...exp,
          ...updatedExpense,
          date: formattedDate, // Store date in YYYY-MM-DD format
          amount: parseFloat(updatedExpense.amount),
          updatedAt: new Date().toISOString()
        } 
      : exp
  );
  localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(updatedExpenses));
  return updatedExpenses;
};

// Update contribution
export const updateContribution = (updatedContribution) => {
  const contributions = getContributions();
  const updatedContributions = contributions.map(cont => 
    cont.id === updatedContribution.id 
      ? {
          ...cont,
          ...updatedContribution,
          amount: parseFloat(updatedContribution.amount),
          updatedAt: new Date().toISOString()
        }
      : cont
  );
  localStorage.setItem(STORAGE_KEYS.CONTRIBUTIONS, JSON.stringify(updatedContributions));
  return updatedContributions;
};

// Get summary statistics
export const getSummaryStats = () => {
  const expenses = getExpenses();
  const contributions = getContributions();

  const totalExpenses = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
  const totalContributions = contributions.reduce((sum, cont) => sum + parseFloat(cont.amount), 0);
  const balance = totalContributions - totalExpenses;

  // Calculate member balances
  const memberBalances = {};
  expenses.forEach(expense => {
    const splitAmount = expense.amount / expense.splitBetween.length;
    
    expense.splitBetween.forEach(member => {
      if (!memberBalances[member]) {
        memberBalances[member] = { paid: 0, owes: 0, net: 0 };
      }
      
      // Update paid amount for the person who paid
      if (member === expense.paidBy) {
        memberBalances[member].paid += expense.amount;
      }
      
      // Update owed amount for everyone involved in the split
      memberBalances[member].owes += splitAmount;
      
      // Calculate net balance
      memberBalances[member].net = memberBalances[member].paid - memberBalances[member].owes;
    });
  });

  // Add contribution amounts to member balances
  contributions.forEach(contribution => {
    const member = contribution.contributedBy;
    if (!memberBalances[member]) {
      memberBalances[member] = { paid: 0, owes: 0, net: contribution.amount };
    } else {
      memberBalances[member].net += contribution.amount;
    }
  });

  return {
    totalExpenses,
    totalContributions,
    balance,
    memberBalances,
    recentExpenses: expenses.slice(-5).reverse(),
    recentContributions: contributions.slice(-5).reverse()
  };
};

// Category Management
export const getCategories = () => {
  const categories = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
  return categories ? JSON.parse(categories) : DEFAULT_CATEGORIES;
};

export const setCategories = (categories) => {
  localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
};

// Clear all data
export const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
  initializeStorage();
};

// Export storage keys for external use if needed
export { STORAGE_KEYS }; 