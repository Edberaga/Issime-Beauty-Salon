import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9998]">
      <button
        onClick={scrollToTop}
        className={`bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-accent transition-all duration-300 hover:scale-110 flex items-center justify-center md:p-3 p-2 ${
          isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 md:w-5 md:h-5 w-4 h-4" />
      </button>
    </div>
  );
};

export default ScrollToTop;