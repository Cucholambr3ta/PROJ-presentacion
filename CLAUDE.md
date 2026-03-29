# CLAUDE.md — PROJ-presentacion Next.js

**Identidad del Proyecto**: Portal de Evaluación Académica Elite (Next.js).
**Tipo**: Web Application (Next.js 14+, App Router).
**Misión**: Portal unificado para mockups interactivos y defensa de título con Wow Factor.

## GUÍA DE DESARROLLO
- **TypeScript mandatory**: Sin el uso de `any`. Definición de interfaces en `@/lib/types`.
- **App Router Layouts**: Uso de layouts para navegación compartida.
- **Client/Server Balance**: Mantener SSR por defecto; usar `"use client"` solo cuando sea necesario para Framer Motion.
- **Styling**: Tailwind CSS como motor de diseño atomizado.
- **Naming**: camelCase para archivos; PascalCase para componentes.

## COMANDOS LCM
- `npm run dev`: Entorno de desarrollo Next.js.
- `npm run build`: Pipeline de producción Vercel.
- `npm run start`: Ejecución del build local.
- `npm run lint`: Verificación estricta de ESLint y tipos TS.

## REGLAS CONSTITUCIONALES
- Seguir la Constitución OLYMP-IA v2.3.0.
- Registrar progresos en `memoria.md` y `task.md`.
- Documentar cambios estructurales en `docs/SAD.md`.
