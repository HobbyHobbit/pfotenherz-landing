'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Lass uns kennenlernen</h2>
          <p className="section-subtitle mt-4">
            Hast du Fragen oder möchtest du einen Termin vereinbaren? Ich melde
            mich innerhalb von 24 Stunden bei dir!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Intro Text */}
            <div>
              <h3 className="text-2xl font-display font-bold text-text-dark mb-4">
                Was passiert als Nächstes?
              </h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <span>Du sendest mir deine Anfrage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <span>Ich melde mich innerhalb von 24h bei dir</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <span>
                    Wir vereinbaren ein unverbindliches Kennenlernen mit dir und
                    deinem Tier
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-dark mb-1">
                    Telefon
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="text-text-light hover:text-primary transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-dark mb-1">
                    E-Mail
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-text-light hover:text-primary transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-dark mb-1">
                    Standort
                  </p>
                  <p className="text-text-light">{COMPANY_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-dark mb-1">
                    Erreichbarkeit
                  </p>
                  <p className="text-text-light">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-secondary/30 rounded-2xl p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}