---
title: Campaña coach en pausa y gotchas de Graph v26
date: 2026-08-26
task_type: docs
confidence: alta
promote_to: docs/ai/GOTCHAS.md
---

# Campaña coach en pausa y gotchas de Graph v26

## Metadata

- **Fecha:** 2026-08-26
- **Tipo:** docs
- **Confianza:** alta
- **Revalidar cuando:** exista página Orlis o cambie Graph Ads
- **Promover a:** `docs/ai/GOTCHAS.md`

## Archivos

- `docs/ai/META.md`
- `docs/ai/GOTCHAS.md`
- `MARKETING/creatives/orlis-coach-campaign.json`

## Aprendizaje

Campañas de test en OrlisApp: `120251677960060512` (coach), conjunto `120251677968980512`, ads classic/editorial pausados. Graph v26 exige `targeting_automation.advantage_audience` (`0` o `1`) o falla con `1870227`. `standard_enhancements` en el creative está deprecado (`3858504`). El system user **Conversions API System User** solo tiene la página AgendApp; sin página Orlis no hay identidad de marca correcta al activar.

## Por qué importa

Activar ahora mostraría AgendApp como anunciante. Un ad set sin `advantage_audience` ni siquiera se crea.

## Verificación

Graph: campaña/conjunto/ads en `PAUSED` sobre `act_2811593375907515`. Landing de ads: `https://www.orlis.app/v2`. Ads pueden figurar `effective_status=IN_PROCESS` al crearse; `status` sigue `PAUSED`.
