"use client";

import { CircleCheck } from "lucide-react";

const MonthlyPlanCard = ({
  plan,
  price,
  features = [],
  buttonText,
  topBorderColor = "border-black",
}) => {
  return (
    <div
      className={`/* mobile */ /* tablet – perfect 3 cards */ /* desktop */ flex w-[280px] flex-col justify-between rounded-3xl border-t-8 bg-white text-black md:w-[240px] lg:w-[300px] ${topBorderColor} min-h-[360px]`}
    >
      <div className="px-4 pt-6 text-left">
        <h3 className="text-l mt-2 font-semibold">{plan}</h3>

        <p className="mt-1 text-3xl font-bold">
          {price}
          <span className="relative top-1 ml-1 text-sm font-normal text-gray-600">/month</span>
        </p>
      </div>

      <hr className="my-2 border-t border-gray-200" />

      <ul className="space-y-2 px-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <CircleCheck className="text-info h-5 w-5" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-2 px-4 pb-4">
        <button className="bg-primary w-full rounded-xl py-3 font-semibold text-black">
          {buttonText || "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default MonthlyPlanCard;
