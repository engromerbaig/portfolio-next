// src/components/ScrollToTopLink.js
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, className, ...props }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === to) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location, to]);

  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
