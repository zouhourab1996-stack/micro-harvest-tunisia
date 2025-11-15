import { useParams, Link } from "react-router-dom";
import { Star, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

const serviceDetails = {
  "divine-word-2025": {
    title: "Get Your Divine Word for 2025 – Unlock God's Plan & Breakthrough Now",
    description: "MOST POPULAR! Receive a powerful, life-changing prophetic word revealing God's specific plan for your 2025",
    fullDescription: "Experience transformative divine guidance with a personalized 1000+ word prophetic revelation designed exclusively for YOUR 2025 journey. This powerful service provides breakthrough insights into God's plan for your relationships, career advancement, divine purpose, spiritual gifts activation, and life-changing opportunities ahead. Includes comprehensive biblical references, actionable spiritual direction, and divine clarity that transforms confusion into confidence. Trusted by 151+ clients with perfect 5.0 rating.",
    price: 20,
    rating: 5.0,
    reviews: 151,
    deliveryTime: "24-48 hours",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Personalized 1000+ word prophetic revelation for YOUR life",
      "Comprehensive biblical references & scriptural foundation",
      "Divine insights about your 2025 journey & breakthrough opportunities",
      "Clear spiritual direction for relationships, career & purpose",
      "Professionally formatted PDF with beautiful design",
      "Unlimited revisions until you experience complete satisfaction"
    ]
  },
  "prophetic-blessings-2025": {
    title: "Prophetic Blessings 2025 – Powerful Intercessory Prayer & Divine Protection",
    description: "Experience transformative prophetic blessings through powerful intercessory prayer for 2025",
    fullDescription: "Receive powerful prophetic blessings through dedicated intercessory prayer that covers every area of your life throughout 2025. This comprehensive service includes spoken blessings over your life, family protection, career success, spiritual journey advancement, and divine favor activation. You'll receive written blessing declarations, scripture-based affirmations, spiritual protection guidance, and optional audio recording of your personalized blessings. Perfect for those seeking divine coverage and breakthrough in the new year.",
    price: 20,
    rating: 5.0,
    reviews: 80,
    deliveryTime: "24-48 hours",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Personalized prophetic blessings spoken over your life",
      "Powerful intercessory prayer for breakthrough & protection",
      "Written blessing declarations you can speak daily",
      "Scripture-based affirmations for faith activation",
      "Comprehensive spiritual protection guidance",
      "Optional audio recording of your prophetic blessings"
    ]
  },
  "biblical-word": {
    title: "Biblical Word for Your Life – Fast Scripture-Based Spiritual Guidance",
    description: "BEST VALUE! Get personalized spiritual guidance rooted in biblical wisdom",
    fullDescription: "Receive a powerful spiritual word directly from scripture that speaks directly to your current life situation and provides biblical guidance for your specific challenges. This affordable service delivers practical application of God's Word, spiritual encouragement, and divine wisdom rooted in scripture. Perfect for daily spiritual nourishment, decision-making guidance, and biblical perspective on your life circumstances. Express 24-hour delivery makes this ideal for urgent spiritual direction.",
    price: 5,
    rating: 5.0,
    reviews: 48,
    deliveryTime: "24 hours",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Scripture-based spiritual word from God's Word",
      "Biblical interpretation & practical life application",
      "Actionable guidance for your specific situation",
      "Encouraging & uplifting message rooted in truth",
      "Lightning-fast 24-hour express delivery",
      "Perfect for daily spiritual nourishment & quick answers"
    ]
  },
  "prophetic-word": {
    title: "Premium Prophetic Word – Comprehensive Life Guidance & Divine Destiny Revelation",
    description: "PREMIUM SERVICE! Receive the most comprehensive prophetic word covering ALL areas of your life",
    fullDescription: "This premium service provides an in-depth 2000+ word prophetic revelation covering every major area of your life including relationships & marriage, career & finances, divine purpose & calling, spiritual gifts identification & activation, divine destiny revelation, and future direction & opportunities. This is our most thorough service offering comprehensive spiritual direction with detailed insights, practical guidance, priority support, and optional consultation. Perfect for those seeking complete clarity about their life path and divine assignment.",
    price: 30,
    rating: 5.0,
    reviews: 42,
    deliveryTime: "2-3 days",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Comprehensive 2000+ word prophetic revelation",
      "Complete coverage of ALL major life areas",
      "Spiritual gifts identification & activation guidance",
      "Divine purpose, calling & destiny revelation",
      "Detailed relationship, career & financial guidance",
      "Future insights, direction & breakthrough opportunities",
      "Priority support with consultation available"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  const structuredData = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": service.title,
    "description": service.fullDescription,
    "provider": {
      "@type": "Person",
      "name": "John S",
      "jobTitle": "Spiritual Advisor & Prophet"
    },
    "offers": {
      "@type": "Offer",
      "price": service.price.toString(),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://yoursite.com/service/${serviceId}`,
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": service.rating.toString(),
      "reviewCount": service.reviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "image": service.image,
    "areaServed": "Worldwide"
  } : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${service.title} | 490+ Reviews | Order Your Prophetic Word Now`}
        description={`${service.fullDescription.substring(0, 155)}... Order now for $${service.price}. ${service.rating}★ rating with ${service.reviews}+ reviews. ${service.deliveryTime} delivery. WhatsApp: +216 93 816 607`}
        keywords={`${service.title}, prophetic word ${serviceId}, ${serviceId} spiritual guidance, buy prophetic word online, order prophetic word 2025, divine direction service, biblical wisdom online, spiritual counseling ${serviceId}, prophecy services online, accurate prophetic reading, trusted spiritual advisor, get prophetic word now`}
        canonicalUrl={`https://yoursite.com/service/${serviceId}`}
        ogImage={service.image}
        ogType="product"
        structuredData={structuredData}
      />
      {/* Back Button */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </div>
      </div>

      {/* Service Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {service.fullDescription}
              </p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-accent text-accent" />
                  <span className="text-2xl font-bold text-foreground">{service.rating}</span>
                  <span className="text-muted-foreground">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>{service.deliveryTime} delivery</span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <p className="text-4xl font-bold text-primary">${service.price}</p>
                  </div>
                  <a 
                    href={`https://wa.me/21693816607?text=Hello%2C%20I%20want%20to%20order%3A%20${encodeURIComponent(service.title)}%20-%20Price%3A%20%24${service.price}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:shadow-lg transform hover:scale-105 transition-all gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Order via WhatsApp
                    </Button>
                  </a>
                </div>
                
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">📱 How to Order:</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    1. Click the "Order via WhatsApp" button above<br/>
                    2. You'll be redirected to WhatsApp with pre-filled message<br/>
                    3. Confirm your order and provide any additional details<br/>
                    4. Our team will guide you through the payment process<br/>
                    5. Receive your spiritual guidance within {service.deliveryTime}
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    💬 WhatsApp: <a href="https://wa.me/21693816607" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">+216 93 816 607</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Place Your Order</h3>
                <p className="text-muted-foreground">
                  Select your service and complete the secure PayPal payment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Share Your Details</h3>
                <p className="text-muted-foreground">
                  Provide any relevant information about your situation or prayer requests
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Receive Your Word</h3>
                <p className="text-muted-foreground">
                  Get your personalized prophetic word delivered within the promised timeframe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Receive Your Spiritual Guidance?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have experienced divine direction and prophetic clarity
          </p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href={`https://wa.me/21693816607?text=Hello%2C%20I%20want%20to%20order%3A%20${encodeURIComponent(service.title)}%20-%20Price%3A%20%24${service.price}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-12 transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order Now via WhatsApp - ${service.price}
              </Button>
            </a>
            <p className="text-primary-foreground/80 text-sm">
              💬 WhatsApp: <a href="https://wa.me/21693816607" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">+216 93 816 607</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
