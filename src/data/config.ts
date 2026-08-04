// ============================================================
//  CONTENIDO DE LA WEB  ·  Mialdea Studio
//  Todo el texto de cara al cliente vive aquí.
//  Reglas de estilo: primera persona del singular, sin jerga,
//  sin guiones largos como puntuación, sin la palabra "auditoría".
// ============================================================

const rawBase = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

/** Prefija la base del sitio (GitHub Pages) a las rutas internas. */
export const link = (path: string): string => {
  if (!path || path.startsWith('#') || path.startsWith('http') || path.startsWith('tel:')) return path;
  return `${rawBase}${path}`;
};

export const site = {
  name: 'Mialdea Studio',
  founder: 'Miguel Mialdea',
  tagline: 'La hace la misma persona que te coge el teléfono.',
  // VERIFICAR: número publicado hoy en mialdeastudio.com
  telefono: '617 983 637',
  telefonoLink: 'tel:+34617983637',
  whatsapp: '34617983637',
  // RELLENAR: pon tu foto en public/miguel.jpg
  foto: '/miguel.jpg',
  location: 'Valencia',
  url: 'https://mialdeastudio.com',
  // Capacidad real declarada. Actualizar el mes cuando cambie.
  huecoDesde: ''  // vacio = 'ahora mismo'. Poner un mes solo cuando NO haya hueco ya,
};

