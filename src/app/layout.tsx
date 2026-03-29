import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menu Bytes — Portal de Evaluación Elite",
  description: "Portal premium para la defensa de título y exhibición de mockups del proyecto Menu Bytes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased overflow-x-hidden selection:bg-[#DAA520]/30 selection:text-[#DAA520]">
        {children}
      </body>
    </html>
  );
}
