"use client";
import React from "react";
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
  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
          App Features
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-400 rounded-full" />
        </h2>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-10 px-3">
        <div className="flex bg-black rounded-full p-1 w-full max-w-[360px] sm:max-w-[420px]">
          <button className="flex-1 bg-white text-black py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base">
            Parent
          </button>
          <button className="flex-1 text-white py-2 sm:py-3 font-semibold text-sm sm:text-base">
            Driver
          </button>
        </div>
      </div>

      {/* MAIN GRID */}
     <div className="max-w-[1500px] mx-auto grid grid-cols-1 
                lg:grid-cols-[0.65fr_1.7fr_0.65fr] 
                gap-10 lg:gap-4">

        {/* LEFT FEATURES */}
        <div className="flex flex-col gap-4 sm:gap-6 
                w-full max-w-[320px] mx-auto 
                lg:max-w-[210px] 
                lg:items-end 
                lg:mr-[-20px]
                lg:justify-start
                lg:pt-6">
          {featuresLeft.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#009F8F] text-white
                         px-4 py-4
                         h-[68px]
                         rounded-[20px]
                         shadow-md w-full font-semibold border border-white"
            >
              <div className="relative w-10 h-9 bg-white/20 rounded-md shrink-0 overflow-hidden">
                <Image src={item.icon} alt="" fill className="object-cover" />
              </div>
              <p className="text-sm leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="relative flex justify-center items-center 
                        min-h-[420px] sm:min-h-[520px] lg:min-h-[650px]
                        mt-4 lg:-mt-16">
          <HeroPhones />
        </div>

        {/* RIGHT FEATURES */}
        <div className="flex flex-col gap-4 sm:gap-6 
                        w-full max-w-[320px] mx-auto 
                        lg:max-w-[210px] 
                        lg:items-start 
                        lg:ml-[-20px]">
          {featuresRight.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#009F8F] text-white
                         px-4 py-4
                         h-[68px]
                         rounded-[20px]
                         shadow-md w-full font-semibold border border-white"
            >
              <div className="relative w-10 h-9 bg-white/20 rounded-md shrink-0 overflow-hidden">
                <Image src={item.icon} alt="" fill className="object-cover" />
              </div>
              <p className="text-sm leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppFeatures;
