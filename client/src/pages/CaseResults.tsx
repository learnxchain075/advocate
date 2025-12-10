import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CaseResults() {
  const results = [
    { amount: "$39,000,000", type: "Watercraft Accident", desc: "Settlement for catastrophic injuries sustained in a watercraft incident." },
    { amount: "$20,000,000", type: "Auto Accident", desc: "Major settlement for a severe highway collision." },
    { amount: "$13,500,000", type: "Liquor Liability / Wrongful Death", desc: "Holding establishment accountable for serving intoxicated patron." },
    { amount: "$8,000,000", type: "Motorcycle Accident", desc: "Recovery for a motorcyclist struck by a commercial vehicle." },
    { amount: "$5,000,000", type: "Trucking Accident / Wrongful Death", desc: "Settlement obtained just before trial for family of victim." },
    { amount: "$4,000,000", type: "Negligent Supervision / Wrongful Death", desc: "Case involving lack of proper supervision leading to tragedy." },
    { amount: "$2,300,000", type: "Premises Liability", desc: "Slip and fall resulting in permanent disability." },
    { amount: "$2,100,000", type: "Auto Accident", desc: "For client with traumatic brain injury from distracted driver collision." },
    { amount: "$1,250,000", type: "Slip & Fall", desc: "Jury verdict for victim requiring back surgery after supermarket fall." },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Case Results</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our proven track record speaks for itself. We fight to get you the maximum compensation you deserve.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {results.map((result, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-h-[250px]">
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{result.amount}</div>
              <div className="h-1 w-12 bg-accent mb-4"></div>
              <h3 className="font-bold text-lg uppercase tracking-wide text-muted-foreground mb-3">{result.type}</h3>
              <p className="text-sm text-gray-500">{result.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 border-l-4 border-accent p-6 md:p-8 rounded-r-lg max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground italic">
            * The results above are examples of successful verdicts and settlements we have achieved. 
            Every case is unique, and past results do not guarantee future outcomes. Results depend on the specific facts of each case.
          </p>
        </div>

        <div className="text-center mt-16">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Let Us Fight For You</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-6 text-lg">
              Free Case Evaluation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}