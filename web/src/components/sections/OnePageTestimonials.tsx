"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
import { PortableText } from "@portabletext/react";

export function OnePageTestimonials({
  testimonials,
}: {
  testimonials: { author: string; _key: string; testimonial: any[] }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    AutoHeight(),
  ]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      {testimonials && (
        <section className="w-full py-20 bg-slate-100">
          <div className="col-span-12 col-start-1 wrapper">
            <h2 className="mb-4 text-base font-bold text-left">Testimonials</h2>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {testimonials?.map((testimonial, index) => (
                  <div className="w-full embla__slide" key={testimonial._key}>
                    <figure>
                      <blockquote className="max-w-3xl text-2xl font-bold">
                        <PortableText value={testimonial.testimonial} />
                      </blockquote>
                      {testimonial.author && (
                        <figcaption className="mt-4">
                          — {testimonial.author}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                ))}
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
          </div>
        </section>
      )}
    </>
  );
}
