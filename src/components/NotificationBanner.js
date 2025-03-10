import React, { useState } from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: var(--mustard-primary);
  color: var(--dark-text);
  overflow: hidden;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, var(--mustard-primary), transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, var(--mustard-primary), transparent);
  }
`;

const Marquee = styled.div`
  display: flex;
  padding: 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  
  span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 20s linear infinite;
    font-weight: 500;
  }
  
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--dark-text);
  font-size: 1rem;
  cursor: pointer;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <BannerContainer>
      <Marquee>
        <span>
          URGENT: New Railway Recruitment 2023 announced! &nbsp;&nbsp;|&nbsp;&nbsp; 
          UPSC Civil Services Results declared &nbsp;&nbsp;|&nbsp;&nbsp; 
          Tech Hackathon with ₹10 Lakh prize - Register now! &nbsp;&nbsp;|&nbsp;&nbsp; 
          Bank PO Admit Cards released &nbsp;&nbsp;|&nbsp;&nbsp; 
          SSC CGL Notification out - Apply before deadline
        </span>
      </Marquee>
      <CloseButton onClick={() => setIsVisible(false)}>
        <i className="fas fa-times"></i>
      </CloseButton>
    </BannerContainer>
  );
};

export default NotificationBanner; 