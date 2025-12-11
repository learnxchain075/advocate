import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ShieldAlert, 
  VideoOff, 
  LightbulbOff, 
  Lock, 
  MapPin, 
  EyeOff, 
  Gavel, 
  Siren,
  Building,
  ArrowRight,
  Phone
} from "lucide-react";

export default function NegligentSecurityPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-950 text-white overflow-hidden">
        {/* Abstract Background Decoration - Midnight/Security Theme */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-indigo-900 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/4"></div>
           <div className="absolute left-10 bottom-10 w-40 h-40 bg-amber-500 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium mb-6 shadow-lg">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-indigo-400">Negligent Security</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hollywood, FL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">
                Negligent Security Lawyers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
              Crime doesn't always happen by accident. When property owners cut costs on safety, they invite danger to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:YOUR_PHONE_NUMBER">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-indigo-900/40 border border-indigo-500/50">
                  Free Case Review
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Report an Incident
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTRO & CORE LEGAL CONCEPT --- */}
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              {/* Text Content */}
              <div className="md:col-span-7 lg:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  When Owners Turn a Blind Eye
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                  Negligent security claims arise when someone is assaulted, robbed, or harmed because a property owner failed to provide basic safety measures. 
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Under Florida premises liability law, businesses and landlords have a duty to protect visitors from <strong>foreseeable</strong> criminal acts. If they know an area is dangerous but choose to do nothing—saving money at the expense of your safety—they must be held accountable.
                </p>

                {/* The "Foreseeability" Box */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 md:p-8">
                  <h3 className="font-serif text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <EyeOff className="w-6 h-6" /> What makes a crime "Foreseeable"?
                  </h3>
                  <p className="text-slate-700 mb-4">
                    This is the heart of your case. We prove the owner <em>should have known</em> danger was imminent by gathering evidence of:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {["Prior 911 calls from the property", "Crime statistics in the immediate area", "Previous complaints from tenants", "Broken security equipment left unrepaired"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sidebar / High Risk Locations */}
              <div className="md:col-span-5 lg:col-span-4">
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
                  
                  <h3 className="font-serif text-2xl font-bold mb-6 relative z-10">High-Risk Zones</h3>
                  <p className="text-slate-400 text-sm mb-6 relative z-10">
                    We frequently handle cases occurring at:
                  </p>
                  <ul className="space-y-4 relative z-10">
                    {[
                      { icon: Building, label: "Apartment Complexes" },
                      { icon: MapPin, label: "Shopping Malls & Parking Lots" },
                      { icon: ShieldAlert, label: "Nightclubs & Bars" },
                      { icon: Lock, label: "Banks & ATM Vestibules" },
                      { icon: MapPin, label: "Gas Stations" },
                      { icon: Building, label: "Hotels & Motels" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 pb-3 border-b border-slate-800 last:border-0">
                        <item.icon className="w-5 h-5 text-amber-500" />
                        <span className="font-medium">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SIGNS OF NEGLIGENCE GRID --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Signs of Security Failure</h2>
              <p className="text-slate-600">
                Criminals look for easy targets. These are the common failures that turn a safe property into a dangerous one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: LightbulbOff, title: "Inadequate Lighting", desc: "Dark stairwells, parking lots, and hallways provide cover for attackers." },
                { icon: VideoOff, title: "Missing Cameras", desc: "Fake, broken, or unmonitored CCTV systems fail to deter criminals." },
                { icon: ShieldAlert, title: "Lack of Security Guards", desc: "High-crime areas require trained personnel, not just empty promises." },
                { icon: Lock, title: "Broken Locks & Gates", desc: "Allowing unauthorized access to residential buildings or pool areas." },
                { icon: EyeOff, title: "Negligent Hiring", desc: "Employing staff with violent criminal records without background checks." },
                { icon: Siren, title: "Ignoring Warnings", desc: "Failing to warn residents or guests about recent crimes on the premises." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-slate-600">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- THE INVESTIGATION PROCESS --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-4">
                    The Ansel & Miller Approach
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    We Don't Just File Claims.<br/>We Investigate.
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Negligent security cases are aggressively defended by insurance companies who will claim the crime was "random" or "unpreventable."
                  </p>
                  <p className="text-slate-600 mb-8">
                    To win, we dig deeper. Our team works with criminologists and security experts to pull the property's history. We look at the "Grid of Crime" surrounding the location to prove the owner should have done more.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Comprehensive Crime Map Analysis",
                      "Review of Security Logs & Maintenance Records",
                      "Depositions of Property Managers",
                      "Victim Advocacy & Support"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium text-slate-800">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual Card for Investigation */}
                <div className="md:w-1/2 w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-8 md:p-12 relative">
                   <Gavel className="w-16 h-16 text-slate-200 absolute top-8 right-8" />
                   <h3 className="text-xl font-bold text-slate-900 mb-2">We Recover Damages For:</h3>
                   <div className="space-y-4 mt-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                        <span className="font-medium text-slate-700">Medical Bills & Therapy</span>
                        <ShieldAlert className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                        <span className="font-medium text-slate-700">Lost Wages & Disability</span>
                        <ShieldAlert className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                        <span className="font-medium text-slate-700">Pain, Suffering & PTSD</span>
                        <ShieldAlert className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                        <span className="font-medium text-slate-700">Wrongful Death</span>
                        <ShieldAlert className="w-4 h-4 text-slate-400" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="py-20 bg-slate-950 text-white border-t border-slate-900">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Hold Them Accountable
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              You had a right to be safe. If a business owner put profits over your protection, we are here to make it right. No fees unless we win.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:YOUR_PHONE_NUMBER" className="w-full sm:w-auto">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold h-14 text-lg px-10 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Call Ansel & Miller
                </Button>
              </a>
              <Link href="/contact" className="w-full sm:w-auto">
                 <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-14 text-lg px-10">
                  Case Evaluation
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-slate-600">
              Serving Hollywood, Miami, Fort Lauderdale, Boca Raton, and Pompano Beach.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}