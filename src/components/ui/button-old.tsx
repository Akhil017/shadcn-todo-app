"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariantsSlot = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        magic:
          "[--r:0.5rem] [--p:2px] [--c:hsl(var(--primary))] group relative flex  items-center justify-center rounded-[var(--r)] bg-[var(--c)] bg-gradient-to-b from-white/20 from-0% to-white/0 to-100% text-white shadow-[0px_0px_0px_2px_var(--c),0px_1px_2px_0px_rgba(13,13,18,0.40)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-150 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-[calc(var(--r))] before:bg-gradient-to-b before:from-white/20 before:from-15% before:to-white/0 before:to-100% after:absolute after:top-[--p] after:h-[calc(100%-4px)] after:w-[calc(100%-4px)] after:rounded-[calc(var(--r)-var(--p))] after:bg-[var(--c)] after:bg-gradient-to-b after:from-white/10 after:from-0% after:to-white/0 after:to-100%  inline-flex items-center justify-center whitespace-nowrap",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonVariants = cva(
  "[--r:0.5rem] [--p:2px] [--c:hsl(var(--primary))] group relative flex  items-center justify-center rounded-[var(--r)] bg-[var(--c)] bg-gradient-to-b from-white/20 from-0% to-white/0 to-100% text-white shadow-[0px_0px_0px_2px_var(--c),0px_1px_2px_0px_rgba(13,13,18,0.40)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-150 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-[calc(var(--r))] before:bg-gradient-to-b before:from-white/20 before:from-15% before:to-white/0 before:to-100% after:absolute after:top-[--p] after:h-[calc(100%-4px)] after:w-[calc(100%-4px)] after:rounded-[calc(var(--r)-var(--p))] after:bg-[var(--c)] after:bg-gradient-to-b after:from-white/10 after:from-0% after:to-white/0 after:to-100%  inline-flex items-center justify-center whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive:
          "[--c:hsl(var(--destructive))] text-destructive-foreground",
        outline:
          "[--c:transparent] border border-input bg-background text-accent-foreground shadow-none hover:bg-accent",
        secondary: "[--c:hsl(var(--secondary))] text-secondary-foreground",
        ghost:
          "[--c:background] hover:bg-accent hover:text-accent-foreground text-primary bg-bakground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariantsSlot({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariantsSlot({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    } else {
      return (
        <button
          ref={ref}
          {...props}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          <span className="z-10 flex flex-grow items-center justify-center from-white to-white/0 px-3 py-2 text-center text-sm font-medium leading-8 transition-all duration-150 before:absolute before:inset-0 before:rounded-[calc(var(--r))] before:bg-gradient-to-b before:opacity-5 before:transition-all before:duration-150 group-hover:before:opacity-20 group-active:before:bg-[--c] group-active:before:bg-gradient-to-b group-active:before:from-white/0 group-active:before:to-white/0 group-active:before:opacity-20">
            {children}
          </span>
        </button>
      );
    }
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
