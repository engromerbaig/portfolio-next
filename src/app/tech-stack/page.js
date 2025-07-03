'use client';

import { theme } from '@/theme';
import Projects from '@/components/Projects/Projects';
import FadeInSection from '@/utilities/Animations/FadeInSection';
import ToolSection from '@/components/Tools/modules/ToolSection';
import otherTechnologies from '@/components/Tools/modules/otherTechnologies';

export default function TechStack() {
  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <FadeInSection>
  <ToolSection 
        title="My Tech Stack"
        text="Full-stack technologies I prefer using"
        tools={otherTechnologies}
      />
      </FadeInSection>
    </div>
  );
}
