const siteUrl = "https://limbopaper.it";

const languages = {
  it: {
    name: "Italiano",
    lang: "it",
    hreflang: "it",
    path: "/it/",
    ogLocale: "it_IT",
  },
  en: {
    name: "English",
    lang: "en",
    hreflang: "en",
    path: "/en/",
    ogLocale: "en_GB",
  },
  es: {
    name: "Español",
    lang: "es",
    hreflang: "es",
    path: "/es/",
    ogLocale: "es_ES",
  },
  zh: {
    name: "简体中文",
    lang: "zh-Hans",
    hreflang: "zh-Hans",
    path: "/zh/",
    ogLocale: "zh_CN",
  },
};

const sections = [
  { id: "filosofia", key: "philosophy" },
  { id: "materiali", key: "materials" },
  { id: "produzione", key: "production" },
  { id: "contatti", key: "contact" },
];

const locales = {
  it: {
    seo: {
      title: "Limbo Paper | Fondali seamless premium",
      description:
        "Limbo Paper produce fondali fotografici seamless premium in carta riciclata, interamente realizzati in Italia.",
      ogDescription:
        "Fondali fotografici professionali prodotti interamente in Italia con fibre di pura cellulosa 100% riciclata.",
      imageAlt: "Studio fotografico con fondale Limbo Paper",
    },
    accessibility: {
      skip: "Vai al contenuto",
      header: "Navigazione principale",
      sections: "Sezioni",
      language: "Seleziona lingua",
      currentLanguage: "Lingua attiva",
      brand: "Limbo Paper home",
      materialSpecs: "Specifiche materiale",
      surfaceDetail: "Dettaglio superficie",
      productionProcess: "Processo produttivo",
    },
    nav: {
      philosophy: "Filosofia",
      materials: "Materiali",
      production: "Produzione",
      contact: "Contatti",
    },
    hero: {
      eyebrow: "Made in Italy",
      title: "Fondali seamless premium per fotografia e video.",
      copy: [
        "Fondali fotografici professionali prodotti interamente in Italia con fibre di pura cellulosa 100% riciclata.",
        "Pensati per fotografi, filmmaker, studi creativi e produzioni professionali.",
      ],
      cta: "Contattaci",
      specs: [
        { label: "Materia", value: "Cellulosa 100% riciclata" },
        { label: "Finitura", value: "Ultra opaca, seamless" },
      ],
    },
    philosophy: {
      kicker: "Filosofia del brand",
      title: "Produzione italiana per chi lavora con l'immagine.",
      paragraphs: [
        "Limbo Paper è una giovane azienda italiana specializzata nella produzione di fondali fotografici seamless in carta.",
        "Carta, anima in cartone e lavorazione vengono realizzate interamente nel nord Italia, garantendo qualità, controllo produttivo e affidabilità.",
        "La nostra visione è creare un nuovo polo produttivo italiano dedicato ai fondali fotografici, ai diffusori frost e alle gelatine professionali, offrendo un'alternativa europea ai grandi produttori americani attraverso qualità superiore, logistica efficiente e attenzione al dettaglio.",
      ],
    },
    materials: {
      imageAlt: "Macro del rotolo di carta Limbo Paper con superficie opaca",
      annotations: ["Superficie ultra opaca", "Texture uniforme"],
      eyebrow: "Materiali & sostenibilità",
      title: "Realizzati con fibre di pura cellulosa 100% riciclata.",
      features: [
        "Superficie ultra opaca",
        "Grammatura della carta 160 GSM",
        "Disponibile in 30 colori",
        "Texture uniforme e seamless",
        "Qualità professionale da studio",
        "Produzione sostenibile",
        "Filiera italiana",
        "Precisione nella lavorazione",
      ],
    },
    product: {
      imageAlt: "Dettaglio dell'anima e dei bordi del rotolo di carta",
      eyebrow: "Product experience",
      title: "Pensati per chi cura ogni dettaglio.",
      copy:
        "Dai set fotografici commerciali ai portrait, dalla fotografia di prodotto alle produzioni video, Limbo Paper offre una superficie impeccabile, uniforme e professionale progettata per valorizzare ogni immagine.",
    },
    production: {
      eyebrow: "Produzione italiana",
      title: "Interamente prodotti in Italia.",
      copy:
        "Carta, packaging e lavorazione vengono gestiti localmente per garantire controllo qualità, tempi rapidi e una logistica più efficiente in tutta Europa.",
      steps: [
        { title: "Carta", copy: "Fibre riciclate selezionate e superficie calibrata." },
        { title: "Anima", copy: "Cartone e supporti realizzati nella filiera locale." },
        { title: "Controllo", copy: "Verifica visiva, imballo e spedizione professionale." },
      ],
    },
    contact: {
      eyebrow: "Contatti",
      title: "Creiamo senza limiti.",
      copy: "Per collaborazioni, richieste commerciali o informazioni sui prodotti.",
    },
    footer: {
      copyright: "Copyright 2026 Limbo Paper. Tutti i diritti riservati.",
      origin: "Made in Italy",
    },
  },
  en: {
    seo: {
      title: "Limbo Paper | Premium seamless paper backdrops",
      description:
        "Limbo Paper makes premium seamless photography backdrops from recycled paper, fully manufactured in Italy.",
      ogDescription:
        "Professional photography backdrops made entirely in Italy from 100% recycled pure cellulose fibres.",
      imageAlt: "Photo studio with a Limbo Paper backdrop",
    },
    accessibility: {
      skip: "Skip to content",
      header: "Main navigation",
      sections: "Sections",
      language: "Choose language",
      currentLanguage: "Current language",
      brand: "Limbo Paper home",
      materialSpecs: "Material specifications",
      surfaceDetail: "Surface detail",
      productionProcess: "Production process",
    },
    nav: {
      philosophy: "Philosophy",
      materials: "Materials",
      production: "Production",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Made in Italy",
      title: "Premium seamless backdrops for photography and video.",
      copy: [
        "Professional photography backdrops made entirely in Italy from 100% recycled pure cellulose fibres.",
        "Created for photographers, filmmakers, creative studios and professional productions.",
      ],
      cta: "Contact us",
      specs: [
        { label: "Material", value: "100% recycled cellulose" },
        { label: "Finish", value: "Ultra-matte, seamless" },
      ],
    },
    philosophy: {
      kicker: "Brand philosophy",
      title: "Italian manufacturing for image makers.",
      paragraphs: [
        "Limbo Paper is a young Italian company focused on producing seamless paper backdrops for photography and video.",
        "The paper, cardboard core and finishing are all made in northern Italy, giving studios dependable quality, tight production control and consistent supply.",
        "Our aim is to build a new Italian manufacturing hub for photographic backdrops, frost diffusion and professional gels, offering a European alternative to major US producers through stronger quality, efficient logistics and precise attention to detail.",
      ],
    },
    materials: {
      imageAlt: "Close-up of a Limbo Paper roll with a matte paper surface",
      annotations: ["Ultra-matte surface", "Even texture"],
      eyebrow: "Materials & sustainability",
      title: "Made from 100% recycled pure cellulose fibres.",
      features: [
        "Ultra-matte surface",
        "160 GSM paper weight",
        "Available in 30 colours",
        "Even seamless texture",
        "Professional studio quality",
        "Sustainable production",
        "Italian supply chain",
        "Precision finishing",
      ],
    },
    product: {
      imageAlt: "Detail of the paper roll core and edge",
      eyebrow: "Product experience",
      title: "Built for detail-driven productions.",
      copy:
        "From commercial sets to portraits, product photography and video production, Limbo Paper provides a clean, even and professional surface designed to elevate every frame.",
    },
    production: {
      eyebrow: "Italian production",
      title: "Produced entirely in Italy.",
      copy:
        "Paper, packaging and finishing are managed locally to ensure quality control, faster turnaround and more efficient logistics across Europe.",
      steps: [
        { title: "Paper", copy: "Selected recycled fibres and a calibrated surface." },
        { title: "Core", copy: "Cardboard cores and supports made within the local supply chain." },
        { title: "Control", copy: "Visual inspection, packing and professional dispatch." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Create without limits.",
      copy: "For collaborations, trade enquiries or product information.",
    },
    footer: {
      copyright: "Copyright 2026 Limbo Paper. All rights reserved.",
      origin: "Made in Italy",
    },
  },
  es: {
    seo: {
      title: "Limbo Paper | Fondos seamless premium",
      description:
        "Limbo Paper fabrica fondos fotográficos seamless premium en papel reciclado, producidos íntegramente en Italia.",
      ogDescription:
        "Fondos fotográficos profesionales fabricados íntegramente en Italia con fibras de celulosa pura 100% reciclada.",
      imageAlt: "Estudio fotográfico con un fondo Limbo Paper",
    },
    accessibility: {
      skip: "Saltar al contenido",
      header: "Navegación principal",
      sections: "Secciones",
      language: "Elegir idioma",
      currentLanguage: "Idioma actual",
      brand: "Inicio de Limbo Paper",
      materialSpecs: "Especificaciones del material",
      surfaceDetail: "Detalle de la superficie",
      productionProcess: "Proceso de producción",
    },
    nav: {
      philosophy: "Filosofía",
      materials: "Materiales",
      production: "Producción",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Made in Italy",
      title: "Fondos seamless premium para fotografía y vídeo.",
      copy: [
        "Fondos fotográficos profesionales fabricados íntegramente en Italia con fibras de celulosa pura 100% reciclada.",
        "Diseñados para fotógrafos, filmmakers, estudios creativos y producciones profesionales.",
      ],
      cta: "Contacta",
      specs: [
        { label: "Material", value: "Celulosa 100% reciclada" },
        { label: "Acabado", value: "Ultra mate, seamless" },
      ],
    },
    philosophy: {
      kicker: "Filosofía de marca",
      title: "Producción italiana para quienes trabajan con la imagen.",
      paragraphs: [
        "Limbo Paper es una joven empresa italiana especializada en la producción de fondos fotográficos seamless en papel.",
        "El papel, el núcleo de cartón y el acabado se realizan íntegramente en el norte de Italia, garantizando calidad, control de producción y fiabilidad.",
        "Nuestra visión es crear un nuevo polo productivo italiano dedicado a fondos fotográficos, difusores frost y gelatinas profesionales, ofreciendo una alternativa europea a los grandes fabricantes estadounidenses gracias a una calidad superior, una logística eficiente y una atención minuciosa al detalle.",
      ],
    },
    materials: {
      imageAlt: "Macro de un rollo Limbo Paper con superficie mate",
      annotations: ["Superficie ultra mate", "Textura uniforme"],
      eyebrow: "Materiales y sostenibilidad",
      title: "Fabricados con fibras de celulosa pura 100% reciclada.",
      features: [
        "Superficie ultra mate",
        "Gramaje de papel 160 GSM",
        "Disponible en 30 colores",
        "Textura uniforme y seamless",
        "Calidad profesional de estudio",
        "Producción sostenible",
        "Cadena de suministro italiana",
        "Precisión en el acabado",
      ],
    },
    product: {
      imageAlt: "Detalle del núcleo y los bordes del rollo de papel",
      eyebrow: "Experiencia de producto",
      title: "Pensados para producciones que cuidan cada detalle.",
      copy:
        "Desde sets comerciales hasta retrato, fotografía de producto y producciones de vídeo, Limbo Paper ofrece una superficie impecable, uniforme y profesional creada para realzar cada imagen.",
    },
    production: {
      eyebrow: "Producción italiana",
      title: "Producidos íntegramente en Italia.",
      copy:
        "El papel, el packaging y el acabado se gestionan localmente para asegurar control de calidad, plazos ágiles y una logística más eficiente en toda Europa.",
      steps: [
        { title: "Papel", copy: "Fibras recicladas seleccionadas y superficie calibrada." },
        { title: "Núcleo", copy: "Cartón y soportes fabricados dentro de la cadena local." },
        { title: "Control", copy: "Revisión visual, embalaje y envío profesional." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Creamos sin límites.",
      copy: "Para colaboraciones, consultas comerciales o información sobre productos.",
    },
    footer: {
      copyright: "Copyright 2026 Limbo Paper. Todos los derechos reservados.",
      origin: "Made in Italy",
    },
  },
  zh: {
    seo: {
      title: "Limbo Paper | 高端无缝摄影背景纸",
      description:
        "Limbo Paper 生产高端无缝摄影背景纸，采用再生纸材，并全程在意大利制造。",
      ogDescription:
        "专业摄影背景纸，全程意大利制造，采用 100% 再生纯纤维素纤维。",
      imageAlt: "使用 Limbo Paper 背景纸的摄影棚",
    },
    accessibility: {
      skip: "跳到主要内容",
      header: "主导航",
      sections: "页面栏目",
      language: "选择语言",
      currentLanguage: "当前语言",
      brand: "Limbo Paper 首页",
      materialSpecs: "材料规格",
      surfaceDetail: "表面细节",
      productionProcess: "生产流程",
    },
    nav: {
      philosophy: "理念",
      materials: "材料",
      production: "生产",
      contact: "联系",
    },
    hero: {
      eyebrow: "意大利制造",
      title: "面向摄影与视频创作的高端无缝背景纸。",
      copy: [
        "专业摄影背景纸，全程在意大利生产，采用 100% 再生纯纤维素纤维。",
        "为摄影师、影视创作者、创意工作室和专业制作团队打造。",
      ],
      cta: "联系我们",
      specs: [
        { label: "材质", value: "100% 再生纤维素" },
        { label: "表面", value: "超哑光、无缝" },
      ],
    },
    philosophy: {
      kicker: "品牌理念",
      title: "为影像创作者而生的意大利制造。",
      paragraphs: [
        "Limbo Paper 是一家年轻的意大利公司，专注生产用于摄影和视频拍摄的无缝纸质背景。",
        "纸材、纸芯和后道加工均在意大利北部完成，确保稳定品质、生产可控和可靠交付。",
        "我们的目标是在意大利打造新的专业制造基地，覆盖摄影背景纸、柔光 frost 扩散材料和专业色片。通过更高品质、更高效的欧洲物流和对细节的严格把控，为市场提供区别于美国大型厂商的欧洲选择。",
      ],
    },
    materials: {
      imageAlt: "Limbo Paper 背景纸卷的哑光表面特写",
      annotations: ["超哑光表面", "均匀纹理"],
      eyebrow: "材料与可持续",
      title: "采用 100% 再生纯纤维素纤维制造。",
      features: [
        "超哑光表面",
        "160 GSM 纸张克重",
        "提供 30 种颜色",
        "均匀无缝纹理",
        "专业影棚级品质",
        "可持续生产",
        "意大利供应链",
        "精细加工",
      ],
    },
    product: {
      imageAlt: "背景纸卷纸芯和边缘细节",
      eyebrow: "产品体验",
      title: "为重视细节的拍摄现场设计。",
      copy:
        "无论是商业拍摄、人像、产品摄影还是视频制作，Limbo Paper 都能提供干净、均匀、专业的画面表面，让每一帧更出色。",
    },
    production: {
      eyebrow: "意大利生产",
      title: "全程意大利制造。",
      copy:
        "纸材、包装和加工均在本地管理，确保品质控制、交付效率，并为欧洲市场提供更顺畅的物流。",
      steps: [
        { title: "纸材", copy: "精选再生纤维，并校准表面效果。" },
        { title: "纸芯", copy: "纸板芯和支撑材料来自本地供应链。" },
        { title: "质检", copy: "进行视觉检查、专业包装并安排发货。" },
      ],
    },
    contact: {
      eyebrow: "联系",
      title: "创作不设限。",
      copy: "如需合作、商务咨询或产品信息，欢迎联系我们。",
    },
    footer: {
      copyright: "Copyright 2026 Limbo Paper. 保留所有权利。",
      origin: "意大利制造",
    },
  },
};

module.exports = {
  languages,
  locales,
  sections,
  siteUrl,
};
