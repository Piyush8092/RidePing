"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import curveBg from "@/components/assets/HeroSection/curvebg.png";
import curveBgTablet from "@/components/assets/HeroSection/curvebg-tablet.png";
import curveBgMobile from "@/components/assets/HeroSection/curvebg-mobile.png";
import city from "@/components/assets/HeroSection/city1.png";
import busStop from "@/components/assets/HeroSection/bustop.png";
import playbutton from "@/components/assets/HeroSection/googleplaybutton.png";
import parentComing from "@/components/assets/HeroSection/parent-coming.png";
import parentGoing from "@/components/assets/HeroSection/parent-going.png";
import schoolbusLeft from "@/components/assets/HeroSection/schoolbus-left.png";
import schoolbusRight from "@/components/assets/HeroSection/schoolbus-right.png";
import leftMsg1 from "@/components/assets/HeroSection/left-msg-1.png";
import leftMsg2 from "@/components/assets/HeroSection/left-msg-2.png";
import leftMsg3 from "@/components/assets/HeroSection/left-msg-3.png";
import rightMsg1 from "@/components/assets/HeroSection/right-msg-1.png";

export default function HeroSection() {
  const busControls = useAnimation();
  const parentControls = useAnimation();
  const leftMsgControls = useAnimation();
  const rightMsgControls = useAnimation();

  const [leftMsgImage, setLeftMsgImage] = useState(leftMsg1);

  const [busDir, setBusDir] = useState("right");
  const [parentType, setParentType] = useState("coming");

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      while (isMounted) {
        // RESET
        setBusDir("right");
        setParentType("coming");

        await busControls.set({ left: "110%", opacity: 1 });
        await parentControls.set({ left: "10%", opacity: 1 });

        // RESET MESSAGES
        await rightMsgControls.set({ opacity: 0, y: 20 });
        await leftMsgControls.set({ opacity: 0, y: 20 });

        // RIGHT MSG 1
        rightMsgControls.start({
          opacity: 1,
          y: -60,
          transition: { duration: 0.6 },
        });

        setLeftMsgImage(leftMsg1);

        // LEFT MSG 1
        leftMsgControls.start({
          opacity: 1,
          y: -50,
          transition: { duration: 0.8 },
        });

        // SCHOOL → HOME (right to left)
        await busControls.start({
          left: "-30%",
          transition: { duration: 5.5, ease: "linear" },
        });

        rightMsgControls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.4 },
        });

        await new Promise((r) => setTimeout(r, 400));

        leftMsgControls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.5 },
        });

        // SWITCH DIRECTION (instant)
        setBusDir("left");
        await busControls.set({ left: "-30%" });

        // PARENT COMING
        setParentType("coming");
        parentControls.start({
          left: "36%",
          opacity: 1,
          transition: { duration: 3, ease: "linear" },
        });

        // RETURN TO PICKUP
        await busControls.start({
          left: "27%",
          transition: { duration: 4, ease: "linear" },
        });

        // PICKUP PAUSE
        await new Promise((r) => setTimeout(r, 700));

        // HIDE COMING PARENT
        await parentControls.start({
          opacity: 0,
          transition: { duration: 0.3 },
        });

        setLeftMsgImage(leftMsg2);

        // LEFT MSG 2 (Pickup reached)
        await leftMsgControls.start({
          opacity: 1,
          y: -50,
          transition: { duration: 0.6 },
        });

        await new Promise((r) => setTimeout(r, 1200));

        leftMsgControls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.5 },
        });

        // PARENT GOING BACK
        setParentType("going");
        await parentControls.set({ left: "36%", opacity: 1 });

        parentControls.start({
          left: "10%",
          transition: { duration: 2, ease: "linear" },
        });

        parentControls.start({
          opacity: 0,
          transition: { duration: 4, ease: "easeIn" },
        });

        // BUS GOES TO SCHOOL
        await busControls.start({
          left: "74%",
          transition: { duration: 4, ease: "linear" },
        });

        await new Promise((r) => setTimeout(r, 700));

        // LEFT MSG 3 (School reached)
        setLeftMsgImage(leftMsg3);

        await leftMsgControls.start({
          opacity: 1,
          y: -50,
          transition: { duration: 0.7, ease: "easeOut" },
        });

        await new Promise((r) => setTimeout(r, 1500));

        leftMsgControls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.6, ease: "easeIn" },
        });

        // EXIT SCREEN
        await busControls.start({
          left: "110%",
          transition: { duration: 3, ease: "linear" },
        });

        // LOOP GAP
        await new Promise((r) => setTimeout(r, 1000));
      }
    };

    run();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-screen flex flex-col justify-between">
      {/* ===================== MAIN HERO ===================== */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 pt-6">
        {/* ========== LEFT CONTENT ========== */}
        <div className="space-y-4 flex-1 z-50!">
          <h1 className="lg:text-[48px] md:text-[40px] text-[36px] tracking-tight font-bold text-[#1F1F1F] text-center lg:text-start">
            Smart School Transport Tracking{" "}
            <br className="hidden sm:block 2xl:hidden" /> for Parents & Schools
          </h1>
          {/* Subtitle */}
          <p className="lg:text-[32px] md:text-[24px] text-[20px] text-[#1565C0] font-medium text-center lg:text-start wrap-break-word">
            Real-time location, pickup & drop alerts, and{" "}
            <br className="hidden md:block lg:hidden" /> automatic attendance
            all in one simple app.
          </p>

          {/* Buttons */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-6 sm:w-max">
              <button className="w-full sm:w-auto bg-[#FFC857] text-black font-semibold px-2 py-3 rounded-lg shadow-md transition max-w-54">
                Contact Us →
              </button>

              <Image
                src={playbutton}
                alt="Google Play"
                className="cursor-pointer aspect-2 object-fill h-full"
              />
            </div>
          </div>
        </div>

        {/* ========== RIGHT SIDE IMAGE AREA ========== */}
        <div className="relative flex justify-end items-center lg:pt-4 z-50!">
          {/* Bus + Family Illustration (example placeholder) */}
          {/* Bus + Family Illustration (example placeholder) */}
          <Image
            src={busStop}
            alt="Bus Illustration"
            className="relative z-10 w-[370px] md:w-[400px] lg:w-110 xl:w-120"
          />

          {/* Mobile Phone Mock */}
        </div>
      </div>

      {/* ===================== CURVE BACKGROUND ===================== */}
      <div className="absolute bottom-0 left-0 w-full hidden lg:block">
        <Image
          src={curveBg}
          alt="Curve Background"
          className="w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full hidden md:block lg:hidden">
        <Image
          src={curveBgTablet}
          alt="Curve Background"
          className="w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full md:hidden">
        <Image
          src={curveBgMobile}
          alt="Curve Background"
          className="w-full object-cover"
        />
      </div>
      {/* ===================== CITY STRIP ===================== */}
      <div className="w-full relative overflow-visible">
        <Image
          src={city}
          alt="City Background"
          className="w-full object-cover z-70! relative"
        />

        {/* BUS */}
        <motion.div
          animate={busControls}
          className={`z-75! absolute w-[100px] sm:w-[150px] lg:w-[250px] ${busDir === "right" ? "bottom-[3%]" : "bottom-[12%]"} z-10`}
        >
          <Image
            src={busDir === "right" ? schoolbusRight : schoolbusLeft}
            alt="School Bus"
            priority
          />
        </motion.div>

        {/* PARENT */}
        <motion.div
          initial={{ left: "10%" }}
          animate={parentControls}
          className="z-70! absolute bottom-[20%] w-5 sm:w-8 md:w-10"
        >
          <Image
            src={parentType === "coming" ? parentComing : parentGoing}
            alt="Parent"
          />
        </motion.div>

        {/* RIGHT MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={rightMsgControls}
          className="absolute right-[5%] bottom-[35%] w-[100px] z-60"
        >
          <Image src={rightMsg1} alt="Right Message" />
        </motion.div>

        {/* LEFT MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={leftMsgControls}
          className="absolute left-[1%] bottom-[35%] w-[100px] z-60"
        >
          <Image src={leftMsgImage} alt="Left Message" />
        </motion.div>
      </div>
    </section>
  );
}
