import React from "react";

const Questions = ({ data, onClick, isOpen }) => {
  return (
    <div className="overflow-hidden border-b border-white/25 bg-white last:border-b-0">
      <div
        onClick={onClick}
        className="flex cursor-pointer items-start justify-between gap-8 py-4 text-xl text-black"
      >
        <h1 className="text-2xl font-semibold text-black/90">{data.question}</h1>
        <span
          className={`text-3xl font-bold transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <p
        className={`max-h-0 text-lg text-black opacity-90 duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        {data.answer}
      </p>
    </div>
  );
};

export default Questions;
