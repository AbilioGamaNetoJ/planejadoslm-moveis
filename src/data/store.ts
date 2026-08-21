export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectCategory = {
  slug: string;
  title: string;
  span?: "lg";
  images: readonly ProjectImage[];
};

export const store = {
  name: "Planejados LM Floripa",
  shortName: "Planejados LM",
  instagramHandle: "planejadoslmfloripa",
  category: "Marceneiro",
  cnpj: "55.598.260/0001-00",
  foundingYear: 2018,
  paymentAccepted: "Pix, Dinheiro, Cartão de crédito",
  bio: "Cuidado total com o seu patrimônio. Atendemos Florianópolis.",
  representative: "Luis Miguel",
  address: {
    line: "Servidão Argentina Barcelos Silveira, 45",
    neighborhood: "São João do Rio Vermelho",
    city: "Florianópolis - SC",
    cep: "88060-205",
    plusCode: "GHHQ+JP São João do Rio Vermelho, Florianópolis - SC",
    full: "Servidão Argentina Barcelos Silveira, 45 - São João do Rio Vermelho, Florianópolis - SC, 88060-205",
  },
  coords: { lat: -27.470927, lng: -48.410721 },
  phone: {
    mapsDisplay: "(48) 99808-8780",
    mapsTel: "tel:+5548998088780",
    whatsappDisplay: "(48) 99808-8780",
    whatsappE164: "5548998088780",
  },
  email: "luismiguelpdu@hotmail.com",
  hours: [
    { day: "Segunda-feira", time: "08:30 – 19:00" },
    { day: "Terça-feira", time: "08:30 – 19:00" },
    { day: "Quarta-feira", time: "08:30 – 19:00" },
    { day: "Quinta-feira", time: "08:30 – 19:00" },
    { day: "Sexta-feira", time: "08:30 – 19:00" },
    { day: "Sábado", time: "08:30 – 16:00" },
    { day: "Domingo", time: "Fechado" },
  ],
  rating: {
    value: 4.7,
    count: 3,
    source: "Google",
    histogram: { 5: 2, 4: 1, 3: 0, 2: 0, 1: 0 },
  },
  links: {
    maps: "https://maps.app.goo.gl/fCStKuGbp7cWJz4x6",
    instagram: "https://www.instagram.com/planejadoslmfloripa/",
    facebook: "https://www.facebook.com/planejadoslm.com.br",
  },
  whatsappMessage:
    "Olá, Luis Miguel! Vim pelo site da Planejados LM Floripa e gostaria de conversar sobre um projeto de móveis planejados.",
  reviews: [
    {
      author: "Frederico Teixeira Ageme de Araújo Soares",
      stars: 5,
      relativeDate: "há 4 meses",
      text: "Profissionais maravilhosos, honestos, dedicados, atenciosos e muito talentosos. Fiz minha cozinha com eles e o resultado foi muito melhor do que eu esperava. Ficou lindo, simétrico e com material de primeira qualidade. Só tenho a agradecer.",
    },
    {
      author: "Cleberson Sottele",
      stars: 5,
      relativeDate: "há 6 meses",
      text: "Serviço de ótima qualidade, entregue no tempo previsto, ótimo acabamento, recomendo.",
    },
  ],
  projectCategories: [
    {
      slug: "guarda-roupa-planejado",
      title: "Guarda-roupa planejado",
      span: "lg" as const,
      images: [
        {
          src: "/images/projetos/guarda-roupa-planejado/capa.webp",
          alt: "Quarto planejado com guarda-roupa branco e nicho de madeira iluminado",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/01.webp",
          alt: "Guarda-roupa planejado em ponte, com armários brancos, cabeceira em madeira e criados-mudos integrados",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/02.webp",
          alt: "Nicho de madeira iluminado ao lado do guarda-roupa planejado branco",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/03.webp",
          alt: "Guarda-roupa planejado branco com portas até o teto e estante de madeira com fita de LED",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/04.webp",
          alt: "Vista ampla do quarto com guarda-roupa de canto, ponte sobre a cama e nicho iluminado",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/05.webp",
          alt: "Cabeceira planejada com armários aéreos, painel de madeira e criados-mudos com gavetas",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/06.webp",
          alt: "Painel de TV planejado em branco no quarto com guarda-roupa sob medida",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/07.webp",
          alt: "Estante de madeira e armário branco planejados ao lado do painel de TV",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/08.webp",
          alt: "Interior do guarda-roupa de canto com prateleiras em L e cabideiro",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/09.webp",
          alt: "Guarda-roupa planejado aberto, com cabideiros, gavetas e nicho iluminado",
        },
        {
          src: "/images/projetos/guarda-roupa-planejado/10.webp",
          alt: "Conjunto simétrico de guarda-roupa em ponte com cabeceira de madeira e criados-mudos",
        },
      ],
    },
    {
      slug: "cozinha-sob-medida",
      title: "Cozinha sob medida",
      images: [
        {
          src: "/images/projetos/cozinha-sob-medida/capa.webp",
          alt: "Cozinha em L com gabinetes bege, granito preto e adega",
        },
        {
          src: "/images/projetos/cozinha-sob-medida/01.webp",
          alt: "Detalhe de cozinha planejada com bancada escura e armários claros",
        },
        {
          src: "/images/projetos/cozinha-sob-medida/02.webp",
          alt: "Cozinha planejada branca com bancada em granito preto",
        },
        {
          src: "/images/projetos/cozinha-sob-medida/03.webp",
          alt: "Cozinha planejada com armários brancos, nichos em madeira e iluminação",
        },
      ],
    },
    {
      slug: "quarto",
      title: "Quarto",
      images: [
        {
          src: "/images/projetos/quarto/capa.webp",
          alt: "Quarto com cabeceira planejada em madeira e iluminação embutida",
        },
        {
          src: "/images/projetos/quarto/01.webp",
          alt: "Cabeceira planejada branca com nichos de madeira e fita de LED",
        },
        {
          src: "/images/projetos/quarto/02.webp",
          alt: "Detalhe da cabeceira planejada com prateleiras laterais iluminadas",
        },
        {
          src: "/images/projetos/quarto/03.webp",
          alt: "Quarto planejado com cabeceira, closet aberto, bancada e gavetas",
        },
        {
          src: "/images/projetos/quarto/04.webp",
          alt: "Cabeceira planejada com nichos de madeira e tomadas integradas",
        },
      ],
    },
    {
      slug: "sala",
      title: "Sala",
      images: [
        {
          src: "/images/projetos/sala/capa.webp",
          alt: "Buffet branco minimalista para sala",
        },
        {
          src: "/images/projetos/sala/01.webp",
          alt: "Buffet branco planejado em ambiente residencial",
        },
        {
          src: "/images/projetos/sala/02.webp",
          alt: "Painel de TV planejado em madeira clara para sala",
        },
        {
          src: "/images/projetos/sala/03.webp",
          alt: "Rack planejado para TV com prateleiras, gavetas e nichos decorativos",
        },
      ],
    },
    {
      slug: "home-office",
      title: "Home office",
      images: [
        {
          src: "/images/projetos/home-office/capa.webp",
          alt: "Home office planejado azul petróleo com bancada e estante",
        },
        {
          src: "/images/projetos/home-office/01.webp",
          alt: "Estante azul planejada com nicho para televisão",
        },
        {
          src: "/images/projetos/home-office/02.webp",
          alt: "Estante compacta planejada para home office",
        },
      ],
    },
    {
      slug: "aparador",
      title: "Aparador",
      images: [
        {
          src: "/images/projetos/aparador/capa.webp",
          alt: "Aparador em madeira ripada recém-saído da marcenaria",
        },
        {
          src: "/images/projetos/aparador/01.webp",
          alt: "Aparador preto com bancada de granito e puxadores em perfil metálico",
        },
        {
          src: "/images/projetos/aparador/02.webp",
          alt: "Detalhe interno do aparador com gaveta telescópica e acabamento preto",
        },
        {
          src: "/images/projetos/aparador/03.webp",
          alt: "Aparador planejado preto com bancada de granito e rodízios",
        },
      ],
    },
    {
      slug: "banheiro",
      title: "Banheiro",
      images: [
        {
          src: "/images/projetos/banheiro/capa.webp",
          alt: "Banheiro planejado com mármore, espelho redondo iluminado e nichos",
        },
        {
          src: "/images/projetos/banheiro/01.webp",
          alt: "Bancada de banheiro em mármore com cuba integrada e torneira dourada",
        },
        {
          src: "/images/projetos/banheiro/02.webp",
          alt: "Banheiro com bancada branca, espelho com moldura de madeira e box de vidro",
        },
        {
          src: "/images/projetos/banheiro/03.webp",
          alt: "Banheiro compacto com gabinete verde-sálvia, prateleiras de madeira e LED",
        },
      ],
    },
    {
      slug: "ambiente-comercial",
      title: "Ambiente comercial",
      images: [
        {
          src: "/images/projetos/ambiente-comercial/capa.webp",
          alt: "Bancos e mesas planejados para ambiente comercial",
        },
        {
          src: "/images/projetos/ambiente-comercial/01.webp",
          alt: "Cozinha profissional planejada para ambiente comercial",
        },
      ],
    },
    {
      slug: "adega-e-bar",
      title: "Adega e bar",
      images: [
        {
          src: "/images/projetos/adega-e-bar/capa.webp",
          alt: "Adega e bar planejados com nichos para garrafas",
        },
        {
          src: "/images/projetos/adega-e-bar/01.webp",
          alt: "Detalhe dos nichos para vinhos e prateleiras com destilados na adega planejada",
        },
        {
          src: "/images/projetos/adega-e-bar/02.webp",
          alt: "Adega móvel em madeira clara com rodízios e garrafas organizadas",
        },
      ],
    },
  ] satisfies readonly ProjectCategory[],
  faq: [
    {
      question: "Quanto custa um móvel planejado em Florianópolis?",
      answer:
        "O valor é personalizado para cada projeto. O preço depende do ambiente, das dimensões, dos materiais e das ferragens escolhidas, por isso fazemos a medição no local e apresentamos um orçamento sem compromisso antes de qualquer decisão.",
    },
    {
      question: "Qual o prazo de entrega dos móveis planejados?",
      answer:
        "O prazo médio é de 30 a 45 dias entre o fechamento do projeto e a instalação. Ele varia conforme o tamanho do ambiente e a complexidade da marcenaria.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "São 50% no início do serviço e 50% na entrega, por Pix ou dinheiro. Também aceitamos cartão de crédito em até 12 vezes, por link de pagamento.",
    },
    {
      question: "Vocês fazem a medição no local?",
      answer:
        "Sim. A medição é feita no seu imóvel antes da produção, porque móvel sob medida depende das dimensões reais do ambiente. A visita é agendada pelo WhatsApp.",
    },
    {
      question: "Quais bairros de Florianópolis vocês atendem?",
      answer:
        "Atendemos toda a Ilha e a Grande Florianópolis. Nossa marcenaria fica no São João do Rio Vermelho, então o atendimento costuma ser mais rápido no Norte da Ilha: Ingleses, Canasvieiras, Jurerê, Santinho, Vargem Grande e Cachoeira do Bom Jesus, entre outros.",
    },
    {
      question: "Qual a diferença entre móvel planejado e móvel modulado?",
      answer:
        "O móvel planejado é produzido sob medida para o seu ambiente, enquanto o modulado é montado a partir de módulos prontos, em tamanhos fixos. Como temos marcenaria própria, conseguimos aproveitar cada centímetro do espaço, contornar vigas e desníveis e ajustar o projeto ao que já existe no imóvel.",
    },
    {
      question: "Vocês têm marcenaria própria?",
      answer:
        "Sim. A produção é feita na nossa própria marcenaria, no Rio Vermelho, em Florianópolis. Isso permite acompanhar o acabamento peça por peça e resolver detalhes durante a execução, sem depender de terceiros.",
    },
    {
      question: "E depois que os móveis são instalados?",
      answer:
        "Acompanhamos os primeiros dias de uso e fazemos os ajustes necessários. Regulagem de portas, gavetas e alinhamentos são normais depois da instalação e fazem parte do serviço. Problemas de fabricação a gente resolve; danos causados por uso, umidade ou reforma no imóvel não entram nesse acompanhamento.",
    },
    {
      question: "Móvel planejado de MDF pode molhar?",
      answer:
        "Respingo rápido, secando na hora, não é problema. O que estraga o MDF é água parada e umidade constante: vazamento embaixo da pia, infiltração na parede, pano molhado esquecido sobre a bancada. Nesses casos o painel incha e não tem como reverter. Na entrega orientamos sobre os cuidados de cada ambiente, principalmente cozinha, banheiro e área de serviço.",
    },
  ],
  areasServed: [
    {
      region: "Norte da Ilha",
      lead: "Onde fica nossa marcenaria. Atendimento e visita técnica mais rápidos.",
      bairros: [
        "São João do Rio Vermelho",
        "Rio Vermelho",
        "Ingleses",
        "Santinho",
        "Praia Brava",
        "Canasvieiras",
        "Jurerê",
        "Jurerê Internacional",
        "Daniela",
        "Ponta das Canas",
        "Cachoeira do Bom Jesus",
        "Vargem Grande",
        "Vargem do Bom Jesus",
        "Santo Antônio de Lisboa",
        "Sambaqui",
        "Cacupé",
        "Ratones",
      ],
    },
    {
      region: "Leste e Sul da Ilha",
      lead: "Projetos para casas e apartamentos das praias do leste e do sul.",
      bairros: [
        "Lagoa da Conceição",
        "Barra da Lagoa",
        "Campeche",
        "Rio Tavares",
        "Armação",
      ],
    },
    {
      region: "Centro e Continente",
      lead: "Marcenaria sob medida para apartamentos e ambientes comerciais.",
      bairros: [
        "Centro",
        "Agronômica",
        "Trindade",
        "Itacorubi",
        "Córrego Grande",
        "Estreito",
        "Coqueiros",
      ],
    },
    {
      region: "Grande Florianópolis",
      lead: "Também atendemos as cidades vizinhas mediante agendamento.",
      bairros: ["São José", "Palhoça", "Biguaçu"],
    },
  ],
  services: [
    {
      title: "Cozinhas",
      text: "Projetos sob medida, com organização, iluminação e acabamento pensados para o dia a dia.",
      icon: "kitchen",
    },
    {
      title: "Quartos",
      text: "Cabeceiras, painéis e marcenaria que deixam o quarto organizado e acolhedor.",
      icon: "bedroom",
    },
    {
      title: "Sala e living",
      text: "Painéis, buffets e móveis de apoio que integram conforto, estilo e funcionalidade.",
      icon: "living",
    },
    {
      title: "Ambientes comerciais",
      text: "Balcões, bancos e cozinhas profissionais preparados para o uso intenso.",
      icon: "commercial",
    },
  ],
} as const;

export function whatsappUrl(message = store.whatsappMessage) {
  return `https://wa.me/${store.phone.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function mapsEmbedUrl() {
  const query = `${store.name}, ${store.address.full}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}
