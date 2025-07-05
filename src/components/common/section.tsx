import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={cn(["my-32 py-32 flex flex-col justify-center", className])}
      id={id}
    >
      {children}
    </section>
  );
}
