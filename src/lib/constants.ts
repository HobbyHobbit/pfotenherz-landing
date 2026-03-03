import { Service, Testimonial, NavLink } from '@/types';

// Company Information
export const COMPANY_INFO = {
  name: 'PfotenHerz',
  slogan: 'Liebevolle Betreuung für deine Fellfreunde',
  tagline: 'Dein Pfotenpartner, wenn du mal nicht da bist',
  location: 'Wiesbaden & Umgebung',
  phone: '+49 (0) 611 / 123 456 78',
  email: 'kontakt@pfotenherz-wiesbaden.de',
  hours: 'Mo-Fr: 8:00-20:00 Uhr | Sa-So: 10:00-18:00 Uhr',
};

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: 'Start', href: '#hero' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Erfahrungen', href: '#testimonials' },
  { label: 'Kontakt', href: '#contact' },
];

// Services
export const SERVICES: Service[] = [
  {
    id: 'gassi-service',
    title: 'Gassi-Service',
    description:
      'Individuelle Spaziergänge für deinen Hund – ob kurze Runde oder ausgiebige Wanderung. Flexibel nach deinem Zeitplan.',
    icon: 'dog',
    available: true,
    features: [
      'Individuelle oder Gruppen-Spaziergänge',
      'Flexible Zeiten nach Absprache',
      'Fotoupdates während des Spaziergangs',
      'Auch spontan buchbar',
    ],
    duration: ['30 Min', '60 Min', '90 Min'],
    pricing: 'ab 15€ / Spaziergang',
  },
  {
    id: 'outdoor-care',
    title: 'Betreuung im Freien',
    description:
      'Aktive Zeit im Park, Spielen, Toben und soziale Kontakte für dein Tier – immer unter Aufsicht.',
    icon: 'trees',
    available: true,
    features: [
      'Spiel und Spaß im Park',
      'Sozialisierung mit anderen Tieren',
      'Bewegung und geistige Auslastung',
      'Perfekt für energiegeladene Hunde',
    ],
    duration: ['60 Min', '120 Min'],
    pricing: 'ab 20€ / Stunde',
  },
  {
    id: 'home-visit',
    title: 'Betreuung beim Kunden',
    description:
      'Füttern, Streicheln, Spielen und Katzenklo-Service bei dir zuhause. Perfekt für Katzen oder wenn dein Tier sein gewohntes Umfeld braucht.',
    icon: 'home',
    available: true,
    features: [
      'Füttern nach deinem Plan',
      'Frisches Wasser bereitstellen',
      'Katzenklo reinigen',
      'Spielen und Schmusen',
      'Blumen gießen & Post reinholen',
      'Tägliche Updates mit Fotos',
    ],
    duration: ['1× täglich', '2× täglich'],
    pricing: 'ab 18€ / Besuch',
  },
  {
    id: 'home-boarding',
    title: 'Betreuung bei mir',
    description:
      'Dein Haustier verbringt Zeit in meinem Zuhause – mit viel Zuwendung und in familiärer Atmosphäre. Jetzt reservieren!',
    icon: 'heart',
    available: false,
    comingSoon: true,
    features: [
      'Betreuung in familiärem Umfeld',
      '24/7 Aufsicht und Zuwendung',
      'Regelmäßige Spaziergänge',
      'Tägliche Video-Updates',
      'Notfallkontakt jederzeit erreichbar',
    ],
    pricing: 'Preise auf Anfrage',
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Lisa M.',
    pet: 'mit Hund Milo',
    avatar: 'LM',
    rating: 5,
    text: 'Milo liebt seine Gassirunden mit Anna! Sie ist zuverlässig, liebevoll und schickt mir immer süße Fotos. Ich kann beruhigt arbeiten.',
    date: 'Februar 2026',
  },
  {
    id: '2',
    name: 'Thomas K.',
    pet: 'mit Katze Luna',
    avatar: 'TK',
    rating: 5,
    text: 'Endlich jemand, der sich genauso um Luna kümmert wie ich. Anna kommt zweimal täglich und Luna ist immer glücklich. Absolute Empfehlung!',
    date: 'Januar 2026',
  },
  {
    id: '3',
    name: 'Sarah B.',
    pet: 'mit Hund Bella',
    avatar: 'SB',
    rating: 5,
    text: 'Bella ist ein nervöser Hund, aber Anna hat sofort einen Draht zu ihr gefunden. Die Betreuung ist professionell und herzlich zugleich.',
    date: 'Dezember 2025',
  },
  {
    id: '4',
    name: 'Michael R.',
    pet: 'mit Kater Felix',
    avatar: 'MR',
    rating: 5,
    text: 'Perfekt für meinen Urlaub! Felix wurde bei sich zuhause versorgt und ich bekam täglich Updates. So entspannt war ich noch nie auf Reisen.',
    date: 'November 2025',
  },
];

// Contact Form Options
export const PET_TYPE_OPTIONS = [
  { value: 'dog', label: 'Hund' },
  { value: 'cat', label: 'Katze' },
  { value: 'both', label: 'Hund & Katze' },
  { value: 'other', label: 'Anderes Haustier' },
];

export const SERVICE_OPTIONS = SERVICES.filter((s) => s.available).map((s) => ({
  value: s.id,
  label: s.title,
}));