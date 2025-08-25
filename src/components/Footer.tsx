import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { useLanguage, translations } from '@/hooks/useLanguage';
import issimeLogo from '@/assets/issime-logo.jpg';

const Footer = () => {
  const curYear = new Date().getFullYear();
  const language = useLanguage();
  const t = translations[language];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="flex item-center justify-center text-center gap-8">
          {/* Logo and Description */}
          <div className="">
            <img 
              src={issimeLogo} 
              alt="Issime Beauty Salon" 
              className="h-16 w-auto mb-3 m-auto"
            />
            <p className="text-muted-foreground mb-3">
              {t.footer.description}
            </p>
            <div className="flex justify-center item-center text-sm font-barlow text-muted-foreground">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              <span>{t.footer.servingClients}</span>
            </div>
          </div>

          {/* Quick Links 
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Our Team', id: 'team' },
                { name: 'Products', id: 'products' },
                { name: 'Location', id: 'location' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Anti-Aging Treatments</li>
              <li>Full Body Massage</li>
              <li>Natural Face Cleansing</li>
              <li>Holistic Natural Therapy</li>
              <li>Skincare Consultation</li>
              <li>Wellness Programs</li>
            </ul>
          </div>

          {/* Contact Info 
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p>285-01, Jalan Mutiara Emas 10</p>
                  <p>81100 Johor Bahru, Malaysia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+60 12-345 6789</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@issimebeauty.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-muted-foreground text-sm">
              {t.footer.copyright} {curYear} Issime Beauty Salon. All rights reserved | Powered by <b>Trendify Media</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;