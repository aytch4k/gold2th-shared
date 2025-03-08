import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Sun, Moon } from 'lucide-react'

interface NavbarProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  
  // Function to check if a link is active
  const isActive = (path: string) => {
    // Remove leading slash for comparison
    const currentPath = location.pathname.toLowerCase().replace(/^\//, '')
    const linkPath = path.toLowerCase().replace(/^\//, '')
    return currentPath === linkPath
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glass background with blur effect */}
      <div className="glass-card border-b border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and main navigation */}
            <div className="flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-xl font-bold text-foreground hover:text-primary/90 transition-colors"
              >
                Autheo
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/DidManager"
                  className={`nav-link ${isActive('DidManager') ? 'active-nav-link' : ''}`}
                >
                  DId Manager
                </Link>
                <Link
                  to="/CredentialVault"
                  className={`nav-link ${isActive('CredentialVault') ? 'active-nav-link' : ''}`}
                >
                  Credential Vault
                </Link>
                <Link
                  to="/ConsentManagement"
                  className={`nav-link ${isActive('ConsentManagement') ? 'active-nav-link' : ''}`}
                >
                  Consent Management
                </Link>
                <Link
                  to="/Security"
                  className={`nav-link ${isActive('Security') ? 'active-nav-link' : ''}`}
                >
                  Security
                </Link>
                <Link
                  to="/Settings"
                  className={`nav-link ${isActive('Settings') ? 'active-nav-link' : ''}`}
                >
                  Settings
                </Link>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>

              {/* Connect Wallet button */}
              <Link
                to="/connect-wallet"
                className="glass-button bg-primary/20 hover:bg-primary/30"
              >
                Connect Wallet
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-in">
          <div className="glass-card mt-16 border-b border-white/10 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/DidManager"
                  className={`nav-link py-2 ${isActive('DidManager') ? 'active-nav-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Did Manager
                </Link>
                <Link
                  to="/CredentialVault"
                  className={`nav-link py-2 ${isActive('CredentialVault') ? 'active-nav-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Credential Vault
                </Link>
                <Link
                  to="/ConsentManagement"
                  className={`nav-link py-2 ${isActive('ConsentManagement') ? 'active-nav-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Consent Management
                </Link>
                <Link
                  to="Security"
                  className={`nav-link py-2 ${isActive('Security') ? 'active-nav-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Security
                </Link>
                <Link
                  to="/g2-endpoint-defender"
                  className={`nav-link py-2 ${isActive('endpoint-defender') ? 'active-glass-button' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Endpoint Defender (QESD)
                </Link>
                <Link
                  to="/g2-secure-tunnel"
                  className={`nav-link py-2 ${isActive('secure-tunnel') ? 'active-glass-button' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Secure Tunnel (VPN)
                </Link>
                <Link
                  to="/g2-Secure Messenger"
                  className={`nav-link py-2 ${isActive('secure-messenger') ? 'active-glass-button' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Secure Messengerr
                </Link>
                <Link
                  to="/Settings"
                  className={`nav-link py-2 ${isActive('Settings') ? 'active-nav-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </nav>
  )
}

export default Navbar