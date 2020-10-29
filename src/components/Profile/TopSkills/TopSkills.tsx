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
      labels: ["Adapdability", "Coaching", "Creativity"],
      datasets: [
        {
          label: "IndicatorValue",
          data: [
            10,
            11,
            12
          ],
          backgroundColor: 'rgba(255,99,132,0.6)'
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
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default TopSkills;
