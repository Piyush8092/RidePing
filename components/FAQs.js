"use client";
import React, { useState } from "react";
import Image from "next/image";
import Questions from "@/components/Questions.jsx";
import UnderlineImg from "@/components/assets/Ellipse1.png"; 

const FAQs = () => {
  const data = [
    { id: 1, question: "How accurate is the live location tracking?", answer: "Our system updates the vehicle’s GPS location every few seconds. Accuracy depends on the driver’s device GPS quality and network strength, but typically it stays within 5–20 meters." },
    { id: 2, question: "Do parents need to install the app to receive pickup and drop alerts?", answer: "No, parents can receive alerts via SMS and notifications without installing the app." },
    { id: 3, question: "Can drivers use the app on older or low-end phones?", answer: "Yes, the app is optimized to run smoothly on older and low-end Android devices." },
    { id: 4, question: "What happens if the driver’s phone loses network during the trip?", answer: "The app stores trip data offline and syncs automatically once the network is restored." },
    { id: 5, question: "How does the system ensure student safety and privacy?", answer: "All data is encrypted, access is role-based, and strict privacy policies are followed." },
  ];

  const [showSelectedQ, setShowSelectedQ] = useState(null);

  const showAnswer = (index) => {
    setShowSelectedQ(showSelectedQ === index ? null : index);
  };

  return (
   <section className="faq py-12 px-6 md:px-20 lg:px-40 bg-white text-black">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Title Container */}
      <div className="relative w-full text-center mb-6">
      {/* Heading */}
      <h2
        className="
          relative z-20
          font-monoIbm
          text-3xl sm:text-4xl md:text-5xl
          font-bold
          text-black
          mx-auto max-w-full md:max-w-3xl
          leading-none
        "
      >
        Frequently Asked Questions
      </h2>

      {/* Underline / Ellipse */}
      <div className="relative w-[96%] sm:w-[380px] md:w-[480px] h-7 mx-auto -mt-6">
        <Image
          src={UnderlineImg}
            alt="underline decoration"
          fill
          className="object-contain object-bottom scale-y-125 origin-bottom"
          priority
        />
      </div>
    </div>

        <div className="divide-y divide-gray-200 mt-4">
          {data.map((d, index) => (
            <React.Fragment key={d.id}>
              <Questions
                data={d}
                onClick={() => showAnswer(index)}
                isOpen={showSelectedQ === index}
              />
              <hr className="border-black/10" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;