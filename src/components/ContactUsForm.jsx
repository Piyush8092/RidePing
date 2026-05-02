"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";
import SectionHeading from "./common/SectionHeading";
import { siteConfig } from "@/config/site";

export default function ContactUsForm({ onClose }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.schoolName.trim()) newErrors.schoolName = "School name is required.";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const text = `Hello! I'm reaching out from *${formData.schoolName}*.\n\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");
    setSubmitted(true);

    setTimeout(() => {
      handleClose();
    }, 10000);
  };

  const handleClose = () => {
    setFormData({ schoolName: "", message: "" });
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
          <button
            aria-label="Close modal"
            onClick={handleClose}
            className="text-text-secondary absolute top-4 right-4"
          >
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
              <p className="text-lg font-semibold text-white">Opening WhatsApp!</p>
              <p className="mt-1 text-sm text-white/50">
                A WhatsApp chat has been opened with your message. Send it to reach our team
                directly.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="relative mb-2.5">
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

              {/* Message */}
              <div className="relative my-4">
                <label className="input-field-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={5}
                  className={`input-field resize-none ${
                    errors.message ? "border-red-500" : "border-border-primary"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary/80 text-text-primary flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition active:scale-[0.98]"
              >
                {/* WhatsApp icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send on WhatsApp
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
