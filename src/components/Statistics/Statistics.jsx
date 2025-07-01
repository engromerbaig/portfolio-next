'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Heading';
import StatisticItem from './modules/StatisticItem';
import { theme } from '../../theme';

// Function to safely access localStorage inside useEffect
const getInitialLinesOfCode = () => {
  if (typeof window === 'undefined') return 0;
  return parseInt(localStorage.getItem('linesOfCode') || '15000', 10);
};

const updateLinesOfCode = (value) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('linesOfCode', value.toString());
};

const getVisitorsCount = () => {
  if (typeof window === 'undefined') return 0;

  const storedVisitors = parseInt(localStorage.getItem('visitorsCount') || '10', 10);
  const lastReset = parseInt(localStorage.getItem('lastReset') || '0', 10);
  const now = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  if (now - lastReset > oneDay) {
    localStorage.setItem('lastReset', now.toString());
    localStorage.setItem('visitorsCount', '10');
    return 10;
  } else {
    return storedVisitors;
  }
};

const incrementVisitorsCount = () => {
  if (typeof window === 'undefined') return;

  const storedVisitors = parseInt(localStorage.getItem('visitorsCount') || '10', 10);
  localStorage.setItem('visitorsCount', (storedVisitors + 1).toString());
};

const Statistics = () => {
  const [linesOfCode, setLinesOfCode] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [countries] = useState(15);

  // Initial load
  useEffect(() => {
    // Safe browser-only access
    if (typeof window === 'undefined') return;

    const initialLines = getInitialLinesOfCode();
    setLinesOfCode(initialLines);

    incrementVisitorsCount();
    setVisitors(getVisitorsCount());
  }, []);

  // Update lines of code every 4 hours
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateInterval = 4 * 60 * 60 * 1000; // 4 hours
    const now = new Date().getTime();
    const lastUpdate = parseInt(localStorage.getItem('lastLinesUpdate') || '0', 10);

    if (now - lastUpdate > updateInterval) {
      const newLines = getInitialLinesOfCode() + 5;
      setLinesOfCode(newLines);
      updateLinesOfCode(newLines);
      localStorage.setItem('lastLinesUpdate', now.toString());
    }

    const intervalId = setInterval(() => {
      const updatedLines = getInitialLinesOfCode() + 5;
      setLinesOfCode(updatedLines);
      updateLinesOfCode(updatedLines);
      localStorage.setItem('lastLinesUpdate', new Date().getTime().toString());
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, []);

  // Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div className={`pt-48 pb-24 border-b-2 border-t-2 border-light-hover dark:border-dark-hover ${theme.sectionPaddings.horizontalPx}`}>
      <div className="text-center mb-8">
        <Heading
          title="Performance Highlights"
          text="My Constantly Evolving Stats"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center px-6 gap-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Lines of Code" iconType="code" value={linesOfCode} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Visitors Today" iconType="users" value={visitors} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Countries Served" iconType="globe" value={countries} />
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
