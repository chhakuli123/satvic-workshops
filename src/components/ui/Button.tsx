import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-transition duration-200 ease-out hover:ease-in flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-colors active:outline-none active:ring-2 active:ring-offset-2 active:ring-blue-500 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-400',
  {
    variants: {
      variant: {
        default:
          'bg-primary-500 font-semibold text-white shadow hover:bg-primary-700 active:bg-primary-900',
        destructive: 'bg-red-600 text-white shadow-sm hover:bg-red-700',
        outline:
          'border-2 border-primary-500 bg-white text-primary-500 shadow-sm hover:bg-primary-100 disabled:bg-white disabled:border-primary-100',
        secondary: 'bg-zinc-100 text-gray-950 shadow-sm hover:bg-zinc-200',
        ghost: 'text-primary-500 hover:bg-primary-100 disabled:bg-white',
        link: 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-50',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-9 px-4 py-2 text-sm',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-11 px-4 py-2 text-base',
        xl: 'h-12 px-4 py-2 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
