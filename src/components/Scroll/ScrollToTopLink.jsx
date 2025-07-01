'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ScrollToTopLink = ({ to = '/', children, className = '', ...props }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, to]);

  // Fallback to "/" if `to` is not passed
  const safeHref = typeof to === 'string' && to.trim() !== '' ? to : '/';

  return (
    <Link href={safeHref} className={className} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
