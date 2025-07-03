'use client';

import Image from 'next/image';
import Heading from '@/components/Heading/Heading';
import SocialRow from '@/components/Footer/modules/SocialRow';
import FadeWrapper from '@/utilities/Animations/FadeWrapper';
import { myDescription } from './myDescription';
import { theme } from '@/theme';

export default function AboutMe() {
const combinedDescription = (
  <>
    {myDescription.text}
    <br />
    <br />
    {myDescription.additionalText}
  </>
);

  return (
    <div className={`grid md:grid-cols-2 gap-10 py-24 ${theme.sectionPaddings.horizontalPx}`}>
      <FadeWrapper className="flex justify-center items-center p-0">
        <Image
          src="/images/omer2.webp" // place this in public/images/
          alt="Hero"
          width={400}
          height={500}
          className="w-3/4 md:w-1/2 h-full shadow-aboutme-image object-cover"
        />
      </FadeWrapper>

      <div className="flex flex-col gap-6 py-14 px-4">
        <p className="h-full whitespace-pre-line">
          <Heading title={myDescription.title} />
          {combinedDescription}
        </p>

        <SocialRow />
      </div>
    </div>
  );
}
