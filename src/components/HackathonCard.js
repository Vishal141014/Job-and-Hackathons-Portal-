import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    
    .hackathon-banner img {
      transform: scale(1.05);
    }
  }
`;

const Banner = styled.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const DateBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--mustard-primary);
  color: var(--dark-text);
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  line-height: 1.2;
  min-width: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  .day {
    font-size: 1.2rem;
    display: block;
  }
  
  .month {
    font-size: 0.9rem;
    text-transform: uppercase;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
`;

const Description = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: var(--mustard-primary);
    width: 20px;
    text-align: center;
    font-size: 1.1rem;
  }
  
  span {
    color: ${props => props.theme.textPrimary};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'var(--gray-2)'};
  padding-top: 1.2rem;
`;

const Deadline = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: ${props => props.daysLeft <= 3 ? 'var(--error)' : 'var(--warning)'};
  }
  
  span {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
  }
`;

const RegisterButton = styled.button`
  background-color: var(--mustard-primary);
  color: var(--dark-text);
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: var(--mustard-dark);
    transform: translateY(-2px);
  }
`;

const HackathonCard = ({ hackathon }) => {
  return (
    <Card>
      <Banner className="hackathon-banner">
        <img src={hackathon.image} alt={hackathon.title} />
        <DateBadge>
          <span className="day">{hackathon.date.split(' ')[0]}</span>
          <span className="month">{hackathon.date.split(' ')[1]}</span>
        </DateBadge>
      </Banner>
      
      <Content>
        <Title>{hackathon.title}</Title>
        <Description>{hackathon.description}</Description>
        
        <Details>
          <Detail>
            <i className="fas fa-trophy"></i>
            <span>{hackathon.prizePool} Prize Pool</span>
          </Detail>
          <Detail>
            <i className="fas fa-users"></i>
            <span>Team of {hackathon.teamSize}</span>
          </Detail>
          <Detail>
            <i className="fas fa-map-marker-alt"></i>
            <span>{hackathon.location}</span>
          </Detail>
        </Details>
        
        <Footer>
          <Deadline daysLeft={hackathon.daysLeft}>
            <i className="fas fa-clock"></i>
            <span>
              {hackathon.daysLeft <= 0 
                ? 'Registration closed' 
                : `Registration closes in ${hackathon.daysLeft} days`}
            </span>
          </Deadline>
          <RegisterButton>Register Now</RegisterButton>
        </Footer>
      </Content>
    </Card>
  );
};

export default HackathonCard; 