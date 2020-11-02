import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Wrapper from "./Wrapper";

export default {
  title: "WorkPi/UI/Profile/Wrapper",
  component: Wrapper,
} as Meta;

const Template: Story = () => <Wrapper />;

export const SidePaneWrapper = Template.bind({});
