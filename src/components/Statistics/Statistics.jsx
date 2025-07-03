'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Heading';
import StatisticItem from './modules/StatisticItem';
import { theme } from '../../theme';

const Statistics = () => {
  // Static data
  const githubContributions = 4000;
  const projects = '20+';
  const countries = 5;

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
          text="My Constantly Growing Stats"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center px-6 gap-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="GitHub Contributions" iconType="git" value={githubContributions} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Projects" iconType="projects" value={projects} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <StatisticItem title="Countries Served" iconType="globe" value={countries} />
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;