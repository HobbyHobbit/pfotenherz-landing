'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/constants';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import type { Service } from '@/types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">
              Unsere Leistungen für deine Fellfreunde
            </h2>
            <p className="section-subtitle mt-4">
              Von Gassi-Service bis Rundumbetreuung – wähle das passende Angebot
              für dein Haustier.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={() => setSelectedService(service)}
              />
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-text-dark mb-2">
                  Nicht sicher, welcher Service passt?
                </h3>
                <p className="text-text-light">
                  Lass dich kostenlos beraten! Wir finden gemeinsam die beste
                  Lösung für dich und dein Haustier.
                </p>
              </div>
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary whitespace-nowrap"
              >
                Jetzt Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}