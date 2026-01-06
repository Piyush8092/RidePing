"use client";

import UserCard from "@/components/testimonials/UserCard";
import UnderlineImg from "@/components/assets/Ellipse1.png"; 
import Image from "next/image";

const TestimonialsSection = () => {
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
  ];

  return (
    <div className="max-w-screen  mx-auto bg-white shadow-sm p-8">
<div className="relative w-full text-center mb-6">
  <h2
    className="
      relative z-20
      font-monoIbm
      text-3xl sm:text-4xl md:text-5xl
      font-bold
      text-black
      mx-auto max-w-full md:max-w-3xl
      leading-none
    "
  >
    What our Users Say
  </h2>

  <div className="relative w-[85%] sm:w-[320px] md:w-120 h-6 mx-auto -mt-6">
    <Image
      src={UnderlineImg}
      alt="underline decoration"
      fill
      className="object-contain object-bottom scale-y-125 origin-bottom"
      priority
    />
  </div>
</div>


      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* First card: always visible */}
        <UserCard {...testimonials[0]} />

        {/* Second card: hidden on mobile */}
        <div className="  hidden md:block">
          <UserCard {...testimonials[1]} />
        </div>

        {/* Third card: hidden on mobile */}
        <div className="hidden md:block">
          <UserCard {...testimonials[2]} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
