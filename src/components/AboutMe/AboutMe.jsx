import React from 'react';
import omerImage from '../../assets/images/omer2.webp';
import Heading from '../Heading/Heading';
import SocialRow from '../Footer/modules/SocialRow';
import { theme } from '../../theme';
import { myDescription } from './myDescription';
import FadeWrapper from '../../utilities/Animations/FadeWrapper';

const AboutMe = () => {
  const combinedDescription = `${myDescription.text}\n${myDescription.additionalText}`;

  return (
    <div className={`grid md:grid-cols-2 gap-10 py-24 ${theme.sectionPaddings.horizontalPx}`} >
      <FadeWrapper className="flex justify-center items-center p-0">
      <img 
  src={omerImage} 
  alt="Hero" 
  className="w-3/4 md:w-1/2 h-full shadow-aboutme-image object-cover" 
/>
      </FadeWrapper>

      <div className="flex flex-col gap-6 py-14 px-4 ">
          <p className="h-full">
          <Heading title={myDescription.title} />

            {combinedDescription}

          </p>
          {/* social row now */}

          <SocialRow />

      </div>
    </div>
  );
};

export default AboutMe;
