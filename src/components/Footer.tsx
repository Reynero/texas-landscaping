import { siteContent } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-brand-black py-10 text-brand-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm md:flex-row md:justify-between">
        <span className="font-display text-brand-white">{siteContent.business.name}</span>
        <nav className="flex gap-6">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand-white">
              {item.label}
            </a>
          ))}
        </nav>
        <span>© {new Date().getFullYear()} {siteContent.business.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}