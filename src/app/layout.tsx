import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Poppins } from "next/font/google";
import GlobalWrapper from "@/providers/global/GlobalWrapper";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Hazy Forge",
  description: "Empowering digital empires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <GlobalWrapper>{children}</GlobalWrapper>
      </body>
      <Script
        src="https://rybbit.hazyforge.io/api/script.js"
        data-site-id="1"
        defer
      />
    </html>
  );
}
