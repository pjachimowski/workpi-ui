import React, { useState, useEffect } from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import PaneItem from "../PaneItem/PaneItem";
import * as data from "./data.json";
import * as _ from "lodash";
import { Indicator } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ProfileSidePane: React.FC<Props> = () => {
  const [developmentSkills, setDevelopmentSkills] = useState<Indicator[]>([]);
  useEffect(() => {
    setDevelopmentSkills(
      _.chain(data.indicators)
        .orderBy("indicatorValue", "asc")
        .filter((x) => x.indicatorCategory === "Skill")
        .take(3)
        .value()
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

  const show = () => {
    document.getElementById("slide-pane")?.classList.toggle("active");
  };

  // add data to mocked JSON
  // const [personalInfo, setPersonalInfo] = useState();

  // const getDevelopmentSkillsMock = () => {};

  // const getTopSkillsMock = () => {};

  // const getPersonalInfoMock = () => {};

  return (
      <div id="slide-pane" className="profile-side-pane">
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
        <div className="slide-toggle-btn" onClick={show}>
          <FontAwesomeIcon
            icon={["fas", "grip-lines-vertical"]}
          ></FontAwesomeIcon>
        </div>
        <PaneItem>
          <DevelopmentSkills developmentSkills={developmentSkills} />
        </PaneItem>
      </div>
  );
};

export default ProfileSidePane;
