# META — Pixel, CAPI y Ads

IDs públicos. **Nunca documentar access tokens.**

## Identidades

| Qué | Valor |
|---|---|
| Pixel / dataset | `4622003658074853` (nombre **Orlis**) |
| Ad account | `act_2811593375907515` (**OrlisApp**) |
| Business dueño | `1149975198847487` (**Espacio woman**) |
| Meta App del token Ads | `883163556780689` (**yooo**) |
| System user | **Conversions API System User** |
| Graph Ads | `https://graph.facebook.com/v26.0` |
| Graph CAPI (código) | `v21.0` en `src/lib/meta-capi.ts` |
| Producción | `https://www.orlis.app` |

No usar:

| Qué | Valor | Por qué |
|---|---|---|
| Pixel AgendApp | `962399948832144` | Otro producto |
| Ad account AgendApp | `act_992210399476508` | Otro producto |
| Business AgendApp | `537481672623969` | Otro BM |

El token Ads **sí** puede ver las dos cuentas (el system user está asignado a ambas). Mutar **solo OrlisApp** salvo pedido explícito.

## Tokens locales

| Variable | Para |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Pixel browser |
| `META_CAPI_ACCESS_TOKEN` | POST `/{pixel}/events` |
| `META_CAPI_TEST_EVENT_CODE` | Events Manager, solo local/preview (`TEST84633`) |
| `META_ADS_ACCESS_TOKEN` | Marketing API (campañas) |
| `FACEBOOK_ACCESS_TOKEN` | Alias del de Ads |

Keychain Mac (Ads): `security find-generic-password -a "$USER" -s codex-meta-ads-token -w`  
No hacer `echo` del token.

## Eventos que manda el sitio

| Evento Meta | Cuándo | Canal |
|---|---|---|
| `PageView` | Toda página (`MetaPageView` / `LANDING_VIEW`) | Pixel + CAPI, mismo `event_id` |
| `Lead` | Click CTA WhatsApp | Pixel + CAPI, mismo `event_id` |
| `InitiateCheckout` | `/api/oauth/connect` | Solo CAPI |
| `CompleteRegistration` | OAuth MP OK | Solo CAPI |

`SCROLL_*` se loguea en local y **no** va a Meta. `ViewContent` está en el enum y no se dispara.

Optimización de campañas de este test: **Lead**, no Purchase.

## Probar CAPI (local)

Events Manager → Probar tus eventos → código `TEST84633`.  
Abrir `http://localhost:3000` (no `orlis.app`: producción no lleva test code).

Lead correcto: **mismo id** en Navegador y Servidor.

PageView extra solo-servidor en localhost: React Strict Mode. En prod suele ser uno.

`SubscribedButtonClick` lo inventa Meta (eventos automáticos). No es nuestro código.

## Crear campaña por API

Siempre `status=PAUSED`. Incluir `special_ad_categories=[]` y `is_adset_budget_sharing_enabled=false` si no hay CBO.

Campañas de prueba ya hechas:

- AgendApp `120251721669590071` — **borrada** (cuenta equivocada).
- OrlisApp `120251670776520512` — `Orlis · test API · 2026-08-26`, **PAUSED**, `OUTCOME_LEADS` (vacía).
- OrlisApp `120251677960060512` — `Orlis · test · coach · 2026-08-26`, **PAUSED**, `OUTCOME_LEADS`. Conjunto Coach `120251677968980512` (USD 4/día). Ads: classic `120251677972380512`, editorial `120251677972890512`. Landing `https://www.orlis.app/v2`. Optimiza `LEAD` en pixel Orlis. **No activar** hasta asignar página Orlis al system user: los creativos usan hoy la página AgendApp `591495304038098`.

## Error #200 en OrlisApp

El system user tiene que estar asignado a **esa** cuenta (Administrar campañas), no solo a AgendApp. App a conectar: `883163556780689`.
