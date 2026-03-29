"use client";

import React from "react";
import {
  Sparkles,
  Presentation,
  TrendingUp,
  List,
  CheckCircle,
  Globe,
  Award
} from "lucide-react";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

interface SectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights?: string[];
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  icon,
  highlights = [],
}) => {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0" />

      {/* Glassmorphism Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16">
          {/* Icon Container */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#DAA520]/20 to-[#DAA520]/10 mb-6">
            <div className="text-[#DAA520] flex items-center justify-center">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg text-zinc-300 text-center mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Highlights List */}
          {highlights.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Puntos Destacados
              </h3>
              <ul className="space-y-3 text-zinc-200">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex h-3 w-3 items-center justify-center bg-[#DAA520]/20 rounded-full mt-1">
                      <Sparkles className="h-2 w-2 text-[#DAA520]" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(218,165,32,0.05)_70%)] pointer-events-none" />
      </div>
    </section>
  );
};

const PresentationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80)] bg-cover bg-center opacity-10"
          style={{
            maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-16 md:py-20 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-[#DAA520] bg-clip-text text-transparent">
            Presentación de Título
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Defensa del Proyecto de Graduación
          </p>
        </div>

        {/* Sections */}
        <Section
          title="Introducción y Contexto"
          description="Exploramos el origen del problema, su relevancia académica y profesional, y establecemos los objetivos que guiaron nuestro trabajo de investigación y desarrollo."
          icon={<Globe className="w-8 h-8" />}
          highlights=[
            "Problema identificado en el ámbito específico de estudio",
            "Relevancia para el desarrollo profesional y académico",
            "Objetivos claros y medibles del proyecto"
          ]
        />

        <Section
          title="Metodología y Enfoque"
          description="Detallamos las metodologías empleadas, las herramientas tecnológicas utilizadas y el proceso sistemático seguido para abordar el problema planteado."
          icon={<List className="w-8 h-8" />}
          highlights=[
            "Enfoque mixto: teórico y práctico",
            "Tecnologías seleccionadas según criterios de idoneidad",
            "Metodología iterativa con retroalimentación continua"
          ]
        />

        <Section
          title="Solución Propuesta"
          description="Presentamos nuestra solución innovadora, describiendo sus componentes principales, funcionalidades clave y cómo responde efectivamente al problema inicial."
          icon={<TrendingUp className="w-8 h-8" />}
          highlights=[
            "Arquitectura modular y escalable",
            "Funcionalidades centradas en el usuario",
            "Integración de mejores prácticas de la industria"
          ]
        />

        <Section
          title="Resultados y Logros"
          description="Analizamos los resultados obtenidos mediante pruebas rigurosas, validación con casos de uso reales y evaluación frente a los objetivos iniciales establecidos."
          icon={<Award className="w-8 h-8" />}
          highlights=[
            "Cumplimiento de todos los objetivos planteados",
            "Validación exitosa en entornos de prueba",
            "Métricas de rendimiento superiores a las esperadas"
          ]
        />

        <Section
          title="Conclusiones y Trabajo Futuro"
          description="Reflexionamos sobre los aprendizajes obtenidos, las limitaciones identificadas y proponemos líneas de trabajo futuro para continuar evolucionando la solución."
          icon={<CheckCircle className="w-8 h-8" />}
          highlights=[
            "Conclusiones sólidas basadas en evidencia empírica",
            "Identificación de oportunidades de mejora",
            "Plan de trabajo futuro definido y priorizado"
          ]
        />

        {/* Call to Action */}
        <div className="text-center py-20 md:py-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¡Gracias por su atención!
          </h3>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Estamos disponibles para preguntas y discusión adicional sobre nuestro trabajo.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-1/10 w-32 h-32 bg-[#DAA520]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-48 h-48 bg-[#DAA520]/5 rounded-full blur-[96px] pointer-events-none" />
    </div>
  );
};

export default PresentationPage;