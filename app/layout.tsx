import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Providers from "@/components/providers"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vikrant Sharma - AI Engineer & Web Developer",
  description:
    "Portfolio of Vikrant Sharma - AI Engineer, Web Developer, and Deep Learning Enthusiast. Showcasing projects in AI, full-stack development, and innovative solutions.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/professional/navo pfp.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/professional/navo pfp.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/professional/navo pfp.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/professional/navo pfp.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
