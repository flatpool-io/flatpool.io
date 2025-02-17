import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-green-800 text-white py-20 min-h-[90dvh] flex flex-col justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          Flat Search Made Simple
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up max-w-[45ch] mx-auto">
          Never miss your dream flat again. Get notified instantly when new
          posts match your preferences.
        </p>
        <Button size="lg" variant="secondary">
          Get Early Access
        </Button>
      </div>
    </section>
  );
}
