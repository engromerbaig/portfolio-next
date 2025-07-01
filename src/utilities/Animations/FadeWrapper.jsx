'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const fadeVariants = (delay = 0) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay,
    },
  },
});

const FadeWrapper = ({
  children,
  order = 0,
  initial = 'hidden',
  animate = 'visible',
  className,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.02, // 2% visibility triggers animation
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      variants={fadeVariants(order * 0.3)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeWrapper;
