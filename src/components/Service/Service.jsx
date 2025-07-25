'use client';

import Image from 'next/image';
import './Service.css'; // Should be in /src/components/Service/Service.css
import Heading from '../Heading/Heading';
import serviceData from './serviceData';
import { theme } from '../../theme';
import FadeWrapper from '../../utilities/Animations/FadeWrapper';
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <div className={`pt-48 pb-24 border-b-2 border-light-hover dark:border-dark-hover ${theme.sectionPaddings.horizontalPx}`}>
      <div className="text-center">
        <Heading 
          title="You‘re Safe And in Good Hands" 
          text="Customer satisfaction is my priority, and in order to do that I decided to pickup skills and principles to provide quality service." 
        />
      </div>
      <FadeWrapper className="grid lg:grid-cols-3 justify-center text-body-text-light dark:text-body-text-dark">
        {serviceData.map((service, index) => (
          <motion.div key={index} className="mx-4 my-2">
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="text-center mb-4">
                <span className="flex justify-center items-center mb-2">
                  <div className="text-white bg-theme-blue rounded-full">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="icon-class p-4 w-14 aspect-square"
                    />
                  </div>
                </span>
                <h1 className="font-bold">{service.title}</h1>
              </div>
              <p className="text-center flex-grow">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </FadeWrapper>
    </div>
  );
};

export default Service;
