"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const slots = [
  { x: 0, z: 40, scale: 1, opacity: 1 },
  { x: -90, z: 20, scale: 0.95, opacity: 1 },
  { x: -160, z: 10, scale: 0.9, opacity: 1 },
  { x: 160, z: 10, scale: 0.9, opacity: 1 },
  { x: 90, z: 20, scale: 0.95, opacity: 1 },
];

export default function HeroPhones({ images = [] }) {
  const [order, setOrder] = useState(images);
  const intervalRef = useRef(null);

  const rotateNext = () => {
    setOrder((prev) => {
      const arr = [...prev];
      arr.unshift(arr.pop());
      return arr;
    });
  };

  const rotatePrev = () => {
    setOrder((prev) => {
      const arr = [...prev];
      arr.push(arr.shift());
      return arr;
    });
  };

  useEffect(() => {
    if (!images.length) return;

    setOrder(images);
    intervalRef.current = setInterval(rotateNext, 4000);

    return () => clearInterval(intervalRef.current);
  }, [images]);

  const handleManual = (dir) => {
    clearInterval(intervalRef.current);
    dir === "next" ? rotateNext() : rotatePrev();
    intervalRef.current = setInterval(rotateNext, 4000);
  };

  if (!images.length) return null;

  return (
    <section className="w-full">
      <div className="relative mx-auto flex h-[520px] items-center justify-center">
        {/* LARGE BACKGROUND CIRCLE */}
        <div
          className="absolute z-0 h-[560px] w-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle at top, #2a2a2a, #0f0f0f)",
          }}
        />

        {/* PHONES */}
        {order.map((phone, i) => {
          const slot = slots[i];

          return (
            <motion.div
              key={phone.src || i}
              animate={{
                x: slot.x,
                scale: slot.scale,
                opacity: slot.opacity,
              }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ zIndex: slot.z }}
            >
              <Image src={phone} alt="phone" width={260} height={400} className="object-contain" />
            </motion.div>
          );
        })}

        {/* ARROWS */}
        <div className="absolute bottom-6 z-50 flex gap-10">
          <button
            onClick={() => handleManual("prev")}
            className="relative top-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-lg text-white transition hover:bg-black"
          >
            ←
          </button>

          <button
            onClick={() => handleManual("next")}
            className="relative top-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-lg text-white transition hover:bg-black"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
