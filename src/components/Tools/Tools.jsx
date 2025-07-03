'use client'; // only needed if ToolSection uses interactivity (can remove if fully static)

import React from "react";
import ToolSection from "./modules/ToolSection";
import toolData from "./modules/toolData";
import otherTechnologies from "./modules/otherTechnologies";
import { theme } from "../../theme";

const Tools = () => {
  return (
    <div className={`py-24 ${theme.sectionPaddings.horizontalPx}`}>
      <ToolSection 
        title="Tools Of The Present And Future"
        text="Full-stack technologies I prefer using"
        tools={toolData}
      />
      
      <ToolSection 
        text="Other Technologies"
        tools={otherTechnologies}
      />
    </div>
  );
};

export default Tools;
