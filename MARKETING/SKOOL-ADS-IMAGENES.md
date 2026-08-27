# Descripciones de imágenes — Skool platform ads

Fuente original: `output/meta-ads/platform-images/` (no está en este repo). Ads de **Skool como producto** (trial / discovery), no de canales.

Hay **9 imágenes únicas** (11 JPG: 2 son duplicados). Carpeta `1045379027890647` está vacía. Los `.mp4` no se describen acá.

Los prompts de réplica están en inglés (mejor para generadores de imagen) con placeholders:

- `[BRAND]` — nombre de la marca
- `[LOGO]` — wordmark / logo
- `[AUDIENCE]` — quién es el freeze (freelance, coach, etc.)
- `[HEADLINE]` — texto overlay
- `[PRODUCT]` — qué es la plataforma

Copies y landings: [SKOOL-ADS-PLATAFORMA.md](./SKOOL-ADS-PLATAFORMA.md).

---

## Familias visuales

| Familia | Ads | Idea para replicar |
|---|---|---|
| Serif blanco sobre charcoal | `1417431913538180`, `1404534421527939` | Tipografía sola, 1:1 o 4:5, sin foto |
| Lifestyle + overlay serif | `859938550178616`, `961286433604372` | Foto de alguien trabajando + copy a un lado + acento amarillo |
| Tipografía bold sobre foto | `2589010821517352` | Hook enorme en pink/orange + footer con logo y botón |
| Thumbnail de video UGC | `1624810416316032`, `2603828473406221` | Frame 9:16 con caption blanco al centro |
| Screenshot de discovery | `2110280236189712`, `2609356846146337` | UI de búsqueda con grilla de comunidades |

---

## 1. `1417431913538180` — side hustle tipográfico (estático)

- **Archivo:** `1417431913538180/img-01-9a098821.jpg` (duplicado: `01.jpg`)
- **Tamaño:** 1080 × 1080 (1:1)
- **Headline Meta:** 🔥 Start your FREE trial NOW
- **Landing:** `skool.com/signup`
- **Ad Library:** https://www.facebook.com/ads/library/?id=1417431913538180

### Qué se ve

Estático 100% tipográfico. Fondo charcoal sólido, sin foto ni textura. Tres líneas de copy centradas, blanco, serif elegante (tipo Garamond/Sabon). Logo `skool` chico abajo a la derecha (s-k-o-o-l en azul/naranja/rojo). Mucho aire. Cero CTA en la imagen: el CTA vive en el anuncio.

**Texto en imagen:**

> Are you looking for a  
> side hustle you can do from home?  
> All you need is Wi-Fi and Skool.

### Prompt de réplica

```
Minimalist square 1:1 social ad, solid matte charcoal background #1A1A1A, no photo, no texture, no gradient.
Centered elegant thin white serif typography, high contrast, lots of negative space.
Three lines of copy:
"[HEADLINE line 1]
[HEADLINE line 2]
[HEADLINE line 3]"
Small [BRAND] wordmark in the bottom-right corner, lowercase, discreet.
Clean, premium, editorial, no icons, no button, no emoji.
```

Ejemplo lleno: *Are you looking for a / side hustle you can do from home? / All you need is Wi-Fi and [BRAND].*

---

## 2. `1404534421527939` — call-out de nicho (estático)

- **Archivo:** `1404534421527939/img-01-df9400b4.jpg`
- **Tamaño:** 1080 × 1350 (4:5)
- **Headline Meta:** Start Your 14-Day FREE Trial
- **Landing:** `skool.com/signup`
- **Ad Library:** https://www.facebook.com/ads/library/?id=1404534421527939

### Qué se ve

Misma familia que el #1, pero **vertical 4:5** y copy de *niche call-out*: nombra un oficio y lo invita a la plataforma. Sin logo visible (o mínimo). El peso está en “we want you on [BRAND]”.

**Texto en imagen:**

> If you're a  
> spiritual guide,  
> we want you on  
> Skool.

### Prompt de réplica

```
Minimalist portrait 4:5 social ad (1080x1350), solid dark charcoal gray background, no photo.
Centered classic white serif type, four lines, vertically and horizontally centered, generous empty space.
Copy:
"If you're a
[AUDIENCE],
we want you on
[BRAND]."
High contrast, professional, quiet authority. No logo needed, no CTA button, no decoration.
```

Variar `[AUDIENCE]` (barber, coach, nutricionista, etc.) es el sistema: misma plantilla, freeze distinto.

---

## 3. `2589010821517352` — SIDE HUSTLE bold + CTA (estático)

