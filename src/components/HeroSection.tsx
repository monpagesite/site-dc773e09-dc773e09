import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-24 overflow-hidden"
      style={{ background: '#FAF8F5' }}
    >
      {/* Decorative background blob */}
      <div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full opacity-40 blur-[120px] pointer-events-none"
        style={{ background: '#F0EDE8' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content - Left Column (55%) */}
          <div className="lg:col-span-7 space-y-8" data-reveal>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
              {siteContent.hero.badge}
            </div>

            {/* Headline */}
            <h1
              className="font-heading font-semibold text-5xl md:text-7xl text-text tracking-tight leading-none"
              data-reveal
            >
              {siteContent.hero.headline[0]}
              <br />
              {siteContent.hero.headline[1]}
            </h1>

            {/* Subtext */}
            <p
              className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg"
              data-reveal
            >
              {siteContent.hero.subtext}
            </p>

            {/* CTA Button */}
            <div className="space-y-4" data-reveal>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-[1.02] hover:bg-primary/90 transition-all duration-200 shadow-lg"
              >
                {siteContent.hero.ctaButton}
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                {siteContent.hero.trustIndicators.map((indicator, index) => (
                  <span key={index}>{indicator}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual - Right Column (45%) */}
          <div className="lg:col-span-5 relative" data-reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={siteContent.hero.image}
                alt={siteContent.hero.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div
              className="absolute bottom-4 left-4 bg-primary text-white rounded-2xl p-4 shadow-xl"
              data-reveal
            >
              <p className="font-semibold text-sm md:text-base">
                {siteContent.hero.floatingCard}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
