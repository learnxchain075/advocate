// ClemensSoaresProfile.jsx
import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  Globe, 
  ChevronRight, 
  Download,
  Calendar
} from "lucide-react";
import team4 from "../../assets/generated_images/4.png"; // Clemens Soares

export default function ClemensSoaresProfile() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative bg-slate-900 text-white pb-32 pt-10 px-6">
        <div className="absolute inset-0 overflow-hidden">
          {/* subtle decorative background pattern */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/attorneys" className="hover:text-white transition-colors">Attorneys</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-500 font-medium">Clemens Soares</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-end pb-6 border-b border-slate-700/50">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-2">
                Clemens Soares, <span className="text-amber-500 text-2xl md:text-4xl align-top">Esq.</span>
              </h1>
              <p className="text-xl text-slate-300 font-light tracking-wide">
                Associate Attorney & Civil Litigation Specialist
              </p>
            </div>
            <div className="hidden md:block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <Globe className="w-4 h-4 mr-2 text-amber-500" />
                Fluent in English & Portuguese
              </span>
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
                    src={team4}
                    alt="Clemens Soares"
                    className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white" title="Available"></div>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 font-serif">Clemens Soares</h2>
                <p className="text-slate-500">Lawyer / Legal Counsel</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Actions */}
                <div className="space-y-3">
                  <a href="tel:+19549229100" className="flex items-center justify-center w-full px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg group">
                    <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
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
                    <MapPin className="w-5 h-5 text-amber-500 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                      <p className="text-sm font-medium text-slate-700">Fort Lauderdale, Florida</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-amber-500 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Education</p>
                      <p className="text-sm font-medium text-slate-700">Saint Thomas University Law</p>
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
                <h3 className="text-2xl font-bold font-serif text-slate-900">Professional Biography</h3>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                <p className="leading-relaxed">
                  Clemens Soares graduated <em className="text-slate-900 font-serif font-medium">cum laude</em> from 
                  Saint Thomas University Law School after receiving her Bachelor of Science in Business. 
                  With a career defined by dedication and precision, she has become a pillar in the legal community.
                </p>
                <p className="leading-relaxed">
                  During her distinguished career, she has served the <strong>Brazilian community</strong> for the past 15 years in various capacities. 
                  Her legal acumen was sharpened serving as a judicial intern to the:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <li className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <Award className="w-6 h-6 text-amber-500 mr-3" />
                    <span className="text-sm font-medium text-slate-800">Honorable Lody Jean <br/><span className="text-slate-500 font-normal">11th Judicial Circuit, Miami</span></span>
                  </li>
                  <li className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <Award className="w-6 h-6 text-amber-500 mr-3" />
                    <span className="text-sm font-medium text-slate-800">Honorable Judge Towbin-Singer <br/><span className="text-slate-500 font-normal">17th Judicial Circuit, Ft. Lauderdale</span></span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Ms. Soares accomplished these professional milestones while raising two children with her husband. 
                  Born in Brazil and previously residing in New York, she has proudly made South Florida her home. 
                  Ansel & Miller is proud to have her as part of the team, continuing to provide the highest quality of service to injured clients.
                </p>
              </div>
            </div>

            {/* Credentials / Areas of Focus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mr-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Education</h4>
                </div>
                <ul className="space-y-3">
                  <li className="relative pl-4 border-l-2 border-slate-200">
                    <p className="font-semibold text-slate-800">Juris Doctor, Cum Laude</p>
                    <p className="text-sm text-slate-500">Saint Thomas University Law School</p>
                  </li>
                  <li className="relative pl-4 border-l-2 border-slate-200">
                    <p className="font-semibold text-slate-800">B.S. in Business</p>
                    <p className="text-sm text-slate-500">University Details (Implied)</p>
                  </li>
                </ul>
              </div>

              {/* Admissions/Languages Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg mr-3">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Languages & Background</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-semibold mb-1">Languages</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">English</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Portuguese</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-semibold mb-1">Origins</p>
                    <p className="text-sm text-slate-700">Born in Brazil, formerly of New York, currently residing in South Florida.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <blockquote className="relative p-8 bg-slate-900 rounded-xl text-center overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-amber-500"></div>
               <p className="relative z-10 text-xl md:text-2xl font-serif text-white italic leading-relaxed">
                 "Providing the highest quality of service to injured clients with compassion and legal excellence."
               </p>
               <footer className="mt-4 text-slate-400 text-sm font-medium uppercase tracking-widest">
                 — Ansel & Miller Philosophy
               </footer>
            </blockquote>

          </div>
        </div>
      </div>


    </div>
  );
}