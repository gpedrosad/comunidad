# Suscripciones con Mercado Pago (OAuth)

MVP para que un vendedor conecte **su** cuenta de Mercado Pago y otras personas se suscriban a su producto.

El cobro **no entra a la cuenta de esta app**. Entra a la cuenta que el vendedor autorizó por OAuth.

Producto fijo de prueba:

- Nombre: `test de suscripcion`
- Precio: `$1000 ARS` por mes

## Cómo funciona

1. El vendedor entra a `/` y hace clic en **Conectar Mercado Pago**.
2. Mercado Pago pide autorización (OAuth).
3. Esta app guarda el token de ese vendedor y le muestra su landing, por ejemplo `/c/123456789`.
4. Un suscriptor abre ese link, carga su email y hace clic en **Suscribirme**.
5. El backend crea una preapproval en Mercado Pago **usando el access token del vendedor**.
6. El suscriptor termina el pago/autorización en Mercado Pago.
7. Si el retorno está bien configurado, vuelve a `/success`.

## Variables de entorno

Creá `.env.local` en la raíz:

```env
MERCADOPAGO_CLIENT_ID=
MERCADOPAGO_CLIENT_SECRET=
MERCADOPAGO_REDIRECT_URI=http://localhost:3000/api/oauth/callback
MERCADOPAGO_BACK_URL=http://localhost:3000/success
APP_URL=http://localhost:3000
```

- `MERCADOPAGO_CLIENT_ID`: APP_ID de tu aplicación en Mercado Pago.
- `MERCADOPAGO_CLIENT_SECRET`: Client Secret de esa misma aplicación.
- `MERCADOPAGO_REDIRECT_URI`: tiene que coincidir **exactamente** con la URL de redireccionamiento cargada en el panel de Mercado Pago.
- `MERCADOPAGO_BACK_URL`: a dónde Mercado Pago devuelve al suscriptor después del checkout.
- `APP_URL`: URL base que se muestra como link de landing del vendedor.

No pongas tokens en el frontend.

## Configurar la aplicación en Mercado Pago

1. Entrá a [Tus integraciones](https://www.mercadopago.com.ar/developers/panel/app).
2. Abrí tu aplicación y copiá Client ID y Client Secret.
3. En **URLs de redireccionamiento** agregá exactamente:

   `http://localhost:3000/api/oauth/callback`

4. Dejá PKCE desactivado. Este MVP usa el flujo OAuth `authorization_code` simple.

## Cómo probarlo en local

```bash
npm run dev
```

1. Abrí [http://localhost:3000](http://localhost:3000).
2. Conectá Mercado Pago con la cuenta del **vendedor**.
3. Copiá el link de landing que aparece después de conectar.
4. Abrí ese link.
5. Suscribite con el email de **otra** cuenta de Mercado Pago (no la del vendedor).
6. Completá el checkout. El cargo mensual de `$1000 ARS` queda asociado a la cuenta conectada.

## Limitación de localhost

Mercado Pago no suele aceptar `localhost` como `back_url`. OAuth a veces funciona en local; el retorno después del pago casi nunca.

Si falla, usá ngrok (`npx ngrok http 3000`) y actualizá las tres URLs:

```env
MERCADOPAGO_REDIRECT_URI=https://TU-NGROK/api/oauth/callback
MERCADOPAGO_BACK_URL=https://TU-NGROK/success
APP_URL=https://TU-NGROK
```

También registrá esa misma `REDIRECT_URI` en el panel de Mercado Pago.

## Archivos principales

| Archivo | Para qué sirve |
| --- | --- |
| `src/app/page.tsx` | El vendedor conecta Mercado Pago |
| `src/app/api/oauth/connect/route.ts` | Empieza el OAuth |
| `src/app/api/oauth/callback/route.ts` | Recibe el code y guarda el vendedor |
| `src/app/conectado/[sellerId]/page.tsx` | Muestra el link de landing |
| `src/app/c/[sellerId]/page.tsx` | Landing pública para suscribirse |
| `src/app/api/subscribe/route.ts` | Crea la suscripción en la cuenta del vendedor |
| `src/app/success/page.tsx` | Confirmación después del checkout |
| `src/lib/product.ts` | Nombre y precio del producto de prueba |
| `.data/sellers.json` | Tokens OAuth del vendedor (local, no commitear) |

## Qué no incluye este MVP

No hay base de datos, login propio, webhooks, cancelaciones, dashboard ni comisiones de marketplace.
