import React from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import { Spacer } from "../../Layout/Spacer/Spacer";

const ProfileSidePane = () => {
  return (
    <div className="profile-side-pane">
      <PersonalInfo />
      <Spacer />
      <TopSkills />
      <Spacer />
      <DevelopmentSkills />
    </div>
  );
};

export default ProfileSidePane;
