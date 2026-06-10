# Activar cuentas y acceso por compra (Supabase + Hotmart)

La web ya funciona como escaparate: vista previa gratis + botones de compra a
Hotmart. Para que las **compradoras accedan al contenido dentro de la web**,
hay que activar el login y conectar el webhook de Hotmart. Estos son los pasos.

> Mientras no se configure, todo sigue funcionando: el contenido de pago se
> muestra bloqueado con botones de compra.

## 1. Crear el proyecto en Supabase
1. Entra en https://supabase.com y crea un proyecto (plan gratuito).
2. En **SQL Editor**, pega el contenido de [`supabase/schema.sql`](supabase/schema.sql) y pulsa **Run**.
3. En **Project Settings → API**, copia:
   - **Project URL**
   - **anon public** key
   - **service_role** key (secreta, no la compartas en público)
4. En **Authentication → URL Configuration**, pon como **Site URL**:
   `https://huevosyrosas.vercel.app` y añade esa misma URL en *Redirect URLs*.
5. En **Authentication → Providers**, asegúrate de que **Email** está activado
   (el enlace mágico viene activado por defecto).

## 2. Variables de entorno en Vercel
En el proyecto de Vercel → **Settings → Environment Variables**, añade:

| Nombre | Valor |
| --- | --- |
| `VITE_SUPABASE_URL` | Project URL de Supabase |
| `VITE_SUPABASE_ANON_KEY` | anon public key |
| `SUPABASE_URL` | Project URL de Supabase (igual) |
| `SUPABASE_SERVICE_ROLE_KEY` | service_role key |
| `HOTMART_HOTTOK` | el HOTTOK del webhook (paso 3) |
| `HOTMART_PRODUCT_MAP` | *(opcional)* mapa de productos, ver paso 4 |

Después, vuelve a desplegar (Deployments → Redeploy) para que tomen efecto.

## 3. Configurar el webhook de Hotmart
1. En Hotmart, ve a **Herramientas → Webhook (Postback)** y crea uno nuevo.
2. **URL**: `https://huevosyrosas.vercel.app/api/hotmart-webhook`
3. Copia el **HOTTOK** que te da Hotmart y ponlo en la variable `HOTMART_HOTTOK`.
4. Marca al menos estos eventos: *Compra aprobada* (PURCHASE_APPROVED),
   *Compra completa*, *Reembolso*, *Cancelación de suscripción*.

## 4. Mapear los productos
El webhook identifica cada producto con un id de Hotmart. Por defecto ya está
mapeado con los códigos públicos:

- `D105703744B` → programa **Me Duele Estar Soltera**
- `B104720539X` → **membership** (acceso a todo)

Si tras una compra de prueba el acceso no se desbloquea, mira los **Logs** de la
función `hotmart-webhook` en Vercel: ahí se imprime el `product.id` real que
envía Hotmart. Copia ese id y crea la variable `HOTMART_PRODUCT_MAP`, por ej.:

```json
{"1234567":"me-duele-estar-soltera","7654321":"membership"}
```

(`"membership"` da acceso a todos los programas **y libros**.)

### E-books (Biblioteca)
Los libros funcionan igual que los programas. Cada libro tiene un `id` interno
(en [`src/data/ebooks.js`](src/data/ebooks.js)): `no-estas-loca-desregulada`,
`por-que-elijo-mal`, `los-duelos-invisibles`, `papa-necesito-sanar-ebook`,
`mama-necesito-sanar-ebook`. Para venderlos:

1. Crea el producto en Hotmart y su enlace de pago.
2. Pon ese enlace en `BOOK_HOTMART[<id>].checkout` en
   [`src/data/hotmart.js`](src/data/hotmart.js) (sustituye el `null`).
3. Mapea el `product.id` de Hotmart al `id` del libro en `HOTMART_PRODUCT_MAP`:

```json
{"9999999":"no-estas-loca-desregulada","membership_id":"membership"}
```

Tras la compra, el libro aparece en **Mi espacio → Mis libros** y se puede leer
dentro de la web con el lector.

## 5. Probar (modo seguro)
1. Hotmart permite compras de prueba; haz una con tu email.
2. Inicia sesión en la web con **ese mismo email** (te llega un enlace).
3. Entra al programa: el contenido debe aparecer desbloqueado.

## Cómo se protege el contenido
- El catálogo, el temario y la **primera lección/capítulo** (vista previa) son públicos.
- El **cuerpo del resto de lecciones** vive solo en el servidor
  (`api/_lib/content.js`) y se entrega vía `/api/content` **solo** tras
  comprobar la compra. Nunca se incluye en el código que descarga el navegador.
- Los **capítulos de pago de los libros** funcionan igual: viven en
  `api/_lib/ebooks.js` y se entregan vía `/api/ebook` solo tras comprobar la
  compra del libro (o la membresía).
