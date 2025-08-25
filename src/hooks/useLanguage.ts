import { useState, useEffect } from 'react';

export type Language = 'en' | 'zh';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Get saved language or default to English
    const savedLanguage = (localStorage.getItem('language') as Language) || 'en';
    setLanguage(savedLanguage);

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return language;
};

export const translations = {
  en: {
    // Hero Section
    hero: {
      subtitle1: "Where Elegance Meets Natural Beauty",
      title1: "Issime Beauty Salon",
      description1: "As a trusted beauty salon in Malaysia, Issime offers luxurious treatments designed to enhance your natural glow and relax your senses in style.",
      subtitle2: "Relax, Rejuvenate, Recharge",
      title2: "Spa & Full Body Massage",
      description2: "Indulge in calming spa rituals and our signature full body massage, tailored to melt away stress and leave you feeling deeply restored.",
      subtitle3: "Naturally Youthful, Radiantly You",
      title3: "Anti-Aging Treatments",
      description3: "Advanced skincare treatments for youthful-looking skin. Experience our anti aging treatments for youthful skin that glows from within.",
      makeAppointment: "Make Appointment"
    },
    // About Section
    about: {
      sectionTitle: "Who We Are",
      title: "Issime Beauty Salon",
      description: "Located in the heart of Johor Bahru, Malaysia, Issime Beauty Salon is your premier destination for holistic natural therapy and luxury beauty treatments. We combine traditional wellness practices with modern techniques to deliver exceptional results.",
      premiumQuality: "Premium Quality",
      premiumDesc: "We use only the finest products and state-of-the-art equipment to ensure the highest quality treatments for our valued clients.",
      holisticApproach: "Holistic Approach",
      holisticDesc: "Our holistic natural therapy approach focuses on your overall well-being, combining beauty treatments with relaxation and rejuvenation.",
      expertTeam: "Expert Team",
      expertDesc: "Our certified therapists and beauticians are passionate professionals dedicated to providing personalized care and exceptional service.",
      ourMission: "Our Mission",
      missionDesc1: "At Issime Beauty Salon, we believe that true beauty comes from within. Our mission is to help you discover and enhance your natural radiance through our comprehensive range of beauty and wellness services.",
      missionDesc2: "We are committed to providing a serene sanctuary where you can escape the stresses of daily life and indulge in luxurious treatments that restore both your body and spirit.",
      yearsExcellence: "Years of Excellence",
      servingClients: "Serving clients in Malaysia",
      happyClients: "Happy Clients",
      satisfiedCustomers: "Satisfied customers",
      servicesOffered: "Services Offered",
      comprehensiveTreatments: "Comprehensive beauty treatments"
    },
    // Services Section
    services: {
      sectionTitle: "Our Services",
      title: "From Full Body Massage to Anti-Aging",
      description: "Discover our comprehensive range of beauty and wellness services, each designed to enhance your natural beauty and promote relaxation and rejuvenation.",
      antiAging: "Anti-Aging Treatments",
      antiAgingDesc: "Advanced facial treatments designed to reduce signs of aging and promote youthful",
      fullBodyMassage: "Full Body Massage",
      massageDesc: "Relaxing and therapeutic full body massage to relieve tension and promote overall wellness.",
      faceCleansing: "Natural Face Cleansing",
      cleansingDesc: "Gentle, natural facial cleansing treatments that purify and nourish your skin for a healthy glow.",
      bookNow: "Book Now",
      readyTitle: "Ready to Experience Our Services?",
      readyDesc: "Contact us today to schedule your appointment and begin your journey to beauty and wellness.",
      contactWhatsApp: "Contact Us on WhatsApp"
    },
    // Gallery Section
    gallery: {
      sectionTitle: "Gallery",
      title: "Real Treatment Experiences",
      description: "Take a visual tour of our beautiful salon space, treatment rooms, and the serene environment we've created for your ultimate relaxation and beauty experience."
    },
    // Location Section
    location: {
      sectionTitle: "Visit Us",
      title: "We are In the Heart of Johor",
      description: "Conveniently located in Johor Bahru, Malaysia, Issime Beauty Salon is easily accessible and provides a serene escape from the bustling city life.",
      contactInfo: "Contact Information",
      address: "Address",
      operatingHours: "Operating Hours",
      phone: "Phone",
      email: "Email",
      mondayToSaturday: "Monday - Saturday: 9:00 AM - 8:00 PM",
      sunday: "Sunday: 10:00 AM - 6:00 PM",
      bookWhatsApp: "Book Appointment via WhatsApp",
      getDirections: "Get Directions",
      findOnMap: "Find us on the Map"
    },
    // Footer
    footer: {
      description: "Your premier destination for holistic natural therapy and luxury beauty treatments in Johor Bahru, Malaysia.",
      servingClients: "Serving clients with love since 2019",
      copyright: "Copyright © 2025 Issime Beauty Salon. All rights reserved | Powered by"
    },
    // SEO
    seo: {
      title: "Issime Beauty Salon - Premium Beauty Salon in Malaysia | Anti Aging Treatments & Full Body Massage",
      description: "Issime Beauty Salon in Johor Bahru, Malaysia offers premium anti aging treatments, full body massage, and youthful skin with natural face cleansing. Book your holistic natural therapy session today!",
      keywords: "Issime Beauty Salon, Beauty Salon in Malaysia, Anti aging treatments, Full Body Massage, Youthful Skin with Natural Face Cleansing, Holistic Natural Therapy, Johor Bahru Spa, Beauty Treatments Malaysia"
    }
  },
  zh: {
    // Hero Section
    hero: {
      subtitle1: "优雅与自然美的完美结合",
      title1: "伊诗美美容院",
      description1: "作为马来西亚值得信赖的美容院，伊诗美提供奢华的护理服务，旨在增强您的自然光彩，让您的感官在时尚中得到放松。",
      subtitle2: "放松、恢复活力、充电",
      title2: "水疗和全身按摩",
      description2: "沉浸在宁静的水疗仪式和我们的招牌全身按摩中，专为消除压力而定制，让您感到深度恢复。",
      subtitle3: "自然年轻，光彩照人",
      title3: "抗衰老护理",
      description3: "先进的护肤护理，让肌肤看起来年轻。体验我们的抗衰老护理，让肌肤从内而外焕发光彩。",
      makeAppointment: "预约"
    },
    // About Section
    about: {
      sectionTitle: "关于我们",
      title: "伊诗美美容院",
      description: "位于马来西亚新山市中心，伊诗美美容院是您进行整体自然疗法和奢华美容护理的首选目的地。我们将传统养生实践与现代技术相结合，提供卓越的效果。",
      premiumQuality: "优质品质",
      premiumDesc: "我们只使用最优质的产品和最先进的设备，确保为我们尊贵的客户提供最高质量的护理。",
      holisticApproach: "整体方法",
      holisticDesc: "我们的整体自然疗法专注于您的整体健康，将美容护理与放松和恢复活力相结合。",
      expertTeam: "专业团队",
      expertDesc: "我们的认证治疗师和美容师是充满激情的专业人士，致力于提供个性化护理和卓越服务。",
      ourMission: "我们的使命",
      missionDesc1: "在伊诗美美容院，我们相信真正的美丽来自内心。我们的使命是通过我们全面的美容和健康服务帮助您发现和增强您的自然光彩。",
      missionDesc2: "我们致力于提供一个宁静的避风港，让您可以逃离日常生活的压力，沉浸在恢复身心的奢华护理中。",
      yearsExcellence: "年卓越服务",
      servingClients: "在马来西亚为客户服务",
      happyClients: "满意客户",
      satisfiedCustomers: "满意的顾客",
      servicesOffered: "提供服务",
      comprehensiveTreatments: "全面的美容护理"
    },
    // Services Section
    services: {
      sectionTitle: "我们的服务",
      title: "从全身按摩到抗衰老",
      description: "探索我们全面的美容和健康服务，每项服务都旨在增强您的自然美丽，促进放松和恢复活力。",
      antiAging: "抗衰老护理",
      antiAgingDesc: "先进的面部护理，旨在减少衰老迹象并促进年轻",
      fullBodyMassage: "全身按摩",
      massageDesc: "放松和治疗性全身按摩，缓解紧张并促进整体健康。",
      faceCleansing: "天然面部清洁",
      cleansingDesc: "温和的天然面部清洁护理，净化和滋养您的肌肤，带来健康光泽。",
      bookNow: "立即预约",
      readyTitle: "准备体验我们的服务了吗？",
      readyDesc: "今天就联系我们安排您的预约，开始您的美丽和健康之旅。",
      contactWhatsApp: "通过WhatsApp联系我们"
    },
    // Gallery Section
    gallery: {
      sectionTitle: "画廊",
      title: "真实护理体验",
      description: "参观我们美丽的沙龙空间、护理室和我们为您的终极放松和美容体验创造的宁静环境。"
    },
    // Location Section
    location: {
      sectionTitle: "拜访我们",
      title: "我们位于新山的中心",
      description: "伊诗美美容院位于马来西亚新山，交通便利，为您提供远离繁忙城市生活的宁静避风港。",
      contactInfo: "联系信息",
      address: "地址",
      operatingHours: "营业时间",
      phone: "电话",
      email: "邮箱",
      mondayToSaturday: "周一至周六：上午9:00 - 晚上8:00",
      sunday: "周日：上午10:00 - 晚上6:00",
      bookWhatsApp: "通过WhatsApp预约",
      getDirections: "获取路线",
      findOnMap: "在地图上找到我们"
    },
    // Footer
    footer: {
      description: "您在马来西亚新山进行整体自然疗法和奢华美容护理的首选目的地。",
      servingClients: "自2019年以来用爱为客户服务",
      copyright: "版权所有 © 2025 伊诗美美容院。保留所有权利 | 技术支持"
    },
    // SEO
    seo: {
      title: "伊诗美美容院 - 马来西亚顶级美容院 | 抗衰老护理和全身按摩",
      description: "马来西亚新山伊诗美美容院提供顶级抗衰老护理、全身按摩和天然面部清洁，让肌肤焕发青春光彩。立即预约我们的整体自然疗法服务！",
      keywords: "伊诗美美容院, 马来西亚美容院, 抗衰老护理, 全身按摩, 天然面部清洁, 整体自然疗法, 新山水疗, 马来西亚美容护理, 美容沙龙, 护肤治疗"
    }
  }
};