'use client';

import React from 'react';
import { theme } from '@/theme';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';

export default function NotFound() {
  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <div className={`${theme.sectionPaddings.horizontalPx} py-20 text-center`}>
        <Heading
          title="404 Error"
          text="Oops! Page Not Found"
        />
        <p className='pb-8'>It looks like the page you’re looking for doesn’t exist.</p>
        <Button text="Return to Home" to="/" />
      </div>
    </div>
  );
}
