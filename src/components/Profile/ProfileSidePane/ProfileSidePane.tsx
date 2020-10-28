import React from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import { Spacer } from "../../Layout/Spacer/Spacer";

const ProfileSidePane = () => {
  return (
    <div className="profile-side-pane">
      <PersonalInfo
        name="Patryk Jachimowski"
        currentJob="Creative Director"
        futureRelevance="very probably disappearing"
        department="Marketing"
        departmentLocation="Amsterdam"
      />
      <Spacer />
      <TopSkills topSkills={["Adapdability", "Coaching", "Creativity"]} />
      <Spacer />
      <DevelopmentSkills
        skills={["English writing", "Concetration", "Presenting"]}
      />
    </div>
  );
};

export default ProfileSidePane;
