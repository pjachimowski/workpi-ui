import React, { useState, useEffect } from "react";
import "./SidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import Wrapper from "../Wrapper/Wrapper";
import userProfileMock from "../../../data_mocked/userProfileApiMock";
import indicatorsApiMock from "../../../data_mocked/indicatorsApiMock";
import personalInfoApiMock from "../../../data_mocked/personalInfoApiMock";
import * as _ from "lodash";
import {
  Indicator as IndicatorInterface,
  PersonalInfo as PersonalInfoInterface,
} from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SidePane: React.FC<Props> = () => {
  const [developmentSkills, setDevelopmentSkills] = useState<
    IndicatorInterface[]
  >([]);
  useEffect(() => {
    setDevelopmentSkills(
      _.chain(indicatorsApiMock.indicators)
        .orderBy("indicatorValue", "asc")
        .filter((x) => x.indicatorCategory === "Skill")
        .take(3)
        .value()
    );
  }, []);

  const [topSkills, setTopSkills] = useState<IndicatorInterface[]>([]);
  useEffect(() => {
    setTopSkills(
      _.chain(indicatorsApiMock.indicators)
        .orderBy("indicatorValue", "desc")
        .filter((x) => x.indicatorCategory === "Skill")
        .take(3)
        .value()
    );
  }, []);
// Gets all personal information from mocked data
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoInterface[]>([]);
  useEffect(() => {
    setPersonalInfo(personalInfoApiMock.personalInfo);
  }, []);
// Updates personal info active in the component 
  const updateActivePersonalInfo = (indicatorName: string | symbol) => {
    let activePersonalInfo = personalInfo.slice();
    for (let key in activePersonalInfo) {
      if (activePersonalInfo[key].indicatorName === indicatorName) {
        activePersonalInfo[key].isActive = !activePersonalInfo[key].isActive;
        break;
      }
    }
    setPersonalInfo(activePersonalInfo);
  };

  const show = () => {
    document.getElementById("slide-pane")?.classList.toggle("active");
  };
  return (
    <div id="slide-pane" className="profile-side-pane">
      <Wrapper>
        <PersonalInfo
          updatePersonalInfo={updateActivePersonalInfo}
          list={personalInfo}
          userProfile={userProfileMock}
        />
      </Wrapper>

      <Wrapper>
        <TopSkills topSkills={topSkills} />
      </Wrapper>
      <Wrapper>
        <DevelopmentSkills developmentSkills={developmentSkills} />
      </Wrapper>
      <div className="slide-toggle-btn" onClick={show}>
        <FontAwesomeIcon
          className="grip-lines-vertical"
          icon={["fas", "grip-lines-vertical"]}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="user-circle"
          icon={["fas", "user-circle"]}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="chevron-circle-left"
          icon={["fas", "chevron-circle-left"]}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default SidePane;
