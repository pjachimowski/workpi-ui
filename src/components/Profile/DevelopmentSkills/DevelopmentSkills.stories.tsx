import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DevelopmentSkills from './DevelopmentSkills';
import { Indicator } from "../../../types/types";

interface Props {
  developmentSkills: Indicator[];
}

export default {
  title: 'WorkPi/UI/Profile/DevelopmentSkills',
  component: DevelopmentSkills
} as Meta;

const developmentSkills = [
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

const Template: Story<Props> = (args) => <DevelopmentSkills {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  developmentSkills
};
