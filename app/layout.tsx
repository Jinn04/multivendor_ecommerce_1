//Next.js
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Barlow } from "next/font/google";

//Global.css
import "./globals.css";

// Fonts
const geistFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const barlowFont=Barlow({
  subsets:['latin'],
  weight:['500','700'],
  variable:"--font-barlow",
})


//Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: "Welcome to GoShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistFont.className} ${barlowFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
