import { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import salonExterior from '@/assets/salon-exterior.jpg';

const Location = () => {
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
    <section id="location" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className='text-s font-bold font-barlow text-primary uppercase mb-3 scroll-animate'>
            Visit Us
          </h1>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 scroll-animate">
            We are In the Heart of Johor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto scroll-animate">
            Conveniently located in Johor Bahru, Malaysia, Issime Beauty Salon is easily accessible 
            and provides a serene escape from the bustling city life.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col w-auto gap-8 mb-16">
          {/* Salon Images */}
          <div className="w-full scroll-animate">
            <div className="flex flex-col gap-4">
              <div className="flex md:flex-row flex-col pt-8 lg:space-x-4 space-x-0 lg:space-y-0 space-y-4">
                <img
                  src={salonExterior}
                  alt="Issime Beauty Salon exterior - Beauty Salon in Malaysia"
                  className="w-full h-48 object-cover rounded-none"
                />
                <img
                  src={salonExterior}
                  alt="Issime Beauty Salon exterior - Beauty Salon in Malaysia"
                  className="w-full h-48 object-cover rounded-none"
                />
              </div>
              <div>
                <img
                  src={salonExterior}
                  alt="Issime Beauty Salon storefront"
                  className="w-full h-96 object-cover rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full scroll-animate">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      285-01, Jalan Mutiara Emas 10<br />
                      81100 Johor Bahru<br />
                      Johor, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operating Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-muted-foreground">+60 12-345 6789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-muted-foreground">info@issimebeauty.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://wa.link/wg0gmt', '_blank')}
                >
                  Book Appointment via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://maps.google.com/?q=285-01,+Jalan+Mutiara+Emas+10,+81100+Johor+Bahru,+Johor,+Malaysia', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="scroll-animate">
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Find us on the Map</h3>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.434821739867!2d103.7312!3d1.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7266d1b4b6d1%3A0x8b8b8b8b8b8b8b8b!2sJalan%20Mutiara%20Emas%2010%2C%20Taman%20Mount%20Austin%2C%2081100%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1635123456789!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Issime Beauty Salon Location - Jalan Mutiara Emas 10, Johor Bahru"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;