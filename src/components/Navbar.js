import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${props => props.theme.surface};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.textPrimary};
  
  span {
    color: var(--mustard-primary);
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.textPrimary};
  cursor: pointer;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  
  @media (max-width: 992px) {
    flex-basis: 100%;
    flex-direction: column;
    max-height: ${props => (props.isOpen ? '1000px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  position: relative;
  
  &:hover .dropdown-content {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.textPrimary};
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--mustard-primary);
    transition: width 0.3s;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
  
  &:hover, &.active {
    color: var(--mustard-primary);
  }
  
  i {
    margin-left: 0.3rem;
    font-size: 0.8rem;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${props => props.theme.surface};
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  padding: 0.5rem 0;
  
  a {
    color: ${props => props.theme.textPrimary};
    padding: 0.75rem 1rem;
    display: block;
    transition: all 0.2s;
    
    &:hover {
      background-color: ${props => props.theme.bg};
      color: var(--mustard-primary);
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 992px) {
    position: static;
    box-shadow: none;
    padding-left: 1rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 992px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: space-between;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textPrimary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s;
  
  &:hover {
    transform: rotate(30deg);
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &.primary {
    background-color: var(--mustard-primary);
    color: ${props => props.theme.mode === 'dark' ? 'var(--dark-text)' : 'var(--dark-text)'};
    border: none;
    
    &:hover {
      background-color: var(--mustard-dark);
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: ${props => props.theme.textPrimary};
    border: 2px solid var(--mint-primary);
    
    &:hover {
      background-color: var(--mint-primary);
      color: var(--dark-text);
      transform: translateY(-2px);
    }
  }
`;

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <NavbarContainer>
      <div className="container">
        <NavContent>
          <Logo to="/">Job<span>Hub</span></Logo>
          
          <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </MenuToggle>
          
          <NavLinksContainer isOpen={isMenuOpen}>
            <NavLinks>
              <NavItem>
                <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to="/government-jobs" className={location.pathname.includes('government-jobs') ? 'active' : ''}>
                  Government Jobs <i className="fas fa-chevron-down"></i>
                </NavLink>
                <DropdownContent className="dropdown-content">
                  <Link to="/government-jobs/railway">Railway</Link>
                  <Link to="/government-jobs/bank">Bank</Link>
                  <Link to="/government-jobs/upsc">UPSC</Link>
                  <Link to="/government-jobs/ssc">SSC</Link>
                  <Link to="/government-jobs/defense">Defense</Link>
                  <Link to="/government-jobs/teaching">Teaching</Link>
                </DropdownContent>
              </NavItem>
              
              <NavItem>
                <NavLink to="/private-jobs" className={location.pathname.includes('private-jobs') ? 'active' : ''}>
                  Private Jobs <i className="fas fa-chevron-down"></i>
                </NavLink>
                <DropdownContent className="dropdown-content">
                  <Link to="/private-jobs/it">IT</Link>
                  <Link to="/private-jobs/core">Core</Link>
                  <Link to="/private-jobs/remote">Remote</Link>
                  <Link to="/private-jobs/startups">Startups</Link>
                  <Link to="/private-jobs/non-tech">Non-Tech</Link>
                </DropdownContent>
              </NavItem>
              
              <NavItem>
                <NavLink to="/hackathons" className={location.pathname === '/hackathons' ? 'active' : ''}>
                  Hackathons
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to="/results" className={location.pathname === '/results' ? 'active' : ''}>
                  Results
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to="/admit-cards" className={location.pathname === '/admit-cards' ? 'active' : ''}>
                  Admit Cards
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to="/syllabus" className={location.pathname === '/syllabus' ? 'active' : ''}>
                  Syllabus
                </NavLink>
              </NavItem>
            </NavLinks>
            
            <NavButtons>
              <ThemeToggle onClick={toggleTheme}>
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </ThemeToggle>
              <StyledButton className="secondary">Login</StyledButton>
              <StyledButton className="primary">Sign Up</StyledButton>
            </NavButtons>
          </NavLinksContainer>
        </NavContent>
      </div>
    </NavbarContainer>
  );
};

export default Navbar; 