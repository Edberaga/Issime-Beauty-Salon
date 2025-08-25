import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setScrollTopVisible } from '@/store/slices/uiSlice';

const ScrollToTop = () => {
  const dispatch = useAppDispatch();
  const { isScrollTopVisible } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        dispatch(setScrollTopVisible(true));
      } else {
        dispatch(setScrollTopVisible(false));
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-56 md:right-7 right-5 z-[9998]">
      <button
        onClick={scrollToTop}
        className={`bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-accent transition-all duration-300 hover:scale-110 flex items-center justify-center md:p-3 p-2 ${
          isScrollTopVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="md:w-5 md:h-5 w-3 h-3" />
      </button>
    </div>
  );
};

export default ScrollToTop;