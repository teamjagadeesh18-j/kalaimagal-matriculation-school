"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer rounded-xl",
  {
    variants: {
      variant: {
        default:
          "text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200/80 shadow-xs",
        outline:
          "border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 shadow-xs",
        ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-700",
        link: "text-slate-900 underline-offset-4 hover:underline p-0 h-auto font-bold",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-13 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
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
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const customStyle: React.CSSProperties = {
      ...style,
      ...(variant === "default" || !variant
        ? {
            backgroundColor: "#5727e7",
            boxShadow: `0 10px 25px -5px rgba(87, 39, 231, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)`
          }
        : {})
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={customStyle}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
