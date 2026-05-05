import { cn } from "@/lib/utils"; // shadcn helper (optional but recommended)

// Wrapper for a group of fields
export function FieldGroup({ children, className }) {
  return <div className={cn("space-y-6", className)}>{children}</div>;
}

// Single field container
export function Field({
  children,
  orientation = "vertical", // "vertical" | "horizontal"
  className,
}) {
  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" && "flex-col space-y-2",
        orientation === "horizontal" && "flex-row items-center gap-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

// Label
export function FieldLabel({ children, htmlFor, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-medium leading-none", className)}
    >
      {children}
    </label>
  );
}

// Description text
export function FieldDescription({ children, className }) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>{children}</p>
  );
}
