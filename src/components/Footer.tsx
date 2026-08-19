import { nav } from "@/src/data/nav";
import { store, whatsappUrl } from "@/src/data/store";
import { IconFacebook, IconInstagram, IconWhatsApp } from "@/src/components/Icons";
import { Logo } from "@/src/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#330c0e] text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:grid-cols-3 lg:px-8">
        <div>
          <a href="#inicio" className="inline-flex">
            <Logo className="h-24 w-24" size={192} />
          </a>
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
              <a
                href={store.links.maps}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-bronze"
              >
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
