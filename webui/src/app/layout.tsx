import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { SubHeader } from "@/components/sub-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "gold2th - Decentralized ID App",
  description: "A modern decentralized identity application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SubHeader />
          <main className="main-content">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}