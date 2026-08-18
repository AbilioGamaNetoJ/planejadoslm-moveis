import Image from "next/image";
import { whatsappUrl } from "@/src/data/store";
import { IconWhatsApp } from "@/src/components/Icons";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/maps-18.jpg"
        alt="Quarto planejado com guarda-roupa branco e nicho de madeira iluminado"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/35" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:pt-32 lg:px-8 lg:pb-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
          Marcenaria sob medida · Florianópolis
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-7xl">
          Móveis planejados que unem acabamento preciso e cuidado com todo detalhe
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Cozinhas, dormitórios e marcenaria sob medida para toda a Florianópolis, do projeto à
          instalação. Atendimento direto com Evandro.
        </p>
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-[90%] items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-whatsapp/30 hover:brightness-110 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:w-auto sm:rounded-full sm:py-3.5"
          >
            <IconWhatsApp className="h-5 w-5" />
            Pedir orçamento
          </a>
          <a
            href="#moveis"
            className="inline-flex w-[90%] items-center justify-center rounded-xl border border-cream/30 px-6 py-4 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-bronze hover:text-bronze active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze sm:w-auto sm:rounded-full sm:py-3.5"
          >
            Ver trabalhos
          </a>
        </div>
      </div>

      <a
        href="#moveis"
        aria-label="Rolar para ver mais conteúdo"
        className="absolute inset-x-0 bottom-6 flex justify-center text-cream/70 transition-colors duration-200 hover:text-bronze focus-visible:text-bronze focus-visible:outline-none sm:bottom-8"
      >
        <svg
          viewBox="0 0 24 24"
          className="scroll-hint h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
