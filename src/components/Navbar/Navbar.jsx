import { useState } from 'react';
import ScrollToTopLink from '../Scroll/ScrollToTopLink';
import OffCanvas from '../OffCanvas/OffCanvas';
import logoBlack from '../../assets/images/logo-black.png';
import logoWhite from '../../assets/images/logo-white.png';
import { MdDarkMode } from 'react-icons/md';
import './modules/hamburger.css';
import { theme } from '../../theme';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed backdrop-blur-sm py-3 flex justify-between items-center w-full top-0 z-50 bg-transparent border-b-2  border-light-hover dark:border-dark-hover shadow-sm ${theme.sectionPaddings.horizontalPx}`}>
                <div className="flex items-center">
                    <ScrollToTopLink to="/">
                        <img 
                            src={darkMode ? logoWhite : logoBlack} 
                            alt="Logo" 
                            className="h-10  cursor-pointer" 
                        />
                    </ScrollToTopLink>
                </div>
                <div className="flex items-center gap-10">
                    {/* Dark mode toggle icon */}
                    <MdDarkMode
                        className={`text-3xl cursor-pointer transition-colors duration-200 ${darkMode ? 'text-white' : 'text-black'}`}
                        onClick={toggleDarkMode}
                    />
                    {/* Custom hamburger menu */}
                    <button onClick={toggleMenu} className={`relative ${isMenuOpen ? 'open' : ''}`}>
                        <div className="hamburger">
                            <span className="line bg-black dark:bg-white "></span>
                            <span className="line bg-black dark:bg-white "></span>
                            <span className="line bg-black dark:bg-white"></span>
                        </div>
                    </button>
                </div>
            </nav>
            <OffCanvas isMenuOpen={isMenuOpen} closeMenu={closeMenu} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
};

export default Navbar;
