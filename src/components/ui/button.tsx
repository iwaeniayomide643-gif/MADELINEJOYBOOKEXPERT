import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-luminous hover:-translate-y-0.5 hover:bg-primary/90",
        glass:
          "border border-glass-border bg-glass text-foreground backdrop-blur-xl hover:-translate-y-0.5 hover:border-glass-highlight hover:bg-glass-strong",
        outline:
          "border border-glass-border bg-transparent text-foreground hover:bg-glass-strong",
        ghost: "text-muted-foreground hover:bg-glass hover:text-foreground",
        icon: "size-11 px-0 text-foreground hover:bg-glass-strong",
      },
      size: {
        default: "min-h-12 px-6",
        sm: "min-h-10 px-4 text-xs",
        lg: "min-h-14 px-8 text-base",
        icon: "size-11 px-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };