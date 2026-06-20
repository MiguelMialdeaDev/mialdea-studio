export const site = {
  name: 'Mialdea Studio',
  founder: 'Miguel Mialdea',
  tagline: 'Webs y apps a medida para hacer tu negocio visible.',
  email: 'mialdeastudio@gmail.com',
  // RELLENAR: numero de WhatsApp NUEVO de la marca, formato 34XXXXXXXXX (sin + ni espacios)
  whatsapp: '',
  // RELLENAR: pon tu foto en public/miguel.jpg
  foto: '/miguel.jpg',
  location: 'Valencia, Espana',
  url: 'https://mialdeastudio.com',
};

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Sobre mi', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
];

export const sectores = [
  'Restaurantes',
  'Tiendas',
  'Clinicas',
  'Peluquerias',
  'Servicios',
  'Hosteleria',
  'Comercio local',
];

export const proyectos = [
  {
    nombre: 'Altamira',
    tipo: 'Restaurante venezolano, Burjassot',
    descripcion:
      'Llegaron sin web y sin salir en Google. Les monte su web desde cero y trabaje el SEO local hasta posicionarlos como el mejor venezolano de Valencia. Hoy los clientes nuevos los encuentran antes de llegar a la puerta. El mismo trabajo que hare con tu negocio.',
    resultado: 'De invisible en Google a primero por "venezolano en Valencia".',
    // RELLENAR cuando tengas la frase del dueno: testimonio + nombre
    testimonio: '',
    testimonio_autor: '',
    stack: ['Web a medida', 'SEO local', 'Google Business'],
    destacado: true,
    url: '', // RELLENAR con la URL de la web en vivo cuando este publicada
  },
];

export const servicios = [
  {
    titulo: 'Webs',
    desc: 'Webs rapidas, modernas y faciles de usar desde el movil. Pensadas para convertir visitas en clientes reales y para que te encuentren en Google cuando te buscan.',
    bullets: ['Diseno a medida', 'Optimizadas para movil', 'SEO local incluido'],
    desde: 'Desde 890 EUR',
  },
  {
    titulo: 'Apps',
    desc: 'Apps a medida para tu negocio, desde reservas hasta pedidos o fidelizacion. Sencillas para tus clientes y utiles para ti, con la misma exigencia tecnica que pide la banca.',
    bullets: ['Reservas y pedidos', 'Fidelizacion', 'Android e iOS'],
    desde: 'Desde 3.900 EUR',
  },
];

export const paquetes = [
  {
    nombre: 'Presencia',
    precio: '890 EUR',
    desc: 'Para aparecer y que te encuentren.',
    incluye: ['Web de una pagina', 'Movil primero', 'Boton de WhatsApp', 'Alta en Google y fotos'],
    destacado: false,
  },
  {
    nombre: 'Negocio',
    precio: '1.490 EUR',
    desc: 'El que elige la mayoria.',
    incluye: ['Hasta 5 paginas', 'SEO local para tu zona', 'Google Business configurado', 'Resenas y textos que venden'],
    destacado: true,
  },
  {
    nombre: 'A medida',
    precio: 'Desde 2.900 EUR',
    desc: 'Reservas, pedidos, carta digital.',
    incluye: ['Funciones a medida', 'Reservas o pedidos', 'Carta digital', 'Lo que tu negocio necesite'],
    destacado: false,
  },
];

export const mantenimiento = [
  {
    nombre: 'Tranquilidad',
    precio: '59 EUR/mes',
    incluye: 'Hosting, dominio, copias de seguridad, actualizaciones y hasta 2 cambios al mes. Soporte por WhatsApp.',
  },
  {
    nombre: 'Crecimiento',
    precio: '129 EUR/mes',
    incluye: 'Todo lo anterior, mas SEO local continuo, informe mensual de visitas y una mejora al mes para subir en Google.',
  },
];

export const proceso = [
  {
    n: '01',
    titulo: 'Hablamos',
    desc: 'Me cuentas tu negocio y que quieres conseguir. Sin tecnicismos.',
  },
  {
    n: '02',
    titulo: 'Lo construyo',
    desc: 'Diseno y monto tu web o app, y te la enseno paso a paso.',
  },
  {
    n: '03',
    titulo: 'Creces',
    desc: 'La lanzamos, la posicionamos en Google y sigo a tu lado.',
  },
];

export const faq = [
  {
    q: 'Es caro?',
    a: 'Una web no es un gasto, es lo que te trae clientes cada mes. Te doy un presupuesto cerrado antes de empezar, asi sabes exactamente lo que pagas.',
  },
  {
    q: 'Y luego desapareces?',
    a: 'No. Hablas siempre conmigo, antes y despues de lanzar. Si algo falla o quieres cambios, sabes a quien escribir y te contesto.',
  },
  {
    q: 'No entiendo de tecnologia.',
    a: 'No hace falta entender nada. Te lo explico en cristiano y de lo tecnico me encargo yo.',
  },
  {
    q: 'Cuanto tarda?',
    a: 'Tu web lista y posicionandose en semanas, no meses.',
  },
];
