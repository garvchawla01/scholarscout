
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/scholarscout-logo.png"
      alt="ScholarScout"
      className={cn("h-16 w-auto object-contain select-none", className)}
      style={{ height: "64px", width: "auto" }}
      draggable={false}
    />
  );
}
