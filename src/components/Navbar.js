"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/assets/logo.svg";
import Link from "next/link";

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

  return (
    <nav className="bg-primary fixed top-0 left-0 z-[100] h-16 w-full shadow-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/">
          <Image src={Logo} alt="RidePing" width={163} height={51} />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden gap-6 md:flex">
          {sections.map((sec) => (
            <Link
              key={sec.id}
              href={`/#${sec.id}`}
              className={`relative text-sm font-semibold transition ${
                active === sec.id ? "text-text-primary" : "text-subtext hover:text-text-primary"
              } `}
            >
              {sec.label}

              {/* UNDERLINE */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF0037] transition-all duration-300 ${
                  active === sec.id ? "w-full opacity-100" : "w-0 opacity-0"
                } `}
              />
            </Link>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button className="text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="bg-primary relative -top-2 space-y-3 rounded-bl-[160px] pt-5 shadow-lg">
          <div className="mx-6 space-y-1.5 border-t border-white py-6">
            {sections.map((sec) => (
              <Link
                key={sec.id}
                href={`/#${sec.id}`}
                className={`block w-full text-right text-lg font-semibold ${
                  active === sec.id
                    ? "underline decoration-[#FF0037] decoration-2 underline-offset-4"
                    : ""
                } `}
              >
                {sec.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
