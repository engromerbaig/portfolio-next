'use client';

import { useState } from 'react';
import { theme } from '@/theme';
import JobProfiles from '@/components/JobProfiles/JobProfiles';
import Heading from '@/components/Heading/Heading';
import FadeInSection from '@/utilities/Animations/FadeInSection';

export default function WorkExperiencePage() {
  const [selectedTab, setSelectedTab] = useState(0); // Default to first tab

  return (
    <FadeInSection>
      <div className={`py-24 pb-40 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <div className={`${theme.sectionPaddings.horizontalPx} py-20 text-center`}>
          <Heading
            title="Work Experience"
            text="With 3+ years of experience, I have worked for reputed companies in Pakistan and Germany, alongside freelance projects. I excel in WordPress development, front-end technologies, and UI/UX design. My work has improved website traffic, user engagement, and content management. I am adept at handling tasks both remotely and in-house, collaborating effectively with international teams."
          />
        </div>

        <JobProfiles selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </FadeInSection>
  );
}
