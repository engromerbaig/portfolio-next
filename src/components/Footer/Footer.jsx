import { links } from "../Navbar/modules/links";
import SocialRow from "./modules/SocialRow";
import { myDescription } from "../AboutMe/myDescription";
import ScrollToTopLink from "../Scroll/ScrollToTopLink";
import { contactInfo } from "./modules/contactInfo";
import SiteCredits from "./modules/SiteCredits";

const Footer = ({ darkMode }) => {
  return (
    <div className="bg-theme-light dark:bg-theme-dark text-body-text-light dark:text-body-text-dark">
      {/* parent for main footer */}
      <div className="grid grid-col lg:grid-cols-12 justify-center items-start border-t-2 border-b-2 border-light-hover dark:border-dark-hover px-28 py-14 gap-10 lg:gap-4">
        <div className="col-span-6 flex flex-col gap-4 lg:pr-20">
          <h1>About</h1>
          <p className="leading-relaxed">
            {myDescription.text}
          </p>

          <h1>Languages</h1>
          <p>English (Native) & German (A2) </p>
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <h1>Links</h1>
          {links.map((link, index) => {
            const Icon = link.icon; // Extract icon component from link

            return (
              <ScrollToTopLink
                key={index}
                to={link.to}
                className="text-theme-blue font-semibold"
              >
                {link.label}
              </ScrollToTopLink>
            );
          })}
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <h1>Contact</h1>
          {contactInfo.map((info, index) => (
            <div key={index}>
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                {info.address}
              </a>
            </div>
          ))}

          <div className="flex gap-4">
            <SocialRow />
          </div>
        </div>
      </div>

      {/* site credits */}
 <SiteCredits     />
    </div>
  );
};

export default Footer;

