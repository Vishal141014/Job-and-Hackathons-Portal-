import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

// Import pages
import HomePage from './pages/HomePage';
import GovtJobsPage from './pages/GovtJobsPage';
import PrivateJobsPage from './pages/PrivateJobsPage';
import HackathonsPage from './pages/HackathonsPage';
import ResultsPage from './pages/ResultsPage';
import AdmitCardsPage from './pages/AdmitCardsPage';
import SyllabusPage from './pages/SyllabusPage';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotificationBanner from './components/NotificationBanner';

// Theme configuration
const lightTheme = {
  bg: 'var(--mint-light)',
  surface: 'white',
  textPrimary: 'var(--dark-text)',
  textSecondary: 'var(--gray-4)',
  primary: 'var(--mustard-primary)',
  secondary: 'var(--mint-primary)',
  accent: 'var(--mustard-dark)',
  mode: 'light'
};

const darkTheme = {
  bg: 'var(--dark-bg)',
  surface: 'var(--dark-surface)',
  textPrimary: 'var(--light-text)',
  textSecondary: 'var(--gray-3)',
  primary: 'var(--mustard-primary)',
  secondary: 'var(--mint-dark)',
  accent: 'var(--mustard-light)',
  mode: 'dark'
};

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.textPrimary};
  transition: all 0.3s ease;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <AppContainer>
          <NotificationBanner />
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/government-jobs" element={<GovtJobsPage />} />
            <Route path="/private-jobs" element={<PrivateJobsPage />} />
            <Route path="/hackathons" element={<HackathonsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/admit-cards" element={<AdmitCardsPage />} />
            <Route path="/syllabus" element={<SyllabusPage />} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App; 