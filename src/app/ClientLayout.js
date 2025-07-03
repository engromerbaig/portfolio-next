// app/ClientLayout.js
'use client';

import { Suspense, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { links } from '@/components/Navbar/modules/links';
import PreLoader from '@/utilities/Loaders/PreLoader/PreLoader';

export default function ClientLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar links={links} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Suspense fallback={<PreLoader darkMode={darkMode} />}>
        {children}
      </Suspense>

      <Footer darkMode={darkMode} />
    </>
  );
}
