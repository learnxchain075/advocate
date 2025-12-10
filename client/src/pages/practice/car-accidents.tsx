import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Car, 
  Scale, 
  Phone, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Gavel,
  HeartHandshake,
  Clock
} from "lucide-react";

export default function CarAccidentsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute left-0 bottom-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-100 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Dedicated Legal Advocacy in South Florida</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Car Accident Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl">
              When life hurts, we make it personal. We don't treat you like a number—we fight for your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-amber-900/20">
                  Free Case Evaluation
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Contact Us Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTRO & EMPATHY --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Recovering from the Unexpected
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  A car accident can happen in seconds, but the consequences can last a lifetime. From mounting medical bills to chronic pain, even a straightforward crash can turn a family’s life upside down.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  At <strong>Ansel & Miller</strong>, we understand how devastating these situations can be. We are not a high-volume law firm that churns through cases. Our attorneys and staff have worked together for years, taking pride in providing personal attention and proven legal advocacy.
                </p>
                <div className="flex items-center gap-4 p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-lg">
                  <HeartHandshake className="w-10 h-10 text-amber-600 flex-shrink-0" />
                  <p className="text-sm md:text-base font-medium text-slate-800">
                    "Our commitment goes beyond financial recovery. We believe our role is to help clients rebuild their lives."
                  </p>
                </div>
              </div>
              
              {/* Quick Stats / Sidebar */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-serif text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Why Action Matters</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Clock className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">14-Day Rule</h4>
                      <p className="text-sm text-slate-300">You must seek medical care within 14 days to access PIP benefits.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Scale className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Comparative Fault</h4>
                      <p className="text-sm text-slate-300">Florida law allows compensation even if you were partially at fault.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Shield className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">No Fees Unless We Win</h4>
                      <p className="text-sm text-slate-300">We work on contingency. You pay nothing upfront.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- LEGAL INFO (PIP) --- */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Navigating Florida’s No-Fault System</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Florida laws are complex. Understanding "PIP" is the first step to protecting your rights.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> What PIP Covers
                </h3>
                <p className="text-slate-600 mb-4">
                  Personal Injury Protection (PIP) covers 80% of medical expenses and 60% of lost income, up to <strong>$10,000</strong>, regardless of who caused the crash.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> The "Serious Injury" Threshold
                </h3>
                <p className="text-slate-600 mb-4">
                  If injuries are severe (permanent loss of function, scarring, etc.), you can step outside the no-fault system and sue the at-fault driver for <strong>full damages</strong>.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-900 text-white p-6 rounded-xl text-center">
              <p className="text-lg font-medium">
                Insurance companies fight hard to limit payouts. We ensure your injuries are properly documented to meet the legal thresholds for maximum compensation.
              </p>
            </div>
          </div>
        </section>

        {/* --- COMMON CAUSES & TYPES GRID --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Cases We Handle</h2>
              <p className="mt-4 text-slate-600">From intersection fender-benders to catastrophic highway collisions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, title: "Distracted Driving", desc: "Texting and app usage remain a leading cause of preventable crashes." },
                { icon: AlertTriangle, title: "Drunk Driving", desc: "We pursue justice and punitive damages for DUI victims." },
                { icon: Car, title: "Rear-End Collisions", desc: "Even low-speed impacts can cause long-term spinal injuries." },
                { icon: Shield, title: "Rideshare Accidents", desc: "Complex cases involving Uber/Lyft policies and liability." },
                { icon: ArrowRight, title: "Intersection Crashes", desc: "T-bone accidents caused by running red lights or stop signs." },
                { icon: AlertTriangle, title: "Rollovers", desc: "SUVs and trucks are prone to dangerous rollovers causing severe trauma." },
                { icon: Gavel, title: "Hit & Run", desc: "We help locate offenders and maximize your uninsured motorist claims." },
                { icon: Scale, title: "Catastrophic Injury", desc: "Brain and spinal injuries requiring lifetime care planning." },
              ].map((item, index) => (
                <div key={index} className="group p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all hover:border-blue-200">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- HOW WE HELP (THE DIFFERENCE) --- */}
        <section className="py-20 bg-slate-900 text-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                  The Ansel & Miller Difference
                </h2>
                <p className="text-lg mb-6 text-slate-300">
                  Our firm is built on the principle that <strong>quality matters more than quantity</strong>. We do not take every case. We focus our energy on the people who need us most.
                </p>
                <div className="space-y-4">
                  {[
                    "Direct communication with your attorney, not just paralegals.",
                    "Thorough investigation and accident reconstruction.",
                    "Negotiating aggressively with insurance giants.",
                    "Trial-ready preparation for every single case."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                <div className="absolute -top-4 -right-4 bg-amber-500 w-20 h-20 rounded-full opacity-20 blur-2xl"></div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Start Your Recovery Today</h3>
                <p className="mb-8 text-slate-400">
                  Don't let the insurance company dictate your future. Let us review your case for free and help you understand your options.
                </p>
                <div className="space-y-3">
                  <a href="tel:YOUR_PHONE_NUMBER" className="block">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold h-12 text-lg">
                      Call Ansel & Miller
                    </Button>
                  </a>
                  <Link href="/contact">
                     <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700 hover:text-white h-12">
                      Send us a Message
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER AREA --- */}
        <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
          <div className="container mx-auto px-4 text-center text-sm">
            <p className="mb-2">Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.</p>
            <p>&copy; {new Date().getFullYear()} Ansel & Miller. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}