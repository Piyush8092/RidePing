"use client";

import Image from "next/image";

import curveBg from "@/components/assets/HeroSection/curvebg.png";
import city from "@/components/assets/HeroSection/city1.png";
import busStop from "@/components/assets/HeroSection/bustop.png";
import playbutton from "@/components/assets/HeroSection/googleplaybutton.png";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-amber-100 overflow-hidden">
      {/* ===================== MAIN HERO ===================== */}
     <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-40 grid lg:grid-cols-2 gap-10 items-start">

        {/* ========== LEFT CONTENT ========== */}
        <div>
         <h1 className="text-[38px] lg:text-[38px] font-bold leading-tight text-gray-700 whitespace-nowrap">
  Smart School Transport <br />
  Tracking for Parents & Schools
</h1>
          {/* Subtitle */}
          <p className="mt-2 text-[24px] lg:text-[24px] text-[#1565C0] font-medium max-w-xl">
            Real-time location, pickup & drop alerts, and automatic attendance —
            all in one simple app.
          </p>

          {/* Buttons */}
         <div
  className="
    mt-4
    flex flex-col
    sm:flex-row
    lg:flex-row
    items-center
    gap-4 sm:gap-6 lg:gap-6
  "
>
  <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-md transition">
    Contact Us →
  </button>

  <Image
    src={playbutton}
    alt="Google Play"
    className="w-[140px] sm:w-[170px] lg:w-[170px] cursor-pointer"
  />
</div>

        </div>

        {/* ========== RIGHT SIDE IMAGE AREA ========== */}
        <div className="relative flex justify-center items-center">
          
        

          {/* Bus + Family Illustration (example placeholder) */}
           {/* Bus + Family Illustration (example placeholder) */}
          <Image
            src={busStop}
            alt="Bus Illustration"
            className="relative z-10 w-[500px]"
          />

          {/* Mobile Phone Mock */}
          
        </div>
      </div>

      {/* ===================== CURVE BACKGROUND ===================== */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={curveBg}
          alt="Curve Background"
          className="w-full object-cover"
        />
      </div>

      {/* ===================== CITY STRIP ===================== */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={city}
          alt="City Background"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
