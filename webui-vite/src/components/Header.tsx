import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Only render theme toggle on client side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8 lg:px-12">
        <div className="logo-container">
          <span className="logo-text">gold2th</span>
        </div>

        <div className="nav-container flex items-center">
          <button 
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? '☀️' : '🌙')}
          </button>

          <div className="relative">
            <button 
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {isOpen && (
              <div className="absolute right-0 top-12 w-[250px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-4 z-50">
                <div className="flex flex-col gap-4">
                  <a 
                    href="/" 
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="/did-manager" 
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    DID Manager
                  </a>
                  <a 
                    href="/credential-vault" 
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Credential Vault
                  </a>
                  <a 
                    href="/wallet-connect" 
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Wallet Connect
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}