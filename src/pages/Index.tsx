import { useEffect } from 'react';
import { useLanguage, translations } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
// import Team from '@/components/Team';
// import Products from '@/components/Products';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const language = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Set SEO metadata based on current language
    document.title = t.seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.seo.description);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', t.seo.keywords);

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
      ogTitle.setAttribute('content', t.seo.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t.seo.description);
    }

    // Update HTML lang attribute for SEO
    document.documentElement.setAttribute('lang', language);

    // Add hreflang meta tags for multilingual SEO
    const existingHreflang = document.querySelectorAll('link[hreflang]');
    existingHreflang.forEach(link => link.remove());

    // Add hreflang tags
    const currentUrl = window.location.origin + window.location.pathname;
    const addHreflang = (lang: string, url: string) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    };

    addHreflang('en', currentUrl);
    addHreflang('zh', currentUrl);
    addHreflang('x-default', currentUrl); // Default language
  }, [language, t.seo]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        {/* <Team /> */}
        {/* <Products /> */}
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
