import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../styles/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Caring Hearts | Supportive Living & Mental Health Care for Men",
  description:
    "Caring Hearts Supportive Service provides a safe, nurturing, and structured home in Tampa, FL for men living with mental health challenges. 24/7 compassionate care, individualized support, and community belonging.",
  keywords: [
    "caring hearts",
    "supportive living",
    "mental health home",
    "assisted living for men",
    "tampa mental health care",
    "supportive housing",
    "compassionate mental healthcare",
  ],
  authors: [{ name: "Caring Hearts Supportive Service" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-[#FCFBF7] text-[#1E271B] selection:bg-[#A7B79C] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
