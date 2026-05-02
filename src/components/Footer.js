"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form, Mail, Phone } from "lucide-react";
import PlayBTN from "@/components/assets/PlayBTN.png";
import Logo from "@/components/assets/logo-footer.svg";
import ContactUsForm from "./ContactUsForm";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <footer id="contact" className="bg-[#1F1F1F] px-6 py-12 text-zinc-400 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/">
              <Image src={Logo} alt="RidePing Logo" width={163} height={51} />
            </Link>
            <div className="mt-6 w-44 cursor-pointer transition-opacity hover:opacity-90">
              <Image src={PlayBTN} alt="Get it on Google Play Button" priority />
            </div>
          </div>

          <div>
            <h4 className="text-primary mb-4 text-xl font-semibold tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary text-amber-50 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#plans" className="hover:text-primary text-amber-50 transition">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-primary text-amber-50 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-primary text-amber-50 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#why" className="hover:text-primary text-amber-50 transition">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms Links */}
          <div>
            <h4 className="text-primary mb-4 text-xl font-semibold tracking-wider">
              Privacy and Terms
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary text-amber-50 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-primary text-amber-50 transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-primary mb-4 text-xl font-semibold tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="group block">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="group-hover:text-primary" />
                    <span className="group-hover:text-primary text-sm text-amber-50 transition-colors">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="group block">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="group-hover:text-primary" />
                    <span className="group-hover:text-primary text-sm text-amber-50 transition-colors">
                      {siteConfig.contact.displayPhone}
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <div
                  onClick={() => setShowContactForm(true)}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <Form size={18} className="group-hover:text-primary" />
                  <span className="group-hover:text-primary text-sm text-amber-50 transition-colors">
                    Contact Form
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-zinc-800 pt-8 text-sm md:flex-row md:items-center md:gap-4">
          <p className="text-amber-50">
            ©{new Date().getFullYear()} RidePing. All rights reserved.
          </p>
          <a
            href="https://www.clienzon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50"
          >
            A product by ClienZon
          </a>
        </div>
      </div>

      {showContactForm && <ContactUsForm onClose={() => setShowContactForm(false)} />}
    </footer>
  );
};

export default Footer;
