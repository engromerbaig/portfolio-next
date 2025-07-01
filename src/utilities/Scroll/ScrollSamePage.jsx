'use client';

import React from 'react';

const ScrollSamePage = ({ targetId, children }) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <span onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </span>
  );
};

export default ScrollSamePage;
