import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 hover:outline-2 hover:border-primary-300 focus:border focus:border-primary focus:text-gray-900 focus-visible:outline-none active:border-primary disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-500 dark:placeholder:text-gray-600 dark:focus:text-gray-200 active:outline-2 active",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
