import { store } from "@/src/data/store";

export function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-deep">
          Dúvidas frequentes
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          Perguntas que sempre nos fazem
        </h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Preço, prazo, pagamento e como funciona o processo. Se ficar qualquer coisa em
          aberto, é só chamar no WhatsApp.
        </p>

        {/* Answers are always present in the HTML — <details> collapses them
            visually, but crawlers and answer engines still read the text. */}
        <div className="mt-12 divide-y divide-cream-deep border-y border-cream-deep">
          {store.faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-serif text-lg text-ink transition-colors duration-200 hover:text-wine [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg">{item.question}</h3>
                <span
                  aria-hidden
                  className="shrink-0 text-bronze transition-transform duration-300 group-open:rotate-45"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl pr-9 text-sm leading-relaxed text-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
