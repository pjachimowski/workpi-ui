import React from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import PaneItem from "../PaneItem/PaneItem";


const ProfileSidePane = () => {
  return (
    <div className="profile-side-pane">
      {/*<PaneItem />   this is a container with padding for each pane */}
      
      <PersonalInfo
        name="Patryk Jachimowski"
        currentJob="Creative Director"
        futureRelevance="very probably disappearing"
        department="Marketing"
        departmentLocation="Amsterdam"
      />

      <TopSkills topSkills={["Adaptability", "Coaching", "Creativity"]} />

      <DevelopmentSkills
        skills={["English writing", "Concetration", "Presenting"]}
      />
    </div>
  );
};

export default ProfileSidePane;
