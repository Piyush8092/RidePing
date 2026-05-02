"use client";

import { useState } from "react";
import MonthlyPlanCard from "@/components/monthlyplancard/MonthlyPlanCard";
import SectionHeading from "./common/SectionHeading";
import WhatsAppModal from "./WhatsAppModal";

const plans = [
  {
    plan: "BASIC",
    price: "₹20",
    priceLabel: "/ student / month",
    minBilling: "Min. billing: ₹5,000/month",
    setupFee: null,
    badge: null,
    features: ["Attendance", "Homework", "Notices / announcements", "Basic parent app"],
    buttonText: "Get Started",
    whatsappMessage:
      "Hi! we are interested in the RidePing BASIC Plan (₹20/student/month). Could you share a quick demo?",
  },
  {
    plan: "PRO",
    price: "₹35",
    priceLabel: "/ student / month",
    minBilling: "Min. billing: ₹8,000/month",
    setupFee: null,
    badge: "⭐ Most Popular",
    accentColor: "border-blue-800",
    features: [
      "Everything in BASIC +",
      "Fee management 💰",
      "Results & report cards 📊",
      "Teacher + admin panel",
      "Parent notifications",
      "Basic analytics",
    ],
    buttonText: "Get Started",
    whatsappMessage:
      "Hi! we are interested in the RidePing PRO Plan (₹35/student/month). Could you share a quick demo?",
  },
  {
    plan: "PREMIUM",
    price: "₹50",
    priceLabel: "/ student / month",
    minBilling: "Min. billing: ₹10,000/month",
    setupFee: "₹25,000 one-time setup",
    badge: null,
    features: [
      "Everything in PRO +",
      "Custom branding (school app name/logo)",
      "Custom features",
      "Priority support ⚡",
      "Staff training + onboarding",
    ],
    buttonText: "Get Started",
    whatsappMessage:
      "Hi! we are interested in the RidePing PREMIUM Package (₹50/student/month + ₹25,000 one-time setup). Could you share a quick demo?",
  },
];

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="plans" className="bg-[#1F1F1F] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <SectionHeading heading={"Our Plans"} headingColor="text-text-secondary!" />

        {/* CARDS */}
        <div className="mt-2 flex justify-center">
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            {plans.map((plan, index) => (
              <MonthlyPlanCard
                key={index}
                plan={plan}
                onButtonClick={() => handleCardClick(plan)}
              />
            ))}
          </div>
        </div>

        <WhatsAppModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          planName={selectedPlan?.plan}
          message={selectedPlan?.whatsappMessage}
        />
      </div>
    </section>
  );
};

export default PricingSection;
