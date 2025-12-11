import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Footprints, 
  Dog, 
  Waves, 
  AlertTriangle, 
  Hammer, 
  ShieldCheck, 
  ClipboardCheck, 
  Camera, 
  Phone,
  ArrowRight
} from "lucide-react";

export default function PremisesLiabilityPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background - Structure & Safety Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           {/* Geometric shapes representing structures */}
           <div className="absolute right-1/4 top-0 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[120px] transform -translate-y-1/2"></div>
           <div className="absolute left-0 bottom-0 w-96 h-96 bg-slate-600 rounded-full blur-[80px]"></div>
           <div className="absolute top-20 right-20 w-32 h-32 border-4 border-amber-500/20 rounded-xl transform rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-amber-400">Premises Liability</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white">
                Premises Liability Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              Property owners have a duty to keep you safe. When they cut corners on maintenance or security, we hold them accountable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-amber-900/30">
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

      {/* --- INTRO & CORE CONCEPT --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  It's Not Just "Bad Luck"
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Premises liability covers injuries that occur on another person's property due to unsafe conditions. Whether it's a spill in a grocery store or a broken gate at an apartment complex, owners have a legal responsibility.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  At <strong>Ansel & Miller</strong>, we know that these accidents often happen because a business chose profits over safety. We investigate maintenance logs, security footage, and inspection records to prove they knew about the danger and did nothing.
                </p>
                
                {/* Legal Elements Box */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Duty of Care", desc: "The owner owed you a safe environment." },
                    { label: "Breach of Duty", desc: "They failed to fix a known hazard." },
                    { label: "Causation", desc: "That specific hazard caused your injury." },
                    { label: "Damages", desc: "You suffered physical or financial loss." }
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-500">
                      <h4 className="font-bold text-slate-900">{item.label}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sidebar / Responsible Parties */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-serif text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Who Is Liable?</h3>
                <p className="text-slate-400 text-sm mb-6">Responsibility often falls on multiple parties. We pursue them all.</p>
                <ul className="space-y-4">
                  {[
                    "Property Owners",
                    "Management Companies",
                    "Retail Stores & Malls",
                    "Homeowners Associations (HOA)",
                    "Maintenance Contractors",
                    "Government Entities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-amber-500" />
                      <span className="font-medium text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* --- TYPES OF CASES GRID --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Practice Areas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Hazards We Litigate</h2>
              <p className="text-slate-600">
                We handle the full spectrum of premises liability claims, securing millions for victims of negligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Footprints, title: "Slip & Fall", desc: "Wet floors, uneven pavement, and clutter in walkways are the leading causes of ER visits." },
                { icon: ShieldCheck, title: "Inadequate Security", desc: "Assaults or robberies occurring due to broken gates, lack of guards, or poor lighting." },
                { icon: Dog, title: "Dog Bites", desc: "Owners are strictly liable for damages if their dog attacks a person in a public place." },
                { icon: Waves, title: "Swimming Pool Accidents", desc: "Drowning risks, broken drains, and slippery decks at hotels or public pools." },
                { icon: Hammer, title: "Negligent Maintenance", desc: "Collapsing decks, rotting stairs, or elevators that haven't been inspected." },
                { icon: AlertTriangle, title: "Toxic Exposure", desc: "Carbon monoxide leaks, chemical spills, or mold exposure in rental units." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:border-amber-300">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ACTION PLAN / CHECKLIST --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Visual Graphic */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500 rounded-full blur-[60px] opacity-30"></div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">Damages You Can Recover</h3>
                    <div className="space-y-4 relative z-10">
                       {[
                         "Emergency Medical Bills",
                         "Physical Therapy & Rehab",
                         "Lost Wages & Future Earnings",
                         "Permanent Scarring or Disability",
                         "Pain & Suffering"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 border-b border-slate-800 pb-3 last:border-0">
                           <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                           <span className="text-lg text-slate-200">{item}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>

                {/* The Checklist */}
                <div className="lg:w-1/2 w-full">
                   <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                     Injured? Take These Steps Immediately.
                   </h2>
                   <p className="text-slate-600 mb-8">
                     Evidence in premises cases disappears quickly. Spills are mopped up and cameras are taped over. You must act fast.
                   </p>
                   
                   <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-amber-600" /> Report It
                          </h4>
                          <p className="text-slate-600 text-sm">Notify the manager immediately. Demand they create an incident report.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                            <Camera className="w-4 h-4 text-amber-600" /> Document Everything
                          </h4>
                          <p className="text-slate-600 text-sm">Take photos of the hazard, your injuries, and your clothing/shoes.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                            <ClipboardCheck className="w-4 h-4 text-amber-600" /> Get Witnesses
                          </h4>
                          <p className="text-slate-600 text-sm">Get names and numbers of anyone who saw the fall or the hazard.</p>
                        </div>
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 text-center">
             <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Don't Let Them Blame You</h2>
             <p className="text-slate-600 max-w-2xl mx-auto mb-8">
               Insurance adjusters will try to say you were clumsy or distracted. We force them to look at the facts. Call us before you sign anything.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:YOUR_PHONE_NUMBER">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white h-12 px-8 flex items-center gap-2 w-full sm:w-auto">
                    <Phone className="w-4 h-4" /> Call Ansel & Miller
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-200 w-full sm:w-auto">
                    Free Consultation
                  </Button>
                </Link>
             </div>
             <p className="mt-8 text-xs text-slate-400">
                Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.
             </p>
          </div>
        </section>

      </main>
    </div>
  );
}