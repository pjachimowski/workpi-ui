import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TopSkills from './TopSkills';
import { Indicator } from "../../../types/types";

interface Props {
  topSkills: Indicator[];
}

export default {
  title: 'WorkPi/UI/Profile/TopSkills',
  component: TopSkills
} as Meta;

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
] as Indicator[];

const Template: Story<Props> = (args) => <TopSkills {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  topSkills
};
