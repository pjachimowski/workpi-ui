import React, { useState, useEffect } from "react";
import { ProgressBar } from "../../Display/ProgressBar";
import "./DevelopmentSkills.scss";

interface Skill {
  indicatorName: string;
  indicatorValue: number;
  indicatorCategory: string;
}

interface Props {
  skills: string[];
}

const DevelopmentSkills: React.FC<Props> = () => {
  return (
    <div className="development-skills">
      {/*Progress Bars modyfied in ../../Display/ProgressBar*/}
      <div className="development-skills-title">Development Skills</div>
      {/* {skills.skills.map((i) => (
        <div>
          {i}
          <ProgressBar value={55} />
        </div>
      ))} */}
    </div>
  );
};

export default DevelopmentSkills;
