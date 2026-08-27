# GOTCHAS

- **`AGENTS.md`**: `next dev` reescribe el bloque Next. Agregar reglas **después** de `END:nextjs-agent-rules`, no borrar el bloque.
- **Cuenta Ads**: el token de `yooo` ve AgendApp y OrlisApp. El default del repo es OrlisApp. No crear campañas en AgendApp “porque el token funciona”.
- **`is_adset_budget_sharing_enabled`**: obligatorio en Graph v26 si la campaña no usa presupuesto de campaña. Sin eso, error `4834011`.
- **CAPI user_data**: Graph rechaza eventos sin IP + user agent suficientes (`2804050`). El route `/api/meta/events` rellena IP/UA/`_fbp`/`_fbc` del request.
- **CAPI token vs Ads token**: el de CAPI puede **mandar** eventos y no **leer** el pixel (`Missing Permission`). No es fallo de envío.
- **`FACEBOOK_PAGE_ID` en env** sigue siendo la página de AgendApp (`591495304038098`). El system user solo ve esa página. Creativos pausados de Orlis la usaron por falta de página Orlis; **no activar** hasta asignar una página Orlis.
- **Ad set v26**: hay que mandar `targeting.targeting_automation.advantage_audience` en `0` o `1`. Si falta, error `1870227`.
- **Ad creative**: no mandar `standard_enhancements`. Está deprecado (`3858504`).
- **PageView doble en `next dev`**: `MetaPageView` + Strict Mode. El par con el mismo UUID está bien; el extra solo-servidor es ruido de local.
- **`.env.local` sucio**: hay notas de chat pegadas arriba del archivo. Las keys reales empiezan en las líneas `MERCADOPAGO_*` / `NEXT_PUBLIC_*`.
