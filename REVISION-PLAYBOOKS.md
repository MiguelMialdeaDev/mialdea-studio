# Revisión de conformidad · mialdeastudio.com contra los playbooks The Futur

Fecha: 2026-08-04. Fuentes: los cuatro playbooks de `jarvis/backend/data/learning/the-futur/`
(captación, venta, precio, operativa) leídos completos, contrastados con `src/data/config.ts`,
las páginas de `src/pages/`, los componentes de `src/components/` y el estado en vivo de
mialdeastudio.com (comprobado el 2026-08-04).

No se repite aquí lo ya revisado y decidido en las dos auditorías previas (historia inventada,
Burjassot, 7 años, precios 600/1.200/49/90, portada recortada, revisión gratis vs 90 €, cifras
del villano, FAQPage schema, robots.txt, medición, promesa de coger el teléfono, plazo de 2
semanas).

Veredicto corto: **la web está sustancialmente alineada con los playbooks.** Los principios de
precio, escalón del 20 %, escasez, escaldado y síntomas están bien ejecutados, en varios casos
con los guiones literales del corpus. Los incumplimientos reales que quedan se concentran en un
solo frente: **la prueba.** La web argumenta como dicen los playbooks pero todavía no enseña
nada (ni cara, ni webs hechas, ni testimonio, ni resultado de negocio). Y hay un despiste de
código: el aviso del autodiagnóstico no se renderiza en ninguna página.

---

## 1. CUMPLE

Precio y empaquetado (`_PLAYBOOK-precio.md`):

- **Precio publicado como paquete, nunca como mínimo suelto** (§3.1 a 3.3). Los 600 y 1.200
  viven solo en `/como-trabajo`, cada uno con qué incluye, plazo y qué necesita del cliente. La
  portada no lleva ningún número. El caso del "desde X" que mató los leads está evitado.
- **La página "cómo trabajo" como enlace previo al referido** (§3.3). Existe y su intro dice
  exactamente eso: "Si te ha llegado esta página por alguien que ya trabajó conmigo, léela antes
  de que hablemos. Así la llamada dura quince minutos". Es el efecto medido del caso del corpus.
- **Plan de cuidado como resultado, no como horas** (§6). Precio de lista público (49 €, dentro
  de la banda 45 a 60), "si algo se rompe es problema mío", dato mensual dentro ("te escribo con
  un dato: cuánta gente te ha llamado"), frontera explícita ("una sección nueva ya es otro
  proyecto, te lo digo antes"), garantía del primer mes, y sin rehén técnico (dominio y claves
  del cliente, "si un día te quieres ir, te vas con todo").
- **Rescate urgente con tarifa cerrada y publicada de antemano** (§7). 90 €, con la frase ética
  del playbook casi literal: "No te cobro más por estar en un apuro". Y el límite de fin de
  semana declarado sobre lo que hace Miguel, no sobre lo que hace el cliente (§7.4).
- **Garantías solo sobre lo que controla** (§ LO QUE NO TRASLADA). "No te puedo prometer más
  clientes" más la lista de lo que sí (carga, botón, formulario, ficha, 24 h) y la frase de la
  garantía de resultados que "cuesta bastante más porque el riesgo lo asumo yo". Impecable.
- **Horquillas de presupuesto marcables en el formulario** (§3.3), la pieza que el playbook
  llama "casi todo el beneficio sin ningún riesgo". Están, con cinco opciones.
- **Números redondos** (§4.2) y dos productos con precio cerrado, sin horquillas ambiguas.

Captación (`_PLAYBOOK-captacion.md`):

- **Escalón del 20 %, con sus dos peldaños bien separados** (§3). Revisión gratis de quince
  minutos por teléfono (no se llama auditoría, no se manda informe por correo, tres cosas
  concretas) y repaso completo por 90 € descontable del proyecto, diferenciados de forma
  explícita en `revision` y `comoTrabajo.escalon`. Incluye el filtro "el que paga 90 paga 600".
