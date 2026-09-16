export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export const panchakarmaJourney: JourneyStep[] = [
{
  number: '01',
  title: 'Ayurvedic Consultation',
  description:
  'We begin by understanding your concerns, lifestyle, dietary habits, daily routine and overall wellness goals.'
},
{
  number: '02',
  title: 'Individual Assessment',
  description:
  'The Ayurvedic practitioner determines an appropriate wellness and therapy plan based on the consultation.'
},
{
  number: '03',
  title: 'Preparation',
  description:
  'Depending on the selected program, preparatory Ayurvedic procedures may be recommended before the main therapies.'
},
{
  number: '04',
  title: 'Panchakarma Therapies',
  description:
  "Selected therapies are provided according to the individual's requirements and suitability."
},
{
  number: '05',
  title: 'Rest & Rejuvenation',
  description:
  'Adequate rest, supportive nutrition and appropriate post-therapy routines form an important part of the wellness journey.'
},
{
  number: '06',
  title: 'Follow-Up',
  description:
  'Your journey does not end when the therapy ends. We provide guidance for maintaining supportive lifestyle practices.'
}];


export interface PhilosophyStage {
  word: string;
  caption: string;
}

export const philosophyStages: PhilosophyStage[] = [
{ word: 'Understand', caption: 'A conversation before a prescription.' },
{ word: 'Personalise', caption: 'A plan shaped around one person.' },
{ word: 'Experience', caption: 'Traditional therapy, attentively given.' },
{ word: 'Rejuvenate', caption: 'Rest treated as part of the work.' },
{ word: 'Maintain', caption: 'Routines you can realistically keep.' }];


export interface TrustPoint {
  title: string;
  description: string;
}

export const trustPoints: TrustPoint[] = [
{
  title: 'Traditional Ayurveda',
  description: 'Authentic Ayurvedic principles with an individualised approach.'
},
{
  title: 'Personalised Care',
  description: 'Your wellness journey begins with understanding your individual needs.'
},
{
  title: 'Panchakarma Therapies',
  description: 'Structured Ayurvedic therapy programs planned according to your consultation.'
},
{
  title: 'Holistic Wellness',
  description:
  'A broader approach incorporating lifestyle, nutrition, relaxation and rejuvenation.'
}];


export const whyOneWellness: TrustPoint[] = [
{
  title: 'Personalised Approach',
  description: "We don't believe every individual needs the same therapy."
},
{
  title: 'Traditional Foundation',
  description: 'Our programs are inspired by traditional Ayurvedic principles.'
},
{
  title: 'Structured Programs',
  description: 'From consultation to follow-up, your wellness journey follows a planned process.'
},
{
  title: 'Comfortable Environment',
  description: 'A calm environment designed to support relaxation and wellbeing.'
},
{
  title: 'Holistic Perspective',
  description: 'We consider therapies alongside lifestyle, nutrition, rest and daily routines.'
},
{
  title: 'Long-Term Wellness',
  description:
  'The aim is to encourage sustainable wellness practices—not just a one-time experience.'
}];