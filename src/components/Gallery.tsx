import { IconService } from "@/src/components/Icons";
import { ProjectGallery } from "@/src/components/ProjectGallery";
import { store } from "@/src/data/store";

export function Gallery() {
  return (
    <section id="moveis" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-deep">Trabalhos reais</p>
        <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Móveis e serviços</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Uma seleção de projetos executados pela Planejados LM: cozinhas, quartos, salas e
          ambientes comerciais com acabamento sob medida em Florianópolis.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {store.services.map((service, index) => (
            <article
              key={service.title}
              className="group relative min-h-60 border border-cream-deep bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-wine/45 hover:bg-cream/55 hover:shadow-lg hover:shadow-wine/10 sm:p-8"
            >
              <span className="absolute right-6 top-6 font-serif text-4xl leading-none text-cream-deep transition-colors duration-300 group-hover:text-bronze/35 sm:right-8 sm:top-8">
                0{index + 1}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-bronze/45 text-bronze-deep transition-colors duration-300 group-hover:border-wine/45 group-hover:text-wine">
                <IconService name={service.icon} className="h-5 w-5" />
              </div>
              <div className="mt-7 h-px w-10 bg-bronze transition-all duration-300 group-hover:w-16" />
              <h3 className="mt-4 font-serif text-2xl text-ink">{service.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{service.text}</p>
            </article>
          ))}
        </div>

        <div id="projetos" className="mt-16 scroll-mt-20 border-t border-cream-deep pt-8 sm:mt-20 sm:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-deep">Projetos executados</p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">Detalhes feitos para cada ambiente</h2>
        </div>

        <ProjectGallery categories={store.projectCategories} />
      </div>
    </section>
  );
}
