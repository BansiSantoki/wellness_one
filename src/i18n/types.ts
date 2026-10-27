export interface TranslationSchema {
  nav: {
    about: string;
    panchakarma: string;
    therapies: string;
    programs: string;
    rejuvenation: string;
    wellness: string;
    faqs: string;
    contact: string;
    insights: string;
    bookConsultation: string;
    chatWhatsapp: string;
    close: string;
    menu: string;
    siteMenu: string;
    selectLanguage: string;
  };
  common: {
    bookConsultation: string;
    exploreTherapies: string;
    viewAll: string;
    enquireProgram: string;
    bookTherapy: string;
    selectDate: string;
    selectTime: string;
    duration: string;
    startingFrom: string;
    callClinic: string;
    whatsapp: string;
    disclaimerTitle: string;
    disclaimerText: string;
    copyright: string;
    privacyPolicy: string;
    terms: string;
    disclaimer: string;
    readMore: string;
    backToHome: string;
    allRightsReserved: string;
    loading: string;
    step: string;
    verifiedRegistration: string;
  };
  site: {
    brand: string;
    division: string;
    tagline: string;
    shortDescription: string;
    city: string;
    phone: string;
    email: string;
    doctorName: string;
    doctorQualifications: string;
    doctorProfession: string;
    doctorRegistration: string;
    addressShop: string;
    addressBuilding: string;
    addressLocality: string;
    addressLandmark: string;
    addressCityState: string;
    workingHoursMonSat: string;
    workingHoursSunday: string;
  };
  home: {
    hero: {
      eyebrow: string;
      tagline1: string;
      tagline2: string;
      subtitle: string;
      description: string;
      bookCta: string;
      therapiesCta: string;
      scrollToExplore: string;
      location: string;
    };
    doctorIntro?: {
      eyebrow: string;
      title: string;
      doctorName: string;
      qualifications: string;
      specialization: string;
      registrationBadge: string;
      bio: string;
      bookAppointmentBtn: string;
      callDirectBtn: string;
      viewProfileBtn: string;
    };
    intro: {
      eyebrow: string;
      heading: string;
      p1: string;
      p2: string;
      p3: string;
      learnMore: string;
      imageCaption: string;
    };
    philosophy: {
      eyebrow: string;
      heading: string;
      description: string;
      stepLabel: string;
      stages: { word: string; caption: string }[];
    };
    trust: {
      items: { title: string; description: string }[];
    };
    panchakarmaFeature: {
      eyebrow: string;
      heading: string;
      p1: string;
      p2: string;
      p3: string;
      count: string;
      countCaption: string;
      quote: string;
      assessmentBadge: string;
      oilCaption: string;
    };
    timeline: {
      eyebrow: string;
      heading: string;
      steps: { number: string; title: string; description: string }[];
    };
    programsPreview: {
      eyebrow: string;
      heading: string;
      description: string;
      exploreCta: string;
    };
    modernLifestyle: {
      eyebrow: string;
      heading: string;
      p1: string;
      p2: string;
      approachLabel: string;
      quote: string;
      quoteSub: string;
      areas: string[];
    };
    dietLifestyle: {
      eyebrow: string;
      heading: string;
      p1: string;
      disclaimer: string;
      caption: string;
      areas: string[];
    };
    rightForYou: {
      eyebrow: string;
      heading: string;
      p1: string;
      cta: string;
      reasonsLabel: string;
      reasons: string[];
      consultationNoteHeading: string;
      consultationNote: string;
    };
    whyOneWellness: {
      eyebrow: string;
      heading: string;
      points: { title: string; description: string }[];
    };
    testimonials: {
      eyebrow: string;
      heading: string;
      items: { quote: string; name: string; context: string }[];
    };
    insightsPreview: {
      eyebrow: string;
      heading: string;
      viewAll: string;
    };
    immersiveCta: {
      heading: string;
      text: string;
      secondary: string;
    };
  };
  about: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    introEyebrow: string;
    introHeading: string;
    introP1: string;
    introP2: string;
    treatmentRoomCaption: string;
    preparationsCaption: string;
    philosophyEyebrow: string;
    philosophyHeading: string;
    philosophyItems: string[];
    founderEyebrow: string;
    founderHeading: string;
    founderProfession: string;
    founderP1: string;
    founderP2: string;
    sanctuaryCaption: string;
    clinicalTeamEyebrow: string;
    clinicalTeamHeading: string;
    clinicalTeamDesc: string;
    verifiedBadge: string;
    fields: {
      name: string;
      qualification: string;
      profession: string;
      registrationNumber: string;
    };
    clinicNote: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaText: string;
    contactBtn: string;
  };
  panchakarmaPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    meta: {
      beginsWithLabel: string;
      beginsWithValue: string;
      phasesLabel: string;
      phasesValue: string;
      durationsLabel: string;
      durationsValue: string;
      selectionLabel: string;
      selectionValue: string;
    };
    therapyGalleryHeading: string;
    therapyGalleryIntro: string;
    formEyebrow: string;
    formHeading: string;
    formIntro: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  therapiesPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    meta: {
      offeredLabel: string;
      offeredValue: string;
      startingFromLabel: string;
      startingFromValue: string;
    };
    galleryHeading: string;
    galleryIntro: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaText: string;
    ctaSecondary: string;
  };
  programsPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    meta: {
      consultationLabel: string;
      consultationValue: string;
      shortProgramsLabel: string;
      shortProgramsValue: string;
      day14Label: string;
      day14Value: string;
      day21Label: string;
      day21Value: string;
    };
    showcaseHeading: string;
    showcaseIntro: string;
    formEyebrow: string;
    formHeading: string;
    formIntro: string;
  };
  rejuvenationPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    meta: {
      shortestLabel: string;
      shortestValue: string;
      longestLabel: string;
      longestValue: string;
      indicativeFromLabel: string;
      indicativeFromValue: string;
      plannedAfterLabel: string;
      plannedAfterValue: string;
    };
    introEyebrow: string;
    introHeading: string;
    introP1: string;
    introP2: string;
    introCaption: string;
    formula: string[];
    experiences: { name: string; description: string }[];
    formEyebrow: string;
    formHeading: string;
    formIntro: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  wellnessPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    habitsEyebrow: string;
    habitsHeading: string;
    habitsIntro: string;
    habits: { title: string; text: string }[];
    ctaEyebrow: string;
    ctaHeading: string;
    ctaText: string;
    ctaSecondary: string;
  };
  consultationPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    meta: {
      consultantLabel: string;
      consultantValue: string;
      qualificationsLabel: string;
      qualificationsValue: string;
      feeLabel: string;
      feeValue: string;
      requiredBeforeLabel: string;
      requiredBeforeValue: string;
    };
    expectEyebrow: string;
    expectHeading: string;
    expectItems: { label: string; text: string }[];
    faqEyebrow: string;
    faqHeading: string;
  };
  contactPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    getInTouch: string;
    divisionTitle: string;
    leadPractitioner: string;
    doctorBio: string;
    verifiedRegistration: string;
    directContact: string;
    clinicHours: string;
    monSat: string;
    monSatHours: string;
    sunday: string;
    sundayHours: string;
    visitInPerson: string;
    viewLocationMap: string;
    clinicSanctuary: string;
  };
  faqsPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    disclaimerTitle: string;
    stillDecidingEyebrow: string;
    stillDecidingHeading: string;
    stillDecidingText: string;
    stillDecidingSecondary: string;
  };
  blogPage: {
    headerEyebrow: string;
    headerTitle: string;
    headerSubtitle: string;
    featuredTag: string;
    readGuide: string;
    allCategory: string;
    categories: Record<string, string>;
    articleNotFound: string;
    articleNotFoundDesc: string;
    backToInsights: string;
    relatedArticles: string;
  };
  form: {
    eyebrow: string;
    heading: string;
    intro: string;
    preferToTalk: string;
    messageWhatsapp: string;
    orCall: string;
    requestAppointment: string;
    requiredFields: string;
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    mobileLabel: string;
    mobilePlaceholder: string;
    mobileError: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    whatsappError: string;
    dateLabel: string;
    dateError: string;
    goalLabel: string;
    goalPlaceholder: string;
    goalError: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    submitting: string;
    disclaimer: string;
    successTitle: string;
    successMessage: string;
    preferredDateLabel: string;
    wellnessGoalLabel: string;
    sendAnother: string;
    goals: {
      panchakarma: string;
      rejuvenation: string;
      ayurvedicMassage: string;
      stressRelaxation: string;
      generalWellness: string;
      other: string;
    };
  };
  bookingModal: {
    headerSubtitle: string;
    headerTitle: string;
    closeModal: string;
    requestReceived: string;
    thankYouMessage: string;
    summaryHeading: string;
    selectedTherapyLabel: string;
    preferredDateLabel: string;
    preferredTimeLabel: string;
    startingPriceLabel: string;
    callClinicBtn: string;
    whatsappClinicBtn: string;
    closeWindowBtn: string;
    chooseTherapyLabel: string;
    chooseDateLabel: string;
    preferredTimeSlotLabel: string;
    indicativePriceLabel: string;
    contactDetailsHeading: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    mobileNumberLabel: string;
    whatsappNumberLabel: string;
    whatsappNumberPlaceholder: string;
    goalLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    cancelBtn: string;
    submitEnquiryBtn: string;
  };
  whatsappSection: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    points: string[];
    chatCta: string;
    workingHoursNotice: string;
  };
  therapiesData: Record<
    string,
    {
      name: string;
      subtitle: string;
      description: string;
      duration: string;
      priceFrom: string;
    }
  >;
  programsData: Record<
    string,
    {
      name: string;
      duration: string;
      price: string;
      priceLabel: string;
      intro: string;
      inclusionsLabel: string;
      inclusions: string[];
      journey?: string[];
      note?: string;
      cta: string;
    }
  >;
  faqsData: { question: string; answer: string }[];
  localPagesData: Record<
    string,
    {
      eyebrow: string;
      h1: string;
      lede: string;
      seoTitle: string;
      seoDescription: string;
      sections: {
        heading: string;
        paragraphs: string[];
        list?: string[];
      }[];
      factsLabel: string;
      facts: { label: string; value: string }[];
      cta: {
        heading: string;
        text: string;
        label: string;
      };
    }
  >;
  legalPages: {
    privacy: {
      title: string;
      intro: string;
      sections: { heading: string; body: string[] }[];
    };
    terms: {
      title: string;
      intro: string;
      sections: { heading: string; body: string[] }[];
    };
    disclaimer: {
      title: string;
      intro: string;
      sections: { heading: string; body: string[] }[];
    };
  };
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    backHome: string;
    bookConsultation: string;
  };
}
