"use client";

import { useState } from "react";
import { siteContent } from "@/data/content";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-black text-brand-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-brand-gold">
          {siteContent.business.name}
        </span>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${siteContent.business.phones.primary}`}
          className="hidden rounded bg-brand-green px-4 py-2 font-semibold md:block hover:bg-brand-green-light"
        >
          {siteContent.business.phones.primary}
        </a>

        {/* Mobile toggle */}
        <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        >
        ☰
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-brand-green px-6 py-4 md:hidden">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${siteContent.business.phones.primary}`}
            className="hidden rounded bg-brand-green px-4 py-2 font-semibold md:block hover:bg-brand-green-light"
          >
            {siteContent.business.phones.primary}
          </a>
        </nav>
      )}
    </header>
  );
}