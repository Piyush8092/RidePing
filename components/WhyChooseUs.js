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
    <section id="why"
      ref={sectionRef}
      className="bg-[#1F1F1F] pt-24 pb-5 overflow-hidden "
    >
      {/* ---------- HEADING ---------- */}
     <div className="relative w-full text-center mb-6">
  <h2
    className="
      relative z-20
      font-ibmPlexMono
      text-2xl sm:text-4xl md:text-5xl
      font-semibold
      text-white
      mx-auto max-w-full md:max-w-3xl
      leading-none -top-10
    "
  >
    Why Choose Us
  </h2>

  <div className="relative w-[85%] sm:w-[320px] md:w-120 h-6 mx-auto -mt-6 -top-10">
    <Image
      src={UnderlineImg}
      alt="underline decoration"
      fill
      className="object-contain object-bottom scale-y-125 origin-bottom"
      priority
    />
  </div>
</div>


      {/* ===================== MOBILE VIEW (EXACT IMAGE 1) ===================== */}
      <div className="md:hidden flex flex-col gap-5  px-5 relative -top-8">
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
    titleColor="text-[#2E7D32]"
    variant="right"
  />

  <UniversalCard
    title="Fast"
    desc="Live updates every few seconds."
    icon={FastIcon}
    titleColor="text-[#00D4BE]"
    variant="left"
  />

  <UniversalCard
    title="Simple"
    desc="Drivers with zero tech knowledge can use it easily."
    icon={SimpleIcon}
    titleColor="text-[#C62828]"
    variant="right"
  />
</div>



  {/* ===================== TABLET VIEW (UPDATED) ===================== */}
 <div className="hidden md:flex lg:hidden max-w-5xl mx-auto gap-6">
  <div className="flex flex-col justify-between w-[50%] py-4">

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
  <div className="flex justify-center w-[40%] min-h-screen pb-3">

    <div className="relative w-[80px] h-full rounded-xl border-2 border-yellow-400 bg-[#333] overflow-hidden">

      {/* dashed center line */}
      <div
        className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[3px]
        bg-[repeating-linear-gradient(to_bottom,white_0_14px,transparent_14px_28px)]"
      />

      {/* moving bus */}
      <motion.div
        style={{ y: busY }}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-20"
      >
        <Image
          src={Bus}
          alt="Bus"
          width={420}
          height={60}
          priority
        />
      </motion.div>

    </div>
  </div>
</div>
    {/* =====================================================
          DESKTOP / LARGE (Image 2)
      ====================================================== */}
     <div className="hidden lg:grid grid-cols-3 gap-20 max-w-7xl mx-auto px-8">
  <div className="flex flex-col gap-40 items-end">
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

  <div className="flex flex-col gap-40 items-start">
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
    <div className="flex justify-center ">
      <div className="relative w-[85px] h-[950px] rounded-xl border-2 border-yellow-400 bg-[#333] overflow-hidden">
        <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-[3px]
          bg-[repeating-linear-gradient(to_bottom,white_0_14px,transparent_14px_28px)]"
        />
        <motion.div style={{ y: busY }} className="absolute top-6 left-1/2 -translate-x-1/2">
          <Image src={Bus} alt="Bus" width={550} />
        </motion.div>
      </div>
    </div>
  )
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
    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        px-8 sm:px-8
        py-0 sm:py-6
        w-full
        drop-shadow-[#9A9A9A]
      "
    >
      <div
        className={`
          flex
          items-center
          justify-between
          gap-6
          ${isIconRight ? "flex-row-reverse" : "flex-row"}
        `}
      >
        {/* ICON */}
        <div className="w-14 sm:w-16 shrink-0 flex justify-center">
          <Image src={icon} alt={title} width={64} height={64} />
        </div>

        {/* TEXT (OPPOSITE SIDE) */}
        <div
          className={`
            max-w-[75%]
            ${isIconRight ? "text-left" : "text-right"}
          `}
        >
          <h3
            className={`
              font-bold
             text-3xl sm:text-xl
              ${titleColor}
            `}
          >
            {title}
          </h3>

          <p className="text-[#1F1F1F] text-2xl  sm:text-base mt-2 leading-relaxed font-semibold">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

