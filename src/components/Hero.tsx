import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSalon from '@/assets/hero-salon.jpg';
import spaImage from '@/assets/spa-treatment.jpg';
import antiAgingImage from '@/assets/anti-aging.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroSalon,
      title: "Issime Beauty Salon",
      subtitle: "Where Elegance Meets Natural Beauty",
      description: "As a trusted beauty salon in Malaysia, Issime offers luxurious treatments designed to enhance your natural glow and relax your senses in style."
    },
    {
      image: spaImage,
      title: "Spa & Full Body Massage",
      subtitle: "Relax, Rejuvenate, Recharge",
      description: "Indulge in calming spa rituals and our signature full body massage, tailored to melt away stress and leave you feeling deeply restored."
    },
    {
      image: antiAgingImage,
      title: "Anti-Aging Treatments",
      subtitle: "Naturally Youthful, Radiantly You",
      description: "Advanced skincare treatments for youthful-looking skin. Experience our anti aging treatments for youthful skin that glows from within."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <p className="text-lg md:text-xl font-light font-lato mb-4 animate-fade-in-up">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 leading-tight animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl font-lato mb-8 max-w-2xl mx-auto animate-fade-in-up">
                    {slide.description}
                  </p>
                  <Button
                    onClick={() => scrollToSection('about')}
                    className="btn-luxury animate-fade-in-up"
                  >
                    Make Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;