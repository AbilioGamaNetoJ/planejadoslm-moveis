"use client";

import { useEffect, useState } from "react";
import { nav } from "@/src/data/nav";
import { whatsappUrl } from "@/src/data/store";
import { IconWhatsApp } from "@/src/components/Icons";
import { Logo } from "@/src/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "bg-wine/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <Logo variant="lockup" priority />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-cream/80 transition-colors duration-200 hover:text-bronze focus-visible:text-bronze focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-bronze px-4 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-cream hover:shadow-lg hover:shadow-bronze/30 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
          >
            <IconWhatsApp className="h-4 w-4" />
            Pedir orçamento
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-200 hover:border-bronze hover:text-bronze active:scale-90 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className={`${open ? "mobile-menu-panel" : ""} overflow-hidden border-t border-bronze/25 bg-gradient-to-b from-wine via-wine to-ink-deep shadow-inner shadow-black/20 md:hidden`}
      >
        <div className="gold-rule opacity-70" />
        <nav aria-label="Menu principal" className="px-3 py-1">
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${70 + index * 55}ms` }}
              className="mobile-menu-item group relative flex items-center justify-between border-b border-cream/10 px-3 py-4 font-medium tracking-wide text-cream/85 transition-all duration-300 ease-out hover:bg-cream/[0.05] hover:pl-5 hover:text-bronze active:scale-[0.985] active:bg-bronze/10 active:pl-5 focus-visible:bg-cream/[0.05] focus-visible:text-bronze focus-visible:outline-none"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-active:translate-x-1">
                {item.label}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-cream/65 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze/80 group-active:translate-x-1.5 group-active:text-bronze"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden
              >
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-bronze transition-transform duration-300 group-hover:scale-y-100 group-active:scale-y-100" />
            </a>
          ))}
        </nav>
        <div className="gold-rule mx-5 opacity-50" />
        <div className="px-5 py-5">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-deep hover:text-cream hover:shadow-bronze/30 active:translate-y-0 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
          >
            <IconWhatsApp className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            Pedir orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
