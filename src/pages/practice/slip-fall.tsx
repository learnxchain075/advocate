import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Footprints, 
  AlertTriangle, 
  VideoOff, 
  Bone, 
  Brain, 
  BriefcaseMedical, 
  Clock, 
  Gavel,
  CheckCircle2,
  ArrowRight,
  Phone
} from "lucide-react";

export default function SlipFallPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background - Hazard Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-yellow-500 rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/4"></div>
           <div className="absolute left-20 bottom-20 w-40 h-40 bg-slate-500 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-yellow-400">Slip & Fall</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                Slip & Fall Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              Gravity hurts. But negligence hurts more. We hold property owners accountable when they cut corners on safety.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-yellow-900/20">
                  Free Case Evaluation
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Report an Incident
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTRO & URGENCY --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  More Than Just a "Stumble"
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Insurance adjusters love to call these accidents "minor." But we know the truth. A slip and fall on hard concrete or tile can cause life-altering trauma.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At <strong>Ansel & Miller</strong>, we focus on serious injury claims. We represent clients who have suffered hip fractures, spinal cord damage, and traumatic brain injuries because a business owner was too lazy to fix a hazard.
                </p>

                {/* The "Evidence Evaporates" Warning */}
                <div className="bg-slate-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Clock className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">Time is Your Enemy</h3>
                      <p className="text-slate-600 text-sm mb-2">
                        In slip and fall cases, evidence disappears fast:
                      </p>
                      <ul className="text-sm text-slate-500 space-y-1">
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Spills dry up or get mopped away.</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Surveillance footage is taped over (often within 24-48 hours).</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Witnesses leave the scene.</li>
                      </ul>
                      <p className="mt-3 font-bold text-slate-800 text-sm">Call us immediately so we can send a preservation letter to save the video.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar / Common Injuries */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-serif text-2xl font-bold mb-6 border-b border-slate-700 pb-4">The Real Impact</h3>
                <p className="text-slate-400 text-sm mb-6">We recover compensation for serious conditions, including:</p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bone className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">Orthopedic Injuries</h4>
                      <p className="text-xs text-slate-400">Hip fractures, torn ACL/MCL, and shattered wrists requiring surgery.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">Traumatic Brain Injury</h4>
                      <p className="text-xs text-slate-400">Concussions and hemorrhages from striking the head on hard surfaces.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BriefcaseMedical className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">Spinal Cord Damage</h4>
                      <p className="text-xs text-slate-400">Herniated discs and nerve damage leading to chronic pain or paralysis.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- COMMON HAZARDS GRID --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-yellow-600 font-bold tracking-wider uppercase text-sm">Premises Liability</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Dangerous Conditions We Investigate</h2>
              <p className="text-slate-600">
                Property owners have a duty to inspect their premises. Ignorance is not a defense when they should have known better.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: AlertTriangle, title: "Wet & Slippery Floors", desc: "Spills in grocery aisles, freshly mopped floors without signs, or leaking refrigeration units." },
                { icon: Footprints, title: "Uneven Pavement", desc: "Cracked sidewalks, potholes in parking lots, and tree roots uplifting walkways." },
                { icon: VideoOff, title: "Poor Lighting", desc: "Dark stairwells or parking garages that hide trip hazards from plain view." },
                { icon: AlertTriangle, title: "Trip Hazards", desc: "Loose electrical cords, bunched-up floor mats, or debris left in walkways." },
                { icon: Footprints, title: "Broken Stairs", desc: "Loose handrails, rotting wood, or steps that are not built to code." },
                { icon: AlertTriangle, title: "Transition Hazards", desc: "Unexpected changes in floor elevation or material without visual warnings." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:border-yellow-400">
                  <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- THE LEGAL BURDEN (HOW WE WIN) --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                <div className="lg:w-1/2">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Proving Your Case
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    To win a slip and fall case in Florida, we must prove the property owner had <strong>"Notice"</strong> of the danger.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-700">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">Actual Knowledge</h4>
                        <p className="text-slate-600 text-sm">An employee saw the spill or created the hazard themselves.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-700">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">Constructive Knowledge</h4>
                        <p className="text-slate-600 text-sm">The hazard existed long enough that they <em>should</em> have found it during routine inspections.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-700">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">Mode of Operation</h4>
                        <p className="text-slate-600 text-sm">The business operates in a way that makes hazards foreseeable (e.g., self-serve buffets).</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
                   <Gavel className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                   <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">We Fight the "Clumsy" Defense</h3>
                   <p className="text-slate-600 mb-8">
                     Insurance companies will almost always blame you. They'll say you weren't watching where you were going. We use biomechanics experts and safety standards to prove the environment was the trap, not you.
                   </p>
                   <Link href="/contact">
                      <Button className="bg-slate-900 text-white hover:bg-slate-800 w-full h-12 text-lg">
                        Get a Free Case Strategy
                      </Button>
                   </Link>
                </div>

             </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Don't Wait. Evidence Fades.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Call us today so we can preserve the surveillance footage before it's deleted. No fees unless we win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold h-12 px-8 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Ansel & Miller
                </Button>
              </a>
            </div>
            <p className="mt-8 text-xs text-slate-500">
              Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}