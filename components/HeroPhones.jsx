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
    setOrder(prev => {
      const arr = [...prev];
      arr.unshift(arr.pop());
      return arr;
    });
  };

  const rotatePrev = () => {
    setOrder(prev => {
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
      <div className="relative mx-auto flex justify-center items-center h-[520px]">

        {/* LARGE BACKGROUND CIRCLE */}
        <div
          className="absolute w-[560px] h-[560px] rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle at top, #2a2a2a, #0f0f0f)",
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
              <Image
                src={phone}
                alt="phone"
                width={260}
                height={400}
                className="object-contain"
              />
            </motion.div>
          );
        })}

        {/* ARROWS */}
        <div className="absolute bottom-6 flex gap-10 z-50">
          <button
            onClick={() => handleManual("prev")}
            className="w-11 h-11 rounded-full bg-black/80 text-white 
                       flex items-center justify-center text-lg
                       hover:bg-black transition relative top-10" 
          >
            ←
          </button>

          <button
            onClick={() => handleManual("next")}
            className="w-11 h-11 rounded-full bg-black/80 text-white 
                       flex items-center justify-center text-lg
                       hover:bg-black transition relative top-10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
