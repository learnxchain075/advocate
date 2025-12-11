
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "../assets/generated_images/professional_law_team_hero.png";

// team images (pattern 1.png ... 5.png)
import team1 from "../assets/generated_images/1.png"; // Eric L. Ansel
import team2 from "@assets/generated_images/2.png"; // Michael (if needed)
import team3 from "../assets/generated_images/3.png"; // Donald T. Norton
import team4 from "../assets/generated_images/4.png"; // Clemens Soares
import team5 from "../assets/generated_images/5.png"; // Jon A. Zepnick

export default function About() {
  const attorneys = [
    {
      name: "Eric L. Ansel",
      role: "Attorney At Law",
      bio: "Founded the firm in 1984. Over 40 years of trial experience.",
      image: team1,
      slug: "eric-l-ansel"
    },
    {
      name: "Donald T. Norton",
      role: "Partner",
      bio: "Board Certified Civil Trial Lawyer. Dedicated to complex litigation.",
      image: team3,
      slug: "donald-t-norton"
    },
    {
      name: "Jon A. Zepnick",
      role: "Attorney At Law",
      bio: "Specializes in catastrophic injury and wrongful death cases.",
      image: team5,
      slug: "jon-a-zepnick"
    },
    {
      name: "Clemens Soares",
      role: "Attorney At Law",
      bio: "Fluent in Portuguese and Spanish. Focused on personal injury.",
      image: team4,
      slug: "clemens-soares"
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Ansel & Miller, LLC</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A boutique personal injury law firm founded in 1984 with a mission to provide expert legal care and personal attention.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Firm History / Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Our Philosophy & Values</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ansel & Miller, LLC was founded in 1984 by attorney Eric L. Ansel with a simple mission: to provide injured individuals with expert legal care and personal attention when they need it most. Over nearly five decades, our firm has grown into a prestigious personal injury law practice serving Hollywood, Fort Lauderdale, and communities throughout South Florida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you come to Ansel & Miller, you become part of our family. We understand that you’re likely going through one of the toughest times in your life, and we take that responsibility to heart. We don’t see cases as file numbers; we see people.
            </p>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Ansel & Miller Team" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-border max-w-xs hidden md:block">
              <p className="font-serif text-primary font-bold text-lg italic">
                "We intentionally focus on quality, not quantity."
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Detailed */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Why Choose Ansel & Miller</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">200+ Years Experience</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Founded in 1984, our firm brings together over 200 years of combined trial experience. We have secured numerous multi-million dollar settlements and verdicts.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">Direct Attorney Access</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You will work directly with an experienced attorney – and they will pick up your phone call. We take the time to get to know you and understand your story.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">Compassionate Care</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As a smaller boutique firm, we focus on quality, not quantity. We give each client the care and attention we would want for our own families.
              </p>
            </div>
          </div>
        </div>

        {/* Attorneys */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Meet Our Attorneys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attorneys.map((attorney, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md bg-white border border-border">
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                  {attorney.image ? (
                     <img
                       src={attorney.image}
                       alt={attorney.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                      <Users className="h-12 w-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm">{attorney.bio}</p>
                  </div>
                </div>
                <div className="p-4 text-center bg-white relative z-10">
                  <h3 className="font-bold text-lg text-primary">{attorney.name}</h3>
                  <p className="text-sm text-accent font-medium uppercase tracking-wider">{attorney.role}</p>

                  <div className="mt-4">
                    <Link href={`/attorney/${attorney.slug}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Also featuring Of-Counsel: Ron Miller, Michael Palahac, III</p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
