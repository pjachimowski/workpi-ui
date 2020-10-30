import React, { useState, useEffect } from "react";
import "./PersonalInfo.scss";
import profile from "./profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PersonalInfo as PersonalInfoInterface } from "../../../types/types";

interface Props {
  personalInfo: PersonalInfoInterface[];
}

const PersonalInfo: React.FC<Props> = (props) => {
  const [additionalFields, setAdditionalFields] = useState<string[]>([]);

  const addField = () => {
    setAdditionalFields([...additionalFields, "foo"]);
  };

  return (
    <div className="personal-info">
      <img
        src="https://i.ibb.co/v1VDC5M/PATRYK-JACHIMOWSKI-2020.jpg"
        alt="profile picture"
      ></img>
      {props.personalInfo.map((x) => (
        <div>
          <FontAwesomeIcon
            className="icon"
            icon={["fas", x.icon ]}
          ></FontAwesomeIcon>
          {x.indicatorInput}
        </div>
      ))}

      {/* <div className="name">{props.personalInfo}</div>
      <div className="current-job">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "briefcase"]}
        ></FontAwesomeIcon>
        {user.currentJob}
      </div>
      <div className="future-relevance">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "forward"]}
        ></FontAwesomeIcon>
        {user.futureRelevance}
      </div>
      <div className="department">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "building"]}
        ></FontAwesomeIcon>
        {user.department}
      </div>
      <div className="department-location">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "map-marker-alt"]}
        ></FontAwesomeIcon>
        {user.departmentLocation}
      </div> */}
      <a onClick={addField}>
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "plus-square"]}
        ></FontAwesomeIcon>
        Add field
      </a>
      <div> {additionalFields} </div>
    </div>
  );
};

export default PersonalInfo;
