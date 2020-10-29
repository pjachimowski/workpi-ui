import React, { useState, useEffect } from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import PaneItem from "../PaneItem/PaneItem";
import * as data from "./data.json";
import * as _ from "lodash";
import { Indicator } from "./types";

const ProfileSidePane = () => {
  const [developmentSkills, setDevelopmentSkills] = useState<Indicator[]>([]);

  useEffect(() => {
    setDevelopmentSkills(
      data.indicators.filter((x) => x.indicatorCategory === "Skill")
    );
  });

  const [topSkills, setTopSkills] = useState<Indicator[]>([]);

  useEffect(() => {
    setTopSkills(
      _.chain(data.indicators)
        .orderBy("indicatorValue", "desc")
        .filter((x) => x.indicatorCategory === "Skill")
        .take(3)
        .value()
    );
  });

  // add data to mocked JSON
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
        <TopSkills topSkills={topSkills} />
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
