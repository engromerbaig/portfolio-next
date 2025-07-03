'use client';

import Image from 'next/image';
import { theme } from '@/theme';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import FadeWrapper from '@/utilities/Animations/FadeWrapper';
import ScrollSamePage from '@/utilities/Scroll/ScrollSamePage';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className={`${theme.hero.bgColor} ${theme.sectionPaddings.horizontalPx} py-12 font-sans`}>
      <div className="container mx-auto flex flex-col gap-6 md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start">
       <Heading
  title="Full-Stack Web Solutions with MERN Precision"
  text="I specialize in building fast, scalable, and responsive web applications using the MERN stack. From frontend design to backend logic, I turn ideas into production-ready digital experiences."
/>


          <div className="flex flex-col items-center justify-start w-full md:flex-row gap-4">


             <FadeWrapper order={1}>
              <ScrollSamePage targetId="projects">
                <Button
                  text="MY PROJECTS"
                  hover
                />
              </ScrollSamePage>
            </FadeWrapper>


            <FadeWrapper order={2}>
<Link href="/resume.pdf" passHref legacyBehavior>
  <a download className="bg-theme-blue hover:bg-theme-blue/80 text-white py-4 uppercase px-4 rounded font-bold">My Resume</a>
</Link>
            </FadeWrapper>

           
          </div>
        </div>

        {/* Parent for hero image */}
        <FadeWrapper
          className="justify-center items-center w-full md:w-1/2 flex my-10 lg:my-0 p-2 relative transform translate-x-[-10px] lg:translate-x-0"
          order={3}
        >
          <Image
            src="/images/omer.webp"
            alt="Hero"
            width={500}
            height={500}
            className="w-3/4 lg:w-1/2 aspect-auto shadow-hero-image"
            priority
          />
          <div className="absolute w-3/4 lg:w-1/2 bottom-0 lg:left-12 bg-theme-blue bg-opacity-100 p-3 shadow-lg">
            <p className="text-white text-sm">
“First, solve the problem. Then, write the code.” – John Johnson

            </p>
          </div>
        </FadeWrapper>
      </div>
    </section>
  );
};

export default Hero;
