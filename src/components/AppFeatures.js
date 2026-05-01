"use client";
import { useState } from "react";
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
import onetap from "@/components/assets/appfeaturesIcons/onetap.png";
import map from "@/components/assets/appfeaturesIcons/map.png";
import locationsymbol from "@/components/assets/appfeaturesIcons/locationsymbol.png";
import bulkaction from "@/components/assets/appfeaturesIcons/bulkaction.png";
import realtime from "@/components/assets/appfeaturesIcons/realtime.png";
import livestudent from "@/components/assets/appfeaturesIcons/livestudent.png";
import endoftrip from "@/components/assets/appfeaturesIcons/endoftrip.png";
//images of phones  (parent)
import p1 from "@/components/assets/phones/p1.png";
import p2 from "@/components/assets/phones/p2.png";
import p3 from "@/components/assets/phones/p3.png";
import p4 from "@/components/assets/phones/p4.png";
import p5 from "@/components/assets/phones/p5.png";
const phonesparent = [p1, p2, p3, p4, p5];
//driverimages
import d1 from "@/components/assets/phones/d1.png";
import d2 from "@/components/assets/phones/d2.png";
import d3 from "@/components/assets/phones/d3.png";
import d4 from "@/components/assets/phones/d4.png";
import d5 from "@/components/assets/phones/d5.png";
import SectionHeading from "./common/SectionHeading";

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
      className={`flex w-full flex-col items-center gap-2 rounded-[20px] px-4 py-4 font-semibold shadow-md sm:flex-row sm:items-start sm:gap-3 ${
        isParent
          ? "border-border-primary border-1 bg-gradient-to-r from-[#00574E] to-[#009F8F] text-white drop-shadow-[#333333]"
          : "from-text-primary border-border-primary border-1 bg-gradient-to-tr to-[#333333] text-white drop-shadow-[#333333]"
      }`}
    >
      {/* ICON */}
      <div className="relative h-10 w-10 shrink-0 rounded-md">
        <Image src={icon} alt="" fill className="object-contain p-1" />
      </div>

      <p className="text-center text-sm leading-snug sm:text-left">
        {/* MOBILE + TABLET */}
        <span className="block lg:hidden">
          {first}
          <br />
          {last}
        </span>

        {/* DESKTOP */}
        <span className="hidden lg:inline">{text}</span>
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
      <div className="hidden flex-col items-center gap-10 sm:flex lg:hidden">
        {/* Phones */}
        <div className="relative flex min-h-[420px] w-full justify-center">
          {mode === "parent" && <HeroPhones images={phonesparent} />}
          {mode === "driver" && <HeroPhones images={driverPhones} />}
        </div>

        {/* Features */}
        <div className="grid w-full max-w-[700px] grid-cols-2 gap-6">
          {[...leftData, ...rightData].map((item, i) => (
            <FeatureCard key={i} {...item} variant={variant} />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP (EXISTING DESIGN) ================= */}
      <div className="mx-auto hidden max-w-[1500px] grid-cols-[0.65fr_1.7fr_0.65fr] gap-6 lg:grid">
        {/* LEFT */}
        <div className="relative top-8 flex flex-col items-end gap-6">
          {leftData.map((item, i) => (
            <FeatureCard key={i} {...item} variant={variant} />
          ))}
        </div>

        {/* CENTER */}
        <div className="relative -top-8 flex min-h-[650px] items-center justify-center">
          {mode === "parent" && <HeroPhones images={phonesparent} />}
          {mode === "driver" && <HeroPhones images={driverPhones} />}
        </div>

        {/* RIGHT */}
        <div className="relative top-8 flex flex-col items-start gap-6">
          {rightData.map((item, i) => (
            <FeatureCard key={i} {...item} variant={variant} />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <section id="features" className="w-full overflow-hidden bg-white px-4 py-8 sm:py-12">
      {/* HEADING */}
      <SectionHeading heading={"App Features"} />

      {/* TOGGLE */}
      <div className="mb-10 flex justify-center px-3">
        <div className="bg-text-primary flex w-full max-w-[360px] rounded-full p-1">
          <button
            onClick={() => setMode("parent")}
            className={`flex-1 rounded-full py-2 text-lg font-bold ${
              mode === "parent" ? "bg-white text-black" : "text-white"
            }`}
          >
            Parent
          </button>
          <button
            onClick={() => setMode("driver")}
            className={`flex-1 rounded-full py-2 text-lg font-bold ${
              mode === "driver" ? "bg-white text-black" : "text-white"
            }`}
          >
            Driver
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {mode === "parent" && renderFeatures(parentFeaturesLeft, parentFeaturesRight, "parent")}

      {mode === "driver" && renderFeatures(driverFeaturesLeft, driverFeaturesRight, "driver")}
    </section>
  );
};

export default AppFeatures;
