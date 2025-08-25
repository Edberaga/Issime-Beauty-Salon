import { useEffect, useRef } from 'react';
import { Sparkles, Heart, Award } from 'lucide-react';
import { useLanguage, translations } from '@/hooks/useLanguage';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className='text-s font-bold font-barlow text-primary uppercase mb-3 scroll-animate'>
            {t.about.sectionTitle}
          </h1>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 scroll-animate">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto scroll-animate">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center scroll-animate">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-playfair mb-4">{t.about.premiumQuality}</h3>
            <p className="text-muted-foreground font-lato">
              {t.about.premiumDesc}
            </p>
          </div>

          <div className="text-center scroll-animate">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-playfair mb-4">{t.about.holisticApproach}</h3>
            <p className="text-muted-foreground font-lato">
              {t.about.holisticDesc}
            </p>
          </div>

          <div className="text-center scroll-animate">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-playfair mb-4">{t.about.expertTeam}</h3>
            <p className="text-muted-foreground font-lato">
              {t.about.expertDesc}
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 scroll-animate">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-playfair mb-6">{t.about.ourMission}</h3>
              <p className="text-lg text-muted-foreground font-lato mb-6">
                {t.about.missionDesc1}
              </p>
              <p className="text-lg text-muted-foreground font-lato">
                {t.about.missionDesc2}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">5+</span>
                </div>
                <div>
                  <h4 className="font-semibold">{t.about.yearsExcellence}</h4>
                  <p className="text-sm text-muted-foreground">{t.about.servingClients}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">500+</span>
                </div>
                <div>
                  <h4 className="font-semibold">{t.about.happyClients}</h4>
                  <p className="text-sm text-muted-foreground">{t.about.satisfiedCustomers}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">15+</span>
                </div>
                <div>
                  <h4 className="font-semibold">{t.about.servicesOffered}</h4>
                  <p className="text-sm text-muted-foreground">{t.about.comprehensiveTreatments}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;