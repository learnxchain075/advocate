// DonaldNortonProfile.jsx
import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  Scale, 
  Landmark,
  Gavel,
  History,
  ChevronRight, 
  Download
} from "lucide-react";
import team3 from "@assets/generated_images/3.png"; // Donald T. Norton

export default function DonaldNortonProfile() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-100">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative bg-slate-900 text-white pb-32 pt-10 px-6 border-b border-amber-500/30">
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract background for "Senior Partner" feel */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/attorneys" className="hover:text-white transition-colors">Attorneys</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-500 font-medium">Donald T. Norton</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-end pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-sm">
                  Partner
                </span>
                <span className="flex items-center text-amber-400 text-sm font-medium">
                  <History className="w-4 h-4 mr-1" />
                  41+ Years of Experience
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-2">
                Donald T. Norton, <span className="text-slate-400 text-2xl md:text-4xl align-top font-sans font-light">Esq.</span>
              </h1>
              <p className="text-xl text-slate-300 font-light tracking-wide max-w-2xl">
                Senior Trial Attorney specializing in complex litigation and catastrophic injury cases.
              </p>
            </div>
            
            {/* Quick Badge */}
            <div className="hidden md:block mt-6 md:mt-0">
               <div className="flex items-center space-x-2 bg-slate-800/80 border border-slate-700 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <Award className="w-8 h-8 text-amber-500" />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase">Distinction</span>
                    <span className="font-serif font-bold text-white">Million Dollar Advocates Forum</span>
                  </div>
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
                    src={team3}
                    alt="Donald T. Norton"
                    className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3 bg-amber-500 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center shadow-sm" title="Partner">
                    <Scale className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 font-serif">Donald T. Norton</h2>
                <p className="text-amber-600 font-medium tracking-wide">Partner & Lead Litigator</p>
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
                  <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download vCard
                  </button>
                </div>

                {/* Quick Info List */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Office</p>
                      <p className="text-sm font-medium text-slate-700">Fort Lauderdale, Florida</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Scale className="w-5 h-5 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Focus</p>
                      <p className="text-sm font-medium text-slate-700">Wrongful Death, TBI, Malpractice</p>
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
                <div className="h-8 w-1 bg-amber-500 rounded-full"></div>
                <h3 className="text-2xl font-bold font-serif text-slate-900">Professional Profile</h3>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                <p className="leading-relaxed">
                  Donald Norton is a veteran trial attorney who has been a distinguished member of the Florida Bar for more than <strong>41 years</strong>. 
                  His career is defined by his relentless pursuit of justice in the courtroom, where he has obtained numerous <span className="text-slate-900 font-semibold underline decoration-amber-400 decoration-2">jury verdicts in excess of a million dollars</span>.
                </p>
                
                {/* Special Callout for Areas of Practice */}
                <div className="bg-slate-50 border-l-4 border-slate-900 p-6 my-6 rounded-r-lg">
                  <h4 className="flex items-center text-lg font-bold text-slate-900 mb-3">
                    <Gavel className="w-5 h-5 mr-2" />
                    Notable Verdicts & Practice Areas
                  </h4>
                  <p className="text-slate-700">
                    Mr. Norton has secured multi-million dollar verdicts across a spectrum of high-stakes litigation, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                     {['Product Liability', 'Medical Malpractice', 'Wrongful Death', 'Traumatic Brain Injury (TBI)', 'Paraplegia', 'Automobile Accidents'].map((item) => (
                       <div key={item} className="flex items-center text-sm font-medium text-slate-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                         {item}
                       </div>
                     ))}
                  </div>
                </div>

                <p className="leading-relaxed">
                  Don was born in Miami, Florida. He obtained his law degree from Nova Southeastern University and attended the University of South Florida where he obtained his Bachelor of Arts degree.
                </p>
              </div>
            </div>

            {/* Credentials / Areas of Focus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Admissions Card - Higher Priority for Partners */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-10 -mt-10"></div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className="p-2 bg-slate-100 text-slate-700 rounded-lg mr-3">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Court Admissions</h4>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-1 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">Federal Court, Southern District of FL</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-1 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">U.S. Court of Appeals, 11th Circuit</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-1 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">The Florida Bar (41+ Years)</span>
                  </li>
                </ul>
              </div>

               {/* Memberships Card */}
               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full -mr-10 -mt-10"></div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg mr-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Memberships</h4>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-1 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">Million Dollar Advocates Forum</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-1 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">Association of Trial Lawyers of America</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-1 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">Florida Justice Association</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Row */}
            <div className="bg-slate-900 text-slate-300 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center">
                 <div className="p-3 bg-slate-800 rounded-lg mr-4">
                   <BookOpen className="w-6 h-6 text-amber-500" />
                 </div>
                 <div>
                   <h5 className="text-white font-bold text-lg">Education</h5>
                   <p className="text-sm text-slate-400">Foundation of Legal Excellence</p>
                 </div>
              </div>
              <div className="flex flex-col md:text-right space-y-1">
                 <span className="font-medium text-white">Nova Southeastern University</span>
                 <span className="text-sm">Juris Doctor (Law Degree)</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-slate-700"></div>
              <div className="flex flex-col md:text-right space-y-1">
                 <span className="font-medium text-white">University of South Florida</span>
                 <span className="text-sm">Bachelor of Arts (B.A.)</span>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}