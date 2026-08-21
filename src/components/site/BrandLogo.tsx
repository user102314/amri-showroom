import logo from "@/assets/logo.jpg";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: "h-12 w-12",
  md: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
  lg: "h-20 w-20",
  hero: "h-24 w-24 sm:h-28 sm:w-28",
} as const;

export function BrandLogo({
  className,
  size = "md",
  loading,
}: {
  className?: string;
  size?: keyof typeof SIZES;
  loading?: "eager" | "lazy";
}) {
  return (
    <img
      src={logo}
      alt="Meuble Amri"
      loading={loading}
      className={cn(
        "shrink-0 rounded-2xl object-cover shadow-soft",
        SIZES[size],
        className,
      )}
    />
  );
}
