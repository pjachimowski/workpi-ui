import React, { useState, useEffect } from "react";
import "./PersonalInfo.scss";
import profile from "./profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserCtx } from "../../../hooks/UserHook";

interface User {
  name: string;
  currentJob: string;
  futureRelevance: string;
  department: string;
  departmentLocation: string;
}

const PersonalInfo = () => {
  const [user, setUser]: [User, (user: User) => void] = useState({
    name: "",
    currentJob: "",
    futureRelevance: "",
    department: "",
    departmentLocation: "",
  });

  useEffect(() => {
    setUser({
      name: "Patryk Jachimowski",
      currentJob: "Creative Director",
      futureRelevance: "very probably disappearing",
      department: "Marketing",
      departmentLocation: "Amsterdam",
    });
  });

  return (
    <div className="personal-info">
      <img src={profile} alt="profile picture"></img>
      <div className="name">Patryk Jachimowski</div>
      <div className="current-job">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "briefcase"]}
        ></FontAwesomeIcon>
        Creative Director
      </div>
      <div className="future-relevance">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "forward"]}
        ></FontAwesomeIcon>{" "}
        very probably disappearing
      </div>
      <div className="department">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "building"]}
        ></FontAwesomeIcon>{" "}
        Marketing
      </div>
      <div className="department-location">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "map-marker-alt"]}
        ></FontAwesomeIcon>{" "}
        Amsterdam
      </div>
      <a href="#">
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "plus-square"]}
        ></FontAwesomeIcon>
        Add field
      </a>
    </div>
  );
};

export default PersonalInfo;
