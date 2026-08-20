import Image from "next/image";
import { store } from "@/src/data/store";

export function Gallery() {
  return (
    <section id="moveis" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-deep">Trabalhos reais</p>
        <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Móveis e serviços</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Uma seleção de projetos executados pela Planejados LM: cozinhas, dormitórios, salas e
          ambientes comerciais com acabamento sob medida em Florianópolis.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {store.services.map((service) => (
            <article
              key={service.title}
              className="border border-cream-deep bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lg hover:shadow-bronze-deep/10"
            >
              <div className="h-px w-10 bg-bronze" />
              <h3 className="mt-4 font-serif text-2xl text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] lg:grid-cols-4 lg:gap-4">
          {store.gallery.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20 ${
                "span" in item && item.span === "lg" ? "col-span-2 row-span-2 min-h-[280px]" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  "span" in item && item.span === "lg"
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm font-medium text-cream">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
