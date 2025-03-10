import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Import components as needed
import JobCard from '../components/JobCard';
import HackathonCard from '../components/HackathonCard';
import ResultCard from '../components/ResultCard';
import SyllabusSection from '../components/SyllabusSection';

const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, var(--mint-dark) 0%, var(--mint-primary) 100%);
  overflow: hidden;
  padding: 8rem 0;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: var(--mustard-light);
    border-radius: 50%;
    opacity: 0.3;
    top: -100px;
    right: -100px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: var(--mustard-light);
    border-radius: 50%;
    opacity: 0.2;
    bottom: -50px;
    left: -50px;
  }

  @media (max-width: 768px) {
    padding: 6rem 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  color: var(--light-text);

  h1 {
    color: var(--light-text);
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const SearchContainer = styled.div`
  margin-top: 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
  
  i {
    font-size: 1.2rem;
    color: var(--gray-4);
    margin: 0 0.5rem;
  }
  
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.8rem;
    font-size: 1rem;
    min-width: 200px;
  }
  
  button {
    background-color: var(--mustard-primary);
    color: var(--dark-text);
    border: none;
    border-radius: 8px;
    padding: 0.8rem 1.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      background-color: var(--mustard-dark);
      transform: translateY(-2px);
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    
    input, button {
      width: 100%;
      margin: 0.5rem 0;
    }
  }
`;

const SearchFilters = styled.div`
  display: flex;
  gap: 0.5rem;
  
  select {
    border: 1px solid var(--gray-3);
    border-radius: 6px;
    padding: 0.8rem;
    background-color: white;
    outline: none;
    
    &:focus {
      border-color: var(--mint-primary);
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    
    select {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;

const SearchTags = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  span {
    color: var(--light-text);
    opacity: 0.8;
  }
  
  a {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--light-text);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s;
    
    &:hover {
      background-color: var(--mustard-primary);
      color: var(--dark-text);
      transform: translateY(-2px);
    }
  }
`;

const QuickAccessSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.bg};
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    color: ${props => props.theme.textPrimary};
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${props => props.theme.textSecondary};
  }
`;

const QuickAccessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const QuickCard = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-8px);
    border-color: var(--mint-primary);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: var(--mint-light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
    i {
      font-size: 1.8rem;
      color: var(--mint-dark);
    }
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.textPrimary};
  }
  
  p {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
  }
`;

const FeaturedJobsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => 
    props.theme.mode === 'dark' ? 'var(--dark-surface)' : 'var(--mint-light)'};
`;

const SectionFilters = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  background-color: transparent;
  border: 2px solid ${props => 
    props.active ? 'var(--mustard-primary)' : props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'var(--gray-3)'};
  color: ${props => 
    props.active ? 'var(--mustard-primary)' : props.theme.textPrimary};
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: ${props => props.active ? '600' : '400'};
  
  &:hover {
    border-color: var(--mustard-primary);
    color: var(--mustard-primary);
  }
`;

const JobCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ViewMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    i {
      transition: transform 0.3s;
    }
    
    &:hover i {
      transform: translateX(5px);
    }
  }
`;

const HackathonsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.bg};
`;

const HackathonCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResultsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => 
    props.theme.mode === 'dark' ? 'var(--dark-surface)' : 'var(--mint-light)'};
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubscriptionSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.bg};
`;

const SubscriptionCard = styled.div`
  background: linear-gradient(135deg, var(--mint-primary) 0%, var(--mint-dark) 100%);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const SubscriptionContent = styled.div`
  padding: 3rem;
  color: var(--light-text);
  flex: 1;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--light-text);
  }
  
  p {
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

const SubscriptionForm = styled.form`
  .form-group {
    display: flex;
    margin-bottom: 1rem;
    
    input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 8px 0 0 8px;
      outline: none;
    }
    
    button {
      background-color: var(--mustard-primary);
      color: var(--dark-text);
      border: none;
      border-radius: 0 8px 8px 0;
      padding: 0 1.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        background-color: var(--mustard-dark);
      }
    }
    
    @media (max-width: 576px) {
      flex-direction: column;
      
      input {
        border-radius: 8px;
        margin-bottom: 0.5rem;
      }
      
      button {
        border-radius: 8px;
        width: 100%;
        padding: 1rem;
      }
    }
  }
  
  .form-check {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    
    input {
      margin-top: 0.2rem;
    }
    
    label {
      font-size: 0.9rem;
      
      a {
        color: var(--mustard-light);
        text-decoration: underline;
        
        &:hover {
          color: var(--mustard-primary);
        }
      }
    }
  }
