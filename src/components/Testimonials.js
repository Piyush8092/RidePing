"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import UserCard from "@/components/testimonials/UserCard";
import SectionHeading from "./common/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Principal, Saraswati Public School",
    rating: 5,
    review:
      "Managing attendance and communication has become much easier. Parents now get instant updates and our staff saves a lot of time every day.",
    imageUrl:
      "https://images.unsplash.com/photo-1597570889212-97f48e632dad?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Neha Verma",
    role: "School Administrator",
    rating: 5,
    review:
      "Fee tracking and reporting is now completely organized. We can quickly see pending dues and send reminders to parents.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Amit Yadav",
    role: "Senior Teacher",
    rating: 5,
    review:
      "Marking attendance and sharing homework has become very simple. The system is fast and easy for daily use.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Suresh Meena",
    role: "Transport Manager",
    rating: 5,
    review:
      "Live bus tracking and pickup alerts have improved student safety and reduced confusion during routes.",
    imageUrl:
      "https://images.unsplash.com/photo-1764169689207-e23fb66e1fcf?auto=format&fit=crop&w=400&q=80",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

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
      <SectionHeading heading={"What Our Users Says"} />

      {/* Arrows (Desktop & Tablet only) */}
      <button
        aria-label="Previous testimonial"
        onClick={() => scrollByCard("left")}
        className="absolute top-1/2 left-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 md:flex"
      >
        <ChevronLeft />
      </button>

      <button
        aria-label="Next testimonial"
        onClick={() => scrollByCard("right")}
        className="absolute top-1/2 right-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 md:flex"
      >
        <ChevronRight />
      </button>

      {/* Scroll Container  here*/}
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 py-2 md:px-16"
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
