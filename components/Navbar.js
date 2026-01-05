"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const links = [
    "Home",
    "Features",
    "Why Choose Us",
    "Reviews",
    "Our Plans",
    "FAQs",
    "Contact",
  ];

  return (
    <nav className="bg-[#FFC857]">
      <div className="h-16 items-center flex justify-between">
        <div className="text-4xl text-black font-semibold px-9">
          RidePing
        </div>

        <div className="hidden sm:block">
          {links.map((link) => (
            <a
              key={link}
              href="#"
               className="inline-block text-[#1F1F1F] text-s px-4 font-bold border-b-2 border-transparent hover:border-red-500"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="block sm:hidden px-4 text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <span className="font-bold">✕</span> : <CiMenuBurger />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-black p-2`}>
        <div className="bg-[#FFC857] rounded-lg rounded-bl-[160px] px-10 py-6 space-y-3 shadow-lg">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActiveLink(link)}
              className={`block text-right text-lg font-semibold text-[#141313]
                ${
                  activeLink === link
                    ? "underline decoration-red-500 decoration-2 underline-offset-4"
                    : "no-underline"
                }
              `}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
