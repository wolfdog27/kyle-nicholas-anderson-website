"use client";

import { useState } from "react";

const inputStyle = {
  backgroundColor: "#ede8e2",
  border: "1px solid #d4ccc4",
  color: "#2c1810",
  fontFamily: "var(--font-source-sans), sans-serif",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start justify-center gap-4">
        <p
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2c1810" }}
          className="text-2xl font-light italic"
        >
          Thank you!
        </p>
        <p
          style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#6b4226" }}
          className="text-base"
        >
          Your message has been received. Kyle will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#9b8070" }}
            className="text-xs tracking-widest uppercase"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            style={inputStyle}
            className="px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b4513]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#9b8070" }}
            className="text-xs tracking-widest uppercase"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            style={inputStyle}
            className="px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b4513]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#9b8070" }}
          className="text-xs tracking-widest uppercase"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          style={inputStyle}
          className="px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b4513]"
        >
          <option value="">Select a subject…</option>
          <option value="Booking">Booking / Casting</option>
          <option value="Coaching">Private Coaching</option>
          <option value="College Audition Prep">College Audition Prep</option>
          <option value="Teaching Artist">Teaching Artist / Residency</option>
          <option value="General">General Inquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          style={{ fontFamily: "var(--font-source-sans), sans-serif", color: "#9b8070" }}
          className="text-xs tracking-widest uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          style={inputStyle}
          className="px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b4513] resize-none"
        />
      </div>

      {status === "error" && (
        <p
          style={{ color: "#c0392b", fontFamily: "var(--font-source-sans), sans-serif" }}
          className="text-sm"
        >
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          backgroundColor: "#8b4513",
          color: "#f5f0eb",
          fontFamily: "var(--font-source-sans), sans-serif",
        }}
        className="self-start text-xs tracking-widest uppercase px-10 py-4 hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
