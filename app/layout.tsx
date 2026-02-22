import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AGENTX | Global Intelligence & Automation",
    description: "Advanced AI, agentic systems, and smart automation to solve complex problems.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-agentx-cyan selection:text-black`}>
                {children}
            </body>
        </html>
    );
}
