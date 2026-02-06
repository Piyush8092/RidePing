"use client";

import MonthlyPlanCard from "@/components/monthlyplancard/MonthlyPlanCard";
import UnderlineImg from "@/components/assets/Ellipse1.png";
import Image from "next/image";

const plans = [
  {
    plan: "Monthly Plan",
    price: "₹799",
    features: [
      "Real-time tracking",
      "Instant notifications",
      "Automated attendance",
      "Email Support",
    ],
    buttonText: "Get Started",
  },
  {
    plan: "Monthly Plan",
    price: "₹799",
    features: [
      "Real-time tracking",
      "Instant notifications",
      "Automated attendance",
      "Email Support",
    ],
    buttonText: "Get Started",
  },
  {
    plan: "Monthly Plan",
    price: "₹799",
    features: [
      "Real-time tracking",
      "Instant notifications",
      "Automated attendance",
      "Email Support",
    ],
    buttonText: "Get Started",
  },
];

const PricingSection = () => {
  return (
    <section
      id="plans"
      className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
    >
      {/* HEADING */}
      <div className="relative w-full text-center mb-10">
        <h2 className="font-ibmPlexMono text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
          Our Plans
        </h2>

        <div className="relative w-[280px] sm:w-[320px] h-6 mx-auto -mt-3">
          <Image
            src={UnderlineImg}
            alt="underline"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* CARDS */}
      <div className="flex justify-center">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6 md:gap-8
            place-items-center
            w-full
          "
        >
          {plans.map((plan, index) => (
            <MonthlyPlanCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
