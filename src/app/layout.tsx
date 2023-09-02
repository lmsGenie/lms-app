import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./globals.css";

import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lmsGenie : You Wish, We Deliver",
  description:
    "Revolutionize learning with our cutting-edge LMS system. Empower educators and engage learners with interactive content, assessments, and analytics for a personalized, effective, and efficient educational experience",
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
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
