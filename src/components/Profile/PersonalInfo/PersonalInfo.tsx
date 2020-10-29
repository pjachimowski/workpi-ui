import React, { useState, useEffect } from "react";
import "./PersonalInfo.scss";
import profile from "./profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  name: string;
  currentJob: string;
  futureRelevance: string;
  department: string;
  departmentLocation: string;
}

const PersonalInfo: React.FC<Props> = () => {
  //useState for now overlaps with props
  const [user, setUser] = useState<Props>({
    name: "Patryk Jachimowski",
    currentJob: "Creative Director",
    futureRelevance: "very probably disappearing",
    department: "Marketing",
    departmentLocation: "Amsterdam",
  });

  const [additionalFields, setAdditionalFields] = useState<string[]>([]);

  const addField = () => {
    setAdditionalFields([...additionalFields, "foo"]);
  };

  return (
    <div className="personal-info">
      <img src={profile} alt="profile picture"></img>
      <div className="name">{user.name}</div>
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
      </div>
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
