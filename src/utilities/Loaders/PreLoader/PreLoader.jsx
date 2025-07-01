'use client';

import React from 'react';
import './PreLoader.css';

const PreLoader = () => {
  return (
    <div className="loader-container bg-theme-light dark:bg-theme-dark">
      <div className="loader"></div>
    </div>
  );
};

export default PreLoader;
