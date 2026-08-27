---
title: Pixel Orlis, CAPI y cuenta Ads OrlisApp
date: 2026-08-26
task_type: docs
confidence: alta
promote_to: docs/ai/META.md
---

# Pixel Orlis, CAPI y cuenta Ads OrlisApp

## Metadata

- **Fecha:** 2026-08-26
- **Tipo:** docs
- **Confianza:** alta
- **Revalidar cuando:** cambie el pixel, la cuenta ads o el dominio
- **Promover a:** `docs/ai/META.md`

## Archivos

- `src/app/MetaPixel.tsx`
- `src/app/MetaPageView.tsx`
- `src/lib/meta.ts`
- `src/lib/meta-capi.ts`
- `src/lib/meta-ads.ts`
- `src/lib/analytics.ts`

## Aprendizaje

El Pixel `4622003658074853` (Orlis) está en el sitio y en la cuenta **OrlisApp**. CAPI usa `META_CAPI_ACCESS_TOKEN` + test code solo en local/preview. Una campaña de prueba en AgendApp se creó por error y se borró; la de OrlisApp `120251670776520512` quedó `PAUSED`. El system user **Conversions API System User** (app `yooo`) tuvo que asignarse a OrlisApp o Graph devolvía `#200`. Lead en Events Manager con el mismo `event_id` en navegador y servidor confirma deduplicación.

## Por qué importa

Mezclar AgendApp y Orlis rompe medición y ads. El próximo agente no debe “rescatar” `act_992210399476508` como default.

## Verificación

Events Manager → Probar eventos (`TEST84633`) en localhost. Graph: `GET act_2811593375907515` con el token Ads (sin imprimirlo).
