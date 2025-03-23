import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils/cn";
import { X } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

// Define class variance authority objects
const dialogPortalClasses = cva(
    "fixed inset-0 z-50 flex items-start justify-center sm:items-center",
    {
        variants: {
            variant: {
                default: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const dialogOverlayClasses = cva(
    "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
    {
        variants: {
            variant: {
                default: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const dialogContentClasses = cva(
    "fixed z-50 grid w-full gap-4 rounded-lg bg-white p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:zoom-in-90 sm:data-[state=open]:slide-in-from-bottom-0",
    {
        variants: {
            variant: {
                default: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const dialogHeaderClasses = cva(
    "flex flex-col space-y-1.5 text-center sm:text-left",
    {
        variants: {
            variant: {
                default: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const dialogFooterClasses = cva(
    "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    {
        variants: {
            variant: {
                default: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const dialogTitleClasses = cva(
    "text-lg font-semibold leading-none tracking-tight",
    {
        variants: {
            variant: {
                default: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const dialogDescriptionClasses = cva("text-sm text-secondary-500", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

// Component types
type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dialogHeaderClasses>;
type DialogFooterProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dialogFooterClasses>;
type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> &
    VariantProps<typeof dialogTitleClasses>;
type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> &
    VariantProps<typeof dialogDescriptionClasses>;

// Dialog Header
export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
    <div className={cn(dialogHeaderClasses(), className)} {...props} />
);

DialogHeader.displayName = "DialogHeader";

// Dialog Footer
export const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
    <div className={cn(dialogFooterClasses(), className)} {...props} />
);

DialogFooter.displayName = "DialogFooter";

// Dialog Title
export const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    DialogTitleProps
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(dialogTitleClasses(), className)}
        {...props}
    />
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;

// Dialog Description
export const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    DialogDescriptionProps
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn(dialogDescriptionClasses(), className)}
        {...props}
    />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

// Define types for the props using VariantProps
type DialogPortalProps = DialogPrimitive.DialogPortalProps &
    VariantProps<typeof dialogPortalClasses> & { className?: string };
type DialogOverlayProps = React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Overlay
> &
    VariantProps<typeof dialogOverlayClasses>;
type DialogContentProps = React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Content
> &
    VariantProps<typeof dialogContentClasses>;

// Export main components
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

// Dialog Portal
export const DialogPortal = ({
    className,
    children,
    ...props
}: DialogPortalProps) => (
    <DialogPrimitive.Portal {...props}>
        <div className={cn(dialogPortalClasses(), className)}>{children}</div>
    </DialogPrimitive.Portal>
);

DialogPortal.displayName = DialogPrimitive.Portal.displayName;

// Dialog Overlay
export const DialogOverlay = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitive.Overlay>,
    DialogOverlayProps
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(dialogOverlayClasses(), className)}
        {...props}
    />
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// Dialog Content
export const DialogContent = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitive.Content>,
    DialogContentProps
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(dialogContentClasses(), className)}
            {...props}
        >
            {children}
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;
