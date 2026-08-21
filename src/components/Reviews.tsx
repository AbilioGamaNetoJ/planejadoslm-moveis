import { store } from "@/src/data/store";

const STAR_PATH = "M10 1.8 12.5 7l5.7.8-4.1 4 1 5.6L10 14.8 4.9 17.4l1-5.6-4.1-4L7.5 7 10 1.8Z";

/** Renders `value` out of 5, filling the last star partially when fractional. */
function Stars({ value }: { value: number }) {
  const label = `${value.toString().replace(".", ",")} de 5 estrelas`;
  return (
    <span className="inline-flex gap-0.5 text-bronze" aria-label={label} role="img">
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(Math.max(value - i, 0), 1);
        const id = `star-${i}-${Math.round(fill * 100)}`;
        return (
          <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
            {fill > 0 && fill < 1 && (
              <defs>
                <linearGradient id={id}>
                  <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                  <stop offset={`${fill * 100}%`} stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path
              d={STAR_PATH}
              fill={fill === 1 ? "currentColor" : fill === 0 ? "none" : `url(#${id})`}
              stroke="currentColor"
            />
          </svg>
        );
      })}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-deep">Google Maps</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Avaliações oficiais</h2>
          <a
            href={store.links.maps}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-wood underline decoration-bronze underline-offset-4 transition-colors duration-200 hover:text-bronze-deep"
          >
            Ver avaliações no Google
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-8 border border-cream-deep bg-white px-6 py-8">
          <div>
            <p className="font-serif text-6xl text-ink">{store.rating.value.toString().replace(".", ",")}</p>
            <Stars value={store.rating.value} />
            <p className="mt-2 text-sm text-ink-soft">{store.rating.count} avaliações no Google</p>
          </div>
          <div className="gold-rule hidden h-16 w-px lg:block" />
          <p className="max-w-lg text-sm leading-relaxed text-ink-soft">
            Avaliações verificadas de clientes reais, publicadas no perfil oficial da{" "}
            <strong className="font-medium text-ink">{store.name}</strong> no Google.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {store.reviews.map((review) => (
            <blockquote
              key={review.author}
              className="border border-cream-deep bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lg hover:shadow-bronze-deep/10"
            >
              <Stars value={review.stars} />
              <p className="mt-4 font-serif text-xl leading-relaxed text-ink">“{review.text}”</p>
              <footer className="mt-6 text-sm text-ink-soft">
                <cite className="not-italic font-semibold text-ink">{review.author}</cite>
                <span> · {review.relativeDate} · Google</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
