'use client';

import { theme } from '@/theme';

const Heading = ({
  title,
  text,
  titleColor = theme.hero.titleColor,
  textColor = theme.hero.textColor,
  textWidth = '', // ✅ expects Tailwind class like 'max-w-xl'
}) => {
  return (
    <div>
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 ${titleColor}`}
        style={{ lineHeight: '1.25' }}
      >
        {title}
      </h1>

      <p className={`text-lg md:text-xl mb-8 ${textColor} ${textWidth}`}>
        {text}
      </p>
    </div>
  );
};

export default Heading;
