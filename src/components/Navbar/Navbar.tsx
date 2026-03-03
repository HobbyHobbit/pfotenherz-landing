'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center space-x-2 group"
              aria-label="Zur Startseite"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-text-dark">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs text-text-light hidden sm:block">
                  {COMPANY_INFO.slogan}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-text-dark hover:text-primary font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
              >
                Kostenlose Erstberatung
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-dark hover:text-primary transition-colors"
              aria-label="Menü öffnen"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6 space-y-6">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg font-medium text-text-dark hover:text-primary transition-colors py-3 border-b border-secondary"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary w-full mt-auto"
            >
              Kostenlose Erstberatung
            </button>

            {/* Contact Info */}
            <div className="pt-6 border-t border-secondary space-y-2">
              <p className="text-sm text-text-light">
                <strong className="text-text-dark">Telefon:</strong>
                <br />
                {COMPANY_INFO.phone}
              </p>
              <p className="text-sm text-text-light">
                <strong className="text-text-dark">E-Mail:</strong>
                <br />
                {COMPANY_INFO.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}