import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => 
    props.theme.mode === 'dark' ? 'var(--dark-surface)' : 'var(--dark-text)'};
  color: var(--light-text);
  padding: 4rem 0 1rem;
  margin-top: auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterAbout = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--light-text);
    
    span {
      color: var(--mustard-primary);
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--mustard-primary);
      transform: translateY(-3px);
    }
  }
`;

const FooterLinks = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    color: var(--light-text);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--mustard-primary);
    }
  }
  
  ul li {
    margin-bottom: 0.8rem;
    
    a {
      color: var(--gray-3);
      transition: all 0.3s;
      display: inline-block;
      
      &:hover {
        color: var(--mustard-primary);
        transform: translateX(5px);
      }
    }
  }
`;

const FooterContact = styled(FooterLinks)`
  ul li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    i {
      color: var(--mustard-primary);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  
  p {
    margin-bottom: 0;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: var(--gray-3);
    transition: color 0.3s;
    
    &:hover {
      color: var(--mustard-primary);
    }
  }
  
  @media (max-width: 576px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterGrid>
          <FooterAbout>
            <h3>Job<span>Hub</span></h3>
            <p>Your ultimate destination for job opportunities, hackathons, exam updates, and career resources.</p>
            <SocialIcons>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </SocialIcons>
          </FooterAbout>
          
          <FooterLinks>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/government-jobs">Government Jobs</Link></li>
              <li><Link to="/private-jobs">Private Jobs</Link></li>
              <li><Link to="/hackathons">Hackathons</Link></li>
              <li><Link to="/results">Results</Link></li>
              <li><Link to="/admit-cards">Admit Cards</Link></li>
              <li><Link to="/syllabus">Syllabus</Link></li>
            </ul>
          </FooterLinks>
          
          <FooterLinks>
            <h4>Job Categories</h4>
            <ul>
              <li><Link to="/government-jobs/railway">Railway Jobs</Link></li>
              <li><Link to="/government-jobs/bank">Banking Jobs</Link></li>
              <li><Link to="/private-jobs/it">IT & Software</Link></li>
              <li><Link to="/government-jobs/teaching">Teaching Jobs</Link></li>
              <li><Link to="/government-jobs/defense">Defense Jobs</Link></li>
              <li><Link to="/private-jobs/remote">Remote Jobs</Link></li>
              <li><Link to="/private-jobs/internship">Internships</Link></li>
            </ul>
          </FooterLinks>
          
          <FooterContact>
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-envelope"></i> support@jobhub.com</li>
              <li><i className="fas fa-phone"></i> +91 77777777</li>
              <li><i className="fas fa-map-marker-alt"></i> Cyber Hub, Gurugram, India</li>
            </ul>
          </FooterContact>
        </FooterGrid>
        
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} JobHub. All rights reserved.</p>
          <FooterBottomLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Policy</a>
          </FooterBottomLinks>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer; 