import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay's Kitchen | Home Of Scrumptious Cusines",
  description: "Your comfort food delivered hot and fresh.",
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