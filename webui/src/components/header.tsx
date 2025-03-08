"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="header">
      <div className="logo-container">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Gold2th Logo"
            width={32}
            height={32}
          />
        </Link>
        <span className="logo-text">gold2th</span>
      </div>

      <div className="nav-container">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <Link 
                href="/" 
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/did-manager" 
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                DID Manager
              </Link>
              <Link 
                href="/credential-vault" 
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Credential Vault
              </Link>
              <Link 
                href="/wallet-connect" 
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Wallet Connect
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}