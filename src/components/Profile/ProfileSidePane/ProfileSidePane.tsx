import React from 'react';
import DevelopmentSkills from '../DevelopmentSkills/DevelopmentSkills';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import TopSkills from '../TopSkills/TopSkills';

const ProfileSidePane = () => {
    return (
      <div>
        <h1>Profile Side Pane</h1>
        <PersonalInfo />
        <TopSkills />
        <DevelopmentSkills />
      </div>
    );
  };
  

export default ProfileSidePane;
