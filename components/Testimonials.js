"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import UserCard from "@/components/testimonials/UserCard";
import UnderlineImg from "@/components/assets/Ellipse1.png";

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    { name: "Ganesh M. Parekh", rating: 5, review: "This app is very easy to use. Automated attendance saves me so much time every morning. Great system." },
    { name: "Ganesh M. Parekh", rating: 5, review: "This app is very easy to use. Automated attendance saves me so much time every morning. Great system." },
    { name: "Ganesh M. Parekh", rating: 5, review: "This app is very easy to use. Automated attendance saves me so much time every morning. Great system." },
    { name: "Ganesh M. Parekh", rating: 5, review: "This app is very easy to use. Automated attendance saves me so much time every morning. Great system." },
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
    <section  id="reviews" className="bg-white py-16 relative">
             {/* HEADING */}
                 <div className="relative w-full text-center mb-6">
                   <h2 className="font-ibmPlexMono text-2xl sm:text-4xl md:text-5xl font-semibold text-black -top-8 relative">
                     What Our Users Says
                   </h2>
                   <div className="relative w-[320px] h-6 mx-auto -mt-4 -top-8">
                     <Image src={UnderlineImg} alt="underline" fill className="object-contain" />
                   </div>
                 </div>
      {/* Arrows (Desktop & Tablet only) */}
      <button
        onClick={() => scrollByCard("left")}
        className="
          hidden md:flex
          absolute left-4 top-1/2 -translate-y-1/2
          z-20
          bg-white shadow-lg
          w-12 h-12
          items-center justify-center
          rounded-full
          hover:scale-105 transition
        "
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scrollByCard("right")}
        className="
          hidden md:flex
          absolute right-4 top-1/2 -translate-y-1/2
          z-20
          bg-white shadow-lg
          w-12 h-12
          items-center justify-center
          rounded-full
          hover:scale-105 transition
        "
      >
        <ChevronRight />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="
          flex
          overflow-x-auto
          no-scrollbar
          snap-x snap-mandatory
          scroll-smooth
          gap-6
          px-4 md:px-16
        "
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-full md:w-1/3"
          >
            <UserCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
