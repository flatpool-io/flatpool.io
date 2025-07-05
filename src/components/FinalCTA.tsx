import { Button } from "@/components/ui/button";
import { Section } from "./common/section";
import { EmailForm } from "./common/email-form";
import { Suspense } from "react";

export default function FinalCTA() {
  return (
    <Section id="cta">
      <div className="py-20 bg-green-600 text-white border-y-black border-y-2">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to find your new home?
          </h2>
          <p className="text-xl mb-8">
            Enter your email to get notified when we launch.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <EmailForm className="mx-auto" />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}
