import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/scholarscout-logo.png"
      alt="ScholarScout"
      className={cn("h-12 w-auto select-none", className)}
      draggable={false}
    />
  );
}