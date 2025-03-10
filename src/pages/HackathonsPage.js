import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const HackathonsPage = () => {
  return (
    <PageContainer>
      <div className="container">
        <h1>Hackathons</h1>
        <p>This page will display all upcoming hackathon events.</p>
      </div>
    </PageContainer>
  );
};

export default HackathonsPage; 