import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const heroButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 font-bold shadow-lg transform transition-all duration-300 ease-out",
        whatsapp: "bg-green-500 text-white hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg",
        outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300",
        glow: "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 shadow-lg font-bold transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-8 text-lg",
        xl: "h-16 rounded-lg px-12 text-xl font-bold"
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "lg",
    },
  }
)

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
HeroButton.displayName = "HeroButton"

export { HeroButton, heroButtonVariants }