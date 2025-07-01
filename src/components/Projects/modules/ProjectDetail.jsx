import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';

const ProjectDetail = ({ image, title, description, siteLink, gitLink, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col ${
        isOdd ? 'md:flex-row-reverse' : 'md:flex-row'
      } :px-4 py-14 items-center justify-center relative`}
    >
      <div className={`w-full md:w-1/3 aspect-auto rounded-t-lg md:rounded-lg ${isOdd ? 'order-1' : ''}`}>
        <Image
          src={image}
          alt="projects"
          loading="lazy"
          width={600}
          height={400}
          className="w-full h-auto rounded-t-lg md:rounded-lg"
        />
      </div>

      <div
        className={`flex w-full md:w-1/2 gap-4 flex-col items-start justify-center shadow-2xl rounded-b-lg md:rounded-lg p-6 bg-theme-light dark:bg-dark-offcanvas text-body-text-light dark:text-body-text-dark relative z-10 transform transition duration-700 ease-in-out ${
          isOdd
            ? 'order-2 md:-mr-20 origin-right md:hover:-translate-x-12'
            : 'md:-ml-20 origin-left md:hover:translate-x-12'
        }`}
      >
        <h1 className="font-semibold">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-row justify-start items-center gap-4">
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-theme-blue border-2 border-gray-300 px-3 py-2 text-sm text-white rounded-md uppercase transition-all duration-300 ease-in-out group hover:outline  hover:outline-gray-300 hover:bg-blue-800">
              LIVE SITE
            </button>
          </a>

          {gitLink && (
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-body-text-light dark:text-body-text-dark" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
