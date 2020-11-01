import React, { useState, useEffect } from "react";
import "./AddField.scss";
import { PersonalInfo as PersonalInfoInterface } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddField: React.FC = () => {
    const [additionalFields, setAdditionalFields] = useState<string[]>([]);

    const addField = () => {
        setAdditionalFields([...additionalFields, "foo"]);
      };
  return (
    <div>
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

export default AddField;
