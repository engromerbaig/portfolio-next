import React from 'react';
import {FaGithub} from "react-icons/fa6";


const ProjectDetail = ({ image, title, description, siteLink,gitLink, index }) => {
  // Determine layout based on index (odd/even)
  const isOdd = index % 2 !== 0;

  return (
    // default case on right
    <div
      className={`flex flex-col ${
        isOdd ? 'md:flex-row-reverse' : 'md:flex-row ' // Apply justify-end for even cases
      } :px-4 py-14 items-center justify-center relative `}
    >
      <img
        src={image}
        alt="projects"
        loading="lazy" // Lazy loading attribute

        className={`w-full md:w-1/3 aspect-auto rounded-t-lg  md:rounded-lg ${isOdd ? 'order-1' : ''}`} // Remove order for even cases
      />
      {/* content container */}
      <div
        className={`flex w-full md:w-1/2 gap-4 flex-col items-start justify-center shadow-2xl rounded-b-lg md:rounded-lg p-6 bg-theme-light dark:bg-dark-offcanvas text-body-text-light dark:text-body-text-dark relative  z-10 transform transition duration-700 ease-in-out  ${
          isOdd ? 'order-2 md:-mr-20 origin-right  md:hover:-translate-x-12' : 'md:-ml-20 origin-left  md:hover:translate-x-12'
        } // Remove order for even cases`}
      >
        <h1 className="font-semibold">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-row justify-start items-center gap-4">
            
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
          
            <button className="bg-theme-blue border-2 border-gray-300 px-3 py-2 text-sm text-white rounded-md uppercase transition-all duration-300 ease-in-out group hover:outline hover:outline-3 hover:outline-gray-300 hover:bg-blue-800">
            LIVE SITE
            </button>



          
            </a>


            {
            gitLink && <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className={`text-2xl text-body-text-light dark:text-body-text-dark`} />
            </a> 
            }
            
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
