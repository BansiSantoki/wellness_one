export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  pullquote?: string;
}

/**
 * Article bodies, keyed by slug. Kept separate from the post index so new
 * articles can be added — or later loaded from a CMS — without touching the listing.
 */
export const blogContent: Record<string, ArticleSection[]> = {
  'panchakarma-treatment-nashik-complete-guide': [
  {
    paragraphs: [
    'Most people who enquire about Panchakarma have heard the word long before they understand the process. It is often described as a detox, sometimes as a massage package, occasionally as a cure. Traditionally it is none of those things: it is a planned sequence of procedures, chosen for one person, after that person has been assessed.',
    'This guide sets out what the process generally involves, how a program is put together, and what is reasonable to expect if you are considering Panchakarma in Nashik.']

  },
  {
    heading: 'It begins with a consultation, not a booking',
    paragraphs: [
    'A consultation is where your routine, digestion, sleep, work pattern and concerns are discussed. Only afterwards can a practitioner say which procedures — if any — are appropriate, and for how long.',
    'If a centre is willing to sell you a fixed Panchakarma package before assessing you, that is worth noticing.'],

    pullquote: 'Panchakarma is not a one-size-fits-all package.'
  },
  {
    heading: 'The shape of a program',
    paragraphs: [
    'Programs are usually phased. Preparation comes first, often involving oil application and herbal steam. The main procedures follow, selected individually. Rest, supportive nutrition and a gradual return to normal routine complete the process.'],

    list: [
    'Consultation and assessment',
    'Preparatory procedures',
    'Selected Panchakarma procedures',
    'Rest and supportive nutrition',
    'Follow-up guidance']

  },
  {
    heading: 'What to ask before you commit',
    paragraphs: [
    'Ask who will assess you and what their qualification is. Ask whether the schedule can change after assessment. Ask what is included in the quoted figure and what is billed separately. Clear answers to those three questions tell you most of what you need to know.']

  }],

  'what-is-panchakarma-and-how-does-it-work': [
  {
    paragraphs: [
    'Pancha means five; karma means action. The word refers to five traditional therapeutic procedures described in classical Ayurvedic literature. In practice, very few people receive all five.',
    'The underlying idea is straightforward: before the body can be nourished, whatever is obstructing that nourishment is addressed — and both steps are approached gradually, with preparation before and rest after.']

  },
  {
    heading: 'Why selection matters more than the list',
    paragraphs: [
    'Because the five procedures act differently, the choice depends on the individual: their constitution, their current state, their age, their routine and their capacity to undergo a procedure at all. This is why two people described as having the same complaint may be advised entirely different programs.'],

    pullquote: 'The selection of procedures is not the same for every person.'
  },
  {
    heading: 'What it is not',
    paragraphs: [
    'Panchakarma is not a substitute for medical care, and it is not appropriate for everyone or at every stage of life. A qualified practitioner should determine whether a particular procedure is suitable for you.']

  }],

  'panchakarma-therapy-what-to-expect': [
  {
    paragraphs: [
    'The first thing most people notice is the pace. A Panchakarma day is unhurried by design — therapy, rest, a simple meal, more rest. The schedule is deliberately light because rest is considered part of the process rather than a gap between appointments.']

  },
  {
    heading: 'The early days',
    paragraphs: [
    'Preparation usually feels pleasant: warm oil, herbal steam, an early bedtime, simpler food. Some people feel unusually sleepy in this phase. That is commonly reported and worth mentioning to your practitioner.']

  },
  {
    heading: 'The main procedures',
    paragraphs: [
    'These are shorter than people expect and are always explained beforehand. Your practitioner should describe the procedure, the sensations you may notice and the after-care before anything begins. If that explanation is not offered, ask for it.']

  },
  {
    heading: 'Afterwards',
    paragraphs: [
    'The days following the last therapy matter. Food is reintroduced gradually, activity resumes gently, and you are given guidance for maintaining routine at home. Most people describe the effect as settling in over a week or two rather than arriving at once.']

  }],

  'how-much-does-panchakarma-cost-in-nashik': [
  {
    paragraphs: [
    'There is no single price for Panchakarma, and any centre quoting one before assessing you is quoting a package rather than a program. Cost follows from duration, the procedures selected, and the materials those procedures require.']

  },
  {
    heading: 'What drives the figure',
    paragraphs: ['Four variables account for most of the difference between one quotation and another.'],
    list: [
    'Length of the program — three days behaves very differently from twenty-one',
    'Which procedures are selected after assessment',
    'Medicated oils and preparations used, which vary considerably in cost',
    'Whether accommodation, meals or medicines are included or billed separately']

  },
  {
    heading: 'Indicative ranges',
    paragraphs: [
    'At One Wellness, an Ayurvedic consultation is ₹1,000. Short wellness experiences start from ₹7,500, a seven-day retreat from ₹18,000, and longer structured Panchakarma programs from ₹40,000. These are starting figures; the final plan is confirmed only after consultation.']

  }],

  'how-to-choose-a-panchakarma-centre-in-nashik': [
  {
    paragraphs: [
    'Photography tells you about a centre\'s taste, not its practice. These are the questions that tell you about the practice.'],

    list: [
    'Who will assess me, and what is their qualification and registration?',
    'Will my program be decided before or after that assessment?',
    'How many therapies will I have in a day, and how much rest is scheduled?',
    'Who performs the therapies, and how are they trained?',
    'What is included in the quoted cost, and what is additional?',
    'What happens if a procedure turns out to be unsuitable for me?',
    'What guidance is given for after the program ends?']

  },
  {
    heading: 'Two answers worth listening for',
    paragraphs: [
    'A good centre will tell you honestly that Panchakarma may not be right for you, and will describe results in careful rather than absolute terms. Certainty about outcomes is the least reliable signal in this field.'],

    pullquote: 'Consultation is important — and a centre that insists on it is telling you something good.'
  }],

  'ayurvedic-rejuvenation-therapy-nashik': [
  {
    paragraphs: [
    'Rejuvenation, in the traditional sense, describes practices that support nourishment, restoration and the maintenance of wellbeing. It is closer to upkeep than to repair.']

  },
  {
    heading: 'What a rejuvenation program usually involves',
    paragraphs: [
    'Oil therapies such as Abhyanga, supportive procedures such as Swedana, calming therapies such as Shirodhara, alongside simple food, adequate sleep and a slower daily rhythm. The therapies are the visible part; the routine is what carries the effect.']

  },
  {
    heading: 'Who tends to ask for it',
    paragraphs: [
    'Commonly, people coming out of a demanding period of work or travel, people who want a structured reset, and people completing a Panchakarma program who need a gentler phase afterwards.']

  }],

  'abhyanga-massage-traditional-ayurvedic-oil-therapy': [
  {
    paragraphs: [
    'Abhyanga is the therapy most people encounter first. Warm herbal oil is applied over the body with rhythmic, directional strokes, usually by one or two therapists, for forty-five minutes to an hour.']

  },
  {
    heading: 'Why warm, and why directional',
    paragraphs: [
    'The oil is warmed because temperature affects how it is received by the skin, and the strokes follow a considered direction rather than a random one. The oil itself is selected — different preparations are used for different individuals and seasons.']

  },
  {
    heading: 'Rarely offered alone',
    paragraphs: [
    'Within a program, Abhyanga is usually followed by Swedana, and often forms part of the preparatory phase before other procedures. As a standalone therapy it is genuinely restful; as part of a plan it is doing something more specific.']

  }],

  'what-is-shirodhara': [
  {
    paragraphs: [
    'A vessel is suspended above the forehead. A thin, continuous stream of warm liquid — commonly medicated oil — is poured onto a fixed point for a set period while you lie still. That is the whole of it.']

  },
  {
    heading: 'The variables that matter',
    paragraphs: [
    'Height of the vessel, temperature of the liquid, rate of flow and duration. Each is held steady deliberately. The simplicity and consistency are what make the therapy what it is.'],

    pullquote: 'One stream, one height, one temperature, held steady.'
  },
  {
    heading: 'Suitability',
    paragraphs: [
    'Shirodhara is offered subject to assessment. It is not appropriate in every circumstance, and the liquid used is selected individually.']

  }],

  'shirodhara-therapy-what-to-expect': [
  {
    paragraphs: [
    'You lie on your back on a wooden table, head supported, eyes covered with a soft cloth. The room is usually dim and quiet. A short oil application to the head and shoulders often precedes the pouring.']

  },
  {
    heading: 'During the session',
    paragraphs: [
    'Most people describe the first minutes as unusual and the remainder as deeply settling. Many fall asleep. The session typically runs forty-five minutes to an hour, including preparation and settling time.']

  },
  {
    heading: 'Afterwards',
    paragraphs: [
    'Oil is left on the hair for a period, and a warm shower follows later as advised. Plan a quiet rest of the day if you can — driving straight into a demanding evening rather defeats the purpose.']

  }],

  'ayurvedic-therapies-for-modern-lifestyle-wellness': [
  {
    paragraphs: [
    'Long working hours, irregular meals, prolonged screen exposure, travel, inadequate rest and constant mental demands are modern conditions. They still express themselves in very ordinary ways: poor sleep, unreliable digestion, low energy, a sense of never quite switching off.']

  },
  {
    heading: 'Where traditional practice fits',
    paragraphs: [
    'Ayurveda\'s attention to routine, timing and season translates unusually well to these problems, because they are largely problems of rhythm. Therapy provides a reset; routine is what holds it.'],

    pullquote: 'Not to change your entire life overnight — to create routines you can realistically maintain.'
  },
  {
    heading: 'A realistic starting point',
    paragraphs: [
    'One consistent mealtime. One consistent bedtime. One unhurried therapy a week rather than six in a fortnight. Small, repeatable changes outperform ambitious ones almost every time.']

  }],

  'panchakarma-preparation-what-should-you-know': [
  {
    paragraphs: [
    'In classical practice, preparation is not a formality before the therapy — it is part of the therapy. Skipping it changes the nature of what follows.']

  },
  {
    heading: 'What preparation may involve',
    paragraphs: [
    'Depending on the program, internal and external oil application, herbal steam, simplified food, earlier nights and reduced activity. Your practitioner will advise what applies to you.'],

    list: ['Oil application, internal and external as advised', 'Herbal steam therapy', 'Simplified, warm, timely meals', 'Earlier sleep and reduced strenuous activity']
  },
  {
    heading: 'Practical arrangements',
    paragraphs: [
    'Clear your calendar more than you think you need to. Arrange light work, simple food at home and a quiet evening routine. People who plan for rest have a noticeably better experience than those who fit a program around a full schedule.']

  }],

  'what-to-eat-during-an-ayurvedic-wellness-program': [
  {
    paragraphs: [
    'Dietary guidance during a program is usually less restrictive than people expect and more specific about timing than about ingredients. Warm, simple, freshly prepared food eaten at consistent times covers most of it.']

  },
  {
    heading: 'Commonly advised',
    paragraphs: ['General guidance during a wellness program often touches these areas.'],
    list: ['Warm, freshly cooked, easily digestible meals', 'Consistent meal timing, with the main meal at midday', 'Warm water through the day', 'Reduced cold, heavy and highly processed food', 'Eating without screens, and stopping before fullness']
  },
  {
    heading: 'An important caveat',
    paragraphs: [
    'Individual dietary recommendations should be discussed with the qualified practitioner. General guidance is a starting point, not a prescription — particularly if you have existing medical conditions or dietary requirements.']

  }],

  'panchakarma-aftercare': [
  {
    paragraphs: [
    'Your journey does not end when the therapy ends. The period afterwards is when the routine either takes hold or quietly disappears.']

  },
  {
    heading: 'The first week',
    paragraphs: [
    'Food is reintroduced gradually rather than all at once. Activity resumes gently. Sleep is protected. Most guidance in this phase is about doing less, not more.']

  },
  {
    heading: 'The following months',
    paragraphs: [
    'This is where a follow-up consultation earns its place: reviewing what held, what did not, and adjusting the routine to something sustainable. One or two practices kept for a year are worth more than a dozen kept for a week.']

  }],

  'ayurvedic-daily-routine-dinacharya': [
  {
    paragraphs: [
    'Dinacharya describes a traditional daily routine — waking, cleansing, eating, working, resting and sleeping at broadly consistent times, adjusted for the individual and the season.']

  },
  {
    heading: 'Read it as a sequence, not a rulebook',
    paragraphs: [
    'The classical descriptions are detailed, and attempting all of them at once is the surest way to abandon the whole thing. The underlying principle is consistency: the body responds to a predictable day.']

  },
  {
    heading: 'Where most people start',
    paragraphs: ['If you adopt only three things, these are commonly the most useful.'],
    list: ['A consistent wake time, including on weekends', 'The main meal at midday rather than late at night', 'A wind-down period without screens before sleep']
  }],

  'ayurveda-and-seasonal-wellness': [
  {
    paragraphs: [
    'Ritucharya is the seasonal counterpart to daily routine: the idea that what supports you in one season may not in another, and that routines should be adjusted rather than fixed.']

  },
  {
    heading: 'Seasonal transitions',
    paragraphs: [
    'Traditionally, the period between seasons receives particular attention — food, activity and rest are adjusted gradually rather than abruptly. Many people find that seasonal changes are when their routine slips, which makes it a useful moment for a consultation.']

  },
  {
    heading: 'In practice',
    paragraphs: [
    'Lighter, warmer food in one season; more hydration and rest in another; adjusted exercise timing through the year. A seasonal wellness program simply formalises this attention.']

  }],

  'traditional-ayurvedic-rejuvenation-practices': [
  {
    paragraphs: [
    'Rasayana is the classical term associated with rejuvenation. It is often reduced to a category of preparations, but the traditional descriptions give equal weight to conduct, rest, speech, sleep and diet.']

  },
  {
    heading: 'Conduct as part of the practice',
    paragraphs: [
    'Classical texts describe behavioural rejuvenation alongside material rejuvenation — a reminder that the tradition never treated wellbeing as something applied from the outside only.'],

    pullquote: 'Rest, in this tradition, is not the absence of therapy. It is therapy.'
  },
  {
    heading: 'Its modern form',
    paragraphs: [
    'A contemporary rejuvenation program keeps this structure: therapy, nutrition, relaxation, guidance and restorative routine, arranged so that they support each other.']

  }],

  'panchakarma-vs-ayurvedic-massage': [
  {
    paragraphs: [
    'An Ayurvedic massage is a single therapy. Panchakarma is a planned process in which therapies — massage often among them — are sequenced around preparation and rest.']

  },
  {
    heading: 'Why the distinction matters when booking',
    paragraphs: [
    'If you want an hour of genuine rest, an Abhyanga session is exactly the right thing to book. If you are looking for a structured program, that begins with a consultation, and the therapies are decided afterwards.']

  },
  {
    heading: 'They are not alternatives',
    paragraphs: [
    'Most Panchakarma programs include massage therapies. The difference is not the technique but the planning around it.']

  }],

  '7-day-ayurvedic-wellness-program-inclusions': [
  {
    paragraphs: [
    'A week is long enough for a routine to establish itself — which is why seven days is a common starting point for people who want more than a short experience.']

  },
  {
    heading: 'How a week is usually structured',
    paragraphs: [
    'Consultation and assessment at the start, a personalised therapy schedule through the week, dietary and daily-routine guidance alongside it, and a progress review before you leave.'],

    list: ['Ayurvedic consultation', 'Personalised therapy schedule', 'Abhyanga, Swedana and Shirodhara as advised', 'Selected Ayurvedic procedures', 'Dietary guidance and daily wellness routine', 'Progress review']
  },
  {
    heading: 'Why the schedule is confirmed late',
    paragraphs: [
    'The therapies listed are indicative. The actual sequence is confirmed after assessment, and may be adjusted during the week based on how you are responding.']

  }],

  '14-day-panchakarma-program-what-to-expect': [
  {
    paragraphs: [
    'Fourteen days allows each phase of the traditional process its own time rather than compressing them. That, more than the number of therapies, is what distinguishes it from a shorter program.']

  },
  {
    heading: 'The phases',
    paragraphs: ['Broadly, a two-week program moves through the following stages.'],
    list: ['Consultation and detailed assessment', 'Preparation', 'Selected Panchakarma procedures', 'Rest', 'Rejuvenation', 'Follow-up guidance']
  },
  {
    heading: 'Planning your fortnight',
    paragraphs: [
    'Expect a light schedule and plan for genuine rest. The exact therapies and duration are determined individually, and the plan may be revised as the program progresses.']

  }],

  'frequently-asked-questions-about-panchakarma': [
  {
    paragraphs: [
    'These are the questions we are asked most often, answered as plainly as we can and without overstating what a traditional practice can offer.']

  },
  {
    heading: 'Is it a detox?',
    paragraphs: [
    '"Detox" is a modern word applied to a traditional process, and it tends to promise more than it should. Panchakarma is better described as a planned, phased Ayurvedic process selected according to individual suitability.']

  },
  {
    heading: 'Will it cure my condition?',
    paragraphs: [
    'We do not make disease-treatment claims. Panchakarma and Ayurvedic therapies are traditional wellness practices; they are not a substitute for medical advice, diagnosis or treatment, and results and experiences vary.']

  },
  {
    heading: 'Can I do it while working?',
    paragraphs: [
    'Shorter programs can be arranged around work with planning. Longer programs are considerably better experienced with a genuinely lighter schedule — this is worth discussing honestly at consultation.']

  }]

};