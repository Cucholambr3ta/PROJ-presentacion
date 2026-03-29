# PRD: PROJ-presentacion — Portal de Evaluación Elite

**Versión**: 2.0.0 (Next.js Refactor)
**Estado**: Draft
**Agente**: Zenith (00)

## 1. RESUMEN EJECUTIVO
`PROJ-presentacion` es un portal web de alto impacto desarrollado en **Next.js 14+** y **TypeScript**. Su misión es actuar como el punto central de evaluación para la defensa de título del usuario, ofreciendo acceso directo a los mockups del proyecto y a la presentación oficial.

## 2. OBJETIVOS ESTRATÉGICOS
- **Portal Unificado**: Centralizar el acceso a los entregables (Mockups + Presentación).
- **Robustez Técnica**: Demostrar dominio de tecnologías modernas (TypeScript, App Router, SSR/SSG).
- **Narrativa Dual**: Proporcionar dos experiencias distintas pero cohesivas en un solo dominio.

## 3. REQUISITOS FUNCIONALES (MoSCoW)

### 3.1 MUST (Obligatorio)
- [ ] **Home (/)**: Portal de entrada con navegación clara hacia las dos áreas.
- [ ] **Mockups (/mockups)**: Visor de archivos HTML navegables mediante contenedores optimizados.
- [ ] **Presentación (/presentacion)**: Estructura híbrida de One-pager con diapositivas internas para 3 oradores.
- [ ] **Vercel Deploy**: Configuración lista para despliegue inmediato.

### 3.2 SHOULD (Deseable)
- [ ] **Custom iFrame UI**: Interfaz de control para el visor de mockups (Desktop/Mobile toggle).
- [ ] **Hybrid Scroll Transitions**: Animaciones fluidas al cambiar entre "partes" de la presentación.

## 4. REQUISITOS NO FUNCIONALES
- **Tecnología**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Estética**: Wow Factor (Dark Mode Premium, Glassmorphism).
- **Performance**: Lighthouse score > 95.

## 5. ESTRUCTURA DE RUTAS
- `/`: Bienvenida y selección de destino.
- `/mockups`: Galería interactiva de prototipos HTML.
- `/presentacion`: Hilo conductor de la defensa de título.
