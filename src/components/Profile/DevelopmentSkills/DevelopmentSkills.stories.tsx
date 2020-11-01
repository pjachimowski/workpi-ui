import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { DevelopmentSkills, DevelopmentSkillsProps } from "./DevelopmentSkills";

export default {
  title: "WorkPi/UI/Profile/DevelopmentSkills",
  component: DevelopmentSkills,
  argTypes: {},
} as Meta;

const Template: Story<DevelopmentSkillsProps> = (args) => (
  <DevelopmentSkills {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  indicators: [
    {
      indicatorName: "Adapdability",
      indicatorValue: 95,
    },
    {
      indicatorName: "Coaching",
      indicatorValue: 85,
    },
    {
      indicatorName: "Creativity",
      indicatorValue: 70,
    },
  ],
};
