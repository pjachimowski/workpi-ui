import React, { useState, useEffect } from "react";
import "./ProfileSidePane.scss";
import DevelopmentSkills from "../DevelopmentSkills/DevelopmentSkills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import TopSkills from "../TopSkills/TopSkills";
import PaneItem from "../PaneItem/PaneItem";
import userMock from "../../../data_mocked/userApiMock";
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

const ProfileSidePane: React.FC<Props> = () => {
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

  const [personalInfo, setPersonalInfo] = useState<PersonalInfoInterface[]>([]);
  useEffect(() => {
    setPersonalInfo(personalInfoApiMock.personalInfo);
  }, []);

  const show = () => {
    document.getElementById("slide-pane")?.classList.toggle("active");
  };

  const updateActivePersonalInfo = (indicatorName: string | symbol) => {
    let personalInfoTABLICA = personalInfo.slice()
    for (let key in personalInfoTABLICA) {

      if (personalInfoTABLICA[key].indicatorName === indicatorName) {
        personalInfoTABLICA[key].isActive = !personalInfoTABLICA[key].isActive;
        console.log(">>>>", indicatorName);
        break;
      }
    }
    setPersonalInfo(personalInfoTABLICA);
  };

  return (
    <div id="slide-pane" className="profile-side-pane">
      <PaneItem>
        <PersonalInfo
          updatePersonalInfo={updateActivePersonalInfo}
          list={personalInfo}
          user={userMock}
        />
      </PaneItem>

      <PaneItem>
        <TopSkills topSkills={topSkills} />
      </PaneItem>
      <div className="slide-toggle-btn" onClick={show}>
        <FontAwesomeIcon
          className="grip-lines-vertical"
          icon={["fas", "grip-lines-vertical"]}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="user-circle"
          icon={["fas", "user-circle"]}
        ></FontAwesomeIcon>
      </div>
      <PaneItem>
        <DevelopmentSkills developmentSkills={developmentSkills} />
      </PaneItem>
    </div>
  );
};

export default ProfileSidePane;
