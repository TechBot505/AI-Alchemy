import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import Header from "@/components/custom/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Alchemy",
  description: "Chat with your Documents using AI Alchemy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Providers>
          <Header />
          {children}
          </Providers>
      </body>
    </html>
  );
}
