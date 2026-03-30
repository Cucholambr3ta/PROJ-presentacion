# Guion de Presentación: Menú Bytes (7 Minutos)

Este documento contiene el guion sugerido para los integrantes (José, Alejandro, Héctor) durante la defensa del proyecto. Está estructurado para fluir con los diagramas de la web.

---

## PARTE 1: Visión & Oportunidad (2 Minutos)

### Bloque 1: El Problema (Árbol de Problemas)
- **Mensaje**: "Hoy, el restaurante tradicional está atrapado en el papel. El problema central es la **ineficiencia en la gestión de comandas**. Como ven en las raíces del árbol, dependemos de un flujo asíncrono y costoso, lo que genera insatisfacción en el cliente y pérdida de dinero por errores en caja."

### Bloque 2: Situación As-Is (Diagrama de Latencias)
- **Mensaje**: "Nuestro análisis detectó que un pedido tarda hasta 35 minutos en ser servido debido a 9 pasos manuales. Menú Bytes llega para eliminar el traslado físico del garzón a la cocina, digitalizando el pedido desde la mesa."

### Bloque 3: Objetivos
- **Mensaje**: "Buscamos empoderar a la PYME. El objetivo es una plataforma SaaS multi-tenant: una sola base tecnológica que atiende a múltiples restaurantes con aislamiento total y rapidez de respuesta."

### Bloque 4: Alcance y Arquitectura
- **Mensaje**: "Este no es un proyecto estático. Nuestra arquitectura PaaS utiliza lo mejor de la nube moderna (Vercel y Supabase) para garantizar que el sistema siempre esté disponible y escale sin costos de infraestructura inicial."

---

## PARTE 2: Ingeniería de Software (3 Minutos)

### Bloque 1: Stack Tecnológico (Cloud Strategy)
- **Mensaje**: "Elegimos **Next.js 14** para el panel web y **React Native/Expo** para el móvil. ¿Por qué? Porque necesitamos compartir lógica de negocio y asegurar que el garzón tenga una app nativa rápida mientras el dueño revisa sus ventas desde cualquier navegador."

### Bloque 2: Base de Datos y Seguridad (RLS)
- **Mensaje**: "La seguridad es innegociable. Usamos **Row Level Security** en PostgreSQL. Esto significa que los datos de 'Restaurante A' nunca, bajo ninguna circunstancia, serán visibles para el 'Restaurante B', aunque compartan la misma base de datos."

### Bloque 3: Realtime WebSockets
- **Mensaje**: "La magia ocurre en la cocina. Gracias a los WebSockets de **Supabase Realtime**, la comanda aparece en la pantalla del chef en menos de 200 milisegundos. Sin recargar, sin esperas."

### Bloque 4: Monorepo & Calidad (Turborepo)
- **Mensaje**: "Para trabajar de forma profesional, implementamos un **Monorepo con Turborepo**. Esto nos permite testear todo el ecosistema (Web, Móvil y API) de forma simultánea, garantizando que cada pieza del engranaje funcione antes de subir a producción."

---

## PARTE 3: Metodología & Planificación (2 Minutos)

### Bloque 1: Marco de Trabajo (SCRUM Adaptado)
- **Mensaje**: "Trabajamos en ciclos iterativos de 2 semanas. Esto nos permitió pivotar rápido cuando descubrimos que el flujo de caja era el cuello de botella de los usuarios."

### Bloque 2: Control de Calidad (QA)
- **Mensaje**: "No entregamos nada sin validar. Aplicamos TDD (Test Driven Development) en los módulos críticos de facturación para asegurar que el dinero de nuestros clientes siempre esté bien cuadrado."

### Bloque 3: Roadmap (16-18 Semanas)
- **Mensaje**: "Estamos en la fase final. Los próximos pasos incluyen la integración de pagos y el despliegue a una red masiva de locales en la región."

---
*Fin de la Presentación. ¿Dudas?*
