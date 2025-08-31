import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, translations } from '@/hooks/useLanguage';
import heroSalon from '@/assets/hero-salon.jpg';
import spaImage from '@/assets/spa-treatment.jpg';
import mudBellyImage from '@/assets/mud_belly_theraphy.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const language = useLanguage();
  const t = translations[language];

  const slides = [
    {
      image: heroSalon,
      title: t.hero.title1,
      subtitle: t.hero.subtitle1,
      description: t.hero.description1
    },
    {
      image: spaImage,
      title: t.hero.title2,
      subtitle: t.hero.subtitle2,
      description: t.hero.description2
    },
    {
      image: mudBellyImage,
      title: t.hero.title3,
      subtitle: t.hero.subtitle3,
      description: t.hero.description3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 150000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={`Issime Beauty Salon - ${slide.title}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4 md:px-8">
                  <p className="text-lg md:text-xl font-light font-lato mb-4 animate-fade-in-up">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 leading-tight animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl font-lato mb-8 max-w-2xl mx-auto animate-fade-in-up">
                    {slide.description}
                  </p>
                  <Button
                    aria-label='Make Appointment'
                    title='Make Appointment'
                    onClick={() => window.open('https://wa.link/wg0gmt', '_blank')}
                    className="btn-luxury animate-fade-in-up"
                  >
                    {t.hero.makeAppointment}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        aria-label='Previous Slide'
        title='Previous Slide'
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label='Next Slide'
        title='Next Slide'
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-5">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            title={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-115' : 'bg-white/50 scale-90'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;