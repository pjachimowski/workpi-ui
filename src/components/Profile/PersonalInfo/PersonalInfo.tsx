import React, { useState, useEffect } from "react";
import "./PersonalInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  UserProfile as UserProfileInterface,
  PersonalInfo as PersonalInfoInterface,
} from "../../../types/types";
import AddField from "../AddField/AddField";
import * as _ from "lodash";

interface Props {
  userProfile: UserProfileInterface;
  list: PersonalInfoInterface[];
  updatePersonalInfo: (indicatorName: string | symbol) => void;
}

const PersonalInfo: React.FC<Props> = ({ userProfile, list, updatePersonalInfo }: Props) => {
  const getActivePersonalInfo = (list: PersonalInfoInterface[]) =>
    _.chain(list)
      .filter((x) => x.isActive === true)
      .value();

  return (
    <div className="personal-info">
      <img src={userProfile.profilePicture} alt="profile"></img>
      <div className="user-name">{userProfile.userName}</div>
      <div className="current-job"><FontAwesomeIcon
            id="icon"
            className="briefcase"
            icon={["fas", "briefcase"]}
          ></FontAwesomeIcon> {userProfile.currentJob}</div>
      {getActivePersonalInfo(list).map((x) => (
        <div>
          <FontAwesomeIcon
            id="icon"
            className={x.icon}
            icon={["fas", x.icon]}
          ></FontAwesomeIcon>
          {x.indicatorInput}
        </div>
      ))}
      <AddField updatePersonalInfo={updatePersonalInfo} list={list} />
    </div>
  );
};

export default PersonalInfo;
