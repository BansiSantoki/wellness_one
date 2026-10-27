import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, CalendarIcon, CheckCircle2Icon, PhoneIcon, MessageSquareIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { therapies, Therapy } from '../../data/therapies';
import { site, whatsappLink, telLink } from '../../config/site';

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM'
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTherapy?: Therapy | null;
}

export function BookingModal({ isOpen, onClose, selectedTherapy }: BookingModalProps) {
  const { t, i18n } = useTranslation();

  // Form states
  const [currentTherapy, setCurrentTherapy] = useState<Therapy>(
    selectedTherapy || therapies[0]
  );

  // Set default date to tomorrow in YYYY-MM-DD
  const getTomorrowStr = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getTodayStr = () => {
    return new Date().toISOString().split('T')[0];
  };

  const [date, setDate] = useState<string>(getTomorrowStr());
  const [time, setTime] = useState<string>('10:00 AM');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [goal, setGoal] = useState<string>('Panchakarma');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTherapy) {
      setCurrentTherapy(selectedTherapy);
    }
  }, [selectedTherapy]);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDateLabel = (rawDate: string) => {
    if (!rawDate) return t('common.selectDate', { defaultValue: 'Select Date' });
    try {
      const d = new Date(rawDate);
      const locale = i18n.language === 'hi' ? 'hi-IN' : i18n.language === 'mr' ? 'mr-IN' : 'en-GB';
      return d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
      return rawDate;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getTherapyName = (th: Therapy) => {
    const tr = t(`therapiesData.${th.slug}`, { returnObjects: true }) as { name?: string; priceFrom?: string } | undefined;
    return tr?.name || th.name;
  };

  const getTherapyPrice = (th: Therapy) => {
    const tr = t(`therapiesData.${th.slug}`, { returnObjects: true }) as { priceFrom?: string } | undefined;
    return tr?.priceFrom || th.priceFrom;
  };

  const currentTherapyName = getTherapyName(currentTherapy);
  const currentTherapyPrice = getTherapyPrice(currentTherapy);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#102A20]/75 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-none bg-[#FCFAF4] shadow-2xl border border-[#B08D4F]/30"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between bg-[#102A20] px-6 py-5 text-[#FCFAF4]">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-[#D3B67C]">
                {t('bookingModal.headerSubtitle', { defaultValue: 'One Wellness Clinic & Research Center' })}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-white">
                {t('bookingModal.headerTitle', { defaultValue: 'Book Ayurvedic Consultation / Therapy' })}
              </h2>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              aria-label={t('bookingModal.closeModal', { defaultValue: 'Close booking modal' })}
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {isSubmitted ? (
            /* Success Confirmation View */
            <div className="p-8 sm:p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#102A20]/10 text-[#102A20]">
                <CheckCircle2Icon className="h-10 w-10 text-[#B08D4F]" />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-normal text-[#102A20]">
                {t('bookingModal.requestReceived', { defaultValue: 'Appointment Request Received' })}
              </h3>
              <p className="mt-2 text-sm text-[#25231F]/70 max-w-md mx-auto">
                {t('bookingModal.thankYouMessage', { name: name || 'valued guest', defaultValue: `Thank you, ${name || 'valued guest'}. Our clinical coordinator will contact you to confirm your appointment.` })}
              </p>

              {/* Summary Card */}
              <div className="mt-6 mx-auto max-w-md rounded-none bg-[#F6F1E6] p-6 text-left border border-[#E8DFCC]">
                <h4 className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#B08D4F] border-b border-[#E8DFCC] pb-2">
                  {t('bookingModal.summaryHeading', { defaultValue: 'Booking Summary' })}
                </h4>
                <div className="mt-4 space-y-2 text-sm text-[#25231F]">
                  <div className="flex justify-between">
                    <span className="text-[#25231F]/60">
                      {t('bookingModal.selectedTherapyLabel', { defaultValue: 'Selected Therapy:' })}
                    </span>
                    <span className="font-medium text-[#102A20]">{currentTherapyName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#25231F]/60">
                      {t('bookingModal.preferredDateLabel', { defaultValue: 'Preferred Date:' })}
                    </span>
                    <span className="font-medium text-[#102A20]">{formatDateLabel(date)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#25231F]/60">
                      {t('bookingModal.preferredTimeLabel', { defaultValue: 'Preferred Time:' })}
                    </span>
                    <span className="font-medium text-[#102A20]">{time}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#E8DFCC] pt-2">
                    <span className="text-[#25231F]/60">
                      {t('bookingModal.startingPriceLabel', { defaultValue: 'Starting Price:' })}
                    </span>
                    <span className="font-bold text-lg text-[#102A20]">{currentTherapyPrice}</span>
                  </div>
                </div>
              </div>

              {/* Direct Call & WhatsApp Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={telLink()}
                  className="h-11 px-6 bg-[#102A20] text-white text-[11px] font-sans font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 hover:bg-[#1B4132] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 text-[#D3B67C]" />
                  <span>{t('bookingModal.callClinicBtn', { phone: site.phone, defaultValue: `CALL CLINIC (${site.phone})` })}</span>
                </a>

                <a
                  href={whatsappLink(`Hello, I submitted an appointment request for ${currentTherapyName} on ${formatDateLabel(date)} at ${time}. My name is ${name}.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="h-11 px-6 border border-[#102A20] text-[#102A20] text-[11px] font-sans font-medium uppercase tracking-[0.12em] flex items-center justify-center gap-2 hover:bg-[#102A20]/5 transition-colors"
                >
                  <MessageSquareIcon className="h-4 w-4 text-[#B08D4F]" />
                  <span>{t('bookingModal.whatsappClinicBtn', { defaultValue: 'WHATSAPP CLINIC' })}</span>
                </a>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-[#25231F]/60 underline hover:text-[#102A20]"
                >
                  {t('bookingModal.closeWindowBtn', { defaultValue: 'Close Window' })}
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Column: Selection */}
                <div className="md:col-span-6 space-y-5">
                  {/* Therapy Selection */}
                  <div>
                    <label className="block text-[11px] font-sans font-medium uppercase tracking-wider text-[#102A20] mb-2">
                      {t('bookingModal.chooseTherapyLabel', { defaultValue: 'Selected Therapy *' })}
                    </label>
                    <select
                      value={currentTherapy.slug}
                      onChange={(e) => {
                        const found = therapies.find((th) => th.slug === e.target.value);
                        if (found) setCurrentTherapy(found);
                      }}
                      className="w-full h-11 px-3 bg-white border border-[#E8DFCC] text-[#25231F] text-sm focus:border-[#B08D4F] focus:outline-none"
                    >
                      {therapies.map((th) => (
                        <option key={th.slug} value={th.slug}>
                          {getTherapyName(th)} ({getTherapyPrice(th)})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selector */}
                  <div>
                    <label className="block text-[11px] font-sans font-medium uppercase tracking-wider text-[#102A20] mb-2">
                      {t('bookingModal.chooseDateLabel', { defaultValue: 'Preferred Date *' })}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={getTodayStr()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full h-11 px-3 pr-10 bg-white border border-[#E8DFCC] text-[#25231F] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                      <CalendarIcon className="absolute right-3 top-3 h-5 w-5 text-[#B08D4F] pointer-events-none" />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-[11px] font-sans font-medium uppercase tracking-wider text-[#102A20] mb-2">
                      {t('bookingModal.preferredTimeSlotLabel', { defaultValue: 'Preferred Time Slot *' })}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = time === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            className={`h-9 text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-[#102A20] text-white border-2 border-[#B08D4F] shadow-xs'
                                : 'bg-white text-[#25231F] border border-[#E8DFCC] hover:border-[#B08D4F]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Booking Summary Box */}
                  <div className="bg-[#F6F1E6] p-4 border border-[#E8DFCC]">
                    <div className="text-[10px] font-sans font-medium uppercase tracking-wider text-[#B08D4F]">
                      {t('bookingModal.summaryHeading', { defaultValue: 'Booking Summary' })}
                    </div>
                    <div className="mt-2 text-xs space-y-1">
                      <p>
                        <span className="text-[#25231F]/60">
                          {t('bookingModal.selectedTherapyLabel', { defaultValue: 'Therapy:' })}{' '}
                        </span>
                        <strong className="text-[#102A20]">{currentTherapyName}</strong>
                      </p>
                      <p>
                        <span className="text-[#25231F]/60">
                          {t('bookingModal.preferredDateLabel', { defaultValue: 'Preferred Date:' })}{' '}
                        </span>
                        <strong className="text-[#102A20]">{formatDateLabel(date)}</strong>
                      </p>
                      <p>
                        <span className="text-[#25231F]/60">
                          {t('bookingModal.preferredTimeLabel', { defaultValue: 'Preferred Time:' })}{' '}
                        </span>
                        <strong className="text-[#102A20]">{time}</strong>
                      </p>
                      <p className="pt-2 border-t border-[#E8DFCC] flex justify-between items-center">
                        <span className="text-[#25231F]/70">
                          {t('bookingModal.indicativePriceLabel', { defaultValue: 'Indicative Price:' })}
                        </span>
                        <span className="text-base font-bold text-[#102A20]">{currentTherapyPrice}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Personal Info */}
                <div className="md:col-span-6 space-y-3.5">
                  <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-[#102A20] mb-1">
                    {t('bookingModal.contactDetailsHeading', { defaultValue: 'Contact Details' })}
                  </span>

                  <div>
                    <label className="block text-xs text-[#25231F]/70 mb-1">
                      {t('bookingModal.fullNameLabel', { defaultValue: 'Name *' })}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('bookingModal.fullNamePlaceholder', { defaultValue: 'Your full name' })}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-10 px-3 bg-white border border-[#E8DFCC] text-[#25231F] text-sm focus:border-[#B08D4F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#25231F]/70 mb-1">
                      {t('bookingModal.mobileNumberLabel', { defaultValue: 'Mobile Number *' })}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9175893553"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-10 px-3 bg-white border border-[#E8DFCC] text-[#25231F] text-sm focus:border-[#B08D4F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#25231F]/70 mb-1">
                      {t('bookingModal.whatsappNumberLabel', { defaultValue: 'WhatsApp Number' })}
                    </label>
                    <input
                      type="tel"
                      placeholder={t('bookingModal.whatsappNumberPlaceholder', { defaultValue: 'WhatsApp contact number' })}
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full h-10 px-3 bg-white border border-[#E8DFCC] text-[#25231F] text-sm focus:border-[#B08D4F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#25231F]/70 mb-1">
                      {t('bookingModal.goalLabel', { defaultValue: 'Your Wellness Goal *' })}
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full h-10 px-3 bg-white border border-[#E8DFCC] text-[#25231F] text-sm focus:border-[#B08D4F] focus:outline-none"
                    >
                      <option value="Panchakarma">{t('form.goals.panchakarma', { defaultValue: 'Panchakarma' })}</option>
                      <option value="Rejuvenation">{t('form.goals.rejuvenation', { defaultValue: 'Rejuvenation' })}</option>
                      <option value="Ayurvedic Massage">{t('form.goals.ayurvedicMassage', { defaultValue: 'Ayurvedic Massage' })}</option>
                      <option value="Stress & Relaxation">{t('form.goals.stressRelaxation', { defaultValue: 'Stress & Relaxation' })}</option>
                      <option value="General Wellness">{t('form.goals.generalWellness', { defaultValue: 'General Wellness' })}</option>
                      <option value="Other">{t('form.goals.other', { defaultValue: 'Other' })}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#25231F]/70 mb-1">
                      {t('bookingModal.messageLabel', { defaultValue: 'Message / Notes' })}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={t('bookingModal.messagePlaceholder', { defaultValue: 'Specific requirements or questions...' })}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#E8DFCC] text-[#25231F] text-sm focus:border-[#B08D4F] focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 border-t border-[#E8DFCC] pt-5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-[#25231F]/60">
                  <PhoneIcon className="h-4 w-4 text-[#B08D4F]" />
                  <span>Call: {site.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-sans uppercase tracking-wider text-[#25231F]/70 hover:text-[#25231F]"
                  >
                    {t('bookingModal.cancelBtn', { defaultValue: 'Cancel' })}
                  </button>
                  <button
                    type="submit"
                    className="h-11 px-7 bg-[#B08D4F] text-[#102A20] text-[11px] font-sans font-bold uppercase tracking-[0.14em] hover:bg-[#D3B67C] transition-all shadow-md"
                  >
                    {t('bookingModal.submitEnquiryBtn', { defaultValue: 'SUBMIT ENQUIRY' })}
                  </button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
