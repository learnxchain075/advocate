import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      q: "What should I do after an accident or injury?",
      a: "Your health and safety come first. Call 911 or get medical attention immediately. Document what happened: take photos, gather witness contacts, and file a report. Avoid discussing fault. Then, call a personal injury attorney like Ansel & Miller to protect your rights."
    },
    {
      q: "How much does it cost to hire Ansel & Miller?",
      a: "You pay nothing upfront. We work on a contingency fee basis, meaning we only get paid if we win for you. If we don't recover compensation, you owe us nothing. We also advance all necessary case expenses."
    },
    {
      q: "How long will my personal injury case take?",
      a: "Every case is different. Some resolve in a few months, while others involving serious injuries or disputed liability can take a year or longer. We prepare every case as if it's headed to trial to encourage faster, stronger settlements."
    },
    {
      q: "Will I have to go to court or trial?",
      a: "Most claims settle before trial. However, if the insurer doesn't offer a fair amount, we are fully prepared to go to court. The decision to settle or go to trial is always made together with you."
    },
    {
      q: "What is my personal injury case worth?",
      a: "Case value depends on your damages: medical bills, lost wages, pain and suffering, and the severity of injuries. We consult experts to calculate a fair value and fight for every dollar you deserve."
    },
    {
      q: "Is there a time limit to file my injury claim in Florida?",
      a: "Yes. Generally, you have two years from the date of the incident to file a lawsuit for most personal injury cases (effective March 2023). Claims against government entities have shorter deadlines. Do not wait too long."
    },
    {
      q: "What if I was partly at fault? Can I still recover damages?",
      a: "Often, yes. Florida follows comparative negligence. If you are 20% at fault, you can recover 80% of damages. However, if you are found more than 50% at fault, you cannot recover anything. Let us investigate before you assume fault."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Answers to common questions about personal injury cases in Florida.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-4 bg-card">
              <AccordionTrigger className="text-left font-serif font-bold text-lg hover:text-accent text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center p-8 bg-muted rounded-xl border border-border">
          <h3 className="font-bold text-xl text-primary mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            We are here to help. Contact us anytime for a free consultation.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}