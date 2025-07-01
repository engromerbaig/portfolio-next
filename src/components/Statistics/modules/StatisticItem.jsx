'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaEarthAmericas } from 'react-icons/fa6';

const iconMap = {
  code: FaCode,
  users: FaUsers,
  globe: FaEarthAmericas,
};

const iconStyles = "text-3xl aspect-square text-theme-blue motion-safe:animate-pulse";

const StatisticItem = ({ title, iconType, value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const Icon = iconMap[iconType] || FaCode;

  useEffect(() => {
    if (inView && !hasAnimated) {
      const duration = 2;
      const frameRate = 60;
      const totalFrames = duration * frameRate;
      const increment = value / totalFrames;

      let frame = 0;

      const counter = () => {
        frame++;
        const newValue = Math.round(increment * frame);
        setDisplayValue(newValue <= value ? newValue : value);

        if (frame < totalFrames) {
          requestAnimationFrame(counter);
        } else {
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(counter);
    }
  }, [inView, hasAnimated, value]);

  return (
    <div ref={ref} className="flex flex-col gap-4 items-center">
      <h1 className="font-semibold">{title}</h1>
      <div className="flex items-center justify-center gap-2">
        <Icon className={iconStyles} />
        <motion.p
          className="text-3xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          {displayValue.toLocaleString()}
        </motion.p>
      </div>
    </div>
  );
};

export default StatisticItem;
