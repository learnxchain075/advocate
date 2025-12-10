import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Star, Award, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@assets/generated_images/professional_law_team_hero.png";
import ericAnselImage from "@assets/generated_images/eric_ansel_placeholder.png";
import markMillerImage from "@assets/generated_images/professional_headshot_of_attorney_mark_miller.png";
import jonZepnickImage from "@assets/generated_images/professional_headshot_of_attorney_jon_zepnick.png";
import ofCounselImage from "@assets/generated_images/professional_headshot_of_of-counsel_attorney.png";
import avBadge from "@assets/generated_images/av_preeminent_rating_badge.png";
import superLawyersBadge from "@assets/generated_images/super_lawyers_badge.png";
import millionDollarBadge from "@assets/generated_images/million_dollar_advocates_badge.png";
import top100Badge from "@assets/generated_images/top_100_trial_lawyers_badge.png";
import justiceImage from "@assets/generated_images/abstract_justice_scales.png";
import lobbyImage from "@assets/generated_images/modern_law_office_lobby.png";
import { useLanguage } from "@/lib/i18n";



import team1 from "@assets/generated_images/1.png"; // Eric L. Ansel
import team2 from "@assets/generated_images/2.png"; // Michael Palahach III
import team3 from "@assets/generated_images/3.png"; // Donald T. Norton
import team4 from "@assets/generated_images/4.png"; // Clemens Soares
import team5 from "@assets/generated_images/5.png"; // Jon A. Zepnick