- **Archivo:** `2589010821517352/img-01-157eca4d.jpg`
- **Tamaño:** 1080 × 1080 (1:1)
- **Headline Meta:** Try it free for 14 days!
- **Landing:** `skool.com/signup`
- **Ad Library:** https://www.facebook.com/ads/library/?id=2589010821517352

### Qué se ve

Tipografía de impacto sobre foto desaturada de escritorio (manos en laptop + tablet, vista cenital, casi blanca). Jerarquía:

1. `LOOKING FOR A` — pink, con líneas de puntos a los lados
2. `SIDE HUSTLE` — enorme, condensed bold, pink, el ancla visual
3. `YOU CAN DO FROM HOME?` — pink más chico
4. `ALL YOU NEED IS` — naranja, subrayado fino
5. `WI-FI &` — naranja grande + burst circular naranja con `SKOOL` en blanco adentro
6. Footer: caja blanca con borde negro y sombra offset amarilla. Izquierda logo `skool`. Derecha botón amarillo redondeado `START YOUR FREE TRIAL` en negro.

Paleta: pink + naranja + amarillo sobre gris/blanco. Energía alta, feed-native.

### Prompt de réplica

```
Square 1:1 Meta ad. Background: faded desaturated top-down photo of hands typing on a laptop next to a tablet, mostly white/light gray so it reads as texture, not as the subject.
Centered stacked typography, bold condensed sans-serif, all caps.
Top: "LOOKING FOR A" in hot pink, flanked by dotted pink lines.
Giant hot pink "SIDE HUSTLE" (or [HOOK]) dominating the frame.
Below: "YOU CAN DO FROM HOME?" in smaller hot pink.
Then orange "ALL YOU NEED IS" with a thin underline.
Large orange "WI-FI &" next to a jagged orange sunburst badge containing white "[BRAND]" in bold caps.
Bottom footer: white rectangle, thin black outline, slight yellow 3D offset shadow. Left: [LOGO]. Right: rounded yellow button with bold black text "START YOUR FREE TRIAL".
Clean digital marketing, high energy, no extra photos of people faces.
```

---

## 4. `859938550178616` — freelancer en home office (lifestyle)

- **Archivo:** `859938550178616/img-01-66da08df.jpg`
- **Tamaño:** 1254 × 1254 (1:1)
- **Headline Meta:** Discover 180k skools
- **Landing:** discovery Freelancing
- **Ad Library:** https://www.facebook.com/ads/library/?id=859938550178616

### Qué se ve

Foto cinematic low-key. Hombre ~40, barba, lentes negros, camisa oliva sobre remera negra. Escribe en un cuaderno blanco con una laptop plateada abierta. Fondo: oficina en casa cálida, estantería de madera y planta desenfocadas (bokeh). Luz lateral suave.

Composición: sujeto a la **derecha**, copy a la **izquierda**. Logo `skool` multicolor arriba a la izquierda. Arco amarillo fino desde la esquina inferior izquierda.

**Texto overlay (serif blanco, una palabra en script amarillo subrayado):**

> Learn to get your first freelance client by joining a Skool and learning the **skill**.

`skill` va en script amarillo con swoosh dibujado a mano.

### Prompt de réplica

```
Square 1:1 lifestyle photograph, cinematic warm low-key lighting. A focused professional in their 40s with glasses and a beard, olive button-down over a black t-shirt, writing in a notebook at a desk with an open silver laptop. Cozy home office, wooden bookshelf and plant in soft bokeh background.
Subject on the right third. Large empty space on the left for text.
Top-left: small colorful lowercase [LOGO].
Left-aligned elegant white serif headline: "[HEADLINE]". Highlight ONE keyword in bright yellow handwritten script with a hand-drawn yellow underline. A thin curved yellow arc from the bottom-left corner.
Photorealistic, shallow depth of field, no stock-photo smile-at-camera.
```

---

## 5. `961286433604372` — freelancer con plantas (lifestyle)

- **Archivo:** `961286433604372/img-01-db6bc24e.jpg`
- **Tamaño:** 1254 × 1254 (1:1)
- **Headline Meta:** Discover 180k skools
- **Landing:** discovery Freelancing
- **Ad Library:** https://www.facebook.com/ads/library/?id=961286433604372

### Qué se ve

Misma plantilla que el #4, versión **high-key / plants**. Mujer joven, lentes, moño desordenado, camisa mostaza. Sonríe mirando hacia abajo, escribe en un cuaderno espiral junto a un MacBook. Mesa de madera clara, taza, plantita, tablet de pie a la izquierda con el logo Skool y un diagrama circular (laptop, focos, check, chat). Fondo: living luminoso, estantes, planta colgante. Luz natural de ventana.

