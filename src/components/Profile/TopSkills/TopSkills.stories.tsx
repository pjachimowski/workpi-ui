import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TopSkills from './TopSkills';
import { Indicator } from "../../../types/types";

interface Props {
  topSkills: Indicator[];
}

// interface Indicator {
//   indicatorName: string | symbol;
//   indicatorValue: number;
// }

export default {
  title: 'WorkPi/UI/Profile/TopSkills',
  component: TopSkills
} 

const topSkills = [
  {
    indicatorName: "Adapdability",
    indicatorValue: 95
  },
  {
    indicatorName: "Coaching",
    indicatorValue: 85
  },
  {
    indicatorName: "Creativity",
    indicatorValue: 70
  },
]

export const Normal: React.FC<Props> = (props) => <TopSkills topSkills={topSkills} ></TopSkills>
