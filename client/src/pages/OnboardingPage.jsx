import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ONBOARDING_DATA = [
  {
    title: "Hello Buddy",
    description: "Instant conversations for teams that move fast.",
  },
  {
    title: "Seamless Flow",
    description: "Connect with your department in just a few taps.",
  },
  {
    title: "Get Results",
    description: "Boost productivity with our integrated toolset.",
  },
];

export default function Onboarding() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  // Sync the dots with the slide position
  useEffect(() => {
    if (!api) return;

    // Set initial state
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isLastSlide = current === ONBOARDING_DATA.length - 1;

  return (
    <div className="bg-primary h-screen flex flex-col overflow-hidden">
      <div className="relative flex-1 flex flex-col items-center justify-between pt-16 ">
        <h1 className="text-3xl font-bold text-white">Buddy Hub</h1>

        <div className="relative w-full flex justify-center">
          <img
            src="../assets/mr-buddy.png"
            alt=""
            className="w-4/5 object-contain translate-y-4"
          />
        </div>
      </div>

      <div className="bg-white rounded-tl-[100px] px-8 pt-12 pb-16">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {ONBOARDING_DATA.map((slide, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Pagination Dots */}
                <div className="flex gap-2 mb-10">
                  {ONBOARDING_DATA.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        current === i ? "w-12 bg-primary" : "w-6 bg-gray-200",
                      )}
                    />
                  ))}
                </div>

                <h2 className="text-4xl font-bold text-black mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-500 text-lg mb-12 max-w-70">
                  {slide.description}
                </p>

                {isLastSlide ? (
                  <Button
                    asChild
                    className="w-full h-16 text-xl font-semibold rounded-2xl"
                  >
                    <Link to="/signup">Get Started</Link>
                  </Button>
                ) : (
                  <Button
                    onClick={() => api?.scrollNext()}
                    className="w-full h-16 text-xl font-semibold rounded-2xl"
                  >
                    Continue
                  </Button>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
