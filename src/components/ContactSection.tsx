import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Mail, Phone, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Clock,
  Mail,
  Phone,
};

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('お問い合わせありがとうございます。後ほどご連絡させていただきます。');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{ background: '#FAF8F5' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text tracking-tight mb-4">
            {siteContent.contact.title}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form - Left Column (60%) */}
          <div className="lg:col-span-7" data-reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-surface rounded-3xl p-8 md:p-10 shadow-lg space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={siteContent.contact.form.namePlaceholder}
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-border bg-background text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={siteContent.contact.form.emailPlaceholder}
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-border bg-background text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={siteContent.contact.form.phonePlaceholder}
                  className="w-full px-6 py-4 rounded-2xl border border-border bg-background text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={siteContent.contact.form.messagePlaceholder}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border border-border bg-background text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-[1.02] hover:bg-primary/90 transition-all duration-200 shadow-md"
              >
                {siteContent.contact.form.submitButton}
              </button>
            </form>
          </div>

          {/* Contact Info - Right Column (40%) */}
          <div className="lg:col-span-5" data-reveal>
            <div className="bg-surface rounded-3xl p-8 md:p-10 shadow-lg space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-text mb-6">
                {siteContent.contact.info.title}
              </h3>

              {siteContent.contact.info.items.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={index} className="flex gap-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text text-sm mb-1">
                        {item.label}
                      </p>
                      <p className="text-text-muted text-sm whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
