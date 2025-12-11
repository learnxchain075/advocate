// src/components/Layout.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, MapPin, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
// import logoImage from "@assets/generated_images/ansel_&_miller_logo.png";
import logoImage from "../assets/generated_images/ans.png";
import { useLanguage, Language } from "@/lib/i18n";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  // Inject flag-icons CSS from CDN (jsdelivr). Runs once.
  useEffect(() => {
    const id = "flag-icons-cdn";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/css/flag-icons.min.css";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.practice"), href: "/practice-areas" },
    { label: t("nav.results"), href: "/results" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  // Map language code to country code used by flag-icons
  const langToCountry: Record<Language, string> = {
    en: "us", // show US flag for English
    es: "es",
    pt: "br",
    ru: "ru",
    hi: "in",
  };

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "pt", label: "Portuguese" },
    { code: "ru", label: "Russian" },
    { code: "hi", label: "Hindi" },
  ];

  // small helper to render flag element (uses flag-icons classes)
  const Flag = ({ country, size = 16 }: { country: string; size?: number }) => {
    // flag-icons provides .fi .fi-xx classes; ensure size is applied via inline style or tailwind
    return (
      <span
        className={`fi fi-${country} inline-block`}
        aria-hidden
        style={{ width: size, height: size, lineHeight: 0 }}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Banner */}
      <div className="bg-primary hidden sm:block text-primary-foreground py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Globe className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden xl:inline">{t("nav.we_speak")}</span>
              <span className="flex gap-3 items-center ml-1">
                {languages.map((lang) => {
                  const country = langToCountry[lang.code];
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        "flex items-center gap-2 transition-all cursor-pointer hover:text-accent focus:outline-none focus:ring-1 focus:ring-offset-1 rounded px-1 py-0.5",
                        language === lang.code ? "font-bold text-accent opacity-100" : "opacity-80 hover:opacity-100"
                      )}
                      title={lang.label}
                      aria-label={`Switch language to ${lang.label}`}
                      aria-pressed={language === lang.code}
                    >
                      <Flag country={country} size={18} />
                      <span className="text-xs sm:text-sm">{lang.label}</span>
                    </button>
                  );
                })}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a href="tel:954-922-9100" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span className="font-bold">24/7: 954-922-9100</span>
            </a>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="h-3 w-3 md:h-4 md:w-4" />
              {t("nav.location")}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoImage} alt="Ansel & Miller Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === item.href
                    ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold shadow-md">{t("nav.consultation")}</Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium py-2 border-b border-border/50",
                      location === item.href ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Language Selector */}
                <div className="mt-2  ">
                  <span className="flex items-center gap-2 flex-wrap">
                    <Globe className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
                    <span className="shrink-0">{t("nav.we_speak")}</span>
                    <span className="flex gap-2 items-center flex-wrap">
                      {languages.map((lang) => {
                        const country = langToCountry[lang.code];
                        return (
                          <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={cn(
                              "flex items-center gap-1 transition-all cursor-pointer hover:text-accent focus:outline-none focus:ring-1 focus:ring-offset-1 rounded px-1 py-0.5",
                              language === lang.code ? "font-bold text-accent opacity-100" : "opacity-80 hover:opacity-100"
                            )}
                            title={lang.label}
                            aria-label={`Switch language to ${lang.label}`}
                            aria-pressed={language === lang.code}
                          >
                            <Flag country={country} size={18} />
                            <span className="text-xs hidden sm:inline">{lang.label}</span>
                          </button>
                        );
                      })}
                    </span>
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-4">
                  <a href="tel:954-922-9100" className="flex items-center gap-2 text-primary font-bold text-lg">
                    <Phone className="h-5 w-5" /> 954-922-9100
                  </a>
                  <Link href="/contact">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                      {t("nav.consultation")}
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-2xl font-bold text-white">ANSEL & MILLER, LLC</span>
                <span className="text-xs tracking-widest uppercase text-gray-400">Personal Injury Attorneys</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dedicated to fighting for the injured in Hollywood, Fort Lauderdale, and across South Florida. We don't get paid unless you win.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-accent">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">{t("nav.home")}</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">{t("nav.about")}</Link></li>
                <li><Link href="/practice-areas" className="hover:text-white transition-colors">{t("nav.practice")}</Link></li>
                <li><Link href="/results" className="hover:text-white transition-colors">{t("nav.results")}</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">{t("nav.faq")}</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-accent">Practice Areas</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/practice/car-accidents" className="hover:text-white transition-colors">Car Accidents</Link></li>
                <li><Link href="/practice/truck-accidents" className="hover:text-white transition-colors">Truck Accidents</Link></li>
                <li><Link href="/practice/slip-and-fall" className="hover:text-white transition-colors">Slip & Fall</Link></li>
                <li><Link href="/practice/wrongful-death" className="hover:text-white transition-colors">Wrongful Death</Link></li>
                <li><Link href="/practice/medical-malpractice" className="hover:text-white transition-colors">Medical Malpractice</Link></li>
                <li><Link href="/practice/product-liability" className="hover:text-white transition-colors">Product Liability</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-accent">Contact Us</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>
                    1939 Tyler Street<br />
                    Hollywood, {t("nav.location")} 33020
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <a href="tel:954-922-9100" className="hover:text-white">954-922-9100</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0" />
                  <span>Available 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
            <p className="mb-2">
              The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
              This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
            <p>&copy; {new Date().getFullYear()} Ansel & Miller, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
