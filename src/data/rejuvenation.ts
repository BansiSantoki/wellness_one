import { img } from './images';

export interface RejuvenationExperience {
  name: string;
  description: string;
  image: string;
  alt: string;
}

export const rejuvenationExperiences: RejuvenationExperience[] = [
{
  name: 'Weekend Rejuvenation',
  description: 'Two unhurried days of oil therapy, steam and rest.',
  image: img.oilPreparation,
  alt: 'Warm Ayurvedic herbal oil being poured from a brass vessel'
},
{
  name: '7-Day Rejuvenation',
  description: 'A full week with a daily rhythm of therapy, nutrition and quiet.',
  image: img.treatmentRoom,
  alt: 'A calm treatment room prepared for a week of Ayurvedic therapy'
},
{
  name: 'Stress & Relaxation Wellness Program',
  description: 'Built around calming therapies such as Shirodhara and guided rest.',
  image: img.shirodhara,
  alt: 'Shirodhara therapy in a dimly lit traditional therapy room'
},
{
  name: 'Ayurvedic Body Care Program',
  description: 'Herbal powder and oil therapies focused on skin and body care.',
  image: img.udwarthana,
  alt: 'Ayurvedic herbal powder prepared in a clay bowl for body care therapy'
},
{
  name: 'Post-Panchakarma Rejuvenation',
  description: 'Gentle nourishment and routine-building after a Panchakarma program.',
  image: img.meditation,
  alt: 'A person seated in quiet meditation in a calm sunlit room'
},
{
  name: 'Seasonal Wellness Program',
  description: 'Adjusted to the season, following traditional Ritucharya guidance.',
  image: img.nature,
  alt: 'Green herbal leaves floating on still water at dawn'
}];


export const rejuvenationFormula = [
'Ayurvedic Therapies',
'Supportive Nutrition',
'Relaxation',
'Lifestyle Guidance',
'Restorative Routines'];


export const lifestyleAreas = [
'Daily routine',
'Food habits',
'Sleep routine',
'Physical activity',
'Relaxation',
'Mindfulness',
'Seasonal wellness',
'Self-care'];


export const dietGuidanceAreas = [
'Meal timing',
'Food choices',
'Hydration',
'Seasonal eating',
'Daily routine',
'Sleep',
'Activity',
'Relaxation'];


export const enquiryReasons = [
'General wellness',
'Rejuvenation',
'Relaxation',
'Lifestyle reset',
'Ayurvedic preventive wellness',
'Seasonal wellness routines',
'Post-stress recovery',
'Traditional Ayurvedic care'];