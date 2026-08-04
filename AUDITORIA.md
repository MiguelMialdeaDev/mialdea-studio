# Auditoría de contenido: mialdeastudio.com

Fecha: 2026-08-04. Alcance: `src/data/config.ts`, `src/pages/*.astro`, `src/components/*.astro`, `src/layouts/BaseLayout.astro`, `astro.config.mjs`, `CAMBIOS-PENDIENTES.md` y las cinco páginas publicadas (comprobadas en vivo).

Esto es solo un informe. No se ha editado ningún fichero salvo este.

Hechos con los que se ha contrastado todo:

* Miguel Mialdea, Valencia. Siete años programando en total, cinco y medio de Android. Desarrollador senior por cuenta ajena a jornada completa.
* Disponibilidad real: 15 a 16 horas semanales.
* Precios: landing 600 €, web completa 1.200 €, plan de cuidado 49 €/mes, rescate 90 €, revisión a fondo 90 € descontable.
* Capacidad: un cliente nuevo al mes.
* Teléfono: 617 983 637.
* Clientes reales: Altamira (restaurante venezolano, 596 visitantes únicos, sin datos de reservas ni llamadas, sin testimonio), Mariano (fontanero, 150 €, su web tiene visitas pero no genera llamadas), Cafés Maeso (hermana y cuñado, quieren empezar a vender a particulares), un TPV de kiosco no publicable y una web de ecommerce sin datos de resultados.
* Ningún cliente ha traído todavía un referido.
* El dato de 14 € por contacto está sin confirmar.

Recuento: 9 hallazgos GRAVES, 13 MEDIOS, 12 LEVES y 8 dudas.

Nota positiva: no hay ni un solo guion largo ni medio (`—`, `–`) en todo el repositorio. Comprobado con búsqueda sobre todos los ficheros.

---

## GRAVE

### G1. Hay una historia que no corresponde a ningún cliente real

**Fichero:** `src/data/config.ts`, líneas 178 a 186. Se publica en la portada (`src/pages/index.astro:41`, con `limite={3}`, así que sale entre las tres primeras) y en `/trabajos`.

**Qué dice:**

```
quien: 'Una diseñadora',
titulo: 'El talento estaba. Faltaba el escaparate',
resumen: 'Mucho talento y la valentía de emprender. Le monté un portfolio a su altura para dar el salto digital y empezar a ofrecer lo suyo.',
etiqueta: 'Portfolio',
```

**Por qué está mal:** no encaja con ninguno de los cinco clientes reales. No hay ninguna diseñadora ni ningún portfolio en la lista. Además arrastra una segunda mentira: `src/components/Historias.astro:13` afirma que "Los negocios que enseño aquí son clientes de verdad", y `src/pages/trabajos.astro:34` que "Son clientes de verdad". Mientras esa tarjeta siga ahí, esas dos frases son falsas.

**Corrección propuesta:** borrar el objeto entero (líneas 178 a 186). Si se quieren mantener cuatro tarjetas, sustituirlo por el ecommerce real, y solo si es cliente y se puede enseñar:

```ts
  {
    quien: 'Una tienda online',
    titulo: 'Vender también fuera del mostrador',
    resumen: 'Un negocio que ya vendía en persona y necesitaba poder vender desde el móvil de sus clientes. Le monté la tienda entera, de la ficha de producto al pago.',
    etiqueta: 'Tienda online',
    color: 'ocre',
    portada: '',
  },
```

---

### G2. La página de trabajos dice que todo va en anónimo y justo debajo publica el nombre del cliente

**Ficheros:** `src/pages/trabajos.astro`, líneas 33 a 36, y `src/data/config.ts`, líneas 203 a 205 (más `src/pages/trabajos.astro:51` y `:54`, que imprimen el nombre dos veces).

**Qué dice:** "Son clientes de verdad. Mientras no tengo su permiso por escrito para poner su nombre y sus fotos, los cuento en anónimo". Y a continuación: "Altamira, restaurante venezolano en Valencia".

