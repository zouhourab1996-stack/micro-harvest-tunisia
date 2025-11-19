import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Heart, BookOpen, Star } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";
import heroFarm from "@/assets/hero-farm.jpg";

const services = [
  {
    id: 1,
    title: "Divine Word for Your Life in 2025",
    description: "MOST POPULAR! Receive a powerful, personalized prophetic word revealing God's plan for your 2025. Get divine guidance on relationships, career, purpose, and spiritual gifts. 1000+ words of breakthrough insight.",
    price: 20,
    rating: 5.0,
    reviews: 151,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    link: "/service/divine-word-2025"
  },
  {
    id: 2,
    title: "Prophetic Blessings for 2025",
    description: "Experience transformative intercessory prayer with prophetic blessings covering your life, family, career & spiritual journey. Includes written declarations, scriptural affirmations & spiritual protection guidance.",
    price: 20,
    rating: 5.0,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    link: "/service/prophetic-blessings-2025"
  },
  {
    id: 3,
    title: "Spiritual Biblical Word for Your Life",
    description: "BEST VALUE! Get a personalized spiritual message rooted in scripture that speaks directly to your current situation. Perfect for daily guidance, encouragement, and biblical wisdom. Fast 24-hour delivery.",
    price: 5,
    rating: 5.0,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    link: "/service/biblical-word"
  },
  {
    id: 4,
    title: "Prophetic Word for Your Life",
    description: "PREMIUM SERVICE! Comprehensive 2000+ word prophetic word covering ALL life areas: relationships, career, purpose, spiritual gifts & divine destiny. Includes priority support & consultation.",
    price: 30,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    link: "/service/prophetic-word"
  }
];

