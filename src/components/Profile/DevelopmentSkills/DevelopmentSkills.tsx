import React from "react";
import { ProgressBar } from "../../Display/ProgressBar";
import "./DevelopmentSkills.scss";
import { Indicator as IndicatorInterface } from "../../../types/types";

export interface Props {
  developmentSkills: IndicatorInterface[];
}

const DevelopmentSkills: React.FC<Props> = ({ developmentSkills }: Props) => {
  return (
    <div className="development-skills">
      {/*Progress Bars modyfied in ../../Display/ProgressBar*/}
      <h2>Development Skills</h2>
      {developmentSkills.map((x) => (
        <div key={x.indicatorID} className="development-skills-item">
          {x.indicatorName}
          <ProgressBar value={x.indicatorValue} />
        </div>
      ))}
    </div>
  );
};

export default DevelopmentSkills;
