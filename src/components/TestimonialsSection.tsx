import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const TestimonialsSection: React.FC = () => {
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
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{ background: '#F0EDE8' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text tracking-tight mb-4">
            {siteContent.testimonials.title}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              data-reveal
              className="bg-background rounded-3xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-250"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Quote Text */}
              <p className="text-base text-text-muted leading-relaxed mb-6">
                「{testimonial.quote}」
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-text text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
