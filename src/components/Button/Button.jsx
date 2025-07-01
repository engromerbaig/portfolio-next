import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'; // Import the CSS file for animation

const Button = ({
  text,
  className = '',
  to,
  href,
  hover = false,
  textColor = 'text-theme-blue', // Default text color

  // new
  hoverTextColor = 'white', // Default hover text color
  hoverBgColor = '#3B82F6', // Default hover background color
  borderColor = 'border-theme-blue', // Default border color
  // hoverBorderColor = '#001529', // Default hover border color
  // end new
  onClick, // Optional onClick handler
  ...props
}) => {
  const ButtonComponent = href ? 'a' : to ? Link : 'button';

  const baseClasses = [
    // Tailwind classes from theme
    'py-2.5 px-7',
    textColor,
    borderColor,
    'bg-transparent',
    'border-4',
    'border-theme-blue', // make optional with this as default value
    'bg-transparent',
    'transition duration-200',
    'btn-31', // Add the new class for the border effect
  ];

  const hoverClasses = hover
    ? []
    : [];

  return (
    <ButtonComponent
      to={to}
      href={href}
      onClick={onClick} // Include onClick handler
      className={[...baseClasses, ...hoverClasses, className].join(' ')}
      {...props}
      style={{
        '--hover-text-color': hoverTextColor,
        '--hover-bg-color': hoverBgColor,
        // '--border-color': borderColor,
        // '--hover-border-color': hoverBorderColor,
      }}
    >
      <span className="text-container">
        <span className="text">
          {text}
        </span>
      </span>
    </ButtonComponent>
  );
};

export default Button;
