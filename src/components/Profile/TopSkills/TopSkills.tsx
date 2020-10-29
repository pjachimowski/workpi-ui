import React, { useState, useEffect } from "react";
import "./TopSkills.scss";
import { Radar } from "react-chartjs-2";

interface Props {
  topSkills: string[];
}

const TopSkills: React.FC<Props> = () => {
  //useState for now overlaps with props
  const [topSkills, setTopSkills] = useState({
    chartData: {
      labels: ["Adaptability", "Coaching", "Creativity"],
      datasets: [
        {
          data: [10, 11, 12],
          backgroundColor: "rgba(253, 221, 77, 0.5)",
          //borderCapStyle: 'round',
          borderColor: "rgba(253, 221, 77, 1)",
          //borderJoinStyle: 'round',
          borderWidth: 2,
          lineTension: 0.5,
          pointBackgroundColor: "rgba(253, 221, 77, 0)",
          pointBorderColor: "rgba(253, 221, 77, 0)",
        },
      ],
    },
  });

  return (
    <div>
      <div className="top-skills-title">Top skills</div>
      <div className="top-skills-chart">
        <Radar
          data={topSkills.chartData}
          width={200}
          height={200}
          options={{
            scale: {
              gridLines: { circular: true },
              // angleLines: {
              //   display: false,
              // },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 15,
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
