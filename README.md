# Onyx Garage Door Repair — onyxgaragedoorrepair.site

Aplicación **Next.js** (App Router) que se compila a un sitio estático: el HTML y
el CSS que salen del build no necesitan servidor ni llevan JavaScript de la
propia página. Creada el 31 de agosto de 2026.

## Pendiente antes de publicar

- [ ] **Teléfono real.** `(561) 372-0148` es provisional. Owen pidió prefijo
      `+1 561` y dijo que se cambia más adelante. Está en un solo sitio: el
      objeto `phone` de `data/site.js`, con sus cuatro formatos.
- [ ] **Correo de privacidad.** `privacy@onyxgaragedoorrepair.site` es
      provisional. Se usa en los apartados 7 y 12 de la política. Está en
      `site.privacyEmail`.
- [x] ~~**Las fotos.**~~ Integradas el 2 de septiembre de 2026. Ver "Fotos" más
      abajo para qué archivo va dónde.
- [ ] **Revisión de un abogado** para la política de privacidad. Está redactada
      sobre los requisitos habituales del sector, pero no es asesoría legal.

## Cómo se trabaja

```bash
npm install       # una vez
npm run dev       # http://localhost:3000
npm run build     # genera out/ con el sitio estatico completo
```

`out/` es lo que se sube al hosting. No se commitea: está en `.gitignore`, igual
que `node_modules`.

## Estructura

```
app/layout.jsx           <html>, CSS global y metadata compartida
app/page.jsx             /                 home (Miami)
app/about-us/page.jsx    /about-us
app/contact-us/page.jsx  /contact-us
app/privacy-policy/...   /privacy-policy   con la clausula A2P 10DLC
app/[city]/page.jsx      /FortLauderdale /Weston /BocaRaton /NorthPalmBeach
components/Header.jsx    cabecera, nav de 4 apartados y botones
components/TopBar.jsx    franja superior oscura
components/Footer.jsx    pie de 4 columnas y barra fija de llamada movil
components/Icons.jsx     los SVG del sitio, por nombre: <Icon name="pin" />
data/site.js             TODO el contenido: marca, telefono, ciudades, FAQ
css/styles.css           estilos base y todos los patrones de maqueta
css/location.css         piezas propias de las paginas de ubicacion
public/img/              fotos y logo, servidos en /img/...
assets/originales/       los .jfif tal como los devolvio Gemini
assets/marca/            simbolo, bloque horizontal y avatar, desfondados
public/robots.txt · public/sitemap.xml · public/favicon.svg
```

El **navbar tiene cuatro apartados fijos** —Home, About Us, Contact Us y Privacy
Policy— y cada uno es una página real, no un ancla. Se define en el array `nav`
de `data/site.js`; `Header` marca el activo con la prop `current`.

Las cuatro páginas de ubicación son **una sola ruta**: `app/[city]/page.jsx` con
`generateStaticParams()`. Todo lo que cambia entre ellas —dirección, ZIP, mapa,
párrafo de "Local Knowledge" y los barrios— vive en el array `cities` de
`data/site.js`.

## De dónde sale el formato

