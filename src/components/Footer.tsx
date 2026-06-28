import React from 'react';
import { Instagram, Facebook, Mail, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  Mail,
};

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 border-t" style={{ background: '#F0EDE8', borderColor: '#E5DFD6' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h3 className="font-heading font-semibold text-2xl text-text mb-3">
              {siteContent.footer.logo}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              {siteContent.footer.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {siteContent.footer.social.map((social, index) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    onClick={(e) => {
                      if (social.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(social.href);
                      }
                    }}
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {siteContent.footer.sections.map((section, index) => (
            <div key={index} className="md:col-span-3">
              <h4 className="font-semibold text-text mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-muted text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center" style={{ borderColor: '#E5DFD6' }}>
          <p className="text-text-muted text-sm">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
