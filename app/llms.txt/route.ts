import { store } from "@/src/data/store";
import { siteUrl } from "@/src/lib/site";

// Required by Next when `output: "export"` is set.
export const dynamic = "force-static";

// Generated from store.ts so it can never drift from the site or the JSON-LD.
function body() {
  const services = store.services.map((s) => `- ${s.title}: ${s.text}`).join("\n");
  const categories = store.projectCategories.map((c) => `- ${c.title}`).join("\n");
  const areas = store.areasServed
    .map((a) => `### ${a.region}\n${a.lead}\n\n${a.bairros.join(", ")}.`)
    .join("\n\n");
  const hours = store.hours.map((h) => `- ${h.day}: ${h.time}`).join("\n");
  const faq = store.faq.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n");

  return `# ${store.name}

> Marcenaria de móveis planejados sob medida, sediada no bairro ${store.address.neighborhood}, em Florianópolis (SC). Atende toda a Ilha de Santa Catarina e a Grande Florianópolis.

## Sobre

${store.name} projeta, fabrica e instala móveis planejados sob medida em Florianópolis,
com marcenaria própria no bairro ${store.address.neighborhood}. Atua desde ${store.foundingYear}.
O atendimento é feito diretamente por ${store.representative}. O trabalho cobre o ciclo
completo: medição no local, projeto, produção na marcenaria e instalação.

- CNPJ: ${store.cnpj}
- Prazo médio: 30 a 45 dias entre o fechamento do projeto e a instalação
- Pagamento: ${store.paymentAccepted}

## Contato

- Site: [${store.name}](${siteUrl}/)
- Endereço: ${store.address.full}
- Telefone e WhatsApp: ${store.phone.whatsappDisplay}
- E-mail: ${store.email}
- Google Maps: [Abrir localização](${store.links.maps})
- Instagram: [Perfil no Instagram](${store.links.instagram})
- Facebook: [Página no Facebook](${store.links.facebook})

## Navegação do site

- [Início](${siteUrl}/#inicio)
- [Móveis e projetos](${siteUrl}/#moveis)
- [Atendimento](${siteUrl}/#atendimento)
- [Avaliações](${siteUrl}/#avaliacoes)
- [Dúvidas frequentes](${siteUrl}/#duvidas)
- [Contato](${siteUrl}/#contato)

## Horário de atendimento

${hours}

## Serviços

${services}

## Tipos de projeto executados

${categories}

## Áreas atendidas

${areas}

## Perguntas frequentes

${faq}

## Avaliações

${store.rating.value.toString().replace(".", ",")} de 5, com ${store.rating.count} avaliações no Google.
`;
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
