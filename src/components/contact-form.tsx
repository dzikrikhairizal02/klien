"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
      {/* Name Field */}
      <div className="relative">
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-transparent border-b border-gray-200 py-3 text-black focus:outline-none focus:border-black transition-colors duration-200 placeholder-transparent"
          placeholder="Name"
          required
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
        >
          Name
        </label>
      </div>

      {/* Email Field */}
      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-transparent border-b border-gray-200 py-3 text-black focus:outline-none focus:border-black transition-colors duration-200 placeholder-transparent"
          placeholder="Email"
          required
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
        >
          Email
        </label>
      </div>

      {/* Message Field */}
      <div className="relative">
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full bg-transparent border-b border-gray-200 py-3 text-black focus:outline-none focus:border-black transition-colors duration-200 placeholder-transparent resize-none"
          placeholder="Message"
          required
        />
        <label
          htmlFor="message"
          className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
        >
          Message
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-black text-white text-base font-medium transition-all duration-200 hover:bg-gray-800 hover:shadow-md"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
