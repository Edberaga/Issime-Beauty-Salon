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
      antiAging: "Natural Face Lifting & Puffiness Relief",
      antiAgingDesc: "Advanced facial treatments designed to reduce signs of aging and promote youthful",
      fullBodyMassage: "Korea Hot Stone Theraphy",
      massageDesc: "Relaxing and therapeutic full body massage to relieve tension and promote overall wellness.",
      faceCleansing: "Intestinal Mud Belly Care",
      cleansingDesc: "A therapeutic mud mask applied to the lower abdomen to support digestion, reduce bloating, and help firm and tone the belly area.",
      // Service Features
      antiAgingFeatures: ["facial massage for puffiness", "natural face lifting massage", "meridian facial therapy", "jawline lifting massage"],
      hotStoneFeatures: ["hot stone therapy for back pain", "hand hot stone massage", "foot hot stone treatment swelling", "circulation boost hot stone"],
      mudBellyFeatures: ["Bloating & Indigestion Relief", "Lower Belly Slimming & Firming", "Detoxification & Cold Dampness Removal", "Improved Gut Health & Comfort"],
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
    // SSM Section
    ssm: {
      title: "Registered & Certified with SSM Malaysia",
      subtitle: "Your Trust, Our Commitment",
      description: "Issime Beauty Salon is a legally registered company in Malaysia under the Suruhanjaya Syarikat Malaysia (SSM). Our official business registration reflects our commitment to professionalism, transparency, and customer trust. When you choose Issime Beauty Salon, you are assured that you are receiving services from a certified and legitimate beauty salon dedicated to quality and integrity.",
      legallyRegistered: "Legally Registered",
      ssmCertified: "SSM Certified"
    },
    // FAQ Section
    faq: {
      sectionTitle: "COMMON QUESTIONS",
      title: "Most Popular Questions",
      description: "Here, we've compiled answers to some of the most common queries we receive. If you have a question that's not covered here, please feel free to reach out to our customer support team for personalized assistance.",
      questions: [
        {
          question: "What makes Issime Beauty different from other beauty salons?",
          answer: "At Issime Beauty, we combine natural therapies with advanced techniques to improve both beauty and wellness. Every treatment is done in a private room, ensuring maximum comfort, hygiene, and relaxation."
        },
        {
          question: "What signature services does Issime Beauty offer?",
          answer: "We specialize in three signature treatments:\n• Korean Hot Stone Therapy (back, hand, and foot) to relieve stiffness, improve circulation, and ease water retention.\n• Intestinal Mud Detox Care to reduce bloating, support digestion, and ease gastric discomfort.\n• Facial Meridian Massage to lift contours, reduce puffiness, and improve skin glow naturally."
        },
        {
          question: "What are the benefits of Korean Hot Stone Therapy?",
          answer: "Hot Stone Therapy combines heated stones with massage techniques to:\n• Relieve muscle stiffness and fatigue\n• Improve blood circulation and detoxification\n• Reduce water retention and swelling\n• Ease stress and tension for overall relaxation"
        },
        {
          question: "How does Intestinal Mud Detox Care help with bloating?",
          answer: "This therapy uses warm essential oils and a volcanic mud wrap to:\n• Draw out trapped gas, cold, and dampness\n• Relieve stomach bloating and tightness\n• Improve gut circulation and digestion\n• Support a lighter and more comfortable feeling"
        },
        {
          question: "What is Facial Meridian Massage and how is it different from a normal facial?",
          answer: "Facial Meridian Massage is an acupressure and meridian therapy that:\n• Stimulates circulation and lymphatic drainage\n• Reduces facial puffiness and water retention\n• Lifts and defines jawline and cheekbones\n• Improves elasticity and natural radiance\nUnlike standard facials, it works from inside out to address root causes of dullness and sagging."
        },
        {
          question: "Are your treatments safe and relaxing?",
          answer: "Yes, absolutely. All treatments are carried out by professional therapists in private rooms using premium essential oils, volcanic mud, and heated stones. Each therapy is tailored to your body's condition for safe and effective results."
        },
        {
          question: "Can I customize my beauty or wellness package?",
          answer: "Yes, Issime Beauty offers flexible and customizable packages so you can combine treatments like Hot Stone Therapy, Mud Detox, and Facial Meridian Massage depending on your personal wellness goals."
        },
        {
          question: "Do you use premium or natural products?",
          answer: "Yes. We use high-quality essential oils, volcanic mud, and natural therapy tools. Combined with advanced Korean and Taiwanese equipment, our products are safe and effective for skin, scalp, and body."
        },
        {
          question: "How does Issime Beauty stay updated with the latest trends?",
          answer: "Our team is trained regularly in Taiwan and Korea, and we use the latest high-end machines and techniques that many salons cannot provide. This ensures our treatments remain modern, safe, and effective."
        },
        {
          question: "How can I book an appointment at Issime Beauty?",
          answer: "Booking is easy. You can contact us via:\n• 📲 WhatsApp: http://www.wasap.my/60127343939\n• 📍 Visit our salon directly: G85-01, Jalan Mutiara Emas 10/2, Taman Mount Austin, Johor Bahru."
        }
      ]
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
      description1: "Issime Beauty 作为柔佛备受好评的美容院，致力于为您提供安全、温和且贴心的护理。通过改善血液循环，排出体内湿寒与堆积毒素，让您的身体轻盈舒畅，肌肤焕发自然健康的光彩",
      subtitle2: "韩国热岩石护理",
      title2: "韩国热岩石护理",
      description2: "韩国热岩石护理结合温热能量与按摩手法，利用加热岩石深入经络与肌肉，帮助排解疲劳、促进血液循环，并带来全身放松与舒缓体验。",
      subtitle3: "排毒与紧致护理",
      title3: "肠胃泥膜护理",
      description3: "肠胃泥膜护理用温热精油和火山泥敷腹部，帮助排出寒湿与胀气，缓解腹胀，促进消化，让小腹更轻盈紧致。",
      makeAppointment: "预约"
    },
    // About Section
    about: {
      sectionTitle: "关于我们",
      title: "Issime Beauty Salon",
      description: "Issime Beauty 坐落于马来西亚新山市中心，专注于 整体自然疗法与专业美容护理。通过融合传统调理与先进技术，我们致力于帮助顾客 改善循环、排解压力、提升肌肤健康，实现由内而外的美丽蜕变。",
      premiumQuality: "优质品质",
      premiumDesc: "我们只使用最优质的产品和最先进的设备，确保为我们尊贵的客户提供最高质量的护理。",
      holisticApproach: "整体方法",
      holisticDesc: "我们的整体自然疗法专注于您的整体健康，将美容护理与放松和恢复活力相结合。",
      expertTeam: "专业团队",
      expertDesc: "我们的认证治疗师和美容师是充满激情的专业人士，致力于提供个性化护理和卓越服务。",
      ourMission: "我们的使命",
      missionDesc1: "Issime Beauty 坚信，美丽不仅停留在外表，而是由内而外的平衡与健康。我们的使命是透过专业的自然疗法与全面的美容服务，协助您改善循环、排解压力，并展现最真实的光彩。",
      missionDesc2: "我们承诺为每一位顾客提供安静私密的护理环境，让您在奢华放松的体验中释放疲惫，恢复身心活力。",
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
      antiAging: "脸部拨筋护理",
      antiAgingDesc: "脸部拨筋护理结合经络与肌肉调理，以专业手法轻推按压，促进循环，释放紧绷，让肌肤更健康紧致。",
      fullBodyMassage: "韩式热岩石护理",
      massageDesc: "韩式热岩石护理结合 温热岩石 与 专业按摩手法，透过热能深入经络与肌肉，帮助身体释放疲劳、改善循环，并带来深层放松。",
      faceCleansing: "肠胃泥膜护理",
      cleansingDesc: "肠胃泥膜护理是一种利用温热精油与火山泥敷腹部的自然疗法，能有效缓解腹胀、促进消化，让小腹轻盈紧致。",
      // Service Features
      antiAgingFeatures: ["提升轮廓", "促进循环", "消水肿", "舒缓紧绷"],
      hotStoneFeatures: ["促进血液循环", "舒缓酸痛疲劳", "排出湿寒与毒素", "深度放松助眠"],
      mudBellyFeatures: ["缓解腹胀不适", "促进消化健康", "排出湿寒与毒素", "小腹紧致轻盈"],
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
      description: "坐落于马来西亚新山 Mount Austin 黄金地段，Issime Beauty 提供便利的交通位置与安静舒适的环境。这里不仅方便来自新山本地的顾客，也深受新加坡顾客欢迎，是体验自然疗法与高端美容护理的理想选择。",
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
    // SSM Section
    ssm: {
      title: "在马来西亚SSM注册并获得认证",
      subtitle: "您的信任，我们的承诺",
      description: "Issime Beauty 是在马来西亚公司委员会（SSM）下合法注册的公司。我们的官方商业注册，体现了我们对专业精神、透明度和客户信任的承诺。选择 Issime Beauty，您可以放心，所接受的护理来自一家致力于质量与诚信的认证合法美容院。",
      legallyRegistered: "合法注册",
      ssmCertified: "SSM认证"
    },
    // FAQ Section
    faq: {
      sectionTitle: "常见问题",
      title: "最受欢迎的问题",
      description: "如果这里没有解答到您的问题，请随时联系我们的客服团队，我们会为您提供详细协助。",
      questions: [
        {
          question: "Issime Beauty 与其他美容院有什么不同？",
          answer: "Issime Beauty 不只是一般的美容院，我们结合了 自然疗法与现代护理技术，为顾客提供的不仅是表面的美容，而是从内到外的健康调理与放松体验 \n整体自然疗法：我们提供如韩式热岩石护理、肠胃泥膜护理、脸部拨筋护理等，从头到脚全面改善循环与状态。\n专业团队：所有护理师均经过培训，确保每位顾客都能享受到安全、温和且有效的护理。\n私密空间：我们的护理均在独立房间进行，让您在安静舒适的环境中得到最大放松。\n高端设备与产品：Issime Beauty 引进韩国、台湾先进技术与设备，并使用优质产品，确保护理效果与体验。\n简单来说，选择 Issime Beauty，不仅是做护理，更是一次身心全面焕活的体验。"
        },
        {
          question: "Issime Beauty 提供哪些核心护理项目？",
          answer: "我们专注于三大核心护理项目：\n• 韩国热岩石疗法（背部、手部与足部）：缓解僵硬与疲劳，促进血液循环，改善水分滞留，让身体更轻盈。\n• 肠胃泥膜排毒护理：帮助减少腹胀，支持消化，舒缓胃部不适，恢复小腹轻盈。\n• 脸部经络按摩：提升面部轮廓，减少浮肿，促进循环，让肌肤自然焕发光泽。"
        },
        {
          question: "韩式热岩石护理有哪些好处？",
          answer: "韩式热岩石护理将加热的岩石与专业按摩手法相结合，为身体带来深层放松与调理效果。主要好处：\n• 缓解肌肉僵硬与疲劳：深入肌肉层，舒缓长期紧绷。\n• 改善血液循环与排毒：促进循环，帮助排出体内湿寒与毒素。\n• 减少水分滞留与浮肿：改善身体轻盈度，减轻水肿感。\n• 释放压力与紧张：让身心彻底放松，提升睡眠质量。\n• 适合经常肩颈酸痛、工作劳累、体质偏寒或长期水肿的人群。"
        },
        {
          question: "肠道泥膜排毒护理如何帮助缓解腹胀？",
          answer: "这种疗法使用温热的精油和火山泥包裹：\n• 排出滞留的气体、寒气和湿气\n• 缓解胃部腹胀和紧绷感\n• 改善肠道血液循环和消化\n• 支持更轻盈和舒适的感觉"
        },
        {
          question: "什么是面部经络按摩，它与普通面部护理有什么不同？",
          answer: "面部经络按摩是一种穴位按压和经络疗法：\n• 刺激血液循环和淋巴引流\n• 减少面部浮肿和水分滞留\n• 提升和定义下颌线和颧骨\n• 改善弹性和自然光泽\n与标准面部护理不同，它从内到外工作，解决暗沉和下垂的根本原因。"
        },
        {
          question: "您的护理安全且放松吗？",
          answer: "是的，绝对安全。所有护理都由专业治疗师在私人房间进行，使用优质精油、火山泥和热石。每种疗法都根据您的身体状况量身定制，确保安全有效的结果。"
        },
        {
          question: "我可以定制我的美容护理疗程吗？",
          answer: "是的，Issime Beauty 提供灵活且可定制的 护理方案。您可以根据个人需求，将 韩式热岩石护理、肠胃泥膜护理、脸部拨筋护理 等项目自由搭配，打造最适合自己的调理体验。"
        },
        {
          question: "您使用优质或天然产品吗？",
          answer: "是的。我们使用高质量的精油、火山泥和天然疗法工具。结合先进的韩国和台湾设备，我们的产品对皮肤、头皮和身体安全有效。"
        },
        {
          question: "Issime Beauty 如何保持与最新趋势的同步？",
          answer: "在 Issime Beauty，我们深知美容与自然疗法的技术不断进步，因此始终走在前沿：\n• 持续培训：我们的护理团队会定期参与培训，不断学习新的手法与理念。\n• 引进国际技术：积极引进来自 韩国、台湾 等地的先进自然疗法技术，确保顾客体验行业内领先的护理。\n• 高端设备：使用最新、升级的高端仪器，提供更精准、安全、有效的护理效果，这是一般美容院无法提供的。\n• 紧贴市场需求：我们持续关注美容与健康养生的国际趋势，并结合顾客反馈，不断优化护理方案。\n正因如此，选择 Issime Beauty，您能体验到最专业、最与时俱进的美容与自然疗法护理。"
        },
        {
          question: "我如何在 Issime Beauty 预约？",
          answer: "在 Issime Beauty，预约护理非常方便: \n• WhatsApp 预约 👉 您可以直接点击我们官网上的预约链接，或通过 WhatsApp 联系我们：http://www.wasap.my/60127343939\n• 电话预约 👉 致电我们的服务团队，确认您想要的时间与疗程。\n• 到店预约 👉 直接来到我们的美容院，当场与前台安排合适的时间。\n• 提前预定 👉 为确保您喜欢的时间段，我们建议您提前预约，尤其是在高峰时段与周末。\n• 地址：G85-01, Jalan Mutiara Emas 10/2, Taman Mount Austin, Johor Bahru, Johor.\n无论是单次体验还是定期护理，我们都欢迎您提前安排，确保享受到最贴心的服务。"
        }
      ]
    },
    // SEO
    seo: {
      title: "Issime Beauty Salon - 马来西亚顶级美容院 | 抗衰老护理和全身按摩",
      description: "Issime Beauty Salon、全身按摩和天然面部清洁，让肌肤焕发青春光彩。立即预约我们的整体自然疗法服务！",
      keywords: "伊诗美美容院, 马来西亚美容院, 抗衰老护理, 全身按摩, 天然面部清洁, 整体自然疗法, 新山水疗, 马来西亚美容护理, 美容沙龙, 护肤治疗"
    }
  }
};