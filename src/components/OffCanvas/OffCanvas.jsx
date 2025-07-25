'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ScrollToTopLink from '@/components/Scroll/ScrollToTopLink';
import { FaTimes } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { links } from '@/components/Navbar/modules/links';

const OffCanvas = ({ isMenuOpen, closeMenu, darkMode, toggleDarkMode }) => {
  const pathname = usePathname();

  // Close the menu when the route changes
  useEffect(() => {
    if (isMenuOpen) {
      closeMenu();
    }
  }, [pathname, darkMode]);

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 "
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[70%] xl:w-[30%] bg-white text-black dark:bg-dark-offcanvas dark:text-white flex flex-col items-start pt-4 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <FaTimes
          className="text-2xl cursor-pointer mb-6 self-end mr-4 mt-4"
          onClick={closeMenu}
        />

        {links.map((link, index) => {
          const Icon = link.icon;

          return (
            <ScrollToTopLink
              key={index}
              to={link.to}
              className="flex items-center w-full text-xl text-start p-4 hover:bg-light-hover dark:hover:bg-dark-hover"
              onClick={closeMenu}
            >
              <Icon className="text-2xl mx-4" />
              <span>{link.label}</span>
            </ScrollToTopLink>
          );
        })}

        <div
          className="flex items-center w-full text-xl text-start p-4 hover:bg-light-hover dark:hover:bg-dark-hover cursor-pointer"
          onClick={toggleDarkMode}
        >
          <MdDarkMode
            className={`text-2xl mx-4 ${darkMode ? 'text-white' : 'text-black'}`}
          />
          <span className={`${darkMode ? 'text-white' : 'text-black'}`}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
