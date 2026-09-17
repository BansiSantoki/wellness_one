import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { img } from '../../data/images';
import { site, whatsappLink } from '../../config/site';

const GOALS = [
'Panchakarma',
'Rejuvenation',
'Ayurvedic Massage',
'Stress & Relaxation',
'General Wellness',
'Other'];


interface FormState {
  name: string;
  mobile: string;
  whatsapp: string;
  date: string;
  goal: string;
  notes: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = { name: '', mobile: '', whatsapp: '', date: '', goal: '', notes: '' };

const fieldClasses =
'peer w-full border-b border-ink/20 bg-transparent pb-3 pt-6 text-[0.95rem] text-ink outline-none transition-colors duration-300 ease-calm placeholder:text-transparent focus:border-moss';

const labelClasses =
'pointer-events-none absolute left-0 top-6 text-sm text-ink/45 transition-all duration-300 ease-calm peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-label peer-focus:text-moss peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-label peer-[:not(:placeholder-shown)]:text-ink/50';

interface ConsultationFormProps {
  heading?: string;
  intro?: string;
  eyebrow?: string;
}

export function ConsultationForm({
  heading = 'Not Sure Which Ayurvedic Program\nIs Right for You?',
  intro = 'Every Panchakarma journey is different. Start with a consultation to understand which Ayurvedic therapies or wellness program may be appropriate for you.',
  eyebrow = 'Begin your journey'
}: ConsultationFormProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (values: FormState): Errors => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{10,15}$/.test(values.mobile.trim())) next.mobile = 'Enter a valid mobile number.';
    if (values.whatsapp.trim() && !/^[0-9+\s-]{10,15}$/.test(values.whatsapp.trim()))
    next.whatsapp = 'Enter a valid WhatsApp number.';
    if (!values.date) next.date = 'Choose a preferred date.';
    if (!values.goal) next.goal = 'Select a wellness goal.';
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Ready to be connected to a CMS, Supabase, Firebase or REST endpoint.
    setSubmitted(true);
  };

  return (
    <section aria-labelledby="consultation-heading" className="bg-cream">
      <div className="mx-auto grid max-w-edge grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="lg:col-span-5">
          <SectionLabel>{eyebrow}</SectionLabel>
          <RevealText
            as="h2"
            byLine
            text={heading}
            className="mt-6 font-display text-[2.1rem] font-light leading-[1.1] text-ink sm:text-[2.7rem]" />
          
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ink/65">{intro}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <img
              src={img.consultation}
              alt="An Ayurvedic practitioner in conversation with a visitor during a consultation"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover" />
            
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-xs leading-relaxed text-ink/45">
              Prefer to talk first?{' '}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="text-moss underline underline-offset-4 transition-colors hover:text-forest">
                
                Message us on WhatsApp
              </a>{' '}
              or call {site.phone}.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="relative bg-ivory px-5 py-10 sm:px-10 sm:py-12">
            <AnimatePresence mode="wait">
              {submitted ?
              <motion.div
                key="success"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="py-6"
                role="status"
                aria-live="polite">
                
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss/12 text-moss">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.9rem] font-light leading-tight text-ink">
                    Thank you, {form.name.split(' ')[0]}. Your enquiry has been noted.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
                    Our team will contact you to confirm an appointment time and discuss which
                    Ayurvedic program may be appropriate. Responses are sent during clinic working
                    hours.
                  </p>
                  <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-ink/10 pt-6 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-[10px] uppercase tracking-label text-ink/45">Preferred date</dt>
                      <dd className="mt-1 text-ink">{form.date}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-label text-ink/45">Wellness goal</dt>
                      <dd className="mt-1 text-ink">{form.goal}</dd>
                    </div>
                  </dl>
                  <button
                  type="button"
                  onClick={() => {
                    setForm(emptyForm);
                    setSubmitted(false);
                  }}
                  className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide2 text-moss">
                  
                    Send another enquiry
                    <ArrowRightIcon
                    className="h-3.5 w-3.5 transition-transform duration-300 ease-calm group-hover:translate-x-1"
                    aria-hidden="true" />
                  
                  </button>
                </motion.div> :

              <motion.form
                key="form"
                noValidate
                onSubmit={onSubmit}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}>
                
                  <h2
                  id="consultation-heading"
                  className="font-display text-[1.6rem] font-light text-ink">
                  
                    Request an appointment
                  </h2>
                  <p className="mt-2 text-xs text-ink/50">
                    Fields marked with an asterisk are required.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                    <div className="relative sm:col-span-2">
                      <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldClasses} />
                    
                      <label htmlFor="name" className={labelClasses}>
                        Name *
                      </label>
                      {errors.name ?
                    <p id="name-error" className="mt-2 text-xs text-bark">
                          {errors.name}
                        </p> :
                    null}
                    </div>

                    <div className="relative">
                      <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      inputMode="tel"
                      placeholder="Mobile Number"
                      autoComplete="tel"
                      value={form.mobile}
                      onChange={update('mobile')}
                      aria-invalid={Boolean(errors.mobile)}
                      aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                      className={fieldClasses} />
                    
                      <label htmlFor="mobile" className={labelClasses}>
                        Mobile Number *
                      </label>
                      {errors.mobile ?
                    <p id="mobile-error" className="mt-2 text-xs text-bark">
                          {errors.mobile}
                        </p> :
                    null}
                    </div>

                    <div className="relative">
                      <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      placeholder="WhatsApp Number"
                      value={form.whatsapp}
                      onChange={update('whatsapp')}
                      aria-invalid={Boolean(errors.whatsapp)}
                      aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                      className={fieldClasses} />
                    
                      <label htmlFor="whatsapp" className={labelClasses}>
                        WhatsApp Number
                      </label>
                      {errors.whatsapp ?
                    <p id="whatsapp-error" className="mt-2 text-xs text-bark">
                          {errors.whatsapp}
                        </p> :
                    null}
                    </div>

                    <div className="relative">
                      <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={update('date')}
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={errors.date ? 'date-error' : undefined}
                      className="w-full border-b border-ink/20 bg-transparent pb-3 pt-6 text-[0.95rem] text-ink outline-none transition-colors duration-300 ease-calm focus:border-moss" />
                    
                      <label
                      htmlFor="date"
                      className="pointer-events-none absolute left-0 top-0 text-[10px] uppercase tracking-label text-ink/50">
                      
                        Preferred Date *
                      </label>
                      {errors.date ?
                    <p id="date-error" className="mt-2 text-xs text-bark">
                          {errors.date}
                        </p> :
                    null}
                    </div>

                    <div className="relative">
                      <label
                      htmlFor="goal"
                      className="absolute left-0 top-0 text-[10px] uppercase tracking-label text-ink/50">
                      
                        Your Wellness Goal *
                      </label>
                      <select
                      id="goal"
                      name="goal"
                      value={form.goal}
                      onChange={update('goal')}
                      aria-invalid={Boolean(errors.goal)}
                      aria-describedby={errors.goal ? 'goal-error' : undefined}
                      className="w-full appearance-none border-b border-ink/20 bg-transparent pb-3 pt-6 text-[0.95rem] text-ink outline-none transition-colors duration-300 ease-calm focus:border-moss">
                      
                        <option value="">Select an option</option>
                        {GOALS.map((g) =>
                      <option key={g} value={g}>
                            {g}
                          </option>
                      )}
                      </select>
                      {errors.goal ?
                    <p id="goal-error" className="mt-2 text-xs text-bark">
                          {errors.goal}
                        </p> :
                    null}
                    </div>

                    <div className="relative sm:col-span-2">
                      <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Anything you would like us to know"
                      value={form.notes}
                      onChange={update('notes')}
                      className={`${fieldClasses} resize-none`} />
                    
                      <label htmlFor="notes" className={labelClasses}>
                        Anything you would like us to know
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-[#102A20] px-8 py-4 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 ease-calm hover:bg-[#B08D4F] hover:text-[#102A20] sm:w-auto"
                  >
                    <span>BOOK CONSULTATION</span>
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-300 ease-calm group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>

                  <p className="mt-6 text-xs leading-relaxed text-ink/45">
                    Submitting an enquiry does not confirm a therapy or program. Suitability is
                    determined following consultation with a qualified practitioner.
                  </p>
                </motion.form>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}