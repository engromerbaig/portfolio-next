'use client';

import React from "react";
import ToolSection from "./modules/ToolSection";
import toolData from "./modules/toolData";
import { theme } from "../../theme";
import Button from "../Button/Button";

// Labels to filter from toolData
const includedLabels = [
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node",
  "GraphQL",
  "Express.js"
];

// Filter toolData based on labels
const filteredToolData = [
  {
    category: "Core Stack",
    tools: toolData
      .flatMap(group => group.tools)
      .filter(tool => includedLabels.includes(tool.text))
  }
];

const Tools = () => {
  return (
    <div className={`py-24 ${theme.sectionPaddings.horizontalPx}`}>
      <ToolSection 
        title="Tools Of The Present And Future"
        text="Full-stack technologies I prefer using"
        tools={filteredToolData}
      />
      
      <div className="flex justify-center mt-8">
        <Button text="More Tools" href="/tech-stack" />
      </div>
    </div>
  );
};

export default Tools;
