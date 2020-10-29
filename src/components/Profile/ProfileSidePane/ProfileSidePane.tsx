import React, { useState, useEffect } from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import PaneItem from "../PaneItem/PaneItem";

const ProfileSidePane = () => {
  const [developmentSkills, setDevelopmentSkills] = useState({
    indicators: [],
  });

  const [topSkills, setTopSkills] = useState({
    indicators: [],
  });

  const [personalInfo, setPersonalInfo] = useState();

  const getDevelopmentSkillsMock = () => {};

  const getTopSkillsMock = () => {};

  const getPersonalInfoMock = () => {};

  return (
    <div className="profile-side-pane">
      {/*<PaneItem />   this is a container with padding for each pane */}
      <PaneItem>
        <PersonalInfo
          name="Patryk Jachimowski"
          currentJob="Creative Director"
          futureRelevance="very probably disappearing"
          department="Marketing"
          departmentLocation="Amsterdam"
        />
      </PaneItem>
      <PaneItem>
        <TopSkills topSkills={["Adaptability", "Coaching", "Creativity"]} />
      </PaneItem>

      <PaneItem>
        <DevelopmentSkills
          skills={["English writing", "Concetration", "Presenting"]}
        />
      </PaneItem>
    </div>
  );
};

export default ProfileSidePane;
