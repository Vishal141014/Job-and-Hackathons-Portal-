import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const AdmitCardsPage = () => {
  return (
    <PageContainer>
      <div className="container">
        <h1>Admit Cards</h1>
        <p>This page will display all available admit cards for upcoming exams.</p>
      </div>
    </PageContainer>
  );
};

export default AdmitCardsPage; 