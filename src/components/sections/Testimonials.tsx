import React, { useState } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { Reveal } from '../ui/Reveal';
import { CarouselDots } from '../ui/CarouselDots';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  context?: string;
}

export const sampleTestimonials: Testimonial[] = [
  {
    quote: "The Panchakarma program at One Wellness was a deeply transformative experience. The doctor's attention to detail and authentic Ayurvedic therapies brought genuine balance to my life.",
    name: "Rajesh K.",
    context: "Panchakarma Wellness Program, Nashik"
  },
  {
    quote: "Abhyanga and Shirodhara sessions here are serene and deeply restorative. The clinical atmosphere combined with traditional warmth makes it the finest Ayurvedic center in Nashik.",
    name: "Dr. Meera S.",
    context: "Ayurvedic Rejuvenation Patient"
  },
  {
    quote: "I appreciated how every therapy was chosen after thorough consultation rather than a generic package. Highly recommend One Wellness Clinic for holistic healing.",
    name: "Amitabh V.",
    context: "Stress Relief & Wellness Journey"
  }
];

interface TestimonialsProps {
  items?: Testimonial[];
  heading?: string;
}

export function Testimonials({ items = sampleTestimonials, heading = 'In Their Own Words' }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section aria-labelledby="testimonials-heading" className="bg-[#FCFAF4] border-t border-[#E8DFCC]">
      <div className="mx-auto max-w-edge px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <SectionLabel>Experiences</SectionLabel>
        <h2
          id="testimonials-heading"
          className="mt-6 max-w-2xl font-serif text-[2.2rem] font-light leading-[1.1] text-[#102A20] sm:text-[2.8rem]"
        >
          {heading}
        </h2>

        {/* Carousel Slider Display */}
        <div className="mt-12 relative max-w-4xl mx-auto bg-[#F6F1E6] p-8 sm:p-12 border border-[#E8DFCC]">
          <Reveal key={activeIndex}>
            <blockquote className="flex flex-col items-center text-center">
              <p className="font-serif text-[1.45rem] sm:text-[1.8rem] font-light italic leading-relaxed text-[#102A20]">
                “{items[activeIndex].quote}”
              </p>
              <footer className="mt-6 text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#B08D4F]">
                {items[activeIndex].name}
                {items[activeIndex].context ? ` — ${items[activeIndex].context}` : ''}
              </footer>
            </blockquote>
          </Reveal>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 border border-[#E8DFCC] text-[#102A20] hover:bg-[#102A20] hover:text-white transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            {/* Gray Slider Indicators */}
            <CarouselDots
              total={items.length}
              current={activeIndex}
              onChange={setActiveIndex}
            />

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 border border-[#E8DFCC] text-[#102A20] hover:bg-[#102A20] hover:text-white transition-colors"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}