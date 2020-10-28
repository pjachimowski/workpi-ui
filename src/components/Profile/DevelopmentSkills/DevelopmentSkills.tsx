import React, { useState, useEffect } from "react";
import "./DevelopmentSkills.scss";

interface Props {
  skills: string[];
}

const DevelopmentSkills: React.FC<Props> = () => {
  //useState for now overlaps with props
  const [skills, setSkills] = useState({
    skills: ["English writing", "Concetration", "Presenting"],
  });

  return (
    <div>
      <div className="development-skills-title">Development Skills</div>
      {skills.skills.map((i) => (
        <div>{i}</div>
      ))}
    </div>
  );
};

export default DevelopmentSkills;
