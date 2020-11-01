import React, { useState, useEffect } from "react";
import "./PersonalInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User as UserInterface, PersonalInfo as PersonalInfoInterface } from "../../../types/types";

interface Props {
  personalInfo: PersonalInfoInterface[];
  user: UserInterface;
}

const PersonalInfo: React.FC<Props> = ({user, personalInfo}: Props) => {
  const [additionalFields, setAdditionalFields] = useState<string[]>([]);

  const addField = () => {
    setAdditionalFields([...additionalFields, "foo"]);
  };

  return (
    <div className="personal-info">
      <img
        src={user.profile_picture}
        alt="profile picture"
      ></img>
      <div className="user-name">{user.user_name}</div>
      <div className="current-job">{user.current_job}</div>
      {personalInfo.map((x) => (
        <div>
          <FontAwesomeIcon
            id="icon"
            className={x.icon}
            icon={["fas", x.icon ]}
          ></FontAwesomeIcon>
          {x.indicatorInput}
        </div>
      ))}
      <a onClick={addField}>
        <FontAwesomeIcon
          className="add-btn"
          id="icon"
          icon={["fas", "plus-square"]}
        ></FontAwesomeIcon>
        Add field
      </a>
      <div> {additionalFields} </div>
    </div>
  );
};

export default PersonalInfo;
