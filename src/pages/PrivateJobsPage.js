import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const PrivateJobsPage = () => {
  return (
    <PageContainer>
      <div className="container">
        <h1>Private Jobs</h1>
        <p>This page will display all private sector job listings.</p>
      </div>
    </PageContainer>
  );
};

export default PrivateJobsPage; 