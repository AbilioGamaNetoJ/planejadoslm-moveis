import { useEffect, useState } from "react";
import { store, whatsappUrl, mapsEmbedUrl } from "./data/store";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#moveis", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.5 8.5H16.5V5.5H14.5C12.01 5.5 10 7.51 10 10V12H8V15H10V21H13V15H15.5L16.5 12H13V10C13 9.17 13.67 8.5 14.5 8.5Z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21.5s7-6.4 7-12A7 7 0 0 0 5 9.5c0 5.6 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.1 3.5h2.4l1.3 3.8-1.9 1.6a11 11 0 0 0 5.2 5.2l1.6-1.9 3.8 1.3v2.4c0 1-.86 1.77-1.85 1.63a16 16 0 0 1-13-13C4.33 4.36 5.1 3.5 6.1 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMapOpen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5 text-bronze" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < count ? "currentColor" : "none"} stroke="currentColor">
          <path d="M10 1.8 12.5 7l5.7.8-4.1 4 1 5.6L10 14.8 4.9 17.4l1-5.6-4.1-4L7.5 7 10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

function Header() {
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
        scrolled || open ? "bg-ink/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="" className="h-10 w-10 rounded-xl" />
          <span className="font-serif text-xl tracking-wide text-cream">
            Planejados <span className="text-bronze">LM</span>
          </span>
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
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mobile-menu-panel overflow-hidden border-t border-bronze/25 bg-gradient-to-b from-ink via-ink to-[#141210] shadow-inner shadow-black/20 md:hidden">
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
                  className="h-4 w-4 shrink-0 text-cream/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bronze/80 group-active:translate-x-1.5 group-active:text-bronze"
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
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <img
        src="/images/maps-18.jpg"
        alt="Quarto planejado com guarda-roupa branco e nicho de madeira iluminado"
        className="absolute inset-0 h-full w-full object-cover"
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
          Cozinhas, dormitórios e marcenaria sob medida para toda a Florianópolis, do
          projeto à instalação. Atendimento direto com Evandro.
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

function Gallery() {
  return (
    <section id="moveis" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-deep">Trabalhos reais</p>
        <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Móveis e serviços</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Uma seleção de projetos executados pela Planejados LM: cozinhas, dormitórios, salas
          e ambientes comerciais com acabamento sob medida em Florianópolis.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {store.services.map((service) => (
            <article
              key={service.title}
              className="border border-cream-deep bg-cream/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lg hover:shadow-bronze-deep/10"
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
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
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

function Reviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-cream">
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
            Ver no Google Maps
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-8 border border-cream-deep bg-paper px-6 py-8">
          <div>
            <p className="font-serif text-6xl text-ink">{store.rating.value.toString().replace(".", ",")}</p>
            <Stars count={5} />
            <p className="mt-2 text-sm text-ink-soft">
              {store.rating.count} avaliações no Google
            </p>
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
              className="border border-cream-deep bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lg hover:shadow-bronze-deep/10"
            >
              <Stars count={review.stars} />
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

function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-12">
        <div className="px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Visite e fale conosco</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Contato</h2>
          <p className="mt-4 max-w-xl text-cream/80">
            Estamos no São João do Rio Vermelho, em Florianópolis. Fale com Evandro pelo WhatsApp
            e receba seu orçamento sem compromisso.
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-6 text-sm sm:grid-cols-2">
            <div className="flex gap-4">
              <IconPin className="h-5 w-5 shrink-0 text-bronze" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-bronze">Endereço</dt>
                <dd className="mt-1 leading-relaxed text-cream/90">
                  {store.address.line}
                  <br />
                  {store.address.neighborhood}, {store.address.city}
                  <br />
                  CEP {store.address.cep}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <IconWhatsApp className="h-5 w-5 shrink-0 text-bronze" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-bronze">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/90 transition-colors duration-200 hover:text-bronze"
                  >
                    {store.phone.whatsappDisplay}
                  </a>
                  <span className="block text-cream/50">Atendimento direto com Evandro</span>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 lg:order-4">
              <IconPhone className="h-5 w-5 shrink-0 text-bronze" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-bronze">Telefone</dt>
                <dd className="mt-1">
                  <a
                    href={store.phone.mapsTel}
                    className="text-cream/90 transition-colors duration-200 hover:text-bronze"
                  >
                    {store.phone.mapsDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 lg:order-3">
              <IconClock className="h-5 w-5 shrink-0 text-bronze" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-bronze">Horário</dt>
                <dd className="mt-2 grid max-w-xs grid-cols-2 gap-y-1 text-cream/85">
                  {store.hours.map((row) => (
                    <span key={row.day} className="contents">
                      <span>{row.day}</span>
                      <span className="text-right">{row.time}</span>
                    </span>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="relative min-h-[320px] sm:min-h-[360px] lg:my-20 lg:min-h-0 lg:overflow-hidden lg:rounded-sm">
          <iframe
            title="Mapa da Planejados LM Floripa"
            src={mapsEmbedUrl()}
            className="h-full min-h-[320px] w-full border-0 sm:min-h-[360px] lg:min-h-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={store.links.maps}
            target="_blank"
            rel="noreferrer"
            className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2.5 text-xs font-semibold text-cream shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-bronze hover:text-ink"
          >
            <IconMapOpen className="h-4 w-4" />
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#141210] text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Logo Planejados LM" className="h-12 w-12 rounded-xl" />
            <span className="font-serif text-2xl">
              Planejados <span className="text-bronze">LM</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
            Cuidado total com o seu patrimônio. Marcenaria sob medida em Florianópolis.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">A loja</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors duration-200 hover:text-bronze">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={store.links.maps} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-bronze">
                Como chegar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Redes sociais</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={store.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-bronze hover:text-bronze active:scale-90"
              aria-label="Instagram"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
            <a
              href={store.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-bronze hover:text-bronze active:scale-90"
              aria-label="Facebook"
            >
              <IconFacebook className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-whatsapp/30 active:translate-y-0 active:scale-95"
            >
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="gold-rule" />
      <p className="px-5 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {store.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function FloatingWhatsApp() {
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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
