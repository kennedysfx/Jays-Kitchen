import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay's Kitchen | Home Of Scrumptious Cusines",
  description: "Your comfort food delivered hot and fresh.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo-black.png",
      href: "/logo-black.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo-white.png",
      href: "/logo-white.png",
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
      <body className="antialiased bg-[#050505] text-[#FAFAFA] selection:bg-brand-gold/30">
        {children}
      </body>
    </html>
  );
}