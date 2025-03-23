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
                options: ["primary", "secondary", "outline"],
            },
            defaultValue: "primary",
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

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "Secondary Button",
};

export const Outline = Template.bind({});
Outline.args = {
    variant: "outline",
    children: "Outline Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "sm",
    children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "lg",
    children: "Large Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    children: "Disabled Button",
};
