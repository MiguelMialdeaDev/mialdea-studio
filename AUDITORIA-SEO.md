# Auditoría SEO · mialdeastudio.com

Protocolo Romuald Fons, 16 pasos. Fecha: 2026-08-04.
Web: Astro estático en Cloudflare Pages, 6 páginas indexables.

**Aviso de herramientas.** No hay Ahrefs ni Semrush, y la web se publicó en este dominio
hace horas, así que **los pasos 1, 2 y 9 no se pueden completar todavía**: no hay histórico
en Search Console ni tiempo para que Google haya indexado nada. Se marcan como pendientes en
vez de fingir que se comprobaron.

---

## LO PRIMERO, PORQUE CAMBIA CÓMO LEER TODO LO DEMÁS

El cuello de botella de Mialdea Studio no es el SEO de esta web. Es que no llegan
conversaciones, y su canal probado es el referido cálido (2 cálidas cierran 1; 9 frías
cerraron 0).

**Las búsquedas que atacan estas páginas tienen muy poco volumen en España.** Un fontanero
de Paiporta no suele buscar "página web para fontaneros": le llama una agencia, o le
pregunta a un colega. Así que esta auditoría hay que leerla con esa expectativa: el SEO
propio aquí es un juego lento y de poco tráfico, y no es lo que va a arreglar el problema
de este trimestre.

**Dicho eso, las páginas por gremio sí valen la pena, y por un motivo distinto al tráfico:**
son lo que se le manda a un prospecto, lo que usa el prescriptor para nombrarte, y lo que
convierte al que sí llega. La ganancia principal es de conversión y de credibilidad, no de
posiciones.

---

## TABLA PRIORIZADA

| # | Hallazgo | Paso | Impacto | Esfuerzo | Cómo se arregla | Código |
|---|---|---|---|---|---|---|
| 1 | No existía `robots.txt` | 13 | Alto | Bajo | **HECHO.** Creado con `Allow: /` y la línea del sitemap | a311 |
| 2 | Sitemap generado pero no enviado a Search Console | 13 | Alto | Bajo | Dar de alta la propiedad y enviar `sitemap-index.xml`. Sin esto no hay datos del paso 9 nunca | a244 |
| 3 | **Cero páginas por gremio.** Se vende "webs para fontaneros" y no hay ninguna URL que responda a eso | 4 | Alto | Medio | Ver el plan de abajo. Es el hallazgo estructural | a323 a328 |
| 4 | Ningún title contiene una keyword que alguien busque | 6 | Alto | Bajo | Los titles están bien escritos para persuadir, pero no para buscar. Se arregla con las páginas nuevas, no tocando las actuales | a206 |
| 5 | No consta ficha de Google Business propia | 15 | Alto | Bajo | Crearla. Vende SEO local sin tener su propia ficha, y es además una fuente de leads gratis | (interpretación de a323) |
| 6 | Tiene FAQ en dos páginas y ningún `FAQPage` en schema | 12 | Medio | Bajo | Añadir JSON-LD de `FAQPage` en `/como-trabajo`. Sube CTR sin cambiar de posición | a211 a144 |
| 7 | Sin `BreadcrumbList` | 12 | Medio | Bajo | Añadir cuando existan las páginas de gremio, que es cuando hay jerarquía real | a144 |
| 8 | `/trabajos` dice "negocios de Valencia" y el único caso es de Burjassot | 6 | Medio | Bajo | Ajustar el title a "Valencia y alrededores" hasta tener más casos | a206 |
| 9 | Indexación sin comprobar | 1 | Alto | Bajo | `site:mialdeastudio.com` dentro de una semana. Hoy no da información porque el dominio acaba de cambiar de contenido | a311 |
| 10 | Canibalización sin comprobar | 2 | Medio | Bajo | Con 6 páginas de intenciones distintas no se espera. Revisar cuando existan las de gremio, que es donde sí puede aparecer | a22 a70 |
| 11 | Keywords de oportunidad sin comprobar | 9 | Alto | Bajo | Requiere Search Console con datos. Revisar en 4 a 6 semanas | a102 |
| 12 | Backlinks de la competencia | 16 | Bajo | Alto | **Requiere herramienta de pago.** Y es prematuro: no se hace link building antes de tener la arquitectura transaccional | a330 a313 |
| 13 | Velocidad no medida con PageSpeed | 11 | Medio | Bajo | Pasar PageSpeed Insights en móvil. Astro estático en Cloudflare parte muy bien, pero hay que medirlo y no suponerlo | a141 |

