import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  HeartPulse, 
  Brain, 
  Baby, 
  Pill, 
  Siren, 
  Activity, 
  Scale, 
  FileSearch,
  Clock,
  ShieldCheck,
  Phone
} from "lucide-react";

export default function MedicalMalpracticePage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Decoration - Medical Teal Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[100px] transform -translate-y-1/2"></div>
           <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-teal-400">Medical Malpractice</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
                Medical Malpractice Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              When the hands you trusted cause you harm. We expose negligence and fight for the answers—and compensation—you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-teal-900/20">
                  Free Case Evaluation
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Confidential Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTRO & STATUTE OF LIMITATIONS WARNING --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              
              {/* Main Text */}
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  A Violation of Trust
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Medical malpractice occurs when a doctor, nurse, or hospital fails to meet the accepted standard of care, resulting in patient harm. These aren't just accidents; they are preventable errors.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At <strong>Ansel & Miller</strong>, we understand that these cases are emotionally and legally complex. You aren't just fighting an insurance company; you are challenging a healthcare system designed to protect its own. We provide the resources and expert testimony needed to prove negligence.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="flex items-center gap-2 text-red-900 font-bold text-lg mb-2">
                    <Clock className="w-5 h-5" /> Urgent: Florida's Statute of Limitations
                  </h3>
                  <p className="text-red-800/80">
                    Florida law enforces strict timelines. Generally, you have only <strong>two years</strong> from the date you discovered (or should have discovered) the injury to file a claim. If you miss this window, you may be barred from recovery forever.
                  </p>
                </div>
              </div>
              
              {/* Sidebar / Complexity Stats */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Proving Malpractice</h3>
                <p className="text-slate-500 text-sm mb-6">Florida requires a detailed "Pre-Suit Investigation" before we can even file a lawsuit. We must prove:</p>
                
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 h-fit">
                      <Activity className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Doctor-Patient Relationship</h4>
                      <p className="text-sm text-slate-500">Establishing that a duty of care existed.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 h-fit">
                      <FileSearch className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Breach of Standard</h4>
                      <p className="text-sm text-slate-500">A similar professional would have acted differently.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 h-fit">
                      <Scale className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Causation & Damages</h4>
                      <p className="text-sm text-slate-500">Linking the specific error directly to your injury.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* --- COMMON TYPES GRID --- */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-teal-400 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">Types of Medical Negligence</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileSearch, title: "Misdiagnosis", desc: "Failure to diagnose cancer, heart attacks, or strokes in time for effective treatment." },
                { icon: Stethoscope, title: "Surgical Errors", desc: "Wrong-site surgery, leaving instruments inside the body, or damaging nearby organs." },
                { icon: Baby, title: "Birth Injuries", desc: "Oxygen deprivation, cerebral palsy, and Erb's palsy caused during delivery." },
                { icon: Pill, title: "Medication Errors", desc: "Prescribing the wrong drug, incorrect dosages, or ignoring dangerous interactions." },
                { icon: Brain, title: "Anesthesia Mistakes", desc: "Dosage errors leading to brain damage, waking during surgery, or death." },
                { icon: Siren, title: "ER Negligence", desc: "Failure to triage correctly or dismissing severe symptoms as minor ailments." },
                { icon: HeartPulse, title: "Failure to Monitor", desc: "Ignoring vital signs post-surgery or during hospital stays." },
                { icon: ShieldCheck, title: "Nursing Home Abuse", desc: "Bedsores, medication errors, and neglect of elderly patients." },
              ].map((item, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all group">
                  <item.icon className="w-10 h-10 text-teal-500 mb-4 group-hover:text-white transition-colors" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- DAMAGES & WHY US --- */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="lg:w-1/2">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Restoring Your Future
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  While no amount of money can undo the physical harm caused by medical negligence, financial compensation is vital for your future care and quality of life. We fight for:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Past & Future Medical Bills",
                    "Lost Income & Earning Capacity",
                    "Pain & Suffering",
                    "Rehabilitation Costs",
                    "Permanent Disability",
                    "Loss of Enjoyment of Life"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-teal-600 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Why These Cases Are Hard</h3>
                  <p className="text-slate-600 mb-6">
                    Hospitals and insurers aggressively defend malpractice cases. They have vast resources and legal teams dedicated to denying your claim.
                  </p>
                  <p className="text-slate-600 mb-8">
                    <strong>Ansel & Miller</strong> levels the playing field. We front all costs for expert witnesses and investigation. You pay nothing unless we win your case.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 h-12 text-lg">
                      Start Your Investigation
                    </Button>
                  </Link>
                </div>
                {/* Decorative background circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-50 rounded-full z-0"></div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
             <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Get the Answers You Deserve</h2>
             <p className="text-slate-600 max-w-2xl mx-auto mb-8">
               If you suspect negligence, time is your enemy. Medical records can disappear, and memories fade. Let our team secure the evidence today.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white h-12 px-8 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Ansel & Miller
                </Button>
                <Link href="/contact">
                  <Button variant="outline" className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-50">
                    Send Us a Message
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