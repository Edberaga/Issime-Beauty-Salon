import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import issimeLogo from '@/assets/issime-logo.jpg';
import { useLanguage } from '@/hooks/useLanguage';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { toggleLanguage } from '@/store/slices/languageSlice';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const language = useLanguage();
  const dispatch = useAppDispatch();

  useEffect(() => {
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const handleToggleLanguage = () => {
    dispatch(toggleLanguage());
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: language === 'en' ? 'Home' : '首页', id: 'home' },
    { name: language === 'en' ? 'About' : '关于我们', id: 'about' },
    { name: language === 'en' ? 'Services' : '服务项目', id: 'services' },
    { name: language === 'en' ? 'Gallery' : '画廊', id: 'gallery' },
    // { name: language === 'en' ? 'Team' : '团队', id: 'team' },
    // { name: language === 'en' ? 'Products' : '产品', id: 'products' },
    { name: language === 'en' ? 'Location' : '位置', id: 'location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9997] bg-card backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={issimeLogo} 
              alt="Issime Beauty Salon" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleToggleLanguage}
              className="w-[65px] h-10"
              title={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
            >
              <Globe className="h-5 w-5" />
              <span className='text-base font-bold uppercase'>{language}</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden w-10 h-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border z-[9996]">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;