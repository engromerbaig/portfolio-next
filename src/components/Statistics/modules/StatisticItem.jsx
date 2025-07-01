import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaEarthAmericas } from 'react-icons/fa6';

const iconStyles = "text-3xl aspect-square text-theme-blue motion-safe:animate-pulse";

const iconMap = {
  code: FaCode,
  users: FaUsers,
  globe: FaEarthAmericas,
};

const StatisticItem = ({ title, iconType, value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8, // Trigger only when the element is fully visible
  });

  const Icon = iconMap[iconType] || FaCode;

  useEffect(() => {
    if (inView) {
      const duration = 2; // Duration in seconds
      const start = 0;
      const end = value;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        const current = Math.min(start + (end - start) * progress, end);

        setDisplayValue(Math.floor(current));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className='flex flex-col gap-4'>
      <h1 className='font-semibold'>{title}</h1>
      <div className="flex items-center justify-center gap-2">
        <Icon className={iconStyles} />
        <motion.p
          className='text-3xl font-bold'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          {displayValue.toLocaleString()}
        </motion.p>
      </div>
    </div>
  );
};

export default StatisticItem;
