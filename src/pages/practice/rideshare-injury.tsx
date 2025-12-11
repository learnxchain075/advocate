import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Car, 
  MapPin, 
  Wifi, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  Users, 
  Phone 
} from "lucide-react";

export default function RideshareInjuryPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-950 text-white overflow-hidden">
        {/* Abstract Background - Digital/Tech Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           {/* Digital map-like lines */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
           <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px] opacity-30 transform translate-x-1/3 -translate-y-1/4"></div>
           <div className="absolute left-20 bottom-20 w-32 h-32 bg-cyan-500 rounded-full blur-[60px] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium mb-6 shadow-xl">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-emerald-400">Rideshare Injury</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                Rideshare Accident Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              Uber and Lyft changed how we travel, but they also complicated how we recover damages. We cut through the insurance red tape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-emerald-900/30 border border-emerald-500/50">
                  Free Case Review
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Report an Accident
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTRO & THE INSURANCE PROBLEM --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              
              <div className="md:col-span-12 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  The "App Status" Trap
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Rideshare accidents are legally unique because the insurance coverage changes based on what the driver was doing on their phone at the exact second of the crash.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At <strong>Ansel & Miller</strong>, we don't rely on the driver's word. We subpoena the electronic logs to prove exactly which insurance policy applies to your injuries.
                </p>
              </div>

            </div>

            {/* THE INSURANCE TIERS CARD - VISUALIZED */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {/* Period 1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden group hover:border-emerald-300 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Smartphone className="w-16 h-16 text-slate-400" />
                </div>
                <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full mb-4">Period 1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">App Off</h3>
                <p className="text-sm text-slate-600 mb-4">The driver is not logged into the app.</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-emerald-700 text-sm">Coverage:</p>
                  <p className="text-slate-500 text-sm">Driver's Personal Insurance ONLY.</p>
                </div>
              </div>

              {/* Period 2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden group hover:border-emerald-300 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Wifi className="w-16 h-16 text-emerald-500" />
                </div>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-4">Period 2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">App On, Waiting</h3>
                <p className="text-sm text-slate-600 mb-4">Driver is logged in but hasn't accepted a ride.</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-emerald-700 text-sm">Coverage:</p>
                  <p className="text-slate-500 text-sm">Limited Liability (Usually 50k/100k/25k).</p>
                </div>
              </div>

              {/* Period 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden text-white shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Car className="w-16 h-16 text-emerald-400" />
                </div>
                <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full mb-4">Period 3</div>
                <h3 className="text-xl font-bold text-white mb-2">Ride in Progress</h3>
                <p className="text-sm text-slate-300 mb-4">Driver accepted a ride or passenger is in car.</p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="font-bold text-emerald-400 text-sm">Coverage:</p>
                  <p className="text-slate-300 text-sm font-bold">$1,000,000 Full Coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMMON CAUSES GRID --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">The Reality</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Why Rideshare Cars Crash</h2>
              <p className="text-slate-600">
                The business model incentivizes speed and constant app usage. This creates dangerous conditions for everyone on the road.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Smartphone, title: "App Distraction", desc: "Drivers are constantly checking GPS, accepting new rides, and messaging passengers while moving." },
                { icon: Clock, title: "Speeding / Rushing", desc: "Since they are paid by the trip, drivers often speed to drop off passengers faster." },
                { icon: MapPin, title: "Dangerous Stops", desc: "Stopping abruptly in traffic lanes or bike lanes to pick up or drop off passengers." },
                { icon: Users, title: "Fatigue", desc: "Many drivers work multiple jobs or drive 12+ hours straight to make ends meet." },
                { icon: Car, title: "Lack of Maintenance", desc: "Personal vehicles engaging in heavy commercial use often have worn brakes and tires." },
                { icon: AlertTriangle, title: "Inexperienced Drivers", desc: "Unlike taxi drivers, rideshare drivers require minimal training and local road knowledge." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:border-emerald-300">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHO WE REPRESENT & CTA --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                <div className="lg:w-1/2">
                   <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                     We Represent Everyone Impacted
                   </h2>
                   <p className="text-lg text-slate-600 mb-8">
                     You don't have to be inside the Uber to sue. We handle claims for:
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                         <Users className="w-6 h-6 text-emerald-600" />
                         <span className="font-bold text-slate-800">Passengers</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                         <Car className="w-6 h-6 text-emerald-600" />
                         <span className="font-bold text-slate-800">Other Drivers Hit by Rideshares</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                         <Users className="w-6 h-6 text-emerald-600" />
                         <span className="font-bold text-slate-800">Pedestrians & Cyclists</span>
                      </div>
                   </div>
                </div>

                <div className="lg:w-1/2 bg-slate-900 text-white p-10 rounded-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-full blur-[80px] opacity-20"></div>
                   <h3 className="font-serif text-2xl font-bold mb-4 relative z-10">Don't Let Them Deny You</h3>
                   <p className="text-slate-300 mb-8 relative z-10">
                     Uber and Lyft have massive legal teams dedicated to denying liability. They will claim the driver was an "independent contractor" to avoid paying. We know how to beat that defense.
                   </p>
                   <div className="flex flex-col gap-4 relative z-10">
                      <a href="tel:YOUR_PHONE_NUMBER">
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-12 font-bold text-lg">
                           Call Ansel & Miller
                        </Button>
                      </a>
                      <Link href="/contact">
                         <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 text-lg">
                           Start Your Claim Online
                         </Button>
                      </Link>
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Maximum Recovery for Modern Accidents</h2>
            <p className="text-slate-500 mb-6">Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}