**Por qué está mal:** es una contradicción visible en la misma pantalla y en producción. Además `CAMBIOS-PENDIENTES.md:78` y `:148` dicen que el permiso por escrito de ese cliente sigue pendiente, y el comentario de `config.ts:200` dice "Publicado en anónimo hasta tener el permiso por escrito". Publicar el nombre de un negocio real sin permiso escrito es un riesgo innecesario, y encima con una frase al lado que dice que no se hace.

**Corrección propuesta, opción A (hay permiso):** borrar el párrafo de `trabajos.astro:33-36` y el comentario de `config.ts:200-201`, y anonimizar solo las historias que sigan sin permiso.

**Corrección propuesta, opción B (no hay permiso todavía):** en `config.ts`:

```ts
  titular: 'Un restaurante venezolano en Valencia',
  nombreCliente: 'Cliente de hostelería, Valencia',
```

Y borrar la línea 54 de `trabajos.astro`, que repite el nombre justo debajo del titular que ya lo dice.

---

### G3. El mismo entregable se ofrece gratis en una página y a 90 € en otra

**Ficheros:** `src/data/config.ts`, líneas 453 a 459 (sale en portada y en `/contacto`) frente a líneas 437 a 442 (sale en `/como-trabajo`).

**Qué dice, gratis:** "Te la miro y te digo qué falla. Quince minutos, sin coste. Miro tu web y tu ficha de Google, la abro en el móvil como la abre tu cliente, y te cuento por teléfono las tres cosas que están costándote llamadas."

**Qué dice, 90 €:** "Te reviso a fondo lo que tienes (la web, la ficha de Google, las reseñas) y te dejo por escrito las tres cosas que hay que arreglar y en qué orden."

**Por qué está mal:** un cliente que lea las dos páginas ve lo mismo (mirar la web y la ficha, decir las tres cosas que fallan) con dos precios distintos. La única diferencia real es "por escrito", y no está dicha como diferencia. Eso mata la venta de los 90 € y hace dudar del resto de precios.

**Corrección propuesta:** dejar clara la diferencia. En `config.ts:437-442`:

```ts
  escalon: {
    titulo: 'Si todavía no quieres una web',
    precio: '90 €, y si luego hacemos la web te lo descuento',
    texto:
      'La llamada de quince minutos te da tres titulares. Esto es lo otro: me siento con tu web, tu ficha de Google y tus reseñas, las comparo con las de los tres que salen por delante de ti, y te mando un documento con todo lo que hay que arreglar, en qué orden y qué gana cada cosa. Luego te lo explico por teléfono en media hora. Si después me encargas la web, te lo descuento.',
  },
```

---

### G4. Se publican como hechos dos cifras que el propio código reconoce sin confirmar

**Fichero:** `src/data/config.ts`, líneas 122 a 127. Sale en la portada, bloque "El coste que ya pagas".

**Qué dice:** "En los portales de anuncios cada contacto se paga, y suele rondar los 14 euros" y "Compites con otros cuatro por el mismo trabajo y por el mismo aviso".

**Por qué está mal:** el comentario de las líneas 117 a 121 dice literalmente que la cifra está pendiente de confirmar con clientes reales. Los 14 € son el eje de todo el bloque, y de ahí salen los 140 al mes, los casi 1.700 al año y los nueve meses del cierre. Lo de "otros cuatro" tampoco tiene origen. Es justo el tipo de número que un fontanero que sí paga un portal puede desmontar en una frase.

**Corrección propuesta, mientras no esté confirmado:** quitar la cifra y dejar el mecanismo, que sí es cierto y no depende de ningún dato:

```ts
    puntos: [
      'En los portales de anuncios no pagas por el trabajo, pagas por cada contacto, salga o no salga.',
      'Ese mismo aviso se lo mandan a la vez a otros cuantos, así que pagas por competir.',
      'Y ese contacto nunca llega a ser tuyo: el mes que dejas de pagar, desaparece.',
    ],
    cierre:
      'Lo que le pagas al portal en menos de un año te paga la web entera. Y la web sigue siendo tuya.',
```

