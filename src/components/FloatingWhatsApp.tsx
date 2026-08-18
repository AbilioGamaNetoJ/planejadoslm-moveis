import { whatsappUrl } from "@/src/data/store";
import { IconWhatsApp } from "@/src/components/Icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      className="group fixed right-5 bottom-5 z-50 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze sm:right-7 sm:bottom-7"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-cream opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        Fale conosco
      </span>
      <span className="wa-pulse flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/30 transition-transform duration-200 hover:scale-105 active:scale-95">
        <IconWhatsApp className="h-8 w-8" />
      </span>
    </a>
  );
}
