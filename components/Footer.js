"use client";
import Image from "next/image";
import React from "react";
import PlayBTN from "@/components/assets/PlayBTN.png";
import mailIcon from "@/components/assets/iconsfooter/mail.png";
import phoneIcon from "@/components/assets/iconsfooter/phone.png";
import formIcon from "@/components/assets/iconsfooter/form.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          
          {/* Logo */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-[#FFC857]">RidePing</h2>
            <div className="w-44 cursor-pointer hover:opacity-90 transition-opacity">
              <Image src={PlayBTN} alt="Get it on Google Play" priority />
            </div>
          </div>

          {/* Privacy Policy Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FFC857] tracking-wider text-1xl">Privacy Policy</h3>
            <ul className="space-y-2 text-sm ">
              <li><a href="#" className="text-amber-50 hover:text-[#FFC857] transition">Home</a></li>
              <li><a href="#" className="text-amber-50 hover:text-[#FFC857] transition">Features</a></li>
              <li><a href="#" className="text-amber-50 hover:text-[#FFC857] transition">Why Choose Us</a></li>
              <li><a href="#" className="text-amber-50 hover:text-[#FFC857] transition">FAQs</a></li>
            </ul>
          </div>

          {/* Terms Links */}
          <div>
            <h3 className="text-[#FFC857] font-semibold mb-4 tracking-wider text-1xl">Privacy and Terms</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-amber-50 hover:text-[#FFC857] transition">Privacy Policy</a></li>
              <li><a href="#" className="text-amber-50 hover:text-[#FFC857] transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-[#FFC857] font-semibold mb-4 tracking-wider text-1xl">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="group block">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110 relative">
                      <Image 
                        src={mailIcon} 
                        alt="Email" 
                        width={24} 
                        height={24} 
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-amber-50 group-hover:text-[#FFC857] transition-colors">support@rideping.com</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110 relative">
                      <Image 
                        src={phoneIcon} 
                        alt="Phone" 
                        width={24} 
                        height={24} 
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-amber-50 group-hover:text-[#FFC857] transition-colors">+91 XXXXXXXX</span>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110 relative">
                    <Image 
                      src={formIcon} 
                      alt="Form" 
                      width={24} 
                      height={24} 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-amber-50 group-hover:text-[#FFC857] transition-colors">Contact Form</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 text-s">
  <p className="text-amber-50">
    © 2026 RidePing. All rights reserved.
  </p>
  <p className="text-amber-50">
    Designed with ❤️ by ClienZon
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;