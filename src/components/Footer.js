"use client";
import Image from "next/image";
import Link from "next/link";
import PlayBTN from "@/components/assets/PlayBTN.png";
import mailIcon from "@/components/assets/iconsfooter/mail.png";
import phoneIcon from "@/components/assets/iconsfooter/phone.png";
import formIcon from "@/components/assets/iconsfooter/form.png";
import Logo from "@/components/assets/logo-footer.svg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1F1F1F] px-6 py-12 text-zinc-400 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/">
              <Image src={Logo} alt="RidePing" width={163} height={51} />
            </Link>
            <div className="mt-6 w-44 cursor-pointer transition-opacity hover:opacity-90">
              <Image src={PlayBTN} alt="Get it on Google Play" priority />
            </div>
          </div>

          <div>
            <h3 className="text-1xl text-primary mb-4 font-semibold tracking-wider">Company</h3>
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
            <h3 className="text-1xl text-primary mb-4 font-semibold tracking-wider">
              Privacy and Terms
            </h3>
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
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-1xl text-primary mb-4 font-semibold tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@rideping.com" className="group block">
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
                    <span className="group-hover:text-primary text-sm text-amber-50 transition-colors">
                      contact@rideping.com
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="tel:+919002831877" className="group block">
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
                    <span className="group-hover:text-primary text-sm text-amber-50 transition-colors">
                      +91 9002831877
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
                  <span className="group-hover:text-primary text-sm text-amber-50 transition-colors">
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
          <a
            href="https://www.clienzon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50"
          >
            Designed with ❤️ by ClienZon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