const features = [
  {
    icon: Sparkles,
    title: "490+ Five-Star Reviews",
    description: "Proven accuracy & life-changing results trusted worldwide"
  },
  {
    icon: Heart,
    title: "100% Personalized",
    description: "Every prophetic word uniquely crafted for YOUR specific life situation"
  },
  {
    icon: BookOpen,
    title: "Biblical Foundation",
    description: "Rooted in scripture, aligned with God's Word and truth"
  },
  {
    icon: Star,
    title: "Fast 24-48hr Delivery",
    description: "Get breakthrough answers quickly when you need them most"
  }
];

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Prophetic Word & Spiritual Guidance Services",
    "description": "Get your prophetic word for 2025. Expert spiritual guidance reveals divine purpose, breakthrough answers & biblical wisdom. 490+ five-star reviews. Fast 24-48hr delivery.",
    "provider": {
      "@type": "Person",
      "name": "John S",
      "jobTitle": "Master Prophet & Spiritual Advisor",
      "description": "Gifted spiritual advisor with 8+ years experience and 490+ five-star reviews. Specializing in accurate prophetic words, divine direction, and biblical guidance."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "490",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spiritual Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Divine Word for Your Life in 2025",
            "description": "Personalized prophetic word revealing God's plan for 2025"
          },
          "price": "20",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prophetic Blessings for 2025",
            "description": "Transformative intercessory prayer with prophetic blessings"
          },
          "price": "20",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spiritual Biblical Word for Your Life",
            "description": "Scripture-based spiritual guidance with fast 24hr delivery"
          },
          "price": "5",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prophetic Word for Your Life",
            "description": "Comprehensive 2000+ word prophetic guidance covering all life areas"
          },
          "price": "30",
          "priceCurrency": "USD"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "5",
      "highPrice": "30",
      "offerCount": "4"
    },
    "url": "https://yoursite.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+216-93-816-607",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "French", "Arabic"]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a prophetic word and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A prophetic word is a divinely inspired message that provides spiritual guidance, reveals God's purpose for your life, and offers direction for your future. Through the gift of prophecy, a spiritual advisor receives insights about your life path, challenges, opportunities, and divine calling. This biblical practice has helped thousands gain clarity, breakthrough, and confidence in their life decisions."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are your prophetic words?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With 490+ five-star reviews and testimonials from clients worldwide, our prophetic words have proven accuracy. We maintain a biblical foundation and spiritual integrity in every reading. Clients consistently report life-changing breakthroughs, accurate predictions, and divine direction that transforms their relationships, careers, and spiritual journeys."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to receive my prophetic word?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most prophetic words are delivered within 24-48 hours after your order. Our Biblical Word service offers express 24-hour delivery, while comprehensive Premium services may take up to 3 days to ensure thorough spiritual guidance. You'll receive a beautifully formatted PDF document with your personalized prophetic word, biblical references, and actionable guidance."
        }
      },
      {
        "@type": "Question",
        "name": "What information do I need to provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply share your name, current life situation, specific questions or areas you need guidance on (relationships, career, purpose, etc.), and any relevant background. The more details you provide, the more personalized and accurate your prophetic word will be. All information is kept strictly confidential and handled with care."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a prophetic word for someone else?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can order a prophetic word as a gift for family members, friends, or loved ones. Many clients order prophetic blessings for spouses, children, or friends going through major life transitions. Simply provide their information and your relationship to them when placing your order via WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "What if I'm not satisfied with my prophetic word?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your satisfaction is our priority. All our services include unlimited revisions until you're completely satisfied. If you need clarification, additional insights, or have questions about your prophetic word, we're here to help. We stand behind the accuracy and quality of our spiritual guidance with 100% commitment to your breakthrough."
        }
      }
    ]
  };

  return (
      <div className="min-h-screen">
      <SEO
        title="Prophetic Word 2025 | Get Your Prophetic Word Online - 490+ 5-Star Reviews"
        description="Get your prophetic word for 2025! Receive an accurate prophetic word from experienced spiritual advisor. 490+ 5-star reviews. What is a prophetic word? Discover divine direction, breakthrough answers & biblical wisdom. Fast 24-48hr delivery."
        keywords="prophetic word, get prophetic word, what is a prophetic word, prophetic word 2025, prophetic word online, prophetic word for your life, prophetic word meaning, prophetic word today, receive prophetic word, accurate prophetic word, spiritual guidance, divine direction, biblical prophecy, prophetic blessings"
        canonicalUrl="https://www.globalfarm.nichesite.org/"
        structuredData={[structuredData, faqStructuredData]}
      />
      
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
              Get Your <span className="underline decoration-accent">Prophetic Word</span> for 2025 – Unlock Divine Direction Now
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8">
              What is a prophetic word? It's divine revelation revealing God's plan for your life. Get your personalized <strong>prophetic word online</strong> from an experienced spiritual advisor. 490+ five-star reviews prove accuracy. Receive biblical wisdom, breakthrough answers, and clear spiritual guidance. Fast 24-48 hour delivery!
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-accent text-accent" />
              <span className="text-xl md:text-2xl font-bold">5.0</span>
              <span className="text-base md:text-lg">(490 Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 md:mb-4">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-xs md:text-base text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Prophetic Word Service – Get Your Prophetic Word Today
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Select the <strong>prophetic word</strong> service for your needs. All <strong>prophetic word</strong> services feature 100% personalized messages, biblical foundation, and lightning-fast delivery. Join 490+ satisfied clients worldwide who've received accurate <strong>prophetic words</strong> and experienced breakthrough, divine clarity, and life transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet John S. – Your Prophetic Word Advisor Since 2015</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                ⭐ Prophetic Word Specialist & Spiritual Advisor
              </span>
              <span className="px-4 py-2 bg-accent/10 rounded-full text-accent-foreground font-semibold">
                ⚡ Response Time: &lt;1 Hour
              </span>
            </div>
            <p className="text-foreground leading-relaxed mb-6 text-lg">
              With over 8 years delivering <strong>prophetic words</strong> and 490+ five-star reviews, John S. is a gifted spiritual advisor with the divine gift of prophecy. Specializing in accurate <strong>prophetic words</strong> that bring breakthrough, clarity, and divine direction, John has helped thousands receive their <strong>prophetic word</strong> and discover their God-given purpose, navigate life's challenges, and step into their spiritual destiny.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Why Choose John S.?</strong><br/>
              ✓ Proven accuracy with 490+ testimonials<br/>
              ✓ Biblical foundation rooted in God's Word<br/>
              ✓ Fast delivery (24-48 hours)<br/>
              ✓ 100% personalized guidance for YOUR specific life<br/>
              ✓ Compassionate, caring, and confidential service
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              "Therefore you are no longer strangers and foreigners, but fellow citizens with the saints and members of 
              the household of God, built on the foundation of the apostles and prophets, with Christ Jesus Himself as 
              the chief cornerstone." - Ephesians 2:19-20
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section for Featured Snippets */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Prophetic Word FAQ - What Is a Prophetic Word?</h2>
            
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">What is a prophetic word and how does it work?</h3>
                <p className="text-muted-foreground">
                  A prophetic word is a divinely inspired message that provides spiritual guidance, reveals God's purpose for your life, and offers direction for your future. Through the gift of prophecy, a spiritual advisor receives insights about your life path, challenges, opportunities, and divine calling. This biblical practice has helped thousands gain clarity, breakthrough, and confidence in their life decisions.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">How accurate are your prophetic words?</h3>
                <p className="text-muted-foreground">
                  With 490+ five-star reviews and testimonials from clients worldwide, our prophetic words have proven accuracy. We maintain a biblical foundation and spiritual integrity in every reading. Clients consistently report life-changing breakthroughs, accurate predictions, and divine direction that transforms their relationships, careers, and spiritual journeys.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">How long does it take to receive my prophetic word?</h3>
                <p className="text-muted-foreground">
                  Most prophetic words are delivered within 24-48 hours after your order. Our Biblical Word service offers express 24-hour delivery, while comprehensive Premium services may take up to 3 days to ensure thorough spiritual guidance. You'll receive a beautifully formatted PDF document with your personalized prophetic word, biblical references, and actionable guidance.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">What information do I need to provide?</h3>
                <p className="text-muted-foreground">
                  Simply share your name, current life situation, specific questions or areas you need guidance on (relationships, career, purpose, etc.), and any relevant background. The more details you provide, the more personalized and accurate your prophetic word will be. All information is kept strictly confidential and handled with care.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Can I get a prophetic word for someone else?</h3>
                <p className="text-muted-foreground">
                  Yes! You can order a prophetic word as a gift for family members, friends, or loved ones. Many clients order prophetic blessings for spouses, children, or friends going through major life transitions. Simply provide their information and your relationship to them when placing your order via WhatsApp.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">What if I'm not satisfied with my prophetic word?</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. All our services include unlimited revisions until you're completely satisfied. If you need clarification, additional insights, or have questions about your prophetic word, we're here to help. We stand behind the accuracy and quality of our spiritual guidance with 100% commitment to your breakthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
