import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useLanguage, translations } from '@/hooks/useLanguage';
import reel1 from '@/assets/issime_beauty_reels_1.jpg';
import reel2 from '@/assets/issime_beauty_reels_2.png';
import reel3 from '@/assets/issime_beauty_reels_3.jpg';
import reel4 from '@/assets/issime_beauty_reels_4.jpg';
import reel5 from '@/assets/issime_beauty_reels_5.jpg';
import reel6 from '@/assets/issime_beauty_reels_6.jpg';
import reel7 from '@/assets/issime_beauty_reels_7.jpg';
import reel8 from '@/assets/issime_beauty_reels_8.jpg';
import { Button } from './ui/button';


const Gallery = () => {
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

  const galleryImages = [
    {
      src: reel1,
      alt: "Issime Beauty Salon",
      title: "You are beautiful! Very beauty! Because you have come Issime!",
      desc: "Our Korean-style hot stone therapy can help you. We are also currently offering a complimentary lymphatic detox session! Leave a message now to book your treatment or contact us.",
      url: "https://www.facebook.com/reel/1863289187448223"
    },
    {
      src: reel2,
      alt: "Legs Sore Treatment",
      title: "Legs Sore for Standing all day.",
      desc: "My legs used to swell and hurt after work, but now they feel so much better! The therapist's technique is extremely professional;",
      url: "https://www.facebook.com/reel/1907211520092123"
    },
    {
      src: reel3,
      alt: "Stone Leg Treatment",
      title: "Hot Stone Leg Treatment.",
      desc: "My stubby legs have turned into long legs 😱 Later I discovered it was due to accumulated toxins causing #leg swelling! Fortunately, I went to Issime Beauty to experience their Hot Stone Leg Treatment.",
      url: "https://www.facebook.com/reel/953074759699525/?s=fb_shorts_profile&stack_idx=0"
    },
    {
      src: reel4,
      alt: "Head Massage therapy",
      title: "Korean hot stone therapy!",
      desc: "If you are facing insomnia, migraines, eye fatigue, or poor complexion 🤫 you definitely need to experience Korean hot stone therapy! It helps eliminate toxins from the head, clear blockages in the head, and instantly liberate your head, making the entire head more relaxed 😘",
      url: "https://www.facebook.com/reel/387559177424419/?s=fb_shorts_profile&stack_idx=0"
    },
    {
      src: reel5,
      alt: "Issimei Beauty Salon",
      title: "The looks of Issimei Beauty Salon",
      desc: "When care becomes the norm, beauty also becomes the norm 🫶🏻",
      url: "https://www.facebook.com/reel/3543028002644998/?s=fb_shorts_profile&stack_idx=0"
    },
    {
      src: reel6,
      alt: "Full Body Message Theraphy",
      title: "Issime Beauty Message Theraphy",
      desc: "Don't hold in your anger anymore 😫 This treatment can actually improve bloating and constipation issues, say goodbye to discomfort!",
      url: "https://www.facebook.com/Issime.beauty/videos/820396712949244/"
    },
    {
      src: reel7,
      alt: "Anti Aging Treatment",
      title: "Anti Aging Treatment",
      desc: "Many women use Korean-style hot stone acupressure to drive away humidity, coldness, and relieve backaches and soreness, and it also has the effect of #anti-aging and #reversingaging",
      url: "https://www.facebook.com/Issime.beauty/videos/1112662229733338"
    },
    {
      src: reel8,
      alt: "Full Body Treatment",
      title: "Full Body Treatment",
      desc: "#Insomnia and headache❓ Done in 1 hour ✅ #Turned those calf muscles into #longlegs❓ Done in 1 hour ✅ #Hand pain, #numbness, #tightness❓ Done in 1 hour ✅ You heard it right😱 We will show you results in just 1 hour ✅",
      url: "https://www.facebook.com/Issime.beauty/videos/436154132700374"
    },
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto lg:px-[8%] md:px-[8%] px-5">
        <div className="text-center mb-16">
          <h1 className='text-s font-bold font-barlow text-primary uppercase mb-3 scroll-animate'>
            {t.gallery.sectionTitle}
          </h1>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 scroll-animate">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto scroll-animate">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="scroll-animate cursor-pointer group relative overflow-hidden rounded-xl aspect-square"
              onClick={() => window.open(image.url)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 aspect-square"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center px-5">
                    <h3 className="py-2 text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm text-justify">{image.desc}</p>
                    <Button
                      variant='outline'
                      size='icon'
                      className='w-8 h-8 md:w-10 md:h-10 my-1 md:my-2 rounded-full'
                      onClick={() => window.open(image.url)}
                    >
                      <FaRegCirclePlay className="h-3 w-3 md:h-5 md:w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;