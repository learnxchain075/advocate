// JonZepnickProfile.jsx
import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Search, // Represents his PI background
  Scale, 
  Newspaper, // Represents Media appearances
  ShieldAlert, // Represents Negligent Security
  ChevronRight, 
  Download,
  Briefcase,
  Map
} from "lucide-react";
import team5 from "../../assets/generated_images/5.png"; // Jon A. Zepnick

export default function JonZepnickProfile() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative bg-slate-900 text-white pb-32 pt-10 px-6 border-b border-slate-800">
        <div className="absolute inset-0 overflow-hidden">
           {/* Abstract 'Search/Focus' Pattern */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
           <div className="absolute bottom-0 left-20 w-72 h-72 bg-amber-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/attorneys" className="hover:text-white transition-colors">Attorneys</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-500 font-medium">Jon A. Zepnick</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-end pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg shadow-indigo-900/50">
                  Litigation Attorney
                </span>
                <span className="flex items-center text-indigo-300 text-sm font-medium">
                  <Briefcase className="w-4 h-4 mr-1" />
                  Practicing Since 2002
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-2">
                Jon A. Zepnick, <span className="text-slate-500 text-2xl md:text-4xl align-top font-sans font-light">Esq.</span>
              </h1>
              <p className="text-xl text-slate-300 font-light tracking-wide max-w-2xl">
                Personal Injury & Civil Rights Litigator across FL, NY, and WI.
              </p>
            </div>
            
            {/* Unique Selling Point Badge */}
            <div className="hidden md:flex items-center mt-6 md:mt-0 bg-slate-800/80 backdrop-blur-sm px-5 py-3 rounded-lg border border-slate-700">
               <div className="p-2 bg-slate-900 rounded-full mr-3 border border-slate-600">
                  <Search className="w-6 h-6 text-amber-500" />
               </div>
               <div className="flex flex-col">
                 <span className="text-xs text-slate-400 uppercase font-bold">Unique Background</span>
                 <span className="font-medium text-white">Former Private Investigator</span>
               </div>
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
              <div className="p-6 text-center border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
                <div className="relative inline-block">
                  <img
                    src={team5}
                    alt="Jon A. Zepnick"
                    className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3 bg-indigo-500 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center shadow-sm" title="Litigator">
                    <Scale className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 font-serif">Jon A. Zepnick</h2>
                <p className="text-slate-500 font-medium tracking-wide">Trial Attorney</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Actions */}
                <div className="space-y-3">
                  <a href="tel:+19549229100" className="flex items-center justify-center w-full px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-md group">
                    <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    (954) 922-9100
                  </a>
                  <a href="mailto:info@anselmiller.com" className="flex items-center justify-center w-full px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    info@anselmiller.com
                  </a>
                  <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download vCard
                  </button>
                </div>

                {/* Quick Info List */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Base</p>
                      <p className="text-sm font-medium text-slate-700">Fort Lauderdale, Florida</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Admitted</p>
                      <p className="text-sm font-medium text-slate-700">FL, NY, WI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Bio & Details) --- */}
          <div className="lg:col-span-8 space-y-8 pb-12">
            
            {/* Biography Section */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
                <h3 className="text-2xl font-bold font-serif text-slate-900">Legal Biography</h3>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                <p className="leading-relaxed">
                  Jon A. Zepnick specializes in Personal Injury Litigation, vigorously representing victims of <span className="text-slate-900 font-semibold">negligent security, automobile negligence, premises liability, and civil rights violations</span>. 
                </p>
                <p className="leading-relaxed">
                  He has been an attorney since 2002, beginning his career handling insurance defense cases—an experience that gave him valuable insight into how insurance companies operate. He subsequently moved to New York, where he worked as a trial attorney representing victims. In 2006, he made Florida his home, continuing his efforts to represent severely injured plaintiffs.
                </p>
              </div>

              {/* The "Investigator" Highlight Box */}
              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-5 items-start">
                 <div className="p-3 bg-indigo-100 text-indigo-700 rounded-lg shrink-0">
                    <Search className="w-8 h-8" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">The Investigator's Edge</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Before attending law school, Jon was a <strong>Private Investigator</strong> working with both Plaintiff and Defense Trial Lawyers. He assisted in all phases of litigation from inception through trial. This unique background allows Mr. Zepnick to uncover critical details and evidence that others often miss.
                    </p>
                 </div>
              </div>
            </div>

            {/* Two Column Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Education & Jurisdictions */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-100 text-slate-700 rounded-lg mr-3">
                    <Map className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Education & Admissions</h4>
                </div>
                
                <div className="mb-4">
                    <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Education</p>
                    <p className="font-medium text-slate-800">Juris Doctor, 2002</p>
                    <p className="text-sm text-slate-500">Brooklyn Law School, NY</p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Bar Admissions</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100">Florida</span>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100">New York</span>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100">Wisconsin (Eastern Dist.)</span>
                    </div>
                </div>
              </div>

               {/* Media & Focus Areas */}
               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg mr-3">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Media & Impact</h4>
                </div>
                
                <p className="text-sm text-slate-600 mb-4">
                    Jon's high-profile cases have garnered significant media attention due to their impact on public safety and civil rights.
                </p>

                <div className="space-y-3">
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                        <ShieldAlert className="w-5 h-5 text-slate-400 mr-3" />
                        <div>
                            <p className="text-sm font-semibold text-slate-800">Featured In</p>
                            <p className="text-xs text-slate-500">The Miami Herald, WSVN-7, & National TV</p>
                        </div>
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