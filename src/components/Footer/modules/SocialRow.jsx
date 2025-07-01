import { socialMediaLinks } from "./socialMediaLinks";

const SocialRow = ({ justify, showAlt = false }) => {
  return (
    <div className={`flex gap-6 ${justify}`}>
      {socialMediaLinks.map((link, index) => {
        const Icon = link.icon; // Extract icon component from link

        return (
          <div key={index} className="flex flex-col items-center">
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className={`text-3xl text-body-text-light dark:text-body-text-dark hover:text-theme-blue hover:dark:text-theme-blue transition-colors`}
              />
            </a>
            {showAlt && <span className="text-xs mt-1">{link.alt}</span>}
          </div>
        );
      })}
    </div>
  );
}

export default SocialRow;
