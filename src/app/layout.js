// app/layout.jsx
'use client';

import { Montserrat } from 'next/font/google';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { links } from '@/components/Navbar/modules/links';
import './globals.css';

// 🔥 Load all Montserrat weights (100 to 900)
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle function that switches between true/false
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Apply dark class to HTML element when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <html lang="en" className={montserrat.variable}>
      <body className={darkMode ? 'dark' : ''}>
        <Navbar links={links} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {children}
        <Footer darkMode={darkMode} />
      </body>
    </html>
  );
}