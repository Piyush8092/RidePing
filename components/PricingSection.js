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
    <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="relative w-full text-center mb-6  ">
        <h2 className="relative z-20 text-48 font-bold   sm:text-3xl md:text-4xl  text-white leading-none font-ibmPlexMono">
          Our Plans
        </h2>

       <div className="flex justify-center -mt-1.5">
  <Image
    src={UnderlineImg}
    alt="underline decoration"
    width={190}
    height={90}
    className="object-contain scale-y-125 origin-center"
    priority
  />
</div>
      </div>

      {/* Cards Wrapper (CENTERED & CLOSER) */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-full md:w-[280px] lg:w-[300px]"
            >
              <MonthlyPlanCard
                plan={plan.plan}
                price={plan.price}
                features={plan.features}
                buttonText={plan.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
