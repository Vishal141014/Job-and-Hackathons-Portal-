import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const GovtJobsPage = () => {
  return (
    <PageContainer>
      <div className="container">
        <h1>Government Jobs</h1>
        <p>This page will display all government job listings.</p>
      </div>
    </PageContainer>
  );
};

export default GovtJobsPage; 