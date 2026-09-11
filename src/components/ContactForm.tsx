"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "submitted" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <p className="rounded border border-brand-green bg-brand-green/10 p-4 text-brand-green">
        Thanks — we&apos;ll get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="rounded border border-brand-black/20 bg-brand-white px-4 py-3 text-brand-black placeholder:text-brand-black/40"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
        className="rounded border border-brand-black/20 bg-brand-white px-4 py-3 text-brand-black placeholder:text-brand-black/40"
      />
      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows={4}
        className="rounded border border-brand-black/20 bg-brand-white px-4 py-3 text-brand-black placeholder:text-brand-black/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded bg-brand-green px-6 py-3 font-semibold text-brand-white hover:bg-brand-green-light disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Request a quote"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — please try calling us instead.</p>
      )}
    </form>
  );
}