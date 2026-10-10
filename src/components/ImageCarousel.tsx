"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CarouselSlide = {
  src: string;
  alt: string;
  label: string;
};

type Props = {
  slides: CarouselSlide[];
  intervalMs?: number;
};

export function ImageCarousel({ slides, intervalMs = 4500 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden rounded-[1.5rem]">
      <div className="relative aspect-[4/3] w-full md:aspect-[5/4]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss/80 via-moss/20 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-[family-name:var(--font-display)] text-xl text-sand md:text-2xl">
              {slide.label}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sand/90 text-moss transition hover:bg-white"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sand/90 text-moss transition hover:bg-white"
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="absolute left-5 top-5 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${slide.label}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-amber" : "w-1.5 bg-sand/50 hover:bg-sand/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
