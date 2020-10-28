import React, { useState, useEffect } from "react";
import "./TopSkills.scss";
import topmockup from "./top-mockup.jpg";

interface Props {
  topSkills: string[];
}

const TopSkills: React.FC<Props> = () => {
  //useState for now overlaps with props
  const [topSkills, setTopSkills] = useState({
    topSkills: ["Adapdability", "Coaching", "Creativity"],
  });

  return (
    <div>
      <div className="top-skills-title">Top skills</div>
      <img src={topmockup} alt="development skills"></img>
      {topSkills.topSkills.map((i) => (
        <div>{i}</div>
      ))}
    </div>
  );
};

export default TopSkills;
