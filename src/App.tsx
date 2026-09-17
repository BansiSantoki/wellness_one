import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { IntroLoader } from './components/layout/IntroLoader';
import { BookingProvider } from './context/BookingContext';
import { Home } from './pages/Home';

// Route-based code splitting: the homepage ships eagerly, everything else on demand.
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Panchakarma = lazy(() =>
import('./pages/Panchakarma').then((m) => ({ default: m.Panchakarma }))
);
const Therapies = lazy(() => import('./pages/Therapies').then((m) => ({ default: m.Therapies })));
const Programs = lazy(() => import('./pages/Programs').then((m) => ({ default: m.Programs })));
const Rejuvenation = lazy(() =>
import('./pages/Rejuvenation').then((m) => ({ default: m.Rejuvenation }))

);
const Wellness = lazy(() => import('./pages/Wellness').then((m) => ({ default: m.Wellness })));
const Consultation = lazy(() =>
import('./pages/Consultation').then((m) => ({ default: m.Consultation }))
);
const Faq = lazy(() => import('./pages/Faq').then((m) => ({ default: m.Faq })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const LocalPage = lazy(() => import('./pages/LocalPage').then((m) => ({ default: m.LocalPage })));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function RouteFallback() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center bg-[#FCFAF4]">
      <span className="text-[10px] uppercase tracking-label text-[#25231F]/35">Loading</span>
    </div>);

}

interface AppProps {
  /** Show the short brand curtain on first load. */
  showIntroLoader?: boolean;
  /** Desktop-only expanding dot cursor over imagery. */
  customCursor?: boolean;
}

export function App({ showIntroLoader = true, customCursor = true }: AppProps) {
  return (
    <BrowserRouter>
      <BookingProvider>
        {showIntroLoader ? <IntroLoader /> : null}
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout customCursor={customCursor} />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/panchakarma" element={<Panchakarma />} />
              <Route path="/therapies" element={<Therapies />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/rejuvenation" element={<Rejuvenation />} />
              <Route path="/wellness" element={<Wellness />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/nashik/:slug" element={<LocalPage />} />
              <Route path="/privacy" element={<Legal kind="privacy" />} />
              <Route path="/terms" element={<Legal kind="terms" />} />
              <Route path="/disclaimer" element={<Legal kind="disclaimer" />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BookingProvider>
    </BrowserRouter>);

}