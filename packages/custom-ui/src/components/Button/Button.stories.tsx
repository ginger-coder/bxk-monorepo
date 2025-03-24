import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["default", "secondary", "outline", "destructive", "ghost", "link"],
            },
            defaultValue: "default",
        },
        size: {
            control: { type: "select", options: ["sm", "md", "lg"] },
            defaultValue: "md",
        },
        disabled: {
            control: "boolean",
            defaultValue: false,
        },
        onClick: { action: "clicked" },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary: StoryFn<typeof Button> = Template.bind({});
Primary.args = {
    variant: "default",
    children: "Primary Button",
};

export const Secondary: StoryFn<typeof Button> = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "Secondary Button",
};

export const Outline: StoryFn<typeof Button> = Template.bind({});
Outline.args = {
    variant: "outline",
    children: "Outline Button",
};

export const Small: StoryFn<typeof Button> = Template.bind({});
Small.args = {
    size: "sm",
    children: "Small Button",
};

export const Large: StoryFn<typeof Button> = Template.bind({});
Large.args = {
    size: "lg",
    children: "Large Button",
};

export const Disabled: StoryFn<typeof Button> = Template.bind({});
Disabled.args = {
    disabled: true,
    children: "Disabled Button",
};
