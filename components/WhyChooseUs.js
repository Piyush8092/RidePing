// "use client";
// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Bus from "@/components/assets/bus.png";

// export default function WhyChooseUs() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const busY = useTransform(scrollYProgress, [0.1, 1], [0, 420]);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-black pt-10 pb-24 px-4 min-h-[100vh]"
//     >
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-white text-3xl md:text-4xl font-bold relative inline-block">
//           Why Choose Us
//           <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-yellow-400 rounded-full" />
//         </h2>
//       </div>

//       <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

//         {/* LEFT */}
//         <div className="flex flex-col gap-16 md:gap-20 items-center md:items-end">
//           <FeatureCard
//             title="Reliable"
//             desc="99% uptime with cloud-based tracking."
//             titleColor="text-blue-600"
//             align="right"
//           />
//           <FeatureCard
//             title="Fast"
//             desc="Live updates every few seconds."
//             titleColor="text-teal-500"
//             align="right"
//           />
//         </div>

//         {/* CENTER TRACK */}
//         <div className="relative flex justify-center">
//           <div className="relative w-24 h-[520px] rounded-full border-2 border-yellow-400 flex justify-center overflow-hidden">

//             {/* dashed line */}
//             <div
//               className="absolute top-6 bottom-6 w-[4px]
//               bg-[repeating-linear-gradient(to_bottom,white_0_12px,transparent_12px_24px)]"
//             />

//             {/* BUS */}
//             <motion.div
//               style={{ y: busY }}
//               className="absolute top-0 z-20"
//             >
//               <Image
//                 src={Bus}
//                 alt="Bus"
//                 width={60}
//                 height={100}
//                 priority
//               />
//             </motion.div>
//           </div>
//         </div>
//         {/* RIGHT */}
//         <div className="flex flex-col gap-16 md:gap-20 items-center md:items-start">
//           <FeatureCard
//             title="Secure"
//             desc="Encrypted data and verified drivers."
//             titleColor="text-green-600"
//             align="left"
//           />
//           <FeatureCard
//             title="Simple"
//             desc="Drivers with zero tech knowledge can use it easily."
//             titleColor="text-red-600"
//             align="left"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* FEATURE CARD */
// function FeatureCard({ title, desc, titleColor, align }) {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
//       <div
//         className={`absolute top-1/2 -translate-y-1/2 ${
//           align === "right" ? "-right-6" : "-left-6"
//         }`}
//       >
//         <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-black">
//           BUS
//         </div>
//       </div>

//       <h3 className={`text-xl font-bold ${titleColor}`}>{title}</h3>
//       <p className="text-gray-600 mt-2 text-sm">{desc}</p>
//     </div>
//   );
// }


"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, px, useScroll, useTransform } from "framer-motion";

import Bus from "@/components/assets/HeroSection/bus.png";

// icons (replace with your own)
import ReliableIcon from "@/components/assets/HeroSection/reliable.png";
import FastIcon from "@/components/assets/HeroSection/fast.png";
import SecureIcon from "@/components/assets/HeroSection/secure.png";
import SimpleIcon from "@/components/assets/HeroSection/simple.png";
import smallbus from "@/components/assets/HeroSection//smallbus.png"
import UnderlineImg from "@/components/assets/Ellipse1.png"; 