La referencia de **maqueta** es [att.com](https://www.att.com/). De ahí salen:

- **Barra de utilidad** clara y fina arriba, con enlaces separados por barras.
- **Hero como una pieza redondeada metida hacia dentro** de la página, no a sangre:
  `.hero-tile`, radio de 26px, fondo negro y la copia dentro.
- **Letra pequeña** (`.fineprint`) bajo la llamada principal.
- **Carrusel horizontal** de tarjetas con `scroll-snap` (`.rail`).
- **Mosaico de bloques de tamaños distintos** (`.bento`), con piezas anchas, una
  negra y una amarilla, en vez de una parrilla de tarjetas iguales.
- **Encabezado de sección a la izquierda** con enlace a la derecha y una raya fina
  debajo (`.sec-head`), en vez de encabezados centrados.
- **Pie de muchas columnas** con un **bloque legal** de letra pequeña al final.

La referencia **visual anterior** era
[este diseño de Dribbble](https://dribbble.com/shots/27383543-Garage-Door-Repair-Website-And-Mobile-Design).
Se descartó su maqueta por parecerse demasiado a las otras landings; de él sólo
queda la idea general de barra superior + cabecera blanca + banda de cifras.

**Lo que NO se copió de ninguna de las dos**, porque incumple las reglas de
contenido: el azul (aquí es negro ónix y amarillo), el "Licensed & Insured", la
tarjeta de valoración "4.9 ★ From 2,100+ Reviews" y la cifra "5-Star Reviews".

De `flowersgaragedoorrepair.site` se reutiliza sólo el esqueleto que Owen
pidió mantener: el navbar de cuatro apartados y el apartado de puntos de
despacho. Ese apartado **cambió de formato**: era una rejilla de tarjetas con
icono, y ahora es un **directorio de filas** (`.office-row`) con la ciudad, la
dirección, la cobertura y un enlace con flecha.

### Los iconos, a propósito

No hay ni un icono metido en una cajita de color, que es lo que tienen las otras
landings y lo que hacía que se parecieran. Aquí hay tres tratamientos:

| Dónde | Qué se usa |
|---|---|
| Carrusel, vías de contacto, apoyos | icono **desnudo y grande** (`.lineicon`, 30px) |
| Mosaico de servicios y de valores | **numeral perfilado** `01…06` (`.numeral`, `-webkit-text-stroke`) |
| Proceso, argumentos, barrios | **sin icono**: raya de color, divisoria o columna |

Además el mosaico se rompe en un sitio distinto en cada página (home, ciudad y
About usan un `TILE_MOD` propio), para que las tres no se lean iguales.

## Paleta

Negro y amarillo, que es lo que pide el nombre de la marca.

| Token | Valor | Uso |
|---|---|---|
| `--onyx-900` | `#121212` | fondos oscuros, pie, franja de cifras |
| `--onyx-800` | `#1c1c1c` | segundo nivel oscuro |
| `--gold` | `#f4bd0e` | **rellena**: fondo de boton, chips de icono, numeros de paso |
| `--gold-ink` | `#6b5000` | **escribe sobre claro**: enlaces, eyebrow, iconos sobre blanco |
| `--gold-light` | `#ffd857` | acento sobre negro |
| `--gold-dark` | `#d19c00` | hover del boton amarillo |
| `--gold-soft` | `#fdf3d6` | fondo del recuadro legal y de los chips |
| `--bg-soft` | `#f6f5f2` | secciones alternas |
| `--ink` / `--body` / `--muted` | `#1a1a1a` / `#55534f` / `#8a8781` | texto |

**La regla del amarillo.** `#f4bd0e` sobre blanco da 1.7:1 de contraste, o sea
ilegible. Por eso el amarillo **nunca escribe sobre fondo claro**: ahí rellena
(botones con texto negro, chips de icono con el trazo negro, bordes) y el que
escribe es `--gold-ink`. Sobre negro sí escribe, y ahí van `--gold` o
`--gold-light`. Al tocar la paleta, respetar ese reparto.

En el `h1` de la home la palabra destacada va en **negro con una franja de
rotulador amarillo** por detrás (`linear-gradient` al 62%), porque en amarillo
plano no se leería.

**No hay ni un solo color frío en el CSS**: en los 27 hex y los 24 `rgba()` la
componente roja es siempre mayor o igual que la azul. Si se toca la paleta,
comprobarlo otra vez antes de dar por bueno el cambio.

## Datos del negocio (para editar)

| Dato | Valor actual |
|---|---|
| Marca | Onyx Garage Door Repair |
| Dominio | onyxgaragedoorrepair.site |
| Teléfono | +1 (561) 372-0148 — ⚠️ *provisional* |
| Email | service@onyxgaragedoorrepair.site |
| Email de privacidad | privacy@onyxgaragedoorrepair.site — ⚠️ *provisional* |
| Despacho principal | 7950 NW 53rd St, Ste 495, Miami, FL 33166 |
| Horario | Lun–Sáb 7:00 AM – 9:00 PM · Dom y feriados: emergencias 24/7 |

### Puntos de despacho

| Ciudad | URL | Dirección |
|---|---|---|
| Miami (principal) | `/` | 7950 NW 53rd St, Ste 495, Miami, FL 33166 |
| Fort Lauderdale | `/FortLauderdale` | 1520 E Sunrise Blvd, Ste 200, Fort Lauderdale, FL 33304 |
| Weston | `/Weston` | 2141 N Commerce Pkwy, Unit 133, Weston, FL 33326 |
| Boca Raton | `/BocaRaton` | 20283 FL-7, Unit 337, Boca Raton, FL 33498 |
| North Palm Beach | `/NorthPalmBeach` | 2000 PGA Blvd, Ste 35212, North Palm Beach, FL 33408 |

La home cubre **todo Miami**; las otras cuatro tienen su propia página. Cada
página enlaza a las demás en "Other dispatch points", y la home las lista todas
en "Coverage".

Los mapas de Google van **sin API key**: se construyen con
`mapEmbed(mapQuery)` en `data/site.js`. Cambiar una dirección mueve su mapa solo.

## Reglas de contenido que este sitio cumple

Están comprobadas sobre el HTML generado, no solo sobre el código fuente:

1. **Sin precios** ni promesas de tarifa. Nada de `$`, "free estimate", "flat
   pricing" ni `priceRange` en el JSON-LD.
2. **Sin reseñas** ni testimonios ni estrellas. El JSON-LD no lleva
   `aggregateRating` ni `review` a propósito, y `Icons.jsx` no tiene icono de
   estrella para que no se cuele por descuido.
3. **Sin "licensed & insured"**, "bonded" ni números de licencia. En su lugar van
   hechos de servicio: horario, cobertura, garantía de mano de obra.
4. **Paleta cálida**, sin un solo azul.
5. **Mapa de Google antes del apartado de contacto**, en la home y en cada página
   de ciudad.
6. **La oficina no es un mostrador.** Las direcciones se presentan como puntos de
   despacho y el encuadre es siempre "we come to you". No hay "Visit us" ni
   "Find us" en ninguna página.

## SEO

- JSON-LD `HomeAndConstructionBusiness` en la home con dirección, teléfono,
  horario, `areaServed`, `hasOfferCatalog` y las cuatro `department`; uno propio
  por ciudad enlazado al principal con `parentOrganization`; `FAQPage` en la home;
  `AboutPage` y `ContactPage` en las suyas.
- Palabra clave delante en `<title>`, `description` y `<h1>`.
- `canonical` y Open Graph completo con URL absoluta en todas.
- `robots.txt` y `sitemap.xml` con las ocho URLs.
- `preload` con `fetchPriority="high"` para la imagen del hero.

## Fotos

Generadas con Gemini el 2 de septiembre de 2026 con los prompts de
`docs/prompts-gemini.md`. Los `.jfif` originales quedan en
`assets/originales/`; `assets/` **no se sirve**, sólo `public/`.

| Archivo | Dónde sale | Qué muestra |
|---|---|---|
| `public/img/hero-garage.jpg` | **en ninguna página**: es la miniatura de Open Graph y el `image` del JSON-LD | Casa de Florida, puerta oscura y furgoneta blanca sin rótulos, hora dorada. 1200×630 |
| `public/img/why-garage.jpg` | bloque partido de "Why Onyx" (home) y de "Our story" (About Us) | Técnico de espaldas devanando el muelle de torsión. 1200×960 |
| `public/img/local-garage.jpg` | el mismo hueco en las cuatro páginas de ciudad | Técnico sacando cable y rodillos de la furgoneta. 1200×960 |
| `public/img/logo-onyx.png` | tampoco se pinta: es el `logo` del JSON-LD, o sea lo que Google usa en la ficha | Bloque horizontal desfondado. 1200×324 |

Las tres fotos van con `loading="lazy"` y con `width`/`height` puestos, para que
no salte la maqueta al cargar. Debajo de ellas `.split__media` conserva el fondo
onyx, así que el hueco nunca queda en blanco.

### El logo

Gemini devolvió el símbolo **en negro plano**, sin el amarillo que pedía el
prompt. No se volvió a pedir: al ser un dibujo de dos tonos se recoloreó, y en
la web el símbolo **no es un PNG sino un SVG en línea** (`logoOnyx` en
`components/Icons.jsx`), calcado del generado midiendo el original píxel a
píxel. Se hizo así por tres razones: se pinta a 23px dentro de un círculo y un
mapa de bits se empasta, hereda el color del contenedor —dorado sobre el círculo
negro de la cabecera, negro sobre el círculo dorado del pie— y no cuesta una
petición. `public/favicon.svg` usa esa misma geometría.

Los mapas de bits de la marca quedan en `assets/marca/` para lo que no es la
web:

| Archivo | Para qué |
|---|---|
| `onyx-simbolo.png` | 512×512 transparente, símbolo negro, para fondos claros |
| `onyx-bloque.png` | 1200×324 transparente, símbolo + "ONYX / GARAGE DOOR REPAIR", para la ficha de Google y las facturas |
| `onyx-avatar.png` | 512×512, símbolo dorado sobre onyx, para el avatar de redes |

**Cómo se desfondaron.** Gemini entrega el logo en JPEG sobre blanco, nunca con
alfa de verdad. El recorte se hace con `alpha = 255 - min(r, g, b)`: el blanco
se va, el negro se queda y el amarillo también —su componente azul es 14—, y
luego se deshace la mezcla contra blanco para que el borde antialiaseado no
salga lavado. Un umbral por luminancia habría dejado el amarillo semi­trans­pa­rente.
