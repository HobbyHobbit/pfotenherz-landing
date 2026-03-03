'use client';

import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative">
        {/* Quote Icon */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Quote className="w-8 h-8 text-primary" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? 'text-primary fill-primary'
                    : 'text-text-muted'
                }`}
              />
            ))}
          </div>

          {/* Text */}
          <blockquote className="text-center mb-8">
            <p className="text-xl sm:text-2xl text-text-dark leading-relaxed font-medium">
              „{testimonial.text}“
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {testimonial.avatar}
              </span>
            </div>

            {/* Name & Pet */}
            <div className="text-center">
              <p className="text-lg font-bold text-text-dark">
                {testimonial.name}
              </p>
              <p className="text-sm text-text-light">{testimonial.pet}</p>
              {testimonial.date && (
                <p className="text-xs text-text-muted mt-1">
                  {testimonial.date}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full" />
      </div>
    </div>
  );
}