# Descripción

## Correr en dev

1. Clonar el repositorio.
2. Crear una copia del `.env.template` y renombrarlo a `.env` y cambiar las variables de entorno.
3. Instalar dependencias `pnpm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de Primsa `npx prisma migrate dev`
6. Ejecutar seed `pnpm seed`
7. Correr el proyecto `pnpm dev`
8. Limpiar el localStorage del navegador.
