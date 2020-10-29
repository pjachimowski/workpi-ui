import React from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";


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

      <TopSkills topSkills={["Adapdability", "Coaching", "Creativity"]} />

      <DevelopmentSkills
        skills={["English writing", "Concetration", "Presenting"]}
      />
    </div>
  );
};

export default ProfileSidePane;
