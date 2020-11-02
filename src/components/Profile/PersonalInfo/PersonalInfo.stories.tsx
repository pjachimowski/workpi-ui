import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PersonalInfo from "./PersonalInfo";
import {
  PersonalInfo as PersonalInfoInterface,
  UserProfile,
} from "../../../types/types";

interface Props {
  list: PersonalInfoInterface[];
  userProfile: UserProfile;
  updatePersonalInfo: (indicatorName: string | symbol) => void;
}

export default {
  title: "WorkPi/UI/Profile/PersonalInfo",
  component: PersonalInfo,
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

const userProfile = {
  userName: "Partyk Jachimowski",
  currentJob: "Front End Developer",
  profilePicture: "https://i.ibb.co/v1VDC5M/PATRYK-JACHIMOWSKI-2020.jpg",
  isLoggedIn: true,
} as UserProfile;

const updatePersonalInfo = () => {}

const Template: Story<Props> = (args) => <PersonalInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  list,
  userProfile,
  updatePersonalInfo,
};
