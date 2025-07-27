import { useEffect, useRef } from 'react';
import { Star, Award, Heart } from 'lucide-react';
import teamMember from '@/assets/team-member.jpg';

const Team = () => {
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

  const teamMembers = [
    {
      name: "Sarah Chen",
      position: "Senior Beauty Therapist",
      speciality: "Anti-Aging Treatments",
      experience: "8+ years",
      image: teamMember,
      description: "Sarah specializes in advanced anti-aging treatments and has helped hundreds of clients.",
      certifications: ["Certified Aesthetician", "Anti-Aging Specialist", "Holistic Therapy Expert"]
    },
    {
      name: "Maya Rahman",
      position: "Massage Therapist",
      speciality: "Full Body Massage",
      experience: "6+ years",
      image: teamMember,
      description: "Maya is our expert in therapeutic massage techniques, helping clients achieve deep relaxation and wellness.",
      certifications: ["Licensed Massage Therapist", "Swedish Massage", "Deep Tissue Specialist"]
    },
    {
      name: "Lisa Wong",
      position: "Facial Specialist",
      speciality: "Natural Face Cleansing",
      experience: "5+ years",
      image: teamMember,
      description: "Lisa focuses on natural skincare treatments and organic products for healthy, glowing skin.",
      certifications: ["Facial Specialist", "Organic Skincare Expert", "Natural Therapy Practitioner"]
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className='text-s font-bold font-barlow text-primary uppercase mb-3 scroll-animate'>
            Our Team
          </h1>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 scroll-animate">
            Meet Our Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto scroll-animate">
            Meet our dedicated team of certified professionals who are passionate about helping you 
            look and feel your best. Each team member brings expertise, experience, and a commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="scroll-animate">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position} at Issime Beauty Salon`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{member.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specialty: {member.speciality}
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center">
                      <Award className="w-4 h-4 text-primary mr-2" />
                      Certifications
                    </h4>
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 text-center scroll-animate">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h3 className="text-3xl font-bold font-playfair mb-6">
            Why Choose Our Team?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">Professional Excellence</h4>
              <p className="text-sm text-muted-foreground">
                All our therapists are certified professionals with extensive training and experience in their specialties.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Personalized Care</h4>
              <p className="text-sm text-muted-foreground">
                We believe in providing personalized attention and treatments tailored to each client's unique needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                Our team regularly updates their skills with the latest techniques and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;