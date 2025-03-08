import { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import './index.css';

function App() {
  // Copy the logo from the Next.js project to the public folder
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // This is just to simulate the logo loading
    // In a real app, you'd have the logo in the public folder
    setLogoLoaded(true);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <SubHeader />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex justify-center">
              <div className="relative w-full max-w-full h-auto">
                {logoLoaded ? (
                  <img
                    src="/logo.png"
                    alt="Gold2th Logo"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: 'calc(100vh - 10rem)', width: 'auto', height: 'auto' }}
                  />
                ) : (
                  <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
