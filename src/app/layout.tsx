import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Menu Bites | Portal de Presentación",
  description: "Ecosistema digital de gestión operativa de restaurantes en tiempo real.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;1,9..144,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#030712] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
