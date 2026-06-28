import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LessonsSection } from './components/LessonsSection';
import { InstructorSection } from './components/InstructorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Set up reveal animation styles
    const style = document.createElement('style');
    style.textContent = `
      [data-reveal] {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      [data-reveal].revealed {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <HeroSection />
        <LessonsSection />
        <InstructorSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
