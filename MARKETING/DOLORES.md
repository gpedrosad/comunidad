# Dolores

Fuente para copy de ads y landings. No son features. No son segmentos validados.

**Patrón madre** (siempre por debajo):

> No lo hagas solo. Acá está la gente que ya lo resolvió.

Skool vende eso. Nosotros también, si el anuncio habla a quien **quiere entrar** a una membresía. Si el anuncio habla a quien **quiere cobrar** una membresía, el dolor es otro: ingresos recurrentes, no soledad.

No mezclar los dos públicos en el mismo ad.

Audiencia fría: [AUDIENCIA-FRIA.md](./AUDIENCIA-FRIA.md). Entrar por el outcome, no por el producto.

---

## Cómo usar esto

1. Elegí **un** dolor por anuncio.
2. Headline = el dolor o la transformación, no la plataforma.
3. La membresía / comunidad / Mercado Pago van **después**, como mecanismo.
4. CTA actual: WhatsApp (`src/lib/whatsapp.ts`). Optimizar `Lead`.

---

## Lado miembro (entrar a una membresía)

Gente que quiere el resultado de **otro** que ya lo hizo.

### 1. Autoempleo / primer cliente

**Dolor:** Quiero trabajar por mi cuenta y no sé cómo.

**Antes:** Empleo o changas. Sin sistema. El “emprendimiento” es un video de YouTube.

**Después:** Un camino con gente que ya consiguió el primer cliente.

**Ángulo de ad:** El primer cliente, no “crear comunidad”.

**Ejemplo de línea:** Dejá de adivinar cómo salir por tu cuenta.

---

### 2. Soledad al aprender

**Dolor:** Los cursos genéricos no alcanzan; quieren doers reales.

**Antes:** Infoproducto, certificado, nadie con quién aplicar.

**Después:** Personas que están haciendo lo mismo, ahora.

**Ángulo de ad:** Doers, no más contenido.

**Ejemplo de línea:** Dejá de estudiar solo. Mete te con gente que ya lo está haciendo.

---

### 3. Nichos (mismo patrón, vertical distinta)

Un dolor, un anuncio. No amontonar.

| Nicho | Dolor |
|---|---|
| Oficios / trades | Trabajo sin libertad. Horas por plata, sin dueño de la agenda. |
| Empezar de cero | No hay red, no hay playbook, todo es improvisación. |
| Ads / creativos | Cuello de botella creativo. Saben que tienen que publicar y se traban. |
| Cuerpo | Frustración con el cuerpo. Dietas y planes que no se sostienen solos. |
| Performance | Fallar bajo presión. Saben qué hacer y en el momento se rompe. |

**Ángulo:** Entrá donde ya hay gente que pasó por eso. No “un curso de X”.

---

## Lado creador (cobrar una membresía)

Gente que ya enseña, ya tiene audiencia o ya opera una comunidad.

### 4. Pasión → negocio + miedo a lo técnico

**Dolor:** Monetizar el hobby sin complicarse.

**Antes:** Ama lo que hace. Cobra mal o no cobra. El software lo asusta.

**Después:** Una membresía simple. El cobro corre. Sin armar un stack.

**Ángulo de ad:** Monetizá sin volverte “experto en herramientas”.

**Alineado al hero actual:** Convertí lo que sabés en ingresos mensuales.

---

### 5. Escalar creator / community

**Dolor:** Quiero vivir de la comunidad, con sistema y playbook.

**Antes:** Postea, cobra a mano, responde 24/7. No escala.

**Después:** Sistema: contenido, miembros, cobro mensual, playbook.

**Ángulo de ad:** Dejar de improvisar el negocio. No “features de Skool”.

---

### 6. Audiencia grande sin monetizar (Platinum)

**Dolor:** Oportunidad perdida. Hay gente mirando y no hay oferta mensual.

**Antes:** Seguidores, views, respeto. Ingreso chico o de una sola vez.

**Después:** La audiencia paga cada mes por estar adentro.

**Ángulo de ad:** Estás dejando plata sobre la mesa. No “creá una comunidad”.

**Cuidado:** Solo si el creativo puede mostrar audiencia real. Si no, parece farol.

---

### 7. Ops del backend — operar el Skool es un caos

**Dolor:** Ya tiene (o copia) el modelo comunidad paga y **operarlo** es el infierno.

**Antes:** Cobros, accesos, contenidos y WhatsApp en cinco lugares. O Skool + workarounds LATAM (pago, peso, soporte).

**Después:** Un lugar para miembros + cobro local.

**Ángulo de ad:** El caos operativo, no “somos como Skool”.

**Cuidado:** No posicionarnos como clon. Mercado Pago es el mecanismo local, no el headline.

---

## Mapa rápido (para elegir creativo)

| Intensidad | Dolor | Público | Prioridad en este test |
|---|---|---|---|
| Alta | Pasión → negocio | Creador | Alta — ya está en el hero |
| Alta | Audiencia sin monetizar | Creador con reach | Media — solo con prueba de audiencia |
| Alta | Escalar comunidad | Creador | Media |
| Alta | Soledad al aprender | Miembro | Media — otro mensaje, otra landing |
| Alta | Autoempleo / primer cliente | Miembro | Media — otro mensaje |
| Media | Ops / caos Skool | Creador que ya opera | Baja hasta tener producto |
| Media | Nichos (cuerpo, oficios, ads, presión) | Miembro | Una vertical por campaña |

El test de `orlis.app` **hoy** está en creador + WhatsApp. Los dolores de miembro sirven para **otras** landings/ads, no para mezclarlos en `/`.

---

## Qué no hacer

- Headline con “comunidad”, “plataforma”, “Mercado Pago”, “Skool”.
- Un ad que promete primer cliente **y** monetizar audiencia **y** ops de backend.
- Tratar esta lista como investigación de usuarios. Es un mapa de ataques de copy.
- Construir features para cada dolor.
