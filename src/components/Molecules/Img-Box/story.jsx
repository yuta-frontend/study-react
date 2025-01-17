import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Item-Img",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
