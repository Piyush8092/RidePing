"use client";

import MonthlyPlanCard from "@/components/monthlyplancard/MonthlyPlanCard";
import UnderlineImg from "@/components/assets/Ellipse1.png";
import Image from "next/image";
import SectionHeading from "./common/SectionHeading";

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
    <section id="plans" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* HEADING */}
      <SectionHeading heading={"Our Plans"} />

      {/* CARDS */}
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-1 place-items-center gap-6 md:grid-cols-3 md:gap-8">
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
