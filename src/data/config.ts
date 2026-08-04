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
    title: 'Trabajos que he hecho para negocios de Valencia | Mialdea Studio',
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
  sub: 'Eso le está pasando a tu negocio ahora mismo, pero al revés: hay gente buscando lo que tú haces, en tu pueblo, y está llamando a otro.',

  // Síntoma, suposición falsa, problema real, solución
  problema: {
    titulo: 'Lo que suele estar pasando de verdad',
    parrafos: [
      'Te entran menos llamadas que antes. Lo normal es pensar que es cosa de la crisis, o que el de al lado está tirando los precios.',
      'Lo que yo suelo encontrar es otra cosa: el negocio sí sale en Google, pero desde el móvil no hay forma rápida de llamar, la ficha no tiene horario, y la mitad de la gente se va antes de encontrar el teléfono.',
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
      'Pasa mucho. Casi siempre me cuentan lo mismo: que se la hizo alguien de confianza, que ahora no hay forma de tocarla, que nadie contesta cuando hay que cambiar un horario, y que prometieron tres cosas y llegó una.',
      'Yo no voy a decirte que quien te la hizo lo hiciera mal. Casi nunca es eso. Es que aquello se hacía así hace seis años y hoy Google lo cuenta de otra manera, y ahora casi todo el mundo te busca desde el móvil.',
    ],
  },
};

// ============================================================
//  CAPACIDAD DECLARADA  ·  es verdad y hay que sostenerla
// ============================================================
export const capacidad = {
  titulo: 'Cojo un cliente nuevo al mes',
  parrafos: [
    'Cojo un cliente nuevo al mes porque las hago yo solo y porque la mitad de mi tiempo se va en estar pendiente de las que ya he hecho. Eso es justo lo que hace que funcionen.',
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
      'Una familia que se trajo su cocina en la maleta. Cinco estrellas reales, pero casi invisible en Google. Le construí su sitio y trabajé para que lo encuentren antes de llegar a la puerta.',
    etiqueta: 'Web y ficha de Google',
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
    quien: 'Una marca de café tradicional',
    titulo: 'De vender a comercios a vender a tu casa',
    resumen:
      'Toda la vida sirviendo café a negocios locales. Ahora da el salto para llegar también a particulares, sin perder lo de siempre.',
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
    'Miro tu web y tu ficha de Google, la abro en el móvil como la abre tu cliente, y te cuento por teléfono las tres cosas que están costándote llamadas.',
    'No te mando un informe ni te meto en una lista de correo. Te lo cuento por teléfono y ya está. Si de ahí sale trabajo, bien. Y si te apañas tú con lo que te cuente, también.',
    'Si quieres el repaso completo y por escrito, con todo lo que hay que tocar y en qué orden, eso es otra cosa y cuesta 90 euros.',
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
    'Cojo un cliente nuevo al mes. No es una técnica de venta, es lo que me permite coger el teléfono cuando me llamas.',
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
