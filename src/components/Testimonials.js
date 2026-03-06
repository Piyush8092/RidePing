"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import UserCard from "@/components/testimonials/UserCard";
import UnderlineImg from "@/components/assets/Ellipse1.png";

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Ganesh M. Parekh",
      rating: 5,
      review:
        "This app is very easy to use. Automated attendance saves me so much time every morning. Great system.",
    },
    {
      name: "Ganesh M. Parekh",
      rating: 5,
      review:
        "This app is very easy to use. Automated attendance saves me so much time every morning. Great system.",
    },
    {
      name: "Ganesh M. Parekh",
      rating: 5,
      review:
        "This app is very easy to use. Automated attendance saves me so much time every morning. Great system.",
    },
    {
      name: "Ganesh M. Parekh",
      rating: 5,
      review:
        "This app is very easy to use. Automated attendance saves me so much time every morning. Great system.",
    },
  ];

  const scrollByCard = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth;
    const gap = 24; // gap-6
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="relative bg-white py-16">
      {/* HEADING */}
      <div className="relative mb-6 w-full text-center">
        <h2 className="font-ibmPlexMono relative -top-8 text-2xl font-semibold text-black sm:text-4xl md:text-5xl">
          What Our Users Says
        </h2>
        <div className="relative -top-8 mx-auto -mt-4 h-6 w-[320px]">
          <Image src={UnderlineImg} alt="underline" fill className="object-contain" />
        </div>
      </div>
      {/* Arrows (Desktop & Tablet only) */}
      <button
        onClick={() => scrollByCard("left")}
        className="absolute top-1/2 left-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 md:flex"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scrollByCard("right")}
        className="absolute top-1/2 right-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 md:flex"
      >
        <ChevronRight />
      </button>

      {/* Scroll Container  here*/}
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 md:px-16"
      >
        {testimonials.map((item, i) => (
          <div key={i} className="w-full shrink-0 snap-center md:w-1/3">
            <UserCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