`;

const SubscriptionImage = styled.div`
  flex: 1;
  min-height: 300px;
  background-image: url('https://via.placeholder.com/600x400');
  background-size: cover;
  background-position: center;
`;

// Sample data for demonstration
const jobListings = [
  {
    id: 1,
    title: 'Station Master',
    company: 'Indian Railways',
    logo: 'https://via.placeholder.com/50',
    type: 'government',
    location: 'Pan India',
    salary: '₹35,000 - ₹45,000',
    education: 'Bachelor\'s Degree'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Tata Consultancy Services',
    logo: 'https://via.placeholder.com/50',
    type: 'private',
    location: 'Bangalore, Hyderabad',
    salary: '₹6-10 LPA',
    education: 'B.Tech/M.Tech'
  },
  {
    id: 3,
    title: 'Probationary Officer',
    company: 'State Bank of India',
    logo: 'https://via.placeholder.com/50',
    type: 'government',
    location: 'Pan India',
    salary: '₹8-12 LPA',
    education: 'Any Graduate'
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Amazon',
    logo: 'https://via.placeholder.com/50',
    type: 'remote',
    location: 'Remote (India)',
    salary: '₹15-25 LPA',
    education: 'Masters in CS/Stats'
  }
];

const hackathons = [
  {
    id: 1,
    title: 'Tech Innovate 2023',
    description: 'Build innovative solutions for real-world problems',
    image: 'https://via.placeholder.com/400x200',
    date: '15 Oct',
    prizePool: '₹10 Lakh',
    teamSize: '2-4',
    location: 'Online + Finale in Bangalore',
    daysLeft: 5
  },
  {
    id: 2,
    title: 'AI Summit Hackathon',
    description: 'Create AI solutions for healthcare challenges',
    image: 'https://via.placeholder.com/400x200',
    date: '22 Oct',
    prizePool: '₹5 Lakh',
    teamSize: '1-3',
    location: 'Fully Remote',
    daysLeft: 10
  }
];

const results = [
  {
    id: 1,
    title: 'UPSC Civil Services Final Results',
    description: 'The Union Public Service Commission has declared the final results for Civil Services Examination 2023.',
    date: '15 Sep 2023',
    type: 'result'
  },
  {
    id: 2,
    title: 'SBI PO Admit Card',
    description: 'State Bank of India has released the admit cards for Probationary Officer Preliminary Examination 2023.',
    date: '20 Sep 2023',
    type: 'admitCard'
  },
  {
    id: 3,
    title: 'SSC CGL Tier 1 Results',
    description: 'Staff Selection Commission has announced the results for Combined Graduate Level Examination Tier 1.',
    date: '18 Sep 2023',
    type: 'result'
  },
  {
    id: 4,
    title: 'IBPS Clerk Admit Card',
    description: 'Institute of Banking Personnel Selection has released the admit cards for Clerk Preliminary Examination.',
    date: '22 Sep 2023',
    type: 'admitCard'
  }
];

const HomePage = () => {
  const [activeJobFilter, setActiveJobFilter] = useState('all');
  
  // Filter jobs based on selected category
  const filteredJobs = activeJobFilter === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.type === activeJobFilter);

  return (
    <>
      <HeroSection>
        <div className="container">
          <HeroContent>
            <h1>Find Your Dream Career</h1>
            <p>Discover thousands of job opportunities, hackathons, and career resources all in one place</p>
            
            <SearchContainer>
              <SearchBox>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search jobs, hackathons, or exams..." />
                <SearchFilters>
                  <select>
                    <option>All Categories</option>
                    <option>Government</option>
                    <option>Private</option>
                    <option>Hackathons</option>
                    <option>Results</option>
                  </select>
                  <select>
                    <option>All Locations</option>
                    <option>Remote</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                  </select>
                </SearchFilters>
                <button>Search</button>
              </SearchBox>
              <SearchTags>
                <span>Popular:</span>
                <Link to="/government-jobs/railway">Railway</Link>
                <Link to="/government-jobs/bank">Bank PO</Link>
                <Link to="/private-jobs/it">Software Developer</Link>
                <Link to="/private-jobs/data-science">Data Science</Link>
              </SearchTags>
            </SearchContainer>
          </HeroContent>
        </div>
      </HeroSection>

      <QuickAccessSection>
        <div className="container">
          <SectionTitle>
            <h2>Quick Access</h2>
            <p>Navigate to your desired section</p>
          </SectionTitle>
          
          <QuickAccessGrid>
            <QuickCard as={Link} to="/government-jobs">
              <div className="icon">
                <i className="fas fa-building-columns"></i>
              </div>
              <h3>Government Jobs</h3>
              <p>10,000+ opportunities</p>
            </QuickCard>
            
            <QuickCard as={Link} to="/private-jobs">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Private Jobs</h3>
              <p>25,000+ listings</p>
            </QuickCard>
            
            <QuickCard as={Link} to="/hackathons">
              <div className="icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Hackathons</h3>
              <p>500+ events</p>
            </QuickCard>
            
            <QuickCard as={Link} to="/results">
              <div className="icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h3>Results</h3>
              <p>Latest updates</p>
            </QuickCard>
            
            <QuickCard as={Link} to="/admit-cards">
              <div className="icon">
                <i className="fas fa-id-card"></i>
              </div>
              <h3>Admit Cards</h3>
              <p>Download now</p>
            </QuickCard>
            
            <QuickCard as={Link} to="/syllabus">
              <div className="icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Syllabus</h3>
              <p>Exam preparation</p>
            </QuickCard>
          </QuickAccessGrid>
        </div>
      </QuickAccessSection>

      <FeaturedJobsSection>
        <div className="container">
          <SectionTitle>
            <h2>Featured Job Opportunities</h2>
            <p>Handpicked jobs for you</p>
          </SectionTitle>
          
          <SectionFilters>
            <FilterButton 
              active={activeJobFilter === 'all'} 
              onClick={() => setActiveJobFilter('all')}
            >
              All
            </FilterButton>
            <FilterButton 
              active={activeJobFilter === 'government'} 
              onClick={() => setActiveJobFilter('government')}
            >
              Government
            </FilterButton>
            <FilterButton 
              active={activeJobFilter === 'private'} 
              onClick={() => setActiveJobFilter('private')}
            >
              Private
            </FilterButton>
            <FilterButton 
              active={activeJobFilter === 'remote'} 
              onClick={() => setActiveJobFilter('remote')}
            >
              Remote
            </FilterButton>
            <FilterButton 
              active={activeJobFilter === 'internship'} 
              onClick={() => setActiveJobFilter('internship')}
            >
              Internship
            </FilterButton>
          </SectionFilters>
          
          <JobCards>
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </JobCards>
          
          <ViewMore>
            <button className="btn-secondary">
              View All Jobs <i className="fas fa-arrow-right"></i>
            </button>
          </ViewMore>
        </div>
      </FeaturedJobsSection>

      <HackathonsSection>
        <div className="container">
          <SectionTitle>
            <h2>Upcoming Hackathons</h2>
            <p>Showcase your skills and win exciting prizes</p>
          </SectionTitle>
          
          <HackathonCards>
            {hackathons.map(hackathon => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </HackathonCards>
          
          <ViewMore>
            <button className="btn-secondary">
              View All Hackathons <i className="fas fa-arrow-right"></i>
            </button>
          </ViewMore>
        </div>
      </HackathonsSection>

      <ResultsSection>
        <div className="container">
          <SectionTitle>
            <h2>Latest Results & Admit Cards</h2>
            <p>Stay updated with the latest announcements</p>
          </SectionTitle>
          
          <ResultsGrid>
            {results.map(result => (
              <ResultCard key={result.id} result={result} />
            ))}
          </ResultsGrid>
        </div>
      </ResultsSection>

      <SyllabusSection />

      <SubscriptionSection>
        <div className="container">
          <SubscriptionCard>
            <SubscriptionContent>
              <h2>Never Miss an Opportunity</h2>
              <p>Subscribe to receive personalized job alerts, exam notifications, and result updates directly in your inbox.</p>
              
              <SubscriptionForm>
                <div className="form-group">
                  <input type="email" placeholder="Enter your email address" />
                  <button type="submit" className="btn-primary">Subscribe</button>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I agree to receive notifications and accept the <a href="#">Terms of Service</a>
                  </label>
                </div>
              </SubscriptionForm>
            </SubscriptionContent>
            
            <SubscriptionImage />
          </SubscriptionCard>
        </div>
      </SubscriptionSection>
    </>
  );
};

export default HomePage; 