import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Jay's Kitchen | Home Of Scrumptious Cusines",
  description: "Your comfort food delivered hot and fresh.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo-black.png?v=2",
      href: "/logo-black.png?v=2",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo-white.png?v=2",
      href: "/logo-white.png?v=2",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo-black.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-black.png?v=2" />
      </head>
      <body className="antialiased bg-[#050505] text-[#FAFAFA] selection:bg-brand-gold/30">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}