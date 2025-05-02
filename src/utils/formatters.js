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
  if (value === null || value === undefined || value === '') return 0;
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
  try {
    const num = safeNumber(amount);
    return currencyFormatter.format(num);
  } catch (error) {
    console.warn(`Error formatting currency: ${error.message}`);
    return '₹0.00';
  }
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
 * Calculates monthly metrics with comprehensive validation
 * @param {Object} data - Financial data
 * @returns {Object} Dashboard metrics
 */
export const calculateMonthlyMetrics = (data = {}) => {
  try {
    // Ensure data is an object and arrays exist
    const safeData = data || {};
    const { expenses = [], contributions = [] } = safeData;
    
    // Validate arrays
    const safeExpenses = Array.isArray(expenses) ? expenses : [];
    const safeContributions = Array.isArray(contributions) ? contributions : [];
    
    // Get current month's data
    const currentMonth = getMonthlyTransactions(safeExpenses);
    const currentContributions = getMonthlyTransactions(safeContributions);
    
    // Get previous month's data
    const previousDate = new Date();
    previousDate.setMonth(previousDate.getMonth() - 1);
    const previousMonth = getMonthlyTransactions(safeExpenses, previousDate);
    const previousContributions = getMonthlyTransactions(safeContributions, previousDate);
    
    // Calculate totals with validation
    const expensesTotal = calculateTotal(safeExpenses);
    const contributionsTotal = calculateTotal(safeContributions);
    
    // Calculate current month metrics with null checks
    const current = {
      expenses: currentMonth.total || 0,
      contributions: currentContributions.total || 0,
      balance: 0,
      hasData: (currentMonth.metadata?.hasData || currentContributions.metadata?.hasData) || false,
      activeMembers: new Set([
        ...(currentMonth.transactions || []).map(e => e?.paidBy).filter(Boolean),
        ...(currentContributions.transactions || []).map(c => c?.contributedBy).filter(Boolean)
      ]).size || 3,
      expensesByCategory: (currentMonth.transactions || []).reduce((acc, e) => {
        if (!e) return acc;
        const category = e.category || 'Other';
        acc[category] = (acc[category] || 0) + parseFloat(e.amount || 0);
        return acc;
      }, {}),
      contributionsByCategory: (currentContributions.transactions || []).reduce((acc, c) => {
        if (!c) return acc;
        const category = c.category || 'Other';
        acc[category] = (acc[category] || 0) + parseFloat(c.amount || 0);
        return acc;
      }, {})
    };

    // Calculate previous month metrics
    const previous = {
      expenses: previousMonth.total || 0,
      contributions: previousContributions.total || 0,
      balance: 0,
      hasData: (previousMonth.metadata?.hasData || previousContributions.metadata?.hasData) || false
    };

    // Calculate changes with validation
    const changes = {
      expenses: calculateGrowthSafe(current.expenses || 0, previous.expenses || 0),
      contributions: calculateGrowthSafe(current.contributions || 0, previous.contributions || 0),
      balance: {
        value: 0,
        percentage: '0%',
        isPositive: false,
        trend: 'neutral'
      }
    };

    return {
      current,
      previous,
      changes,
      metadata: {
        ...(currentMonth.metadata || {}),
        totalExpenses: expensesTotal,
        totalContributions: contributionsTotal,
        netBalance: 0,
        hasData: safeExpenses.length > 0 || safeContributions.length > 0
      }
    };
  } catch (error) {
    console.error('Error calculating monthly metrics:', error);
    return {
      current: {
        expenses: 0,
        contributions: 0,
        balance: 0,
        hasData: false,
        activeMembers: 3,
        expensesByCategory: {},
        contributionsByCategory: {}
      },
      previous: {
        expenses: 0,
        contributions: 0,
        balance: 0,
        hasData: false
      },
      changes: {
        expenses: { value: 0, percentage: '0%', isPositive: false, trend: 'neutral' },
        contributions: { value: 0, percentage: '0%', isPositive: false, trend: 'neutral' },
        balance: { value: 0, percentage: '0%', isPositive: false, trend: 'neutral' }
      },
      metadata: {
        totalExpenses: 0,
        totalContributions: 0,
        netBalance: 0,
        hasData: false,
        error: error.message
      }
    };
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
  const num = Number(value);
  return isNaN(num) ? '0.0%' : `${num >= 0 ? '+' : ''}${num.toFixed(1)}%`;
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
export const calculateMonthlyGrowth = (currentValue, previousValue) => {
  try {
    if (previousValue === 0 || !previousValue) {
      return {
        value: 'N/A',
        trend: 'New',
        isPositive: true
      };
    }

    const growth = ((currentValue - previousValue) / Math.abs(previousValue)) * 100;
    return {
      value: roundAmount(growth),
      trend: formatPercentage(growth),
      isPositive: growth >= 0
    };
  } catch (error) {
    console.warn(`Error calculating monthly growth: ${error.message}`);
    return {
      value: 'N/A',
      trend: 'Error',
      isPositive: false
    };
  }
};

/**
 * Calculates financial metrics for the dashboard
 * @param {Object} data - Financial data
 * @returns {Object} Dashboard metrics
 */
export const calculateDashboardMetrics = (data = {}) => {
  // Ensure data is an object
  const safeData = data || {};
  
  // Safely destructure with defaults
  const { contributions = [], expenses = [] } = safeData;
  const currentDate = new Date();

  // Validate arrays
  const safeContributions = Array.isArray(contributions) ? contributions : [];
  const safeExpenses = Array.isArray(expenses) ? expenses : [];

  // Calculate current month's data
  const currentMonth = {
    contributions: getMonthlyTransactions(safeContributions, currentDate),
    expenses: getMonthlyTransactions(safeExpenses, currentDate)
  };

  // Calculate previous month's data
  const previousDate = new Date(currentDate);
  previousDate.setMonth(previousDate.getMonth() - 1);
  const previousMonth = {
    contributions: getMonthlyTransactions(safeContributions, previousDate),
    expenses: getMonthlyTransactions(safeExpenses, previousDate)
  };

  // Calculate totals with validation
  const totals = {
    contributions: roundAmount(safeContributions.reduce((sum, item) => 
      sum + roundAmount(item?.amount || 0), 0)),
    expenses: roundAmount(safeExpenses.reduce((sum, item) => 
      sum + roundAmount(item?.amount || 0), 0))
  };

  // Calculate balances
  const balances = {
    total: roundAmount(totals.contributions - totals.expenses),
    currentMonth: roundAmount(
      (currentMonth.contributions?.total || 0) - (currentMonth.expenses?.total || 0)
    ),
    previousMonth: roundAmount(
      (previousMonth.contributions?.total || 0) - (previousMonth.expenses?.total || 0)
    )
  };

  // Calculate growth with null checks
  const growth = calculateMonthlyGrowth(
    balances.currentMonth || 0,
    balances.previousMonth || 0
  );

  // Calculate active members with null checks
  const activeMembers = new Set([
    ...(currentMonth.contributions?.transactions || []).map(c => c?.contributedBy).filter(Boolean),
    ...(currentMonth.expenses?.transactions || []).map(e => e?.paidBy).filter(Boolean)
  ]).size;

  // Calculate category breakdowns for current month
  const getTopCategories = (transactions = []) => {
    const breakdown = transactions.reduce((acc, item) => {
      if (!item) return acc;
      const category = item.category || 'Uncategorized';
      const amount = roundAmount(item.amount || 0);
      acc[category] = roundAmount((acc[category] || 0) + amount);
      return acc;
    }, {});

    return Object.entries(breakdown)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .reduce((acc, [category, amount]) => {
        acc[category] = amount;
        return acc;
      }, {});
  };

  return {
    totals,
    currentMonth: {
      contributions: currentMonth.contributions?.total || 0,
      expenses: currentMonth.expenses?.total || 0,
      balance: balances.currentMonth,
      contributionCategories: getTopCategories(currentMonth.contributions?.transactions),
      expenseCategories: getTopCategories(currentMonth.expenses?.transactions)
    },
    previousMonth: {
      contributions: previousMonth.contributions?.total || 0,
      expenses: previousMonth.expenses?.total || 0,
      balance: balances.previousMonth
    },
    growth,
    balances,
    activeMembers,
    metadata: {
      hasData: safeContributions.length > 0 || safeExpenses.length > 0,
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
 * Safely calculates growth percentage with error handling
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {Object} Growth calculation result with safety checks
 */
export const calculateGrowthSafe = (current, previous) => {
  try {
    // Handle invalid inputs
    if (typeof current !== 'number' || typeof previous !== 'number') {
      return {
        value: 0,
        percentage: '0%',
        isPositive: false,
        trend: 'neutral'
      };
    }

    // Handle zero or negative previous value
    if (previous <= 0) {
      return {
        value: current,
        percentage: current > 0 ? '+100%' : '0%',
        isPositive: current > 0,
        trend: current > 0 ? 'positive' : 'neutral'
      };
    }

    // Calculate growth
    const growth = ((current - previous) / Math.abs(previous)) * 100;
    const roundedGrowth = roundAmount(growth);

    return {
      value: roundAmount(current - previous),
      percentage: formatPercentage(roundedGrowth),
      isPositive: growth >= 0,
      trend: growth > 0 ? 'positive' : growth < 0 ? 'negative' : 'neutral'
    };
  } catch (error) {
    console.warn('Error calculating growth:', error);
    return {
      value: 0,
      percentage: '0%',
      isPositive: false,
      trend: 'neutral'
    };
  }
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