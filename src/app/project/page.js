'use client';

import { theme } from '@/theme';
import Projects from '@/components/Projects/Projects';
import FadeInSection from '@/utilities/Animations/FadeInSection';

export default function ProjectPage() {
  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <FadeInSection>
        <Projects noBorder={true} numProjects="all" />
      </FadeInSection>
    </div>
  );
}
