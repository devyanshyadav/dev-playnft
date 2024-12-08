import React from "react";

// Simple implementation of the cn function to merge tailwind classes
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

type ButtonProps = {
  variant?: "solid" | "border" | "light" | "flat" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  asIcon?: boolean;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<"button">, "ref"> &
  Omit<React.ComponentProps<"a">, "ref">;

const DevButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "solid",
      size = "md",
      href,
      rounded = "md",
      asIcon = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const baseStyle = `transition-all z-10 relative font-medium outline-0 flex items-center active:scale-95 justify-center  
    ${!asIcon && "gap-1.5 text-nowrap"}`;

    const variantStyles = {
      solid: "GradientBg text-white",
      light: "text-[#06b6d4] hover:bg-[#06b6d4]/50 hover:text-white",
      border: "GradientBorder",
      flat: "border-[#06b6d4]/5 bg-[#06b6d4]/30 text-[#06b6d4] backdrop-blur-sm",
      ghost:
        "text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white border-2 border-[#06b6d4]",
    };

    const sizeStyles = {
      sm: asIcon ? "*:h-3 *:w-3" : "py-1 px-4 text-sm",
      md: asIcon ? "*:h-5 *:w-5" : "py-1.5 px-6 text-base",
      lg: asIcon ? "*:h-6 *:w-6" : "py-2 px-7",
    };

    const roundedStyles = {
      sm: "rounded-sm",
      md: "rounded-xl",
      lg: "rounded-2xl",
      full: "rounded-full",
      none: "rounded-none",
    };

    const classNames=cn(
      baseStyle,
      variantStyles[variant],
      sizeStyles[size],
      roundedStyles[rounded],
      asIcon && "aspect-square p-1.5",
      href && "underline",
      className
    )

    return href ? (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...(rest as React.ComponentProps<"a">)}
        className={classNames}
      >
        {children}
      </a>
    ) : (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(rest as React.ComponentProps<"button">)}
        className={classNames}
      >
        {children}
      </button>
    );
  }
);

DevButton.displayName = "Button";

export default DevButton;