'use client';

import { Dog, Trees, Home, Heart, ArrowRight, Clock } from 'lucide-react';
import type { Service } from '@/types';

const iconMap = {
  dog: Dog,
  trees: Trees,
  home: Home,
  heart: Heart,
};

interface ServiceCardProps {
  service: Service;
  onViewDetails: () => void;
}

export default function ServiceCard({
  service,
  onViewDetails,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Dog;

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-secondary hover:border-primary transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
      {/* Coming Soon Badge */}
      {service.comingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            Bald verfügbar
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="p-6 pb-0">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-text-dark mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-light mb-4 line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Duration Chips */}
      {service.duration && service.duration.length > 0 && (
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {service.duration.slice(0, 2).map((duration, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1 bg-secondary text-text-dark text-xs font-medium rounded-full"
              >
                <Clock className="w-3 h-3 mr-1" />
                {duration}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Pricing */}
      <div className="px-6 pb-4">
        <p className="text-lg font-bold text-primary">{service.pricing}</p>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <button
          onClick={onViewDetails}
          disabled={service.comingSoon}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
            service.comingSoon
              ? 'bg-secondary text-text-light cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary-dark group-hover:gap-3'
          }`}
        >
          {service.comingSoon ? 'Jetzt reservieren' : 'Details ansehen'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}