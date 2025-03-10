import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.bg};
`;

const SyllabusContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    gap: 0.3rem;
  }
`;

const TabButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.active ? 'var(--mint-primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--dark-text)' : props.theme.textPrimary};
  border: 2px solid ${props => props.active ? 'var(--mint-primary)' : props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'var(--gray-3)'};
  border-radius: 8px;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--mint-primary)' : 'rgba(162, 213, 198, 0.1)'};
    border-color: var(--mint-primary);
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const SyllabusContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const SyllabusCard = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
  
  h3 {
    color: ${props => props.theme.textPrimary};
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: var(--mint-primary);
      border-radius: 3px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SyllabusSections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SyllabusSection = styled.div`
  background-color: ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'var(--mint-light)'};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  h4 {
    color: ${props => props.theme.textPrimary};
    margin-bottom: 1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    i {
      color: var(--mint-dark);
    }
  }
  
  ul {
    margin-bottom: 1.2rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      color: ${props => props.theme.textSecondary};
      position: relative;
      
      &::before {
        content: '•';
        position: absolute;
        left: -1rem;
        color: var(--mint-primary);
        font-size: 1.2rem;
      }
    }
  }
  
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    i {
      transition: transform 0.3s;
    }
    
    &:hover i {
      transform: translateY(-2px);
    }
  }
`;

// Sample syllabus data
const syllabusData = {
  upsc: {
    title: 'UPSC Civil Services Examination',
    sections: [
      {
        title: 'Preliminary Examination',
        icon: 'fa-file-alt',
        topics: [
          'General Studies Paper I',
          'General Studies Paper II (CSAT)',
          'Current Affairs & General Knowledge',
          'Indian Polity & Constitution'
        ]
      },
      {
        title: 'Main Examination',
        icon: 'fa-book',
        topics: [
          'Essay',
          'General Studies Papers I, II, III, IV',
          'Optional Subjects',
          'English & Regional Language Papers'
        ]
      },
      {
        title: 'Interview/Personality Test',
        icon: 'fa-user-tie',
        topics: [
          'Current Affairs',
          'Personality Assessment',
          'Ethics & Integrity',
          'Problem Solving & Decision Making'
        ]
      }
    ]
  },
  ssc: {
    title: 'Staff Selection Commission Examinations',
    sections: [
      {
        title: 'Tier I Examination',
        icon: 'fa-file-alt',
        topics: [
          'General Intelligence & Reasoning',
          'General Awareness',
          'Quantitative Aptitude',
          'English Comprehension'
        ]
      },
      {
        title: 'Tier II Examination',
        icon: 'fa-book',
        topics: [
          'Quantitative Abilities',
          'English Language & Comprehension',
          'Statistics',
          'General Studies'
        ]
      },
      {
        title: 'Tier III & IV',
        icon: 'fa-keyboard',
        topics: [
          'Descriptive Paper in English/Hindi',
          'Computer Proficiency Test',
          'Data Entry Skill Test',
          'Document Verification'
        ]
      }
    ]
  },
  bank: {
    title: 'Banking Examinations',
    sections: [
      {
        title: 'Preliminary Examination',
        icon: 'fa-file-alt',
        topics: [
          'English Language',
          'Quantitative Aptitude',
          'Reasoning Ability',
          'General/Financial Awareness'
        ]
      },
      {
        title: 'Main Examination',
        icon: 'fa-book',
        topics: [
          'Reasoning & Computer Aptitude',
          'Data Analysis & Interpretation',
          'General/Economy/Banking Awareness',
          'English Language'
        ]
      },
      {
        title: 'Interview Process',
        icon: 'fa-user-tie',
        topics: [
          'Banking Knowledge',
          'Current Economic Scenario',
          'Personal Background & Experience',
          'Communication Skills'
        ]
      }
    ]
  },
  railway: {
    title: 'Railway Recruitment Examinations',
    sections: [
      {
        title: 'First Stage CBT',
        icon: 'fa-file-alt',
        topics: [
          'Mathematics',
          'General Intelligence & Reasoning',
          'General Science',
          'General Awareness'
        ]
      },
      {
        title: 'Second Stage CBT',
        icon: 'fa-book',
        topics: [
          'Mathematics',
          'General Intelligence & Reasoning',
          'Basic Science & Engineering',
          'General Awareness'
        ]
      },
      {
        title: 'Skill & Aptitude Tests',
        icon: 'fa-tools',
        topics: [
          'Computer-Based Aptitude Test',
          'Typing Skill Test',
          'Physical Efficiency Test',
          'Document Verification'
        ]
      }
    ]
  },
  gate: {
    title: 'Graduate Aptitude Test in Engineering',
    sections: [
      {
        title: 'General Aptitude',
        icon: 'fa-brain',
        topics: [
          'Verbal Ability',
          'Numerical Ability',
          'Analytical Skills',
          'Spatial Ability'
        ]
      },
      {
        title: 'Engineering Mathematics',
        icon: 'fa-square-root-alt',
        topics: [
          'Linear Algebra',
          'Calculus',
          'Differential Equations',
          'Probability & Statistics'
        ]
      },
      {
        title: 'Subject-Specific Knowledge',
        icon: 'fa-microscope',
        topics: [
          'Core Engineering Concepts',
          'Specialized Topics',
          'Application-based Problems',
          'Design & Analysis'
        ]
      }
    ]
  }
};

const SyllabusComponent = () => {
  const [activeTab, setActiveTab] = useState('upsc');

  return (
    <Section>
      <div className="container">
        <div className="section-title">
          <h2>Exam Syllabus & Preparation</h2>
          <p>Comprehensive study material for competitive exams</p>
        </div>
        
        <SyllabusContainer>
          <TabsContainer>
            <TabButton 
              active={activeTab === 'upsc'} 
              onClick={() => setActiveTab('upsc')}
            >
              UPSC
            </TabButton>
            <TabButton 
              active={activeTab === 'ssc'} 
              onClick={() => setActiveTab('ssc')}
            >
              SSC
            </TabButton>
            <TabButton 
              active={activeTab === 'bank'} 
              onClick={() => setActiveTab('bank')}
            >
              Banking
            </TabButton>
            <TabButton 
              active={activeTab === 'railway'} 
              onClick={() => setActiveTab('railway')}
            >
              Railway
            </TabButton>
            <TabButton 
              active={activeTab === 'gate'} 
              onClick={() => setActiveTab('gate')}
            >
              GATE
            </TabButton>
          </TabsContainer>
          
          {Object.keys(syllabusData).map(key => (
            <SyllabusContent key={key} active={activeTab === key}>
              <SyllabusCard>
                <h3>{syllabusData[key].title}</h3>
                <SyllabusSections>
                  {syllabusData[key].sections.map((section, index) => (
                    <SyllabusSection key={index}>
                      <h4>
                        <i className={`fas ${section.icon}`}></i>
                        {section.title}
                      </h4>
                      <ul>
                        {section.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                      <button className="btn-outline">
                        Download PDF <i className="fas fa-download"></i>
                      </button>
                    </SyllabusSection>
                  ))}
                </SyllabusSections>
              </SyllabusCard>
            </SyllabusContent>
          ))}
        </SyllabusContainer>
      </div>
    </Section>
  );
};

export default SyllabusComponent; 