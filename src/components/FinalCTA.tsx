// src/components/FinalCTA.tsx
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="min-h-[70dvh]">
      <div className="py-20 bg-green-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to find your new home?
          </h2>
          <p className="text-xl mb-8">
            Join FlatPool today and never miss out on your perfect flat again.
          </p>
          <Button size="lg" variant="secondary">
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
}
