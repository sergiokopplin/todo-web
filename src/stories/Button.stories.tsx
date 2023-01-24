import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CustomButton } from "./Button";

export default {
  title: "Example/CustomButton",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton />
);

export const Primary = Template.bind({});
