import React, { useEffect, useRef } from 'react';
import { Award, Users, Clock, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Award,
  Users,
  Clock,
};

export const InstructorSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 100);
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

  return (
    <section
      id="instructor"
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{ background: '#FAF8F5' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text tracking-tight">
            {siteContent.instructor.title}
          </h2>
        </div>

        {/* Instructor Profile - Asymmetric Split (40% photo / 60% bio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo - Left Column (40%) */}
          <div className="lg:col-span-5" data-reveal>
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={siteContent.instructor.image}
                  alt={siteContent.instructor.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Highlights Cards */}
              <div className="mt-6 space-y-3">
                {siteContent.instructor.highlights.map((highlight, index) => {
                  const Icon = iconMap[highlight.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-surface rounded-2xl p-4 shadow-sm"
                    >
                      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-sm font-semibold text-text">
                        {highlight.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bio - Right Column (60%) */}
          <div className="lg:col-span-7 space-y-6" data-reveal>
            <div>
              <h3 className="font-heading font-semibold text-3xl md:text-4xl text-text mb-2">
                {siteContent.instructor.name}
              </h3>
              <p className="text-base text-primary font-semibold">
                {siteContent.instructor.credentials}
              </p>
            </div>

            <div className="space-y-4">
              {siteContent.instructor.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-text-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-[1.02] hover:bg-primary/90 transition-all duration-200 shadow-md"
              >
                体験レッスンを予約する
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