Copy arriba a la izquierda, serif navy. Dos pinceladas amarillas bajo “Skool”. Logo `skool` arriba a la derecha. Curvas amarillas translúcidas en esquinas opuestas.

**Texto overlay:**

> Freelancing skills are the new job security; get them on Skool in public.

### Prompt de réplica

```
Square 1:1 bright lifestyle photo. Young woman with glasses and hair in a messy bun, mustard shirt, calm smile, writing in a spiral notebook at a round light-wood table. Open silver laptop, ceramic mug, small potted plant. A tablet standing upright showing the [BRAND] logo and a simple circular product diagram. Bright modern room full of houseplants, bookshelves softly blurred, natural window light, warm wood and green palette.
Leave the top-left third clean for text.
Navy serif headline top-left: "[HEADLINE]". Two thick yellow brush strokes under the brand name. Small [LOGO] top-right. Thin translucent yellow curved frame accents on opposite corners.
Photorealistic, cozy, productive, not corporate.
```

---

## 6. `1624810416316032` — talking-head “So Nate” (thumbnail de video)

- **Archivo:** `1624810416316032/img-01-a4cea6aa.jpg` (+ `vid-01-39174ced.mp4`)
- **Tamaño:** 1080 × 1920 (9:16)
- **Headline Meta:** Try it free for 14 days!
- **Landing:** `skool.com/signup`
- **Ad Library:** https://www.facebook.com/ads/library/?id=1624810416316032

### Qué se ve

Frame de video, no un estático diseñado. Plano medio vertical. Hombre ~30, fade corto, polar sherpa gris/oliva con bolsillo con cierre, micrófono de mano negro cerca de la boca, habla hacia fuera de cámara. Estudio oscuro, bokeh, busto clásico en un estante. Caption centro: **So Nate** (sans bold blanco). Luz suave de 3/4. Vibe podcast / testimonio, no brand film.

### Prompt de réplica

```
Vertical 9:16 medium shot, photorealistic video still. A man in his late 20s with a short fade haircut, sitting in a dim podcast studio, holding a black handheld microphone near his mouth, mid-sentence, looking slightly off-camera. Gray-olive sherpa fleece pullover, dark shorts. Moody shallow depth of field, blurred studio gear and a classical bust on a shelf. Soft directional side light. Centered bold white sans-serif caption: "[CAPTION]". Authentic interview energy, no logos, no lower-thirds, no cinematic color grade.
```

Para otra marca: mismo encuadre, otra persona + caption (`So [NAME]`). El copy largo va en primary text, no en la imagen.

---

## 7. `2603828473406221` — nomad en la playa (thumbnail de video)

- **Archivo:** `2603828473406221/img-01-db510ba1.jpg` (+ `vid-01-20a10fcf.mp4`)
- **Tamaño:** 1080 × 1920 (9:16)
- **Headline Meta:** Get started for FREE 🔥 Unlock the 14-Day Trial
- **Landing:** `skool.com/signup`
- **Ad Library:** https://www.facebook.com/ads/library/?id=2603828473406221

### Qué se ve

UGC 9:16, sol de mediodía. Hombre rubio rizado, barba corta, gorra gris, lentes de sol, remera teal, shorts negros. Sentado en la arena sobre toalla rayada azul/blanco, recostado en una mochila negra, tablet rugged con ambas manos. Mar, cielo azul, cartel “Safety First” recortado a la izquierda. Caption centro: **work for that long** — blanco bold con borde negro grueso (estilo Reels).

Promesa visual: laburás desde cualquier lado. El caption es un fragmento de frase (el video completa el pensamiento).

### Prompt de réplica

```
Vertical 9:16 realistic photo, bright noon sunlight. Young man with curly blonde hair, light beard, grey baseball cap, black sunglasses, teal t-shirt and black shorts, sitting on a blue-and-white striped towel on a sunny beach, leaning against a black backpack, holding a ruggedized tablet with both hands, looking at the screen. Sand, ocean, clear blue sky, distant people in the water. Centered bold white sans-serif caption with thick black outline: "[CAPTION]". Digital-nomad, work-from-anywhere, no logo, no UI chrome, handheld UGC feel.
```

---

## 8. `2110280236189712` — screenshot Discovery (thumbnail de video)

- **Archivo:** `2110280236189712/img-01-64d04dae.jpg` (duplicado: `01.jpg`) + `vid-01-ba2e0319.mp4`
- **Tamaño:** 1670 × 1078 (landscape ~1.55:1)
- **Headline Meta:** Discover 180k skools
- **Landing:** `skool.com/discovery?q=Freelancing`
- **Ad Library:** https://www.facebook.com/ads/library/?id=2110280236189712

### Qué se ve

