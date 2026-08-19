# Visión y estrategia del producto

Documento de contexto para decisiones futuras. No convertir hipótesis en hechos. No usar este archivo como permiso para construir features.

**Estado actual:** validación de demanda (experimentos y landings para Meta Ads). No optimizar para escala.

---

## Visión

Estamos validando una plataforma para **Argentina / LATAM** que permita a una persona **crear y operar una membresía digital desde un solo lugar**.

Tiene elementos conceptualmente similares a Skool, pero debe pensarse desde el inicio para el mercado latinoamericano.

La diferenciación inicial es la **integración nativa con Mercado Pago** y medios de pago locales.

No es un procesador de suscripciones. Combina:

- membresías
- contenido
- videos
- comunidad
- miembros
- cobros recurrentes

Posible más adelante (no construir ahora): WhatsApp, eventos, clases en vivo, automatizaciones, recuperación de pagos, analytics, cursos más avanzados.

---

## Problema

Hoy muchos creadores y profesionales operan una membresía con un stack fragmentado:

| Paso | Herramienta típica |
|---|---|
| Adquisición | Instagram |
| Comunicación | WhatsApp / Telegram |
| Cobros | Mercado Pago / transferencia |
| Contenido y videos | Google Drive / YouTube |
| Control de miembros y pagos | Google Sheets |
| Clases | Zoom / Meet |

Eso hace la operación **manual y dispersa**. El producto busca **centralizarla**.

---

## Propuesta de valor (a testear)

Hipótesis principal:

> Todo lo que necesitas para vender una membresía online.

Explicación:

> Contenido, comunidad y cobros recurrentes con Mercado Pago.

Otras líneas a testear:

- Crea tu propia comunidad paga.
- Videos, miembros y suscripciones con Mercado Pago.

**No asumir todavía cuál mensaje gana.** Las campañas de Meta Ads deben revelarlo.

---

## Diferencia con Skool

No construir un clon de Skool.

Skool está principalmente alrededor de **comunidad + cursos**.

Este producto debe estar alrededor del **negocio de membresías en LATAM**:

```
CREADOR
  → crea espacio
  → sube contenido
  → consigue miembros
  → cobra recurrentemente
  → Mercado Pago
  → gestiona acceso
  → gestiona comunidad
```

Mercado Pago **procesa el dinero**. Nuestra plataforma **administra la membresía**.

---

## Diferenciadores

### Iniciales (dirección del producto, no backlog inmediato)

- Mercado Pago
- cobros en moneda local
- suscripciones recurrentes
- contenido + comunidad
- administración de miembros
- experiencia diseñada para LATAM

### Posteriores (no implementar todavía)

- WhatsApp
- recordatorios de pagos
- recuperación de pagos fallidos
- onboarding automático
- eventos
- analytics de membresías
- automatizaciones

---

## Usuarios iniciales a validar

Prioridad:

1. Creadores que venden educación / contenido
2. Coaches y mentores
3. Academias pequeñas
4. Entrenadores / fitness online
5. Profesores independientes
6. Comunidades profesionales

Usuario ideal: **ya vende o tiene intención concreta de vender acceso recurrente**.

Los leads que **ya tienen miembros pagando** valen más para la validación que quienes “algún día” quieren armar una comunidad.

---

## Hipótesis de dolor

No asumir que el único dolor es cobrar. Hay tres hipótesis en paralelo:

### A — Cobros

> Deja de perseguir pagos todos los meses.

El problema principal sería administrar cobros recurrentes **a mano**.

### B — Comunidad

> Crea tu propia comunidad paga con Mercado Pago.

El problema principal sería no tener una plataforma **local** para comunidad + contenido + membresía.

### C — Fragmentación

> Tu membresía, en un solo lugar.

El problema principal sería operar WhatsApp + Mercado Pago + Drive + Sheets + otras herramientas al mismo tiempo.

Las campañas de Meta Ads deben mostrar **cuál genera más intención**.

---

## Competencia

No considerar solo Skool.

El competidor principal puede ser el **stack manual**:

WhatsApp + Mercado Pago + Google Drive + Google Sheets.

Ese stack es **barato, conocido y ya funciona**. El producto tiene que ahorrar suficiente trabajo (o mejorar suficiente la experiencia) como para justificar el cambio.

---

## Dirección del MVP (cuando se construya)

No construir Skool completo.

Flujo a demostrar eventualmente:

**Creador:** crea membresía → define precio → agrega contenido/videos → obtiene página pública.

**Cliente:** entra a la página → ve oferta → se suscribe con Mercado Pago → suscripción activa → obtiene acceso.

**Creador ve:** miembros, estado de membresía, contenido, ingresos básicos.

**Videos:** no hay infraestructura propia al inicio. Embeds (YouTube / Vimeo). El objetivo es validar el producto, no streaming.

---

## Principio de desarrollo

Antes de cualquier feature:

> ¿Necesitamos esto para validar que alguien quiere pagar o usar esta plataforma?

Si no, postergarlo.

### Priorizar

1. validación de demanda
2. claridad de propuesta
3. membresías
4. Mercado Pago
5. contenido
6. miembros
7. comunidad

### Evitar al inicio

gamificación, chat complejo, video hosting propio, analytics avanzados, múltiples roles, app móvil, personalización avanzada, automatizaciones complejas.

---

## Qué ya está validado vs. qué no

### Considerar validado a nivel de mercado

- existe demanda por cobros recurrentes
- Mercado Pago soporta suscripciones
- existe mercado para educación / comunidades online
- existen productos globales (Skool, Hotmart, etc.)
- los creadores pagan herramientas para monetizar contenido

### No validado (hipótesis a probar)

- que el mercado argentino quiera **específicamente este producto**
- cuál segmento tiene mayor necesidad
- cuál mensaje convierte mejor
- cuánto estarían dispuestos a pagar
- si Mercado Pago es diferenciador suficiente
- si comunidad importa más que gestión de membresías
- si migrarían desde WhatsApp / Drive / Sheets

---

## Objetivo de esta etapa

No optimizar para escala.

Construir experimentos y landings para Meta Ads que permitan descubrir:

- quién quiere el producto
- qué problema quiere resolver
- qué mensaje genera más intención
- qué tipo de usuario convierte
- si ya tiene miembros
- cómo administra hoy sus membresías
- cuánto cobra / cobraría

Usar este documento como contexto. No tratar una hipótesis como hecho. No agregar funcionalidades solo porque están escritas acá.