Cuando tenga la cifra real preguntada a dos o tres fontaneros de la zona, se vuelven a poner los cuatro números a la vez (contacto, mes, año y meses de amortización), no solo el primero.

---

### G5. El plan de cuidado promete un dato que hoy no se puede medir

**Fichero:** `src/data/config.ts`, línea 399. Sale en `/como-trabajo`, dentro del plan de 49 €/mes.

**Qué dice:** "Todos los meses te escribo con un dato: cuánta gente te ha llamado desde la web y por qué búsqueda te están encontrando."

**Por qué está mal:** no hay ninguna medición instalada. `src/layouts/BaseLayout.astro`, líneas 53 a 56, tiene un TODO pendiente para medir clics en llamar, clics en WhatsApp y envíos de formulario, y `CAMBIOS-PENDIENTES.md:176` lo confirma. Ni siquiera en la web propia. Con Altamira pasa lo mismo: hay visitantes, pero el propio caso dice que las llamadas y las reservas todavía se están pidiendo. Es una promesa mensual, recurrente y fácil de comprobar por el cliente.

**Corrección propuesta:** prometer lo que sí se puede medir el día uno, y dejar lo demás para cuando esté montado:

```ts
      'Todos los meses te escribo con un dato: cuánta gente ha entrado, cuántos han pulsado el botón de llamar o el de WhatsApp, y por qué búsquedas te están encontrando. Y voy revisando tu ficha de Google, las reseñas nuevas y que el formulario siga llegándote.',
```

Y antes de vender el primer plan, instalar la medición de clics en llamar y en WhatsApp.

---

### G6. Se promete disponibilidad de urgencias que no cabe en una jornada completa ajena

**Ficheros:** `src/data/config.ts`, líneas 534 a 535 (FAQ), líneas 489 a 490 (`/que-preguntar`) y 405 a 413 (rescate de 90 €).

**Qué dice:** "¿Y si la web se cae un martes por la tarde? Me llamas a mí, a este mismo número. No hay atención al cliente ni tickets." Y en `/que-preguntar` se le exige al proveedor "quién me coge el teléfono y en cuánto tiempo".

**Por qué está mal:** un martes por la tarde Miguel está trabajando por cuenta ajena. El bloque de rescate solo cubre el fin de semana ("Los mensajes de fin de semana los contesto el lunes por la mañana"), y deja entender que entre semana se contesta al momento. La única promesa horaria del resto de la web son 24 horas (`config.ts:431`), que es lo realista. Prometer descolgar el teléfono en horario laboral es lo primero que se rompe y es lo que más quema.

**Corrección propuesta:** en `config.ts:534-535`:

```ts
    a: 'Me escribes a este mismo número y te contesto yo, no un ticket. Entre semana, antes de 24 horas. Si es algo que tumba la web entera, lo miro esa misma tarde.',
```

Y en el rescate, `config.ts:411`, dejar el horario dicho de frente:

```ts
      'Contesto entre las siete y las nueve de la tarde entre semana, y los mensajes de fin de semana el lunes por la mañana. Si necesitas a alguien disponible a cualquier hora, dímelo y te digo lo que cuesta.',
```

---

### G7. Las dos semanas de plazo no caben en 15 a 16 horas semanales, y menos aún en el paquete de 1.200 €

**Ficheros:** `src/data/config.ts`, líneas 349 y 362 ("Publicada en dos semanas"), línea 333 (paso 04), línea 308 ("Son dos semanas y no las acorto"), línea 551 (FAQ) y línea 391 ("las dos semanas se convierten en dos meses").

**Por qué está mal:** con 15 a 16 horas semanales son 30 a 32 horas en dos semanas. Pero el propio bloque de capacidad (`config.ts:148`) dice que "la mitad de mi tiempo se va en estar pendiente de las que ya he hecho", así que quedan 15 o 16 horas reales para construir. En ese hueco entra una landing bien hecha, no cinco páginas con textos escritos con el cliente, fotos, SEO local por zona y ficha de Google. El plazo se dice cuatro veces y encima con un "no las acorto", que es lo que lo convierte en compromiso.

