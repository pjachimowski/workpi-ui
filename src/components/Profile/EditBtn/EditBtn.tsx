import React, { useState, useEffect } from "react";
import "./EditBtn.scss";
import { PersonalInfo as PersonalInfoInterface } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  list: PersonalInfoInterface[];
  updatePersonalInfo: (indicatorName: string | symbol) => void;
}

const EditBtn: React.FC<Props> = ({ updatePersonalInfo, list }: Props) => {
  const [showList, setShowList] = useState<boolean>(false);

  const changeShowListState = () => {
    setShowList(!showList);
  };

  const getList = (list: PersonalInfoInterface[]) => {
    return (
      <div className="personal-info-list">
        {list.map((x) => {
          return (
            <div>
              <label className="label">
                {x.indicatorName}
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={x.isActive}
                  onChange={() => updatePersonalInfo(x.indicatorName)}
                />
                <span className="custom-check-box"></span>
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <a className="edit-btn-text-desktop" onClick={changeShowListState}>
        <FontAwesomeIcon
          className="user-edit"
          id="icon"
          icon={["fas", "user-edit"]}
        ></FontAwesomeIcon>{" "}
        Edit
      </a>
      <div>
        <a className="edit-btn-text-mobile" onClick={changeShowListState}>
          <FontAwesomeIcon
            className="user-edit"
            id="icon"
            icon={["fas", "user-edit"]}
          ></FontAwesomeIcon>{" "}
        </a>
      </div>
      <div> {showList ? getList(list) : ""} </div>
    </div>
  );
};

export default EditBtn;
