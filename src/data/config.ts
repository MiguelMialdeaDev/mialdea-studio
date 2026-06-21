export const site = {
  name: 'Mialdea Studio',
  founder: 'Miguel Mialdea',
  tagline: 'Webs y apps a medida. Cada proyecto, una historia.',
  email: 'mialdeastudio@gmail.com',
  // RELLENAR: numero WhatsApp de la marca, formato 34XXXXXXXXX
  whatsapp: '',
  // RELLENAR: pon tu foto en public/miguel.jpg
  foto: '/miguel.jpg',
  location: 'Valencia',
  url: 'https://mialdeastudio.com',
};

export const nav = [
  { label: 'Historias', href: '#historias' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajo', href: '#proceso' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
];

export const sectores = [
  'Restaurantes',
  'Oficios',
  'Tiendas',
  'Clínicas',
  'Diseñadores',
  'Hostelería',
  'Comercio local',
];

// ============================================================
//  HISTORIAS  ·  el núcleo de la marca
//  "No contamos proyectos, contamos historias en las que impactamos"
//  Generales/anónimas por ahora (sin nombres ni localidad).
//  portada -> 'historias/archivo.jpg' (opcional). Sin imagen sale
//  una tarjeta con color cálido de fondo.
// ============================================================
export const historias = [
  {
    quien: 'Un restaurante venezolano',
    titulo: 'Sabores de casa que casi nadie encontraba',
    resumen:
      'Una familia que se trajo su cocina en la maleta. Cinco estrellas reales, pero invisible en Google. Le construyo su sitio y trabajo para que lo encuentren antes de llegar a la puerta.',
    etiqueta: 'Web + SEO local',
    color: 'terracota',
    portada: '',
  },
  {
    quien: 'Un fontanero',
    titulo: 'Un oficio de toda la vida que da el salto',
    resumen:
      'Un manitas que decide digitalizarse: una web para especializarse y aparecer justo cuando alguien busca su oficio en su zona.',
    etiqueta: 'Web de servicios',
    color: 'verde',
    portada: '',
  },
  {
    quien: 'Una diseñadora',
    titulo: 'El talento estaba. Faltaba el escaparate',
    resumen:
      'Mucho talento y la valentía de emprender. Le monto un portfolio a su altura para dar el salto digital y empezar a ofrecer lo suyo.',
    etiqueta: 'Portfolio',
    color: 'ocre',
    portada: '',
  },
  {
    quien: 'Una marca de café tradicional',
    titulo: 'De vender a comercios a vender a tu casa',
    resumen:
      'Toda la vida sirviendo café a negocios locales. Ahora da el salto para llegar también a particulares, sin perder lo de siempre.',
    etiqueta: 'Tienda online',
    color: 'terracota',
    portada: '',
  },
];

export const servicios = [
  {
    titulo: 'Webs',
    desc: 'Webs a medida, rápidas y pensadas para el móvil. Para que te encuentren en Google y que quien entra acabe llamando, reservando o comprando.',
    bullets: ['Diseño único, sin plantillas', 'SEO local incluido', 'Listas en semanas'],
    desde: 'Desde 890 €',
  },
  {
    titulo: 'Apps y herramientas',
    desc: 'Apps y software a medida para tu negocio: reservas, pedidos, fidelización o esa herramienta que te simplifica el día a día.',
    bullets: ['Hecho para tu caso', 'Sencillo de usar', 'Móvil y ordenador'],
    desde: 'A medida',
  },
];

export const paquetes = [
  {
    nombre: 'Presencia',
    precio: '890 €',
    desc: 'Para aparecer y que te encuentren.',
    incluye: ['Web de una página', 'Móvil primero', 'Botón de WhatsApp', 'Alta en Google'],
    destacado: false,
  },
  {
    nombre: 'Negocio',
    precio: '1.490 €',
    desc: 'El que elige la mayoría.',
    incluye: ['Hasta 5 páginas', 'SEO local de tu zona', 'Google Business', 'Textos que venden'],
    destacado: true,
  },
  {
    nombre: 'A medida',
    precio: 'Desde 2.900 €',
    desc: 'Reservas, pedidos, lo que necesites.',
    incluye: ['Funciones a medida', 'Reservas o pedidos', 'Integraciones', 'Lo que tu negocio pida'],
    destacado: false,
  },
];

export const proceso = [
  {
    n: '01',
    titulo: 'Hablamos',
    desc: 'Me cuentas tu negocio y qué quieres conseguir. En cristiano, sin tecnicismos.',
  },
  {
    n: '02',
    titulo: 'Lo construyo',
    desc: 'Diseño y monto tu web o app, y te la enseño por el camino. Tú sigues a lo tuyo.',
  },
  {
    n: '03',
    titulo: 'Creces',
    desc: 'La lanzamos, la posiciono en Google y sigo a tu lado. No te dejo solo.',
  },
];

export const faq = [
  {
    q: '¿Es caro?',
    a: 'Una web no es un gasto, es lo que te trae clientes cada mes. Te doy un presupuesto cerrado antes de empezar, así sabes exactamente lo que pagas.',
  },
  {
    q: '¿Y luego desapareces?',
    a: 'No. Hablas siempre conmigo, antes y después de lanzar. Si algo falla o quieres cambios, sabes a quién escribir y te contesto.',
  },
  {
    q: 'No entiendo de tecnología.',
    a: 'No hace falta. Te lo explico en cristiano y de lo técnico me encargo yo.',
  },
  {
    q: '¿Cuánto tarda?',
    a: 'Tu web lista y posicionándose en semanas, no en meses.',
  },
];
