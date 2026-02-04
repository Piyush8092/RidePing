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
import onetap from "@/components/assets/appfeaturesIcons/onetap.png";
import map from "@/components/assets/appfeaturesIcons/map.png";
import locationsymbol from "@/components/assets/appfeaturesIcons/locationsymbol.png";
import bulkaction  from "@/components/assets/appfeaturesIcons/bulkaction.png";
import realtime from "@/components/assets/appfeaturesIcons/realtime.png";
import livestudent from "@/components/assets/appfeaturesIcons/livestudent.png";
import endoftrip from "@/components/assets/appfeaturesIcons/endoftrip.png";
//images of phones  (parent)
import p1 from "@/components/assets/phones/p1.png";
 import p2 from "@/components/assets/phones/p2.png";
 import p3 from "@/components/assets/phones/p3.png";
 import p4 from "@/components/assets/phones/p4.png";
 import p5 from "@/components/assets/phones/p5.png";
 import circle from "@/components/assets/phones/circle.png";
 const phonesparent = [p1, p2, p3, p4, p5];
//driverimages
import d1 from "@/components/assets/phones/d1.png";
 import d2 from "@/components/assets/phones/d2.png";
 import d3 from "@/components/assets/phones/d3.png";
 import d4 from "@/components/assets/phones/d4.png";
 import d5 from "@/components/assets/phones/d5.png";
 import d6 from "@/components/assets/phones/d6.png";
 import d7 from "@/components/assets/phones/d7.png";
 import d8 from "@/components/assets/phones/d8.png";

 

const driverPhones = [d1, d2, d3, d4, d5];
/* ================= PARENT FEATURES ================= */
const parentFeaturesLeft = [
  { text: "Secure Login & Data Protection", icon: lockIcon },
  { text: "Student Status      Overview", icon: studentIcon },
  { text: "Detailed Bus Information", icon: busIcon },
  { text: "Real-Time Bus Tracking", icon: trackIcon },
  { text: "Instant Pickup & Drop Alerts", icon: alertIcon },
];

const parentFeaturesRight = [
  { text: "Smart Calendar Attendance", icon: calendarIcon },
  { text: "Manage Parent Profile", icon: parentIcon },
  { text: "Manage Student Profiles", icon: profileIcon },
  { text: "Multilingual App Support", icon: languageIcon },
  { text: "Fast, Minimal, Parent-Friendly UI", icon: uiIcon },
];

/* ================= DRIVER FEATURES ================= */
const driverFeaturesLeft = [
  { text: "Secure Driver Login", icon: lockIcon },
  { text: "Start Route With One Tap", icon: onetap },
  { text: "Smart Navigation", icon: map },
  { text: "Quick Pick-Up & Drop-Off Marking", icon: locationsymbol },
  { text: "Bulk Actions: “Pickup All” & “Drop All”", icon: bulkaction },
];

const driverFeaturesRight = [
  { text: "Real-Time Status Sync", icon: realtime },
  { text: "Live Student List", icon: livestudent },
  { text: "End-of-Trip Confirmation", icon: endoftrip },
  { text: "Multilingual App Support", icon: languageIcon },
   { text: "Fast, Minimal, Driver-Friendly UI", icon: uiIcon },
  
];

