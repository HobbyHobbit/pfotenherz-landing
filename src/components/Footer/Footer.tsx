'use client';

import { Heart, Mail, Github, Linkedin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-display font-bold">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-sm text-text-muted max-w-md">
              {COMPANY_INFO.slogan}
            </p>
            <p className="text-sm text-text-muted mt-4">
              Professionelle Haustierbetreuung in {COMPANY_INFO.location} –
              liebevoll, zuverlässig und flexibel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  Start
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  Erfahrungen
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} {COMPANY_INFO.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>

      {/* Developer Credit Banner */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">
                🚀 Brauchst du auch eine Website wie diese?
              </p>
              <p className="text-white/90 text-sm">
                Lass dich kostenlos beraten und bringe dein Business online!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>

          {/* Developer Info */}
          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-white/90 text-sm">
              Design & Entwicklung:{' '}
              <a
                href="https://github.com/HobbyHobbit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:underline"
              >
                Leviatos
              </a>{' '}
              – Full-Stack Developer & Creative
            </p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <a
                href="https://github.com/HobbyHobbit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}