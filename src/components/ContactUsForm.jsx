"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX, Mail, Phone } from "lucide-react";
import SectionHeading from "./common/SectionHeading";
import { siteConfig } from "@/config/site";

export default function ContactUsForm({ onClose }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.schoolName.trim()) newErrors.schoolName = "School name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\+?[\d\s\-]{7,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const formData = new FormData();
    formData.append("schoolName", formData.schoolName);
    formData.append("email", formData.email);
    formData.append("mobile", formData.mobile);
    formData.append("message", formData.message);

    try {
      setLoading(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        setEmailError(result.message || "Failed to send email");
      }

      setSubmitted(true);

      setTimeout(() => {
        handleClose();
      }, 10000);
    } catch (error) {
      setEmailError("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ schoolName: "", email: "", mobile: "", message: "" });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-bg-secondary/50 fixed inset-0 z-50 flex items-center justify-center px-2 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="border-border-secondary bg-bg-secondary relative w-full max-w-2xl rounded-4xl border p-5 shadow-2xl"
        >
          {/* Close Button */}
          <button onClick={handleClose} className="text-text-secondary absolute top-4 right-4">
            <CircleX size={26} />
          </button>

          <SectionHeading heading={"Contact Us"} headingColor="text-text-secondary text-4xl!" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#2dd4bf"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {emailError ? (
                <p className="text-sm text-red-500">{emailError}</p>
              ) : (
                <>
                  <p className="text-lg font-semibold text-white">Message Sent!</p>
                  <p className="mt-1 text-sm text-white/50">
                    We have received your Message. Our team will contact you within 24 hours via
                    email or phone.
                  </p>
                </>
              )}
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <div className="relative">
                  <label className="input-field-label">School Name</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="Enter your school name"
                    className={`input-field ${
                      errors.schoolName ? "border-red-500" : "border-border-primary"
                    }`}
                  />
                  {errors.schoolName && (
                    <p className="mt-1 text-xs text-red-400">{errors.schoolName}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="input-field-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`input-field ${
                      errors.email ? "border-red-500" : "border-border-primary"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div className="relative">
                  <label className="input-field-label">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    className={`input-field ${
                      errors.mobile ? "border-red-500" : "border-border-primary"
                    }`}
                  />
                  {errors.mobile && <p className="mt-1 text-xs text-red-400">{errors.mobile}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="relative my-6">
                <label className="input-field-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={5}
                  className={`input-field resize-none ${errors.message ? "border-red-500" : "border-border-primary"}`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-primary hover:bg-primary/80 text-text-primary block w-full rounded-xl py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="bg-border-primary h-px flex-1" />
                <span className="text-text-secondary text-xs font-semibold tracking-widest">
                  OR
                </span>
                <div className="bg-border-primary h-px flex-1" />
              </div>

              {/* Contact info */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                >
                  <Mail size={16} />
                  {siteConfig.contact.email}
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                >
                  <Phone size={16} />
                  {siteConfig.contact.displayPhone}
                </a>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