/* ================= FEATURE CARD ================= */
const FeatureCard = ({ text, icon, variant }) => {
  const isParent = variant === "parent";

  const splitLastWord = (text) => {
    const words = text.trim().split(" ");
    return {
      first: words.slice(0, -1).join(" "),
      last: words[words.length - 1],
    };
  };

  const { first, last } = splitLastWord(text);

  return (
    <div
      className={`flex flex-col sm:flex-row items-center sm:items-start
      gap-2 sm:gap-3 px-4 py-4 rounded-[20px] shadow-md w-full font-semibold
      ${isParent
        ? "bg-gradient-to-r from-[#00574E] to-[#009F8F] text-white border-1 border-[#FFFFFF] drop-shadow-[#333333]"
        : "bg-gradient-to-tr from-[#1f1f1f] to-[#333333] text-white border-1 border-[#FFFFFF] drop-shadow-[#333333]"
      }`}
    >
      {/* ICON */}
      <div className="relative w-10 h-10 rounded-md shrink-0">
        <Image src={icon} alt="" fill className="object-contain p-1" />
      </div>

     <p className="text-sm leading-snug text-center sm:text-left">
  {/* MOBILE + TABLET */}
  <span className="block lg:hidden">
    {first}
    <br />
    {last}
  </span>

  {/* DESKTOP */}
  <span className="hidden lg:inline">
    {text}
  </span>
</p>

    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const AppFeatures = () => {
  const [mode, setMode] = useState("parent");
const renderFeatures = (leftData, rightData, variant) => (
  <>
    {/* ================= MOBILE (FEATURE GRID ONLY) ================= */}
    <div className="grid grid-cols-2 gap-4 sm:hidden">
      {[...leftData, ...rightData].map((item, i) => (
        <FeatureCard key={i} {...item} variant={variant} />
      ))}
    </div>

    {/* ================= TABLET ================= */}
    <div className="hidden sm:flex lg:hidden flex-col items-center gap-10">
      {/* Phones */}
      <div className="relative w-full flex justify-center min-h-[420px]">
        {mode === "parent" && <HeroPhones images={phonesparent} />}
        {mode === "driver" && <HeroPhones images={driverPhones} />}
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-6 max-w-[700px] w-full">
        {[...leftData, ...rightData].map((item, i) => (
          <FeatureCard key={i} {...item} variant={variant} />
        ))}
      </div>
    </div>

    {/* ================= DESKTOP (EXISTING DESIGN) ================= */}
    <div
      className="hidden lg:grid max-w-[1500px] mx-auto 
      grid-cols-[0.65fr_1.7fr_0.65fr] gap-6"
    >
      {/* LEFT */}
      <div className="flex flex-col gap-6 items-end relative top-8">
        {leftData.map((item, i) => (
          <FeatureCard key={i} {...item} variant={variant} />
        ))}
      </div>

      {/* CENTER */}
      <div className="relative flex justify-center items-center min-h-[650px] -top-8">
        {mode === "parent" && <HeroPhones images={phonesparent} />}
        {mode === "driver" && <HeroPhones images={driverPhones} />}
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6 items-start relative top-8">
        {rightData.map((item, i) => (
          <FeatureCard key={i} {...item} variant={variant} />
        ))}
      </div>
    </div>
  </>
);


  return (
    <section id="features"className="w-full bg-white py-8 sm:py-12 px-4 overflow-hidden">
     {/* HEADING */}
                     <div className="relative w-full text-center mb-6">
                       <h2 className="font-ibmPlexMono text-2xl sm:text-4xl md:text-5xl font-semibold text-black -top-6 relative">
                        App Features
                       </h2>
                       <div className="relative w-[320px] h-6 mx-auto -mt-4 -top-6">
                         <Image src={UnderlineImg} alt="underline" fill className="object-contain" />
                       </div>
                     </div>

      {/* TOGGLE */}
      <div className="flex justify-center mb-10 px-3">
    <div className="flex bg-[#1F1F1F] rounded-full p-1 w-full max-w-[360px]">
          <button
            onClick={() => setMode("parent")}
            className={`flex-1 py-2 rounded-full font-bold text-lg ${
              mode === "parent" ? "bg-white text-black" : "text-white"
            }`}
          >
            Parent
          </button>
          <button
            onClick={() => setMode("driver")}
            className={`flex-1 py-2 rounded-full font-bold text-lg ${
              mode === "driver" ? "bg-white text-black" : "text-white"
            }`}
          >
            Driver
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {mode === "parent" &&
        renderFeatures(parentFeaturesLeft, parentFeaturesRight, "parent")}

      {mode === "driver" &&
        renderFeatures(driverFeaturesLeft, driverFeaturesRight, "driver")}
    </section>
  );
};

export default AppFeatures;
