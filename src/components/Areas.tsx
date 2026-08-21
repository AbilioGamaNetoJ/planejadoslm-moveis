import { store } from "@/src/data/store";

export function Areas() {
  return (
    <section id="atendimento" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-deep">
          Áreas atendidas
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          Onde atendemos em Florianópolis
        </h2>
        <p className="mt-4 max-w-3xl text-ink-soft">
          A {store.name} é uma marcenaria de móveis planejados com sede no bairro{" "}
          {store.address.neighborhood}, em Florianópolis (SC), e atende toda a Ilha e a
          Grande Florianópolis. Por estarmos no Norte da Ilha, a visita para medição
          costuma ser mais rápida nos bairros vizinhos ao Rio Vermelho.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {store.areasServed.map((area) => (
            <article
              key={area.region}
              className="border border-cream-deep bg-paper p-6 transition-all duration-300 hover:border-wine/45 hover:shadow-lg hover:shadow-wine/10 sm:p-8"
            >
              <h3 className="font-serif text-2xl text-ink">{area.region}</h3>
              <div className="mt-3 h-px w-10 bg-bronze" />
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{area.lead}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {area.bairros.join(" · ")}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-soft">
          Não encontrou seu bairro? Fale com a gente pelo WhatsApp — atendemos toda a
          região mediante agendamento.
        </p>
      </div>
    </section>
  );
}
