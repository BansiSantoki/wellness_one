import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, MessageSquareIcon, PhoneIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { img } from '../../data/images';
import { site, telLink, bookAppointmentWhatsappLink } from '../../config/site';

interface FormState {
  name: string;
  mobile: string;
  whatsapp: string;
  date: string;
  time: string;
  goal: string;
  notes: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: '',
  mobile: '',
  whatsapp: '',
  date: '',
  time: '',
  goal: '',
  notes: ''
};

const fieldClasses =
  'peer w-full border-b border-ink/20 bg-transparent pb-2.5 pt-5 text-[0.95rem] text-ink outline-none transition-colors duration-300 ease-calm placeholder:text-transparent focus:border-moss';

const labelClasses =
  'pointer-events-none absolute left-0 top-5 text-sm text-ink/45 transition-all duration-300 ease-calm peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-label peer-focus:text-moss peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-label peer-[:not(:placeholder-shown)]:text-ink/50';

interface ConsultationFormProps {
  heading?: string;
  intro?: string;
  eyebrow?: string;
}

export function ConsultationForm({
  heading,
  intro,
  eyebrow
}: ConsultationFormProps) {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waRedirectUrl, setWaRedirectUrl] = useState('');
  const reduce = useReducedMotion();

  const sectionHeading = heading || t('form.heading', { defaultValue: 'Not Sure Which Ayurvedic Program\nIs Right for You?' });
  const sectionIntro = intro || t('form.intro', { defaultValue: 'Every Panchakarma journey is different. Start with a consultation to understand which Ayurvedic therapies or wellness program may be appropriate for you.' });
  const sectionEyebrow = eyebrow || t('form.eyebrow', { defaultValue: 'Begin your journey' });

  const goalOptions = [
    { value: 'Panchakarma', label: t('form.goals.panchakarma', { defaultValue: 'Panchakarma' }) },
    { value: 'Rejuvenation', label: t('form.goals.rejuvenation', { defaultValue: 'Rejuvenation' }) },
    { value: 'Ayurvedic Massage', label: t('form.goals.ayurvedicMassage', { defaultValue: 'Ayurvedic Massage' }) },
    { value: 'Stress & Relaxation', label: t('form.goals.stressRelaxation', { defaultValue: 'Stress & Relaxation' }) },
    { value: 'General Wellness', label: t('form.goals.generalWellness', { defaultValue: 'General Wellness' }) },
    { value: 'Other', label: t('form.goals.other', { defaultValue: 'Other' }) }
  ];

  const timeSlotOptions = [
    { value: 'Morning (09:00 AM – 01:00 PM)', label: i18n.language === 'mr' ? 'सकाळ (०९:०० ते ०१:००)' : i18n.language === 'hi' ? 'सुबह (09:00 AM – 01:00 PM)' : 'Morning (09:00 AM – 01:00 PM)' },
    { value: 'Afternoon (01:00 PM – 05:00 PM)', label: i18n.language === 'mr' ? 'दुपार (०१:०० ते ०५:००)' : i18n.language === 'hi' ? 'दोपहर (01:00 PM – 05:00 PM)' : 'Afternoon (01:00 PM – 05:00 PM)' },
    { value: 'Evening (05:00 PM – 07:00 PM)', label: i18n.language === 'mr' ? 'संध्याकाळ (०५:०० ते ०७:००)' : i18n.language === 'hi' ? 'शाम (05:00 PM – 07:00 PM)' : 'Evening (05:00 PM – 07:00 PM)' }
  ];

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (values: FormState): Errors => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = t('form.nameError', { defaultValue: 'Please enter your name.' });
    if (!/^[0-9+\s-]{10,15}$/.test(values.mobile.trim())) next.mobile = t('form.mobileError', { defaultValue: 'Enter a valid mobile number.' });
    if (values.whatsapp.trim() && !/^[0-9+\s-]{10,15}$/.test(values.whatsapp.trim()))
      next.whatsapp = t('form.whatsappError', { defaultValue: 'Enter a valid WhatsApp number.' });
    if (!values.date) next.date = t('form.dateError', { defaultValue: 'Choose a preferred date.' });
    if (!values.goal) next.goal = t('form.goalError', { defaultValue: 'Select a wellness goal.' });
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Build prefilled WhatsApp message with patient details
    const lines = [
      'Hello Dr. Shubham Mahajan, I would like to request an appointment at One Wellness Clinic.',
      `Patient Name: ${form.name.trim()}`,
      `Mobile Number: ${form.mobile.trim()}`,
      form.whatsapp.trim() ? `WhatsApp: ${form.whatsapp.trim()}` : null,
      `Preferred Date: ${form.date}`,
      form.time ? `Preferred Time: ${form.time}` : 'Preferred Time: Flexible / Morning',
      `Wellness Goal / Reason: ${form.goal}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null
    ].filter(Boolean);

    const message = lines.join('\n');
    const waUrl = `https://wa.me/919175893553?text=${encodeURIComponent(message)}`;
    setWaRedirectUrl(waUrl);
    setSubmitted(true);

    // Automatically trigger WhatsApp opening in new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section aria-labelledby="consultation-heading" className="bg-cream">
      <div className="mx-auto grid max-w-edge grid-cols-1 gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-10 lg:py-12 lg:px-14">
        {/* Left Editorial & Practitioner Contact Info */}
        <div className="lg:col-span-5">
          <SectionLabel>{sectionEyebrow}</SectionLabel>
          <RevealText
            as="h2"
            byLine
            text={sectionHeading}
            className="mt-2.5 font-display text-[1.8rem] font-light leading-[1.1] text-ink sm:text-[2.2rem]"
          />

          <Reveal delay={0.08}>
            <p className="mt-2.5 max-w-md text-xs sm:text-sm leading-relaxed text-ink/65">{sectionIntro}</p>
          </Reveal>

          <Reveal delay={0.12} className="mt-4">
            <div className="overflow-hidden border border-ink/15 bg-sand/60">
              <img
                src={img.consultation}
                alt="Ayurvedic consultation with Dr. Shubham Mahajan at One Wellness Clinic"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-4 border-t border-ink/12 pt-3.5 text-xs leading-relaxed text-ink/55">
              <p>
                {t('form.preferToTalk', { defaultValue: 'Prefer to talk first?' })}{' '}
                <a
                  href={bookAppointmentWhatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-moss underline underline-offset-4 transition-colors hover:text-forest"
                >
                  {t('form.messageWhatsapp', { defaultValue: 'Message us on WhatsApp' })}
                </a>{' '}
                {t('form.orCall', { defaultValue: 'or call' })}{' '}
                <a
                  href={telLink()}
                  className="font-mono font-medium text-moss underline underline-offset-4 transition-colors hover:text-forest"
                >
                  {site.phone}
                </a>.
              </p>
              <p className="mt-1 text-[11px] text-ink/45">
                {site.doctor.name} ({site.doctor.qualifications}) • {site.address.building}, Nashik
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Form Container */}
        <div className="lg:col-span-7 lg:pl-4">
          <div className="relative border border-[#B08D4F]/20 bg-ivory px-5 py-6 shadow-xs sm:px-7 sm:py-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                /* Post-Submission WhatsApp Redirect View */
                <motion.div
                  key="success"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="py-4"
                  role="status"
                  aria-live="polite"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss/12 text-moss">
                    <CheckIcon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-4 font-display text-[1.7rem] font-light leading-tight text-ink">
                    {i18n.language === 'mr'
                      ? `धन्यवाद ${form.name.split(' ')[0]}. तुमची माहिती तयार आहे.`
                      : i18n.language === 'hi'
                      ? `धन्यवाद ${form.name.split(' ')[0]}. आपकी जानकारी तैयार है।`
                      : `Thank you, ${form.name.split(' ')[0]}. Your enquiry is prepared.`}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
                    {i18n.language === 'mr'
                      ? 'आम्ही डॉ. शुभम महाजन यांच्या क्लिनिकशी जोडण्यासाठी व्हॉट्सॲप लिंक उघडली आहे. कृपया व्हॉट्सॲपवर मेसेज पाठवून आपली अपॉइंटमेंट निश्चित करा.'
                      : i18n.language === 'hi'
                      ? 'हमने डॉ. शुभम महाजन के क्लिनिक से जुड़ने के लिए व्हाट्सएप लिंक खोला है। कृपया व्हाट्सएप पर संदेश भेजकर अपनी अपॉइंटमेंट की पुष्टि करें।'
                      : 'We have prepared your WhatsApp enquiry message for Dr. Shubham Mahajan (+91 9175893553). Please send the message on WhatsApp so our clinic team can verify and confirm your consultation schedule.'}
                  </p>

                  {/* Summary Box */}
                  <div className="mt-5 border border-ink/10 bg-cream/70 p-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-ink/45 block">
                          {t('form.preferredDateLabel', { defaultValue: 'Preferred date' })}
                        </span>
                        <strong className="text-ink font-semibold">{form.date}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-ink/45 block">
                          Preferred Time
                        </span>
                        <strong className="text-ink font-semibold">{form.time || 'Morning'}</strong>
                      </div>
                      <div className="sm:col-span-2 mt-1 pt-1 border-t border-ink/10">
                        <span className="text-[10px] uppercase tracking-wider text-ink/45 block">
                          {t('form.wellnessGoalLabel', { defaultValue: 'Wellness goal' })}
                        </span>
                        <span className="text-ink">{form.goal}</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp send button & call clinic button */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={waRedirectUrl || bookAppointmentWhatsappLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-11 items-center justify-center gap-2 border border-[#25D366] bg-[#25D366] px-6 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1ebe5a]"
                    >
                      <MessageSquareIcon className="h-4 w-4" aria-hidden="true" />
                      <span>Open WhatsApp to Send Details</span>
                    </a>

                    <a
                      href={telLink()}
                      className="inline-flex h-11 items-center justify-center gap-2 border border-ink/20 bg-white px-5 text-xs font-sans font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-moss hover:text-forest"
                    >
                      <PhoneIcon className="h-3.5 w-3.5 text-moss" aria-hidden="true" />
                      <span>Call {site.phone}</span>
                    </a>
                  </div>

                  <p className="mt-4 text-[11px] leading-relaxed text-ink/50">
                    * Note: An appointment is not automatically confirmed. The patient must send the message on WhatsApp, and the clinic coordinator will confirm your exact slot.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setForm(emptyForm);
                      setSubmitted(false);
                    }}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-moss underline underline-offset-4"
                  >
                    <span>{t('form.sendAnother', { defaultValue: 'Send another enquiry' })}</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-calm group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </motion.div>
              ) : (
                /* Compact Clean Appointment Form */
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3
                    id="consultation-heading"
                    className="font-display text-[1.45rem] font-light text-ink sm:text-[1.65rem]"
                  >
                    {t('form.requestAppointment', { defaultValue: 'Request an appointment' })}
                  </h3>
                  <p className="mt-1 text-xs text-ink/50">
                    {t('form.requiredFields', { defaultValue: 'Fields marked with an asterisk are required.' })}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                    {/* Patient Name */}
                    <div className="relative sm:col-span-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={t('form.namePlaceholder', { defaultValue: 'Name' })}
                        autoComplete="name"
                        value={form.name}
                        onChange={update('name')}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={fieldClasses}
                      />
                      <label htmlFor="name" className={labelClasses}>
                        {t('form.nameLabel', { defaultValue: 'Name *' })}
                      </label>
                      {errors.name ? (
                        <p id="name-error" className="mt-1.5 text-xs text-bark">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        inputMode="tel"
                        placeholder={t('form.mobilePlaceholder', { defaultValue: 'Mobile Number' })}
                        autoComplete="tel"
                        value={form.mobile}
                        onChange={update('mobile')}
                        aria-invalid={Boolean(errors.mobile)}
                        aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                        className={fieldClasses}
                      />
                      <label htmlFor="mobile" className={labelClasses}>
                        {t('form.mobileLabel', { defaultValue: 'Mobile Number *' })}
                      </label>
                      {errors.mobile ? (
                        <p id="mobile-error" className="mt-1.5 text-xs text-bark">
                          {errors.mobile}
                        </p>
                      ) : null}
                    </div>

                    {/* WhatsApp Number (Optional) */}
                    <div className="relative">
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="tel"
                        placeholder={t('form.whatsappPlaceholder', { defaultValue: 'WhatsApp Number' })}
                        value={form.whatsapp}
                        onChange={update('whatsapp')}
                        aria-invalid={Boolean(errors.whatsapp)}
                        aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                        className={fieldClasses}
                      />
                      <label htmlFor="whatsapp" className={labelClasses}>
                        {t('form.whatsappLabel', { defaultValue: 'WhatsApp Number' })}
                      </label>
                      {errors.whatsapp ? (
                        <p id="whatsapp-error" className="mt-1.5 text-xs text-bark">
                          {errors.whatsapp}
                        </p>
                      ) : null}
                    </div>

                    {/* Preferred Date */}
                    <div className="relative">
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={update('date')}
                        aria-invalid={Boolean(errors.date)}
                        aria-describedby={errors.date ? 'date-error' : undefined}
                        className="w-full border-b border-ink/20 bg-transparent pb-2.5 pt-5 text-[0.95rem] text-ink outline-none transition-colors duration-300 ease-calm focus:border-moss"
                      />
                      <label
                        htmlFor="date"
                        className="pointer-events-none absolute left-0 top-0 text-[10px] uppercase tracking-label text-ink/50"
                      >
                        {t('form.dateLabel', { defaultValue: 'Preferred Date *' })}
                      </label>
                      {errors.date ? (
                        <p id="date-error" className="mt-1.5 text-xs text-bark">
                          {errors.date}
                        </p>
                      ) : null}
                    </div>

                    {/* Preferred Time Slot */}
                    <div className="relative">
                      <label
                        htmlFor="time"
                        className="absolute left-0 top-0 text-[10px] uppercase tracking-label text-ink/50"
                      >
                        Preferred Time Slot
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={update('time')}
                        className="w-full appearance-none border-b border-ink/20 bg-transparent pb-2.5 pt-5 text-[0.95rem] text-ink outline-none transition-colors duration-300 ease-calm focus:border-moss"
                      >
                        <option value="">Select Time Slot (Optional)</option>
                        {timeSlotOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Wellness Goal / Reason for visit */}
                    <div className="relative sm:col-span-2">
                      <label
                        htmlFor="goal"
                        className="absolute left-0 top-0 text-[10px] uppercase tracking-label text-ink/50"
                      >
                        {t('form.goalLabel', { defaultValue: 'Your Wellness Goal / Reason *' })}
                      </label>
                      <select
                        id="goal"
                        name="goal"
                        value={form.goal}
                        onChange={update('goal')}
                        aria-invalid={Boolean(errors.goal)}
                        aria-describedby={errors.goal ? 'goal-error' : undefined}
                        className="w-full appearance-none border-b border-ink/20 bg-transparent pb-2.5 pt-5 text-[0.95rem] text-ink outline-none transition-colors duration-300 ease-calm focus:border-moss"
                      >
                        <option value="">{t('form.goalPlaceholder', { defaultValue: 'Select an option' })}</option>
                        {goalOptions.map((g) => (
                          <option key={g.value} value={g.value}>
                            {g.label}
                          </option>
                        ))}
                      </select>
                      {errors.goal ? (
                        <p id="goal-error" className="mt-1.5 text-xs text-bark">
                          {errors.goal}
                        </p>
                      ) : null}
                    </div>

                    {/* Optional Notes */}
                    <div className="relative sm:col-span-2">
                      <textarea
                        id="notes"
                        name="notes"
                        rows={2}
                        placeholder={t('form.notesPlaceholder', { defaultValue: 'Anything you would like us to know' })}
                        value={form.notes}
                        onChange={update('notes')}
                        className={`${fieldClasses} resize-none`}
                      />
                      <label htmlFor="notes" className={labelClasses}>
                        {t('form.notesLabel', { defaultValue: 'Anything you would like us to know (Optional)' })}
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2.5 bg-[#173D30] px-7 py-3.5 text-xs font-sans font-medium uppercase tracking-[0.14em] text-white shadow-xs transition-all duration-300 ease-calm hover:bg-[#0D241C]"
                    >
                      <MessageSquareIcon className="h-4 w-4 text-[#D3B67C]" aria-hidden="true" />
                      <span>{t('form.submitBtn', { defaultValue: 'BOOK APPOINTMENT VIA WHATSAPP' })}</span>
                      <ArrowRightIcon
                        className="h-3.5 w-3.5 text-white/70 transition-transform duration-300 ease-calm group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>

                    <span className="text-[11px] text-ink/50">
                      Direct WhatsApp: <strong>+91 9175893553</strong>
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] leading-relaxed text-ink/45">
                    {t('form.disclaimer', {
                      defaultValue:
                        'Submitting this form prepares your appointment enquiry message to +91 9175893553. Appointments are finalized once our clinic coordinator confirms your schedule.'
                    })}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}