import "./globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prompt Filler",
  description:
    "Simplify the process of generating and completing prompts for ChatGPT, save time and effort in crafting engaging and effective prompts for various purposes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
