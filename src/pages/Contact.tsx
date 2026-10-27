import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  MessageCircleIcon,
  GlobeIcon,
  InstagramIcon,
  ExternalLinkIcon
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';
import { site, whatsappLink, telLink, mailLink, websiteLink } from '../config/site';
import doctorImg from '../assets/dr_shubham_mahajan.jpg';

export function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useSeo({
    title: `${t('contactPage.heroTitle')} | One Wellness Clinic & Research Center, Nashik`,
    description:
      'Contact One Wellness Clinic & Research Center in Nashik. Consult Dr. Shubham Mahajan (BAMS, DYS) for Panchakarma, Agnikarma and Ayurvedic therapies. Address: Roongtha Shopping Hub, Indira Nagar, Nashik.',
    path: '/contact',
    image: img.interiorDetail
  });

  const connectReviewsText =
    lang === 'mr' ? 'कनेक्ट आणि परीक्षणे' : lang === 'hi' ? 'कनेक्ट और समीक्षाएं' : 'Connect & Reviews';
  const instaFollowText =
    lang === 'mr' ? 'इन्स्टाग्रामवर फॉलो करा' : lang === 'hi' ? 'इंस्टाग्राम पर फॉलो करें' : 'Follow Us on Instagram';
  const jdReviewText =
    lang === 'mr' ? 'जस्टडायलवर पुनरावलोकन द्या' : lang === 'hi' ? 'जस्टडायल पर समीक्षा दें' : 'Review Us on Justdial';
  const reviewSubtext =
    lang === 'mr'
      ? 'आरोग्यविषयक माहितीसाठी इन्स्टाग्रामवर फॉलो करा किंवा जस्टडायलवर तुमचा अनुभव नोंदवा.'
      : lang === 'hi'
      ? 'स्वास्थ्य संबंधी अपडेट के लिए हमें इंस्टाग्राम पर फॉलो करें या जस्टडायल पर अपना अनुभव साझा करें।'
      : 'Follow us on Instagram for health updates or write a verified review of your experience on Justdial.';

  const callSubtext =
    lang === 'mr'
      ? 'आमच्या रिसेप्शनवर थेट कॉल करण्यासाठी क्लिक करा.'
      : lang === 'hi'
      ? 'हमारे रिसेप्शन पर सीधे कॉल करने के लिए क्लिक करें।'
      : 'Click to call our front desk directly.';

  const mailSubtext =
    lang === 'mr'
      ? 'सल्लामसलत, अहवाल आणि चौकशीसाठी.'
      : lang === 'hi'
      ? 'परामर्श, रिपोर्ट और पूछताछ के लिए।'
      : 'For consultations, reports, and enquiries.';

  const webTitle =
    lang === 'mr' ? 'अधिकृत संकेतस्थळ' : lang === 'hi' ? 'आधिकारिक वेबसाइट' : 'Official Website';
  const webSubtext =
    lang === 'mr'
      ? 'माहिती, उपचार आणि बुकिंग पोर्टल.'
      : lang === 'hi'
      ? 'जानकारी, उपचार और बुकिंग पोर्टल।'
      : 'Information, therapies, and booking portal.';

  const locationSectionHeading =
    lang === 'mr'
      ? 'नाशिकमधील आमच्या क्लिनिकला भेट द्या'
      : lang === 'hi'
      ? 'नासिक में हमारे क्लिनिक पर आएं'
      : 'Visit Our Clinic in Nashik';

  const locationSectionDesc =
    lang === 'mr'
      ? 'आग्रा-मुंबई महामार्गावरील रुंगठा शॉपिंग हब, इंदिरा नगर येथे सोयीस्करपणे स्थित. सुलभ पार्किंग आणि शांत वातावरण उपलब्ध.'
      : lang === 'hi'
      ? 'आगरा-मुंबई हाईवे पर रूंगठा शॉपिंग हब, इंदिरा नगर में सुविधाजनक रूप से स्थित। आसान पार्किंग और शांत वातावरण उपलब्ध।'
      : 'Conveniently situated at Roongtha Shopping Hub, Indira Nagar on Agra-Mumbai Highway with easy parking and accessible facilities.';

  const getDirectionsText =
    lang === 'mr'
      ? 'गुगल मॅप्सवर दिशा-निर्देश मिळवा'
      : lang === 'hi'
      ? 'गूगल मैप्स पर दिशा-निर्देश प्राप्त करें'
      : 'Get Directions in Google Maps';

  return (
    <>
      <PageHero
        eyebrow={t('contactPage.heroEyebrow')}
        title={t('contactPage.heroTitle')}
        lede={t('contactPage.heroLede')}
        image={img.interiorDetail}
        alt="Warm light across a lime-plaster wall and terracotta floor inside the centre"
      />

      <section aria-labelledby="contact-details-heading" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading, Overview & Doctor Details */}
            <div className="lg:col-span-5">
              <SectionLabel>{t('contactPage.getInTouch')}</SectionLabel>
              <RevealText
                as="h2"
                id="contact-details-heading"
                byLine
                text={t('contactPage.divisionTitle')}
                className="mt-4 font-display text-[1.9rem] font-light leading-[1.1] text-ink sm:text-[2.4rem]"
              />

              <Reveal delay={0.08}>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/65">
                  {t('site.shortDescription')}
                </p>
              </Reveal>

              {/* Doctor & Professional Details Card */}
              <Reveal delay={0.12} className="mt-5">
                <div className="border border-ink/15 bg-cream/80 p-5 sm:p-6 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <img
                      src={doctorImg}
                      alt={site.doctor.name}
                      className="h-14 w-14 shrink-0 rounded-full object-cover border-2 border-moss/40 shadow-sm"
                    />
                    <div>
                      <span className="text-[10px] font-sans font-medium uppercase tracking-label text-moss">
                        {t('contactPage.leadPractitioner')}
                      </span>
                      <h3 className="mt-0.5 font-display text-[1.25rem] font-light leading-snug text-ink">
                        {site.doctor.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-moss">
                        {site.doctor.qualifications}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink/70">
                        {t('site.doctorProfession')}
                      </p>
                      <div className="mt-2.5 border-t border-ink/10 pt-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-ink/60">
                          {t('aboutPage.fields.registrationNumber')}:{' '}
                          <strong className="text-ink font-semibold">
                            {site.doctor.registrationNumber}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Social Media & Justdial Review Links */}
              <Reveal delay={0.16} className="mt-4">
                <div className="border border-ink/15 bg-[#FCFAF4] p-5">
                  <p className="text-[10px] uppercase tracking-label text-ink/50">
                    {connectReviewsText}
                  </p>

                  <div className="mt-3 space-y-2.5">
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between gap-3 border border-moss/30 bg-moss/5 px-4 py-3 text-xs font-medium text-moss transition-all duration-300 hover:bg-moss hover:text-ivory"
                    >
                      <span className="flex items-center gap-2.5">
                        <InstagramIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span className="font-semibold uppercase tracking-wider">
                          {instaFollowText}
                        </span>
                      </span>
                      <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                    </a>

                    <a
                      href={site.justdial}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between gap-3 border border-[#FF6B00]/30 bg-[#FF6B00]/5 px-4 py-3 text-xs font-medium text-[#C85200] transition-all duration-300 hover:bg-[#FF6B00] hover:text-white"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="flex h-4 w-5 items-center justify-center rounded-xs bg-[#FF6B00] text-[9px] font-bold text-white">
                          JD
                        </span>
                        <span className="font-semibold uppercase tracking-wider">
                          {jdReviewText}
                        </span>
                      </span>
                      <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="mt-3 text-[11px] text-ink/50">
                    {reviewSubtext}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Details Grid */}
            <div className="lg:col-span-7">
              <dl className="grid grid-cols-1 border-t border-ink/12 sm:grid-cols-2">
                {/* Complete Address */}
                <Reveal className="border-b border-ink/12 py-4 sm:py-5 sm:pr-6">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MapPinIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    {t('footer.clinicAddress')}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink/80">
                    <span className="block">{t('site.addressShop')}</span>
                    <span className="block">{t('site.addressBuilding')}</span>
                    <span className="block">{t('site.addressLocality')}</span>
                    <span className="block">{t('site.addressLandmark')}</span>
                    <span className="block">{t('site.addressCityState')}</span>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-2 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-label text-moss underline underline-offset-4 hover:text-forest"
                    >
                      <span>{t('contactPage.viewLocationMap')}</span>
                      <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </dd>
                </Reveal>

                {/* Working Hours */}
                <Reveal
                  delay={0.05}
                  className="border-b border-ink/12 py-4 sm:py-5 sm:border-l sm:border-ink/12 sm:pl-6"
                >
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <ClockIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    {t('contactPage.clinicHours')}
                  </dt>
                  <dd className="mt-2 space-y-1.5 text-sm text-ink/75">
                    <span className="flex justify-between gap-4">
                      <span>{t('contactPage.monSat')}</span>
                      <span className="text-ink/50">{t('contactPage.monSatHours')}</span>
                    </span>
                    <span className="flex justify-between gap-4">
                      <span>{t('contactPage.sunday')}</span>
                      <span className="text-ink/50">{t('contactPage.sundayHours')}</span>
                    </span>
                  </dd>
                </Reveal>

                {/* Telephone */}
                <Reveal delay={0.1} className="border-b border-ink/12 py-4 sm:py-5 sm:pr-6">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <PhoneIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    {t('footer.callUs')}
                  </dt>
                  <dd className="mt-2 text-sm text-ink/80">
                    <a
                      href={telLink()}
                      className="inline-block font-mono text-[1.05rem] font-medium text-ink transition-colors hover:text-moss"
                    >
                      {site.phone}
                    </a>
                    <span className="mt-0.5 block text-xs text-ink/50">
                      {callSubtext}
                    </span>
                  </dd>
                </Reveal>

                {/* Email Address */}
                <Reveal
                  delay={0.15}
                  className="border-b border-ink/12 py-4 sm:py-5 sm:border-l sm:border-ink/12 sm:pl-6"
                >
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MailIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    {t('footer.emailUs')}
                  </dt>
                  <dd className="mt-2 text-sm text-ink/80">
                    <a
                      href={mailLink()}
                      className="inline-block break-all font-medium text-ink transition-colors hover:text-moss"
                    >
                      {site.email}
                    </a>
                    <span className="mt-0.5 block text-xs text-ink/50">
                      {mailSubtext}
                    </span>
                  </dd>
                </Reveal>

                {/* Website */}
                <Reveal delay={0.2} className="border-b border-ink/12 py-4 sm:py-5 sm:pr-6">
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <GlobeIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    {webTitle}
                  </dt>
                  <dd className="mt-2 text-sm text-ink/80">
                    <a
                      href={websiteLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 font-medium text-moss underline underline-offset-4 hover:text-forest"
                    >
                      <span>{site.website}</span>
                      <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <span className="mt-0.5 block text-xs text-ink/50">
                      {webSubtext}
                    </span>
                  </dd>
                </Reveal>

                {/* WhatsApp */}
                <Reveal
                  delay={0.25}
                  className="border-b border-ink/12 py-4 sm:py-5 sm:border-l sm:border-ink/12 sm:pl-6"
                >
                  <dt className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/45">
                    <MessageCircleIcon className="h-4 w-4 text-moss" aria-hidden="true" />
                    WhatsApp
                  </dt>
                  <dd className="mt-2 text-sm text-ink/80">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 font-medium text-moss underline underline-offset-4 hover:text-forest"
                    >
                      <span>{t('nav.chatWhatsapp')}</span>
                      <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <span className="mt-0.5 block text-xs text-ink/50">
                      {t('whatsappSection.workingHoursNotice')}
                    </span>
                  </dd>
                </Reveal>
              </dl>
            </div>
          </div>

          {/* Location & Interactive Map Section */}
          <div className="mt-10 border-t border-ink/12 pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>{t('home.hero.location', { defaultValue: 'Location' })}</SectionLabel>
                <h3 className="mt-1.5 font-display text-[1.6rem] font-light leading-snug text-ink sm:text-[2rem]">
                  {locationSectionHeading}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink/65">
                  {locationSectionDesc}
                </p>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 shrink-0 items-center justify-center gap-2 border border-moss bg-moss px-5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-ivory transition-all duration-300 hover:bg-forest hover:border-forest"
              >
                <span>{getDirectionsText}</span>
                <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-5 overflow-hidden border border-ink/15 shadow-sm">
              <iframe
                title="One Wellness Clinic Location - Roongtha Shopping Hub, Indira Nagar, Nashik"
                src="https://maps.google.com/maps?q=Roongtha+Shopping+Hub,+Indira+Nagar,+Nashik,+Maharashtra+422009&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm
        eyebrow={t('contactPage.heroEyebrow')}
        heading={t('form.heading')}
        intro={t('form.intro')}
      />

      <WhatsAppSection />
    </>
  );
}