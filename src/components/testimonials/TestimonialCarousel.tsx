import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { Button } from "../ui/button";
import TestimonialCard from './TestimonialCard';
import Autoplay from "embla-carousel-autoplay";

// Sample testimonial data
const testimonials = [
  {
    name: "TechLover99",
    username: "TechLover99",
    content: "Just completed my first JavaScript course on @CodeHarborHub! The content is top-notch and completely free. Highly recommend it! #LearnToCode #FreeEducation",
    date: "May 28, 2024",
    avatar: "/icons/adobe.png"
  },
  {
    name: "CoderGirl",
    username: "CoderGirl",
    content: "Joined @CodeHarborHub last month and already feel more confident in my coding skills. Great community and resources! #TechCommunity #WomenInTech",
    date: "May 28, 2024",
    avatar: "/icons/google.png"
  },
  {
    name: "Samar Jeet Yadav",
    username: "...",
    content: "I want to promote this type of amazing learning source. Because this is totally open resource anyone can easily go on website and learn a lot different types of course form zero to advance level...",
    date: "Jun 21, 2024",
    avatar: "/icons/amazon.png"
  }
];

export function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Loved by Many Users</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4 my-16">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 h-full">
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-center gap-2 mt-8">
          <CarouselPrevious className="static translate-y-0" />
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                variant={current === index + 1 ? "default" : "outline"}
                size="icon"
                className="h-2 w-2 p-0 rounded-full"
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
} 