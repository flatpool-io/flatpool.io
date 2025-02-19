import { Button } from "@/components/ui/button";
import { Section } from "./common/section";

export default function Pricing() {
  return (
    <Section>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">💰 Pricing</h2>
          <p className="text-xl mb-8">
            Currently <span className="font-black underline italic">FREE</span>{" "}
            for early access!
          </p>
          <Button size="lg">Get Early Access</Button>
        </div>
    </Section>
  );
}
