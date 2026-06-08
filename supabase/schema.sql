-- Esquema de Huevos y Rosas para Supabase.
-- Pégalo en el SQL Editor de tu proyecto Supabase y ejecútalo.

-- Tabla de accesos: qué email tiene acceso a qué producto.
create table if not exists public.entitlements (
  id            bigint generated always as identity primary key,
  email         text not null,
  product_code  text not null,           -- id de programa o 'membership'
  status        text not null default 'active',  -- 'active' | 'revoked'
  hotmart_event text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (email, product_code)
);

create index if not exists entitlements_email_idx on public.entitlements (email);

-- Seguridad por filas: cada usuario solo puede LEER sus propios accesos
-- (comparando con el email de su sesión). Las escrituras las hace el webhook
-- con la service_role, que se salta RLS.
alter table public.entitlements enable row level security;

drop policy if exists "leer mis accesos" on public.entitlements;
create policy "leer mis accesos"
  on public.entitlements
  for select
  using (lower(email) = lower(auth.jwt() ->> 'email'));
