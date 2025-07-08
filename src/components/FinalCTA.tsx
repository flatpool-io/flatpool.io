import { Button } from "@/components/ui/button";
import { Section } from "./common/section";
import { EmailForm } from "./common/email-form";
import { Suspense } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function FinalCTA() {
  return (
    <Section id="cta" className="bg-green-600 border-y-black border-y-2 relative">
      <DotPattern />
      
      <div className="text-white relative z-10">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to find your new home?
          </h2>
          <p className="text-xl mb-8">
            Enter your email to get notified when we launch.
          </p>
          <div className="flex justify-center pt-5">
            <EmailForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
