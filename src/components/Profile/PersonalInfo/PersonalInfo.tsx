import React, { useState, useEffect } from "react";
import "./PersonalInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  User as UserInterface,
  PersonalInfo as PersonalInfoInterface,
} from "../../../types/types";
import AddField from "../AddField/AddField";
import * as _ from "lodash";

interface Props {
  user: UserInterface;
  list: PersonalInfoInterface[];
  updatePersonalInfo: (indicatorName: string | symbol) => void;
}

const PersonalInfo: React.FC<Props> = ({ user, list, updatePersonalInfo }: Props) => {
  const getActivePersonalInfo = (list: PersonalInfoInterface[]) =>
    _.chain(list)
      .filter((x) => x.isActive === true)
      .value();

  return (
    <div className="personal-info">
      <img src={user.profile_picture} alt="profile picture"></img>
      <div className="user-name">{user.user_name}</div>
      <div className="current-job">{user.current_job}</div>
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