**Corrección propuesta:** plazos distintos por producto. En `config.ts:349` dejar "Publicada en dos semanas" para Presencia y en `config.ts:362` poner:

```ts
        plazo: 'Publicada en cuatro semanas',
```

En el paso 04 (`config.ts:333`):

```ts
      desc: 'Dos semanas la de una página, cuatro la completa. Vas viendo cómo avanza y te escribo aunque no haya novedades, para que no tengas que preguntar tú.',
```

En "para quién no es" (`config.ts:308`):

```ts
        'Quien quiere la web para mañana. Son dos semanas la sencilla y cuatro la completa, y no lo acorto.',
```

En la FAQ (`config.ts:551`):

```ts
    a: 'Dos semanas la de una página y cuatro la completa, desde que tengo lo que necesito de ti.',
```

Y en `config.ts:391` cambiar "las dos semanas se convierten en dos meses" por "el plazo se convierte en el doble".

---

### G8. Se anuncia una charla como si ya se diera

**Fichero:** `src/data/config.ts`, líneas 444 a 447. Sale en `/como-trabajo` y en `/quien-soy`.

**Qué dice:** "Doy una charla que se llama '12 razones por las que a un negocio de aquí no le entran llamadas desde Google'."

**Por qué está mal:** no consta en ningún sitio que esa charla se haya dado nunca, ni que exista el material. "Doy" afirma que es algo que ya ocurre. Si alguien de una asociación llama mañana, hay que tenerla escrita.

**Corrección propuesta:**

```ts
  charla: {
    texto:
      'Estoy preparando una charla que se llama "12 razones por las que a un negocio de aquí no le entran llamadas desde Google". Si estás en una asociación de gremio, en un grupo de autónomos o en un coworking y te interesa, escríbeme y la doy. Es gratis y la sala la pones tú.',
  },
```

Si ya la ha dado alguna vez, se deja "Doy" y se añade dónde, que es lo que la hace creíble.

---

### G9. El caso del fontanero se cuenta como un salto conseguido, y no lo es

**Fichero:** `src/data/config.ts`, líneas 169 a 177. Sale en la portada bajo el título "Gente de aquí que ha dado el salto" y en `/trabajos` bajo "Otros negocios con los que he trabajado".

**Qué dice:** "Un oficio de toda la vida que da el salto. Un manitas que decide digitalizarse: una web para especializarse y aparecer justo cuando alguien busca su oficio en su zona."

**Por qué está mal:** la web de Mariano recibe visitas pero no genera llamadas. Presentarla bajo "gente que ha dado el salto" y con "aparecer justo cuando alguien busca su oficio" se lee como resultado conseguido. Es un problema abierto, no un caso. Y encima es el mismo cliente con el que se abre `/quien-soy`, así que se refuerza dos veces.

**Corrección propuesta:** contar la intención sin insinuar el resultado.

```ts
  {
    quien: 'Un fontanero',
    titulo: 'Salir en Google con su oficio y su pueblo',
    resumen:
      'Un oficio de toda la vida que hasta ahora vivía solo del boca a boca. Le hice la web para que exista cuando alguien busca su oficio en su zona. Ahora estamos en lo siguiente, que es que esa visita acabe en llamada.',
    etiqueta: 'Web de servicios',
    color: 'verde',
    portada: '',
  },
```

Y cambiar el título por defecto de la sección en `src/components/Historias.astro:12`, de "Gente de aquí que ha dado el salto" a "Negocios de aquí con los que he trabajado".

---

## MEDIO

### M1. La primera llamada dura quince minutos en una página y veinte en otra

