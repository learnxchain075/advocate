import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Ansel & Miller</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are available 24/7. Free consultation, no obligation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The aftermath of an accident can be overwhelming. You don't have to navigate it alone. 
                Reach out to our team at any time. If we miss your call, we will return it promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Phone</h3>
                    <a href="tel:954-922-9100" className="text-muted-foreground hover:text-accent text-lg">954-922-9100</a>
                    <p className="text-sm text-muted-foreground">Available 24 hours a day, 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Email</h3>
                    <a href="mailto:info@anselmiller.com" className="text-muted-foreground hover:text-accent">info@anselmiller.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Office Locations</h3>
                    <div className="mt-2 space-y-4">
                      <div>
                        <strong className="block text-primary">Hollywood Office (Main)</strong>
                        <span className="text-muted-foreground">1939 Tyler Street, Hollywood, FL 33020</span>
                      </div>
                      <div>
                        <strong className="block text-primary">Boca Raton Office</strong>
                        <span className="text-muted-foreground">2225 Glades Road, Suite 324A, Boca Raton, FL 33431</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg text-primary mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                If you are unable to come to us due to your injuries, we can visit you at home or in the hospital. 
                Virtual consultations are also available.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}