- **La charla con nombre y número ofrecida en la web** ("12 razones por las que a un negocio de
  aquí no le entran llamadas desde Google", "la sala la pones tú"). Tal cual el guion.
- **Hablar en síntomas, no en servicios** (§5). La portada abre con el síntoma ("te entran menos
  llamadas"), nombra la suposición falsa ("la crisis, el de al lado tira precios") y da el
  problema real (móvil, ficha, teléfono ilocalizable). Es el molde de cuatro pasos de venta §4
  aplicado por escrito.
- **La fórmula "¿sabes cuándo...?" como presentación repetible** en el H1 de portada, y el
  tagline de una frase que un tercero puede repetir ("La hace la misma persona que te coge el
  teléfono").
- **Escasez real y justificada por reparto de horas** (§ diagnóstico). "Cojo un cliente nuevo al
  mes... la mitad de mi tiempo se va en estar pendiente de las que ya he hecho. Eso es justo lo
  que hace que funcionen." Es la versión honesta que pide la v3, con `huecoDesde` en config para
  sostenerla cuando se llene. Y decir "ahora mismo tengo hueco" es lo que manda §6 (la red te
  filtra por educación), no el "disponible para proyectos" prohibido.
- **"¿Cómo has llegado hasta mí?" en el formulario**, la única forma barata de saber qué canal
  funciona.
- **Aviso del autodiagnóstico redactado para validar antes de construir** ("Todavía no está
  hecho. Si te interesa, déjame tu WhatsApp")... aunque no está publicado, ver NO CUMPLE 5.

Venta (`_PLAYBOOK-venta.md`), en la parte que una web puede ejecutar:

- **Armar al cliente con preguntas para la competencia**: `/que-preguntar` es la ejecución
  completa de la jugada documentada dos veces, con las dos preguntas exactas (webs del gremio
  con llamadas, y quién coge el teléfono un martes) más seis que tocan la herida del escaldado.
  "Imprímela y llévatela a la reunión" incluida.
- **El cliente escaldado**: sección propia en portada que valida sin dejar mal al proveedor
  anterior ("aquello se hacía así hace seis años y hoy Google lo cuenta de otra manera", molde
  literal), y FAQ con los guiones del corpus: "ya pagué una web" (respuesta resbaladiza), "mi
  sobrino me la hace por 300" (sin desprecio, derivando a las ocho preguntas), "¿estás tú solo?"
  (con el remate de "¿hablaste con el dueño?"), "¿tú sabes de mi oficio?" (experiencia en el
  método, no en el sector).
- **Preencuadre de los prejuicios del escaldado** (§2): precio cerrado por escrito, plazo, qué
  pasa el mes siguiente y qué es el plan de cuidado están contestados antes de la llamada.
- **Sacar la objeción antes de que salga**: "Para quién no es" (lo más barato, prisa, sin
  tiempo) es el pre encuadre que autodelata al cliente problemático gratis.
- **Una dirección, no tres** (§8): el paso 03 lo declara ("Una, no tres") y promete enseñarla
  en un móvil de verdad al lado de la competencia, que es exactamente cómo dice el playbook que
  se presenta.
- **Proceso de cinco pasos con nombre** (precio §5.6: "cinco pasos, ni tres ni siete"), el
  método dibujado como calmante para el escaldado.

Operativa (`_PLAYBOOK-operativa.md`), reglas de conversión aplicadas a la propia web:

- Teléfono y WhatsApp pulsables y visibles sin scroll (hero, FAB fijo, footer), sin `mailto:`,
  formulario que desemboca en WhatsApp con página de gracias que dice qué pasa ahora, títulos y
  descripciones SEO escritos a mano, sin nada que arranque solo, microtexto cuidado ("te
  contesto yo, no un robot"). Sin imágenes de stock, así que riesgo legal de imágenes cero.
- La portada quedó con una sola acción de cierre (la revisión), en línea con "una sola llamada a
  la acción por página".

---

## 2. NO CUMPLE

Ordenado por daño. Los cuatro primeros son el mismo problema de fondo: la web afirma y no
demuestra, y el playbook insiste en que el cliente elige la opción menos arriesgada, no la
mejor argumentada.

**1. Falta la cara. La foto de Miguel es un 404 en producción.**
- Playbook: operativa §4.1, "Cara y nombre de la persona. La página de quién soy está casi
  siempre entre las cinco más visitadas, y sin cara generas sospecha, porque hay mucho operador
  turbio que se parece a ti". Y precio §5.6: "tu web y tu propio documento tienen que aguantar
  el examen. Forman parte del precio que puedes pedir".
- Dónde: `src/data/config.ts:24-25` (comentario "RELLENAR: pon tu foto en public/miguel.jpg"),
  `src/pages/quien-soy.astro:27-36` y su fallback de las líneas 84-96, que en vivo muestra el
  texto "Foto de Miguel pendiente". Comprobado: `https://mialdeastudio.com/miguel.jpg` devuelve
  404 y `public/` no contiene la imagen.
- Corrección: subir una foto real a `public/miguel.jpg`. Es la corrección con mejor ratio
  esfuerzo/beneficio de toda esta revisión, y el placeholder actual hace daño activo: enseña al
  visitante que la web del que vende webs está sin terminar.

**2. Se venden webs y no se enseña ni una web.**
- Playbook: captación §4, documentado como fallo real: "si vendes webs, tiene que haber webs.
  Hay un caso de un estudio que se anunciaba como diseño y desarrollo web sin un solo proyecto
  web enseñado". Y sobre el formato: "sin las fotos, los bocetos, el antes y el después, no
  tienes una historia, tienes una ficha de producto"; "cómo se enseña: la web en el móvil de
  verdad... no una captura sobre fondo blanco".
- Dónde: `/trabajos` no contiene ninguna captura, ningún enlace y ninguna imagen.
  `src/data/config.ts:159-187` (las tres historias con `portada: ''`),
  `public/images/proyectos/` está vacío (solo `.gitkeep`), y el bloque "El antes y el después"
  del caso está en `{{PENDIENTE}}` (`config.ts:220-223`), así que se filtra y no se muestra
  (`trabajos.astro:58`). marianofontanero.com está viva y ni se enlaza ni se captura.
- Corrección: con permiso de cada cliente, capturas de las webs en un móvil real (antes y
  después donde exista), y enlace a las webs vivas. Si el permiso tarda, al menos las capturas
  anónimas de Altamira, que ya se publica con nombre. Sin esto, `/trabajos` es la página más
  débil de la web siendo la que debería ser la más fuerte.

**3. Cero testimonios en toda la web.**
- Playbook: operativa §4.1, "Testimonios visibles, y con estructura: qué problema tenías antes,
  por qué me elegiste, qué resultado has tenido. 'Muy profesional' no convierte. Lo que
  convierte es el antes". La web exige esto a las webs que entrega y no lo cumple en la propia.
- Dónde: `src/data/config.ts:225-228`, testimonio de Altamira en `{{PENDIENTE}}`; no hay ningún
  otro en el sitio.
- Corrección: ejecutar el guion que ya dan los playbooks (captación §4 y operativa §4.2):
  escribir tú el borrador con las tres preguntas y mandárselo a Altamira y a Mariano ("le das
  tu toque o lo mandas tal cual"). Es una acción de captación, no de redacción.

**4. El caso Altamira se queda en ficha de producto: sin palabras del cliente y sin resultado de negocio.**
- Playbook: captación §4, estructura de seis puntos. Faltan el punto 3 ("el reto, contado con
  las palabras del cliente", hoy `{{PENDIENTE}}` en `config.ts:201-203`) y el punto 5
  ("resultados con cifras"): 596 visitantes únicos es tráfico, no negocio, y la propia web lo
  admite ("lo que estoy pidiendo ahora es el otro lado"). El punto 4 sí está bien resuelto (el
  hallazgo de la ficha apuntando a la página vieja es el dato que solo pertenece a ese negocio
  y salva el test de "no se puede copiar a otro proyecto").
- Corrección: la llamada de resultados a los 60 o 90 días (captación, momento 4) para salir con
  la cifra de reservas o llamadas y la frase literal del cliente en la misma conversación. Está
  descrita en el playbook como el momento en que se recogen el dato y el referido a la vez.

**5. El aviso del autodiagnóstico no está publicado en ninguna página.**
- Playbook: captación §3, "publica la intención y constrúyelo solo si diez o veinte personas
  dicen que sí". El texto existe y está bien escrito, pero no se renderiza.
- Dónde: `src/data/config.ts:600-607` y `src/components/Proximamente.astro` no se importan
  desde ninguna página. El comentario de `src/pages/index.astro:14` dice que el bloque vive en
  `/como-trabajo`, y es falso: `como-trabajo.astro` no lo incluye. Hoy no hay forma de que
  nadie levante la mano.
- Corrección: añadir `<Proximamente />` en `/como-trabajo` (junto al bloque "Si todavía no
  quieres una web", como dice el comentario), o borrar componente, export y comentario si se ha
  decidido no validarlo. Lo que no puede quedar es el estado actual, que ni valida ni está
  limpio.

**6. Dos de las tres historias no cuentan ni síntoma ni resultado.**
- Playbook: captación §4, el test del caso: "si el texto se puede copiar y pegar tal cual en
  otro proyecto, está describiendo tu proceso genérico y no vale".
- Dónde: `src/data/config.ts:169-187`. "Un manitas que decide digitalizarse" (fontanero) y "da
  el salto para llegar también a particulares" (café) valen para cualquier fontanero y
  cualquier marca de café: no hay problema concreto, no hay dato, no hay antes. La del
  restaurante sí tiene un antes ("cinco estrellas reales, pero casi invisible en Google").
- Corrección: reescribir los dos resúmenes con el síntoma que tenía ese negocio y un dato
  propio, aunque sean dos frases. Con Mariano el material existe (las llamadas que perdía).

**7. Menor: restos de código que reintroducirían fallos si se activan.**
- `src/components/Servicios.astro` y los exports `servicios` y `paquetes`
  (`config.ts:234-275`) no se renderizan en ninguna página, pero contienen exactamente lo que
  el playbook de precio prohíbe publicar: un "Desde 600 €" suelto, y copy con jerga de vendedor
  ("Textos que venden", "El que elige la mayoría"). Si alguien los vuelve a montar en portada,
  se deshace la decisión de precio §3.3 sin darse cuenta. Corrección: borrarlos o dejar un
  comentario de por qué no deben volver a portada.
- El `slug` del caso (`config.ts:194`) no lleva el nombre del cliente ("El nombre del cliente
  en la URL del caso", captación §4, marcada como poco confirmada pero gratis) y además hoy no
  se usa: el caso no tiene URL propia, vive en `/trabajos`. Si algún día se hace página por
  caso, que sea `/trabajos/altamira`.

**Tensión menor, para decidir con criterio y no por inercia:** el H1 de portada es la pregunta
del fontanero, y la regla de conversión de operativa §4.1 dice "el H1 dice qué es el negocio,
no una frase ingeniosa". Lo compensan el kicker ("Webs para negocios de Valencia"), el title
SEO y el subtítulo, y la pregunta es a la vez la fórmula de presentación de captación §1, así
que hay un motivo real para mantenerla. Se deja anotado como excepción consciente, no como
incumplimiento: la web propia no pasa al pie de la letra la prueba del ojo entornado que ella
misma promete aplicar a las webs de clientes.

---

## 3. NO APLICA A LA WEB

Principios de conversación, proceso u operación que la web no puede cumplir ni incumplir. Se
listan para que nadie los confunda con carencias del sitio.

- **Todo el playbook de venta como conversación**: encuadre y permiso, cualificar dinero,
  decisor y fecha, rosa/espina/brote, las siete preguntas, la escala del 1 al 10 y "¿por qué no
  un cuatro?", escucha y devolución, decir el número de viva voz y callarse, el cierre
  hipotético en tercera persona, "deja de vender en cuanto diga que sí", el seguimiento y el
  post mortem. La web solo pre encuadra; el resto se juega en la llamada.
- **Captación activa**: los cinco momentos del referido, escribir el mensaje al que recomienda,
  cerrar el círculo, partners y prescriptores (gestorías, entrevistas de mercado, el salón
  trimestral, la junta de la asociación), las tres listas, la campaña periódica a la base, el
  plan semanal de 15 a 16 horas, dar la charla (la web solo la anuncia, y eso ya lo hace).
- **La hoja de criterios de una cara para gestorías y el dossier de una tarde**: son activos
  aparte, no páginas de la web.
- **Posventa**: llamada de realineamiento, cadencia mensual con dato, check-in a los tres
  meses, nota manuscrita, el detalle no prometido. La web describe el plan de cuidado; su
  cumplimiento es operación.
- **Precio en ejecución**: ancla invertida de viva voz, silencio tras el número, defensa de
  objeciones, la propuesta de dos hojas, cobro 50/25/25, la escalera 750/1.500 y 900/1.900 (que
  tocará la web solo cuando existan los 3 casos del mismo gremio), los tres tramos por
  titularidad (viven en el papel de la propuesta, no en la web; la web publica los dos
  productos, que es lo acordado).
- **Operativa de entrega**: acuerdo de una página, ficha de contenidos, calendario con plazos
  del cliente, rondas numeradas, feedback agrupado, protocolo del que desaparece, registro de
  licencias de imágenes de proyectos de cliente, decisión del subcontratado.
- **"Publica como Miguel, no como Mialdea Studio"** (captación §5): es una regla de contenido
  en redes. La web lo modula bien: marca en la cabecera, pero todo el texto en primera persona
  y con la cara (pendiente) y el nombre de Miguel delante.
- **Web de negocio ficticio, autodiagnóstico construido, casos 2 y 3 del gremio**: activos
  futuros del plan trimestral; su ausencia hoy no es incumplimiento de la web.
