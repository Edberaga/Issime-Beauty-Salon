import { useEffect, useRef } from 'react';
import { Sparkles, Heart, Award } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 scroll-animate">
            About Issime Beauty Salon
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto scroll-animate">
            Located in the heart of Johor Bahru, Malaysia, Issime Beauty Salon is your premier destination 
            for holistic natural therapy and luxury beauty treatments. We combine traditional wellness 
            practices with modern techniques to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center scroll-animate">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-playfair mb-4">Premium Quality</h3>
            <p className="text-muted-foreground font-lato">
              We use only the finest products and state-of-the-art equipment to ensure 
              the highest quality treatments for our valued clients.
            </p>
          </div>

          <div className="text-center scroll-animate">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-playfair mb-4">Holistic Approach</h3>
            <p className="text-muted-foreground font-lato">
              Our holistic natural therapy approach focuses on your overall well-being, 
              combining beauty treatments with relaxation and rejuvenation.
            </p>
          </div>

          <div className="text-center scroll-animate">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-playfair mb-4">Expert Team</h3>
            <p className="text-muted-foreground font-lato">
              Our certified therapists and beauticians are passionate professionals 
              dedicated to providing personalized care and exceptional service.
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 scroll-animate">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-playfair mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground font-lato mb-6">
                At Issime Beauty Salon, we believe that true beauty comes from within. Our mission is to 
                help you discover and enhance your natural radiance through our comprehensive range of 
                beauty and wellness services.
              </p>
              <p className="text-lg text-muted-foreground font-lato">
                We are committed to providing a serene sanctuary where you can escape the stresses of 
                daily life and indulge in luxurious treatments that restore both your body and spirit.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">5+</span>
                </div>
                <div>
                  <h4 className="font-semibold">Years of Excellence</h4>
                  <p className="text-sm text-muted-foreground">Serving clients in Malaysia</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">500+</span>
                </div>
                <div>
                  <h4 className="font-semibold">Happy Clients</h4>
                  <p className="text-sm text-muted-foreground">Satisfied customers</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">15+</span>
                </div>
                <div>
                  <h4 className="font-semibold">Services Offered</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive beauty treatments</p>
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