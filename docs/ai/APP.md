# APP — Mapa del repo

Stack: **Next.js 16 + React 19 + Tailwind 4**. Sin base de datos en este test. Sin tests automatizados.

## Rutas

| Ruta | Qué es |
|---|---|
| `/` | Landing principal (marca: **Orlis**). CTA WhatsApp. |
| `/v2` | Variante visual (marca: **Orlis**). CTA WhatsApp. |
| `/v2/precios` | Precios de v2. CTA WhatsApp. |
| `/c/[sellerId]` | Flujo Mercado Pago (suscripción). **No es el CTA de ads.** |
| `/conectado/[sellerId]` | Post OAuth MP. |
| `/success` | Vuelta de pago. |

## Código que importa

| Archivo | Rol |
|---|---|
| `src/lib/whatsapp.ts` | Número y mensaje del test. Única fuente del CTA de ads. |
| `src/lib/landing.ts` | Copy de `/`. |
| `src/lib/v2-landing.ts` | Copy de `/v2`. |
| `src/lib/brand.ts` | Wordmark Orlis. Archivos: `public/logo-orlis.png` (original), `public/logo-orlis-wordmark.png` (UI), `public/logo-orlis-mark.png` (o coral). Favicon: `src/app/icon.png`. |
| `src/lib/analytics.ts` | Pixel + beacon CAPI + UTMs/`fbclid`. |
| `src/lib/meta.ts` | Mapeo `LANDING_VIEW` → `PageView`, `CTA_CLICK` → `Lead`. |
| `src/lib/meta-capi.ts` | POST a Graph `/{pixel}/events`. |
| `src/lib/meta-ads.ts` | Lectura de cuenta Ads (`getAdAccount`). |
| `src/app/MetaPixel.tsx` | `fbq('init')` + noscript. |
| `src/app/MetaPageView.tsx` | `PageView` en todas las páginas. |
| `src/app/api/meta/events/route.ts` | Recibe el beacon del browser y manda CAPI. |
| `src/app/api/oauth/connect/route.ts` | OAuth MP + CAPI `InitiateCheckout`. |
| `src/app/api/oauth/callback/route.ts` | Token MP + CAPI `CompleteRegistration`. |
| `src/app/api/subscribe/route.ts` | Alta de suscripción MP. |

## CTA del test de ads

Número `+549 1133017403`. Link `https://wa.me/5491133017403`.  
Click → `trackEvent("CTA_CLICK")` → Meta **Lead** (`content_name: whatsapp`).

## Marca

Nombre público: **Orlis**. Dominio `orlis.app`. No usar Cuota ni Sociar en copy, titles ni WhatsApp (fueron nombres de experimento).

## Env (nombres, no valores)

Local: `.env.local` (gitignored). Producción: Vercel proyecto `comunidad`.

Públicos: `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_SITE_DOMAIN`.  
Secretos: `META_CAPI_ACCESS_TOKEN`, `META_ADS_ACCESS_TOKEN`, keys de Mercado Pago.  
`META_CAPI_TEST_EVENT_CODE` solo Preview/Development, **nunca Production**.
