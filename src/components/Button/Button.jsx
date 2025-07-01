'use client';

import Link from 'next/link';
import './Button.css';

const Button = ({
  text,
  className = '',
  to,
  href,
  hover = false,
  textColor = 'text-theme-blue',
  hoverTextColor = 'white',
  hoverBgColor = '#3B82F6',
  borderColor = 'border-theme-blue',
  onClick,
  ...props
}) => {
  const baseClasses = [
    'py-2.5 px-7',
    textColor,
    borderColor,
    'bg-transparent',
    'border-4',
    'transition duration-200',
    'btn-31',
  ];

  const combinedClassName = [...baseClasses, className].join(' ');

  const styleVars = {
    '--hover-text-color': hoverTextColor,
    '--hover-bg-color': hoverBgColor,
  };

  if (to) {
    return (
      <Link href={to} {...props} className={combinedClassName} style={styleVars}>
        <span className="text-container">
          <span className="text">{text}</span>
        </span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} {...props} className={combinedClassName} style={styleVars}>
        <span className="text-container">
          <span className="text">{text}</span>
        </span>
      </a>
    );
  }

  return (
    <button onClick={onClick} {...props} className={combinedClassName} style={styleVars}>
      <span className="text-container">
        <span className="text">{text}</span>
      </span>
    </button>
  );
};

export default Button;