No es una foto de campaña: es **producto**. Captura (o frame) de Skool Discovery buscando “Freelancing”. Grilla de ~6 community cards. Cada card = banner + nombre + blurb. Los banners son el lenguaje visual de los creadores, no de Skool:

1. **Elite 1% Freelancing Network** — caballo de ajedrez dorado, fondo negro, copy serif blanco *Think, decide, position, and execute…*
2. **Freedom Freelancing** — skyline cyberpunk azul, *FREEDOM FREELANCING -MASTERMIND-*
3. **Freelancing for Animators** — retrato + beanie sobre verde, *Freelancing / for Animators* pink
4. **FREELANCE with ERICA** — mujer con lentes, *LEARN. EARN. BELONG.* + barra *TOP 1% UPWORK FREELANCER*
5. **Remote Income Network** — hombre de traje, iconos WFH, header amarillo *#1 REMOTE JOB COMMUNITY*
6. **Start & Scale Freelance** — retrato sobre verde, *START & SCALE FREELANCE*

El ad vende “hay 180k skools, mirá el catálogo”, no un benefit abstracto.

### Prompt de réplica

No generar una foto: **reconstruir la UI** (Figma / screenshot real de tu discovery) o este prompt de mock:

```
Clean product screenshot of a community marketplace web app, landscape 16:9. Top: search bar with query "[NICHE]". Below: a 2x3 grid of community cards. Each card has a wide banner image, a community name, and a one-line description. Card banners mix: (1) luxury gold chess piece on black, (2) blue neon futuristic city, (3) smiling instructor on solid bright green, (4) professional woman with "LEARN. EARN. BELONG." graphic, (5) energetic presenter with yellow "#1" header, (6) close-up portrait on neon green with bold white title. White app chrome, [BRAND] wordmark small in the header. Photoreal UI, no extra slogans on top of the screenshot.
```

Para otra marca: usar un screenshot verdadero de tu directorio / marketplace. El estilo de las cards (retrato + verde / objeto lujo / cyberpunk) es lo replicable **dentro** de cada comunidad, no el ad wrapper.

---

## 9. `2609356846146337` — mismo Discovery, crop más chico

- **Archivo:** `2609356846146337/img-01-e86e51fd.jpg` + `vid-01-3c2d2e43.mp4`
- **Tamaño:** 660 × 826 (~4:5)
- **Headline Meta:** Discover 180k skools
- **Landing:** discovery Freelancing
- **Ad Library:** https://www.facebook.com/ads/library/?id=2609356846146337

### Qué se ve

Misma familia que el #8 (UI de Discovery / cards de freelancing). Recorte más angosto, probablemente poster del video o crop mobile. Mismos tipos de banner: ajedrez lujo, cyberpunk, retrato beanie, Erica LEARN/EARN, remote jobs amarillo, start & scale verde.

No hace falta un prompt distinto: es **el mismo sistema de cards**, otro aspect ratio. Para réplica, sacar un screenshot 4:5 de las primeras 4 cards o un crop del video.

### Prompt de réplica

```
Same community-marketplace UI as a product screenshot, portrait 4:5 crop. Show 4 community cards stacked or in a 2x2 grid after searching "[NICHE]". Each card: banner + name + short bio. Mix of luxury object photography, neon city graphic, instructor portraits on solid green, and a high-energy yellow "#1 community" thumbnail. White app chrome, [BRAND] header. Tight crop, mobile-feed friendly, no extra ad copy over the UI.
```

---

## Cómo reusar esto en otra marca

1. **Tipografía sola (#1 y #2)** — el más barato de replicar. Misma plantilla charcoal + serif. Cambiá la pregunta (#1) o el oficio (#2). Sin foto.
2. **Lifestyle + overlay (#4 y #5)** — un par foto hombre / foto mujer, mismo layout (copy a la izquierda, sujeto a la derecha, acento amarillo, logo en esquina). Copy = skill + “en público” / “tu primer cliente”.
3. **Bold + botón (#3)** — si querés un estático que ya trae CTA. Hook enorme + footer logo/botón.
4. **UGC 9:16 (#6 y #7)** — no diseñar: filmar. Caption de 2–4 palabras al centro, borde negro si el fondo es claro.
5. **Producto (#8 y #9)** — no inventar UI. Screenshot real del directorio. El ad es “mirá que hay gente adentro”.

Skool no mezcla estas familias en un mismo estático: o es tipo, o es lifestyle, o es UI, o es UGC.

Para **esta app ahora:** no replicar #8/#9 (no hay discovery). Lo más barato y honesto: familia tipográfica (#1/#2) o UGC (#6/#7) con outcome de creador, landing `orlis.app`.
