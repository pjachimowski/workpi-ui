import React, { useState, useEffect } from "react";
import './DevelopmentSkills.scss';

// change it to Prop
interface Skills {
  skills: string[];
}

const DevelopmentSkills = () => {
  const [skills, setSkills] = useState<Skills>({
    skills: ["English writing", "Concetration", "Presenting"]
  });

  return (
    <div>
      <div className="development-skills-title">Development Skills</div>
      { skills.skills.map( i => <div>{i}</div>)}
    </div>
  );
};

export default DevelopmentSkills;
