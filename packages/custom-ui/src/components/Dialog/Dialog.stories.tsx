import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "./Dialog";
import { Button } from "../Button/Button";

export default {
    title: "Components/Dialog",
    component: Dialog,
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => (
    <Dialog {...args}>
        <DialogTrigger asChild>
            <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                    This is a dialog built with Radix UI primitives and styled
                    with Tailwind CSS. It supports keyboard navigation, focus
                    management, and proper screen reader announcements.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogTrigger asChild>
                    <Button variant="secondary">Cancel</Button>
                </DialogTrigger>
                <Button>Confirm</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);

export const Basic: StoryFn<typeof Dialog> = Template.bind({});
Basic.args = {};

export const WithLongContent = () => (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Open Dialog with Long Content</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Dialog with Longer Content</DialogTitle>
                <DialogDescription>
                    {Array(10)
                        .fill(
                            "This is a longer paragraph to demonstrate scrolling within the dialog. "
                        )
                        .join("")}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogTrigger asChild>
                    <Button variant="secondary">Cancel</Button>
                </DialogTrigger>
                <Button>Confirm</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);
