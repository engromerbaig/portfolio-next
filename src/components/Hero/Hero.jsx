import React from 'react';
import { theme } from '../../theme';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import omerImage from '../../assets/images/omer.webp';
import FadeWrapper from '../../utilities/Animations/FadeWrapper';
import ScrollSamePage from '../../utilities/Scroll/ScrollSamePage';

const Hero = () => {
  return (
    <section className={`${theme.hero.bgColor} ${theme.sectionPaddings.horizontalPx} py-12 font-sans`}>
      <div className="container mx-auto flex flex-col gap-6 md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start ">
          <Heading
            title="From Pixels to Logic: Where Ideas Evolve into Innovation"
            text="I design, develop, and deploy stunning web applications, turning ideas into reality seamlessly. Let's discuss your project!"
          />

          <div className="flex flex-col items-center justify-start w-full md:flex-row gap-4">
            <FadeWrapper order={1}>
              <Button
                text="Contact Me"
                to="/contact"
                hover
              />
            </FadeWrapper>

            <FadeWrapper order={2}>
              <ScrollSamePage targetId="projects">
                <Button
                  text="MY PROJECTS"
                  hover
                />
              </ScrollSamePage>
            </FadeWrapper>

          </div>

        </div>

        {/* Parent for hero image */}
        <FadeWrapper className="justify-center items-center w-full md:w-1/2 flex my-10 lg:my-0 p-2 relative transform translate-x-[-10px] lg:translate-x-0" order={3}>
          <img src={omerImage} alt="Hero" className="w-3/4 lg:w-1/2 aspect-auto shadow-hero-image" />
          <div className="absolute w-3/4 lg:w-1/2 bottom-0 lg:left-12 bg-theme-blue bg-opacity-100 p-3 shadow-lg">
            <p className="text-white text-sm">"Alone we can do so little; together we can do so much." – Helen Keller</p>
          </div>
        </FadeWrapper>

      </div>
    </section>
  );
};

export default Hero;
