import React, { createContext, useContext, useState } from 'react';
import { Therapy } from '../data/therapies';
import { BookingModal } from '../components/ui/BookingModal';

interface BookingContextType {
  openBooking: (therapy?: Therapy | null) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTherapy, setSelectedTherapy] = useState<Therapy | null>(null);

  const openBooking = (therapy?: Therapy | null) => {
    if (therapy) {
      setSelectedTherapy(therapy);
    } else {
      setSelectedTherapy(null);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        selectedTherapy={selectedTherapy}
      />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
