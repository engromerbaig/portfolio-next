'use client';

import Link from 'next/link';
import './Button.css'; // Move this file to /src/components/Button/

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

  const Component = href
    ? 'a'
    : to
    ? ({ children, ...rest }) => <Link href={to} {...rest}>{children}</Link>
    : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={[...baseClasses, className].join(' ')}
      {...props}
      style={{
        '--hover-text-color': hoverTextColor,
        '--hover-bg-color': hoverBgColor,
      }}
    >
      <span className="text-container">
        <span className="text">{text}</span>
      </span>
    </Component>
  );
};

export default Button;
