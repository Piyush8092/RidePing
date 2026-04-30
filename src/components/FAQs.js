"use client";
import React, { useState } from "react";
import Image from "next/image";
import Questions from "@/components/Questions.jsx";
import UnderlineImg from "@/components/assets/Ellipse1.png";
import SectionHeading from "./common/SectionHeading";

const FAQs = () => {
  const data = [
    {
      id: 1,
      question: "How accurate is the live location tracking?",
      answer:
        "Our system updates the vehicle’s GPS location every few seconds. Accuracy depends on the driver’s device GPS quality and network strength, but typically it stays within 5–20 meters.",
    },
    {
      id: 2,
      question: "Do parents need to install the app to receive pickup and drop alerts?",
      answer:
        "No, parents can receive alerts via SMS and notifications without installing the app.",
    },
    {
      id: 3,
      question: "Can drivers use the app on older or low-end phones?",
      answer: "Yes, the app is optimized to run smoothly on older and low-end Android devices.",
    },
    {
      id: 4,
      question: "What happens if the driver’s phone loses network during the trip?",
      answer:
        "The app stores trip data offline and syncs automatically once the network is restored.",
    },
    {
      id: 5,
      question: "How does the system ensure student safety and privacy?",
      answer:
        "All data is encrypted, access is role-based, and strict privacy policies are followed.",
    },
  ];

  const [showSelectedQ, setShowSelectedQ] = useState(null);

  const showAnswer = (index) => {
    setShowSelectedQ(showSelectedQ === index ? null : index);
  };

  return (
    <section id="faqs" className="faq bg-white px-6 py-12 text-black md:px-20 lg:px-40">
      <div className="mx-auto max-w-5xl space-y-6">
        <SectionHeading heading={"Frequently Asked Questions"} />

        <div className="mt-4 divide-y divide-gray-200">
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
