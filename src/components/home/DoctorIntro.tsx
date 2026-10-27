import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheckIcon, PhoneIcon, ArrowUpRightIcon, CalendarCheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { site, bookAppointmentWhatsappLink, telLink } from '../../config/site';
import doctorImg from '../../assets/dr_shubham_mahajan.jpg';

export function DoctorIntro() {
  const { t } = useTranslation();

  return (
    <section
      id="doctor"
      aria-labelledby="doctor-heading"
      className="relative border-b border-ink/10 bg-[#FCFAF4] py-6 sm:py-8 lg:py-10"
    >
      <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-14">
        {/* Main Card Container */}
        <div className="relative overflow-hidden border border-[#B08D4F]/30 bg-cream/70 p-4 shadow-xs sm:p-6 lg:p-7">
          {/* Subtle decorative gold top accent bar */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#173D30] via-[#D3B67C] to-[#173D30]" />

          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
            {/* Left: Doctor Photograph & Badges */}
            <div className="lg:col-span-4 xl:col-span-4">
              <Reveal>
                <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] lg:max-w-none">
                  {/* Photo frame */}
                  <div className="relative aspect-[4/5] overflow-hidden border-2 border-moss/30 bg-sand shadow-md">
                    <img
                      src={doctorImg}
                      alt={site.doctor.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-calm hover:scale-[1.03]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Overlay status tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-xs text-[10px] text-white">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>By Appointment</span>
                      </span>
                      <span className="font-mono text-white/80">Nashik Clinic</span>
                    </div>
                  </div>

                  {/* Verified Registration Pill */}
                  <div className="mt-3 flex items-center justify-center gap-1.5 border border-moss/25 bg-moss/5 px-3 py-1.5 text-center text-[11px] font-medium text-moss">
                    <ShieldCheckIcon className="h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                    <span>Reg. No: <strong>{site.doctor.registrationNumber}</strong></span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Doctor Information & Quick Booking CTAs */}
            <div className="lg:col-span-8 xl:col-span-8">
              <Reveal delay={0.05}>
                <div className="flex flex-wrap items-center gap-2">
                  <SectionLabel>
                    {t('home.doctorIntro.eyebrow', { defaultValue: 'Clinical Leadership' })}
                  </SectionLabel>
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-moss">
                    • One Wellness Clinic
                  </span>
                </div>

                <h2
                  id="doctor-heading"
                  className="mt-2.5 font-display text-[2.1rem] font-light leading-tight text-ink sm:text-[2.7rem] lg:text-[3rem]"
                >
                  {site.doctor.name}
                </h2>

                {/* Qualifications & Specialization Tag */}
                <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="inline-block bg-[#173D30] px-3 py-1 font-sans text-xs font-semibold tracking-wider text-white">
                    {site.doctor.qualifications}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-moss">
                    {t('site.doctorProfession', { defaultValue: site.doctor.profession })}
                  </span>
                </div>

                {/* Professional Registration Line */}
                <div className="mt-3.5 inline-flex items-center gap-2 border-l-2 border-[#D3B67C] pl-3 py-0.5 text-xs text-ink/75">
                  <span className="font-sans font-medium text-ink">Maharashtra Council of Indian Medicine:</span>
                  <span className="font-mono font-semibold text-moss">{site.doctor.registrationNumber}</span>
                </div>

                {/* Brief Narrative */}
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-[0.98rem]">
                  {t('home.doctorIntro.bio', {
                    defaultValue:
                      'Directing authentic Panchakarma therapies, specialized Agnikarma procedures, and individualized dosha evaluations at One Wellness Clinic & Research Center, Nashik. Every treatment protocol is structured with dedicated clinical consultation to restore health at its root.'
                  })}
                </p>

                {/* Clinical Location Note */}
                <p className="mt-3 text-xs text-ink/60">
                  📍 {site.address.building}, {site.address.locality}, {site.address.landmark}, Nashik (09:00 AM – 07:00 PM)
                </p>

                {/* Action Buttons: Book Appointment & Direct Call */}
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={bookAppointmentWhatsappLink()}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex h-11 items-center justify-center gap-2.5 border border-[#173D30] bg-[#173D30] px-6 text-xs font-sans font-medium uppercase tracking-[0.14em] text-white shadow-xs transition-all duration-300 hover:bg-[#0D241C] hover:border-[#0D241C]"
                  >
                    <CalendarCheckIcon className="h-4 w-4 text-[#D3B67C] transition-transform group-hover:scale-110" aria-hidden="true" />
                    <span>{t('home.doctorIntro.bookAppointmentBtn', { defaultValue: 'Book Appointment' })}</span>
                  </a>

                  <a
                    href={telLink()}
                    className="inline-flex h-11 items-center justify-center gap-2 border border-ink/20 bg-white/70 px-5 text-xs font-sans font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-moss hover:bg-cream hover:text-forest"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 text-moss" aria-hidden="true" />
                    <span>{site.phone}</span>
                  </a>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-moss underline underline-offset-4 transition-colors hover:text-forest sm:ml-2"
                  >
                    <span>{t('home.doctorIntro.viewProfileBtn', { defaultValue: 'View Clinical Profile' })}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
