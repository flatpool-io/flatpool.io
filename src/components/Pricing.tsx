// src/components/Pricing.tsx
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="min-h-[60dvh] flex flex-col justify-center">
      <div className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-xl mb-8">Currently free for early access!</p>
          <Button size="lg">Get Early Access</Button>
        </div>
      </div>
    </section>
  );
}
