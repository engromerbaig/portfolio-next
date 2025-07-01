'use client';

import { theme } from '@/theme';
import Heading from '@/components/Heading/Heading';
import ContactForm from '@/components/ContactForm/ContactForm';
import formFields from '@/components/ContactForm/modules/formFields';
import { originalRowConfig } from '@/components/ContactForm/modules/originalRowConfig';
import FadeInSection from '@/utilities/Animations/FadeInSection';
import SlideWrapper from '@/utilities/Animations/SlideWrapper';
import ContactInfo from '@/components/ContactInfo/ContactInfo';
import { contactInfo } from '@/components/Footer/modules/contactInfo';
import FadeWrapper from '@/utilities/Animations/FadeWrapper';
import SocialRow from '@/components/Footer/modules/SocialRow';

export default function ContactPage() {
  return (
    <div className={`py-44 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <FadeInSection>
        <div className={`text-center ${theme.sectionPaddings.horizontalPx}`}>
          <Heading
            title="Get in Touch"
            text="Reach out today, and let's turn your vision into reality together!"
          />
        </div>

        <div className="py-10 px-4 md:px-40 lg:px-80">
          <SlideWrapper>
            <ContactForm formFields={formFields} rowConfig={originalRowConfig} />
            <FadeWrapper>
              <ContactInfo contactInfo={contactInfo} />
              <div className="px-8">
                <SocialRow justify="justify-between" showAlt="true" />
              </div>
            </FadeWrapper>
          </SlideWrapper>
        </div>
      </FadeInSection>
    </div>
  );
}
