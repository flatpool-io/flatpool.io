// src/components/Reviews.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Reviews() {
  const reviews = [
    {
      name: "Alice",
      avatar: "A",
      text: "FlatPool saved me so much time in my flat search!",
    },
    {
      name: "Bob",
      avatar: "B",
      text: "I found my dream apartment thanks to FlatPool's notifications.",
    },
    {
      name: "Charlie",
      avatar: "C",
      text: "The customized filters are a game-changer. Highly recommended!",
    },
  ];

  return (
    <section className="min-h-[80dvh] flex flex-col justify-center">
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage
                        src={`/avatars/${review.avatar.toLowerCase()}.png`}
                      />
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    {review.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
