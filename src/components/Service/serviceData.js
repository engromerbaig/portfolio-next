// serviceData.js
import supportIcon from '../../assets/icons/Services/support-icon.svg'
import frontEndIcon from '../../assets/icons/Services/frontend-icon.svg'
import backEndIcon from '../../assets/icons/Services/backend-icon.svg'


const serviceData = [
  {
    icon: supportIcon,
    title: "Continuous Support & Deployment",
    description:
      "I ensure your MERN-based web applications remain competitive and high-performing with regular updates, bug fixes, and feature enhancements. Using DevOps best practices and modern CI/CD pipelines, I can deliver urgent patches within hours and deploy planned updates bi-weekly across React, Node.js, and MongoDB-based systems.",
  },
  {
    icon: frontEndIcon,
    title: "Frontend Development with React & Next.js",
    description:
      "I craft dynamic, responsive, and SEO-optimized interfaces using React and Next.js. With a deep understanding of user behavior and modern UI/UX principles, I transform wireframes into intuitive user experiences, focusing on performance, accessibility, and reusability through components, hooks, and server-side rendering.",
  },
  {
    icon: backEndIcon,
    title: "Backend Development with Node.js & Express",
    description:
      "I build scalable and secure backends using Node.js and Express, implementing clean business logic and structured REST or GraphQL APIs. I also design and manage MongoDB databases, ensuring efficient data flow and integration with third-party services to deliver full-stack, production-ready applications.",
  },
];



export default serviceData;
