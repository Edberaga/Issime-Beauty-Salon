import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage, translations } from '@/hooks/useLanguage';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
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

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const formatAnswer = (answer: string) => {
    return answer.split('\n').map((line, index) => {
      if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-4 text-muted-foreground">
            {line.substring(1).trim()}
          </li>
        );
      }
      return <p key={index} className="text-muted-foreground">{line}</p>;
    });
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold font-barlow text-primary uppercase mb-3 scroll-animate">
            {t.faq.sectionTitle}
          </h1>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 scroll-animate">
            {t.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto scroll-animate">
            {t.faq.description}
          </p>
        </div>

        {/* FAQ Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 scroll-animate">
          {/* Left Column - Questions 1-5 */}
          <div className="space-y-4">
            {t.faq.questions.slice(0, 5).map((item, index) => (
              <div key={index} className="border-b border-border pb-4">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left flex items-center justify-between py-3 hover:text-primary transition-colors"
                >
                  <span className="font-semibold text-lg text-foreground">
                    {index + 1}. {item.question}
                  </span>
                  {openQuestion === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="mt-3 pl-4 border-l-2 border-primary/20">
                    <div className="text-muted-foreground font-lato leading-relaxed">
                      {formatAnswer(item.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Questions 6-10 */}
          <div className="space-y-4">
            {t.faq.questions.slice(5, 10).map((item, index) => (
              <div key={index + 5} className="border-b border-border pb-4">
                <button
                  onClick={() => toggleQuestion(index + 5)}
                  className="w-full text-left flex items-center justify-between py-3 hover:text-primary transition-colors"
                >
                  <span className="font-semibold text-lg text-foreground">
                    {index + 6}. {item.question}
                  </span>
                  {openQuestion === index + 5 ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openQuestion === index + 5 && (
                  <div className="mt-3 pl-4 border-l-2 border-primary/20">
                    <div className="text-muted-foreground font-lato leading-relaxed">
                      {formatAnswer(item.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
