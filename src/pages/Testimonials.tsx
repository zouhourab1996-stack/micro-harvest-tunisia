import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";

const testimonials = [
  {
    name: "Sarah M.",
    location: "United States",
    rating: 5,
    service: "Prophetic Word for Your Life",
    date: "January 2025",
    testimony: "I was at a crossroads in my career and personal life, unsure of which direction to take. The prophetic word I received was incredibly detailed and accurate. It revealed things about my calling that I had never considered but felt absolutely right. Within weeks, doors started opening exactly as the prophecy described. This word changed my life!"
  },
  {
    name: "Michael T.",
    location: "United Kingdom",
    rating: 5,
    service: "Divine Word for 2025",
    date: "January 2025",
    testimony: "The accuracy of my prophetic word was astounding. John S identified spiritual gifts I didn't know I had and provided specific guidance for activating them. The biblical references included gave me confidence that this was truly from God. I've already seen three major confirmations in my life. Highly recommend!"
  },
  {
    name: "Grace L.",
    location: "Canada",
    rating: 5,
    service: "Prophetic Blessings for 2025",
    date: "December 2024",
    testimony: "The prophetic blessings broke through spiritual barriers I'd been facing for years. After receiving the prayer, I experienced immediate breakthroughs in my finances and relationships. The power in those words was tangible. Thank you for this anointed ministry!"
  },
  {
    name: "David K.",
    location: "Australia",
    rating: 5,
    service: "Biblical Word for Your Life",
    date: "December 2024",
    testimony: "I was skeptical at first, but the word I received was so specific to my situation that there's no way it could have been generic. It addressed my deepest questions about my purpose and provided clear next steps. This ministry is the real deal. Five stars!"
  },
  {
    name: "Jennifer R.",
    location: "South Africa",
    rating: 5,
    service: "Prophetic Word for Your Life",
    date: "November 2024",
    testimony: "After feeling spiritually stuck for months, the prophetic word reignited my passion for God and my calling. It was like God speaking directly to my heart. The delivery was fast, the word was detailed, and the impact has been life-changing. Worth every penny!"
  },
  {
    name: "Emmanuel O.",
    location: "Nigeria",
    rating: 5,
    service: "Divine Word for 2025",
    date: "November 2024",
    testimony: "This prophetic word confirmed what I sensed God was saying but gave me so much more clarity and detail. The scriptural backing was solid, and I've already started walking out the guidance provided. My family has seen the positive changes. Glory to God!"
  },
  {
    name: "Maria S.",
    location: "Spain",
    rating: 5,
    service: "Prophetic Blessings for 2025",
    date: "October 2024",
    testimony: "The prophetic blessing over my life was powerful and moved me to tears. I felt the presence of God so strongly as I read it. Since then, I've experienced favor in unexpected places and obstacles have been removed. This is authentic prophetic ministry!"
  },
  {
    name: "James P.",
    location: "Ireland",
    rating: 5,
    service: "Biblical Word for Your Life",
    date: "October 2024",
    testimony: "I ordered this service for clarity on a major ministry decision. The word I received was biblically sound and incredibly insightful. It gave me peace about moving forward and even predicted challenges I would face (which came true!). Amazingly accurate."
  },
  {
    name: "Rachel W.",
    location: "New Zealand",
    rating: 5,
    service: "Prophetic Word for Your Life",
    date: "September 2024",
    testimony: "The comprehensive prophetic word exceeded all my expectations. It addressed multiple areas of my life with such precision and revelation. I've shared it with my pastor who confirmed its accuracy. This is a ministry you can trust with your spiritual journey."
  }
];

const Testimonials = () => {
  const currentUrl = window.location.href;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Divine Spiritual Guidance Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "490",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": "5"
      },
      "reviewBody": t.testimony,
      "datePublished": new Date(t.date).toISOString()
    }))
  };

  return (
    <>
      <SEO
        title="490+ Five-Star Testimonials | Real Prophetic Word Reviews & Success Stories"
        description="Read authentic testimonials from 490+ satisfied clients worldwide who received life-changing prophetic words, divine guidance, and spiritual breakthroughs. All 5-star reviews!"
        keywords="prophetic word testimonials, spiritual guidance reviews, prophecy success stories, prophetic ministry reviews, real prophetic word experiences, client testimonials"
        canonicalUrl={currentUrl}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 md:h-8 md:w-8 fill-primary text-primary" />
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
                490+ Five-Star Testimonials
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                Real stories from real clients who experienced life-changing prophetic words and divine breakthroughs
              </p>
              <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-card px-4 md:px-6 py-2 md:py-3 rounded-lg border">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">5.0</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="h-8 md:h-12 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">490+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="h-8 md:h-12 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">30+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.testimony}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-sm text-primary font-medium mt-1">{testimonial.service}</p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Community of Satisfied Clients</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same breakthrough, clarity, and divine direction that these clients received. Your prophetic word is waiting!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/">
                <Button size="lg" className="text-lg px-8">
                  Order Your Prophetic Word
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Contact Us First
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;