'use client';

import { X, Check, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import type { Service } from '@/types';
import { scrollToSection } from '@/lib/utils';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleContact = () => {
    onClose();
    setTimeout(() => scrollToSection('#contact'), 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Modal schließen"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Schließen"
        >
          <X className="w-5 h-5 text-text-dark" />
        </button>

        {/* Header Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-display font-bold text-white text-center px-6">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <p className="text-lg text-text-dark mb-6">{service.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-display font-bold text-text-dark mb-4">
              Das ist enthalten:
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-text-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Duration & Pricing */}
          <div className="grid sm:grid-cols-2 gap-4 p-4 bg-secondary rounded-xl mb-6">
            {service.duration && service.duration.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-text-light mb-2">
                  Verfügbare Optionen:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.duration.map((duration, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-text-dark text-sm font-medium rounded-full"
                    >
                      {duration}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h4 className="text-sm font-semibold text-text-light mb-2">
                Preis:
              </h4>
              <p className="text-2xl font-bold text-primary">
                {service.pricing}
              </p>
            </div>
          </div>

          {/* Info Box */}
          {service.comingSoon && (
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl mb-6">
              <p className="text-sm text-text-dark">
                <strong className="font-semibold">Bald verfügbar!</strong> Möchtest
                du informiert werden, sobald dieser Service startet?
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleContact}
            className="w-full btn-primary group"
          >
            {service.comingSoon ? 'Jetzt reservieren' : 'Anfrage starten'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}