import React from "react";
import "./button.css";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(["font-semibold", "border", "rounded"], {
  variants: {
    variant: {
      primary: ["p-8", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
});

interface ButtonProps {
  variant?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={cn(buttonVariants)} {...props}>
      {label}
    </button>
  );
};
