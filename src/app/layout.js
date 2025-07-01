'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { links } from '@/components/Navbar/modules/links';
import './globals.css'; // your global styles

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className={darkMode ? 'dark' : ''}>
        <Navbar links={links} darkMode={darkMode} toggleDarkMode={setDarkMode} />
        {children}
        <Footer darkMode={darkMode} />
      </body>
    </html>
  );
}