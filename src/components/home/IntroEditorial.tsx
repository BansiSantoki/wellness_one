import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { Parallax } from '../ui/Parallax';
import { ImageReveal } from '../ui/ImageReveal';
import { TextLink } from '../ui/ArrowLink';
import { img } from '../../data/images';

/** The editorial transition with compact, balanced spacing. */
export function IntroEditorial() {
  const { t } = useTranslation();

  return (
    <section id="introduction" aria-labelledby="intro-heading" className="bg-ivory">
      <div className="mx-auto max-w-edge px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel index="i">{t('home.intro.eyebrow', 'Our perspective')}</SectionLabel>
            <RevealText
              as="h2"
              id="intro-heading"
              byLine
              text={t('home.intro.heading', 'Ayurveda Is Not\nJust a Treatment.\nIt Is a Way of Living.')}
              className="mt-3 font-display text-[2rem] font-light leading-[1.06] text-ink sm:text-[2.8rem] lg:text-[3.2rem]"
            />
          </div>

          <div className="lg:col-span-5 lg:pl-2">
            <div className="max-w-md space-y-3 text-[0.92rem] leading-relaxed text-ink/65">
              <Reveal delay={0.06}>
                <p>
                  {t('home.intro.p1', 'Ayurveda is a traditional system of Indian wellness that views health through the balance of the individual, lifestyle, nutrition, daily routines and the environment.')}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  {t('home.intro.p2', 'At One Wellness Clinic & Research Center, we bring this traditional perspective into a calm, structured and personalised wellness experience.')}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p>
                  {t('home.intro.p3', "Our Panchakarma programs are planned after an individual consultation and may include selected Ayurvedic therapies, supportive routines, dietary guidance and rejuvenation practices according to the person's requirements.")}
                </p>
              </Reveal>
              <Reveal delay={0.18} className="pt-1">
                <TextLink to="/about">{t('home.intro.learnMore', 'Learn About Ayurveda')}</TextLink>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-5 sm:grid-cols-12 sm:gap-6 lg:mt-8">
          <div className="sm:col-span-8">
            <Parallax distance={12}>
              <ImageReveal
                src={img.treatmentRoom}
                alt="A calm contemporary Ayurvedic treatment room with lime-plaster walls and teak joinery"
                ratio="aspect-[16/10]"
                caption={t('home.intro.imageCaption', 'The centre — designed for quiet, not for clinical efficiency')}
              />
            </Parallax>
          </div>
          <div className="sm:col-span-4">
            <Parallax distance={-10}>
              <ImageReveal
                src={img.nasya}
                alt="Brass dropper vessel, medicated oil and dried leaves prepared on a stone tray"
                ratio="aspect-[16/10] sm:aspect-[4/3]"
              />
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}