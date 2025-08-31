import { useAppSelector } from './useAppSelector';

export type Language = 'en' | 'zh';

export const useLanguage = () => {
  const { currentLanguage } = useAppSelector((state) => state.language);
  return currentLanguage;
};

export const translations = {
  en: {
    // Hero Section
    hero: {
      subtitle1: "Where Elegance Meets Natural Beauty",
      title1: "Issime Beauty Salon",
      description1: "As a trusted beauty salon in Malaysia, Issime offers luxurious treatments designed to enhance your natural glow and relax your senses in style.",
      subtitle2: "Relaxation Through Heat",
      title2: "Korean Hot Stone Therapy",
      description2: "Traditional Korean wellness treatment that uses heated stones to improve circulation, relieve muscle tension, and promote deep relaxation.",
      subtitle3: "Detox & Firming Care",
      title3: "Intestinal Mud Mask Care",
      description3: "A therapeutic mud mask applied to the lower abdomen to support digestion, reduce bloating, and help firm and tone the belly area.",
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
      fullBodyMassage: "Korea Hot Stone Theraphy",
      massageDesc: "Relaxing and therapeutic full body massage to relieve tension and promote overall wellness.",
      faceCleansing: "Intestinal Mud Belly Care",
      cleansingDesc: "A therapeutic mud mask applied to the lower abdomen to support digestion, reduce bloating, and help firm and tone the belly area.",
      // Service Features
      antiAgingFeatures: ["Collagen Boost", "Wrinkle Reduction", "Skin Tightening", "Hydration Therapy"],
      hotStoneFeatures: ["Heated Stones", "Deep Tissue", "Circulation Boost", "Muscle Relaxation"],
      mudBellyFeatures: ["Digestive Support", "Bloating Reduction", "Belly Firming", "Detoxification"],
      bookNow: "Book Now",
      readyTitle: "Ready to Experience Our Services?",
      readyDesc: "Contact us today to schedule your appointment and begin your journey to beauty and wellness.",
      contactWhatsApp: "Contact Us on WhatsApp"
    },
    // Video Section
    gallery: {
      sectionTitle: "Video",
      title: "Real Treatment Experiences",
      description: "Take a visual tour of our beautiful salon space, treatment rooms, and the serene environment we've created for your ultimate relaxation and beauty experience.",
      // Gallery Images
      image1: {
        title: "You are beautiful! Very beauty! Because you have come Issime!",
        desc: "Our Korean-style hot stone therapy can help you. We are also currently offering a complimentary lymphatic detox session! Leave a message now to book your treatment or contact us."
      },
      image2: {
        title: "Legs Sore for Standing all day.",
        desc: "My legs used to swell and hurt after work, but now they feel so much better! The therapist's technique is extremely professional."
      },
      image3: {
        title: "Hot Stone Leg Treatment.",
        desc: "My stubby legs have turned into long legs. Later I discovered it was due to accumulated toxins causing leg swelling! Fortunately, I went to Issime Beauty to experience their Hot Stone Leg Treatment."
      },
      image4: {
        title: "Korean hot stone therapy!",
        desc: "If you are facing insomnia, migraines, eye fatigue, or poor complexion, you definitely need to experience Korean hot stone therapy! It helps eliminate toxins from the head, clear blockages in the head, and instantly liberate your head, making the entire head more relaxed."
      },
      image5: {
        title: "The looks of Issimei Beauty Salon",
        desc: "When care becomes the norm, beauty also becomes the norm."
      },
      image6: {
        title: "Issime Beauty Message Therapy",
        desc: "Don't hold in your anger anymore. This treatment can actually improve bloating and constipation issues, say goodbye to discomfort!"
      },
      image7: {
        title: "Anti Aging Treatment",
        desc: "Sometimes, we are not old; we are just tired in the face, our complexion has faded, and our emotions are stuck. Give yourself a chance for a deep breath — Issimei Beauty's Facial Moxibustion Meridian Care."
      },
      image8: {
        title: "Full Body Treatment",
        desc: "Insomnia and headache? Done in 1 hour. Turned those calf muscles into long legs? Done in 1 hour. Hand pain, numbness, tightness? Done in 1 hour. You heard it right. We will show you results in just 1 hour."
      }
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
      title1: "Issime Beauty Salon",
      description1: "作为马来西亚值得信赖的美容院，伊诗美提供奢华的护理服务，旨在增强您的自然光彩，让您的感官在时尚中得到放松。",
      subtitle2: "通过热量放松身心",
      title2: "韩国热石疗法",
      description2: "传统韩国养生疗法，使用加热的石头改善血液循环，缓解肌肉紧张，促进深度放松。",
      subtitle3: "排毒与紧致护理",
      title3: "肠道泥膜腹部护理",
      description3: "将治疗性泥膜涂抹在下腹部，支持消化，减少腹胀，帮助紧致和塑形腹部区域。",
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
      fullBodyMassage: "韩国热石疗法",
      massageDesc: "传统韩国养生疗法，使用加热的石头改善血液循环，缓解肌肉紧张，促进深度放松。",
      faceCleansing: "肠道泥膜腹部护理",
      cleansingDesc: "将治疗性泥膜涂抹在下腹部，支持消化，减少腹胀，帮助紧致和塑形腹部区域。",
      // Service Features
      antiAgingFeatures: ["胶原蛋白提升", "皱纹减少", "肌肤紧致", "补水疗法"],
      hotStoneFeatures: ["热石疗法", "深层组织", "血液循环", "肌肉放松"],
      mudBellyFeatures: ["消化支持", "减少腹胀", "腹部紧致", "排毒"],
      bookNow: "立即预约",
      readyTitle: "准备体验我们的服务了吗？",
      readyDesc: "今天就联系我们安排您的预约，开始您的美丽和健康之旅。",
      contactWhatsApp: "通过WhatsApp联系我们"
    },
    // Video Section
    gallery: {
      sectionTitle: "视频",
      title: "真实护理体验",
      description: "参观我们美丽的沙龙空间、护理室和我们为您的终极放松和美容体验创造的宁静环境。",
      // Gallery Images
      image1: {
        title: "你很美！非常美丽！因为你来到了伊诗美！",
        desc: "我们的韩国式热石疗法可以帮助您。我们目前还提供免费的淋巴排毒疗程！立即留言预约您的护理或联系我们。"
      },
      image2: {
        title: "整天站立导致腿部酸痛。",
        desc: "我的腿以前下班后会肿胀疼痛，但现在感觉好多了！治疗师的技术非常专业。"
      },
      image3: {
        title: "热石腿部护理。",
        desc: "我的粗腿变成了长腿。后来我发现这是由于积累的毒素导致腿部肿胀！幸运的是，我去了伊诗美美容院体验他们的热石腿部护理。"
      },
      image4: {
        title: "韩国热石疗法！",
        desc: "如果您面临失眠、偏头痛、眼疲劳或面色不佳，您绝对需要体验韩国热石疗法！它有助于消除头部毒素，清除头部阻塞，立即解放您的头部，让整个头部更加放松。"
      },
      image5: {
        title: "伊诗美美容院的外观",
        desc: "当护理成为常态时，美丽也成为了常态。"
      },
      image6: {
        title: "伊诗美美容按摩疗法",
        desc: "不要再压抑您的愤怒了。这种护理实际上可以改善腹胀和便秘问题，告别不适！"
      },
      image7: {
        title: "抗衰老护理",
        desc: "有时，我们并不老；我们只是面部疲惫，面色暗淡，情绪受阻。给自己一个深呼吸的机会——伊诗美美容的面部艾灸经络护理。"
      },
      image8: {
        title: "全身护理",
        desc: "失眠和头痛？1小时完成。将小腿肌肉变成长腿？1小时完成。手部疼痛、麻木、紧绷？1小时完成。您没听错。我们将在1小时内向您展示效果。"
      }
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
      title: "Issime Beauty Salon - 马来西亚顶级美容院 | 抗衰老护理和全身按摩",
      description: "Issime Beauty Salon、全身按摩和天然面部清洁，让肌肤焕发青春光彩。立即预约我们的整体自然疗法服务！",
      keywords: "伊诗美美容院, 马来西亚美容院, 抗衰老护理, 全身按摩, 天然面部清洁, 整体自然疗法, 新山水疗, 马来西亚美容护理, 美容沙龙, 护肤治疗"
    }
  }
};