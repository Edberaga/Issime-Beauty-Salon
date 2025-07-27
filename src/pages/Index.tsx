import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Products from '@/components/Products';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Set SEO metadata
    document.title = "Issime Beauty Salon - Premium Beauty Salon in Malaysia | Anti Aging Treatments & Full Body Massage";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Issime Beauty Salon in Johor Bahru, Malaysia offers premium anti aging treatments, full body massage, and youthful skin with natural face cleansing. Book your holistic natural therapy session today!'
      );
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 
      'Issime Beauty Salon, Beauty Salon in Malaysia, Anti aging treatments, Full Body Massage, Youthful Skin with Natural Face Cleansing, Holistic Natural Therapy, Johor Bahru Spa, Beauty Treatments Malaysia'
    );

    // Update meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', 'Issime Beauty Salon');

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Issime Beauty Salon - Premium Beauty Salon in Malaysia');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Experience luxury beauty treatments at Issime Beauty Salon in Johor Bahru. Specializing in anti-aging treatments, full body massage, and natural skincare.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Products />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
