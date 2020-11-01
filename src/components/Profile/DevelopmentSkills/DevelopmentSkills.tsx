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
      <div className="development-skills-title">Development Skills</div>
      {props.developmentSkills.map( x => (
        <div>
          {x.indicatorName}
          <ProgressBar value={x.indicatorValue} />
        </div>
      ))}
    </div>
  );
};

export default DevelopmentSkills;
