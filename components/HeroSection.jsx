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
<section id="home" className="relative w-full min-h-screen overflow-hidden bg-white flex flex-col pt-[72px]">


    {/* ===================== TOP CONTENT ===================== */}
    <div className="relative z-20 max-w-7xl mx-auto w-full px-4 pt-10 lg:pt-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">

        {/* ========== TEXT BLOCK ========== */}
        <div className="flex-1 text-center lg:text-left space-y-5">
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#1F1F1F] leading-tight">
            Smart School Transport Tracking <br/>
            for Parents & Schools
          </h1>

          <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#1565C0] font-medium max-w-2xl mx-auto lg:mx-0">
            Real-time location, pickup & drop alerts, and automatic
            attendance — all in one simple app.
          </p>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="bg-[#FFC857] text-black font-semibold px-6 py-3 rounded-lg shadow-md">
              Contact Us →
            </button>

            <Image
              src={playbutton}
              alt="Google Play"
              className="h-[48px] w-auto"
            />
          </div>
        </div>

        {/* ========== HERO ILLUSTRATION ========== */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={busStop}
            alt="Hero Illustration"
            className="
              w-[280px]
              sm:w-[320px]
              md:w-[380px]
              lg:w-[480px]
              xl:w-[520px]
            "
            priority
          />
        </div>
      </div>
    </div>

    {/* ===================== CURVE BACKGROUND ===================== */}
    <div className="absolute bottom-0 left-0 w-full z-10 hidden lg:block">
      <Image src={curveBg} alt="Curve Desktop" className="w-full" />
    </div>

    <div className="absolute bottom-0 left-0 w-full z-10 hidden md:block lg:hidden">
      <Image src={curveBgTablet} alt="Curve Tablet" className="w-full" />
    </div>

    <div className="absolute bottom-0 left-0 w-full z-10 md:hidden">
      <Image src={curveBgMobile} alt="Curve Mobile" className="w-full" />
    </div>

    {/* ===================== CITY + ANIMATION STRIP ===================== */}
    <div className="relative w-full z-20 mt-auto">
      <Image src={city} alt="City" className="w-full" />

      {/* BUS (animation unchanged) */}
      <motion.div
        animate={busControls}
        className={`absolute ${
          busDir === "right" ? "bottom-[3%]" : "bottom-[12%]"
        } left-0 w-[100px] sm:w-[160px] lg:w-[240px]`}
      >
        <Image
          src={busDir === "right" ? schoolbusRight : schoolbusLeft}
          alt="Bus"
        />
      </motion.div>

      {/* PARENT */}
      <motion.div
        animate={parentControls}
        className="absolute bottom-[20%] w-[20px] sm:w-[30px] md:w-[40px]"
      >
        <Image
          src={parentType === "coming" ? parentComing : parentGoing}
          alt="Parent"
        />
      </motion.div>

      {/* RIGHT MESSAGE */}
      <motion.div
        animate={rightMsgControls}
        className="absolute right-[6%] bottom-[36%] w-[90px]"
      >
        <Image src={rightMsg1} alt="Right Msg" />
      </motion.div>

      {/* LEFT MESSAGE */}
      <motion.div
        animate={leftMsgControls}
        className="absolute left-[2%] bottom-[36%] w-[90px]"
      >
        <Image src={leftMsgImage} alt="Left Msg" />
      </motion.div>
    </div>

  </section>
);

}
