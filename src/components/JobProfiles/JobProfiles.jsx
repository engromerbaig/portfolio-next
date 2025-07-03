'use client';

import { jobProfiles } from '@/components/JobProfiles/modules/jobProfiles';
import JobDescription from '@/components/JobDescription/JobDescription';
import SlideWrapper from '@/utilities/Animations/SlideWrapper';
import FadeWrapper from '@/utilities/Animations/FadeWrapper';

const JobProfiles = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex lg:flex-col gap-1">
      {/* Tab Buttons */}
      <SlideWrapper>
        <div className="flex flex-col gap-4 lg:flex-row justify-center mb-4">
          {jobProfiles.map((profile, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`px-3 py-2 xl:px-4 xl:py-3 cursor-pointer xl:rounded-full xl:shadow-md xl:font-semibold mx-2 ${
                selectedTab === index
                  ? 'bg-theme-blue text-white'
                  : 'bg-light-hover dark:bg-dark-hover text-body-text-light dark:text-body-text-dark'
              }`}
            >
              {profile.company}
            </button>
          ))}
        </div>
      </SlideWrapper>

      {/* Job Description */}
      <FadeWrapper key={selectedTab}>
        <div className="py-0 lg:py-4 px-2 lg:px-10">
          <JobDescription profile={jobProfiles[selectedTab]} />
        </div>
      </FadeWrapper>
    </div>
  );
};

export default JobProfiles;
