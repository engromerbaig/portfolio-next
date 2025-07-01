'use client';

import { useState } from 'react';
import ScrollToTopLink from '@/components/Scroll/ScrollToTopLink';
import OffCanvas from '@/components/OffCanvas/OffCanvas';
import Image from 'next/image';
import { MdDarkMode } from 'react-icons/md';
import { theme } from '@/theme';
import './modules/hamburger.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed backdrop-blur-sm py-3 flex justify-between items-center w-full top-0 z-50 bg-transparent border-b-2 border-light-hover dark:border-dark-hover shadow-sm ${theme.sectionPaddings.horizontalPx}`}
      >
        <div className="flex items-center">
          <ScrollToTopLink to="/">
            <Image
              src={darkMode ? '/images/logo-white.png' : '/images/logo-black.png'}
              alt="Logo"
              className="h-10 cursor-pointer"
              width={140}
              height={40}
              priority
            />
          </ScrollToTopLink>
        </div>

        <div className="flex items-center gap-10">
          <MdDarkMode
            className={`text-3xl cursor-pointer transition-colors duration-200 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
            onClick={toggleDarkMode}
          />

          <button onClick={toggleMenu} className={`relative ${isMenuOpen ? 'open' : ''}`}>
            <div className="hamburger">
              <span className="line bg-black dark:bg-white" />
              <span className="line bg-black dark:bg-white" />
              <span className="line bg-black dark:bg-white" />
            </div>
          </button>
        </div>
      </nav>

      <OffCanvas
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
};

export default Navbar;
