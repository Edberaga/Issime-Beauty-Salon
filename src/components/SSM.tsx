import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage, translations } from '@/hooks/useLanguage';

const SSM = () => {
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

  return (
    <section id="ssm" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 justify-center items-center">
          {/* Left side - SSM Image */}
          <div className="scroll-animate">
            <div className="md:ml-24 relative md:w-[75%]">
              <img
                src="/src/assets/ssm.jpg"
                alt="SSM Certificate of Incorporation"
                className=" h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 scroll-animate md:mt-0 mt-12">
            <div className="flex items-center space-x-3 mb-4 md:mr-8">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold font-playfair text-center md:text-left">
                {t.ssm.title}
              </h3>
            </div>
            
            <h4 className="text-xl font-semibold font-barlow text-primary text-center md:text-left">
              {t.ssm.subtitle}
            </h4>
            
            <p className="text-lg text-muted-foreground font-lato leading-relaxed md:text-justify text-center">
              {t.ssm.description}
            </p>

            {/* Additional trust indicators */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm font-semibold">{t.ssm.legallyRegistered}</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm font-semibold">{t.ssm.ssmCertified}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSM;
