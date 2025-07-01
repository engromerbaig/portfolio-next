// src/components/Navbar/modules/links.js
import { FaHome} from 'react-icons/fa';
import { GrContact, GrProjects } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";



export const links = [
    { label: 'Home', to: '/', icon: FaHome },
    { label: 'Contact', to: '/contact', icon: GrContact },
    { label: 'Projects', to: '/projects', icon: GrProjects },
    { label: 'Work Experience', to: '/work-experience', icon: MdWorkOutline },

];
