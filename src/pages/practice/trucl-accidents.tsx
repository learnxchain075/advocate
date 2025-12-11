import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Scale, 
  Timer, 
  Wrench, 
  Package, 
  FileSearch, 
  AlertTriangle, 
  HardDrive, 
  Siren,
  Phone,
  ArrowRight
} from "lucide-react";

export default function TruckAccidentsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-950 text-white overflow-hidden">
        {/* Abstract Background - Heavy Industry Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           {/* Diagonal hazard stripes pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,165,0,0.1)_25%,transparent_25%,transparent_50%,rgba(255,165,0,0.1)_50%,rgba(255,165,0,0.1)_75%,transparent_75%,transparent)] bg-[size:40px_40px]"></div>
           <div className="absolute right-0 bottom-0 w-[800px] h-[600px] bg-orange-600 rounded-full blur-[150px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium mb-6 shadow-xl">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-orange-500">Truck Accidents</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">
                Truck Accident Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              When 80,000 pounds of steel collides with a passenger car, the results are catastrophic. We fight the corporate giants to secure your future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-orange-900/40 border border-orange-500/50">
                  Free Case Review
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Start Investigation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTRO & THE WEIGHT DISPARITY --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Not Just a "Big Car" Accident
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Commercial truck accidents are legally and scientifically different from car crashes. The injuries are more severe, the regulations are stricter, and the insurance policies are much larger.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At <strong>Ansel & Miller</strong>, we understand the specific Federal Motor Carrier Safety Administration (FMCSA) regulations that govern these vehicles. We know that trucking companies often destroy evidence quickly, and we act fast to preserve the logs that prove negligence.
                </p>

                {/* The Weight Disparity Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                    <div className="text-center sm:text-left">
                      <div className="text-4xl font-black text-slate-900 mb-1">80,000 <span className="text-lg font-medium text-slate-500">lbs</span></div>
                      <div className="text-sm font-bold text-orange-600 uppercase tracking-wide">Semi-Truck</div>
                    </div>
                    <div className="hidden sm:block text-slate-300 text-4xl font-light">vs</div>
                    <div className="text-center sm:text-left">
                      <div className="text-4xl font-black text-slate-900 mb-1">3,000 <span className="text-lg font-medium text-slate-500">lbs</span></div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Passenger Car</div>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-600 text-sm">
                    Because of this mass difference, truck accidents frequently result in Traumatic Brain Injuries (TBI), spinal paralysis, crushed limbs, and wrongful death.
                  </p>
                </div>
              </div>
              
              {/* Sidebar / The "Black Box" */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden border-t-4 border-orange-500">
                <HardDrive className="absolute -bottom-6 -right-6 w-32 h-32 text-slate-800 opacity-50" />
                
                <h3 className="font-serif text-2xl font-bold mb-4 relative z-10 flex items-center gap-3">
                  <HardDrive className="w-6 h-6 text-orange-500" /> The "Black Box"
                </h3>
                <p className="text-slate-300 text-sm mb-6 relative z-10">
                  Most commercial trucks have an Electronic Control Module (ECM) that records data seconds before a crash.
                </p>
                <ul className="space-y-4 relative z-10">
                  {[
                    "Truck Speed at Impact",
                    "When Brakes Were Applied",
                    "Engine RPM & Gear Shifting",
                    "Hours on the Road (Fatigue)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 border-b border-slate-800 pb-2 last:border-0">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      <span className="font-medium text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-orange-900/30 border border-orange-500/30 p-3 rounded text-xs text-orange-200 relative z-10">
                  <strong>Warning:</strong> Trucking companies can legally erase this data if we don't send a preservation letter immediately.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- COMMON CAUSES GRID --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Investigating Negligence</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Why Do These Crashes Happen?</h2>
              <p className="text-slate-600">
                It is rarely just "bad luck." It is usually a violation of federal safety regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Timer, title: "Driver Fatigue", desc: "Drivers pressured to break 'Hours of Service' rules, driving while exhausted to meet deadlines." },
                { icon: Wrench, title: "Poor Maintenance", desc: "Bald tires, worn brakes, and ignored mechanical issues that cause loss of control." },
                { icon: Package, title: "Cargo Loading Errors", desc: "Unbalanced or unsecured loads that cause the truck to jackknife or roll over." },
                { icon: FileSearch, title: "Negligent Hiring", desc: "Companies hiring drivers with history of DUIs or reckless driving to fill seats." },
                { icon: Siren, title: "Speeding", desc: "Trying to beat the clock. A fully loaded truck takes 40% longer to stop than a car." },
                { icon: AlertTriangle, title: "Distracted Driving", desc: "Texting, checking GPS, or eating while operating a massive vehicle." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:border-orange-300">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LIABILITY & CORPORATE DEFENSE --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                <div className="lg:w-1/2">
                   <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                     Piercing the Corporate Shield
                   </h2>
                   <p className="text-lg text-slate-600 mb-6">
                     Trucking companies have aggressive legal teams. Their goal is to blame the weather, the road, or even you. They will try to hide behind layers of corporate liability.
                   </p>
                   <p className="text-slate-600 mb-8">
                     We identify every liable party to ensure you get full compensation. In a single crash, we might sue:
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "The Truck Driver",
                        "The Trucking Company",
                        "The Cargo Loader",
                        "The Maintenance Shop",
                        "The Vehicle Manufacturer"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                           <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                           <span className="font-medium text-slate-700">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="lg:w-1/2 bg-slate-900 text-white p-10 rounded-2xl relative overflow-hidden">
                   <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-600 rounded-full blur-[80px] opacity-30"></div>
                   
                   <h3 className="font-serif text-2xl font-bold mb-4 relative z-10">Level the Playing Field</h3>
                   <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                     Ansel & Miller has the resources to hire accident reconstruction experts, forensic data analysts, and medical specialists. We don't just file a claim; we prepare for war in the courtroom.
                   </p>
                   
                   <div className="flex flex-col gap-4 relative z-10">
                      <a href="tel:YOUR_PHONE_NUMBER">
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 font-bold text-lg">
                           Call Ansel & Miller
                        </Button>
                      </a>
                      <Link href="/contact">
                         <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 text-lg">
                           Get Your Free Case Strategy
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
            <Truck className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Don't Let Them Delete the Evidence</h2>
            <p className="text-slate-500 mb-6 max-w-xl mx-auto">
              Federal law allows trucking companies to purge data logs after a certain period. Call us today to stop the clock.
            </p>
            <p className="text-xs text-slate-400">
              Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}