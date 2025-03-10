import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1.2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => 
    props.type === 'result' ? 'var(--mint-primary)' : 'var(--mustard-primary)'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: ${props => 
    props.type === 'result' ? 'var(--mint-light)' : 'var(--mustard-light)'};
  color: ${props => 
    props.type === 'result' ? 'var(--mint-dark)' : 'var(--mustard-dark)'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    font-size: 1.8rem;
  }
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
    
    i {
      font-size: 1.5rem;
    }
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const DateInfo = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.2rem;
`;

const DownloadButton = styled.button`
  background-color: ${props => 
    props.type === 'result' ? 'var(--mint-primary)' : 'var(--mustard-primary)'};
  color: var(--dark-text);
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    font-size: 0.9rem;
  }
  
  &:hover {
    background-color: ${props => 
      props.type === 'result' ? 'var(--mint-dark)' : 'var(--mustard-dark)'};
    transform: translateY(-2px);
  }
`;

const ResultCard = ({ result }) => {
  return (
    <Card type={result.type}>
      <IconContainer type={result.type}>
        <i className={`fas ${result.type === 'result' ? 'fa-clipboard-check' : 'fa-id-card'}`}></i>
      </IconContainer>
      
      <Content>
        <Title>{result.title}</Title>
        <Description>{result.description}</Description>
        <DateInfo>Published on: {result.date}</DateInfo>
        <DownloadButton type={result.type}>
          <i className="fas fa-download"></i>
          {result.type === 'result' ? 'Download Result' : 'Download Admit Card'}
        </DownloadButton>
      </Content>
    </Card>
  );
};

export default ResultCard; 