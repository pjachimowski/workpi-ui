import React, { useState, useEffect } from "react";
import { ProgressBar } from "../../Display/ProgressBar";
import "./DevelopmentSkills.scss";
import { Indicator as IndicatorInterface } from "../../../types/types";

export interface Props {
  developmentSkills: IndicatorInterface[];
}

const DevelopmentSkills: React.FC<Props> = (props) => {
  return (
    <div className="development-skills">
      {/*Progress Bars modyfied in ../../Display/ProgressBar*/}
      <h2>Development Skills</h2>
      {props.developmentSkills.map( x => (
        <div className="development-skills-item">
          {x.indicatorName}
          <ProgressBar value={x.indicatorValue} />
        </div>
      ))}
    </div>
  );
};

export default DevelopmentSkills;
