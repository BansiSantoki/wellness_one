import React from 'react';

interface CarouselDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
  className?: string;
}

export function CarouselDots({ total, current, onChange, className = '' }: CarouselDotsProps) {
  if (total <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2.5 py-4 ${className}`}>
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              isActive
                ? 'w-6 h-2.5 bg-[#5F5F5F] border border-[#3A3A3A]'
                : 'w-2.5 h-2.5 bg-[#9A9A9A] hover:bg-[#5F5F5F] border border-[#808080]'
            }`}
          />
        );
      })}
    </div>
  );
}
