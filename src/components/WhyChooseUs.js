"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import Bus from "@/components/assets/HeroSection/bus.png";
import ReliableIcon from "@/components/assets/HeroSection/reliable.png";
import FastIcon from "@/components/assets/HeroSection/fast.png";
import SecureIcon from "@/components/assets/HeroSection/secure.png";
import SimpleIcon from "@/components/assets/HeroSection/simple.png";
import SmallBus from "@/components/assets/HeroSection/smallbus.png";
import UnderlineImg from "@/components/assets/Ellipse1.png";
import SectionHeading from "./common/SectionHeading";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawBusY = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const busY = useSpring(rawBusY, {
    stiffness: 30,
    damping: 20,
  });

  return (
    <section id="why" ref={sectionRef} className="bg-text-primary overflow-hidden pt-24 pb-5">
      {/* ---------- HEADING ---------- */}
      <SectionHeading heading={"Why Choose Us"} headingColor="text-text-secondary" />

      {/* ===================== MOBILE VIEW (EXACT IMAGE 1) ===================== */}
      <div className="relative -top-8 flex flex-col gap-5 px-5 md:hidden">
        <UniversalCard
          title="Reliable"
          desc="99% uptime with cloud-based tracking."
          icon={ReliableIcon}
          titleColor="text-[#1565C0]"
          variant="left"
        />

        <UniversalCard
          title="Secure"
          desc="Encrypted data and verified drivers."
          icon={SecureIcon}
          titleColor="text-success"
          variant="right"
        />

        <UniversalCard
          title="Fast"
          desc="Live updates every few seconds."
          icon={FastIcon}
          titleColor="text-info"
          variant="left"
        />

        <UniversalCard
          title="Simple"
          desc="Drivers with zero tech knowledge can use it easily."
          icon={SimpleIcon}
          titleColor="text-error"
          variant="right"
        />
      </div>

      {/* ===================== TABLET VIEW (UPDATED) ===================== */}
      <div className="mx-auto hidden max-w-5xl gap-6 md:flex lg:hidden">
        <div className="flex w-[50%] flex-col justify-between py-4">
          <UniversalCard
            title="Reliable"
            desc="99% uptime with cloud-based tracking."
            icon={ReliableIcon}
            titleColor="text-blue-600"
            variant="right"
          />

          <UniversalCard
            title="Secure"
            desc="Encrypted data and verified drivers."
            icon={SecureIcon}
            titleColor="text-green-600"
            variant="left"
          />

          <UniversalCard
            title="Fast"
            desc="Live updates every few seconds."
            icon={FastIcon}
            titleColor="text-teal-500"
            variant="right"
          />

          <UniversalCard
            title="Simple"
            desc="Drivers with zero tech knowledge can use it easily."
            icon={SimpleIcon}
            titleColor="text-red-600"
            variant="left"
          />
        </div>

        {/* RIGHT : ROAD + BUS */}
        <div className="flex min-h-screen w-[40%] justify-center pb-3">
          <div className="relative h-full w-[80px] overflow-hidden rounded-xl border-2 border-yellow-400 bg-[#333]">
            {/* dashed center line */}
            <div className="absolute top-6 bottom-6 left-1/2 w-[3px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,white_0_14px,transparent_14px_28px)]" />

            {/* moving bus */}
            <motion.div
              style={{ y: busY }}
              className="absolute top-4 left-1/2 z-20 -translate-x-1/2"
            >
              <Image src={Bus} alt="Bus" width={420} height={60} priority />
            </motion.div>
          </div>
        </div>
      </div>
      {/* =====================================================
          DESKTOP / LARGE (Image 2)
      ====================================================== */}
      <div className="mx-auto hidden max-w-7xl grid-cols-3 gap-20 px-8 lg:grid">
        <div className="flex flex-col items-end gap-40">
          <UniversalCard
            title="Reliable"
            desc="99% uptime with cloud-based tracking."
            icon={ReliableIcon}
            titleColor="text-blue-600"
            variant="right"
          />
          <UniversalCard
            title="Fast"
            desc="Live updates every few seconds."
            icon={FastIcon}
            titleColor="text-teal-500"
            variant="right"
          />
        </div>

        <Road busY={busY} />

        <div className="flex flex-col items-start gap-40">
          <UniversalCard
            title="Secure"
            desc="Encrypted data and verified drivers."
            icon={SecureIcon}
            titleColor="text-green-600"
            variant="left"
          />
          <UniversalCard
            title="Simple"
            desc="Drivers with zero tech knowledge can use it easily."
            icon={SimpleIcon}
            titleColor="text-red-600"
            variant="left"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= ROAD + BUS ================= */
function Road({ busY }) {
  return (
    <div className="flex justify-center">
      <div className="relative h-[950px] w-[85px] overflow-hidden rounded-xl border-2 border-yellow-400 bg-[#333]">
        <div className="absolute inset-y-6 left-1/2 w-[3px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,white_0_14px,transparent_14px_28px)]" />
        <motion.div style={{ y: busY }} className="absolute top-6 left-1/2 -translate-x-1/2">
          <Image src={Bus} alt="Bus" width={550} />
        </motion.div>
      </div>
    </div>
  );
}
function UniversalCard({
  title,
  desc,
  icon,
  titleColor,
  variant = "left", // left | right
}) {
  const isIconRight = variant === "right";

  return (
    <div className="drop-shadow-surface w-full rounded-3xl bg-white px-8 py-0 shadow-xl sm:px-8 sm:py-6">
      <div
        className={`flex items-center justify-between gap-6 ${isIconRight ? "flex-row-reverse" : "flex-row"} `}
      >
        {/* ICON */}
        <div className="flex w-14 shrink-0 justify-center sm:w-16">
          <Image src={icon} alt={title} width={64} height={64} />
        </div>

        {/* TEXT (OPPOSITE SIDE) */}
        <div className={`max-w-[75%] ${isIconRight ? "text-left" : "text-right"} `}>
          <h3 className={`text-3xl font-bold sm:text-xl ${titleColor} `}>{title}</h3>

          <p className="text-text-primary mt-2 text-2xl leading-relaxed font-semibold sm:text-base">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
