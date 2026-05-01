"use client";

import React, { useState } from "react";
import Questions from "@/components/Questions.jsx";
import SectionHeading from "./common/SectionHeading";

const faqs = [
  {
    id: 1,
    question: "What is a school ERP system and how can it help our school?",
    answer:
      "A school ERP system is an all-in-one platform that helps manage daily operations like attendance, fees, results, communication, and more. It reduces manual work, improves communication with parents, and helps schools run more efficiently.",
  },
  {
    id: 2,
    question: "Is this software suitable for small and mid-sized schools?",
    answer:
      "Yes, our platform is designed specifically for Indian schools of all sizes. Whether you have 100 students or 2000+, the system scales easily and remains simple to use for staff and management.",
  },
  {
    id: 3,
    question: "How long does it take to set up the system?",
    answer:
      "Basic setup can be completed within a few days. For advanced setups with data migration, training, and custom features, it may take 1–2 weeks depending on your requirements.",
  },
  {
    id: 4,
    question: "Do teachers and parents need technical knowledge to use the app?",
    answer:
      "No, the platform is designed to be very simple and user-friendly. Teachers, parents, and admins can start using it with minimal training.",
  },
  {
    id: 5,
    question: "How does fee management work?",
    answer:
      "Schools can manage fee collection, track pending dues, generate receipts, and view reports in one place. This helps reduce manual errors and improves payment tracking.",
  },
  {
    id: 6,
    question: "How do parents receive updates and notifications?",
    answer:
      "Parents can receive updates through the mobile app, SMS, and notifications for attendance, homework, results, and important announcements.",
  },
  {
    id: 7,
    question: "Is student data safe and secure?",
    answer:
      "Yes, we use secure servers, data encryption, and role-based access to ensure that student and school data remains safe and private.",
  },
  {
    id: 8,
    question: "What kind of support do you provide?",
    answer:
      "We provide onboarding support, training for staff, and ongoing customer support via WhatsApp, call, and email depending on your plan.",
  },
  {
    id: 9,
    question: "Can the software be customized for our school?",
    answer:
      "Yes, in the Premium plan we offer custom branding, feature customization, and tailored workflows based on your school's needs.",
  },
  {
    id: 10,
    question: "Do you provide a demo before we decide?",
    answer:
      "Yes, we offer a free demo where we walk you through the platform and show how it can work for your school.",
  },
];

const FAQs = () => {
  const [showSelectedQ, setShowSelectedQ] = useState(null);

  const showAnswer = (index) => {
    setShowSelectedQ(showSelectedQ === index ? null : index);
  };

  return (
    <section id="faqs" className="faq bg-bg-primary text-text-primary px-6 py-12 md:px-20 lg:px-40">
      <div className="mx-auto max-w-5xl space-y-6">
        <SectionHeading heading={"Frequently Asked Questions"} />

        <div className="divide-border-secondary mt-4 divide-y">
          {faqs.map((d, index) => (
            <React.Fragment key={d.id}>
              <Questions
                data={d}
                onClick={() => showAnswer(index)}
                isOpen={showSelectedQ === index}
              />
              <hr className="border-border-secondary" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
