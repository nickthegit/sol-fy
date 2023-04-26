"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function OnePageGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <section className="wrapper">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="w-full embla__slide">
            <img
              src="https://via.placeholder.com/1920x1080/f02d2d/ffffff"
              alt="hero"
            />
          </div>
          <div className="w-full embla__slide">
            <img
              src="https://via.placeholder.com/1920x1080/2d2df0/ffffff"
              alt="hero"
            />
          </div>
          <div className="w-full embla__slide bg-yellow">Slide 3</div>
        </div>
      </div>
      <div className="relative flex justify-end gap-10 mt-6">
        <button onClick={scrollPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 19 30"
            className="w-4 rotate-180 cursor-pointer"
          >
            <path
              stroke="#5F5F5F"
              strokeLinecap="round"
              strokeWidth="5"
              d="m3 3 12 12L3 27"
            />
          </svg>
        </button>
        <button onClick={scrollNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 19 30"
            className="w-4 cursor-pointer"
          >
            <path
              stroke="#5F5F5F"
              strokeLinecap="round"
              strokeWidth="5"
              d="m3 3 12 12L3 27"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
