import React from 'react';
import Heading from '../../Heading/Heading';
import ToolIcon from './ToolIcon';
import AnimateWrapper from '../../../utilities/Animations/AnimateWrapper';
import { motion } from 'framer-motion';


const ToolSection = ({ title, text, tools }) => {
  return (
    <div className="text-center mb-8">
      <Heading title={title} text={text} />

      <AnimateWrapper
        className="grid grid-cols-2 gap-x-10 gap-y-12 place-content-center md:grid-cols-4 px-10 lg:px-24 py-10"
      >
        {tools.map((tool, index) => (
          <motion.div key={index}>
            <ToolIcon imgSrc={tool.imgSrc} text={tool.text} />
          </motion.div>
        ))}
      </AnimateWrapper>
    </div>
  );
};

export default ToolSection;
