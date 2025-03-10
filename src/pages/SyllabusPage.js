import React from 'react';
import styled from 'styled-components';
import SyllabusSection from '../components/SyllabusSection';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const SyllabusPage = () => {
  return (
    <PageContainer>
      <div className="container">
        <h1>Exam Syllabus</h1>
        <p>Comprehensive syllabus for various competitive exams.</p>
        <SyllabusSection />
      </div>
    </PageContainer>
  );
};

export default SyllabusPage; 