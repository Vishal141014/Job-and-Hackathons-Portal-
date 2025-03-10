// This file contains common utility functions for the React application

// Theme switching
export const toggleTheme = (setIsDarkMode) => {
  setIsDarkMode(prevMode => !prevMode);
};

// Animation utilities
export const animateElement = (element, animationClass) => {
  if (element) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
      element.classList.remove(animationClass);
    }, { once: true });
  }
};

// Form validation
export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Search autocomplete
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Local storage utilities
export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage', error);
    return false;
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting from localStorage', error);
    return null;
  }
};

// Date formatting
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// REST API helpers
export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// Filter jobs by various criteria
export const filterJobs = (jobs, filters) => {
  return jobs.filter(job => {
    // Filter by type (government, private, remote, etc.)
    if (filters.type && filters.type !== 'all' && job.type !== filters.type) {
      return false;
    }
    
    // Filter by location
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Filter by search query (match against title, company, description)
    if (filters.query) {
      const query = filters.query.toLowerCase();
      return (
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        (job.description && job.description.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
};

// Format salary ranges for display
export const formatSalary = (salaryString) => {
  // Already formatted, return as is
  if (salaryString.includes('₹')) {
    return salaryString;
  }
  
  // Format number as Indian currency
  try {
    const num = parseInt(salaryString, 10);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  } catch (error) {
    return salaryString;
  }
};

// Calculate days left until a deadline
export const daysUntil = (targetDate) => {
  const current = new Date();
  const target = new Date(targetDate);
  const diffTime = target - current;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}; 