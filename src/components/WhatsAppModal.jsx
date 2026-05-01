"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";
import SectionHeading from "./common/SectionHeading";
import { siteConfig } from "@/config/site";

const WhatsAppModal = ({ isOpen, onClose, planName }) => {
  const [schoolName, setSchoolName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSchoolName("");
      setErrors({});
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [isOpen, planName]);

  const validate = () => {
    const newErrors = {};
    if (!schoolName.trim()) newErrors.schoolName = "School name is required.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const fullMessage = `School: ${schoolName.trim()}\n Plan: ${planName}\n\n${message.trim()}`;
    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
    onClose();
  };

  const handleClose = () => {
    setSchoolName("");
    setMessage("");
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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

            <SectionHeading
              heading={`Enquire about ${planName} Plan`}
              headingColor="text-text-secondary text-4xl!"
            />

            <p className="text-text-secondary -mt-2 mb-4 text-sm">
              Share your details. Our team will connect with you on WhatsApp within minutes.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* School Name */}
              <div className="relative mb-2.5">
                <label className="input-field-label">School / Institute Name</label>
                <input
                  ref={firstInputRef}
                  type="text"
                  value={schoolName}
                  onChange={(e) => {
                    setSchoolName(e.target.value);
                    if (errors.schoolName) setErrors((prev) => ({ ...prev, schoolName: "" }));
                  }}
                  placeholder="e.g. Sunshine Public School"
                  className={`input-field ${
                    errors.schoolName ? "border-red-500" : "border-border-primary"
                  }`}
                />
                {errors.schoolName && (
                  <p className="mt-1 text-xs text-red-400">{errors.schoolName}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative my-6">
                <label className="input-field-label">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                  }}
                  placeholder="Type your message here..."
                  className={`input-field resize-none ${
                    errors.message ? "border-red-500" : "border-border-primary"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary hover:bg-primary/80 text-text-primary flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition active:scale-[0.98]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0012.01 0C5.38 0 .01 5.37.01 12a11.93 11.93 0 001.64 6.04L0 24l6.13-1.61A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 21.93a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.64-.23-.37A9.9 9.9 0 012.07 12C2.07 6.52 6.52 2.07 12 2.07S21.93 6.52 21.93 12 17.48 21.93 12 21.93zm5.44-7.4c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.16 8.16 0 01-2.4-1.48 9.03 9.03 0 01-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52s.2-.3.3-.5.05-.37-.02-.52-.67-1.61-.92-2.2c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.21 3.08 2.1 3.2 5.09 4.49c.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42s.25-1.3.17-1.42c-.07-.12-.27-.19-.57-.34z" />
                </svg>
                Get Demo on WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;
