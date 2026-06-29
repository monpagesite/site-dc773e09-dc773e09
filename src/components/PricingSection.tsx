import React, { useEffect, useRef } from 'react';
import { Check, Calendar, Star, TrendingUp } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Calendar,
  Star,
  TrendingUp,
};

export const PricingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-reveal]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-4">
            {siteContent.pricing.title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            {siteContent.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {siteContent.pricing.plans.map((plan, index) => {
            const Icon = iconMap[plan.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.featured
                    ? 'border-2 border-accent-500 shadow-lg md:scale-105'
                    : 'border border-neutral-200 shadow-md hover:border-accent-300'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 mb-6 mx-auto">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-primary-900 text-center mb-2">
                  {plan.name}
                </h3>

                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-primary-900">
                    {plan.price}
                  </span>
                  <span className="text-neutral-600 ml-1">{plan.period}</span>
                </div>

                <p className="text-neutral-600 text-center mb-6 text-sm">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg'
                      : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                  }`}
                >
                  お問い合わせ
                </a>
              </div>
            );
          })}
        </div>

        <div
          data-reveal
          className="bg-primary-50 rounded-2xl p-6 md:p-8 border border-primary-100"
        >
          <h4 className="font-heading font-bold text-primary-900 mb-4 text-lg">
            料金について
          </h4>
          <ul className="space-y-2">
            {siteContent.pricing.notes.map((note, index) => (
              <li key={index} className="text-neutral-700 text-sm">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
