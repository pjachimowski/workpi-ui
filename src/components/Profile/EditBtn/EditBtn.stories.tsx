import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import EditBtn from "./EditBtn";
import { PersonalInfo as PersonalInfoInterface } from "../../../types/types";

interface Props {
  list: PersonalInfoInterface[];
  updatePersonalInfo: (indicatorName: string | symbol) => void;
}

export default {
  title: "WorkPi/UI/Profile/EditBtn",
  component: EditBtn,
} as Meta;

const list = [
  {
    indicatorID: "11",
    indicatorName: "future relevance",
    indicatorInput: "very probably disappearing",
    icon: "forward",
    isActive: true,
  },
  {
    indicatorID: "12",
    indicatorName: "department",
    indicatorInput: "Marketing",
    icon: "building",
    isActive: true,
  },
] as PersonalInfoInterface[];

const updatePersonalInfo = () => {};

const Template: Story<Props> = (args) => <EditBtn {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  updatePersonalInfo,
  list
};
