"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroPhones from "./HeroPhones";

/* ICON IMPORTS */
import lockIcon from "@/components/assets/appfeaturesIcons/lock.png";
import studentIcon from "@/components/assets/appfeaturesIcons/student.png";
import busIcon from "@/components/assets/appfeaturesIcons/bus.png";
import trackIcon from "@/components/assets/appfeaturesIcons/track.png";
import alertIcon from "@/components/assets/appfeaturesIcons/alert.png";
import calendarIcon from "@/components/assets/appfeaturesIcons/calender.png";
import parentIcon from "@/components/assets/appfeaturesIcons/parent.png";
import profileIcon from "@/components/assets/appfeaturesIcons/profile.png";
import languageIcon from "@/components/assets/appfeaturesIcons/language.png";
import uiIcon from "@/components/assets/appfeaturesIcons/ui.png";
import UnderlineImg from "@/components/assets/Ellipse1.png";

/* FEATURES */
const featuresLeft = [
  { text: "Secure Login & Data Protection", icon: lockIcon },
  { text: "Student Status Overview", icon: studentIcon },
  { text: "Detailed Bus Information", icon: busIcon },
  { text: "Real-Time Bus Tracking", icon: trackIcon },
  { text: "Instant Pickup & Drop Alerts", icon: alertIcon },
];

const featuresRight = [
  { text: "Smart Calendar Attendance", icon: calendarIcon },
  { text: "Manage Parent Profile", icon: parentIcon },
  { text: "Manage Student Profiles", icon: profileIcon },
  { text: "Multilingual App Support", icon: languageIcon },
  { text: "Fast, Minimal, Parent-Friendly UI", icon: uiIcon },
];

const AppFeatures = () => {
  const [mode, setMode] = useState("parent");


  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 overflow-hidden  ">
     <div className="relative w-full text-center mb-6 ">
       <h2
         className="
           relative z-20
           font-ibmPlexMono
           text-2xl sm:text-4xl md:text-5xl
           font-semibold
           text-black
           mx-auto max-w-full md:max-w-3xl
           leading-none
           realtive -top-6
         "
       >
         App Features
       </h2>
     
       <div className="relative w-[85%] sm:w-[320px] md:w-120 h-6 mx-auto -mt-6 -top-5">
         <Image
           src={UnderlineImg}
           alt="underline decoration"
           fill
           className="object-contain object-bottom scale-y-125 origin-bottom"
           priority
         />
       </div>
     </div>
      {/* TOGGLE */}
      <div className="flex justify-center mb-10 px-3">
        <div className="flex bg-black rounded-full p-1 w-full max-w-[360px] sm:max-w-[420px]">
          <button
            onClick={() => setMode("parent")}
            className={`flex-1 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base
              ${mode === "parent" ? "bg-white text-black" : "text-white"}`}
          >
            Parent
          </button>
          <button
            onClick={() => setMode("driver")}
            className={`flex-1 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base
              ${mode === "driver" ? "bg-white text-black" : "text-white"}`}
          >
            Driver
          </button>
        </div>
      </div>

      {/* PARENT DASHBOARD */}
      {mode === "parent" && (
        <div
          className="max-w-[1500px] mx-auto grid grid-cols-1 
          lg:grid-cols-[0.65fr_1.7fr_0.65fr] 
          gap-10 lg:gap-4"
        >
          {/* LEFT */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[320px] mx-auto lg:items-end  lg:relative lg:top-10 md:relative md:top-1o  relative -top-5">
            {featuresLeft.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>
         {/* CENTER – Tablet & Desktop only */}
<div className="
  relative 
  hidden 
  sm:flex 
  justify-center 
  items-center 
  -top-5
  min-h-[420px] 
  sm:min-h-[520px] 
  lg:min-h-[650px]
">
  <HeroPhones />
</div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[320px] mx-auto lg:items-start lg:relative lg:top-10 md:relative md:top-1o  relative -top-1 ">
            {featuresRight.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>
        </div>
      )}

      {/* DRIVER BLANK PAGE */}
      {mode === "driver" && (
        <div className="h-[400px] flex items-center justify-center text-gray-400 text-lg">
        
        </div>
      )}
    </section>
  );
};

export default AppFeatures;
/* FEATURE CARD */
const FeatureCard = ({ text, icon }) => (
  <div className="flex items-center gap-3 bg-[#009F8F] text-white px-4 py-4 h-[68px] rounded-[20px] shadow-md w-full font-semibold border border-white">
    <div className="relative w-10 h-9 bg-white/20 rounded-md overflow-hidden shrink-0">
      <Image src={icon} alt="" fill className="object-cover" />
    </div>
    <p className="text-sm leading-snug">{text}</p>
  </div>
);
