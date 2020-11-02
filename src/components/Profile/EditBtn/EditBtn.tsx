import React, { useState, useEffect } from "react";
import "./EditBtn.scss";
import { PersonalInfo as PersonalInfoInterface } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  list: PersonalInfoInterface[];
  updatePersonalInfo: (indicatorName: string | symbol) => void;
}

const EditBtn: React.FC<Props> = (props) => {
  const [showList, setShowList] = useState<boolean>(false);

  const changeShowListState = () => {
    setShowList(!showList);
  };

  const getList = (list: PersonalInfoInterface[]) => {
    return list.map((x) => {
      return (
        <div>
          <input
          className="checkbox"
          type="checkbox"
          checked={x.isActive}
          onChange={() => props.updatePersonalInfo(x.indicatorName)}
          />
          <label> {x.indicatorName} </label>
        </div>
      );
    });
  };

  return (
    <div>
      <a onClick={changeShowListState}>
        <FontAwesomeIcon
          className="user-edit"
          id="icon"
          icon={["fas", "user-edit"]}
        ></FontAwesomeIcon> Edit
      </a>
      <div className="personal-info-list"> {showList ? getList(props.list) : ""} </div>
    </div>
  );
};

export default EditBtn;
