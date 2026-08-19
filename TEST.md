# Test manual (aislado)

Este archivo es **solo para probar**. No mezcla ni reemplaza el `README.md` ni el código del MVP.

Producto bajo prueba:

- Nombre: `test de suscripcion`
- Precio: `$1000 ARS` por mes
- El cobro tiene que ir a la cuenta del vendedor que conectó Mercado Pago, no a la app.

## Qué se preparó con el MCP

Este test **no usa Agendapp**. Hay que usar una aplicación de Mercado Pago de **este** proyecto (Client ID y Client Secret en `.env.local`).

Usuarios de prueba de Argentina (MLA):

| Rol | User ID | Usuario |
| --- | --- | --- |
| Vendedor | 2945277371 | `TESTUSER582188978686856953` |
| Comprador | 2945277373 | `TESTUSER2594529645535487099` |

Al comprador se le cargaron `$10.000` de saldo de prueba.

Las contraseñas no se guardan acá. Copialas desde:

https://www.mercadopago.com.ar/developers/panel/app/73456565102351/test-users

Si no aparece, en esa fila usá **Generar nueva contraseña**.

## Antes de correr el test

1. En `.env.local` tienen que estar Client ID y Client Secret de la app de **este** proyecto, no de Agendapp.
2. En el panel de esa aplicación, la URL de redireccionamiento tiene que ser exactamente:

   `http://localhost:3000/api/oauth/callback`

3. Dejá PKCE desactivado.

## Cómo testear

En una terminal:

```bash
npm run dev
```

### Paso 1 — el vendedor conecta su Mercado Pago

1. Abrí `http://localhost:3000`.
2. Clic en **Conectar Mercado Pago**.
3. Iniciá sesión con el **vendedor**:
   - Usuario: `TESTUSER582188978686856953`
   - Contraseña: la del panel
4. Autorizá la app.
5. Deberías ver `/conectado/...` con el link de landing `/c/{id}`.

### Paso 2 — el comprador se suscribe a ese vendedor

1. Cerrá la sesión de Mercado Pago o usá otra ventana privada.
2. Abrí el link de landing del vendedor.
3. Deberías ver:
   - Nombre: `test de suscripcion`
   - Precio: `$1.000 ARS por mes`
4. Email: el de la cuenta del **comprador** (tiene que coincidir con quien paga).
5. Clic en **Suscribirme**.
6. Iniciá sesión con el **comprador**:
   - Usuario: `TESTUSER2594529645535487099`
   - Contraseña: la del panel
7. Pagá con tarjeta de prueba:

| Campo | Valor |
| --- | --- |
| Número | `5031 7557 3453 0604` |
| Vencimiento | `11/30` |
| CVV | `123` |
| Nombre | `APRO` |
| Documento | DNI `12345678` |

8. El checkout tiene que quedar asociado al vendedor, no a la app.
9. Si Mercado Pago acepta el `back_url`, volvés a `/success` y ves: `Suscripción creada correctamente.`

## Si localhost falla en el retorno

No cambies el código del MVP. Usá ngrok solo para este test:

```bash
npx ngrok http 3000
```

Y en `.env.local` (solo para la prueba) poné las URLs HTTPS de ngrok en:

- `MERCADOPAGO_REDIRECT_URI`
- `MERCADOPAGO_BACK_URL`
- `APP_URL`

Registrá la misma `REDIRECT_URI` en el panel de esa aplicación.
