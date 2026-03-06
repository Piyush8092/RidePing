"use client";
import Image from "next/image";
import React from "react";
import PlayBTN from "@/components/assets/PlayBTN.png";
import mailIcon from "@/components/assets/iconsfooter/mail.png";
import phoneIcon from "@/components/assets/iconsfooter/phone.png";
import formIcon from "@/components/assets/iconsfooter/form.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-900 px-6 py-12 text-zinc-400 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="mb-4 text-2xl font-semibold text-[#FFC857]">RidePing</h2>
            <div className="w-44 cursor-pointer transition-opacity hover:opacity-90">
              <Image src={PlayBTN} alt="Get it on Google Play" priority />
            </div>
          </div>

          {/* Privacy Policy Links */}
          <div>
            <h3 className="text-1xl mb-4 font-semibold tracking-wider text-[#FFC857]">
              Privacy Policy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-amber-50 transition hover:text-[#FFC857]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-50 transition hover:text-[#FFC857]">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-50 transition hover:text-[#FFC857]">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-50 transition hover:text-[#FFC857]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Terms Links */}
          <div>
            <h3 className="text-1xl mb-4 font-semibold tracking-wider text-[#FFC857]">
              Privacy and Terms
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-amber-50 transition hover:text-[#FFC857]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-50 transition hover:text-[#FFC857]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-1xl mb-4 font-semibold tracking-wider text-[#FFC857]">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="group block">
                  <div className="flex items-center gap-3">
                    <div className="relative h-6 w-6 shrink-0 transition-transform group-hover:scale-110">
                      <Image
                        src={mailIcon}
                        alt="Email"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-amber-50 transition-colors group-hover:text-[#FFC857]">
                      support@rideping.com
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <div className="flex items-center gap-3">
                    <div className="relative h-6 w-6 shrink-0 transition-transform group-hover:scale-110">
                      <Image
                        src={phoneIcon}
                        alt="Phone"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-amber-50 transition-colors group-hover:text-[#FFC857]">
                      +91 XXXXXXXX
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <div className="group flex cursor-pointer items-center gap-3">
                  <div className="relative h-6 w-6 shrink-0 transition-transform group-hover:scale-110">
                    <Image
                      src={formIcon}
                      alt="Form"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-amber-50 transition-colors group-hover:text-[#FFC857]">
                    Contact Form
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-s mt-12 flex flex-col items-start justify-between gap-2 border-t border-zinc-800 pt-8 md:flex-row md:items-center md:gap-4">
          <p className="text-amber-50">
            ©{new Date().getFullYear()} RidePing. All rights reserved.
          </p>
          <p className="text-amber-50">Designed with ❤️ by ClienZon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
