import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    border-color: ${props => 
      props.jobType === 'government' ? 'var(--mint-primary)' : 
      props.jobType === 'private' ? 'var(--mustard-primary)' : 
      props.jobType === 'remote' ? 'var(--info)' : 
      'var(--mint-light)'
    };
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'var(--gray-2)'};
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.div`
  flex: 1;
  
  h3 {
    color: ${props => props.theme.textPrimary};
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }
  
  p {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
    margin: 0;
  }
`;

const JobBadge = styled.div`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${props => 
    props.type === 'government' ? 'var(--mint-light)' : 
    props.type === 'private' ? 'var(--mustard-light)' : 
    props.type === 'remote' ? 'rgba(33, 150, 243, 0.1)' : 
    'var(--gray-2)'
  };
  color: ${props => 
    props.type === 'government' ? 'var(--mint-dark)' : 
    props.type === 'private' ? 'var(--mustard-dark)' : 
    props.type === 'remote' ? 'var(--info)' : 
    'var(--dark-text)'
  };
`;

const CardDetails = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: ${props => 
      props.jobType === 'government' ? 'var(--mint-dark)' : 
      props.jobType === 'private' ? 'var(--mustard-dark)' : 
      props.jobType === 'remote' ? 'var(--info)' : 
      'var(--gray-4)'
    };
    width: 20px;
    text-align: center;
  }
  
  span {
    color: ${props => props.theme.textPrimary};
    font-size: 0.95rem;
  }
`;

const CardFooter = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'var(--gray-2)'};
  
  @media (max-width: 576px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`;

const ViewButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: transparent;
  color: ${props => props.theme.textPrimary};
  border: 2px solid ${props => 
    props.jobType === 'government' ? 'var(--mint-primary)' : 
    props.jobType === 'private' ? 'var(--mustard-primary)' : 
    props.jobType === 'remote' ? 'var(--info)' : 
    'var(--gray-3)'
  };
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => 
      props.jobType === 'government' ? 'var(--mint-primary)' : 
      props.jobType === 'private' ? 'var(--mustard-primary)' : 
      props.jobType === 'remote' ? 'var(--info)' : 
      'var(--gray-3)'
    };
    color: ${props => 
      props.jobType === 'remote' ? 'white' : 
      props.theme.mode === 'dark' ? 'var(--dark-text)' : 'var(--dark-text)'
    };
  }
`;

const ApplyButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: ${props => 
    props.jobType === 'government' ? 'var(--mint-primary)' : 
    props.jobType === 'private' ? 'var(--mustard-primary)' : 
    props.jobType === 'remote' ? 'var(--info)' : 
    'var(--mustard-primary)'
  };
  color: ${props => 
    props.jobType === 'remote' ? 'white' : 
    'var(--dark-text)'
  };
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => 
      props.jobType === 'government' ? 'var(--mint-dark)' : 
      props.jobType === 'private' ? 'var(--mustard-dark)' : 
      props.jobType === 'remote' ? '#1976d2' : 
      'var(--mustard-dark)'
    };
    transform: translateY(-2px);
  }
`;

const JobCard = ({ job }) => {
  return (
    <Card jobType={job.type}>
      <CardHeader>
        <CompanyLogo src={job.logo} alt={job.company} />
        <JobTitle>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </JobTitle>
        <JobBadge type={job.type}>
          {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
        </JobBadge>
      </CardHeader>
      
      <CardDetails>
        <Detail jobType={job.type}>
          <i className="fas fa-map-marker-alt"></i>
          <span>{job.location}</span>
        </Detail>
        <Detail jobType={job.type}>
          <i className="fas fa-rupee-sign"></i>
          <span>{job.salary}</span>
        </Detail>
        <Detail jobType={job.type}>
          <i className="fas fa-graduation-cap"></i>
          <span>{job.education}</span>
        </Detail>
      </CardDetails>
      
      <CardFooter>
        <ViewButton jobType={job.type}>View Details</ViewButton>
        <ApplyButton jobType={job.type}>Apply Now</ApplyButton>
      </CardFooter>
    </Card>
  );
};

export default JobCard; 