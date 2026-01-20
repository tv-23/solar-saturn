// src/i18n/ui.ts
export const languages = {
    en: 'English',
    fr: 'Français',
  };
  
  export const defaultLang = 'en';
  
  export const ui = {
    en: {
      'header.tagline': 'SEATRUST LOGISTICS — Transports & Logistiques Maritimes Shipping & Logistics',
      'nav.home': 'Home',
      'nav.about': 'Seatrust',
      'nav.companies': 'Our Companies',
      'nav.contact': 'Contact Us',
      'nav.call': 'Call us',
    },
    fr: {
      'header.tagline': 'SEATRUST LOGISTICS — Transports & Logistiques Maritimes',
      'nav.home': 'Accueil',
      'nav.about': 'Seatrust',
      'nav.companies': 'Nos Sociétés',
      'nav.contact': 'Contactez-nous',
      'nav.call': 'Nous appeler',
    },
  } as const;