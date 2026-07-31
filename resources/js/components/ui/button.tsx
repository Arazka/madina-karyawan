import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 outline-none cursor-pointer select-none shadow-sm active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-md",

        outline:
          "border border-border bg-background hover:bg-muted hover:shadow-md",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md",

        ghost:
          "hover:bg-muted hover:text-foreground",

        link:
          "text-primary underline-offset-4 shadow-none hover:underline",

        edit:
        "border border-sky-200 bg-sky-100 text-sky-700 hover:bg-sky-200",

        delete:
        "border border-rose-200 bg-rose-100 text-rose-700 hover:bg-rose-200",

        submit:
        "border border-emerald-200 bg-emerald-100 text-emerald-600 hover:bg-emerald-200 "
      },

      size: {
        xs: "h-7 rounded-lg px-2.5 text-xs",

        sm: "h-9 rounded-lg px-4",

        default: "h-10 px-5",

        lg: "h-11 px-6 text-base",

        icon: "size-10",

        "icon-xs": "size-7 rounded-lg",

        "icon-sm": "size-9 rounded-lg",

        "icon-lg": "size-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };