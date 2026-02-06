"use client";

import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import Logo from "@/components/assets/logo.png"; 
//sections for navbar

const sections = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "why", label: "Why Choose Us" },
  { id: "reviews", label: "Reviews" },
  { id: "plans", label: "Our Plans" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* ---------- SCROLL SPY ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- SMOOTH SCROLL ---------- */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setIsOpen(false);

    window.scrollTo({
      top: el.offsetTop - 64,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-[#FFC857] z-[100] shadow-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="RidePing" width={36} height={36} />
          <span className="text-2xl font-bold text-black">RidePing</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`relative font-semibold text-sm transition
                ${
                  active === sec.id
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }
              `}
            >
              {sec.label}

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
                  ${
                    active === sec.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }
                `}
              />
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : <CiMenuBurger />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
       <div className="bg-[#FFC857] rounded-bl-[160px] px-10 py-6 space-y-3 shadow-lg relative -top-2">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`block w-full text-right font-semibold text-lg
                ${
                  active === sec.id
                    ? "underline decoration-red-500 decoration-2 underline-offset-4"
                    : ""
                }
              `}
            >
              {sec.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
