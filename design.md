# Design · Mialdea Studio

Sistema de diseño cerrado para mialdeastudio.com. Cada página lee esto antes de
tocar nada. No se regenera por página: se amplía aquí cuando haga falta.

## Género
editorial (obrador de barrio, papel cálido, terracota). Foco: captación.

## Familia de macroestructura
- Portada: Proof-Led sales page (persona + oferta + prueba + precio + proceso + filtro + cierre)
- Gremio y zona: espina común (hero con precio, síntomas, caso, incluye, quién, objeciones, zona)
- Contenido (cómo trabajo, qué preguntar, quién soy, trabajos): documento largo, tipografía sola

## Tema (tokens en tailwind.config.mjs, contraste comprobado sobre crema)
- crema      oklch(96% 0.012 55)   papel
- crema2     oklch(93% 0.014 55)   papel-2
- papel      oklch(98.5% 0.008 70) fondo de tarjetas
- tinta      oklch(20% 0.012 45)   16:1
- tinta2     oklch(28% 0.012 45)   13:1
- muted      oklch(42% 0.012 45)   7,5:1
- linea      oklch(84% 0.010 55)
- terracota  oklch(54% 0.155 32)   4,8:1 · marca, reglas, kickers, subrayador. Nunca en botones
- wa         oklch(48% 0.15 152)   5,3:1 · SOLO el botón de WhatsApp
- focus      oklch(58% 0.20 32)

## Tipografía
- Display: Bricolage Grotesque 700 (h1, h2, h3), 800 en cifras. Siempre romana
- Cuerpo: Switzer 400/500/600, 17px, interlineado 1,55
- Logotipo: Fraunces 600, solo en el wordmark
- Tracking display: -0.02em

## Ritmo
- Gutter 22px en móvil, 32px desde sm. Contenido máximo 1140px
- Secciones de portada separadas por regla de 3px en tinta; dentro, reglas finas en linea
- Al colapsar a una columna el gap baja a 1.5rem

## Movimiento
- .reveal: opacidad + 12px, 500ms, ease-out, una sola vez. Con reduced-motion, nada
- Botones: solo cambio de color, 120 a 200ms. Sin sombras flotantes ni hover-lift

## Voz de CTA
- Primario: píldora verde (bg-wa), texto papel, 52px de alto, icono de WhatsApp. Un solo primario por vista
- Secundario: píldora con borde tinta, sin relleno: "Llamar al 617 983 637"
- Móvil: barra fija abajo con WhatsApp en todas las páginas (WhatsappFab.astro)

## Lo que todas las páginas comparten
Wordmark, teléfono en la cabecera, un único botón de acción verde, fuentes,
tokens, gutter, cero guiones como puntuación, cero cifras que no se puedan respaldar.

## Lo que puede variar
La macroestructura dentro de su familia. Nada más.
