"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import Bus from "@/components/assets/HeroSection/bus.png";
import SectionHeading from "./common/SectionHeading";

const content = {
  heading: "Why Choose RidePing",
  subheading:
    "Built for Indian schools to simplify daily operations, improve communication, and save hours of manual work.",

  features: [
    {
      title: "Save Hours of Manual Work",
      desc: "Automate attendance, fees, and reports so your staff spends less time on paperwork and more on students.",
      titleColor: "text-blue-700",
    },
    {
      title: "All-in-One School Management",
      desc: "Manage attendance, fees, results, transport, and communication from a single platform. No more juggling multiple systems.",
      titleColor: "text-green-700",
    },
    {
      title: "Better Parent Communication",
      desc: "Instant updates for attendance, homework, fees, and announcements keep parents informed and engaged.",
      titleColor: "text-teal-700",
    },
    {
      title: "Easy for Teachers & Staff",
      desc: "Simple interface designed for non-technical users. Your team can start using it from day one.",
      titleColor: "text-red-700",
    },
    {
      title: "Quick Setup & Support",
      desc: "Get started in days with onboarding support and training for your staff. We guide you at every step.",
      titleColor: "text-yellow-800",
    },
  ],
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="why"
      ref={sectionRef}
      className="bg-text-primary overflow-hidden px-4 py-14 sm:px-6 lg:px-8"
    >
      {/* ---------- HEADING ---------- */}
      <SectionHeading heading={content.heading} headingColor="text-text-secondary" />

      {/* ===================== MOBILE VIEW (EXACT IMAGE 1) ===================== */}
      <div className="relative flex flex-col gap-5 md:hidden">
        {content.features.map((feature, i) => (
          <UniversalCard
            key={feature.title}
            title={feature.title}
            desc={feature.desc}
            icon={feature.icon}
            titleColor={feature.titleColor}
            variant={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      {/* ===================== TABLET VIEW (UPDATED) ===================== */}
      <div className="mx-auto hidden max-w-5xl gap-6 md:flex lg:hidden">
        <div className="space-y-4">
          {content.features.map((feature, i) => (
            <UniversalCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
              titleColor={feature.titleColor}
              variant={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>

        <Road scrollYProgress={scrollYProgress} isTablet />
      </div>
      {/* =====================================================
          DESKTOP / LARGE (Image 2)
      ====================================================== */}
      <div className="mx-auto hidden max-w-7xl grid-cols-3 gap-20 px-8 lg:grid">
        <div className="flex flex-col items-end gap-40">
          {content.features.slice(0, 2).map((feature, i) => (
            <UniversalCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
              titleColor={feature.titleColor}
              variant={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>

        <Road scrollYProgress={scrollYProgress} />

        <div className="flex flex-col items-start gap-40">
          {content.features.slice(2, 5).map((feature, i) => (
            <UniversalCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
              titleColor={feature.titleColor}
              variant={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ROAD + BUS ================= */
function Road({ scrollYProgress, isTablet = false }) {
  const roadRef = useRef(null);
  const [maxMove, setMaxMove] = useState(0);

  useEffect(() => {
    if (!roadRef.current) return;

    const update = () => {
      const roadHeight = roadRef.current.offsetHeight;
      const busHeight = 120; // adjust to your image
      setMaxMove(roadHeight - busHeight);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const rawY = useTransform(scrollYProgress, [0.2, 0.8], [0, maxMove]);

  const busY = useSpring(rawY, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <div className="flex justify-center">
      <div
        ref={roadRef}
        className={`relative ${
          isTablet ? "h-full w-[80px]" : "h-[950px] w-[85px]"
        } overflow-hidden rounded-xl border-2 border-yellow-400 bg-[#333]`}
      >
        {/* road line */}
        <div className="absolute inset-y-6 left-1/2 w-[3px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,white_0_14px,transparent_14px_28px)]" />

        {/* bus */}
        <motion.div style={{ y: busY }} className="relative">
          <Image
            src={Bus}
            alt="Bus image"
            width={360}
            height={360}
            className="h-auto w-[150px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
function UniversalCard({ title, desc, titleColor }) {
  return (
    <div className="drop-shadow-surface w-full rounded-3xl bg-white px-6 py-6 shadow-xl">
      <h3 className={`text-xl font-bold ${titleColor} `}>{title}</h3>

      <p className="text-text-primary mt-2 text-base leading-relaxed font-semibold">{desc}</p>
    </div>
  );
}
