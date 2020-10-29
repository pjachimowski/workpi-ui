import React, { useState, useEffect } from "react";
import "./TopSkills.scss";
import { Radar } from "react-chartjs-2";
import { Indicator } from "../ProfileSidePane/types";

interface Props {
  topSkills: Indicator[];
}

const TopSkills: React.FC<Props> = (props) => {

  const chartData = {
    // change labels to props 
    labels: props.topSkills.map(x => x.indicatorName),
    datasets: [
      {
        data: props.topSkills.map(x => x.indicatorValue),
        backgroundColor: "rgba(253, 221, 77, 0.5)",
        borderColor: "rgba(253, 221, 77, 1)",
        borderWidth: 2,
        lineTension: 0.5,
        pointBackgroundColor: "rgba(253, 221, 77, 0)",
        pointBorderColor: "rgba(253, 221, 77, 0)",
      },
    ],
  };

  return (
    <div>
      <div className="top-skills-title">Top skills</div>
      <div className="top-skills-chart">
        <Radar
          data={chartData}
          width={150}
          height={150}
          options={{
            scale: {
              gridLines: {
                circular: true,
                borderWidth: 5,
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 100,
                maxTicksLimit: 6,
              },
            },
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default TopSkills;
