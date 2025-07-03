// src/components/Navbar/modules/links.js
import { FaHome} from 'react-icons/fa';
import { GrContact, GrProjects } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { BsStack } from "react-icons/bs";




export const links = [
    { label: 'Home', to: '/', icon: FaHome },
    { label: 'Contact', to: '/contact', icon: GrContact },
    { label: 'My Tech-Stack', to: '/tech-stack', icon: BsStack },
    { label: 'Projects', to: '/projects', icon: GrProjects },
    { label: 'Work Experience', to: '/work-experience', icon: MdWorkOutline },

];
