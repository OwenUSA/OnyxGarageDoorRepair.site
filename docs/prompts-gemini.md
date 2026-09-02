# Prompts para Gemini — Onyx Garage Door Repair

Los prompts están en inglés a propósito: Gemini responde mejor y el cliente
final es de Florida.

## Antes de empezar: cómo llegan los archivos

Gemini devuelve siempre lo mismo, así que conviene saberlo de antemano:

- Extensión **`.jfif`** (a veces doble, `logo.png.jfif`) aunque dentro sea JPEG.
- **2,5–4 MB por imagen**, inservible en móvil sin recomprimir.
- El logo "con fondo transparente" sale en **JPEG**, o sea que el damero gris
  son píxeles pintados, no canal alfa.
- **Cruza las proporciones**: pide una panorámica y devuelve una cuadrada.
  Comprobar ancho × alto contra el hueco antes de asignarla.

Por eso los prompts de abajo **piden fondo blanco puro** en el logo en vez de
"transparente": es mucho más fiable recortarlo después que pelear con un damero
pintado. Cuando estén los archivos, me los pasas y yo los proceso —
redimensionar, recomprimir y desfondar el logo — antes de enchufarlos.

---

## 1. Logo — el símbolo (el que usa la web)

La cabecera y el pie pintan el símbolo dentro de un círculo hecho por CSS, así
que lo que hace falta de verdad es **solo el símbolo**, sin texto.

> A flat vector logo mark for a garage door repair company called Onyx.
>
> Subject: a single geometric symbol that reads instantly as a garage door — a
> bold roofline chevron above a sectional garage door made of three thick
> horizontal slats. Simple enough to stay legible at 40 pixels.
>
> Style: flat 2D vector, hard geometric shapes, thick uniform strokes, sharp
> confident silhouette, industrial and premium. Absolutely no gradients, no
> shading, no bevels, no 3D, no drop shadows, no glow, no texture, no
> photographic elements.
>
> Colour: use exactly two colours and nothing else — deep black #121212 and
> amber yellow #f4bd0e. High contrast between them. Do not use white anywhere
> inside the artwork itself.
>
> Composition: the mark centred in the frame with generous even margin around
> it. Square 1:1 canvas, 1024 × 1024 pixels.
>
> Background: solid pure white #FFFFFF, completely flat, edge to edge. No
> transparency checkerboard, no grey, no gradient, no vignette, no shadow
> touching the background.
>
> No text, no letters, no numbers, no wordmark, no tagline, no mockup, no
> presentation board, no multiple variations — one single mark, one image.

**Por qué fondo blanco y nada de blanco dentro:** así el recorte se hace con un
relleno por inundación desde el borde, que sólo borra el blanco conectado al
marco. Si el dibujo llevara blanco por dentro, se comería medio logo.

## 2. Logo — el bloque horizontal (para Google Business, redes y facturas)

La web no lo necesita, pero hace falta para la ficha de Google, el avatar de
redes y los presupuestos. Pídelo aparte, en la misma sesión, para que el símbolo
salga idéntico.

> A flat horizontal logo lockup for a garage door repair company.
>
> Layout: the garage door symbol on the left, and to its right two lines of
> text, left aligned. First line: the word "ONYX" in a heavy geometric
> sans-serif, all caps, tight letter spacing. Second line, much smaller and
> directly underneath: "GARAGE DOOR REPAIR" in a lighter weight, all caps, wide
> letter spacing. The second line is about one third the height of the first.
>
> Style: flat 2D vector, hard geometric shapes, thick uniform strokes. No
> gradients, no shading, no 3D, no shadows, no glow, no texture.
>
> Colour: exactly two colours — deep black #121212 for the word ONYX, and amber
> yellow #f4bd0e for the symbol and for the second line of text. Nothing else.
> Do not use white inside the artwork.
>
> Composition: horizontal 3:1 canvas, 1800 × 600 pixels, artwork centred with
> even margin.
>
> Background: solid pure white #FFFFFF, completely flat, edge to edge. No
> transparency checkerboard, no gradient, no shadow.
>
> One single lockup, no variations, no mockup, no presentation board.

⚠️ Ojo con la ortografía: la marca es **ONYX**, no "ONXY" ni "ONIX". Los
generadores de imagen se equivocan mucho con el texto — revisar letra por letra
antes de darlo por bueno, y si sale mal, repetir el prompt en vez de arreglarlo
a mano.

---

## 3. `hero-garage.jpg` — la miniatura al compartir el enlace

**No se ve en ninguna página.** Es la imagen de Open Graph: la que aparece
cuando alguien pega el enlace en WhatsApp, Facebook o un SMS, y la que va en el
JSON-LD del negocio. Por eso es horizontal y apaisada.

> A photorealistic exterior photograph of a South Florida single-family home
> with a closed two-car sectional garage door, seen slightly from the side.
>
> The garage door is modern, dark charcoal, with clean horizontal panel lines.
> A plain white service van is parked on the paved driveway, angled toward the
> camera, with no logos, no lettering and no graphics anywhere on it.
>
> Setting: a warm South Florida residential street. Palm trees, light stucco
> wall, tropical planting, a clear late afternoon sky.
>
> Lighting and grading: golden hour, warm and sunny, long soft shadows, rich
> warm colour grade. Avoid any cool or blue colour cast.
>
> Camera: wide establishing shot, eye level, 35 mm look, deep focus, everything
> sharp. Clean and uncluttered, no clutter on the driveway.
>
> Format: horizontal landscape, aspect ratio 1.91:1, 1200 × 630 pixels. The
> house and the garage door must sit in the centre of the frame with room
> around them, because the edges get cropped by social networks.
>
> No people, no text, no logos, no watermarks, no signage, no badges, no price
> boards, no illustration — a straight photograph.