`config.ts:56` (descripción SEO de `/como-trabajo`) y `config.ts:291` (intro de la misma página) dicen "la llamada dura quince minutos". `config.ts:309`, `config.ts:318`, `config.ts:391` y `src/pages/como-trabajo.astro:203` dicen veinte minutos. Están en la misma página.

**Corrección:** unificar en veinte, que es lo que se pide en tres sitios. En `config.ts:56`: "Léelo antes de que hablemos y la llamada dura veinte minutos y no cuarenta." En `config.ts:291`: "Así la llamada dura veinte minutos y no cuarenta, y los dos sabemos si esto encaja."

### M2. Los treinta días gratis se solapan con el primer mes del plan de cuidado

`config.ts:338` promete "Durante treinta días cambias lo que quieras sin coste". `config.ts:396-401` vende el plan de cuidado a 49 €/mes con devolución si el primer mes no compensa. El cliente que contrata el plan al publicar paga 49 € por algo que ya tiene incluido treinta días.

**Corrección:** en `config.ts:401`: "El plan empieza cuando terminan los treinta días de cambios incluidos. Y si el primer mes ves que no te compensa, me lo dices y te devuelvo lo que has pagado."

### M3. Se insinúa un volumen de trabajos y de conversaciones que no existe

Tres sitios: `src/pages/trabajos.astro:30` ("Prefiero contar uno por dentro que enseñar veinte por fuera"), `config.ts:136` ("Pasa mucho. Casi siempre me cuentan lo mismo") y `config.ts:108` ("Lo que yo suelo encontrar es otra cosa"). Con cinco clientes, "veinte", "pasa mucho" y "suelo encontrar" no se sostienen si alguien pregunta.

**Corrección:** en `trabajos.astro:30`: "Prefiero contar uno por dentro que enseñar muchos por fuera." En `config.ts:136`: "Me lo han contado ya varias veces, y casi siempre es lo mismo:". En `config.ts:108`: "Lo que yo me encuentro suele ser otra cosa:".

### M4. La pregunta uno de `/que-preguntar` es la que él no puede contestar

`config.ts:485-487`: "Enséñame dos webs que hayas hecho de mi mismo gremio y dime cuántas llamadas les entran ahora." Hoy hay un solo fontanero, cuya web no genera llamadas, y no hay dato de llamadas de ningún cliente. Además `src/pages/que-preguntar.astro:56` remata con "Así las contesto yo" y enlaza a `/como-trabajo`, donde esa pregunta no se contesta.

**Corrección:** dejar la pregunta (es honesta y es buena), pero contestarla de frente en la propia página. Añadir a `config.ts:485-487`:

```ts
      a: 'Casi nadie puede enseñar resultados de un oficio concreto, y yo tampoco todavía: tengo una web de fontanería con visitas y sin llamadas suficientes, y te lo cuento tal cual. Lo que sí te puedo enseñar es qué medí, qué encontré y qué estoy haciendo con ello.',
```

### M5. La página de trabajos promete "qué cambió después" y no lo enseña

`config.ts:61` (descripción SEO) dice "qué pasaba antes, qué hice y qué cambió después", y `trabajos.astro:30-32` lo repite. Pero el bloque "El antes y el después" (`config.ts:229-232`) es un marcador PENDIENTE y `trabajos.astro:58` lo filtra, así que no se ve. Y el bloque "El problema, con sus palabras" (`config.ts:211`) también está filtrado. De los cinco bloques anunciados solo se ven tres.

**Corrección:** o se consiguen las capturas y la frase del cliente, o se ajusta lo que se promete. En `trabajos.astro:30-32`: "Prefiero contar uno por dentro que enseñar muchos por fuera. Aquí está qué me encontré, qué hice y qué sé hoy."

### M6. La foto de Miguel da 404 en producción

`src/pages/quien-soy.astro:28-35` y `src/components/SobreMi.astro:11-18` apuntan a `public/miguel.jpg`, que no existe en el repositorio. Comprobado en vivo: `https://mialdeastudio.com/miguel.jpg` devuelve 404, así que en `/quien-soy` se ve el recuadro con el texto "Foto de Miguel pendiente" (`quien-soy.astro:91-95`). En una página cuyo argumento entero es "hablas con una persona de verdad", ese hueco es lo peor que puede haber.