**Lo que ya está bien y no hay que tocar:** un solo H1 por página, titles y descripciones
escritos a mano, enlazado interno coherente (el menú apunta siempre a la misma URL),
schema de `ProfessionalService` y `Person` presente, `/gracias` fuera del sitemap, teléfono
visible y pulsable en la primera pantalla de móvil, y formulario que pregunta cómo ha
llegado el visitante. Los pasos 3, 7, 10 y 14 se pasan sin hallazgos.

---

## EL PLAN DE PÁGINAS POR GREMIO

La regla del protocolo es una landing por cada cosa que se vende, con la keyword en un
único H1 y resolviendo TODAS las objeciones (precio, plazo, quién lo hace) en la misma
página. Nada de una página genérica de servicios.

### Orden de creación, y por qué este orden

**1. `/webs-para-reformas`**
Primero porque **ya está escrita**. Es la landing que servía el dominio hasta ayer, está
guardada en `_landing-anterior/` y tiene copy bueno: habla en síntomas, señala al villano
(los portales de anuncios) y lleva versión en inglés. Es la única página del proyecto con
tráfico real demostrado. Recuperarla cuesta una tarde y no hay que inventar nada.

**2. `/webs-para-fontaneros`**
Es el gremio declarado y hay un cliente real (Mariano). Ojo: hasta que la web de Mariano
genere llamadas, esta página no puede prometer resultados, solo método.

**3. `/webs-para-electricistas`**
Sin caso todavía, pero el gremio está en la lista de 72 leads investigados y el argumentario
es casi idéntico al de fontanería.

**4. `/webs-para-bares-y-restaurantes`**
Aquí sí hay caso (Altamira, Burjassot). Va la cuarta porque la hostelería refiere peor: dos
restaurantes del mismo barrio son competencia, y un fontanero y otro fontanero no.

### Qué lleva cada página, sin excepción

- Un solo H1 con la forma "Webs para [gremio] en Valencia y alrededores".
- El síntoma del gremio en sus palabras, no el servicio. Para un fontanero: llamadas de
  chapuzas de 40 euros en vez de reformas de baño.
- Precio visible (600 y 1.200) y plazo.
- Las objeciones resueltas ahí mismo: qué pasa si ya tiene web, quién la hace, qué pasa el
  mes siguiente.
- El caso si lo hay, y si no lo hay, el método. Nunca un resultado inventado.
- Una sola llamada a la acción.

### Páginas por municipio: todavía NO

La tentación es hacer gremio × municipio y sacar 44 páginas. **No.** Sin un caso en ese
municipio, esas páginas son contenido fino, y el protocolo lo marca como fallo del paso 8.

Lo correcto ahora es **nombrar los municipios dentro de las páginas de gremio** (Torrent,
Paiporta, Catarroja, Alfafar, Sedaví, Picanya, Albal, Burjassot, Massanassa, Benetússer),
que ya da la señal local sin crear páginas vacías.

Las páginas de municipio se crean **cuando haya un caso real en ese municipio**, y entonces
se escribe una sola, con el caso dentro. Primera candidata: Burjassot, cuando Altamira dé
sus cifras de reservas.

---

## LO QUE HAY QUE HACER ESTA SEMANA

1. Dar de alta Search Console y enviar el sitemap. Sin eso, dentro de un mes seguimos sin
   datos y no se puede hacer el paso 9, que es el que de verdad rinde.
2. Crear la ficha de Google Business de Mialdea Studio.
3. Pasar PageSpeed Insights en móvil y anotar el resultado.
4. Recuperar la landing de reformas como `/webs-para-reformas`.

Lo demás puede esperar a tener datos.
