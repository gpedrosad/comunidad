# START HERE — Orlis / este repo

Leer este archivo **antes** de código, env, Pixel o Ads. Es la puerta de entrada para agentes.

## Qué es esto ahora

Test de demanda para una plataforma de **membresías en LATAM** (contenido + comunidad + Mercado Pago).

**Hoy no se vende el producto.** Las landings abren **WhatsApp**. Se optimiza Meta a **Lead**.

Producción: `https://www.orlis.app`  
Repo GitHub: `gpedrosad/comunidad`  
Vercel: proyecto `comunidad`

Visión de producto (hipótesis, no backlog): `docs/product-vision.md`.

## Qué leer según la tarea

| Si vas a… | Leé |
|---|---|
| Rutas, CTA, landings | [APP.md](./APP.md) |
| Pixel, CAPI, Ads API | [META.md](./META.md) |
| Copy, dolores, ángulos de ads | [MARKETING/README.md](../../MARKETING/README.md) |
| Decisiones ya tomadas | [DECISIONS.md](./DECISIONS.md) |
| Errores que ya pagamos | [GOTCHAS.md](./GOTCHAS.md) |
| Notas de sesiones | [LEARNINGS.md](./LEARNINGS.md) |

## No hacer

- Poner el CTA de ads a Mercado Pago / OAuth en esta etapa.
- Crear campañas en la cuenta **AgendApp**.
- Usar el pixel de AgendApp (`962399948832144`) en este sitio.
- Tratar hipótesis de `product-vision.md` como features a construir.
- Mezclar en un mismo ad el dolor del **miembro** y el del **creador**. Ver `MARKETING/DOLORES.md`.
- Commitear `.env.local` o pegar access tokens.

## Comandos

```bash
npm run dev
npm run build
```

Next 16. Leer `node_modules/next/dist/docs/` si el API del framework no coincide con tu entrenamiento.

## Después de un aprendizaje

Copiá `docs/ai/templates/learning-note.md` a `docs/ai/learnings/YYYY-MM-DD-slug.md` y agregá la fila en `LEARNINGS.md`.
