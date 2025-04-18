import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { MainNav } from "@/components/main-nav";
import { AnimatedBackground } from '@/components/animated-background';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 TaskToken Platform",
  description: "Decentralized Multi-Chain Gig Economy Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={inter.className}>
          <AnimatedBackground />
          <header className="fixed top-0 w-full  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4">
              <MainNav />
            </div>
          </header>
          {children}
        </body>
      </Providers>
    </html>
  );
}
