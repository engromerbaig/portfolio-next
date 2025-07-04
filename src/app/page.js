'use client';

import Hero from '@/components/Hero/Hero';
import Service from '@/components/Service/Service';
import Tools from '@/components/Tools/Tools';
import Statistics from '@/components/Statistics/Statistics';
import Projects from '@/components/Projects/Projects';
import AboutMe from '@/components/AboutMe/AboutMe';
import Message from '@/components/Message/Message';
import { theme } from '@/theme';
import FadeInSection from '@/utilities/Animations/FadeInSection';

export default function Home() {
  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection><Service /></FadeInSection>
      <FadeInSection><Tools /></FadeInSection>
      <FadeInSection><Statistics /></FadeInSection>
      <FadeInSection><Projects /></FadeInSection>
      <FadeInSection><AboutMe /></FadeInSection>
      <FadeInSection><Message /></FadeInSection>
    </div>
);
}
