import React, { useState, useEffect } from "react";
import "./AddField.scss";
import { PersonalInfo as PersonalInfoInterface } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  list: PersonalInfoInterface[];
  updatePersonalInfo: (indicatorName: string | symbol) => void;
}

const AddField: React.FC<Props> = (props) => {
  const [showList, setShowList] = useState<boolean>(false);

  const changeShowListState = () => {
    setShowList(!showList);
  };

  const getList = (list: PersonalInfoInterface[]) => {
    return list.map((x) => {
      return (
        <div>
          {x.indicatorName}
          <input
            type="checkbox"
            checked={x.isActive}
          onChange={ () => props.updatePersonalInfo(x.indicatorName)} 
          />
        </div>
      );
    });
  };

  return (
    <div>
      <a onClick={changeShowListState}>
        <FontAwesomeIcon
          className="add-btn"
          id="icon"
          icon={["fas", "plus-square"]}
        ></FontAwesomeIcon>
        Add field
      </a>

      <div> {showList ? getList(props.list) : ""} </div>
    </div>
  );
};

export default AddField;
