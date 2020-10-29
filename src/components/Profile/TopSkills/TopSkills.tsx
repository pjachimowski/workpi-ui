import React, { useState, useEffect } from "react";
import "./TopSkills.scss";
import { Radar } from "react-chartjs-2";
import { Indicator } from "../ProfileSidePane/types";

interface Props {
  topSkills: string[];
}

const TopSkills: React.FC<Props> = () => {

  const chartData = {
    // change labels to props 
    labels: ["Adaptability", "Coaching", "Creativity"],
    datasets: [
      {
        data: [10, 11, 12],
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
              // angleLines: {
              //   lineWidth: 5,
              // },
              gridLines: {
                circular: true,
                borderWidth: 5,
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 15,
                maxTicksLimit: 5,
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
