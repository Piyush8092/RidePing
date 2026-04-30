"use client";

const PolicyLayout = ({ title, children }) => {
  return (
    <main className="bg-zinc-950 px-6 pt-[100px] pb-16 text-zinc-300 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-primary mb-8 text-3xl font-bold md:text-4xl">{title}</h1>

        <div className="space-y-10 text-sm leading-7">{children}</div>
      </div>
    </main>
  );
};

export default PolicyLayout;
