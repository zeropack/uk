import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "btn-tertiary";

  const content = (
    <>
      {children}
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} group ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} group ${className}`}
    >
      {content}
    </button>
  );
}
