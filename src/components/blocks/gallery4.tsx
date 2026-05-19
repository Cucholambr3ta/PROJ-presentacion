"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
    href: "https://tailwindcss.com",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Prototipos Vivos",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-black md:text-4xl lg:text-5xl text-white tracking-tight font-sans">
              {title}
            </h2>
            <p className="max-w-lg text-slate-400 font-sans text-sm font-medium">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-emerald-500/20 disabled:opacity-30 w-12 h-12 flex items-center justify-center transition-all"
            >
              <ArrowLeft className="size-5 text-emerald-400" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-emerald-500/20 disabled:opacity-30 w-12 h-12 flex items-center justify-center transition-all"
            >
              <ArrowRight className="size-5 text-emerald-400" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          plugins={[
            Autoplay({
              delay: 8000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[380px]"
              >
                <a href={item.href} className="group block h-full overflow-hidden rounded-[2.2rem] border border-white/5 bg-slate-950/40 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-emerald-500/20 hover:bg-slate-950/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/5">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900 border-b border-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    />
                  </div>
                  <div className="flex flex-col p-6 md:p-7 text-left space-y-3">
                    <h3 className="text-xl font-black tracking-tight text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="line-clamp-3 text-[13px] leading-relaxed text-slate-400 font-sans font-medium">
                      {item.description}
                    </p>
                    <div className="pt-2 mt-auto flex items-center text-[10px] font-black uppercase tracking-[0.15em] text-emerald-400 font-sans">
                      Ver prototipo interactivo
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-emerald-500 w-6" : "bg-slate-800"
                }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
