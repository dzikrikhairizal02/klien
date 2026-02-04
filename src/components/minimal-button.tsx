import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MinimalButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "sm";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MinimalButton({
  variant = "primary",
  size = "default",
  children,
  className,
  onClick,
  href,
}: MinimalButtonProps) {
  const baseStyles = "rounded-sm font-medium transition-all duration-200 ease-out";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800 hover:shadow-md",
    secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50",
  };

  const sizeStyles = {
    default: "px-8 py-3 text-base",
    sm: "px-6 py-2 text-sm",
  };

  const button = (
    <Button
      variant={variant === "primary" ? "default" : "outline"}
      size="default"
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  if (href) {
    return <a href={href}>{button}</a>;
  }

  return button;
}
