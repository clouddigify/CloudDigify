/**
 * Core formatting utilities for financial calculations with robust error handling
 */

// Memoized currency formatter
const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

/**
 * Debug logger for tracking calculation issues
 * @private
 */
const debugLog = (message, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Financial Calc]: ${message}`, data);
  }
};

/**
 * Validates and parses a date string
 * @param {string|Date} date - Date to validate
 * @returns {Date|null} Parsed date or null if invalid
 */
const parseDate = (date) => {
  try {
    if (date instanceof Date) return date;
    const parsed = new Date(date);
    return parsed.toString() === 'Invalid Date' ? null : parsed;
  } catch {
    return null;
  }
};

/**
 * Safely parses a number with validation
 * @param {any} value - Value to parse
 * @returns {number} Parsed number or 0
 */
const parseNumber = (value) => {
  if (value === null || value === undefined || value === '') {
    debugLog('Empty value provided to parseNumber', { value });
    return 0;
  }
  
  const num = Number(value);
  if (isNaN(num)) {
    debugLog('Invalid number provided', { value });
    return 0;
  }
  
  return num;
};

/**
 * Safely converts a value to a number, returns 0 if invalid
 * @param {any} value - Value to convert
 * @returns {number} Converted number or 0
 */
export const safeNumber = (value) => {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};

/**
 * Rounds a number to 2 decimal places with validation
 * @param {number|string} amount - The amount to round
 * @returns {number} The rounded amount
 */
export const roundAmount = (amount) => {
  try {
    const num = safeNumber(amount);
    return Math.round(num * 100) / 100;
  } catch (error) {
    console.warn(`Error rounding amount: ${error.message}`);
    return 0;
  }
};

/**
 * Formats a number as Indian Rupees with fallback
 * @param {number|string} amount - The amount to format
 * @returns {string} Formatted amount (e.g., "₹25,000.00")
 */
export const formatCurrency = (amount) => {
  const value = safeNumber(amount);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Safely sums an array of numbers with validation
 * @param {Array} numbers - Array of numbers to sum
 * @returns {number} The total sum
 */
const safeSum = (numbers = []) => {
  if (!Array.isArray(numbers)) return 0;
  return numbers.reduce((sum, num) => sum + safeNumber(num), 0);
};

/**
 * Safely calculates average with validation
 * @param {number} total - Total value
 * @param {number} count - Number of items
 * @returns {number} The average or 0
 */
const safeAverage = (total, count) => {
  const safeTotal = safeNumber(total);
  const safeCount = safeNumber(count);
  return safeCount > 0 ? safeTotal / safeCount : 0;
};

/**
 * Validates and processes transactions
 * @param {Array} transactions - Array of transactions
 * @returns {Array} Validated transactions
 */
export const validateTransactions = (transactions) => {
  if (!Array.isArray(transactions)) return [];
  return transactions.filter(t => (
    t && 
    typeof t === 'object' && 
    !isNaN(safeNumber(t.amount)) && 
    t.date && 
    new Date(t.date).toString() !== 'Invalid Date'
  ));
};

/**
 * Validates a transaction object
 * @param {Object} transaction - Transaction to validate
 * @returns {Object} Validation result
 */
export const validateTransaction = (transaction) => {
  if (!transaction || typeof transaction !== 'object') {
    debugLog('Invalid transaction object', { transaction });
    return { isValid: false, errors: ['Invalid transaction data'] };
  }

  const errors = [];
  
  // Amount validation
  const amount = parseNumber(transaction.amount);
  if (amount <= 0) {
    errors.push('Invalid or negative amount');
  }

  // Date validation
  const date = parseDate(transaction.date);
  if (!date) {
    errors.push('Invalid date format');
  }

  // Required fields
  if (!transaction.contributedBy && !transaction.paidBy) {
    errors.push('Missing contributor/payer information');
  }

  // Debug log the validation result
  console.log('Transaction validation details:', {
    transaction,
    parsedAmount: amount,
    parsedDate: date,
    errors
  });

  return {
    isValid: errors.length === 0,
    errors,
    parsedAmount: amount,
    parsedDate: date
  };
};

/**
 * Safely calculates total from an array of transactions
 * @param {Array} transactions - Array of transactions
 * @returns {number} Total amount
 */
const calculateTotal = (transactions) => {
  if (!Array.isArray(transactions)) {
    debugLog('Invalid transactions array', { transactions });
    return 0;
  }

  return transactions.reduce((sum, transaction) => {
    const { isValid, parsedAmount } = validateTransaction(transaction);
    return isValid ? sum + parsedAmount : sum;
  }, 0);
};

/**
 * Gets transactions for the current month with validation
 * @param {Array} transactions - Array of transactions
 * @param {Date} targetDate - Target date for month filtering
 * @returns {Object} Filtered transactions and metadata
 */
export const getMonthlyTransactions = (transactions = [], targetDate = new Date()) => {
  try {
    if (!Array.isArray(transactions)) {
      throw new Error('Invalid transactions array');
    }

    const currentDate = parseDate(targetDate) || new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    console.log('Filtering transactions for:', {
      month: currentMonth + 1,
      year: currentYear,
      totalTransactions: transactions.length
    });

    // Filter and validate transactions
    const validTransactions = transactions
      .map(t => {
        const validation = validateTransaction(t);
        console.log('Transaction validation:', {
          transaction: t,
          isValid: validation.isValid,
          errors: validation.errors
        });
        return { transaction: t, validation };
      })
      .filter(({ validation }) => validation.isValid)
      .filter(({ transaction }) => {
        const date = parseDate(transaction.date);
        const isCurrentMonth = date && 
                             date.getMonth() === currentMonth && 
                             date.getFullYear() === currentYear;
        console.log('Date check:', {
          transactionDate: transaction.date,
          parsedDate: date,
          isCurrentMonth,
          currentMonth: currentMonth + 1,
          currentYear
        });
        return isCurrentMonth;
      })
      .map(({ transaction }) => transaction);

    const total = calculateTotal(validTransactions);

    console.log('Monthly transactions result:', {
      validTransactions,
      total,
      count: validTransactions.length,
      month: currentMonth + 1,
      year: currentYear
    });

    return {
      total: roundAmount(total),
      transactions: validTransactions,
      metadata: {
        hasData: validTransactions.length > 0,
        month: currentMonth + 1,
        year: currentYear,
        periodLabel: currentDate.toLocaleString('default', { 
          month: 'long', 
          year: 'numeric' 
        })
      }
    };
  } catch (error) {
    console.error('Error in getMonthlyTransactions:', error);
    return {
      total: 0,
      transactions: [],
      metadata: {
        hasData: false,
        error: error.message
      }
    };
  }
};

/**
 * Calculate monthly metrics with improved accuracy
 */
export const calculateMonthlyMetrics = (data) => {
  try {
    const { expenses = [], contributions = [] } = data;
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Get current month's transactions
    const currentMonthData = {
      expenses: expenses.filter(e => {
        const date = new Date(e.date);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
      }),
      contributions: contributions.filter(c => {
        const date = new Date(c.date);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
      })
    };

    // Get previous month's transactions
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const previousMonthData = {
      expenses: expenses.filter(e => {
        const date = new Date(e.date);
        return date.getMonth() === previousMonth && date.getFullYear() === previousYear;
      }),
      contributions: contributions.filter(c => {
        const date = new Date(c.date);
        return date.getMonth() === previousMonth && date.getFullYear() === previousYear;
      })
    };

    // Calculate totals
    const calculateTotal = transactions => 
      transactions.reduce((sum, t) => sum + safeNumber(t.amount), 0);

    const totals = {
      currentMonth: {
        expenses: calculateTotal(currentMonthData.expenses),
        contributions: calculateTotal(currentMonthData.contributions)
      },
      previousMonth: {
        expenses: calculateTotal(previousMonthData.expenses),
        contributions: calculateTotal(previousMonthData.contributions)
      },
      allTime: {
        expenses: calculateTotal(expenses),
        contributions: calculateTotal(contributions)
      }
    };

    // Calculate growth percentages
    const calculateGrowth = (current, previous) => {
      if (previous === 0) return { value: 0, percentage: '0%', isPositive: false };
      const growth = ((current - previous) / previous) * 100;
      return {
        value: growth,
        percentage: `${growth >= 0 ? '+' : ''}${growth.toFixed(1)}%`,
        isPositive: growth >= 0
      };
    };

    const growth = {
      expenses: calculateGrowth(
        totals.currentMonth.expenses,
        totals.previousMonth.expenses
      ),
      contributions: calculateGrowth(
        totals.currentMonth.contributions,
        totals.previousMonth.contributions
      ),
      balance: calculateGrowth(
        totals.currentMonth.contributions - totals.currentMonth.expenses,
        totals.previousMonth.contributions - totals.previousMonth.expenses
      )
    };

    // Get active members for current month
    const activeMembers = new Set([
      ...currentMonthData.expenses.map(e => e.paidBy),
      ...currentMonthData.contributions.map(c => c.contributedBy)
    ].filter(Boolean)).size;

    // Calculate expense categories
    const expenseCategories = currentMonthData.expenses.reduce((acc, expense) => {
      const category = expense.category || 'Other';
      acc[category] = (acc[category] || 0) + safeNumber(expense.amount);
      return acc;
    }, {});

    // Calculate contribution categories
    const contributionCategories = currentMonthData.contributions.reduce((acc, contribution) => {
      const category = contribution.category || 'Other';
      acc[category] = (acc[category] || 0) + safeNumber(contribution.amount);
      return acc;
    }, {});

    return {
      currentMonth: {
        expenses: totals.currentMonth.expenses,
        contributions: totals.currentMonth.contributions,
        balance: totals.currentMonth.contributions - totals.currentMonth.expenses,
        expenseCategories,
        contributionCategories,
        activeMembers
      },
      previousMonth: {
        expenses: totals.previousMonth.expenses,
        contributions: totals.previousMonth.contributions,
        balance: totals.previousMonth.contributions - totals.previousMonth.expenses
      },
      allTime: {
        expenses: totals.allTime.expenses,
        contributions: totals.allTime.contributions,
        balance: totals.allTime.contributions - totals.allTime.expenses
      },
      growth,
      metadata: {
        hasData: expenses.length > 0 || contributions.length > 0,
        currentMonthLabel: new Date(currentYear, currentMonth).toLocaleString('default', { 
          month: 'long', 
          year: 'numeric' 
        })
      }
    };
  } catch (error) {
    console.error('Error in calculateMonthlyMetrics:', error);
    return DEFAULT_STATS;
  }
};

/**
 * Parses a currency string or number into a rounded number
 * @param {string|number} amount - The amount to parse
 * @returns {number} Parsed and rounded amount
 */
export const parseCurrencyInput = (amount) => {
  try {
    const cleanAmount = typeof amount === 'string' 
      ? amount.replace(/[₹,\s]/g, '')
      : amount;
    return roundAmount(cleanAmount);
  } catch (error) {
    console.warn(`Error parsing currency input: ${error.message}`);
    return 0;
  }
};

// Convert amount to paise (cents) for storage
export const toPaise = (amount) => Math.round(Number(amount) * 100);

// Convert paise (cents) back to rupees
export const fromPaise = (paise) => Number(paise) / 100;

// Format percentage with proper sign
export const formatPercentage = (value) => {
  const number = safeNumber(value);
  return `${number >= 0 ? '+' : ''}${number.toFixed(1)}%`;
};

// Format large numbers with K/M/B suffix
export const formatLargeNumber = (value) => {
  const num = Number(value);
  if (isNaN(num)) return '0';
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

/**
 * Date utilities with better error handling
 */
export const dateUtils = {
  isValidDate: (date) => {
    try {
      const d = new Date(date);
      return d instanceof Date && !isNaN(d);
    } catch {
      return false;
    }
  },

  getMonthBounds: (date = new Date()) => {
    try {
      const start = new Date(date.getFullYear(), date.getMonth(), 1);
      const end = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
      return { start, end };
    } catch {
      const now = new Date();
      return {
        start: new Date(now.getFullYear(), now.getMonth(), 1),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999)
      };
    }
  },

  getPreviousMonthBounds: (date = new Date()) => {
    try {
      const start = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      const end = new Date(date.getFullYear(), date.getMonth(), 0, 23, 59, 59, 999);
      return { start, end };
    } catch {
      const now = new Date();
      return {
        start: new Date(now.getFullYear(), now.getMonth() - 1, 1),
        end: new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999)
      };
    }
  }
};

/**
 * Growth calculation with proper error handling
 */
export const calculateGrowthSafe = (current, previous) => {
  try {
    // Ensure we have valid numbers
    const currentValue = safeNumber(current);
    const previousValue = safeNumber(previous);

    // Handle special cases
    if (previousValue === 0) {
      if (currentValue === 0) return { value: 0, percentage: '0%', isPositive: false, trend: 'neutral' };
      if (currentValue > 0) return { value: currentValue, percentage: '+100%', isPositive: true, trend: 'up' };
      return { value: currentValue, percentage: '-100%', isPositive: false, trend: 'down' };
    }

    // Calculate growth
    const absoluteChange = currentValue - previousValue;
    const percentageChange = (absoluteChange / Math.abs(previousValue)) * 100;
    const roundedPercentage = Math.round(percentageChange * 100) / 100;

    // Format the percentage string
    const percentageStr = `${roundedPercentage >= 0 ? '+' : ''}${roundedPercentage}%`;

    return {
      value: absoluteChange,
      percentage: percentageStr,
      isPositive: roundedPercentage >= 0,
      trend: roundedPercentage > 0 ? 'up' : roundedPercentage < 0 ? 'down' : 'neutral'
    };
  } catch (error) {
    console.error('Error calculating growth:', error);
    return { value: 0, percentage: '0%', isPositive: false, trend: 'neutral' };
  }
};

/**
 * Calculates all dashboard metrics from transaction data
 * @param {Object} data - Transaction data
 * @returns {Object} Calculated metrics
 */
export const calculateDashboardMetrics = (data = {}) => {
  const { contributions = [], expenses = [], sales = [] } = data;
  const today = new Date();
  
  // Get current month's data
  const currentMonthData = {
    contributions: getMonthlyTransactions(contributions, today),
    expenses: getMonthlyTransactions(expenses, today),
    sales: getMonthlyTransactions(sales, today)
  };

  // Get previous month's data
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1);
  const previousMonthData = {
    contributions: getMonthlyTransactions(contributions, lastMonth),
    expenses: getMonthlyTransactions(expenses, lastMonth),
    sales: getMonthlyTransactions(sales, lastMonth)
  };

  // Calculate totals
  const totals = {
    contributions: calculateTotal(contributions),
    expenses: calculateTotal(expenses),
    sales: calculateTotal(sales)
  };

  // Calculate monthly values
  const monthly = {
    current: {
      contributions: currentMonthData.contributions.total,
      expenses: currentMonthData.expenses.total,
      sales: currentMonthData.sales.total,
      get balance() {
        return this.contributions + this.sales - this.expenses;
      },
      get hasData() {
        return this.contributions > 0 || this.expenses > 0 || this.sales > 0;
      }
    },
    previous: {
      contributions: previousMonthData.contributions.total,
      expenses: previousMonthData.expenses.total,
      sales: previousMonthData.sales.total,
      get balance() {
        return this.contributions + this.sales - this.expenses;
      },
      get hasData() {
        return this.contributions > 0 || this.expenses > 0 || this.sales > 0;
      }
    }
  };

  // Calculate growth percentages
  const growth = {
    contributions: calculateGrowthSafe(
      monthly.current.contributions,
      monthly.previous.contributions
    ),
    expenses: calculateGrowthSafe(
      monthly.current.expenses,
      monthly.previous.expenses
    ),
    balance: calculateGrowthSafe(
      monthly.current.balance,
      monthly.previous.balance
    )
  };

  // Calculate active members for current month
  const activeMembers = new Set([
    ...currentMonthData.contributions.transactions.map(t => t.contributedBy),
    ...currentMonthData.expenses.transactions.map(t => t.paidBy)
  ].filter(Boolean));

  // Calculate member metrics
  const memberMetrics = {
    active: activeMembers.size,
    total: 3, // Hardcoded for now, should come from members list
    averageExpense: activeMembers.size ? 
      roundAmount(monthly.current.expenses / activeMembers.size) : 0
  };

  // Calculate expense categories for current month
  const expenseCategories = currentMonthData.expenses.transactions.reduce((acc, expense) => {
    const category = expense.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + roundAmount(expense.amount);
    return acc;
  }, {});

  // Get month label
  const monthLabel = today.toLocaleString('default', { 
    month: 'long',
    year: 'numeric'
  });

  return {
    totals: {
      contributions: roundAmount(totals.contributions),
      expenses: roundAmount(totals.expenses),
      sales: roundAmount(totals.sales),
      balance: roundAmount(totals.contributions + totals.sales - totals.expenses)
    },
    monthly,
    growth,
    members: memberMetrics,
    categories: {
      expenses: expenseCategories
    },
    metadata: {
      currentMonth: monthLabel,
      hasCurrentMonthData: monthly.current.hasData,
      hasPreviousMonthData: monthly.previous.hasData,
      lastUpdated: new Date().toISOString()
    }
  };
};

/**
 * Formats a net change amount with sign and currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted amount with sign
 */
export const formatNetChange = (amount) => {
  const prefix = amount > 0 ? '+' : '';
  return `${prefix}${formatCurrency(amount)}`;
};

/**
 * Formats an average amount per member
 * @param {number} total - Total amount
 * @param {number} memberCount - Number of members
 * @returns {string} Formatted average
 */
export const formatAverage = (total, memberCount) => {
  if (!memberCount) return 'N/A';
  return formatCurrency(roundAmount(total / memberCount));
};

/**
 * Calculates advanced financial metrics
 * @param {Object} data - Financial data
 * @returns {Object} Advanced metrics
 */
export const calculateAdvancedMetrics = (data) => {
  const { contributions = [], expenses = [] } = data;
  
  // Calculate monthly averages
  const getMonthlyAverage = (transactions) => {
    if (!transactions.length) return 0;
    const months = new Set(transactions.map(t => 
      `${new Date(t.date).getFullYear()}-${new Date(t.date).getMonth()}`
    )).size;
    const total = transactions.reduce((sum, t) => sum + roundAmount(t.amount), 0);
    return months ? roundAmount(total / months) : 0;
  };

  // Calculate velocity metrics
  const last3Months = transactions => {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return transactions.filter(t => new Date(t.date) >= threeMonthsAgo);
  };

  // Calculate burn rate and runway
  const monthlyBurn = getMonthlyAverage(expenses);
  const monthlyIncome = getMonthlyAverage(contributions);
  const netBurn = roundAmount(monthlyBurn - monthlyIncome);
  
  // Calculate category trends
  const categoryTrends = (transactions) => {
    const categories = {};
    transactions.forEach(t => {
      const category = t.category || 'Uncategorized';
      if (!categories[category]) {
        categories[category] = {
          total: 0,
          count: 0,
          average: 0,
          recent: 0
        };
      }
      categories[category].total += roundAmount(t.amount);
      categories[category].count += 1;
    });

    // Calculate averages and recent activity
    Object.keys(categories).forEach(category => {
      categories[category].average = roundAmount(
        categories[category].total / categories[category].count
      );
      categories[category].recent = last3Months(
        transactions.filter(t => (t.category || 'Uncategorized') === category)
      ).reduce((sum, t) => sum + roundAmount(t.amount), 0);
    });

    return categories;
  };

  return {
    monthlyAverages: {
      expenses: roundAmount(monthlyBurn),
      contributions: roundAmount(monthlyIncome),
      net: roundAmount(monthlyIncome - monthlyBurn)
    },
    burnRate: {
      monthly: roundAmount(netBurn),
      sustainable: netBurn <= 0
    },
    trends: {
      expenses: categoryTrends(expenses),
      contributions: categoryTrends(contributions)
    },
    velocity: {
      last3MonthsExpenses: roundAmount(
        last3Months(expenses).reduce((sum, t) => sum + roundAmount(t.amount), 0)
      ),
      last3MonthsContributions: roundAmount(
        last3Months(contributions).reduce((sum, t) => sum + roundAmount(t.amount), 0)
      )
    }
  };
};

/**
 * Calculates member-specific metrics
 * @param {Object} data - Financial data
 * @returns {Object} Member metrics
 */
export const calculateMemberMetrics = (data) => {
  const { contributions = [], expenses = [] } = data;
  const memberStats = {};

  // Process all transactions
  [...contributions, ...expenses].forEach(transaction => {
    const memberId = transaction.contributedBy || transaction.paidBy;
    if (!memberId) return;

    if (!memberStats[memberId]) {
      memberStats[memberId] = {
        totalContributed: 0,
        totalExpenses: 0,
        lastActivity: null,
        transactionCount: 0,
        categories: new Set()
      };
    }

    const stats = memberStats[memberId];
    const amount = roundAmount(transaction.amount);

    if ('contributedBy' in transaction) {
      stats.totalContributed += amount;
    } else {
      stats.totalExpenses += amount;
    }

    stats.transactionCount += 1;
    if (transaction.category) {
      stats.categories.add(transaction.category);
    }

    const transactionDate = new Date(transaction.date);
    if (!stats.lastActivity || transactionDate > stats.lastActivity) {
      stats.lastActivity = transactionDate;
    }
  });

  // Calculate additional metrics for each member
  Object.keys(memberStats).forEach(memberId => {
    const stats = memberStats[memberId];
    stats.netPosition = roundAmount(stats.totalContributed - stats.totalExpenses);
    stats.averageTransactionSize = roundAmount(
      (stats.totalContributed + stats.totalExpenses) / stats.transactionCount
    );
    stats.categoryCount = stats.categories.size;
    stats.categories = Array.from(stats.categories);
    stats.isActive = stats.lastActivity >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  });

  return memberStats;
};

/**
 * Calculates financial health score (0-100)
 * @private
 */
const calculateHealthScore = (
  isGrowingContributions,
  isGrowingExpenses,
  currentContributions,
  currentExpenses
) => {
  let score = 50; // Start at neutral

  // Growth factors
  if (isGrowingContributions) score += 15;
  if (!isGrowingExpenses) score += 15;

  // Balance factor
  const ratio = currentExpenses / currentContributions;
  if (ratio <= 0.5) score += 20;
  else if (ratio <= 0.7) score += 15;
  else if (ratio <= 0.9) score += 10;
  else if (ratio > 1) score -= 10;

  // Ensure score stays within bounds
  return Math.max(0, Math.min(100, score));
};

/**
 * Calculates data quality score
 * @private
 */
const calculateDataQuality = ({ current, previous, activeMembers }) => {
  if (!current.metadata.hasData && !previous.metadata.hasData) {
    return 'no_data';
  }
  
  if (activeMembers === 0) {
    return 'no_members';
  }
  
  const hasAllCurrentData = current.contributions.metadata.hasData && 
                           current.expenses.metadata.hasData;
  const hasAllPreviousData = previous.contributions.metadata.hasData && 
                            previous.expenses.metadata.hasData;
                            
  if (hasAllCurrentData && hasAllPreviousData) {
    return 'complete';
  }
  
  return 'partial';
};

// Format date for display
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Calculate growth percentage
export const calculateGrowth = (current, previous) => {
  if (!previous) return 0;
  return ((current - previous) / previous) * 100;
};

// Get active members count
export const getActiveMembers = (transactions, members) => {
  const activeMembers = new Set(
    transactions.map(t => t.memberId)
  );
  return {
    active: activeMembers.size,
    total: members.length,
    percentage: (activeMembers.size / members.length) * 100
  };
}; 