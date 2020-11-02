import React from "react";
import "./TopSkills.scss";
import { Radar } from "react-chartjs-2";
import { Indicator as IndicatorInterface } from "../../../types/types";

export interface Props {
  topSkills: IndicatorInterface[];
}

const TopSkills: React.FC<Props> = ({ topSkills }: Props) => {
  const chartData = {
    labels: topSkills.map((x) => x.indicatorName),
    datasets: [
      {
        data: topSkills.map((x) => x.indicatorValue),
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
      <h2>Top skills</h2>
      <div className="top-skills-chart">
        <Radar
          data={chartData}
          width={120}
          height={120}
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
