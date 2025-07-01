// app/layout.jsx
'use client';

import { Montserrat } from 'next/font/google';
import { useState } from 'react';
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

  return (
    <html lang="en" className={montserrat.variable}>
      <body className={darkMode ? 'dark' : ''}>
        <Navbar links={links} darkMode={darkMode} toggleDarkMode={setDarkMode} />
        {children}
        <Footer darkMode={darkMode} />
      </body>
    </html>
  );
}
