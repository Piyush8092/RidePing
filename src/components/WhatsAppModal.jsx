"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

const WhatsAppModal = ({ isOpen, onClose, planName }) => {
  const [schoolName, setSchoolName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSchoolName("");
      setMessage(
        `Hi! I'm interested in the RidePing ${planName} Plan. Could you share a quick demo?`
      );
      setErrors({});
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [isOpen, planName]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

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

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Modal Card */}
      <div
        ref={modalRef}
        className="w-full max-w-md animate-[fadeInUp_0.25s_ease] rounded-2xl bg-white p-4 shadow-2xl"
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="text-text-primary text-xl font-bold">
              Enquire about <span className="text-blue-600">{planName} Plan</span>
            </h2>
            <p className="mt-0.5 text-sm text-gray-500">
              Fill in the details and we&apos;ll connect on WhatsApp instantly.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="ml-4 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* School Name */}
          <div>
            <label htmlFor="schoolName" className="mb-1 block text-sm font-medium text-gray-700">
              School / Institute Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={firstInputRef}
              id="schoolName"
              type="text"
              value={schoolName}
              onChange={(e) => {
                setSchoolName(e.target.value);
                if (errors.schoolName) setErrors((prev) => ({ ...prev, schoolName: "" }));
              }}
              placeholder="e.g. Sunshine Public School"
              className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-900 transition outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.schoolName ? "border-red-400 focus:ring-red-400" : "border-gray-300"
              }`}
            />
            {errors.schoolName && <p className="mt-1 text-xs text-red-500">{errors.schoolName}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="whatsappMsg" className="mb-1 block text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="whatsappMsg"
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
              }}
              placeholder="Type your message here..."
              className={`w-full resize-none rounded-xl border px-4 py-2.5 text-sm text-gray-900 transition outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.message ? "border-red-400 focus:ring-red-400" : "border-gray-300"
              }`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          {/* Actions */}
          <div className="flex justify-center pt-1">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-95"
            >
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M20.52 3.48A11.93 11.93 0 0012.01 0C5.38 0 .01 5.37.01 12a11.93 11.93 0 001.64 6.04L0 24l6.13-1.61A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 21.93a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.64-.23-.37A9.9 9.9 0 012.07 12C2.07 6.52 6.52 2.07 12 2.07S21.93 6.52 21.93 12 17.48 21.93 12 21.93zm5.44-7.4c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.16 8.16 0 01-2.4-1.48 9.03 9.03 0 01-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52s.2-.3.3-.5.05-.37-.02-.52-.67-1.61-.92-2.2c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.21 3.08 2.1 3.2 5.09 4.49c.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42s.25-1.3.17-1.42c-.07-.12-.27-.19-.57-.34z" />
              </svg>
              Send on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppModal;
