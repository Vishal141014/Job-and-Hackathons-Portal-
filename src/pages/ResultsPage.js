import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const ResultsPage = () => {
  return (
    <PageContainer>
      <div className="container">
        <h1>Results</h1>
        <p>This page will display all exam and job application results.</p>
      </div>
    </PageContainer>
  );
};

export default ResultsPage; 