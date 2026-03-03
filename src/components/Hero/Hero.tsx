'use client';

import { ArrowRight, PlayCircle } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary-light via-white to-accent/5"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                🐾 Zuverlässige Betreuung in {COMPANY_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text-dark leading-tight">
              <span className="block">{COMPANY_INFO.tagline.split(',')[0]},</span>
              <span className="block text-primary mt-2">
                {COMPANY_INFO.tagline.split(',')[1]?.trim() || 'wenn du mal nicht da bist'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-text-light max-w-xl mx-auto lg:mx-0">
              Professionelle und liebevolle Betreuung für deinen Hund oder deine
              Katze. Gassi-Service, Heimbetreuung und mehr – flexibel nach deinen
              Wünschen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group"
              >
                Jetzt unverbindlich anfragen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-secondary group"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                So läuft ein Besuch ab
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-secondary">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-text-light">Glückliche Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5 Jahre</div>
                <div className="text-sm text-text-light">Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-text-light">Erreichbar</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Paw-Heart */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <Hero3D />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center gap-2 text-text-light hover:text-primary transition-colors"
          aria-label="Weiter scrollen"
        >
          <span className="text-sm font-medium">Mehr erfahren</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}