import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Footprints, 
  CarFront, 
  Smartphone, 
  Siren, 
  Timer, 
  HeartPulse, 
  AlertOctagon, 
  ArrowRight,
  Gavel,
  ShieldAlert,
  Phone
} from "lucide-react";

export default function PedestrianAccidentsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Decoration - Asphalt & Streetlights Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute left-1/2 top-0 w-[800px] h-[800px] bg-rose-900 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute right-0 bottom-0 w-96 h-96 bg-slate-700 rounded-full blur-[100px] opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-rose-400">Pedestrian Accidents</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-white">
                Pedestrian Accident Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              Flesh vs. Steel is an unfair match. When drivers ignore the rules of the road, we fight to rebuild your life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-rose-700 hover:bg-rose-800 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-rose-900/30">
                  Free Case Review
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Contact Us Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTRO & THE "UNFAIR MATCH" --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              
              {/* Main Content */}
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Exposed and Vulnerable
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Unlike motorists who have airbags, seatbelts, and steel frames, pedestrians are completely exposed to the impact. Even a low-speed collision can result in life-altering trauma.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At <strong>Ansel & Miller</strong>, we represent victims across South Florida. We know that insurance companies often try to blame the pedestrian—claiming you weren't in a crosswalk or were wearing dark clothing. We use accident reconstruction experts to prove the driver was negligent.
                </p>

                {/* FL Danger Stats Box */}
                <div className="bg-slate-50 border-l-4 border-rose-600 p-6 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <AlertOctagon className="w-8 h-8 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">A Dangerous State for Walkers</h3>
                      <p className="text-slate-600 text-sm">
                        According to the NHTSA, Florida consistently ranks among the most dangerous states for pedestrians. High tourism, distracted drivers, and wide, fast roads create a deadly combination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar / Legal Quick Facts */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <Footprints className="absolute bottom-[-20px] right-[-20px] w-48 h-48 text-slate-800 opacity-50 rotate-[-15deg]" />
                
                <h3 className="font-serif text-2xl font-bold mb-6 relative z-10">Know Your Rights</h3>
                <ul className="space-y-6 relative z-10">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-bold text-rose-200">The Crosswalk Rule</h4>
                      <p className="text-sm text-slate-300">Drivers must yield to pedestrians in crosswalks. However, you also have a duty not to dart into traffic.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-bold text-rose-200">No-Fault (PIP) Limits</h4>
                      <p className="text-sm text-slate-300">Your own auto insurance (or the driver's) pays first. But PIP only covers $10k. We sue for the rest.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-bold text-rose-200">Hit & Run?</h4>
                      <p className="text-sm text-slate-300">If the driver flees, we can often pursue compensation through your own Uninsured Motorist coverage.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* --- COMMON CAUSES GRID --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">How These Accidents Happen</h2>
              <p className="text-slate-600">
                In almost every case, a split-second of driver negligence changes a life forever.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Smartphone, title: "Distracted Driving", desc: "Drivers looking at phones instead of the road are the leading cause of pedestrian impacts." },
                { icon: Timer, title: "Speeding", desc: "High speeds reduce reaction time and drastically increase the severity of injuries." },
                { icon: AlertOctagon, title: "Failure to Yield", desc: "Drivers turning right on red or ignoring crosswalk signals while pedestrians have the walk sign." },
                { icon: Siren, title: "Impaired Driving", desc: "Drunk or drugged drivers lack the coordination to spot pedestrians at night." },
                { icon: CarFront, title: "Backing Up Accidents", desc: "Occurs frequently in parking lots and driveways where visibility is limited." },
                { icon: Footprints, title: "Poor Visibility", desc: "Dark roads and bad weather contribute, but drivers must adjust their speed accordingly." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-rose-300 transition-all hover:shadow-md group">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- DAMAGES & RECOVERY --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                <div className="lg:w-1/2 order-2 lg:order-1">
                   {/* Visual "Card" for Damages */}
                   <div className="relative bg-slate-900 rounded-2xl p-10 text-white overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full blur-[80px] opacity-20"></div>
                      <h3 className="text-2xl font-serif font-bold mb-6 relative z-10">Full Compensation</h3>
                      <p className="text-slate-300 mb-6 relative z-10">We fight to recover every dollar you need for:</p>
                      <div className="grid gap-4 relative z-10">
                        {[
                          "Traumatic Brain Injuries (TBI)",
                          "Spinal Cord Damage & Paralysis",
                          "Complex Fractures & Surgeries",
                          "Permanent Scarring & Disfigurement",
                          "Lost Career Opportunities",
                          "Pain & Suffering"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                             <HeartPulse className="w-5 h-5 text-rose-500" />
                             <span className="font-medium text-slate-200">{item}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="lg:w-1/2 order-1 lg:order-2">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    We Prove Liability When It Matters Most
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Pedestrian cases often involve a "he-said, she-said" dispute. The driver may claim you darted out. The insurance company may claim you were distracted.
                  </p>
                  <p className="text-slate-600 mb-8">
                    We counter these tactics with hard evidence. We pull traffic camera footage, analyze skid marks, and download the vehicle's "Black Box" data to prove speed and braking patterns. We build a fortress of facts around your claim.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link href="/contact">
                       <Button className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 text-lg">
                        Start Your Claim
                       </Button>
                     </Link>
                     <a href="tel:YOUR_PHONE_NUMBER">
                       <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 h-12 px-8 text-lg flex gap-2">
                        <Phone className="w-4 h-4" /> Call Now
                       </Button>
                     </a>
                  </div>
                </div>

             </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Don't Walk Alone</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              If you or a loved one has been hit by a car, the path to recovery is long. Let us handle the legal burden while you focus on healing.
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