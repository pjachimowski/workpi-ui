import React from 'react';
import './TopSkills.scss';
import topmockup from './top-mockup.jpg';

const TopSkills = () => {
    return (
      <div>
        <div className="top-skills-title">Top skills</div>
        <img src={topmockup} alt="development skills"></img>
      </div>
    );
  };

export default TopSkills;