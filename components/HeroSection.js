"use client";

import Image from "next/image";

import playbutton from "@/components/assets/HeroSection/googleplaybutton.png";
import city from "@/components/assets/HeroSection/city.png";
import house from "@/components/assets/HeroSection/house.png";
import busstop from "@/components/assets/HeroSection/bus-stop.png";
import school from "@/components/assets/HeroSection/school.png";
import mobileapp from "@/components/assets/HeroSection/screen.png";
import schoolbus from "@/components/assets/HeroSection/schoolbus.png";
import bigbus from "@/components/assets/HeroSection/School Bus.png";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* TOP HERO */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Smart School Transport <br />
            Tracking for Parents & Schools
          </h1>

          <p className="mt-6 text-lg text-blue-600 max-w-xl">
            Real-time location, pickup & drop alerts, and automatic attendance —
            all in one simple app.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="bg-amber-200 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl">
              Contact Us →
            </button>

            <div className="h-12 w-40 flex items-center">
              <Image
                src={playbutton}
                alt="Google Play"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">
          <div className="absolute w-[420px] h-[420px] bg-white rounded-full -z-10" />

          <div className="relative">
            <Image
              src={bigbus}
              alt="Bus Illustration"
              className="w-[360px] h-auto"
              priority
            />

            <div className="absolute -right-20 top-10">
              <Image
                src={mobileapp}
                alt="Mobile App"
                className="w-[180px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CITY SECTION */}
      <div className="relative bg-yellow-300 pt-24">
        <div className="absolute inset-x-0 top-0">
          <Image src={city} alt="City Skyline" className="w-full h-auto" />
        </div>

        <div className="relative max-w-7xl mx-auto flex justify-between items-end px-6">
          <Image src={house} alt="House" className="w-[220px] h-auto" />
          <Image src={busstop} alt="Bus Stop" className="w-[160px] h-auto" />
          <Image src={school} alt="School" className="w-[260px] h-auto" />
        </div>

        <div className="mt-10 bg-gray-900 h-20 relative">
          <div className="absolute inset-0 flex items-center justify-center gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-10 h-1 bg-white opacity-70" />
            ))}
          </div>

          <div className="absolute right-20 -top-10">
            <Image
              src={schoolbus}
              alt="School Bus"
              className="w-[200px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
