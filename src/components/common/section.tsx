import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(["my-32 py-32 flex flex-col justify-center", className])}
    >
      {children}
    </section>
  );
}
