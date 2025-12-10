// MichaelPalahachProfile.jsx
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Award,
  BookOpen,
  Scale,
  Gavel,
  Handshake,
  Trophy, 
  ChevronRight,
  Download,
  Calendar
} from "lucide-react";
import team2 from "@assets/generated_images/2.png";

export default function MichaelPalahachProfile() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">

      {/* --- HERO HEADER SECTION --- */}
      <div className="relative bg-slate-900 text-white pb-32 pt-10 px-6 border-b border-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle background showing structure/stability for Mediation */}
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/attorneys" className="hover:text-white transition-colors">Attorneys</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-500 font-medium">Michael Palahach III</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-end pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                  Civil Trial Lawyer
                </span>
                <span className="flex items-center text-blue-300 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  45 Year Career
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-2">
                Michael Palahach III, <span className="text-slate-500 text-2xl md:text-3xl align-top font-sans font-light">Esq., P.A.</span>
              </h1>
              <p className="text-xl text-slate-300 font-light tracking-wide max-w-2xl">
                Distinguished Federal Litigator & Certified Circuit Civil Mediator.
              </p>
            </div>

            {/* Mediator Badge */}
            <div className="hidden md:flex items-center mt-6 md:mt-0 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-lg">
              <div className="p-2 bg-slate-800 rounded-full mr-3 border border-slate-600">
                <Handshake className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Supreme Court Certified</span>
                <span className="font-serif font-medium text-white">Circuit Civil Mediator</span>
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
                    src={team2}
                    alt="Michael Palahach III"
                    className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3 bg-blue-600 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center shadow-sm" title="Mediator">
                    <Gavel className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 font-serif">Michael Palahach III</h2>
                <p className="text-slate-500 font-medium tracking-wide">Lawyer & Mediator</p>
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
                      <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                      <p className="text-sm font-medium text-slate-700">South Florida</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Expertise</p>
                      <p className="text-sm font-medium text-slate-700">Jury Trials & Federal Litigation</p>
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
                <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold font-serif text-slate-900">Professional Biography</h3>
              </div>

              <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                <p className="leading-relaxed">
                  Michael Palahach’s distinguished <span className="font-bold text-slate-900">45-year career</span> has resulted in an expertise that covers civil litigation and personal injury, with particular emphasis on <span className="underline decoration-blue-300 decoration-2">jury trials and Federal Court litigation</span>.
                </p>
                <p className="leading-relaxed">
                  A true leader in his field, he is of valued counsel to the firm as one of the country’s most respected trial lawyers. Mike has been recognized by numerous national review boards in the industry and received many prestigious awards for his dedication to justice.
                </p>
              </div>

              {/* The "Gator / Athlete" Highlight Box */}
              <div className="mt-8 bg-gradient-to-r from-orange-50 to-blue-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-5 items-center md:items-start">
                <div className="p-4 bg-white shadow-sm rounded-full shrink-0 border border-slate-100">
                  <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">From the Gridiron to the Courtroom</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Before his legal career, Michael played for the <strong>Florida Gators Football team (1966-1969)</strong>. He brings the same competitive spirit, discipline, and teamwork learned on the field to every case he handles for his clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Education */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mr-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Education</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Juris Doctor</span>
                    <span className="text-sm text-slate-500">University of Florida College of Law</span>
                  </li>
                  <li className="flex flex-col border-t border-slate-50 pt-3">
                    <span className="font-bold text-slate-800">B.S. Business Admin</span>
                    <span className="text-sm text-slate-500">University of Florida</span>
                  </li>
                </ul>
              </div>

              {/* Admissions & Roles */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-900 text-white rounded-lg mr-3">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Admissions & Roles</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 mr-3"></div>
                    <span className="text-sm text-slate-700">Florida Supreme Court Certified Circuit Civil Mediator</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 mr-3"></div>
                    <span className="text-sm text-slate-700">The Florida Bar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 mr-3"></div>
                    <span className="text-sm text-slate-700">Federal & State Jurisdictions (Trial & Appellate)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}