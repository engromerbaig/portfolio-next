'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Default animation variants
const defaultContainerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.05,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    }
  }
};

const defaultItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const AnimateWrapper = ({
  children,
  containerVariants = defaultContainerVariants,
  initial = "hidden",
  animate = "visible",
  itemVariants = defaultItemVariants,
  className
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [controls, animate, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial={initial}
      animate={controls}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { variants: itemVariants }) : child
      )}
    </motion.div>
  );
};

export default AnimateWrapper;
