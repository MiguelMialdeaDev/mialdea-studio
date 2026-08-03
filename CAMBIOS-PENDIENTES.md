# Cambios en la web: qué está hecho y qué falta

Trabajo hecho a partir de `_WEB-CAMBIOS.md` (the-futur), el 2026-08-03.
Estado: `npm run build` pasa, 8 páginas generadas. Sin push.

---

## 1. Lo que ya está implementado

### Estructura nueva (antes había una sola página)

| Página | Ruta | Qué hace |
|---|---|---|
| Portada | `/` | Nombra el síntoma, el villano y manda a las tres que cierran |
| Cómo trabajo | `/como-trabajo` | **La pieza principal.** Es el enlace que se manda al referido antes de la llamada |
| Trabajos | `/trabajos` | Un caso contado a fondo más las historias anónimas |
| Quién soy | `/quien-soy` | Cara, nombre e historia, no atributos |
| Qué preguntar | `/que-preguntar` | Las ocho preguntas. Sirve igual impresa para las gestorías |
| Contacto | `/contacto` | Formulario corto que llega al WhatsApp |
| Gracias | `/gracias` | Detrás del formulario, contando qué pasa ahora |
| Error | `/404` | Con texto propio, no el de la plantilla |

### Portada reescrita en síntomas

- Titular con la fórmula "¿sabes cuando...?" en vez de hablar del mecanismo.
- El problema pintado antes que la solución, en el orden síntoma, suposición falsa,
  problema real, solución.
- Bloque "El coste que ya pagas", con el villano y sus cifras (12 a 35 euros por contacto,
  cerca de 1.800 euros al año).
- Bloque "Si ya pagaste una web y no sirvió", sin dejar mal a quien la hizo.
- Capacidad declarada: "cojo un cliente nuevo al mes".
- Bloque de la revisión de quince minutos sin coste (no se llama auditoría y no regala informe).
- Bloque que recoge interés por el test de Google, sin construirlo todavía.

### Conversión

- Fuera el enlace `mailto:` de toda la web (pie, contacto y datos estructurados).
- WhatsApp como acción única y primaria. Teléfono pulsable como secundaria.
- Contacto visible en la primera pantalla del móvil: la cabecera lleva "Llamar" y "WhatsApp"
  fijos arriba en todos los tamaños.
- Todos los iconos llevan texto al lado. Ninguno va suelto.
- Formulario con seis campos: nombre, teléfono, qué negocio tienes, qué te pasa, horquilla de
  presupuesto marcable y **"¿cómo has llegado hasta mí?"**.
- Al enviarlo se abre el WhatsApp con el mensaje ya escrito y la web pasa a `/gracias`.
- Una sola llamada a la acción por página.
- Nada que arranque solo: no hay vídeo, ni carrusel, ni sonido, ni narración.

### SEO

- Título y descripción escritos a mano para cada página.
- Un H1 propio y descriptivo por página.
- Enlaces internos con la palabra clave dentro, nunca "haz clic aquí".
- `canonical` y `og:url` en todas.
- La página de gracias fuera del sitemap y marcada como no indexable.
- Traducida la jerga: "SEO local" pasa a "salir cuando alguien busque tu oficio y tu pueblo",
  "mantenimiento" pasa a "que no te tengas que acordar de ella nunca", "ingeniero de software"
  pasa a "llevo doce años programando".

### Tildes

Revisado todo el texto que se ve. No falta ninguna tilde. Tampoco hay guiones largos como
puntuación, ni la palabra "auditoría", ni plurales del tipo "nuestro equipo", ni "disponible
para proyectos".

---

## 2. Lo que he dejado con marcador, y por qué

Todos los marcadores están escritos como `{{PENDIENTE: ...}}` y se ven en la propia web,
para que no se olviden.

| Marcador | Dónde | Por qué |
|---|---|---|
| Mes con hueco | `config.ts`, `site.huecoDesde`, sale en el bloque de capacidad | Es un dato que hay que actualizar cada vez que cambia. Si lleva ocho meses diciendo lo mismo, se nota |
| Precio del plan de cuidado mensual | `/como-trabajo` | La decisión de precio está pendiente contigo. No he publicado ningún número nuevo |
| Tarifa del rescate urgente | `/como-trabajo` | Igual. El playbook pide tarifa cerrada y publicada de antemano, pero el número lo decides tú |
| Precio de la revisión a fondo | `/como-trabajo`, bloque final | Igual |
| Nombre del cliente del caso | `/trabajos` | No hay permiso por escrito. Va en anónimo hasta tenerlo |
| Frase literal del cliente | `/trabajos` | No me la invento |
| Cifras de resultados del caso | `/trabajos` | No me las invento |
| Capturas del antes y el después | `/trabajos` | Hacen falta capturas en un móvil de verdad, no sobre fondo blanco |
| Testimonio del caso | `/trabajos` | No me lo invento |
| Foto de Miguel | `/quien-soy` y portada | Hace falta `public/miguel.jpg`, una foto real |
| Medición | comentario en `BaseLayout.astro` | Falta decidir e instalar la herramienta |

---

## 3. Lo que NO he hecho, a propósito

### Los precios no se han tocado

`_WEB-CAMBIOS.md` da por hecho que la web publica 400 euros y de 800 a 900, y pide corregirlo
a 600 y 1.200. **Eso es falso**: la web publica 890, 1.490 y desde 2.900. He dejado los tres
números exactamente como estaban y no he movido el bloque de la portada.

Queda pendiente de tu decisión, y son cosas distintas:

1. Si los precios se cambian o no.
2. Si el bloque de precios sale de la portada y se va solo a `/como-trabajo`, que es lo que
   pide el documento (un número suelto en la portada es un muro, dentro de una página que
   explica qué incluye es información). Hoy están en los dos sitios: en la portada como
   estaban, y en `/como-trabajo` con lo que incluye cada uno, el plazo y qué necesito de ti.

También he adaptado las horquillas marcables del formulario a los precios reales
(menos de 900, de 900 a 1.500, de 1.500 a 3.000, más de 3.000, ni idea). Las del documento
salían de los 600 y 1.200 que no son ciertos.

Y en "lo que no hago" he escrito "no cojo webs por debajo de mi paquete más pequeño" en vez
del número que daba el documento, para no publicar un precio nuevo.

### El caso de Mariano no se publica

Su web recibe visitas pero no genera llamadas, así que no hay resultado que enseñar y
presentarlo como caso de éxito sería falso. Aparece solo como una historia anónima, sin
prometer ningún resultado, y en `/quien-soy` como el origen de todo esto, también sin nombre
y sin cifras.

### No he creado páginas por vertical

El documento las pide, pero con su propio aviso de escala: haz una sola, la del gremio donde
tengas el caso, porque cinco páginas vacías son peor que ninguna. Y el único caso publicable
es de hostelería, que es justo el vertical descartado en el análisis de nicho.

Es la incoherencia estructural que el documento llama "decidir, no parchear": el nicho
apuntaba a reformas, clima y solar, y la prueba disponible es de otro gremio. Mientras tanto
he quitado del pie cualquier promesa de vertical. Ahora dice "webs para negocios de la
provincia de Valencia", sin nombrar gremios que no puedo respaldar.

**Cuando decidas el vertical**, la página se hace en una tarde.

### No he creado las cuatro páginas de cola larga

"Cuánto cuesta de verdad una web", "por qué no sales en Google aunque tengas web", etc. El
propio documento las pone como un activo por trimestre, y la primera depende de la decisión
de precio.

### No he montado la web de negocio ficticio ni el autodiagnóstico

Los dos son proyectos de varias semanas y el documento pide validar antes el interés. Lo que
sí está es el bloque que recoge ese interés.

---

## 4. Lo que necesito de ti para quitar los marcadores

**Urgente, bloquea la página de trabajos:**

1. **Permiso por escrito del cliente del restaurante** para usar su nombre, sus fotos y sus
   cifras. Un WhatsApp suyo diciendo que sí vale.
2. **Las cifras reales del caso**, comparadas antes y después: visitas, llamadas, reservas,
   posición. Pídeselas en la llamada de resultados.
3. **La frase literal del cliente** contando qué le pasaba antes, sin corregirle el habla.
4. **El testimonio**, con las tres partes: qué problema tenías antes, por qué me elegiste, qué
   ha cambiado desde entonces. Mándale tú el borrador escrito, que es lo que quita la fricción.
5. **Capturas del antes y el después**, hechas en un móvil de verdad, y alguna foto del sitio.

**Decisiones tuyas:**

6. **Los tres precios de las webs**: si se quedan como están o cambian.
7. **Si el bloque de precios sale de la portada.**
8. **Precio del plan de cuidado mensual.**
9. **Tarifa cerrada del rescate urgente.**
10. **Precio de la revisión a fondo** (el escalón pequeño, descontable del proyecto).
11. **El vertical**: si la web habla de oficios de urgencia o de reformas, clima y solar.
12. **El mes en el que tienes hueco**, y acordarte de actualizarlo.

**Material:**

13. **Tu foto** en `public/miguel.jpg`. Real, no un icono ni una ilustración.
14. **Verificar el teléfono publicado**: he puesto el 617 983 637, que es el que aparece hoy
    en la web. Si no es el bueno, está en `config.ts`, en `site.telefono` y `site.telefonoLink`.
15. **El WhatsApp**: he usado ese mismo número. Los botones y el formulario apuntan ahí.

**Técnico:**

16. **La medición**, desde el día uno: clics en llamar, clics en WhatsApp y envíos del
    formulario. Sin eso no se puede evaluar ningún cambio de esta lista. Hay un hueco marcado
    en `BaseLayout.astro`.
17. **El dominio definitivo.** Hoy `astro.config.mjs` despliega en GitHub Pages con base
    `/mialdea-studio`, pero los `canonical` apuntan a `mialdeastudio.com`. Cuando el dominio
    sea el definitivo hay que poner `site: 'https://mialdeastudio.com'` y `base: '/'`.
18. **Probar el formulario de verdad**, desde un móvil, y comprobar que el mensaje te llega
    al WhatsApp. Es lo que le exiges a las webs de tus clientes.
19. **Confirmar que las cuatro historias anónimas son clientes de verdad.** La regla es dura:
    nunca casos de quien no es cliente. Si alguna no lo es, se quita.

---

## 5. Las comprobaciones que solo puedes hacer tú, en un móvil

Están en el documento y no se pueden verificar desde aquí:

- Que carga en menos de tres segundos con datos, fuera del wifi.
- Que las imágenes que subas pesen menos de 300 KB.
- Que el botón de llamar se vea sin bajar nada (está puesto para que sí, hay que confirmarlo).
- Prueba del ojo entornado: desenfoca la portada. Lo primero que se tiene que ver es qué
  haces, y lo segundo, cómo llamarte.
- Prueba del WhatsApp: ¿te daría vergüenza mandarle este enlace a un conocido?
- Ponla al lado de las tres primeras webs que salen en Google para tu búsqueda.
