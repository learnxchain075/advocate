import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Box, 
  Settings, 
  AlertOctagon, 
  Truck, 
  Store, 
  Factory, 
  Zap, 
  Pill, 
  Baby, 
  Car,
  FileWarning,
  Phone,
  SearchCheck,
  Ban
} from "lucide-react";

export default function ProductLiabilityPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background - Technical Blueprint Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           {/* Grid pattern representing blueprints */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-purple-400">Product Liability</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
                Defective Product Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              When corporations cut corners on safety, innocent people get hurt. We hold manufacturers accountable for their mistakes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-purple-900/40">
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

      {/* --- INTRO & DEFECT TYPES --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Profit Over Safety
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  We trust that the products we buy—cars, medicine, toys—are safe. But often, companies rush products to market without proper testing.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At <strong>Ansel & Miller</strong>, we have the resources to take on multinational corporations. We work with engineers and industry experts to prove exactly where the product failed.
                </p>

                {/* The "Three Defects" Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-6">How Products Fail</h3>
                  <div className="grid gap-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Design Defects</h4>
                        <p className="text-sm text-slate-500">The product was inherently dangerous from the start, even before it was built.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Factory className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Manufacturing Defects</h4>
                        <p className="text-sm text-slate-500">The design was safe, but an error during assembly made the specific unit dangerous.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileWarning className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Failure to Warn</h4>
                        <p className="text-sm text-slate-500">Lack of instructions or warnings about foreseeable risks (Marketing Defects).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar / Chain of Liability */}
              <div className="md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl border-t-4 border-purple-500">
                <h3 className="font-serif text-2xl font-bold mb-6">Who Is Responsible?</h3>
                <p className="text-slate-400 text-sm mb-6">Florida law allows us to pursue any party in the distribution chain:</p>
                
                <div className="relative space-y-8 pl-4 border-l-2 border-slate-700">
                  <div className="relative">
                    <span className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-slate-900"></span>
                    <h4 className="font-bold text-purple-200 flex items-center gap-2"><Factory className="w-4 h-4"/> Manufacturer</h4>
                    <p className="text-xs text-slate-400">The company that made the product or parts.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-slate-900"></span>
                    <h4 className="font-bold text-purple-200 flex items-center gap-2"><Truck className="w-4 h-4"/> Distributor</h4>
                    <p className="text-xs text-slate-400">Wholesalers or shippers who moved the product.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-slate-900"></span>
                    <h4 className="font-bold text-purple-200 flex items-center gap-2"><Store className="w-4 h-4"/> Retailer</h4>
                    <p className="text-xs text-slate-400">The store or website that sold it to you.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- COMMON CASES GRID --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Case Types</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Products We Investigate</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Car, title: "Automotive Defects", desc: "Failed airbags, tire blowouts, brake failures, and rollover-prone designs." },
                { icon: Pill, title: "Dangerous Drugs", desc: "Pharmaceuticals with severe undisclosed side effects or manufacturing impurities." },
                { icon: Baby, title: "Children's Toys", desc: "Choking hazards, toxic lead paint, or unstable furniture prone to tipping." },
                { icon: Zap, title: "Electronics", desc: "Lithium-ion batteries that catch fire (e-bikes, vapes) and faulty wiring." },
                { icon: Settings, title: "Industrial Equipment", desc: "Construction machinery lacking safety guards or emergency kill switches." },
                { icon: AlertOctagon, title: "Medical Devices", desc: "Failed hip implants, surgical mesh, or pacemakers." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:border-purple-300">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CRITICAL WARNING & RECOVERY --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* The Warning Box - VERY IMPORTANT */}
                <div className="lg:w-1/2 w-full">
                   <div className="border-2 border-red-100 bg-red-50/50 rounded-2xl p-8 relative">
                      <div className="absolute -top-6 left-8 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-sm flex items-center gap-2">
                        <Ban className="w-4 h-4" /> CRITICAL RULE
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4 mb-4">Do Not Throw It Away!</h3>
                      <p className="text-slate-700 mb-4">
                        The single biggest mistake victims make is discarding the broken product. 
                      </p>
                      <p className="text-slate-700 font-medium">
                        <strong>The product IS the evidence.</strong> Without it, proving a defect becomes nearly impossible.
                      </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-600"><SearchCheck className="w-4 h-4 text-purple-600"/> Keep the product in a safe place.</li>
                        <li className="flex items-center gap-2 text-sm text-slate-600"><SearchCheck className="w-4 h-4 text-purple-600"/> Keep all packaging and manuals.</li>
                        <li className="flex items-center gap-2 text-sm text-slate-600"><SearchCheck className="w-4 h-4 text-purple-600"/> Do not attempt to repair it.</li>
                      </ul>
                   </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    We Fight Big Tech & Manufacturers
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Product liability cases often involve fighting huge corporations with endless legal budgets. They will try to bury you in paperwork or claim you used the product wrong.
                  </p>
                  <p className="text-slate-600 mb-8">
                    We level the playing field. We front all the costs for testing, expert witnesses, and litigation. You pay absolutely nothing unless we win your case.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                     <a href="tel:YOUR_PHONE_NUMBER">
                       <Button className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 text-lg flex gap-2 w-full sm:w-auto">
                        <Phone className="w-4 h-4" /> Call Ansel & Miller
                       </Button>
                     </a>
                     <Link href="/contact">
                       <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 h-12 px-8 text-lg w-full sm:w-auto">
                        Send a Message
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
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Secure Your Evidence Today</h2>
            <p className="text-slate-500 mb-6">Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.</p>
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}