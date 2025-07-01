'use client';

import Hero from '../Components/Hero/Hero';
import Service from '../Components/Service/Service';
import Tools from '../Components/Tools/Tools';
import Statistics from '../Components/Statistics/Statistics';
import Projects from '../Components/Projects/Projects';
import AboutMe from '../Components/AboutMe/AboutMe';
import Message from '../Components/Message/Message';
import { theme } from '../theme';
import FadeInSection from '../utilities/Animations/FadeInSection';

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
