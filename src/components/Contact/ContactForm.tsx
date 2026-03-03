'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Check, AlertCircle } from 'lucide-react';
import { PET_TYPE_OPTIONS, SERVICE_OPTIONS } from '@/lib/constants';

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte gib eine gültige E-Mail-Adresse ein'),
  phone: z
    .string()
    .min(10, 'Bitte gib eine gültige Telefonnummer ein')
    .regex(
      /^[\d\s\+\-\(\)]+$/,
      'Telefonnummer enthält ungültige Zeichen'
    ),
  petType: z.string().min(1, 'Bitte wähle eine Tierart'),
  service: z.string().min(1, 'Bitte wähle einen Service'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Bitte akzeptiere die Datenschutzerklärung',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form Data:', data);

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-text-dark mb-2"
        >
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
            errors.name
              ? 'border-red-500 focus:border-red-600'
              : 'border-secondary focus:border-primary'
          }`}
          placeholder="Max Mustermann"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-text-dark mb-2"
          >
            E-Mail *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
              errors.email
                ? 'border-red-500 focus:border-red-600'
                : 'border-secondary focus:border-primary'
            }`}
            placeholder="max@beispiel.de"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-text-dark mb-2"
          >
            Telefon *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
              errors.phone
                ? 'border-red-500 focus:border-red-600'
                : 'border-secondary focus:border-primary'
            }`}
            placeholder="+49 123 456789"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Pet Type & Service */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="petType"
            className="block text-sm font-semibold text-text-dark mb-2"
          >
            Tierart *
          </label>
          <select
            {...register('petType')}
            id="petType"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none appearance-none bg-white ${
              errors.petType
                ? 'border-red-500 focus:border-red-600'
                : 'border-secondary focus:border-primary'
            }`}
          >
            <option value="">Bitte wählen...</option>
            {PET_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.petType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.petType.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-text-dark mb-2"
          >
            Gesuchter Service *
          </label>
          <select
            {...register('service')}
            id="service"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none appearance-none bg-white ${
              errors.service
                ? 'border-red-500 focus:border-red-600'
                : 'border-secondary focus:border-primary'
            }`}
          >
            <option value="">Bitte wählen...</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-text-dark mb-2"
        >
          Deine Nachricht *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none resize-none ${
            errors.message
              ? 'border-red-500 focus:border-red-600'
              : 'border-secondary focus:border-primary'
          }`}
          placeholder="Erzähl mir ein bisschen über dein Haustier und deine Bedürfnisse..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('privacy')}
            type="checkbox"
            className="w-5 h-5 mt-0.5 rounded border-2 border-secondary text-primary focus:ring-primary focus:ring-offset-0"
          />
          <span className="text-sm text-text-light">
            Ich habe die{' '}
            <a href="#" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>{' '}
            gelesen und stimme der Verarbeitung meiner Daten zu. *
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1 text-sm text-red-600">{errors.privacy.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <span className="inline-block animate-spin mr-2">●</span>
            Wird gesendet...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <Check className="mr-2 w-5 h-5" />
            Nachricht gesendet!
          </>
        ) : (
          <>
            Nachricht senden
            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-800">
            Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei dir.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-sm text-red-800">
            Etwas ist schiefgelaufen. Bitte versuche es später erneut oder
            kontaktiere mich direkt per Telefon.
          </p>
        </div>
      )}
    </form>
  );
}