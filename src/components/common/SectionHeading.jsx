const SectionHeading = ({ heading, headingColor = "text-black" }) => {
  return (
    <div className="mb-6 flex justify-center">
      <div className="relative inline-block">
        <h2
          className={`relative z-10 text-2xl font-semibold ${headingColor} sm:text-4xl md:text-5xl`}
        >
          {heading}
        </h2>

        <svg
          viewBox="0 0 448 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full"
        >
          <ellipse cx="224" cy="5" rx="224" ry="5" fill="#FFC857" />
        </svg>
      </div>
    </div>
  );
};

export default SectionHeading;
