import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

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
        <Navbar />
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
