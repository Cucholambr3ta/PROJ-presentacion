# SAD: Software Architecture Document — PROJ-presentacion

**Proyecto**: Sitio de Presentación de Título Elite
**Versión**: 1.0.0
**Estado**: Basado en OLYMP-IA V2.3.0
**Agente**: Zenith (00)

## 1. INTRODUCCIÓN
Este documento describe el diseño arquitectónico de `PROJ-presentacion`, un sitio web premium destinado a la defensa académica del usuario. El enfoque principal es la excelencia visual y la robustez técnica mediante un diseño modular y reactivo.

## 2. REPRESENTACIÓN DE LA ARQUITECTURA
Se utiliza un patrón de **Single Page Application (SPA)** reactivo, orquestado con Vite para maximizar el desempeño en tiempo de desarrollo y ejecución. La arquitectura se adhiere a la separación estricta de componentes, hooks y estilos.

## 3. METAS Y RESTRICCIONES
- **Wow Factor**: Impacto visual inmediato (60fps animations).
- **Aislamiento**: Código desacoplado siguiendo principios SOLID.
- **Plataforma**: Despliegue optimizado para Vercel.
- **Tecnologías**: React 18, Framer Motion, Vanilla CSS.

## 4. VISTA DE CASOS DE USO
- **Visualización de Contenido**: El usuario (comisión) navega por las secciones del proyecto.
- **Interacción Dinámica**: Animaciones de scroll y revelado de información.
- **Adaptabilidad**: Visualización impecable en proyectores y dispositivos móviles.

## 5. VISTA LÓGICA (C4)
- **Componentes Core**: Navbar, Hero, AbstractSection, MetodologiaSection, ResultadosSection, Footer.
- **Estado**: Gestión de estado local mediante React Hooks.

## 6. VISTA DE PROCESOS
- **Carga Inicial**: Splash screen animado y precarga de assets críticos.
- **Navegación**: Scroll-based navigation con detección de secciones activa.

## 7. VISTA DE DESPLIEGUE
- **Host**: Vercel (Edge Network).
- **Pipeline**: GitHub Actions -> Vercel Deploy.
- **Variables**: `VITE_APP_STAGE` para entornos de producción.

## 8. VISTA DE IMPLEMENTACIÓN
```text
PROJ-presentacion/
├── docs/ (SAD, PRD)
├── public/ (Assets estáticos)
├── src/
│   ├── components/ (UI Atoms & Molecules)
│   ├── hooks/ (Lógica reusable)
│   ├── styles/ (CSS Variables & Global)
│   ├── assets/ (Imágenes & Iconos)
│   └── App.jsx
├── tests/ (Vitest/Playwright)
└── scripts/ (Automatización)
```

## 9. VISTA DE DATOS
- **Estructura**: Datos estáticos inyectados vía archivos JSON para facilitar la actualización post-génesis.

## 10. TAMAÑO Y DESEMPEÑO
- **Bundle Size**: Minimización estricta de dependencias.
- **Imágenes**: Optimización en formato WebP con dimensiones 2x.

## 11. CALIDAD
- **Accesibilidad**: Cumplimiento WCAG 2.1 (Aria labels, contraste).
- **Mantenibilidad**: Código autodocumentado y tipado (JSDoc).

## 12. ADR (ARCHITECTURAL DECISION RECORDS)
- **ADR-001**: Uso de Vanilla CSS vs Tailwind para control total de la estética premium.
- **ADR-002**: Framer Motion como motor único de animaciones.

## 13. RTM (REQUIREMENTS TRACEABILITY MATRIX)
- **R01 (Wow Factor)** -> Implementado en Hero y Transiciones.
- **R02 (Responsive)** -> Layout flexible con Flexbox/Grid CSS.
