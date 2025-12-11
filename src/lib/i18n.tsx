import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt' | 'ru' | 'hi';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    es: 'Inicio',
    pt: 'Início',
    ru: 'Главная',
    hi: 'होम'
  },
  'nav.about': {
    en: 'About Us',
    es: 'Nosotros',
    pt: 'Sobre Nós',
    ru: 'О нас',
    hi: 'हमारे बारे में'
  },
  'nav.practice': {
    en: 'Practice Areas',
    es: 'Áreas de Práctica',
    pt: 'Áreas de Atuação',
    ru: 'Сферы практики',
    hi: 'अभ्यास क्षेत्र'
  },
  'nav.results': {
    en: 'Case Results',
    es: 'Resultados',
    pt: 'Resultados',
    ru: 'Результаты',
    hi: 'परिणाम'
  },
  'nav.faq': {
    en: 'FAQ',
    es: 'Preguntas',
    pt: 'Perguntas',
    ru: 'Вопросы',
    hi: 'प्रश्न'
  },
  'nav.contact': {
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    ru: 'Контакты',
    hi: 'संपर्क'
  },
  'nav.consultation': {
    en: 'Free Consultation',
    es: 'Consulta Gratis',
    pt: 'Consulta Grátis',
    ru: 'Бесплатная консультация',
    hi: 'मुफ्त परामर्श'
  },
  'nav.we_speak': {
    en: 'We speak:',
    es: 'Hablamos:',
    pt: 'Falamos:',
    ru: 'Мы говорим:',
    hi: 'हम बोलते हैं:'
  },
  'nav.location': {
    en: 'Florida',
    es: 'Florida',
    pt: 'Flórida',
    ru: 'Флорида',
    hi: 'फ्लोरिडा'
  },
  
  // Hero
  'hero.serving': {
    en: 'SERVING SOUTH FLORIDA SINCE 1984',
    es: 'SIRVIENDO AL SUR DE FLORIDA DESDE 1984',
    pt: 'SERVINDO O SUL DA FLÓRIDA DESDE 1984',
    ru: 'ОБСЛУЖИВАЕМ ЮЖНУЮ ФЛОРИДУ С 1984 ГОДА',
    hi: '1984 से दक्षिण फ्लोरिडा की सेवा कर रहे हैं'
  },
  'hero.title.restore': {
    en: 'Restoring Lives.',
    es: 'Restaurando Vidas.',
    pt: 'Restaurando Vidas.',
    ru: 'Восстанавливаем жизни.',
    hi: 'जीवन को बहाल करना।'
  },
  'hero.title.protect': {
    en: 'Protecting Futures.',
    es: 'Protegiendo Futuros.',
    pt: 'Protegendo Futuros.',
    ru: 'Защищаем будущее.',
    hi: 'भविष्य की रक्षा करना।'
  },
  'hero.description': {
    en: 'When life changes in an instant, you need a team that stands by your side. We are Ansel & Miller — aggressive trial lawyers dedicated to fighting for the injured.',
    es: 'Cuando la vida cambia en un instante, necesita un equipo que esté a su lado. Somos Ansel & Miller — abogados litigantes agresivos dedicados a luchar por los lesionados.',
    pt: 'Quando a vida muda num instante, você precisa de uma equipe ao seu lado. Somos Ansel & Miller — advogados de julgamento agressivos dedicados a lutar pelos feridos.',
    ru: 'Когда жизнь меняется в одно мгновение, вам нужна команда, которая будет рядом. Мы Ansel & Miller — агрессивные судебные адвокаты, борющиеся за пострадавших.',
    hi: 'जब जीवन एक पल में बदल जाता है, तो आपको एक ऐसी टीम की आवश्यकता होती है जो आपके साथ खड़ी हो। हम एंसेल और मिलर हैं — घायलों के लिए लड़ने के लिए समर्पित आक्रामक ट्रायल वकील।'
  },
  'hero.call_us': {
    en: 'Call 954-922-9100',
    es: 'Llama al 954-922-9100',
    pt: 'Ligue 954-922-9100',
    ru: 'Звоните 954-922-9100',
    hi: 'कॉल करें 954-922-9100'
  },
  'hero.no_fee': {
    en: 'No Fee Unless We Win',
    es: 'Sin Honorarios Si No Ganamos',
    pt: 'Sem Taxa Se Não Ganharmos',
    ru: 'Нет оплаты, пока мы не выиграем',
    hi: 'जब तक हम जीतते नहीं, कोई शुल्क नहीं'
  },
  'hero.top_rated': {
    en: 'Top Rated Attorneys',
    es: 'Abogados Mejor Calificados',
    pt: 'Advogados Mais Bem Avaliados',
    ru: 'Лучшие адвокаты',
    hi: 'शीर्ष रेटेड वकील'
  },
  
  // Eric Card
  'eric.title': {
    en: 'Founding Partner',
    es: 'Socio Fundador',
    pt: 'Sócio Fundador',
    ru: 'Основатель',
    hi: 'संस्थापक भागीदार'
  },
  'eric.quote': {
    en: '"I fight for you like I would for my own family."',
    es: '"Lucho por ti como lo haría por mi propia familia."',
    pt: '"Luto por você como faria pela minha própria família."',
    ru: '"Я борюсь за вас так же, как за свою семью."',
    hi: '"मैं आपके लिए वैसे ही लड़ता हूं जैसे मैं अपने परिवार के लिए लड़ता।"'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    // Fallback to English if translation missing
    if (translations[key] && translations[key]['en']) {
      return translations[key]['en'];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
