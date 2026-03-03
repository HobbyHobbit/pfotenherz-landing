# 🛠️ Installation Guide

## Voraussetzungen

- **Node.js**: Version 18.x oder höher
- **Package Manager**: npm, yarn oder pnpm
- **Git**: Für Versionskontrolle

---

## 🚀 Schnellstart

### 1. Repository klonen

```bash
git clone https://github.com/HobbyHobbit/pfotenherz-landing.git
cd pfotenherz-landing
```

### 2. Dependencies installieren

```bash
npm install
# oder
yarn install
# oder
pnpm install
```

### 3. Environment Variables einrichten

```bash
cp .env.local.example .env.local
```

Bearbeite `.env.local` und füge deine eigenen Werte ein.

### 4. Development Server starten

```bash
npm run dev
# oder
yarn dev
# oder
pnpm dev
```

Die Anwendung ist jetzt unter [http://localhost:3000](http://localhost:3000) verfügbar!

---

## 🎨 Content anpassen

### Unternehmensdaten ändern

Bearbeite `src/lib/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: 'Dein Firmenname',
  slogan: 'Dein Slogan',
  phone: '+49 (0) XXX / XXX XX XX',
  email: 'deine@email.de',
  // ...
};
```

### Services hinzufügen/bearbeiten

Ebenfalls in `src/lib/constants.ts`:

```typescript
export const SERVICES: Service[] = [
  {
    id: 'neuer-service',
    title: 'Neuer Service',
    description: 'Beschreibung...',
    // ...
  },
];
```

### Testimonials aktualisieren

Echte Kundenstimmen in `src/lib/constants.ts` einfügen:

```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Echter Name',
    pet: 'mit Hund Max',
    avatar: 'EN',
    rating: 5,
    text: 'Echtes Zitat...',
  },
];
```

---

## 🌨️ Design anpassen

### Farben ändern

Bearbeite `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#YourColor',
    light: '#YourLightColor',
    dark: '#YourDarkColor',
  },
  // ...
}
```

### Schriftarten ändern

Bearbeite `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your',
});
```

---

## 📝 Formular Backend verbinden

### Option 1: E-Mail Service (z.B. SendGrid, Resend)

Erstelle API Route `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email'; // Deine E-Mail-Funktion

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: 'Neue Kontaktanfrage',
      html: `
        <h2>Neue Anfrage von ${data.name}</h2>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Tierart:</strong> ${data.petType}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Nachricht:</strong> ${data.message}</p>
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Fehler beim Senden' },
      { status: 500 }
    );
  }
}
```

Update `src/components/Contact/ContactForm.tsx`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // ...
};
```

### Option 2: Form-Backend Service (z.B. Formspree, Basin)

Einfach die `action` URL im Form aktualisieren.

---

## 📸 Bilder hinzufügen

### Logo & Favicon

1. Erstelle Logo-Dateien in `public/`:
   - `logo.svg` oder `logo.png`
   - `favicon.ico`

2. Update `src/app/layout.tsx` für Favicon

### Service/Testimonial Bilder

Füge Bilder zu `public/images/` hinzu und referenziere sie in den Komponenten:

```tsx
<Image src="/images/service-1.jpg" alt="Service" width={600} height={400} />
```

---

## 🧪 Testing

### Type-Check

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Build testen

```bash
npm run build
npm run start
```

---

## ❗ Troubleshooting

### "Module not found" Fehler

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Fehler

```bash
npm run type-check
```

### 3D Animation lädt nicht

Stelle sicher, dass `@react-three/fiber` und `three` korrekt installiert sind:

```bash
npm install @react-three/fiber @react-three/drei three
```

---

## 📞 Support

Bei Fragen oder Problemen:

- **GitHub Issues**: [Issues erstellen](https://github.com/HobbyHobbit/pfotenherz-landing/issues)
- **E-Mail**: your.email@example.com
- **Discord**: [Optional]

---

Viel Erfolg mit deiner Landing Page! 🚀🐾