import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { ScrollToTop } from './ScrollToTop';
import { CustomCursor } from './CustomCursor';

/** Routes whose opening section is a dark photograph beneath the navigation. */
const DARK_HERO_ROUTES = ['/', '/panchakarma', '/rejuvenation', '/nashik/panchakarma-therapy'];

interface LayoutProps {
  customCursor?: boolean;
}

export function Layout({ customCursor = true }: LayoutProps) {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const overDark = DARK_HERO_ROUTES.includes(pathname);

  return (
    <div className="flex min-h-screen w-full flex-col bg-ivory">
      <ScrollToTop />
      {customCursor ? <CustomCursor /> : null}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-forest focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-label focus:text-ivory">
        
        Skip to content
      </a>
      <Navbar overDark={overDark} />
      <motion.main
        id="main"
        key={pathname}
        className="flex-1"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.2 : 0.6, ease: [0.23, 1, 0.32, 1] }}>
        
        <Outlet />
      </motion.main>
      <Footer />
      <FloatingWhatsApp />
    </div>);

}