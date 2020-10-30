import React, { useState, useEffect } from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import PaneItem from "../PaneItem/PaneItem";
import indicatorsApiMock from "../../../data_mocked/indicatorsApiMock";
import personalInfoApiMock from "../../../data_mocked/personalInfoApiMock";
import * as _ from "lodash";
import { Indicator, PersonalInfo as PersonalInfoInterface } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ProfileSidePane: React.FC<Props> = () => {
  const [developmentSkills, setDevelopmentSkills] = useState<Indicator[]>([]);
  useEffect(() => {
    setDevelopmentSkills(
      _.chain(indicatorsApiMock.indicators)
        .orderBy("indicatorValue", "asc")
        .filter((x) => x.indicatorCategory === "Skill")
        .take(3)
        .value()
    );
  },[]);

  const [topSkills, setTopSkills] = useState<Indicator[]>([]);
  useEffect(() => {
    setTopSkills(
      _.chain(indicatorsApiMock.indicators)
        .orderBy("indicatorValue", "desc")
        .filter((x) => x.indicatorCategory === "Skill")
        .take(3)
        .value()
    );
  },[]);

  const [personalInfo, setPersonalInfo] = useState<PersonalInfoInterface[]>([]);
  useEffect(() => {
    setPersonalInfo(
      _.chain(personalInfoApiMock.personalInfo)
        .filter((x) => x.isActive === true)
        .value()
    );
  },[]);

  const show = () => {
    document.getElementById("slide-pane")?.classList.toggle("active");
  };

  return (
    <div id="slide-pane" className="profile-side-pane">
      {/*<PaneItem />   this is a container with padding for each pane */}
      <PaneItem>
        <PersonalInfo personalInfo={personalInfo} />
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
