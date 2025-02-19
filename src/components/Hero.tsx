import { Button } from "@/components/ui/button";

export default function Hero() {
  const offers = [
    {
      title: "New offer! (3+1, 7000 czk)",
      description: "3+1, 7000 czk, 20m², Brno, 4th floor, 2 roommates",
    },
    {
      title: "New offer! (1+1, 5000 czk)",
      description: "1+1, 5000 czk, 30m², Brno, 2nd floor, 1 roommate",
    },
    {
      title: "New offer! (2+1, 6000 czk)",
      description: "2+1, 6000 czk, 40m², Brno, 1st floor, 3 roommates",
    },
    {
      title: "New offer! (3+kk, 5500 czk)",
      description: "3+kk, 5500 czk, 32m², Brno, 4st floor, 2 roommates",
    },
  ];

  return (
    <section className="bg-green-600 overflow-hidden text-white pt-20 min-h-[min(90dvh,55rem)] flex flex-col gap-2 border-b-black border-b-2">
      <div className="container mx-auto text-center flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          Flat Search Made <span className="underline">Simple</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up max-w-[45ch] mx-auto">
          Never miss your dream flat again. Get notified instantly when new
          posts match your preferences.
        </p>
        <Button size="lg" variant="secondary" className="mx-auto">
          Get Early Access
        </Button>
      </div>
      <div className="shadow-xl shadow-black text-black text-xs h-80 aspect-[4/5] mx-auto border-black border-8 border-b-0 bg-white rounded-t-[2.5rem] relative overflow-hidden">
        <div className="bg-black w-1/3 h-5 rounded-full mx-auto m-1.5 z-20 relative" />
        {offers.map((offer, i) => (
          <div
            key={i}
            className="bg-muted rounded-lg m-2 p-2 flex gap-2 animate-new-notification absolute top-6 left-0 right-0 z-10"
            style={{ animationDelay: `${i * 3}s` }}
          >
            <div className="bg-green-600 rounded-full h-full aspect-square" />
            <div className="flex flex-col flex-1">
              <p className="font-semibold flex justify-between">
                {offer.title}
                <span className="font-normal text-muted-foreground ml-auto">
                  now
                </span>
              </p>
              <p className="font-light text-ellipsis">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