**Corrección:** poner la foto real en `public/miguel.jpg`. Mientras no esté, quitar el bloque de la imagen en vez de enseñar el marcador.

### M7. Las horquillas de presupuesto son las de los precios antiguos

`config.ts:574-580`: "Menos de 900 euros", "Entre 900 y 1.500", "Entre 1.500 y 3.000", "Más de 3.000". Vienen de los precios viejos (890, 1.490 y 2.900, según `CAMBIOS-PENDIENTES.md:92-94`). Con los precios actuales, ningún tramo coincide con 600 ni con 1.200, y el tramo alto no existe en el catálogo.

**Corrección:**

```ts
    opciones: [
      'Menos de 600 euros',
      'Entre 600 y 1.200',
      'Más de 1.200',
      'Ni idea, dime tú',
    ],
```

### M8. Hay un segundo catálogo de precios en el código, con lo que incluye distinto

`config.ts:243-284` define `servicios` y `paquetes` con otro contenido: "Alta en Google" frente a "ficha de Google revisada", "Textos que venden" y "SEO local de tu zona" frente a los bullets de `comoTrabajo.productos` (`config.ts:345-385`). Los componentes que los pintan (`Servicios.astro`, `SobreMi.astro`, `Proximamente.astro`) no se usan hoy en ninguna página, así que ese texto está sin revisar y saldría publicado tal cual el día que alguien vuelva a meterlos.

**Corrección:** borrar `servicios` y `paquetes` de `config.ts` y `Servicios.astro`, o dejar un comentario en la línea 243 que diga que ese bloque está fuera de uso y que la verdad de los precios está en `comoTrabajo.productos`.

### M9. La marca de café aparece como tienda online entregada

`config.ts:187-195`, etiqueta "Tienda online", bajo "Otros negocios con los que he trabajado". El estado real es que venden a bares y ahora quieren empezar a vender a particulares. El texto ("Ahora da el salto para llegar también a particulares") es ambiguo a propósito, pero la etiqueta afirma un entregable. Y choca con `config.ts:418`, "No hago tiendas online con cientos de productos".

**Corrección:** si la tienda no está publicada, quitar la tarjeta hasta que lo esté. Si está publicada, dejarla y cambiar la etiqueta a "Tienda online, en marcha" solo si es cierto.

### M10. El dato de Altamira no dice de cuánto tiempo es

`config.ts:226`: "La web lleva 596 visitantes unicos." Sin periodo, un número no se puede juzgar. 596 en un mes es una cosa y en un año es otra.

**Corrección:** "Desde que la publicamos en [mes y año], la web lleva 596 visitantes únicos."

### M11. `CAMBIOS-PENDIENTES.md` contradice hoy a la web viva

Es un documento interno, pero está en el repositorio y ya no es cierto:

* Línea 28: "12 a 35 euros por contacto, cerca de 1.800 euros al año" frente a los 14 € y casi 1.700 que hay hoy en la portada.
* Línea 57: "'ingeniero de software' pasa a 'llevo doce años programando'". Los doce años ya se corrigieron a siete.
* Líneas 92 a 94: "la web publica 890, 1.490 y desde 2.900" y llama falso lo de 600 y 1.200, que es justo lo que hay publicado ahora.
* Líneas 61 a 63: "Revisado todo el texto que se ve. No falta ninguna tilde". Falso, ver L1.
* Líneas 74 a 77: los marcadores de precio del plan, el rescate y la revisión ya están resueltos.
* Líneas 179 a 181: habla de GitHub Pages con base `/mialdea-studio`, cuando `astro.config.mjs` ya despliega con `base: '/'` y el commit `79d0e2f` movió el despliegue a Cloudflare Pages.

