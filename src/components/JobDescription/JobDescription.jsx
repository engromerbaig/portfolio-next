import React from 'react';
import { categoryTitles } from '../JobProfiles/modules/categoryTitles';

const JobDescription = ({ profile }) => {
  if (!profile) return <p className='text-theme-blue'>Select a profile to view details.</p>;

  const sharedClass = "p-4 border-2 border-job-light dark:border-job-dark";

  // Create a mapping for the category titles

  return (
    <div>
      <div className="grid  lg:grid-cols-4 gap-4 mb-4">
        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='font-bold text-xl text-theme-blue'>
            <a href={profile.companyLink} target="_blank" rel="noopener noreferrer">
              {profile.company}
            </a>
          </h1>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='text-xl'>{profile.location}</h1>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='font-bold text-xl text-theme-blue'>{profile.designation}</h1>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='text-xl'>{profile.dates}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 py-4 gap-4">
        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='text-xl font-bold'>Role Description</h1>
          <ul className="list-disc list-inside">
            {profile.content.map((item, idx) => (
              <li key={idx} className='py-2'>{item}</li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='text-xl font-bold'>Key Projects</h1>
          <ul>
            {profile.projects.map((project, idx) => (
              <li key={idx} className='text-theme-blue font-semibold py-2'>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-col ${sharedClass}`}>
          <h1 className='text-xl font-bold'>Skills & Languages</h1>
          {Object.entries(profile.skills).map(([category, skills]) => (
            <div key={category}>
              <h2 className='text-theme-blue font-semibold pt-2'>{categoryTitles[category] || category}</h2>
              <p>
                {skills.join(', ')}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;