## 4. `why-garage.jpg` — el bloque "Why Onyx" de la home y de About Us

> A photorealistic close-up photograph of a garage door technician working on
> the torsion spring assembly mounted on the header bar above a residential
> garage door.
>
> The technician is seen from behind and slightly to the side, so the face is
> not visible. He wears a plain dark charcoal work shirt and gloves and is
> holding a winding bar against the spring. Clean modern tools, no branding on
> anything.
>
> Setting: the inside of a tidy suburban garage, the door partly open so warm
> daylight spills in from outside and rims the edges of the door panels.
>
> Lighting and grading: warm interior light with a strong warm rim from the
> daylight, deep rich blacks in the shadows, high contrast. Avoid any cool or
> blue colour cast.
>
> Camera: medium close-up, 50 mm look, shallow depth of field with the spring
> and the hands in sharp focus and the background softly blurred.
>
> Format: horizontal rectangle, aspect ratio 5:4 — 1200 pixels wide by 960
> pixels high. Slightly wider than it is tall.
>
> No text, no logos, no watermarks, no brand names, no illustration — a
> straight photograph.

## 5. `local-garage.jpg` — el mismo bloque en las páginas de ciudad

Va en el mismo hueco que la anterior, pero en las cuatro páginas de ciudad. Se
pide distinta para que la home y las ciudades no se vean iguales.

> A photorealistic photograph of a garage door technician lifting a coil of new
> cable and a replacement roller from the open side door of a plain white
> service van parked in a residential driveway.
>
> The technician is seen from the side, face turned away from the camera,
> wearing a plain dark charcoal work shirt. The van has no logos, no lettering
> and no graphics. Neatly organised parts and tools visible inside the van.
>
> Setting: a South Florida residential driveway with a garage door in soft
> focus in the background. Palm shadows on the pavement.
>
> Lighting and grading: warm late-morning sunlight, high contrast, deep blacks,
> warm colour grade. Avoid any cool or blue colour cast.
>
> Camera: medium shot, 50 mm look, shallow depth of field with the van interior
> and the parts in focus.
>
> Format: horizontal rectangle, aspect ratio 5:4 — 1200 pixels wide by 960
> pixels high.
>
> No text, no logos, no watermarks, no brand names, no illustration — a
> straight photograph.

---

## Lo que salió (2 de septiembre de 2026)

Las cinco imágenes están generadas e integradas. Lo que hay que saber para la
próxima landing:

| Prompt | Entregó | Se pidió | Nota |
|---|---|---|---|
| 1. símbolo | 2048×2048 | 1024×1024 1:1 | ✔ forma, ✘ **color: salió en negro plano**, sin nada de amarillo |
| 2. bloque | 3584×1184 | 1800×600 3:1 | ✔ y con "ONYX" bien escrito a la primera |
| 3. hero | 2848×1504 (1.89) | 1200×630 (1.91) | ✔ |
| 4. why | 2304×1856 (1.24) | 1200×960 (1.25) | ✔ |
| 5. local | 2816×1536 (1.83) | 1200×960 (1.25) | ✘ **proporción cruzada**, hubo que recortar |

Dos cosas se confirman una vez más: **cruza las proporciones** —una de las dos
5:4 salió panorámica— y **el prompt de color no manda en un dibujo de una sola
figura**: pedía dos colores y devolvió uno. Ninguna de las dos justifica repetir
el prompt si la forma está bien, porque las dos se arreglan después.

Lo del color se resolvió recoloreando, no repitiendo: el símbolo de la web es
un SVG calcado del generado (`logoOnyx` en `components/Icons.jsx`), y los PNG
de `assets/marca/` salen de teñir la máscara alfa.

## Qué hago yo cuando lleguen

1. Renombrar los `.jfif` y mover los originales a `assets/originales/`.
2. Recomprimir a JPEG calidad 82 al doble del tamaño mostrado.
3. Desfondar el logo con `alpha = 255 - min(r, g, b)` y deshacer después la
   mezcla contra blanco. Es mejor que el relleno por inundación y mucho mejor
   que un umbral por luminancia: el amarillo #f4bd0e tiene el azul en 14, así
   que sobrevive entero, mientras que por luminancia habría quedado a media
   opacidad. El borde antialiaseado sale limpio porque la inversión de la mezcla
   contra blanco es exacta.
4. Comprobar el logo **contra los dos fondos** donde aparece: el círculo negro
   de la cabecera y el círculo amarillo del pie. Si no funciona en los dos,
   hace falta una segunda versión.
5. Cambiar el `div.split__media` por un `<img>` en `app/page.jsx`,
   `app/about-us/page.jsx` y `app/[city]/page.jsx`, y quitar el degradado
   marcador de `.split__media` en `css/styles.css`.

## Lo que NO hay que pedir

Nada de rótulos de "Licensed & Insured", estrellas, "4.9", precios, cupones ni
sellos de garantía dentro de las imágenes: las reglas de contenido de estas
landings los prohíben, y una vez dentro de la foto no se pueden quitar.
