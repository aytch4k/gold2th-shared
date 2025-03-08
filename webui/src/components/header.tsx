"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Only render theme toggle on client side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8 lg:px-12">
        <div className="logo-container">
          <span className="logo-text">gold2th</span>


        <div className="nav-container flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="mr-2"
          >
            {mounted && (theme === "dark" ? "☀️" : "🌙")}
          </Button>

          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            {isOpen && (
              <div className="absolute right-0 top-12 w-[250px] bg-background border rounded-md shadow-lg p-4 z-50">
                <div className="flex flex-col gap-4">
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
              </div>
            )}</div>
          </div>
        </div>
      </div>
    </header>
  )
}