/** Mensaje por defecto del botón de WhatsApp. */
export const waLink = (texto = 'Hola Miguel, te escribo por lo de la web de mi negocio.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;

export const nav = [
  { label: 'Cómo trabajo', href: '/como-trabajo' },
  { label: 'Trabajos', href: '/trabajos' },
  { label: 'Quién soy', href: '/quien-soy' },
  { label: 'Qué preguntar', href: '/que-preguntar' },
  { label: 'Contacto', href: '/contacto' },
];

// ============================================================
//  SEO  ·  título y descripción escritos a mano para cada página
// ============================================================
export const seo = {
  home: {
    title: 'Webs para negocios de Valencia que viven de que les llamen | Mialdea Studio',
    description:
      'Hago la web de tu negocio y te dejo la ficha de Google en condiciones, para que cuando alguien busque tu oficio y tu pueblo te llame a ti. Valencia y alrededores.',
  },
  comoTrabajo: {
    title: 'Cómo trabajo, paso a paso y con precios | Mialdea Studio',
    description:
      'Los cinco pasos, lo que incluye cada web, en cuántas semanas la tienes y qué necesito de ti. Léelo antes de que hablemos y la llamada dura quince minutos.',
  },
  trabajos: {
    title: 'Trabajos que he hecho para negocios de Valencia y alrededores | Mialdea Studio',
    description:
      'Webs que he hecho para negocios de aquí, contadas por dentro: qué pasaba antes, qué hice y qué cambió después.',
  },
  quienSoy: {
    title: 'Quién soy: Miguel Mialdea, hago webs en Valencia | Mialdea Studio',
    description:
      'Me llamo Miguel Mialdea, vivo en Valencia y llevo siete años programando. Hago webs para negocios de aquí al lado, de una en una.',
  },
  quePreguntar: {
    title: 'Ocho preguntas que hacerle a quien te vaya a hacer la web',
    description:
      'Las ocho preguntas que yo le haría a cualquiera que me fuese a hacer la web, me la encargues a mí o a otro. Si no te las saben contestar, ya sabes algo importante.',
  },
  contacto: {
    title: 'Hablamos de la web de tu negocio | Mialdea Studio',
    description:
      'Cuéntame qué negocio tienes y qué te está pasando. Te contesto yo, normalmente el mismo día. Valencia y provincia.',
  },
  gracias: {
    title: 'Recibido, te escribo yo | Mialdea Studio',
    description: 'He recibido tu mensaje. Te contesto yo, normalmente el mismo día.',
  },
};

export const sectores = [
  'Fontanería',
  'Electricidad',
  'Reformas',
  'Climatización',
  'Hostelería de barrio',
  'Tiendas',
  'Comercio local',
];

// ============================================================
//  PORTADA  ·  se habla de síntomas, no de servicios
// ============================================================
export const portada = {
  kicker: 'Webs para negocios de Valencia',
  h1: '¿Sabes cuando llamas a un fontanero, no te lo coge, y acabas llamando al siguiente?',
  h1Corto: 'Hay gente buscando lo que tú haces, en tu pueblo, y está llamando a otro.',
  sub: 'Pues a tu negocio le pasa al revés: hay gente buscando lo que tú haces, en tu pueblo, y está llamando a otro.',

  // Síntoma, suposición falsa, problema real, solución
  problema: {
    titulo: 'Lo que suele estar pasando de verdad',
    parrafos: [
      'Te entran menos llamadas y parece cosa de la crisis. Casi nunca lo es: sales en Google, pero desde el móvil cuesta llamarte, y la mitad de la gente se va antes de encontrar el teléfono.',
      'Eso no se arregla con una web más bonita. Se arregla con una web hecha para que te llamen.',
    ],
  },

  // El villano con cifras
  villano: {
    titulo: 'El coste que ya pagas',
    intro: 'Alquilar clientes sale caro, y la factura ya la tienes.',
    // Cifra pendiente de confirmar con clientes reales (2026-08-04). Se usa 14 €
    // por contacto, que es lo manejado hasta ahora. Los numeros de abajo cuadran
    // entre si a proposito: 14 x 10 x 12 = 1.680, y 1.200 / 140 = 8,6 meses.
    // Si al preguntar a fontaneros de la zona sale otra cifra, hay que rehacer
    // los tres numeros a la vez, no solo el primero.
    puntos: [
      'En los portales de anuncios cada contacto se paga, y suele rondar los 14 euros.',
      'Con diez contactos al mes son unos 140 euros al mes, casi 1.700 al año.',
      'Compites con otros cuatro por el mismo trabajo y por el mismo aviso.',
      'Y ese contacto nunca llega a ser tuyo: el mes que dejas de pagar, desaparece.',
    ],
    cierre:
      'Lo que le pagas al portal en nueve meses te paga la web entera. Y la web sigue siendo tuya.',
  },

  // El cliente escaldado
  escaldado: {
    titulo: 'Si ya pagaste una web y no sirvió',
    parrafos: [
      'Pasa mucho: te la hizo alguien de confianza, ahora nadie contesta, y prometieron tres cosas y llegó una.',
      'No es que lo hicieran mal. Es que aquello valía hace seis años, y hoy casi todo el mundo te busca desde el móvil.',
    ],
  },
};

// ============================================================
//  CAPACIDAD DECLARADA  ·  es verdad y hay que sostenerla
// ============================================================
export const capacidad = {
  titulo: 'Los proyectos los llevo de uno en uno',
  parrafos: [
    'Las webs las hago yo solo y las llevo de una en una: empiezo la siguiente cuando la anterior está entregada. Eso es justo lo que hace que funcionen.',
    site.huecoDesde
      ? `Tengo el hueco cubierto hasta ${site.huecoDesde}. Si te corre prisa, dímelo y te digo si puedo mover algo o te paso el contacto de alguien.`
      : 'Ahora mismo tengo hueco. Si te corre prisa, dímelo y vemos fechas.',
  ],
};

// ============================================================
//  HISTORIAS  ·  clientes reales contados en anónimo
//  Sin nombres y sin resultados que no pueda respaldar.
// ============================================================
export const historias = [
  {
    quien: 'Un restaurante venezolano',
    titulo: 'Sabores de casa que casi nadie encontraba',
    resumen:
      'Cinco estrellas de verdad, pero casi invisible en Google. Web nueva y ficha puesta al día.',
    etiqueta: 'Web y ficha de Google',
    color: 'terracota',
    portada: '',
  },
  {
    quien: 'Un fontanero',
    titulo: 'Un oficio de toda la vida que da el salto',
    resumen:
      'Su primera web: aparecer justo cuando alguien busca su oficio en su zona.',
    etiqueta: 'Web de servicios',
    color: 'verde',
    portada: '',
  },
  {
    quien: 'Una marca de café tradicional',
    titulo: 'De vender a comercios a vender a tu casa',
    resumen:
      'Toda la vida vendiendo a bares. Ahora también a tu casa, con tienda online.',
    etiqueta: 'Tienda online',
    color: 'terracota',
    portada: '',
  },
];

// ============================================================
//  EL CASO CONTADO A FONDO  ·  estructura de seis puntos
//  Altamira se publica con nombre. Falta testimonio y capturas.
// ============================================================
export const caso = {
  slug: 'restaurante-venezolano-burjassot',
  titular: 'Altamira, restaurante venezolano en Burjassot',
  nombreCliente: 'Altamira',
  resumen:
    'Una familia que cocina en Valencia lo que cocinaba en su casa. La comida y el trato ya funcionaban. Lo que no funcionaba era todo lo que pasa antes de que alguien cruce la puerta.',
  bloques: [
    {
      titulo: 'El problema, con sus palabras',
      texto: '{{PENDIENTE: frase literal de Altamira. Pedirsela en la proxima conversacion}}',
    },
    {
      titulo: 'Lo que hice',
      texto:
        'Le monté la web desde cero, con la carta y las fotos de sus platos, el botón de llamar y el de reservar arriba del todo, y pensada para el móvil, que es desde donde entra casi todo el mundo. Y le puse la ficha de Google al día, porque seguía apuntando a una página antigua que ya no era suya.',
    },
    {
      titulo: 'Lo que encontré y no era evidente',
      texto:
        'Que la ficha de Google llevaba meses mandando a la gente a una página vieja del negocio, hecha en otra plataforma. Quien lo buscaba llegaba a un sitio que no era el suyo, y eso no se arreglaba con una web nueva si nadie tocaba la ficha.',
    },
    {
      titulo: 'Lo que pasó',
      texto:
        'La web lleva 596 visitantes unicos. Es el dato que tengo medido hoy: gente que llega. Lo que estoy pidiendo ahora es el otro lado, cuantas reservas y cuantas llamadas salen de ahi, porque es lo que de verdad importa y casi ningun negocio lo tiene contado.',
    },
    {
      titulo: 'El antes y el después',
      texto:
        '{{PENDIENTE: capturas de la web anterior y la nueva, hechas en un móvil de verdad, no sobre fondo blanco. Y una foto del sitio o de la reunión}}',
    },
  ],
  testimonio: {
    texto: '{{PENDIENTE: testimonio del cliente con las tres partes: qué problema tenías antes, por qué me elegiste, qué ha cambiado desde entonces}}',
    autor: '{{PENDIENTE: nombre y negocio, solo con permiso}}',
  },
};

// ============================================================
//  SERVICIOS  ·  sin jerga
// ============================================================
export const servicios = [
  {
    titulo: 'Webs',
    desc: 'Webs a medida, rápidas y pensadas para el móvil, para que te encuentren en Google y para que quien entra acabe llamando, reservando o comprando.',
    bullets: [
      'Diseño único, sin plantillas',
      'Sales cuando alguien busca tu oficio y tu pueblo',
      'Listas en semanas',
    ],
    desde: 'Desde 600 €',
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
    precio: '600 €',
    desc: 'Para aparecer y que te encuentren.',
    incluye: ['Web de una página', 'Móvil primero', 'Botón de WhatsApp', 'Alta en Google'],
    destacado: false,
  },
  {
    nombre: 'Negocio',
    precio: '1.200 €',
    desc: 'El que elige la mayoría.',
    incluye: ['Hasta 5 páginas', 'SEO local de tu zona', 'Google Business', 'Textos que venden'],
    destacado: true,
  },
  {
    nombre: 'A medida',
    precio: 'Hablamos',
    desc: 'Reservas, pedidos, lo que necesites.',
    incluye: ['Funciones a medida', 'Reservas o pedidos', 'Integraciones', 'Lo que tu negocio pida'],
    destacado: false,
  },
];

// ============================================================
//  CÓMO TRABAJO  ·  la página que se manda al referido
// ============================================================
export const comoTrabajo = {
  intro: [
    'Si te ha llegado esta página por alguien que ya trabajó conmigo, léela antes de que hablemos. Así la llamada dura quince minutos y no cuarenta, y los dos sabemos si esto encaja.',
    'Trabajo con negocios de la provincia de Valencia que viven de que les llamen. Fontanería, electricidad, reformas, climatización, hostelería de barrio. Gente que hace el trabajo con las manos y que pierde dinero cada vez que suena un teléfono que no es el suyo.',
  ],

  paraQuien: {
    si: {
      titulo: 'Para quién es',
      puntos: [
        'Negocios de la provincia de Valencia que viven de que les llamen o de que entren por la puerta.',
        'Gente que ya tiene clientes y buen boca a boca, pero que no aparece cuando la buscan.',
        'Quien quiere hablar con la persona que hace el trabajo, no con un comercial.',
      ],
    },
    no: {
      titulo: 'Para quién no es',
      puntos: [
        'Quien busca lo más barato del mercado. Ahí siempre va a haber alguien por debajo de mí.',
        'Quien quiere la web para mañana. Son dos semanas y no las acorto.',
        'Quien no puede dedicarle una llamada de veinte minutos y media hora a mitad.',
      ],
    },
  },

  pasos: [
    {
      n: '01',
      titulo: 'Hablamos',
      desc: 'Veinte minutos por teléfono. Te pregunto por el negocio, no por la web. Al final de esa llamada ya sabes cuánto cuesta y cuándo lo tendrías.',
    },
    {
      n: '02',
      titulo: 'Precio cerrado',
      desc: 'Te lo mando por escrito el mismo día, en un folio. No hay extras ni sorpresas a mitad. Lo que pone ahí es lo que se paga.',
    },
    {
      n: '03',
      titulo: 'Te enseño una dirección',
      desc: 'Una, no tres. Te la enseño en un móvil de verdad, con tus fotos, al lado de las webs de los que compiten contigo. Si algo no te encaja, se cambia ahí, que es cuando es barato cambiarlo.',
    },
    {
      n: '04',
      titulo: 'La construyo',
      desc: 'Dos semanas. Vas viendo cómo avanza y te escribo aunque no haya novedades, para que no tengas que preguntar tú.',
    },
    {
      n: '05',
      titulo: 'La publicamos y me quedo treinta días',
      desc: 'Publicada, con tu ficha de Google puesta a punto y con el formulario llegando a tu WhatsApp, probado por mí. Durante treinta días cambias lo que quieras sin coste.',
    },
  ],

  productos: {
    titulo: 'Lo que hago, y lo que cuesta',
    intro: 'Precio cerrado por escrito antes de empezar. No hay versiones intermedias ni extras que aparezcan a mitad.',
    items: [
      {
        nombre: 'Presencia',
        precio: '600 €',
        plazo: 'Publicada en dos semanas',
        desc: 'Una sola página bien hecha, pensada para que quien te busque desde el móvil te llame en menos de un minuto.',
        incluye: [
          'Los textos escritos contigo y tus fotos',
          'El botón de llamar y el de WhatsApp donde se ven',
          'Tu ficha de Google revisada y puesta al día',
          'Que salgas cuando alguien busque tu oficio y tu pueblo',
        ],
        cierre: 'Pago único. La web es tuya y el dominio va a tu nombre.',
      },
      {
        nombre: 'Negocio',
        precio: '1.200 €',
        plazo: 'Publicada en dos semanas',
        desc: 'Lo mismo, más una página para cada cosa que haces y para cada zona en la que trabajas. Es la que tiene sentido si vives de que te encuentren y no solo del boca a boca.',
        incluye: [
          'Hasta cinco páginas, una por servicio o por zona',
          'Tus trabajos con fotos',
          'El trabajo a fondo para que salgas en Google en tu zona',
          'Tu ficha de Google revisada y puesta al día',
        ],
        cierre: 'Pago único. La web es tuya y el dominio va a tu nombre.',
      },
      {
        nombre: 'A medida',
        precio: 'Hablamos',
        plazo: 'El plazo te lo digo en la primera llamada',
        desc: 'Cuando lo que necesitas no es una web, sino que el negocio funcione por dentro: reservas, pedidos, o esa herramienta que hoy llevas en una libreta.',
        incluye: [
          'Reservas o pedidos desde la propia web',
          'Lo que necesites conectar con lo que ya usas',
          'Hecho para tu caso, no adaptado de otro',
          'Todo lo de la web completa, incluido',
        ],
        cierre: 'Precio cerrado por escrito antes de empezar.',
      },
    ],
  },

  queNecesito: {
    titulo: 'Qué necesito de ti',
    texto:
      'Una llamada de veinte minutos al principio y una revisión de media hora a mitad. Fotos de trabajos tuyos, si las tienes (si no, lo resolvemos). Y que me contestes en dos o tres días cuando te pregunte algo, porque si no, las dos semanas se convierten en dos meses y eso no le gusta a ninguno de los dos.',
  },

  planCuidado: {
    titulo: 'Que no te tengas que acordar de ella nunca',
    precio: '49 € al mes',
    parrafos: [
      'Tu web al día, rápida y funcionando. Si algo se rompe, es problema mío, no tuyo.',
      'Todos los meses te escribo con un dato: cuánta gente te ha llamado desde la web y por qué búsqueda te están encontrando. Y voy revisando tu ficha de Google, las reseñas nuevas y que el formulario siga llegándote.',
      'Entra todo lo que sea mantenerla viva y los cambios pequeños del día a día. Si lo que quieres es una sección nueva o algo que ya es otro proyecto, te lo digo antes de tocar nada y te paso el precio aparte.',
      'El primer mes, si ves que no te compensa, me lo dices y te devuelvo lo que has pagado.',
    ],
  },

  rescate: {
    titulo: 'Si se te ha caído la web',
    precio: '90 €',
    parrafos: [
      'O se te ha quedado sin dominio, o el que te la llevaba ha desaparecido, o hay algo roto que te está costando llamadas.',
      'Precio cerrado y puesto desde antes de que me llames. No te cobro más por estar en un apuro.',
      'Los mensajes de fin de semana los contesto el lunes por la mañana. Si necesitas a alguien disponible a cualquier hora, dímelo y te digo lo que cuesta.',
    ],
  },

  noHago: {
    titulo: 'Lo que no hago',
    texto:
      'No hago tiendas online con cientos de productos, ni logos, ni redes sociales. No cobro por posiciones en Google que no dependan de mí. Y no cojo webs por debajo de mi paquete más pequeño, no por soberbia, sino porque por debajo de eso no puedo hacer algo de lo que me sienta responsable dentro de un año.',
  },

  garantias: {
    titulo: 'Lo que te puedo prometer y lo que no',
    intro:
      'No te puedo prometer que vayas a tener más clientes. Nadie que te lo prometa te está diciendo la verdad, porque eso depende también de que cojas el teléfono, de la temporada y de veinte cosas más.',
    subtitulo: 'Lo que sí te prometo, porque depende solo de mí:',
    puntos: [
      'Que la web cargue en menos de tres segundos en el móvil, con datos y sin wifi.',
      'Que el botón de llamar se vea sin bajar nada.',
      'Que el formulario te llegue al WhatsApp, probado por mí antes de publicar.',
      'Que tu ficha de Google quede completa, con horario, categoría y fotos.',
      'Que si me escribes entre semana, te contesto antes de 24 horas.',
    ],
    cierre:
      'Si quieres una garantía de resultados, existe, pero eso ya no es una web, es otra cosa y cuesta bastante más, porque entonces el riesgo lo asumo yo.',
  },

  escalon: {
    titulo: 'Si todavía no quieres una web',
    precio: '90 €, y si luego hacemos la web te lo descuento',
    texto:
      'Esto no es la llamada gratis de quince minutos, donde te digo por encima las tres cosas más gordas. Aquí reviso a fondo la web, la ficha de Google y las reseñas, y te lo dejo TODO por escrito: qué hay que arreglar, en qué orden y por qué. Te sirve me lo encargues a mí o a otro. Si luego me encargas la web, te lo descuento.',
  },

  charla: {
    texto:
      'Doy una charla que se llama "12 razones por las que a un negocio de aquí no le entran llamadas desde Google". Si estás en una asociación de gremio, en un grupo de autónomos o en un coworking y te interesa, escríbeme. Es gratis y la sala la pones tú.',
  },
};

// ============================================================
//  LA REVISIÓN DE QUINCE MINUTOS  ·  el escalón del 20 %
// ============================================================
export const revision = {
  titulo: 'Te la miro y te digo qué falla. Quince minutos, sin coste.',
  parrafos: [
    'Abro tu web y tu ficha en el móvil, como las abre tu cliente, y te cuento por teléfono las tres cosas que te están costando llamadas.',
    'Sin informe y sin lista de correo. Si te apañas tú con lo que te cuente, tan amigos.',
  ],
  cta: 'Pídeme la revisión',
};

// ============================================================
//  QUIÉN SOY
// ============================================================
export const quienSoy = {
  titulo: 'Quién soy',
  parrafos: [
    'Me llamo Miguel Mialdea y vivo en Valencia. Llevo siete años programando, la mayor parte para empresas grandes, y desde hace un tiempo hago webs para negocios de aquí al lado.',
    'Empecé con esto por un fontanero de la zona que perdía llamadas porque cuando alguien buscaba su oficio y el nombre de su pueblo, salía todo el mundo menos él.',
    'Los proyectos los llevo de uno en uno. No es una técnica de venta, es lo que me permite coger el teléfono cuando me llamas.',
  ],
  resumenPortada:
    'Me llamo Miguel Mialdea, vivo en Valencia y llevo siete años programando, la mayor parte para empresas grandes. Ahora hago webs para negocios de aquí al lado, y las hago yo, de principio a fin.',
};

// ============================================================
//  QUÉ PREGUNTAR A QUIEN TE HAGA LA WEB
// ============================================================
export const quePreguntar = {
  titulo: 'Ocho preguntas que hacerle a quien te vaya a hacer la web',
  intro:
    'Da igual si me lo encargas a mí o a otro. Estas son las preguntas que yo le haría, y si alguna no te la saben contestar, ya sabes algo importante.',
  preguntas: [
    {
      q: 'Enséñame dos webs que hayas hecho de mi mismo gremio y dime cuántas llamadas les entran ahora.',
      a: 'Casi nadie puede enseñar resultados de un oficio concreto.',
    },
    {
      q: 'Si la web se cae un martes por la tarde, ¿quién me coge el teléfono y en cuánto tiempo?',
      a: 'Que te den un nombre y un número, no un formulario de soporte.',
    },
    {
      q: '¿La web es mía? ¿El dominio está a mi nombre? ¿Y el hosting?',
      a: 'Si la respuesta es que no, estás alquilando.',
    },
    {
      q: '¿Se ve el botón de llamar en el móvil sin bajar nada?',
      a: 'Ábrela en tu móvil delante de él.',
    },
    {
      q: '¿Cuánto tarda en cargar con datos, fuera del wifi?',
      a: 'Si tarda más de tres segundos, la mitad de la gente ya se ha ido.',
    },
    {
      q: '¿Vas a tocar mi ficha de Google?',
      a: 'Muchas veces esa ficha te trae más que la web entera.',
    },
    {
      q: '¿El precio es cerrado o es una estimación?',
      a: 'Es la misma pregunta que le harías a un reformista.',
    },
    {
      q: '¿Qué pasa al mes siguiente?',
      a: 'Si no hay una respuesta clara, la respuesta es "nada".',
    },
  ],
  cierre:
    'Si quieres, imprímela y llévatela a la reunión. Y si al hacérmelas a mí ves que alguna no te cuadra, dímelo y hablamos de eso primero.',
};

// ============================================================
//  FAQ
// ============================================================
export const faq = [
  {
    q: '¿Estás tú solo?',
    a: 'Sí. El que te habla es el que va a hacer la web y el que te va a coger el teléfono cuando la tengas. Cuando llamaste a una empresa grande, ¿hablaste con el dueño?',
  },
  {
    q: '¿De quién es la web?',
    a: 'Tuya. El dominio va a tu nombre, el hosting también, y te entrego todas las claves. Si un día te quieres ir con otro, te vas con todo.',
  },
  {
    q: '¿Y si la web se cae un martes por la tarde?',
    a: `Me llamas a mí, a este mismo número. No hay atención al cliente ni tickets.`,
  },
  {
    q: 'Ya pagué una web una vez y no sirvió de nada.',
    a: 'Seguramente tengas razón, para mucha gente no sirve. La pregunta que yo te haría es por qué te sigue preocupando el tema.',
  },
  {
    q: 'Mi sobrino me la hace por 300.',
    a: 'Pues genial, de verdad. Si te la hace bien, ahórrate el dinero. Lo único que te pido es que le preguntes antes las ocho cosas que tengo escritas en la página de qué preguntar.',
  },
  {
    q: '¿Tú sabes de mi oficio?',
    a: 'No, y tú vas a olvidar más de lo tuyo de lo que yo pueda aprender. El experto eres tú. Lo que yo tengo es la forma de sacarte lo que sabes y ponerlo de manera que tu cliente lo entienda y te llame.',
  },
  {
    q: '¿Cuánto tardas?',
    a: 'Dos semanas desde que tengo lo que necesito de ti.',
  },
  {
    q: 'No entiendo de tecnología.',
    a: 'No hace falta. Te lo explico en cristiano y de lo técnico me encargo yo.',
  },
];

// ============================================================
//  CONTACTO  ·  formulario corto que llega al WhatsApp
// ============================================================
export const contacto = {
  titulo: 'Cuéntame qué te está pasando',
  intro:
    'Rellena esto en un minuto y te contesto yo, normalmente el mismo día. Si lo prefieres, llámame directamente y hablamos.',
  campos: {
    nombre: { label: 'Tu nombre', placeholder: 'Cómo te llamas' },
    telefono: { label: 'Tu teléfono o WhatsApp', placeholder: '600 000 000' },
    negocio: { label: 'Qué negocio tienes', placeholder: 'Fontanero, bar, tienda...' },
    problema: { label: 'Qué te pasa', placeholder: 'Cuéntamelo como se lo contarías a un amigo' },
  },
  horquilla: {
    label: 'Para hacerme una idea, ¿por dónde te mueves?',
    opciones: [
      'Menos de 900 euros',
      'Entre 900 y 1.500',
      'Entre 1.500 y 3.000',
      'Más de 3.000',
      'Ni idea, dime tú',
    ],
  },
  origen: {
    label: '¿Cómo has llegado hasta mí?',
    opciones: [
      'Me lo dijo alguien',
      'Buscando en Google',
      'Por redes sociales',
      'Ya nos conocíamos',
      'Otra cosa',
    ],
  },
  boton: 'Enviármelo por WhatsApp',
  nota: 'Al enviarlo se abre tu WhatsApp con el mensaje escrito. Solo tienes que darle a enviar.',
};

export const gracias = {
  titulo: 'Recibido.',
  parrafos: [
    'Te escribo yo, no un robot, y normalmente el mismo día.',
    `Si es urgente y no quieres esperar, llámame al ${site.telefono}.`,
  ],
  cierre: 'Mientras tanto, si te apetece ver cómo trabajo antes de que hablemos, está aquí.',
};

// ============================================================
//  PÁGINAS DE GREMIO  ·  una por oficio, síntomas en sus palabras
//  La de reformas porta el copy de la landing anterior
//  (_landing-anterior/index.html), con los precios de hoy.
//  Regla dura: cero cifras inventadas. Datos usables: 7 años
//  programando, proyectos de uno en uno, 600/1.200/49, 596 visitantes
//  de Altamira, 14 € por contacto en portales.
// ============================================================

export type Gremio = {
  slug: string;
  menuLabel: string;
  enlaceEtiqueta: string;
  seo: { title: string; description: string };
  kicker: string;
  h1: string;
  sub: string;
  waMensaje: string;
  sintomas: {
    kicker: string;
    titulo: string;
    intro?: string;
    puntos: { b: string; s: string }[];
    cierre?: string;
  };
  caso?: { titulo: string; texto: string; url?: string; urlLabel?: string; interno?: string };
  incluye: { titulo: string; filas: { th: string; td: string }[] };
  objeciones: { q: string; a: string }[];
};

/** Lo que comparten las cuatro páginas de gremio. */
export const gremioComun = {
  precio: {
    kicker: 'Precio cerrado',
    principal: '600 €',
    principalNota: 'una página, pago único',
    resto: 'Web completa de varias páginas, 1.200 €. Las dos con el SEO de tu zona incluido y publicadas en dos semanas.',
    letraPequena: 'Te doy la cifra exacta por escrito antes de empezar nada.',
  },
  quien: {
    titulo: 'Yo mismo, y soy ingeniero',
    texto:
      'Me llamo Miguel Mialdea y llevo siete años programando, la mayor parte para empresas grandes. Aquí no hay comerciales: hablas conmigo y la hago yo, de una en una.',
    enlaceTexto: 'Cómo trabajo, paso a paso y con precios',
  },
  zona: {
    titulo: 'Dónde trabajo',
    texto:
      'En Valencia y en los pueblos de alrededor: Torrent, Paiporta, Catarroja, Alfafar, Sedaví, Picanya, Albal, Burjassot, Massanassa y Benetússer. Si estás un poco más lejos, pregunta, que casi todo se resuelve por teléfono.',
  },
  otrosTitulo: 'También hago webs para',
  cta: {
    titulo: 'Cuéntame tu negocio',
    texto: 'Te digo qué cambiaría, cuánto costaría y cuánto tardaría. Gratis y sin venta al final.',
    nota: 'Te contesto yo, no un robot, y normalmente el mismo día.',
    escalon:
      'Si todavía no lo ves claro, pídeme la revisión de quince minutos: miro tu web y tu ficha de Google como las mira tu cliente y te digo qué falla. Sin coste.',
  },
};

export const gremios: Gremio[] = [
  {
    slug: 'webs-para-reformas',
    menuLabel: 'Para reformas',
    enlaceEtiqueta: 'empresas de reformas',
    seo: {
      title: 'Webs para empresas de reformas en Valencia y alrededores | Mialdea Studio',
      description:
        'Hago la web de tu empresa de reformas y trabajo tu ficha de Google, para que te encuentren sin pagar por cada contacto. Precio cerrado desde 600 euros y lista en dos semanas.',
    },
    kicker: 'Reformas, climatización y solar · Valencia y alrededores',
    h1: 'Que te encuentren sin pagar por cada contacto',
    sub: 'Hago la web de tu empresa de reformas y trabajo tu ficha de Google, para que el cliente te llame a ti directamente.',
    waMensaje: 'Hola Miguel. Tengo una empresa de reformas en ______ y quería preguntarte por una web.',
    sintomas: {
      kicker: 'Los portales',
      titulo: 'Alquilar clientes sale caro',
      intro:
        'En los portales cada contacto se paga, y suele rondar los 14 euros. Y el mismo aviso se lo mandan a varios a la vez.',
      puntos: [
        { b: 'Diez contactos al mes, casi 1.700 € al año', s: 'Y el año que viene, otra vez.' },
        { b: 'Compites por el mismo trabajo', s: 'Llegáis tres o cuatro al mismo cliente.' },
        { b: 'El contacto nunca es tuyo', s: 'El mes que dejas de pagar, desapareces.' },
      ],
      cierre:
        'Lo que le pagas al portal en nueve meses te paga la web entera. Y la web sigue siendo tuya.',
    },
    incluye: {
      titulo: 'Un precio, todo dentro',
      filas: [
        { th: 'Una página por servicio', td: 'Reforma, clima, solar, aerotermia.' },
        { th: 'Que te encuentren', td: 'Tu ficha de Google y el SEO de tu zona.' },
        { th: 'Fotos de tus obras', td: 'Tus obras, no fotos de catálogo.' },
        { th: 'Presupuesto en un clic', td: 'Formulario corto y teléfono a mano.' },
        { th: 'Los textos, contigo', td: 'Yo los escribo, tú opinas.' },
        { th: 'Es tuya', td: 'La web y el dominio, a tu nombre.' },
      ],
    },
    objeciones: [
      {
        q: '¿Y si ya tengo web?',
        a: 'La miro y te digo si basta con arreglar cuatro cosas o hace falta rehacerla, aunque sea lo más barato.',
      },
      {
        q: '¿Tengo que dejar el portal?',
        a: 'No. Mantenlo al principio. La idea es depender menos de él con el tiempo, no cortarlo de golpe.',
      },
      {
        q: '¿Cuánto tarda en salir en Google?',
        a: 'La ficha se mueve en semanas. Las búsquedas de tu zona, de dos a cuatro meses. No te prometo nada más rápido.',
      },
      {
        q: '¿Hay que pagar todos los meses?',
        a: 'No. Pagas una vez y la web es tuya. Si quieres que yo la cuide, son 49 € al mes, opcional y sin permanencia.',
      },
    ],
  },
  {
    slug: 'webs-para-fontaneros',
    menuLabel: 'Para fontaneros',
    enlaceEtiqueta: 'fontaneros',
    seo: {
      title: 'Webs para fontaneros en Valencia y alrededores | Mialdea Studio',
      description:
        'Hago webs para fontaneros, pensadas para pedir el trabajo que quieres: reformas de baño y no solo chapuzas. Con tu ficha de Google al día. Desde 600 euros, en dos semanas.',
    },
    kicker: 'Fontanería · Valencia y alrededores',
    h1: 'Webs para fontaneros en Valencia y alrededores',
    sub: 'Para que cuando alguien busque fontanero y el nombre de tu pueblo, salgas tú. Y para que el trabajo que te llegue sea el que quieres.',
    waMensaje: 'Hola Miguel. Soy fontanero en ______ y quería preguntarte por una web.',
    sintomas: {
      kicker: 'El día a día',
      titulo: 'Te sonará todo esto',
      puntos: [
        { b: 'Te llaman para chapuzas de 40 euros', s: 'Y la reforma del baño se la lleva otro.' },
        { b: 'Pierdes llamadas con las manos en la obra', s: 'Y el que no te localiza llama al siguiente.' },
        { b: 'Buscas tu oficio y tu pueblo en Google', s: 'Y sale todo el mundo menos tú.' },
      ],
      cierre:
        'La web se hace al revés: pide el trabajo que quieres, enseña tus baños terminados, y el presupuesto te llega al WhatsApp para contestarlo cuando puedas.',
    },
    caso: {
      titulo: 'La de Mariano la puedes abrir ahora mismo',
      texto:
        'A Mariano, fontanero en Valencia, le hice su primera web. No te voy a contar cuántas llamadas le entran, porque eso lo estamos midiendo todavía y no vendo humo. Lo que sí puedes hacer es abrirla desde el móvil y ver cómo pide el trabajo. Así trabajaría la tuya.',
      url: 'https://marianofontanero.com',
      urlLabel: 'marianofontanero.com',
    },
    incluye: {
      titulo: 'Un precio, todo dentro',
      filas: [
        { th: 'Una página por servicio', td: 'Baños, calderas, desatascos, urgencias.' },
        { th: 'Que te encuentren', td: 'Tu ficha de Google y el SEO de tu zona.' },
        { th: 'Fotos de tus trabajos', td: 'Tus baños, no fotos de catálogo.' },
        { th: 'Presupuesto en un clic', td: 'Formulario corto que te llega al WhatsApp.' },
        { th: 'Los textos, contigo', td: 'Yo los escribo, tú opinas.' },
        { th: 'Es tuya', td: 'La web y el dominio, a tu nombre.' },
      ],
    },
    objeciones: [
      {
        q: '¿Y si ya tengo web?',
        a: 'La miro y te digo si basta con arreglar cuatro cosas o hace falta rehacerla, aunque sea lo más barato.',
      },
      {
        q: '¿Me vas a prometer más llamadas?',
        a: 'No. Eso no te lo puede prometer nadie honrado. Lo que sí te prometo es lo que depende de mí: que cargue rápido, que el botón de llamar se vea y que el formulario te llegue.',
      },
      {
        q: '¿Hay que pagar todos los meses?',
        a: 'No. Pagas una vez y la web es tuya. Si quieres que yo la cuide, son 49 € al mes, opcional y sin permanencia.',
      },
      {
        q: '¿Cuánto tardas?',
        a: 'Dos semanas desde que me pasas fotos y datos.',
      },
    ],
  },
  {
    slug: 'webs-para-electricistas',
    menuLabel: 'Para electricistas',
    enlaceEtiqueta: 'electricistas',
    seo: {
      title: 'Webs para electricistas en Valencia y alrededores | Mialdea Studio',
      description:
        'Hago webs para electricistas: boletines, instalaciones y urgencias. Para que quien compara tres presupuestos te encuentre a ti. Desde 600 euros, lista en dos semanas.',
    },
    kicker: 'Electricidad · Valencia y alrededores',
    h1: 'Webs para electricistas en Valencia y alrededores',
    sub: 'Quien necesita un boletín o una instalación busca en Google y pide dos o tres presupuestos. Si no apareces, no entras en el reparto.',
    waMensaje: 'Hola Miguel. Soy electricista en ______ y quería preguntarte por una web.',
    sintomas: {
      kicker: 'El día a día',
      titulo: 'Lo que suele estar pasando',
      puntos: [
        { b: 'El que busca compara tres', s: 'Si no sales, ni siquiera entras en la comparación.' },
        { b: 'El boletín lo busca gente con prisa', s: 'Necesita el papel ya y llama al primero que sale.' },
        { b: 'Las urgencias van al que contesta', s: 'Y al que tiene el teléfono a la vista en el móvil.' },
      ],
      cierre:
        'La web se hace para eso: una página por cada cosa que haces, tu zona con nombre y apellidos, y el teléfono donde se ve.',
    },
    caso: {
      titulo: 'Todavía no he hecho la web de un electricista',
      texto:
        'Te lo digo tal cual, antes de que lo preguntes. He hecho la de un fontanero y la de un restaurante, y las dos se pueden abrir desde el móvil. El método es el mismo: tu oficio, tu zona y que llamarte cueste un toque.',
      interno: '/trabajos',
      urlLabel: 'Ver esos trabajos',
    },
    incluye: {
      titulo: 'Un precio, todo dentro',
      filas: [
        { th: 'Una página por servicio', td: 'Boletines, instalaciones, cuadros, urgencias.' },
        { th: 'Que te encuentren', td: 'Tu ficha de Google y el SEO de tu zona.' },
        { th: 'Fotos de tus trabajos', td: 'Tus instalaciones, no fotos de catálogo.' },
        { th: 'Presupuesto en un clic', td: 'Formulario corto que te llega al WhatsApp.' },
        { th: 'Los textos, contigo', td: 'Yo los escribo, tú opinas.' },
        { th: 'Es tuya', td: 'La web y el dominio, a tu nombre.' },
      ],
    },
    objeciones: [
      {
        q: '¿Y si ya tengo web?',
        a: 'La miro y te digo si basta con arreglar cuatro cosas o hace falta rehacerla, aunque sea lo más barato.',
      },
      {
        q: '¿Cuánto tarda en salir en Google?',
        a: 'La ficha se mueve en semanas. Las búsquedas de tu zona, de dos a cuatro meses. No te prometo nada más rápido.',
      },
      {
        q: '¿Hay que pagar todos los meses?',
        a: 'No. Pagas una vez y la web es tuya. Si quieres que yo la cuide, son 49 € al mes, opcional y sin permanencia.',
      },
      {
        q: '¿Cuánto tardas?',
        a: 'Dos semanas desde que me pasas fotos y datos.',
      },
    ],
  },
  {
    slug: 'webs-para-bares-y-restaurantes',
    menuLabel: 'Para bares y restaurantes',
    enlaceEtiqueta: 'bares y restaurantes',
    seo: {
      title: 'Webs para bares y restaurantes en Valencia y alrededores | Mialdea Studio',
      description:
        'Hago webs para bares y restaurantes: la carta que se lee en el móvil, tus fotos y la ficha de Google al día. Desde 600 euros, lista en dos semanas.',
    },
    kicker: 'Bares y restaurantes · Valencia y alrededores',
    h1: 'Webs para bares y restaurantes en Valencia y alrededores',
    sub: 'Antes de cruzar tu puerta, casi todo el mundo te ha mirado en el móvil. La pregunta es qué se encuentra.',
    waMensaje: 'Hola Miguel. Tengo un bar o un restaurante en ______ y quería preguntarte por la web.',
    sintomas: {
      kicker: 'El móvil de tu cliente',
      titulo: 'Lo que se encuentra tu cliente',
      puntos: [
        { b: 'La ficha de Google manda', s: 'Horario viejo o fotos oscuras, y se van al de al lado.' },
        { b: 'La carta, en un PDF que no se lee', s: 'O con los precios de hace dos años.' },
        { b: 'Reservas por teléfono en hora punta', s: 'Suena, nadie puede cogerlo, mesa perdida.' },
      ],
      cierre:
        'La web pone eso en orden: la carta que se lee en el móvil, tus fotos de verdad, y reservar a un toque por llamada o WhatsApp.',
    },
    caso: {
      titulo: 'Altamira, en Burjassot, la puedes abrir ahora',
      texto:
        'Le hice la web a Altamira, un restaurante venezolano de Burjassot, con su carta y las fotos de sus platos, y le puse al día la ficha de Google, que apuntaba a una página que ya no era suya. La web lleva 596 visitantes únicos: es el dato que tengo medido, gente que llega.',
      url: 'https://altamiragcp.es',
      urlLabel: 'altamiragcp.es',
    },
    incluye: {
      titulo: 'Un precio, todo dentro',
      filas: [
        { th: 'La carta que se lee en el móvil', td: 'Al día y sin PDF.' },
        { th: 'Que te encuentren', td: 'Tu ficha de Google con fotos y horario al día.' },
        { th: 'Tus platos, tus fotos', td: 'Lo que sale de tu cocina, no un banco de imágenes.' },
        { th: 'Reservar en un clic', td: 'Llamada o WhatsApp, a la vista.' },
        { th: 'Los textos, contigo', td: 'Yo los escribo, tú opinas.' },
        { th: 'Es tuya', td: 'La web y el dominio, a tu nombre.' },
      ],
    },
    objeciones: [
      {
        q: '¿Y si ya tengo web?',
        a: 'La miro y te digo si basta con arreglar cuatro cosas o hace falta rehacerla, aunque sea lo más barato.',
      },
      {
        q: '¿Y cuando cambie la carta?',
        a: 'Los cambios del día a día entran en el plan de cuidado de 49 € al mes. Me mandas la carta nueva y la subo yo.',
      },
      {
        q: '¿Hay que pagar todos los meses?',
        a: 'No. Pagas una vez y la web es tuya. El plan de 49 € es opcional y sin permanencia.',
      },
      {
        q: '¿Cuánto tardas?',
        a: 'Dos semanas desde que tengo tu carta, tus fotos y tus datos.',
      },
    ],
  },
];

// ============================================================
//  AVISO DEL AUTODIAGNÓSTICO  ·  recoger interés, no construirlo
// ============================================================
export const proximamente = {
  titulo: 'Estoy montando una cosa',
  parrafos: [
    'Un test corto para saber por qué tu negocio no aparece cuando alguien te busca en Google. Diez preguntas, cinco minutos, y te digo las tres cosas concretas que tendrías que arreglar. Gratis y sin llamadas.',
    'Todavía no está hecho. Si te interesa, déjame tu WhatsApp y te aviso cuando esté.',
  ],
  cta: 'Avísame cuando esté',
};
