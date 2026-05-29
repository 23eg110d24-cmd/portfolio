import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harisha-gunti.vercel.app"),
  title: {
    default: "Harisha Gunti | Computer Science Portfolio",
    template: "%s | Harisha Gunti"
  },
  description:
    "Portfolio of Harisha Gunti, a Computer Science undergraduate focused on machine learning, AI, and full-stack development.",
  keywords: [
    "Harisha Gunti",
    "Computer Science Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "React",
    "Spring Boot",
    "Portfolio"
  ],
  authors: [{ name: "Harisha Gunti" }],
  creator: "Harisha Gunti",
  openGraph: {
    title: "Harisha Gunti | Computer Science Portfolio",
    description:
      "Machine learning enthusiast and full-stack developer building practical, polished engineering projects.",
    url: "https://harisha-gunti.vercel.app",
    siteName: "Harisha Gunti Portfolio",
    images: [
      {
        url: "/harisha-gunti.jpeg",
        width: 1280,
        height: 720,
        alt: "Harisha Gunti"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harisha Gunti | Computer Science Portfolio",
    description:
      "Computer Science undergraduate focused on ML, AI, and full-stack development.",
    images: ["/harisha-gunti.jpeg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
