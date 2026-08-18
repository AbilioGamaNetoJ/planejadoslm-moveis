export const store = {
  name: "Planejados LM Floripa",
  shortName: "Planejados LM",
  instagramHandle: "planejadoslmfloripa",
  category: "Marceneiro",
  bio: "Cuidado total com o seu patrimônio. Atendemos Florianópolis.",
  representative: "Evandro",
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
    whatsappDisplay: "(48) 99118-2287",
    whatsappE164: "5548991182287",
  },
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
    maps: "https://www.google.com/maps/place/Planejados+LM+Floripa/@-27.470927,-48.410721,17z/data=!4m6!3m5!1s0xab3e5a4b48980c1b:0x17c26abfda3d7c31!8m2!3d-27.470927!4d-48.410721",
    instagram: "https://www.instagram.com/planejadoslmfloripa/",
    facebook: "https://www.facebook.com/planejadoslm.com.br",
  },
  whatsappMessage:
    "Olá, Evandro! Vim pelo site da Planejados LM Floripa e gostaria de conversar sobre um projeto de móveis planejados.",
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
  gallery: [
    {
      src: "/images/maps-18.jpg",
      alt: "Quarto planejado com guarda-roupa branco e nicho de madeira iluminado",
      label: "Guarda-roupa planejado",
      span: "lg" as const,
    },
    {
      src: "/images/maps-07.jpg",
      alt: "Cozinha em L com gabinetes bege, granito preto e adega",
      label: "Cozinha sob medida",
    },
    {
      src: "/images/maps-02.jpg",
      alt: "Dormitório com cabeceira em madeira e fita de LED",
      label: "Dormitório",
    },
    {
      src: "/images/maps-01.jpg",
      alt: "Buffet branco minimalista para sala",
      label: "Sala",
    },
    {
      src: "/images/maps-19.jpg",
      alt: "Home office planejado azul petróleo com bancada e estante",
      label: "Home office",
    },
    {
      src: "/images/maps-10.jpg",
      alt: "Aparador em madeira ripada recém-saído da marcenaria",
      label: "Aparador",
    },
    {
      src: "/images/maps-14.jpg",
      alt: "Criado-mudo charcoal e creme na marcenaria",
      label: "Criado-mudo",
    },
    {
      src: "/images/maps-17.jpg",
      alt: "Bancos e mesas planejados para ambiente comercial",
      label: "Ambiente comercial",
    },
    {
      src: "/images/maps-21.jpg",
      alt: "Adega e bar planejados com nichos para garrafas",
      label: "Adega e bar",
    },
  ],
  services: [
    {
      title: "Cozinhas",
      text: "Projetos sob medida com acabamento preciso, eletrodomésticos embutidos e iluminação pensada para o dia a dia.",
    },
    {
      title: "Dormitórios",
      text: "Cabeceiras, painéis e marcenaria que organizam o quarto sem perder aconchego.",
    },
    {
      title: "Sala e living",
      text: "Buffets, aparadores e móveis de apoio com linhas limpas e materiais de primeira.",
    },
    {
      title: "Ambientes comerciais",
      text: "Bancos, balcões e cozinhas profissionais feitos para durar no uso intenso.",
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
