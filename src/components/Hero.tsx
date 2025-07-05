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
    <section className="bg-green-600 overflow-hidden text-white min-h-[min(80dvh,35rem)] border-b-black border-b-2 flex px-4 pt-8 md:pt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 mx-auto max-w-screen-lg flex-1">
        <div className="mx-auto text-center md:text-left flex-1 flex flex-col justify-center col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            Flat Search Made <span className="underline">Simple</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up max-w-[45ch] mx-auto md:mx-0">
            Never miss your dream flat again. Get notified instantly when new
            posts match your preferences.
          </p>
          <a href="#cta">
            <Button
              size="lg"
              variant="secondary"
              className="mx-auto md:mx-0 md:w-fit"
            >
              Get Early Access
            </Button>
          </a>
        </div>

        {/* Phone css */}
        <div className="col-span-1 flex items-end justify-center">
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
        </div>
      </div>
    </section>
  );
}
