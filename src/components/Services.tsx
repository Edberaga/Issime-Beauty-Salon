import { useEffect, useRef } from 'react';
import { Clock, Star, Leaf, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, translations } from '@/hooks/useLanguage';
import antiAgingImage from '@/assets/anti_aging.jpeg';
import massageImage from '@/assets/full_body_message.jpeg';
import spaImage from '@/assets/face_cleansing.webp';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const language = useLanguage();
  const t = translations[language];

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

  const services = [
    {
      title: t.services.antiAging,
      description: t.services.antiAgingDesc,
      image: antiAgingImage,
      duration: "60-90 mins",
      features: ["Collagen Boost", "Wrinkle Reduction", "Skin Tightening", "Hydration Therapy"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: t.services.fullBodyMassage,
      description: t.services.massageDesc,
      image: massageImage,
      duration: "60-90 mins",
      features: ["Deep Tissue", "Swedish Massage", "Hot Stone", "Aromatherapy"],
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: t.services.faceCleansing,
      description: t.services.cleansingDesc,
      image: spaImage,
      duration: "45-60 mins",
      features: ["Deep Cleansing", "Exfoliation", "Moisturizing", "Natural Products"],
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className='text-s font-bold font-barlow text-primary uppercase mb-3 scroll-animate'>
            {t.services.sectionTitle}
          </h1>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 scroll-animate">
            {t.services.title}
          </h2>
          <p className="text-lg text-foreground font-lato max-w-3xl mx-auto scroll-animate">
            {t.services.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="scroll-animate">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Issime Beauty Salon Malaysia`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold font-playfair">{service.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-lato mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full btn-luxury mt-auto">
                    {t.services.bookNow}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-animate">
          <h3 className="text-2xl font-bold font-playfair mb-4">
            Ready to Experience Our Services?
          </h3>
          <p className="text-foreground font-lato mb-8">
            Contact us today to schedule your appointment and begin your journey to beauty and wellness.
          </p>
          <Button 
            className="btn-luxury px-10 py-8 text-lg"
            onClick={() => window.open('https://wa.link/wg0gmt', '_blank')}
          >
            Contact Us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;