export default function Home() {
  const { t } = useLanguage();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const practices = [
    { title: "Car Accidents", icon: "🚗" },
    { title: "Truck Accidents", icon: "🚛" },
    { title: "Slip & Fall", icon: "⚠️" },
    { title: "Wrongful Death", icon: "🕊️" },
    { title: "Medical Malpractice", icon: "🏥" },
    { title: "Product Liability", icon: "📦" },
    { title: "Motorcycle Accidents", icon: "🏍️" },
    { title: "Negligent Security", icon: "🔒" },
  ];

  const results = [
    { amount: "$39 Million", type: "Watercraft Accident" },
    { amount: "$20 Million", type: "Auto Accident" },
    { amount: "$13.5 Million", type: "Wrongful Death" },
    { amount: "$8 Million", type: "Motorcycle Accident" },
  ];

  const reviews = [
    {
      quote: "They treated me like family, not just a case number. Mr. Norton and his team were by our side from start to finish.",
      author: "J.C.",
      source: "Google Review",
      stars: 5
    },
    {
      quote: "Professional, knowledgeable, and aggressive. Exactly what you want in a lawyer when you're up against insurance companies.",
      author: "Michael R.",
      source: "Google Review",
      stars: 5
    },
    {
      quote: "They fought hard for my settlement. I couldn't be happier with the result. Highly recommended!",
      author: "Sarah L.",
      source: "Facebook Review",
      stars: 5
    },
    {
      quote: "The best legal team in South Florida. They explained everything clearly and got me the compensation I deserved.",
      author: "David B.",
      source: "Google Review",
      stars: 5
    },
    {
      quote: "Compassionate attorneys who truly care about their clients. I felt supported throughout the entire process.",
      author: "Maria G.",
      source: "Avvo Review",
      stars: 5
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Ansel & Miller Team" 
            className="w-full h-full object-cover object-top scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            variants={fadeIn}
            className="text-white space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-1 bg-accent/90 text-white text-sm font-bold tracking-wider rounded-full mb-2 shadow-[0_0_15px_rgba(212,175,55,0.5)] border border-accent/50 backdrop-blur-sm">
              {t("hero.serving")}
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
              {t("hero.title.restore")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent">{t("hero.title.protect")}</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed drop-shadow-md">
              {t("hero.description")}
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 h-14 shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-1 transition-all duration-300">
                  {t("nav.consultation")}
                </Button>
              </Link>
              <a href="tel:954-922-9100">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 h-14 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
                  {t("hero.call_us")}
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center gap-8 pt-8 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2 group cursor-default">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-accent/20 transition-colors">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="group-hover:text-white transition-colors">{t("hero.no_fee")}</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-accent/20 transition-colors">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <span className="group-hover:text-white transition-colors">{t("hero.top_rated")}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Eric Ansel Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-end items-end relative h-full mt-auto"
          >
            <div className="relative z-10">
               <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
               <img 
                 src={ericAnselImage} 
                 alt="Attorney Eric Ansel" 
                 className="relative z-10 w-auto h-auto max-h-[70vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mask-image-gradient-to-b"
               />
               
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.2 }}
                 className="absolute bottom-10 -left-10 z-30 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-2xl max-w-xs"
               >
                  <p className="font-serif font-bold text-2xl text-white mb-1">Eric Ansel</p>
                  <p className="text-sm text-accent font-medium tracking-wider uppercase">{t("eric.title")}</p>
                  <div className="mt-3 text-xs text-gray-300 italic">{t("eric.quote")}</div>
               </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowRight className="h-4 w-4 rotate-90" />
        </motion.div>
      </section>

      {/* Results Ticker */}
      <section className="bg-primary py-10 border-t border-white/10 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-center text-accent font-bold text-sm uppercase tracking-[0.3em] mb-8">Proven Track Record</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {results.map((result, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">{result.amount}</div>
                <div className="h-0.5 w-12 bg-accent mx-auto mb-2 group-hover:w-full transition-all duration-500"></div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{result.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full -z-10"></div>
              <img 
                src={lobbyImage} 
                alt="Ansel & Miller Office" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-accent text-white p-2 rounded-full">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="font-serif font-bold text-xl text-primary">Award Winning</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recognized among Florida's top lawyers with AV Preeminent ratings.
                </p>
              </div>
              
            </div>

<div className="space-y-16">



  {/* --- EXISTING SECTION BELOW (UPDATED & POLISHED) --- */}
  <div className="space-y-8">
    <div>
      <h2 className="font-serif text-4xl font-bold text-primary mb-4">
        Why Choose Ansel & Miller?
      </h2>
      <div className="w-20 h-1 bg-accent mb-6"></div>
      <p className="text-muted-foreground text-lg leading-relaxed">
        We are not a high-volume settlement mill. We are a boutique personal 
        injury law firm dedicated to quality over quantity. When you hire us, 
        you work directly with experienced trial attorneys who know your name, 
        understand your story, and fight relentlessly for your best possible result.
      </p>
    </div>

    <div className="space-y-6">
      {[
        {
          title: "200+ Years of Combined Experience",
          desc: "Our seasoned attorneys bring together centuries of personal injury litigation expertise."
        },
        {
          title: "Direct Attorney Access",
          desc: "You will always communicate directly with your lawyer—not just a case manager."
        },
        {
          title: "Trial-Ready Representation",
          desc: "We prepare every case as if it will go to trial, which consistently leads to stronger settlements."
        }
      ].map((item, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="mt-1 bg-primary/5 p-2 rounded-full h-fit">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <Link href="/about">
      <Button
        variant="outline"
        className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
      >
        More About Our Firm
      </Button>
    </Link>
  </div>

</div>

          </div>
        </div>
      </section>

          {/* Meet Our Attorneys (UPDATED: uses 1..5.png images + View Profile buttons) */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Meet Our Attorneys</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Our team of dedicated legal professionals is committed to fighting for your rights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {/* Eric L. Ansel */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={team1}
                  alt="Eric L. Ansel"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm">"Fighting for the injured since 1984."</p>
                </div>
              </div>
              <div className="p-6 text-center border-b-4 border-transparent group-hover:border-accent transition-colors flex-grow flex flex-col justify-end">
                <h3 className="font-serif text-xl font-bold text-primary mb-1">Eric L. Ansel</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs">ATTORNEY AT LAW</p>
                <Link href="/attorney/eric-l-ansel">
                  <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">View Profile</Button>
                </Link>
              </div>
            </div>

            {/* Michael Palahach III */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={team2}
                  alt="Michael Palahach III"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm">"Dedicated to excellence in every case."</p>
                </div>
              </div>
              <div className="p-6 text-center border-b-4 border-transparent group-hover:border-accent transition-colors flex-grow flex flex-col justify-end">
                <h3 className="font-serif text-xl font-bold text-primary mb-1">Michael Palahach III</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs">ATTORNEY AT LAW</p>
                <Link href="/attorney/michael-palahach-iii">
                  <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">View Profile</Button>
                </Link>
              </div>
            </div>

            {/* Donald T. Norton */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={team3}
                  alt="Donald T. Norton"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-b-4 border-transparent group-hover:border-accent transition-colors flex-grow flex flex-col justify-end">
                <h3 className="font-serif text-xl font-bold text-primary mb-1">Donald T. Norton</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs">PARTNER</p>
                <Link href="/attorney/donald-t-norton">
                  <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">View Profile</Button>
                </Link>
              </div>
            </div>

            {/* Clemens Soares */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={team4}
                  alt="Clemens Soares"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-b-4 border-transparent group-hover:border-accent transition-colors flex-grow flex flex-col justify-end">
                <h3 className="font-serif text-xl font-bold text-primary mb-1">Clemens Soares</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs">ATTORNEY AT LAW</p>
                <Link href="/attorney/clemens-soares">
                  <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">View Profile</Button>
                </Link>
              </div>
            </div>

          </div>

          {/* second row, centered container for Jon (or you can keep in grid if you want even five across) */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Jon A. Zepnick */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={team5}
                  alt="Jon A. Zepnick"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-b-4 border-transparent group-hover:border-accent transition-colors flex-grow flex flex-col justify-end">
                <h3 className="font-serif text-xl font-bold text-primary mb-1">Jon A. Zepnick</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs">ATTORNEY AT LAW</p>
                <Link href="/attorney/jon-a-zepnick">
                  <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">View Profile</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Button to full team */}
          <div className="text-center mt-12">
            <Link href="/attorney-profiles">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Types of Cases We Handle</h2>
            <p className="text-muted-foreground text-lg">
              We handle serious injury and accident cases across South Florida. If you've been hurt due to someone else's negligence, we are here to fight for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, idx) => (
              <Link key={idx} href="/practice-areas">
                <motion.a 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-accent flex flex-col items-center text-center gap-4 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">{practice.icon}</div>
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors z-10">
                    {practice.title}
                  </h3>
                  <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 text-sm font-bold text-accent tracking-wide uppercase">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/practice-areas">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8">
                View All Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-12">Nationally Recognized Excellence</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { img: avBadge, alt: "AV Preeminent Rating" },
              { img: superLawyersBadge, alt: "Super Lawyers" },
              { img: millionDollarBadge, alt: "Million Dollar Advocates Forum" },
              { img: top100Badge, alt: "Top 100 Trial Lawyers" }
            ].map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
              >
                <img 
                  src={award.img} 
                  alt={award.alt} 
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Parallax */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
          <img src={justiceImage} alt="Justice Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl h-full flex flex-col shadow-xl">
                    <div className="flex mb-4">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-200 italic mb-6 flex-grow leading-relaxed">
                      "{review.quote}"
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <div className="font-bold text-white text-lg">{review.author}</div>
                      <div className="text-accent text-sm font-medium uppercase tracking-wider">{review.source}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary -left-12 lg:-left-16" />
              <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary -right-12 lg:-right-16" />
            </div>
          </Carousel>
          
          <div className="text-center mt-12">
            <Link href="/results">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Read More Client Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations / CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-border">
            <div className="space-y-4 max-w-xl">
              <h2 className="font-serif text-3xl font-bold text-primary">Ready to Discuss Your Case?</h2>
              <p className="text-muted-foreground">
                We are available 24/7 to answer your questions. Visit us in Hollywood or Boca Raton, or we can come to you.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <MapPin className="h-5 w-5 text-accent" /> Hollywood Office
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <MapPin className="h-5 w-5 text-accent" /> Boca Raton Office
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a href="tel:954-922-9100">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 h-14 shadow-lg animate-pulse hover:animate-none">
                  Call 954-922-9100
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}