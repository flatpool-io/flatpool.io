// src/components/HowItWorks.tsx
import { Filter, Search, Bell } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Set Filters",
      icon: Filter,
      description: "Define search criteria like price, location, equipment, etc.",
    },
    {
      title: "We Scan",
      icon: Search,
      description: "We scan facebook groups for new posts that match your filters.",
    },
    {
      title: "Get Notified",
      icon: Bell,
      description: "Receive instant notifications for new matches.",
    },
  ];

  return (
    <section className="min-h-[60dvh] flex flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-lg mx-auto divide-y-2 md:divide-y-0 divide-x-0 md:divide-x-2">
          {steps.map((step, index) => (
            <div key={index} className="p-4">
              {step.icon && (
                <div className="text-center mb-4">
                  <step.icon size={32}  className="mx-auto"/>
                </div>
              )}
              <h3 className="text-xl font-semibold text-center mb-4">
                {step.title}
              </h3>
              <p className="text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
