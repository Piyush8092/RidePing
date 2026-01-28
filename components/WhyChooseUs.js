"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Bus from "@/components/assets/bus.png";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const busY = useTransform(scrollYProgress, [0, 1], [0, 420]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black pt-10 pb-24 px-4 min-h-[200vh]"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold relative inline-block">
          Why Choose Us
          <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-yellow-400 rounded-full" />
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="flex flex-col gap-16 md:gap-20 items-center md:items-end">
          <FeatureCard
            title="Reliable"
            desc="99% uptime with cloud-based tracking."
            titleColor="text-blue-600"
            align="right"
          />
          <FeatureCard
            title="Fast"
            desc="Live updates every few seconds."
            titleColor="text-teal-500"
            align="right"
          />
        </div>

        {/* CENTER TRACK */}
        <div className="relative flex justify-center">
          <div className="relative w-24 h-[520px] rounded-full border-2 border-yellow-400 flex justify-center overflow-hidden">

            {/* dashed line */}
            <div
              className="absolute top-6 bottom-6 w-[4px]
              bg-[repeating-linear-gradient(to_bottom,white_0_12px,transparent_12px_24px)]"
            />

            {/* BUS */}
            <motion.div
              style={{ y: busY }}
              className="absolute top-0 z-20"
            >
              <Image
                src={Bus}
                alt="Bus"
                width={60}
                height={100}
                priority
              />
            </motion.div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col gap-16 md:gap-20 items-center md:items-start">
          <FeatureCard
            title="Secure"
            desc="Encrypted data and verified drivers."
            titleColor="text-green-600"
            align="left"
          />
          <FeatureCard
            title="Simple"
            desc="Drivers with zero tech knowledge can use it easily."
            titleColor="text-red-600"
            align="left"
          />
        </div>
      </div>
    </section>
  );
}

/* FEATURE CARD */
function FeatureCard({ title, desc, titleColor, align }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          align === "right" ? "-right-6" : "-left-6"
        }`}
      >
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-black">
          BUS
        </div>
      </div>

      <h3 className={`text-xl font-bold ${titleColor}`}>{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
}