**Corrección:** actualizar el documento o renombrarlo con la fecha (`CAMBIOS-2026-08-03.md`) y abrir uno nuevo. Tal como está, cualquiera que lo lea dentro de tres meses se creerá los precios viejos.

### M12. El comentario del caso dice seis puntos y hay cinco

`config.ts:199` dice "estructura de seis puntos" y `config.ts:208-233` tiene cinco bloques. Además `trabajos.astro:54` imprime `caso.nombreCliente` justo debajo de un titular que ya dice el nombre, así que en la página sale "Altamira" dos veces seguidas.

**Corrección:** cambiar el comentario a "estructura de cinco puntos" y borrar la línea 54 de `trabajos.astro`.

### M13. Dos afirmaciones de terceros se presentan como datos propios

`config.ts:108` ("la mitad de la gente se va antes de encontrar el teléfono") y `config.ts:502` ("Si tarda más de tres segundos, la mitad de la gente ya se ha ido"). Son datos de estudios ajenos dichos en primera persona. Si un cliente pregunta de dónde salen, no hay respuesta.

**Corrección:** en `config.ts:502`: "Si tarda más de tres segundos, se va mucha gente antes de ver nada. Ábrela tú con datos y cuenta." En `config.ts:108`: "y mucha gente se va antes de encontrar el teléfono".

---

## LEVE

### L1. Faltan cuatro tildes en un texto que está publicado

`config.ts:226`, visible hoy en `/trabajos`: "596 visitantes unicos", "cuantas reservas y cuantas llamadas", "salen de ahi", "casi ningun negocio".

**Corrección, texto exacto:**

```ts
        'La web lleva 596 visitantes únicos. Es el dato que tengo medido hoy: gente que llega. Lo que estoy pidiendo ahora es el otro lado, cuántas reservas y cuántas llamadas salen de ahí, porque es lo que de verdad importa y casi ningún negocio lo tiene contado.',
```

### L2. Faltas en el marcador pendiente

`config.ts:211`: "Pedirsela en la proxima conversacion" debería ser "Pedírsela en la próxima conversación". No se ve en la web (está filtrado), pero es texto que acabará copiándose.

### L3. Comentarios de código sin tildes

`config.ts:117-121` ("Los numeros de abajo cuadran entre si a proposito", "Si al preguntar"), `index.astro:2-17` ("Su unico trabajo", "Nada mas", "Se quitaron de aqui seis bloques que ya existian", "revision", "escalon", "habia"), `BaseLayout.astro:53-56` ("TODO medicion", "envios") y `astro.config.mjs:5,11-12` ("La pagina de gracias", "despues"). No afecta al cliente, pero el resto del proyecto sí las lleva.

### L4. El año del pie está escrito a mano

`src/components/Footer.astro:3`: `const year = 2026;`. En enero pondrá 2026 igualmente. Corrección: `const year = new Date().getFullYear();`.

### L5. Un título SEO sin la marca

`config.ts:69`: "Ocho preguntas que hacerle a quien te vaya a hacer la web". Es el único de los siete sin "| Mialdea Studio". Corrección: "Ocho preguntas que hacerle a quien te vaya a hacer la web | Mialdea Studio".

### L6. Números en cifra y en letra para lo mismo

`config.ts:274` dice "Hasta 5 páginas" y `config.ts:365` "Hasta cinco páginas". En texto de cara al cliente van en letra, que es el criterio del resto de la web.

### L7. Se menciona un producto que no se llama así

`config.ts:381`: "Todo lo de la web completa, incluido". Los productos se llaman Presencia y Negocio, y "web completa" no aparece en ningún otro sitio de la web. Corrección: "Todo lo del paquete Negocio, incluido".

### L8. "Manitas" rebaja el oficio del cliente

`config.ts:173`: "Un manitas que decide digitalizarse". Un fontanero no es un manitas, y es el propio cliente el que lo va a leer. Ya corregido en la propuesta de G9.

### L9. Concordancia floja en la historia del restaurante

