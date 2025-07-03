// app/ClientLayout.js
'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { links } from '@/components/Navbar/modules/links';
import PreLoader from '@/utilities/Loaders/PreLoader/PreLoader';

export default function ClientLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  // Handle route changes
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Show loading for a brief moment on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return <PreLoader darkMode={darkMode} />;
  }

  return (
    <>
      <Navbar links={links} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
      <Footer darkMode={darkMode} />
    </>
  );
}