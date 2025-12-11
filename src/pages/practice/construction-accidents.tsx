import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  HardHat, 
  Hammer, 
  Construction, 
  AlertTriangle, 
  FileWarning, 
  BriefcaseMedical, 
  ArrowRight, 
  CheckCircle2,
  Scale,
  Building2
} from "lucide-react";

export default function ConstructionAccidentsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Decoration - Safety Orange Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute left-0 bottom-0 w-64 h-64 bg-slate-600 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb styled as a pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-orange-400">Construction Accidents</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">
                Construction Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl">
              Building the future shouldn't cost you your own. When safety rules are ignored, we hold the powerful accountable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-orange-900/20">
                  Free Case Review
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

      {/* --- INTRO & CORE PROBLEM --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              
              {/* Main Content */}
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  The High Price of Negligence
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Florida’s booming development brings opportunity, but it also brings risk. Construction sites expose workers and pedestrians to heavy machinery, high voltage, and hazardous heights.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At <strong>Ansel & Miller</strong>, we represent injured workers, subcontractors, and innocent bystanders harmed by unsafe worksite conditions. We understand the unique complexities of construction accident claims—including the critical difference between a Workers' Comp claim and a Third-Party Lawsuit.
                </p>

                {/* Key Distinction Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-orange-600" />
                    Workers' Comp vs. Third-Party Claims
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Workers' Compensation</h4>
                      <p className="text-sm text-slate-500">Generally covers medical bills and a portion of lost wages, but rarely covers pain and suffering.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Third-Party Lawsuits</h4>
                      <p className="text-sm text-slate-500">If a subcontractor, manufacturer, or property owner was negligent, you can sue for <strong>full damages</strong>, including pain and suffering.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar / Stats */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500">
                <h3 className="font-serif text-2xl font-bold mb-6">High-Risk Factors</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start">
                    <Building2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Elevated Structures</h4>
                      <p className="text-sm text-slate-300">Scaffolding and roof work remain the #1 cause of fatal injuries.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Construction className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Heavy Machinery</h4>
                      <p className="text-sm text-slate-300">Cranes, forklifts, and loaders require strict safety zones.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <FileWarning className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">OSHA Violations</h4>
                      <p className="text-sm text-slate-300">Failure to follow federal safety rules is strong evidence of negligence.</p>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Worksites Hazards</h2>
              <p className="text-slate-600">
                Construction sites are dynamic environments. When contractors cut corners or rush jobs, these hazards become deadly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ArrowRight, title: "Falls from Heights", desc: "Ladders, scaffolding, and unsecure roofing." },
                { icon: Hammer, title: "Falling Objects", desc: "Tools or debris dropped from above striking workers." },
                { icon: Construction, title: "Machinery Failure", desc: "Defective or improperly operated cranes and lifts." },
                { icon: AlertTriangle, title: "Electrocution", desc: "Exposed wiring, faulty panels, or power line contact." },
                { icon: Building2, title: "Structural Collapse", desc: "Trench collapses or wall failures during excavation." },
                { icon: AlertTriangle, title: "Slip & Trips", desc: "Cluttered walkways, oil spills, and uneven ground." },
                { icon: FileWarning, title: "Toxic Exposure", desc: "Asbestos, silica dust, and chemical burns." },
                { icon: HardHat, title: "Safety Failures", desc: "Missing guardrails and lack of proper PPE." },
              ].map((item, index) => (
                <div key={index} className="group bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-orange-300">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- COMPENSATION & VICTIM SUPPORT --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                   {/* Decorative box representing an image placeholder or graphic */}
                   <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
                      <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">Recoverable Damages</h3>
                      <ul className="space-y-4">
                        {[
                          "Emergency medical treatment & surgery",
                          "Long-term rehabilitation & therapy",
                          "Lost wages & future earning capacity",
                          "Pain, suffering & loss of enjoyment",
                          "Permanent disability accommodations",
                          "Wrongful death (for surviving families)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className="text-slate-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                   {/* Abstract element behind */}
                   <div className="absolute -z-10 top-6 -left-6 w-full h-full bg-slate-900/5 rounded-2xl"></div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  We Investigate Deeply
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Construction sites involve layers of contractors, supervisors, and corporate entities. Determining who is legally responsible often requires detailed investigation.
                </p>
                <p className="text-slate-600 mb-8">
                  Our team gathers site reports, OSHA findings, witness statements, and maintenance logs. We dig deep to find the truth because we know that <strong>workers' compensation is rarely enough</strong> to cover a lifetime of needs after a catastrophic injury.
                </p>
                <Link href="/contact">
                   <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 text-lg">
                    Speak to an Attorney
                   </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="py-20 bg-slate-900 text-slate-200 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <BriefcaseMedical className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Don't Fight the Insurance Companies Alone
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              If you or a loved one has been injured on a job site in Hollywood or South Florida, our attorneys are ready to fight for you. We offer free consultations and work on a contingency fee basis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:YOUR_PHONE_NUMBER" className="w-full sm:w-auto">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 text-lg px-10">
                  Call Ansel & Miller
                </Button>
              </a>
              <Link href="/contact" className="w-full sm:w-auto">
                 <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-800 hover:text-white h-14 text-lg px-10">
                  Send a Message
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-slate-500">
              Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}