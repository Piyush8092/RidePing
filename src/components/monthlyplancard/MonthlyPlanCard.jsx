import { CircleCheck } from "lucide-react";

const MonthlyPlanCard = ({ plan, onButtonClick }) => {
  return (
    <div
      className={`relative flex flex-col items-stretch justify-between rounded-3xl border-2 bg-white text-black shadow-md sm:w-[280px] md:w-[240px] lg:w-[300px] ${plan.accentColor ? `${plan.accentColor} border-2` : "border-none"}`}
    >
      {/* Recommended Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white shadow">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="px-5 pt-7 text-left">
        <h3 className="text-text-primary mt-1 text-lg font-bold">{plan.plan}</h3>

        <p className="text-text-primary mt-2 text-3xl font-extrabold">
          {plan.price}
          <span className="ml-1 text-sm font-normal text-gray-500">{plan.priceLabel}</span>
        </p>

        {/* Min Billing */}
        {plan.minBilling && (
          <p className="mt-1 text-xs font-medium text-gray-500">👉 {plan.minBilling}</p>
        )}

        {/* Setup Fee */}
        {plan.setupFee && (
          <p className="mt-1 text-xs font-semibold text-purple-600">+ {plan.setupFee}</p>
        )}
      </div>

      <hr className="my-3 border-t border-gray-200" />

      {/* Features */}
      <ul className="flex-1 space-y-2 px-5 pb-2">
        <p className="text-text-primary mb-2 text-sm font-medium">What&apos;s included:</p>
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CircleCheck className="fill-info mt-0.5 h-5 w-5 shrink-0 text-white" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-3 px-5 pb-5">
        <button
          onClick={onButtonClick}
          className="bg-primary flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-black transition-opacity hover:opacity-90 active:scale-95"
        >
          {plan.buttonText || "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default MonthlyPlanCard;