export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ✅ BUS MOVEMENT SAME
  const busY = useTransform(scrollYProgress, [0.1, 1], [0, 420]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1F1F1F] pt-14 pb-5 px-4 overflow-hidden"
    >
     <div className="relative w-full text-center mb-6">
       <h2
         className="
           relative z-20
           font-ibmPlexMono
           text-2xl sm:text-4xl md:text-5xl
           font-semibold
           text-white
           mx-auto max-w-full md:max-w-3xl
           leading-none
         "
       >
         Why Choose Us
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
     
      
{/* ✅ Main Layout */}


  <div className="hidden md:grid grid-cols-3 gap-14 items-center">

    {/* LEFT CARDS */}
    <div className="flex flex-col gap-16 items-center md:items-end  ml-10 relative -top-12 lg:gap-40" >
      <FeatureCard
        title="Reliable"
        desc="99% uptime with cloud-based tracking."
        titleColor="text-blue-600"
        icon={ReliableIcon}
        align="right"
        
      />

      <FeatureCard
        title="Fast"
        desc="Live updates every few seconds."
        titleColor="text-teal-500"
        icon={FastIcon}
        align="right"
      />
    </div>

    {/* CENTER TRACK */}
    <div className="relative justify-center hidden md:flex">
      <div className="relative w-[85px] h-[540px] rounded-xl border-2 border-[#FFC857] flex justify-center overflow-hidden bg-[#333333]">

        {/* dashed line */}
        <div
          className="absolute top-6 bottom-6 w-[3px]
          bg-[repeating-linear-gradient(to_bottom,white_0_14px,transparent_14px_28px)]"
        />

        {/* BUS */}
        <motion.div style={{ y: busY }} className="absolute top-3 z-20 ">
          <Image
  src={Bus}
  alt="Bus"
  width={550}
  height={79}
  priority
  className="w-[320px] sm:w-[420px] lg:w-[550px] h-auto"
/>
          
        </motion.div>
      </div>
    </div>

    {/* RIGHT CARDS */}
    <div className="flex flex-col gap-16 items-center md:items-start mr-10 mt-8  relative top-12 lg:gap-40">
      <FeatureCard
        title="Secure"
        desc="Encrypted data and verified drivers."
        titleColor="text-green-600"
        icon={SecureIcon}
        align="left"
      />

      <FeatureCard
        title="Simple"
        desc="Drivers with zero tech knowledge can use it easily."
        titleColor="text-red-600"
        icon={SimpleIcon}
        align="left"
      />
    </div>
  </div>

  {/* ============================ */}
  {/* ✅ MOBILE + TABLET ZIG-ZAG */}
  {/* ============================ */}
  <div className="flex flex-col gap-10 md:hidden max-w-md mx-auto ">

    {/* 1️⃣ Left Top */}
    <div className="self-start">
      <FeatureCard
        title="Reliable"
        desc="99% uptime with cloud-based tracking."
        titleColor="text-blue-600"
        icon={ReliableIcon}
        align="right"
      />
    </div>

    {/* 2️⃣ Right Below */}
    <div className="self-end mr-6">
      <FeatureCard
        title="Secure"
        desc="Encrypted data and verified drivers."
        titleColor="text-green-600"
        icon={SecureIcon}
        align="left"
      />
    </div>

    {/* 3️⃣ Left Below */}
    <div className="self-start">
      <FeatureCard
        title="Fast"
        desc="Live updates every few seconds."
        titleColor="text-teal-500"
        icon={FastIcon}
        align="right"
      />
    </div>

    {/* 4️⃣ Right Bottom */}
    <div className="self-end mr-6">
      <FeatureCard
        title="Simple"
        desc="Drivers with zero tech knowledge can use it easily."
        titleColor="text-red-600"
        icon={SimpleIcon}
        align="left"
      />
    </div>

  </div>
    </section>
  );
}

/* ✅ FEATURE CARD EXACT LIKE IMAGE */
function FeatureCard({ title, desc, titleColor, align, icon }) {
  return (
   <div className="relative bg-[#FFFFFF] rounded-2xl shadow-xl px-6 py-2 w-full max-w-[450px] flex items-center gap-4">


      {/* LEFT ICON */}
      <div className="w-14 h-14 flex items-center justify-center shrink-0">
        <Image src={icon} alt={title} width={55} height={55} />
      </div>

      {/* TEXT */}
      <div>
        <h3 className={`text-xl font-bold ${titleColor} `}>{title}</h3>
        <p className="text-gray-600 text-sm mt-1 leading-snug">
          {desc}
        </p>
      </div>

      {/* BUS CIRCLE LOGO */}
      <div
  className={`absolute top-1/2 -translate-y-1/2 ${
    align === "right"
      ? "-right-14"   // ✅ more distance from card
      : "-left-12"
  }`}
>
  <div className="w-12 h-12  rounded-full flex items-center justify-center hidden md:block ">
    
    {/* ✅ BUS LOGO IMAGE */}
    <Image
      src={smallbus}        // <-- your bus logo image
      alt="Bus Logo"
      width={80}
      height={80}
      className="object-contain"
    />

  </div>
</div>

    </div>
  );
}
