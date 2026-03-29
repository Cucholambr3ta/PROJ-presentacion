# SAD: Software Architecture Document — PROJ-presentacion Next.js

**Proyecto**: Portal de Evaluación Elite (Next.js Refactor)
**Versión**: 2.0.0
**Estado**: Basado en OLYMP-IA V2.3.0
**Agente**: Zenith (00)

## 1. INTRODUCCIÓN
Este documento describe la arquitectura de `PROJ-presentacion`, refactorizada a **Next.js 14+** para proporcionar un portal robusto y performante. El sistema centraliza la navegación entre mockups interactivos y la presentación de defensa de título.

## 2. REPRESENTACIÓN DE LA ARQUITECTURA
Se utiliza el **App Router** de Next.js, aprovechando **React Server Components (RSC)** para la carga eficiente de contenido estático y **Client Components** para las animaciones complejas (Framer Motion). La orquestación se realiza mediante TypeScript para garantizar la integridad de los datos.

## 3. METAS Y RESTRICCIONES
- **Wow Factor**: Animaciones de alto impacto visual.
- **Aislamiento**: Uso de Clean Architecture en `/src` (components, hooks, lib).
- **Framework**: Next.js (Turbo) para despliegue optimizado en Vercel.
- **Tipado**: 100% de cobertura en interfaces de datos con TypeScript.

## 4. VISTA DE CASOS DE USO
- **Interacción con Mockups**: El profesor navega por los archivos HTML embebidos.
- **Presentación por Oradores**: Soporte para cambio de contexto entre 3 expositores.
- **Resiliencia**: Navegación fluida y manejo de rutas no encontradas.

## 5. VISTA LÓGICA (C4)
- **Rutas**: Home, Mockups, Presentacion.
- **Componentes**: UI (Tailwind CSS), Motion (Framer), Viewer (iFrame).

## 6. VISTA DE PROCESOS
- **Pre-rendering**: Generación estática (SSG) de la página de inicio y navegación.
- **Client Transitions**: Animaciones de entrada sincronizadas mediante el scroll del usuario.

## 7. VISTA DE DESPLIEGUE
- **Plataforma**: Vercel.
- **Integración**: GitHub Actions CI/CD.
- **Assets**: Uso de la red de entrega de contenido (CDN) de Vercel.

## 8. VISTA DE IMPLEMENTACIÓN
```text
PROJ-presentacion/
├── docs/ (SAD, PRD)
├── public/ (Mockups HTML, Assets)
├── src/
│   ├── app/ (Rutas y Layouts)
│   ├── components/ (UI Molecules)
│   ├── lib/ (Utilidades y Tipos)
│   └── styles/ (Configuración Tailwind)
├── tasks.yaml (Roadmap)
└── CLAUDE.md (Guía de desarrollo)
```

## 9. VISTA DE DATOS
- **Models**: Definición de interfaces para Secciones, Mockups y Diapositivas.

## 10. TAMAÑO Y DESEMPEÑO
- **Optimization**: Uso de `next/image` y split dinámico de chunks de animación.
- **Performance**: Optimización de iFrames mediante carga diferida (`loading="lazy"`).

## 11. CALIDAD
- **Tipado**: Eliminación de `any` en todo el proyecto.
- **Lints**: Configuración estricta de ESLint para Next.js.

## 12. ADR (ARCHITECTURAL DECISION RECORDS)
- **ADR-003**: Migración a Next.js para mejorar el SEO (evaluación del link) y el despliegue en Vercel.
- **ADR-004**: Uso de Tailwind CSS para agilizar la creación de componentes premium interactivos.

## 13. RTM (REQUIREMENTS TRACEABILITY MATRIX)
- **R03 (Portal Dual)** -> Implementado mediante App Router.
- **R04 (Mockups HTML)** -> Integración en `/public` y visor dinámico.
