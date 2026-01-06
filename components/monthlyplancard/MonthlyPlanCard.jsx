"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

const MonthlyPlanCard = ({
  plan,
  price,
  features = [],
  buttonText,
  topBorderColor = "border-black",
}) => {
  return (
    <div
      className={`w-full md:w-72 bg-white rounded-3xl shadow-md flex flex-col justify-between border-t-8 text-black ${topBorderColor} min-h-95`}
    >
      <div className="text-left px-4 pt-6">
        <h3 className="text-l font-semibold mt-2">{plan}</h3>

       <p className="mt-1 text-3xl font-bold">
  {price}
  <span className="ml-1 text-sm relative top-1 font-normal text-gray-600">
    /month
  </span>
</p>
      </div>

      <hr className="border-t border-gray-200 my-2" />

      <ul className="px-4 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-[#00D4BE]" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="px-4 pb-4 mt-2">
        <button className="w-full py-3 bg-[#FFC857] text-black font-semibold rounded-xl">
          {buttonText || "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default MonthlyPlanCard;
