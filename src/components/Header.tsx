"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import Container from "@/components/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-brand-white">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={siteContent.business.logo}
            alt={siteContent.business.name}
            width={280}
            height={100}
            className="h-16 w-auto md:h-24"
            priority
          />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-lg font-medium hover:text-brand-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/quote"
          className="hidden rounded bg-brand-gold px-5 py-2 font-semibold text-brand-dark md:block hover:bg-brand-gold/90"
        >
          Get a Free Quote
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
      </Container>

      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-brand-green px-6 py-4 md:hidden">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <Link
            href="/quote"
            onClick={() => setIsMenuOpen(false)}
            className="rounded bg-brand-gold px-4 py-2 text-center font-semibold text-brand-dark"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${siteContent.business.phones.primary}`}
            className="rounded bg-brand-green px-4 py-2 text-center font-semibold"
          >
            {siteContent.business.phones.primary}
          </a>
        </nav>
      )}
    </header>
  );
}