import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import { Sparkles, Heart, BookOpen, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Divine Word for Your Life in 2025",
    description: "Receive a powerful prophetic word specifically tailored for your life in 2025. Get divine guidance and spiritual direction.",
    price: 20,
    rating: 5.0,
    reviews: 151,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    link: "/service/divine-word-2025"
  },
  {
    id: 2,
    title: "Prophetic Blessings for 2025",
    description: "Experience transformative prayer with prophetic blessings that will guide and protect you throughout 2025.",
    price: 20,
    rating: 5.0,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    link: "/service/prophetic-blessings-2025"
  },
  {
    id: 3,
    title: "Spiritual Biblical Word for Your Life",
    description: "Get a personalized spiritual message rooted in biblical wisdom to guide your daily life and decisions.",
    price: 5,
    rating: 5.0,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    link: "/service/biblical-word"
  },
  {
    id: 4,
    title: "Prophetic Word for Your Life",
    description: "Receive comprehensive spiritual guidance with a detailed prophetic word about your life path and purpose.",
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
    title: "Authentic Prophecy",
    description: "Genuine spiritual gifts with proven accuracy"
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Each word is uniquely crafted for you"
  },
  {
    icon: BookOpen,
    title: "Biblical Foundation",
    description: "Rooted in scripture and spiritual truth"
  },
  {
    icon: Star,
    title: "490+ Reviews",
    description: "Join hundreds of satisfied clients"
  }
];

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Spiritual Guidance & Prophetic Words Services",
    "description": "Professional spiritual guidance, prophetic words, and biblical counseling services. Receive divine direction and spiritual clarity for your life journey.",
    "provider": {
      "@type": "Person",
      "name": "John S",
      "jobTitle": "Spiritual Advisor & Prophet",
      "description": "Experienced spiritual advisor with the gift of prophecy and biblical wisdom. Helping people find divine direction since 2015."
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
            "description": "Personalized prophetic word for your 2025 journey"
          },
          "price": "20",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prophetic Blessings for 2025",
            "description": "Transformative prayer with prophetic blessings"
          },
          "price": "20",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spiritual Biblical Word for Your Life",
            "description": "Scripture-based spiritual guidance"
          },
          "price": "5",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prophetic Word for Your Life",
            "description": "Comprehensive spiritual guidance and prophetic word"
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

  return (
    <div className="min-h-screen">
      <SEO
        title="Spiritual Guidance & Prophetic Words | Divine Direction for Your Life 2025"
        description="Receive authentic prophetic words, spiritual guidance, and biblical wisdom. 5.0 rating with 490+ reviews. Experience divine direction and spiritual clarity. Fast delivery, personalized service, biblical foundation."
        keywords="prophetic word 2025, spiritual guidance online, divine direction, biblical prophecy, prophetic blessings, spiritual counseling, Christian prophecy, faith guidance, spiritual advisor, divine word, spiritual reading, life purpose prophecy, biblical guidance, prayer services, prophetic ministry, spiritual gifts, divine calling, prophetic revelation"
        canonicalUrl="https://yoursite.com/"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Professional Spiritual Guidance & Prophetic Words for 2025
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get authentic divine wisdom and personalized spiritual direction for your life journey. 
              Experience the transformative power of biblical prophecy and spiritual guidance from an experienced advisor with 490+ five-star reviews.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <Star className="w-6 h-6 fill-accent text-accent" />
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-lg">(490 Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              Premium Spiritual Services & Prophetic Guidance
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of spiritual services tailored to your needs. All services include personalized attention, biblical foundation, and fast delivery. Trusted by hundreds of clients worldwide seeking divine direction and spiritual clarity.
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
            <h2 className="text-3xl font-bold text-foreground mb-6">About John S.</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                Level 2 Seller
              </span>
              <span className="px-4 py-2 bg-accent/10 rounded-full text-accent-foreground font-semibold">
                Average Response: 1 Hour
              </span>
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              I am a solution seeker and I have the gift of vision. I will give you answers to anything you want to know 
              and offer you spiritual guidance and counsel to uplift your spirit. I will also tell you about your future.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              "Therefore you are no longer strangers and foreigners, but fellow citizens with the saints and members of 
              the household of God, built on the foundation of the apostles and prophets, with Christ Jesus Himself as 
              the chief cornerstone." - Ephesians 2:19-20
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
