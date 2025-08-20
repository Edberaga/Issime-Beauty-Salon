import { useEffect, useRef } from 'react';
import { ShoppingBag, Leaf, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productsImage from '@/assets/products.jpg';

const Products = () => {
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

  const products = [
    {
      name: "Anti-Aging Serum",
      description: "Premium anti-aging serum with natural ingredients to reduce wrinkles and promote youthful skin.",
      price: "RM 189",
      image: productsImage,
      features: ["Collagen Boost", "Wrinkle Reduction", "Natural Ingredients", "Dermatologist Tested"],
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Organic Face Cleanser",
      description: "Gentle organic cleanser perfect for daily use, suitable for all skin types and sensitive skin.",
      price: "RM 89",
      image: productsImage,
      features: ["100% Organic", "All Skin Types", "Deep Cleansing", "pH Balanced"],
      icon: <Leaf className="w-6 h-6" />
    },
    {
      name: "Hydrating Moisturizer",
      description: "Luxurious moisturizer that provides deep hydration and leaves skin soft, smooth, and radiant.",
      price: "RM 129",
      image: productsImage,
      features: ["24h Hydration", "Anti-Aging", "SPF Protection", "Non-Greasy"],
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Revitalizing Face Mask",
      description: "Weekly treatment mask that revitalizes and rejuvenates skin for a healthy, glowing complexion.",
      price: "RM 79",
      image: productsImage,
      features: ["Weekly Treatment", "Natural Extracts", "Instant Glow", "Pore Minimizing"],
      icon: <ShoppingBag className="w-6 h-6" />
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className='text-s font-bold font-barlow text-primary uppercase mb-3 scroll-animate'>
            Our Products
          </h1>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 scroll-animate">
            For Lasting Glow & Youthful Skin
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto scroll-animate">
            Discover our carefully curated collection of premium skincare products. Each product is selected 
            for its quality, effectiveness, and natural ingredients to complement your beauty treatments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="scroll-animate">
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} - Issime Beauty Salon skincare products`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-full">
                    {product.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full font-semibold">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6 flex-1">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full btn-luxury"
                    onClick={() => window.open('https://wa.link/wg0gmt', '_blank')}
                  >
                    Inquire Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center scroll-animate">
          <h3 className="text-3xl font-bold mb-6">
            Why Choose Our Products?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Natural Ingredients</h4>
              <p className="text-sm text-muted-foreground">
                All our products are made with carefully selected natural and organic ingredients.
              </p>
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Proven Results</h4>
              <p className="text-sm text-muted-foreground">
                Each product is tested and proven to deliver visible results for healthier, more beautiful skin.
              </p>
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Suitable for All</h4>
              <p className="text-sm text-muted-foreground">
                Our products are formulated to be suitable for all skin types, including sensitive skin.
              </p>
            </div>
          </div>
          <Button 
            className="btn-luxury lg:px-10 px-6 lg:py-8 py-4 lg:text-lg"
            onClick={() => window.open('https://wa.link/wg0gmt', '_blank')}
          >
            Contact Us for Product Information
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;