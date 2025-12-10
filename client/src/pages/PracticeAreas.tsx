import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PracticeAreas() {
  const practices = [
    {
      title: "Car Accidents",
      desc: "Expert representation for collisions on I-95, Florida Turnpike, and local roads.",
      icon: "🚗",
      slug: "/practice/car-accidents"
    },
    {
      title: "Truck Accidents",
      desc: "Handling complex cases involving commercial vehicles and federal regulations.",
      icon: "🚛",
      slug: "/practice/truck-accidents"
    },
    {
      title: "Slip & Fall",
      desc: "Holding property owners accountable for unsafe conditions and negligence.",
      icon: "⚠️",
      slug: "/practice/slip-and-fall"
    },
    {
      title: "Pedestrian Accidents",
      desc: "Protecting the rights of those injured while walking or crossing the street.",
      icon: "🚶",
      slug: "/practice/pedestrian-accidents"
    },
    {
      title: "Construction Accidents",
      desc: "Representation for injuries occurring on dangerous construction sites.",
      icon: "🏗️",
      slug: "/practice/construction-accidents"
    },
    {
      title: "Premises Liability",
      desc: "Injuries caused by negligent security, poor lighting, or maintenance failures.",
      icon: "🏢",
      slug: "/practice/premises-liability"
    },
    {
      title: "Product Liability",
      desc: "Holding manufacturers responsible for defective and dangerous products.",
      icon: "📦",
      slug: "/practice/product-liability"
    },
    {
      title: "Negligent Security",
      desc: "Advocating for victims of crimes preventable by adequate security measures.",
      icon: "🔒",
      slug: "/practice/negligent-security"
    },
    {
      title: "Rideshare Injury",
      desc: "Complex cases involving Uber, Lyft, Doordash, and other gig economy services.",
      icon: "📱",
      slug: "/practice/rideshare-injury"
    },
    {
      title: "Medical Malpractice",
      desc: "Fighting for victims of surgical errors, misdiagnosis, and medical negligence.",
      icon: "🏥",
      slug: "/practice/medical-malpractice"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Practice Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We focus on serious injury and accident cases. No two cases are alike, and we take a personalized approach to every claim.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((area, idx) => (
            <div key={idx} className="bg-card hover:shadow-xl transition-shadow duration-300 rounded-xl border border-border p-8 flex flex-col">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">{area.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                {area.desc}
              </p>

              <Link href={area.slug}>
                <Button 
                  as="a" 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
