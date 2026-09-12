"use client";

import { useState } from "react";
import { siteContent } from "@/data/content";

const inputClasses =
  "rounded border border-brand-dark/20 bg-brand-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/40";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "submitted" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

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
      <input type="text" name="name" placeholder="Your name" required className={inputClasses} />
      <input type="tel" name="phone" placeholder="Phone number" required className={inputClasses} />
      <input type="email" name="email" placeholder="Email address" className={inputClasses} />
      <input type="text" name="address" placeholder="Property address" className={inputClasses} />
      <select name="service" defaultValue="" className={inputClasses}>
        <option value="" disabled>Service interested in</option>
        {siteContent.serviceGroups.map((group) => (
          <option key={group.title} value={group.title}>{group.title}</option>
        ))}
      </select>
      <textarea name="message" placeholder="Tell us about your project" rows={4} className={inputClasses} />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded bg-brand-green px-6 py-3 font-semibold text-brand-white hover:bg-brand-green-light disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Submit Request"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — please try calling us instead.</p>
      )}
    </form>
  );
}