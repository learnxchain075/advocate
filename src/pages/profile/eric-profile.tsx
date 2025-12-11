// EricAnselProfile.jsx
import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  Scale, 
  Gavel, 
  Quote, 
  Star,
  Globe,
  Facebook,
  Instagram,
  ChevronRight,
  Download
} from "lucide-react";
import team1 from "../../assets/generated_images/1.png"; // Eric L. Ansel

export default function EricAnselProfile() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-100">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative bg-slate-950 text-white pb-36 pt-10 px-6 border-b-4 border-amber-600">
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle "Gold Standard" background effects */}
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/attorneys" className="hover:text-white transition-colors">Attorneys</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-500 font-medium">Eric L. Ansel</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-end pb-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded shadow-lg shadow-amber-900/50">
                  Founding Partner
                </span>
                <span className="flex items-center text-amber-400 text-sm font-medium">
                  <Star className="w-4 h-4 mr-1 fill-amber-400" />
                  Est. 1984
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4">
                Eric L. Ansel
              </h1>
              <p className="text-xl text-slate-300 font-light tracking-wide max-w-2xl border-l-2 border-slate-700 pl-4">
                Senior Trial Attorney & Firm Founder
              </p>
            </div>
            
            {/* AV Preeminent Badge (Visual Representation) */}
            <div className="hidden lg:flex flex-col items-center mt-6 md:mt-0 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
               <div className="flex items-center gap-1 text-amber-400 mb-1">
                 {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
               </div>
               <span className="font-serif font-bold text-white text-lg tracking-widest">AV PREEMINENT®</span>
               <span className="text-[10px] text-slate-400 uppercase tracking-wide">Highest Possible Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT OVERLAP --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT SIDEBAR (Profile Card) --- */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden sticky top-8 border border-slate-100">
              
              {/* Photo Area */}
              <div className="p-6 text-center bg-gradient-to-b from-slate-50 to-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
                <div className="relative inline-block">
                  <img
                    src={team1}
                    alt="Eric L. Ansel"
                    className="w-56 h-56 mx-auto rounded-full object-cover border-[6px] border-white shadow-2xl"
                  />
                  <div className="absolute bottom-4 right-4 bg-slate-900 p-2 rounded-full border-2 border-white shadow-lg" title="Founder">
                    <Gavel className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-slate-900 font-serif">Eric L. Ansel</h2>
                <p className="text-slate-500 font-medium">Founder & Senior Litigator</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Actions */}
                <div className="space-y-3">
                  <a href="tel:+19549229100" className="flex items-center justify-center w-full px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-md hover:shadow-lg group">
                    <Phone className="w-4 h-4 mr-2" />
                    (954) 922-9100
                  </a>
                  <a href="/contact" className="flex items-center justify-center w-full px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Secure Message
                  </a>
                  <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download vCard
                  </button>
                </div>

                {/* Social Connect */}
                <div className="border-t border-slate-100 pt-6">
                    <p className="text-xs text-slate-400 uppercase font-semibold text-center mb-3">Connect Socially</p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="p-2 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-slate-50 text-slate-600 rounded-full hover:bg-pink-50 hover:text-pink-600 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-slate-50 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors">
                            <Globe className="w-5 h-5" />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Bio & Details) --- */}
          <div className="lg:col-span-8 space-y-8 pb-12">
            
            {/* Quote Block - Centerpiece */}
            <div className="relative bg-white rounded-xl shadow-md p-8 md:p-10 border-l-8 border-amber-500">
               <Quote className="absolute top-6 left-6 w-12 h-12 text-amber-100 -z-0 transform -scale-x-100" />
               <blockquote className="relative z-10">
                   <p className="text-xl md:text-2xl font-serif text-slate-800 italic leading-relaxed text-center">
                   “You have to believe in your clients. You have to believe in what you are doing. You have to not just sympathize with a client that has been injured, <span className="text-amber-600 font-semibold bg-amber-50 px-1">you have to empathize.</span> You have to try to put yourself in their shoes.”
                   </p>
               </blockquote>
            </div>

            {/* Biography Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-slate-900 rounded-lg">
                    <BookOpen className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900">Career Overview</h3>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                <p className="leading-relaxed">
                  Eric L. Ansel founded Ansel & Miller, LLC in <strong>1984</strong> and has been practicing personal injury law for <span className="font-semibold text-slate-900">40 years</span>. 
                  Recognized as one of the most successful personal injury trial attorneys in the country, he has dedicated his life to advocating for the injured.
                </p>
                <p className="leading-relaxed">
                   Mr. Ansel has earned a well-deserved reputation as a highly skilled and aggressive litigator. His arguments before the <strong>Florida Supreme Court</strong> have resulted in <span className="underline decoration-amber-400 decoration-2">landmark decisions</span> that have broadened personal injury verdicts for victims across the state.
                </p>
              </div>
            </div>

            {/* Distinctions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Recognition Card */}
                <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-bold font-serif">Distinctions</h4>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-amber-100">AV Preeminent® Rated</p>
                                    <p className="text-sm text-slate-400">Highest rating in legal ability & ethics by the Bar and Judiciary.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-amber-100">"Most Effective Lawyer"</p>
                                    <p className="text-sm text-slate-400">Finalist selected by the prestigious Daily Business Review.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Education & Admissions Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Scale className="w-8 h-8 text-slate-700" />
                        <h4 className="text-lg font-bold font-serif text-slate-900">Credentials</h4>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Education</p>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-medium text-slate-800">University of Miami</span>
                                    <span className="text-slate-500">Juris Doctor</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-medium text-slate-800">University of Florida</span>
                                    <span className="text-slate-500">Bachelor of Arts</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-100 pt-3">
                            <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Admissions</p>
                            <p className="text-sm text-slate-600">Admitted into Appellate, Federal, and State Bars.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Office Locations Section (Moved from separate section to here for better flow) */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold font-serif text-slate-900 mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                    Office Locations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Main Office */}
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 text-slate-900 font-bold shrink-0">
                            HQ
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Main Office (Hollywood)</h4>
                            <address className="not-italic text-sm text-slate-600 mt-1 space-y-1">
                                <p>1939 Tyler Street</p>
                                <p>Hollywood, FL 33020</p>
                                <a href="tel:+19549229100" className="inline-block text-amber-700 font-medium hover:underline mt-1">
                                    (954) 922-9100
                                </a>
                            </address>
                        </div>
                    </div>

                    {/* Boca Office */}
                    <div className="flex items-start space-x-4">
                         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 text-slate-500 shrink-0">
                            BR
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Boca Raton Office</h4>
                            <address className="not-italic text-sm text-slate-600 mt-1">
                                <p>2225 Glades Rd, Suite 324A</p>
                                <p>Boca Raton, FL 33431</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}