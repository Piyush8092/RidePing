// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// import p1 from "@/components/assets/phones/p1.png";
// import p2 from "@/components/assets/phones/p2.png";
// import p3 from "@/components/assets/phones/p3.png";
// import p4 from "@/components/assets/phones/p4.png";
// import p5 from "@/components/assets/phones/p5.png";
// import circle from "@/components/assets/phones/circle.png";

// const phones = [p1, p2, p3, p4, p5];

// const slots = [
//   { x: 0, z: 40, scale: 1, opacity:1 },
//   { x: -90, z: 20, scale: 0.95, opacity:1 },
//   { x: -160, z: 10, scale: 0.9, opacity:1 },
//   { x: 160, z: 10, scale: 0.9, opacity:1},
//   { x: 90, z: 20, scale: 0.95, opacity:1},
// ];

// export default function HeroPhones() {
//   const [order, setOrder] = useState(phones);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOrder(prev => {
//         const arr = [...prev];
//         arr.unshift(arr.pop());
//         return arr;
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full">
//       <div className="relative mx-auto flex justify-center items-center h-[520px]">

//         {/* Circle */}
//         <Image
//           src={circle}
//           alt="circle"
//           width={560}
//           height={560}
//           className="absolute z-0"
//         />

//         {order.map((phone, i) => {
//           const slot = slots[i];

//           return (
//             <motion.div
//               key={phone.src}
//               animate={{
//                 x: slot.x,
//                 scale: slot.scale,
//                 opacity:slot.opacity,
//               }}
//               transition={{ duration: 1.8, ease: "easeInOut" }}
//               className="absolute top-1/2 -translate-y-1/2"
//               style={{ zIndex: slot.z }}
//             >
              
//               <Image
//                 src={phone}
//                 alt="phone"
//                 width={260}
//                 height={400}
//                 className="object-contain "
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// HeroPhones.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import circle from "@/components/assets/phones/circle.png";

const slots = [
  { x: 0, z: 40, scale: 1, opacity: 1 },
  { x: -90, z: 20, scale: 0.95, opacity: 1 },
  { x: -160, z: 10, scale: 0.9, opacity: 1 },
  { x: 160, z: 10, scale: 0.9, opacity: 1 },
  { x: 90, z: 20, scale: 0.95, opacity: 1 },
];

export default function HeroPhones({ images = [] }) {
  const [order, setOrder] = useState(images);

  useEffect(() => {
    if (!images.length) return;

    setOrder(images); // reset when images change

    const interval = setInterval(() => {
      setOrder(prev => {
        const arr = [...prev];
        arr.unshift(arr.pop());
        return arr;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  return (
    <section className="w-full">
      <div className="relative mx-auto flex justify-center items-center h-[520px]">

        {/* Circle */}
        <Image
          src={circle}
          alt="circle"
          width={560}
          height={560}
          className="absolute z-0"
        />

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
              transition={{ duration: 1.8, ease: "easeInOut" }}
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
      </div>
    </section>
  );
}
