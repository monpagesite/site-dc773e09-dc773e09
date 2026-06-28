import React, { useEffect, useRef } from 'react';
import { Piano, Gift, Music, RotateCcw, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Piano,
  Gift,
  Music,
  RotateCcw,
};

export const LessonsSection: React.FC = () => {
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
      id="lessons"
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{ background: '#F0EDE8' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text tracking-tight mb-4">
            {siteContent.lessons.title}
          </h2>
          <p className="text-lg text-text-muted">
            {siteContent.lessons.subtitle}
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {siteContent.lessons.courses.map((course, index) => {
            const Icon = iconMap[course.icon];
            const isGift = course.icon === 'Gift';

            return (
              <div
                key={index}
                data-reveal
                className="bg-background rounded-3xl p-8 md:p-10 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-250"
              >
                <Icon
                  className={`w-12 h-12 mb-4 ${
                    isGift ? 'text-accent' : 'text-primary'
                  }`}
                />
                <h3 className="font-heading font-semibold text-2xl md:text-3xl text-text mb-3">
                  {course.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Meta or Badge */}
                {course.badge && (
                  <span className="inline-block bg-accent/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                    {course.badge}
                  </span>
                )}
                {course.meta && (
                  <p className="text-sm text-primary font-semibold">
                    {course.meta}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
