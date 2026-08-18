import { store, mapsEmbedUrl, whatsappUrl } from "@/src/data/store";
import { IconClock, IconMail, IconMapOpen, IconPhone, IconPin, IconWhatsApp } from "@/src/components/Icons";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-12">
        <div className="px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Visite e fale conosco</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Contato</h2>
          <p className="mt-4 max-w-xl text-cream/80">
            Estamos no São João do Rio Vermelho, em Florianópolis. Fale com Luis Miguel pelo WhatsApp e
            receba seu orçamento sem compromisso.
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
                  <span className="block text-cream/50">Atendimento direto com Luis Miguel</span>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 lg:order-3">
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
            <div className="flex gap-4 lg:order-4">
              <IconMail className="h-5 w-5 shrink-0 text-bronze" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-bronze">E-mail</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${store.email}`}
                    className="text-cream/90 transition-colors duration-200 hover:text-bronze"
                  >
                    {store.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 lg:order-5">
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
