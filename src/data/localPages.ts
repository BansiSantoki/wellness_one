import { img } from './images';

export interface LocalPageSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface LocalPage {
  slug: string;
  eyebrow: string;
  h1: string;
  lede: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroAlt: string;
  sections: LocalPageSection[];
  factsLabel: string;
  facts: {label: string;value: string;}[];
  cta: {heading: string;text: string;label: string;to: string;};
}

export const localPages: LocalPage[] = [
{
  slug: 'ayurvedic-consultation',
  eyebrow: 'Nashik',
  h1: 'Ayurvedic Consultation in Nashik',
  lede:
  'Every program at One Wellness begins with an unhurried conversation. This page explains what that consultation covers, how long it takes and what you will leave with.',
  seoTitle: 'Ayurvedic Consultation in Nashik | One Wellness Clinic & Research Center',
  seoDescription:
  'Book an Ayurvedic consultation in Nashik at One Wellness. Understand what the consultation covers, how your wellness plan is prepared and what to bring.',
  heroImage: img.consultation,
  heroAlt: 'An Ayurvedic practitioner in conversation with a visitor during a consultation',
  sections: [
  {
    heading: 'What the consultation actually covers',
    paragraphs: [
    'A consultation is a structured conversation rather than a test. The practitioner asks about your daily routine, working hours, sleep, appetite and digestion, physical activity, stress and the concerns that brought you in. Traditional assessment methods may also be used as part of this process.',
    'Nothing is recommended before this conversation. The purpose is to understand the individual first, so that any therapy suggested afterwards actually relates to them.']

  },
  {
    heading: 'What you will leave with',
    paragraphs: [
    'At the end of the session you should have a clear sense of what is being suggested and why.'],

    list: [
    'An Ayurvedic assessment summary',
    'A discussion of lifestyle, routine and food habits',
    'General wellness recommendations you can begin with',
    'Personalised therapy suggestions, if appropriate',
    'A clear view of what a program would involve and cost']

  },
  {
    heading: 'How to prepare',
    paragraphs: [
    'Come with a rough sense of your typical day — when you wake, when you eat, when you sleep. Bring any current prescriptions or reports you would like the practitioner to be aware of. Allow a little unhurried time afterwards; most people find the conversation raises questions of their own.']

  },
  {
    heading: 'If Panchakarma is not appropriate',
    paragraphs: [
    'Sometimes the outcome of a consultation is that a structured Panchakarma program is not the right step, or not the right step now. In that case the practitioner will say so and discuss what may be more suitable. Panchakarma is not suitable for everyone or at every stage of life.']

  }],

  factsLabel: 'Consultation at a glance',
  facts: [
  { label: 'Fee', value: '₹1,000' },
  { label: 'Format', value: 'In person at the centre' },
  { label: 'Outcome', value: 'Assessment and wellness recommendations' },
  { label: 'Required before', value: 'All Panchakarma programs' }],

  cta: {
    heading: 'Begin with a consultation',
    text: 'Share a few details and we will confirm an appointment time with you.',
    label: 'Book Ayurvedic Consultation',
    to: '/consultation'
  }
},
{
  slug: 'panchakarma-therapy',
  eyebrow: 'Nashik',
  h1: 'Panchakarma Therapy in Nashik',
  lede:
  'A phased, personalised Ayurvedic process — planned after assessment, paced deliberately, and reviewed as it progresses.',
  seoTitle: 'Panchakarma Therapy in Nashik | One Wellness Clinic & Research Center',
  seoDescription:
  'Personalised Panchakarma therapy in Nashik at One Wellness. Understand the phases, program durations, indicative pricing and why consultation comes first.',
  heroImage: img.hero,
  heroAlt: 'A traditional Ayurvedic therapy room with a carved wooden treatment table',
  sections: [
  {
    heading: 'How a Panchakarma program is planned here',
    paragraphs: [
    'The word Panchakarma refers to five traditional therapeutic procedures described in Ayurveda. Which of them — if any — are appropriate depends entirely on the individual, which is why the process at One Wellness always begins with consultation and assessment rather than with a package.',
    'Once a plan is agreed, the program is phased: preparation, the selected procedures, then rest and a graduated return to normal routine. Each phase is given its own time.']

  },
  {
    heading: 'Program durations',
    paragraphs: [
    'Longer is not automatically better; the appropriate length follows from the assessment.'],

    list: [
    '3-Day Ayurvedic Rejuvenation Experience — from ₹7,500',
    '7-Day Ayurvedic Wellness Retreat — from ₹18,000',
    '14-Day Panchakarma Wellness Program — from ₹40,000',
    '21-Day Complete Panchakarma Journey — from ₹65,000']

  },
  {
    heading: 'Planning a program around life in Nashik',
    paragraphs: [
    'Most of our visitors are working locally and arrive for therapy in the morning or evening. Shorter programs can be arranged around a working week with planning, though the longer ones are considerably better experienced with a genuinely lighter schedule. We will discuss this openly at consultation rather than promise you a fortnight that fits into a full calendar.']

  },
  {
    heading: 'Suitability and honesty about claims',
    paragraphs: [
    'We do not present Panchakarma as a treatment for disease. It is a traditional wellness process, and its suitability, selection and duration are determined by a qualified practitioner following consultation. Results and experiences vary between individuals.']

  }],

  factsLabel: 'Program at a glance',
  facts: [
  { label: 'Starts with', value: 'Consultation — ₹1,000' },
  { label: 'Durations', value: '3, 7, 14 and 21 days' },
  { label: 'Indicative from', value: '₹7,500' },
  { label: 'Phases', value: 'Prepare · Procedures · Rest · Follow-up' }],

  cta: {
    heading: 'Ask about a Panchakarma program',
    text: 'Tell us what you are looking for and we will explain which programs may suit.',
    label: 'Discover Panchakarma',
    to: '/panchakarma'
  }
},
{
  slug: 'shirodhara-therapy',
  eyebrow: 'Nashik',
  h1: 'Shirodhara Therapy in Nashik',
  lede:
  'One continuous stream, one steady temperature, held for a set period. A traditional Ayurvedic relaxation therapy, offered subject to assessment.',
  seoTitle: 'Shirodhara Therapy in Nashik | One Wellness Clinic & Research Center',
  seoDescription:
  'Traditional Shirodhara therapy in Nashik at One Wellness. What the therapy involves, session length, indicative pricing and how suitability is assessed.',
  heroImage: img.shirodhara,
  heroAlt: 'Warm oil streaming from a copper vessel onto the forehead during Shirodhara',
  sections: [
  {
    heading: 'What happens during a session',
    paragraphs: [
    'You lie on your back on a traditional wooden table with your head supported and eyes covered. A vessel suspended above the forehead releases a thin, continuous stream of warm liquid onto a fixed point while you remain still. A short oil application to the head and shoulders usually precedes the pouring.',
    'Height, temperature, flow rate and duration are each kept deliberately constant. That consistency is what characterises the therapy.']

  },
  {
    heading: 'How it is usually offered',
    paragraphs: [
    'Shirodhara is often included within rejuvenation and stress-focused wellness programs, where it follows oil therapy earlier in the day. It can also be experienced as a single session.'],

    list: [
    'Session length: 45–60 minutes including preparation',
    'Starting from ₹1,800',
    'Frequently combined with Abhyanga and Swedana within a program']

  },
  {
    heading: 'Afterwards',
    paragraphs: [
    'Oil is left in the hair for a period, with a warm shower later as advised. Plan a quiet remainder of the day where possible — many people feel notably settled and sleepy for some hours.']

  },
  {
    heading: 'Suitability',
    paragraphs: [
    'Shirodhara is not appropriate in every circumstance, and the liquid used is selected individually. Suitability is determined by a qualified practitioner following consultation.']

  }],

  factsLabel: 'Therapy at a glance',
  facts: [
  { label: 'Duration', value: '45–60 minutes' },
  { label: 'Starting from', value: '₹1,800' },
  { label: 'Often part of', value: 'Stress & relaxation programs' },
  { label: 'Requires', value: 'Assessment for suitability' }],

  cta: {
    heading: 'Enquire about Shirodhara',
    text: 'We will confirm suitability and availability with you.',
    label: 'View All Therapies',
    to: '/therapies'
  }
},
{
  slug: 'abhyanga-massage',
  eyebrow: 'Nashik',
  h1: 'Abhyanga Ayurvedic Massage in Nashik',
  lede:
  'Warm herbal oil, rhythmic directional strokes and an hour without hurry — the therapy most people meet Ayurveda through.',
  seoTitle: 'Abhyanga Ayurvedic Massage in Nashik | One Wellness Clinic & Research Center',
  seoDescription:
  'Traditional Abhyanga Ayurvedic oil massage in Nashik at One Wellness. What the therapy involves, how oils are selected, duration and indicative pricing.',
  heroImage: img.abhyanga,
  heroAlt: 'Warm herbal oil being applied during a traditional Abhyanga massage',
  sections: [
  {
    heading: 'The therapy itself',
    paragraphs: [
    'Warm herbal oil is applied over the body with rhythmic strokes that follow a considered direction. A session generally runs forty-five minutes to an hour, and is typically followed by herbal steam when it forms part of a wider plan.',
    'The oil is not incidental. Different medicated preparations are used for different individuals, seasons and intentions, and the selection is part of what makes the therapy Ayurvedic rather than simply pleasant.']

  },
  {
    heading: 'As a single session, or as part of a program',
    paragraphs: [
    'Many visitors in Nashik book Abhyanga on its own as a genuine hour of rest. Within a Panchakarma program it has a more specific role, usually within the preparatory phase, and is sequenced deliberately with other procedures.'],

    list: [
    'Duration: 45–60 minutes',
    'Starting from ₹1,500',
    'Commonly followed by Swedana within a program']

  },
  {
    heading: 'Practical notes',
    paragraphs: [
    'Wear or bring clothing you do not mind getting oil on, and allow time afterwards rather than rushing back into the day. Avoid a heavy meal immediately before your appointment.']

  },
  {
    heading: 'Suitability',
    paragraphs: [
    'Oil therapies are offered according to individual suitability. If you are pregnant, unwell, or have a specific medical condition, please mention it so the practitioner can advise appropriately.']

  }],

  factsLabel: 'Therapy at a glance',
  facts: [
  { label: 'Duration', value: '45–60 minutes' },
  { label: 'Starting from', value: '₹1,500' },
  { label: 'Often paired with', value: 'Swedana herbal steam' },
  { label: 'Oils', value: 'Selected individually' }],

  cta: {
    heading: 'Enquire about Abhyanga',
    text: 'Ask us about availability, or about how it fits within a program.',
    label: 'Enquire About Abhyanga',
    to: '/consultation'
  }
},
{
  slug: 'ayurvedic-rejuvenation',
  eyebrow: 'Nashik',
  h1: 'Ayurvedic Rejuvenation Programs in Nashik',
  lede:
  'Programs built around nourishment, restoration and routine — for people who want upkeep rather than intervention.',
  seoTitle: 'Ayurvedic Rejuvenation Programs in Nashik | One Wellness',
  seoDescription:
  'Ayurvedic rejuvenation programs in Nashik at One Wellness — weekend, seven-day, seasonal and post-Panchakarma options, planned after consultation.',
  heroImage: img.meditation,
  heroAlt: 'A person seated in quiet meditation in a calm, sunlit room',
  sections: [
  {
    heading: 'What rejuvenation means here',
    paragraphs: [
    'Ayurvedic rejuvenation is traditionally associated with practices that support nourishment, restoration and the maintenance of wellbeing. It is closer to upkeep than to repair, and it is as much about rest, food and routine as it is about therapy.',
    'Our rejuvenation programs combine Ayurvedic therapies with supportive nutrition, relaxation, lifestyle guidance and restorative routines. The therapies are the visible part; the routine is what carries the effect home with you.']

  },
  {
    heading: 'The programs we offer',
    paragraphs: ['Each is planned after consultation, and each can be adjusted in length.'],
    list: [
    'Weekend Rejuvenation — two unhurried days',
    '7-Day Rejuvenation — a full daily rhythm',
    'Stress & Relaxation Wellness Program',
    'Ayurvedic Body Care Program',
    'Post-Panchakarma Rejuvenation',
    'Seasonal Wellness Program']

  },
  {
    heading: 'Seasonal rejuvenation in Nashik',
    paragraphs: [
    'Nashik\'s distinct seasons make seasonal transitions a natural time for a rejuvenation program. Traditionally, the change between seasons receives particular attention, with food, activity and rest adjusted gradually. Many visitors choose to return at these points rather than at a fixed interval.']

  },
  {
    heading: 'Who tends to choose it',
    paragraphs: [
    'People coming out of a demanding period of work or travel, those who want a structured reset without a long program, and those completing Panchakarma who need a gentler phase afterwards.']

  }],

  factsLabel: 'Rejuvenation at a glance',
  facts: [
  { label: 'Shortest', value: 'Weekend program' },
  { label: 'Indicative from', value: '₹7,500' },
  { label: 'Includes', value: 'Therapy, nutrition, routine' },
  { label: 'Planned after', value: 'Consultation' }],

  cta: {
    heading: 'Explore rejuvenation',
    text: 'See the six rejuvenation experiences and what each involves.',
    label: 'Explore Programs',
    to: '/rejuvenation'
  }
},
{
  slug: 'ayurvedic-wellness-centre',
  eyebrow: 'Nashik',
  h1: 'Ayurvedic Wellness Centre in Nashik',
  lede:
  'The Panchakarma & Ayurvedic Wellness Division of One Wellness Clinic & Research Center — a calm, structured environment for traditional therapy.',
  seoTitle: 'Ayurvedic Wellness Centre in Nashik | One Wellness Clinic & Research Center',
  seoDescription:
  'One Wellness is an Ayurvedic wellness centre in Nashik offering Panchakarma, traditional therapies, rejuvenation programs and Ayurvedic consultation.',
  heroImage: img.treatmentRoom,
  heroAlt: 'A calm contemporary Ayurvedic treatment room with natural light',
  sections: [
  {
    heading: 'What the centre is',
    paragraphs: [
    'One Wellness Clinic & Research Center brings together a broader vision of holistic wellbeing. Its Panchakarma & Ayurvedic Wellness Division is dedicated to creating a personalised environment where traditional Ayurvedic therapies can be experienced with appropriate consultation, structured planning and attentive care.',
    'The spaces are designed for calm rather than clinical efficiency: natural materials, warm light, quiet rooms and enough separation between appointments that nothing feels rushed.']

  },
  {
    heading: 'What is available',
    paragraphs: ['Everything begins with consultation; the rest follows from it.'],
    list: [
    'Ayurvedic wellness consultation and assessment',
    'Traditional therapies including Abhyanga, Shirodhara, Swedana and localised oil therapies',
    'Structured Panchakarma programs from three to twenty-one days',
    'Rejuvenation and seasonal wellness programs',
    'Diet, daily-routine and lifestyle guidance']

  },
  {
    heading: 'Visiting us',
    paragraphs: [
    'Appointments are preferred so that the room, therapists and preparations can be readied for you. Contact details, directions and working hours are listed on our contact page, and our team can answer questions about programs and availability over WhatsApp.']

  },
  {
    heading: 'Our clinical team',
    paragraphs: [
    'Ayurvedic therapy at One Wellness is delivered under the guidance of a qualified Ayurvedic practitioner. Practitioner details, including qualification and registration, are published on our About page and updated as the clinical team is confirmed.']

  }],

  factsLabel: 'The centre at a glance',
  facts: [
  { label: 'Division', value: 'Panchakarma & Ayurvedic Wellness' },
  { label: 'Location', value: 'Nashik, Maharashtra' },
  { label: 'Consultation', value: '₹1,000' },
  { label: 'Appointments', value: 'Preferred in advance' }],

  cta: {
    heading: 'Plan your visit',
    text: 'Find contact details, working hours and directions, or send us an enquiry.',
    label: 'Contact One Wellness',
    to: '/contact'
  }
}];


export const getLocalPage = (slug: string): LocalPage | undefined =>
localPages.find((p) => p.slug === slug);