import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import heroSalon from '@/assets/hero-salon.jpg';
import spaImage from '@/assets/spa-treatment.jpg';
import antiAgingImage from '@/assets/anti-aging.jpg';
import massageImage from '@/assets/massage.jpg';
import productsImage from '@/assets/products.jpg';
import salonExterior from '@/assets/salon-exterior.jpg';

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      src: heroSalon,
      alt: "Luxury beauty salon interior - Issime Beauty Salon Malaysia",
      title: "Luxury Salon Interior"
    },
    {
      src: spaImage,
      alt: "Professional spa treatment room - Anti aging treatments",
      title: "Spa Treatment Room"
    },
    {
      src: antiAgingImage,
      alt: "Anti-aging facial treatment - Youthful Skin with Natural Face Cleansing",
      title: "Anti-Aging Treatments"
    },
    {
      src: massageImage,
      alt: "Full body massage therapy - Relaxation and wellness",
      title: "Massage Therapy"
    },
    {
      src: productsImage,
      alt: "Natural beauty products - Holistic natural therapy",
      title: "Beauty Products"
    },
    {
      src: salonExterior,
      alt: "Issime Beauty Salon exterior - Beauty Salon in Malaysia",
      title: "Salon Exterior"
    }
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-animate">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto scroll-animate">
            Take a visual tour of our beautiful salon space, treatment rooms, and the serene 
            environment we've created for your ultimate relaxation and beauty experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="scroll-animate cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">{galleryImages[selectedImage].title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;