`config.ts:164`: "Una familia que se trajo su cocina en la maleta. Cinco estrellas reales, pero casi invisible en Google." El sujeto de "casi invisible" acaba siendo la familia. Corrección: "Una familia que se trajo su cocina en la maleta. El sitio tiene cinco estrellas reales y aun así casi no aparecía en Google."

### L10. El comentario del despliegue ya no es cierto

`astro.config.mjs:5`: "El CNAME de public/ es lo que hace que GitHub Pages lo sirva". No existe `public/CNAME` y el despliegue es Cloudflare Pages desde el commit `79d0e2f`.

### L11. Hay un titular alternativo muerto

`config.ts:100`, `portada.h1Corto`, repite palabra por palabra el final de `portada.sub` y no lo usa ningún componente. O se usa o se borra.

### L12. Comentarios de verificación ya resueltos

`config.ts:20` ("VERIFICAR: número publicado hoy") y `config.ts:24` ("RELLENAR: pon tu foto"). El teléfono ya está confirmado, así que ese comentario se puede quitar. El de la foto sigue vigente, ver M6.

---

## Dudas para Miguel

Cosas que parecen raras pero que no se pueden confirmar desde aquí.

1. **"Cinco estrellas reales"** (`config.ts:164`). ¿Es la nota real de Altamira en Google hoy? Si es 4,8 o 4,9, mejor poner el número exacto, que además es más creíble.
2. **¿Hay ya permiso por escrito de Altamira?** De ello depende si G2 se arregla publicando el nombre o volviendo al anónimo.
3. **¿La tienda de Cafés Maeso está hecha y publicada, o solo acordada?** De ello depende M9.
4. **¿El ecommerce y el TPV se pueden enseñar?** Si el ecommerce se puede nombrar, es el candidato natural para sustituir la historia inventada de G1.
5. **¿Has dado ya la charla de las 12 razones en algún sitio?** Si sí, se deja "Doy" y se dice dónde. Si no, ver G8.
6. **El origen del estudio.** `config.ts:469` dice que todo empezó por un fontanero. ¿Fue así, o el primero fue Altamira? Es una historia de marca y conviene que sea la de verdad.
7. **"La mitad de mi tiempo se va en estar pendiente de las que ya he hecho"** (`config.ts:148`). Con cinco webs y ningún plan de cuidado vendido, ¿es cierto hoy? Si no lo es, se está justificando una capacidad real con un motivo que no lo es. Alternativa honesta: "Cojo un cliente nuevo al mes porque las hago yo solo y porque tengo un trabajo que me ocupa el día. Prefiero decirte esto que prometerte cinco a la vez."
8. **"Hace seis años"** (`config.ts:137`) y **"otros cuatro por el mismo aviso"** (`config.ts:125`). ¿De dónde salen? Si son de oído, quitarlos o suavizarlos.

---

## Resumen por gravedad

| Gravedad | Cuántos | Qué son |
|---|---|---|
| GRAVE | 9 | Una historia inventada, el nombre del cliente publicado contra lo que dice la propia página, el mismo entregable gratis y a 90 €, dos cifras sin confirmar, una promesa mensual que no se puede medir, disponibilidad de urgencias imposible, el plazo de dos semanas, una charla que no existe y el caso del fontanero contado como éxito |
| MEDIO | 13 | Quince frente a veinte minutos, solape de los treinta días con el plan, volumen insinuado, la pregunta uno sin respuesta, lo que promete la página de trabajos, la foto en 404, horquillas viejas, catálogo de precios duplicado, la etiqueta de la tienda de café, el dato sin periodo, el documento interno desactualizado, seis puntos que son cinco y dos datos de terceros |
| LEVE | 12 | Tildes en producción, faltas en marcadores, comentarios sin tildes, año fijo en el pie, un título SEO sin marca, cifras y letras mezcladas, un producto mal nombrado, "manitas", una concordancia, un comentario de despliegue caducado, un titular muerto y dos comentarios ya resueltos |
| Dudas | 8 | Ver la sección anterior |

Guiones largos encontrados: ninguno.
