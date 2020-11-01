import React from "react";
import "./NewNav.scss";
import { Nav as NavInterface } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//write new interface
interface Props {
  navElements: NavInterface[];
}

const NewNav: React.FC<Props> = (props) => {
  return (
    <div>
      <nav>
        <div className="logo"></div>
        <div className="buttons">
          <div className="button">
            <FontAwesomeIcon icon={["fas", "address-card"]}></FontAwesomeIcon>
          </div>
          <div className="button">
            <FontAwesomeIcon icon={["fas", "address-card"]}></FontAwesomeIcon>
          </div>
          <div className="button active">
            <FontAwesomeIcon icon={["fas", "address-card"]}></FontAwesomeIcon>
          </div>
        </div>
        <div className="system">
          <div id="settings" className="button">
          <FontAwesomeIcon icon={["fas", "cog"]}></FontAwesomeIcon>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NewNav;
