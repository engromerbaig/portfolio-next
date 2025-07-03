import adsenseIcon from "../../../assets/icons/Tools/adsense.svg";
import atomIcon from "../../../assets/icons/Tools/atom.svg";
import css3Icon from "../../../assets/icons/Tools/css-3.svg";
import dmIcon from "../../../assets/icons/Tools/dm.svg";
import elementorIcon from "../../../assets/icons/Tools/elementor.svg";
import expressjsIcon from "../../../assets/icons/Tools/expressjs.svg";
import figmaIcon from "../../../assets/icons/Tools/figma.svg";
import firebaseIcon from "../../../assets/icons/Tools/firebase.svg";
import flutterIcon from "../../../assets/icons/Tools/flutter.svg";
import gitIcon from "../../../assets/icons/Tools/git.svg";
import graphqlIcon from "../../../assets/icons/Tools/graphql.svg";
import htmlIcon from "../../../assets/icons/Tools/html.svg";
import jsIcon from "../../../assets/icons/Tools/js.svg";
import metaIcon from "../../../assets/icons/Tools/meta.svg";
import mongoIcon from "../../../assets/icons/Tools/mongo.svg";
import netlifyIcon from "../../../assets/icons/Tools/netlify.svg";
import nextIcon from "../../../assets/icons/Tools/next.svg";
import nodeIcon from "../../../assets/icons/Tools/node.svg";
import postmanIcon from "../../../assets/icons/Tools/postman.svg";
import reactjsIcon from "../../../assets/icons/Tools/reactjs.svg";
import reactnativeIcon from "../../../assets/icons/Tools/react-native.svg";
import reduxIcon from "../../../assets/icons/Tools/redux.svg";
import seoIcon from "../../../assets/icons/Tools/seo.svg";
import shopifyIcon from "../../../assets/icons/Tools/shopify.svg";
import tailwindIcon from "../../../assets/icons/Tools/tailwind.svg";
import teamsIcon from "../../../assets/icons/Tools/teams.svg";
import tsIcon from "../../../assets/icons/Tools/ts.svg";
import vercelIcon from "../../../assets/icons/Tools/vercel.svg";
import webpackIcon from "../../../assets/icons/Tools/webpack.svg";
import wpIcon from "../../../assets/icons/Tools/wp.svg";
import xdIcon from "../../../assets/icons/Tools/xd.svg";
import zustandIcon from "../../../assets/icons/Tools/zustand.svg";
import bootstrapIcon from "../../../assets/icons/Tools/bootstrap.svg";

import jwtIcon from "../../../assets/icons/Tools/jwt.svg";
import socketIcon from "../../../assets/icons/Tools/socket.svg";

import viteIcon from "../../../assets/icons/Tools/vite.svg";

// new
import npmIcon from "../../../assets/icons/Tools/npm.svg";
import curlIcon from "../../../assets/icons/Tools/curl.svg";

const toolData = [
  {
    category: "Frontend",
    tools: [
      { imgSrc: htmlIcon, text: "HTML5" },
      { imgSrc: css3Icon, text: "CSS3" },
      { imgSrc: jsIcon, text: "JavaScript" },
      { imgSrc: tsIcon, text: "TypeScript" },
      { imgSrc: reactjsIcon, text: "React.js" },
      { imgSrc: nextIcon, text: "Next.js" },
      { imgSrc: tailwindIcon, text: "Tailwind CSS" },
      { imgSrc: bootstrapIcon, text: "Bootstrap" },
            { imgSrc: reduxIcon, text: "Redux/Redux Toolkit" },
      { imgSrc: zustandIcon, text: "Zustand" }
    ]
  },
  {
    category: "Backend",
    tools: [
      { imgSrc: nodeIcon, text: "Node.js" },
      { imgSrc: expressjsIcon, text: "Express.js" },
      { imgSrc: jwtIcon, text: "JWT" },
      { imgSrc: socketIcon, text: "Socket.io" },


    ]
  },
  {
    category: "Database",
    tools: [
      { imgSrc: mongoIcon, text: "MongoDB" },
      { imgSrc: firebaseIcon, text: "Firebase" }
      // Add PostgreSQL if you use it
    ]
  },
  {
    category: "API & Testing Tools",
    tools: [
      { imgSrc: graphqlIcon, text: "GraphQL" },
      { imgSrc: postmanIcon, text: "Postman" },
      { imgSrc: curlIcon, text: "cURL" },
      // REST is implied via Postman/GraphQL
    ]
  },
  {
    category: "DevOps & Deployment",
    tools: [
      { imgSrc: vercelIcon, text: "Vercel" },
      { imgSrc: netlifyIcon, text: "Netlify" },
      { imgSrc: webpackIcon, text: "Webpack" },
      { imgSrc: gitIcon, text: "Git" },
      { imgSrc: viteIcon, text: "Vite" }
      // GitHub Actions can be added if used
    ]
  },
  {
    category: "CMS & E-commerce",
    tools: [
      { imgSrc: wpIcon, text: "WordPress" },
      { imgSrc: elementorIcon, text: "Elementor" },
      { imgSrc: shopifyIcon, text: "Shopify" }
    ]
  },
  {
    category: "Mobile Development",
    tools: [
      { imgSrc: reactnativeIcon, text: "React Native" },
      { imgSrc: flutterIcon, text: "Flutter" }
    ]
  },
  {
    category: "Tools & Productivity",
    tools: [
      { imgSrc: figmaIcon, text: "Figma" },
      { imgSrc: metaIcon, text: "Meta" },
      { imgSrc: npmIcon, text: "Node Package Manager" },
      { imgSrc: adsenseIcon, text: "Google Adsense" }
    ]
  }
];

export default toolData;