import { img } from './images';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
{
  slug: 'panchakarma-treatment-nashik-complete-guide',
  title: 'Panchakarma Treatment in Nashik: Complete Guide',
  category: 'Guides',
  readTime: '9 min read',
  date: 'August 2026',
  excerpt:
  'What Panchakarma actually involves, how a program is planned, what it may cost and the questions worth asking before you book anything in Nashik.',
  image: img.hero,
  alt: 'A traditional Ayurvedic therapy room with warm evening light',
  featured: true
},
{
  slug: 'what-is-panchakarma-and-how-does-it-work',
  title: 'What Is Panchakarma and How Does It Work?',
  category: 'Fundamentals',
  readTime: '7 min read',
  date: 'August 2026',
  excerpt:
  'The word refers to five traditional procedures — but the idea behind them is simpler than the vocabulary suggests.',
  image: img.herbsDetail,
  alt: 'Traditional Ayurvedic herbs and powders arranged on stone',
  featured: true
},
{
  slug: 'panchakarma-therapy-what-to-expect',
  title: 'Panchakarma Therapy: What to Expect During Your Journey',
  category: 'Experience',
  readTime: '6 min read',
  date: 'July 2026',
  excerpt:
  'From the first consultation to the days after your last therapy — an honest account of the rhythm of a program.',
  image: img.treatmentRoom,
  alt: 'A calm treatment room prepared for Ayurvedic therapy',
  featured: true
},
{
  slug: 'how-much-does-panchakarma-cost-in-nashik',
  title: 'How Much Does Panchakarma Cost in Nashik?',
  category: 'Practical',
  readTime: '5 min read',
  date: 'July 2026',
  excerpt: 'Why Panchakarma is rarely priced as a single package, and what actually drives the figure.',
  image: img.oilPreparation,
  alt: 'Herbal oil being poured from a brass vessel'
},
{
  slug: 'how-to-choose-a-panchakarma-centre-in-nashik',
  title: 'How to Choose a Panchakarma Centre in Nashik',
  category: 'Practical',
  readTime: '6 min read',
  date: 'July 2026',
  excerpt: 'Seven questions that tell you more about a centre than any brochure will.',
  image: img.interiorDetail,
  alt: 'Sunlight falling across a lime-plaster wall and carved teak screen'
},
{
  slug: 'ayurvedic-rejuvenation-therapy-nashik',
  title: 'Ayurvedic Rejuvenation Therapy in Nashik',
  category: 'Therapies',
  readTime: '5 min read',
  date: 'June 2026',
  excerpt: 'What rejuvenation means in the traditional sense — and what it does not mean.',
  image: img.meditation,
  alt: 'A person seated in quiet meditation in a sunlit room'
},
{
  slug: 'abhyanga-massage-traditional-ayurvedic-oil-therapy',
  title: 'Abhyanga Massage: Traditional Ayurvedic Oil Therapy',
  category: 'Therapies',
  readTime: '5 min read',
  date: 'June 2026',
  excerpt: 'Why the oil is warmed, why the strokes follow a direction, and why it is rarely offered alone.',
  image: img.abhyanga,
  alt: 'Warm oil applied during a traditional Abhyanga massage',
  featured: true
},
{
  slug: 'what-is-shirodhara',
  title: 'What Is Shirodhara?',
  category: 'Therapies',
  readTime: '4 min read',
  date: 'June 2026',
  excerpt: 'A single continuous stream, a fixed height, a steady temperature. The simplicity is the point.',
  image: img.shirodhara,
  alt: 'Oil streaming onto the forehead during Shirodhara therapy'
},
{
  slug: 'shirodhara-therapy-what-to-expect',
  title: 'Shirodhara Therapy in Ayurveda: What to Expect',
  category: 'Experience',
  readTime: '4 min read',
  date: 'May 2026',
  excerpt: 'How the session is set up, how long it lasts and what the hours afterwards usually feel like.',
  image: img.nasya,
  alt: 'Brass vessel and medicated oil prepared for therapy'
},
{
  slug: 'ayurvedic-therapies-for-modern-lifestyle-wellness',
  title: 'Ayurvedic Therapies for Modern Lifestyle Wellness',
  category: 'Modern Living',
  readTime: '6 min read',
  date: 'May 2026',
  excerpt: 'Irregular meals, late nights and screen fatigue are modern problems. The response can still be traditional.',
  image: img.lifestyle,
  alt: 'A woman with herbal tea by a sunlit window in a calm home'
},
{
  slug: 'panchakarma-preparation-what-should-you-know',
  title: 'Panchakarma Preparation: What Should You Know?',
  category: 'Guides',
  readTime: '5 min read',
  date: 'May 2026',
  excerpt: 'Preparation is not a formality before the therapy. Traditionally, it is part of the therapy.',
  image: img.swedana,
  alt: 'Herbal steam rising from a traditional wooden steam chamber'
},
{
  slug: 'what-to-eat-during-an-ayurvedic-wellness-program',
  title: 'What to Eat During an Ayurvedic Wellness Program',
  category: 'Diet & Routine',
  readTime: '5 min read',
  date: 'April 2026',
  excerpt: 'Simple, warm, timely. Why Ayurvedic dietary guidance tends to be less restrictive than people expect.',
  image: img.food,
  alt: 'A simple sattvic Ayurvedic meal served on a brass thali',
  featured: true
},
{
  slug: 'panchakarma-aftercare',
  title: 'Panchakarma Aftercare: Supporting Your Wellness Routine',
  category: 'Guides',
  readTime: '5 min read',
  date: 'April 2026',
  excerpt: 'The days after a program shape how much of it stays with you.',
  image: img.pindasweda,
  alt: 'Herbal poultice bundles beside loose Ayurvedic herbs'
},
{
  slug: 'ayurvedic-daily-routine-dinacharya',
  title: 'Ayurvedic Daily Routine: Understanding Dinacharya',
  category: 'Diet & Routine',
  readTime: '6 min read',
  date: 'March 2026',
  excerpt: 'A traditional day, read as a sequence of small decisions rather than a set of rules.',
  image: img.interiorDetail,
  alt: 'Morning light across a plastered wall and terracotta floor'
},
{
  slug: 'ayurveda-and-seasonal-wellness',
  title: 'Ayurveda and Seasonal Wellness',
  category: 'Diet & Routine',
  readTime: '5 min read',
  date: 'March 2026',
  excerpt: 'Ritucharya: the idea that a routine worth keeping changes with the weather.',
  image: img.nature,
  alt: 'Green leaves floating on still dark water'
},
{
  slug: 'traditional-ayurvedic-rejuvenation-practices',
  title: 'Traditional Ayurvedic Rejuvenation Practices',
  category: 'Fundamentals',
  readTime: '5 min read',
  date: 'February 2026',
  excerpt: 'Rasayana, in classical texts, is as much about conduct and rest as about preparations.',
  image: img.retreat,
  alt: 'A wellness retreat exterior at dusk with a reflecting pool'
},
{
  slug: 'panchakarma-vs-ayurvedic-massage',
  title: 'Panchakarma vs Ayurvedic Massage: Understanding the Difference',
  category: 'Fundamentals',
  readTime: '4 min read',
  date: 'February 2026',
  excerpt: 'One is a single therapy. The other is a planned process. The distinction matters when you book.',
  image: img.pizhichil,
  alt: 'Warm oil poured during a traditional Ayurvedic therapy'
},
{
  slug: '7-day-ayurvedic-wellness-program-inclusions',
  title: '7-Day Ayurvedic Wellness Program: What Does It Include?',
  category: 'Programs',
  readTime: '5 min read',
  date: 'January 2026',
  excerpt: 'How a week is usually structured, and why the schedule is confirmed only after consultation.',
  image: img.katiBasti,
  alt: 'Warm oil retained during a localised Ayurvedic therapy'
},
{
  slug: '14-day-panchakarma-program-what-to-expect',
  title: '14-Day Panchakarma Program: What to Expect',
  category: 'Programs',
  readTime: '6 min read',
  date: 'January 2026',
  excerpt: 'Two weeks allows preparation, therapy and rest to each take their traditional place.',
  image: img.januBasti,
  alt: 'A knee-focused Ayurvedic oil therapy in progress'
},
{
  slug: 'frequently-asked-questions-about-panchakarma',
  title: 'Frequently Asked Questions About Panchakarma',
  category: 'Guides',
  readTime: '7 min read',
  date: 'January 2026',
  excerpt: 'The questions we are asked most often, answered plainly and without overstatement.',
  image: img.consultation,
  alt: 'An Ayurvedic consultation in progress in a calm room'
}];


export const blogCategories = [
'All',
'Guides',
'Fundamentals',
'Therapies',
'Experience',
'Programs',
'Diet & Routine',
'Modern Living',
'Practical'];


export const featuredPosts = blogPosts.filter((p) => p.featured);