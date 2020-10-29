import React, { FunctionComponent } from "react";
import "./PaneItem.scss";


const PaneItem: React.FC = (props) => {
  return (
    <div className="pane-item">
      {props.children}
    </div>
  );
};

export default PaneItem;
