import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Heart, BookOpen, Users, Award, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";

const About = () => {
  const currentUrl = window.location.href;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Divine Spiritual Guidance Services",
    "description": "Learn about John S, an experienced spiritual advisor and prophet with the gift of prophecy, helping people find divine direction since 2015.",
    "mainEntity": {
      "@type": "Person",
      "name": "John S",
      "jobTitle": "Spiritual Advisor & Prophet",
      "description": "Experienced spiritual advisor with the gift of prophecy and biblical wisdom, helping people find divine direction and spiritual clarity since 2015.",
      "knowsAbout": ["Spiritual Guidance", "Prophetic Ministry", "Biblical Counseling", "Prayer Services", "Divine Direction"]
    }
  };

  return (
    <>
      <SEO
        title="About Us | Experienced Prophetic Ministry & Spiritual Guidance Since 2015"
        description="Meet John S, a trusted spiritual advisor and prophet with 10+ years of experience in prophetic ministry. Serving 490+ clients worldwide with accurate prophetic words and divine guidance."
        keywords="about prophetic ministry, spiritual advisor biography, experienced prophet, prophetic ministry background, trusted spiritual counselor"
        canonicalUrl={currentUrl}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
                About Our Prophetic Ministry
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                Helping believers worldwide discover their divine purpose and walk in spiritual clarity since 2015
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
              {/* Our Story */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story & Mission</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Divine Spiritual Guidance Services was founded in 2015 with a simple but powerful mission: to help believers hear from God clearly and walk confidently in their divine purpose. What started as a personal calling has grown into a worldwide ministry serving hundreds of clients across continents.
                  </p>
                  <p>
                    Led by John S, an experienced spiritual advisor with the authentic gift of prophecy, our ministry has helped over 490 people receive life-changing prophetic words, breakthrough blessings, and biblical guidance that transformed their spiritual journeys.
                  </p>
                  <p>
                    We believe that every person has a unique calling and destiny designed by God. Our mission is to help you discover that calling, understand your spiritual gifts, and receive the divine direction you need to fulfill your purpose with confidence and clarity.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <BookOpen className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Biblical Integrity</h3>
                      <p className="text-muted-foreground">
                        Every prophetic word is rooted in Scripture and aligned with biblical truth. We never compromise on doctrinal accuracy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <Shield className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Authenticity</h3>
                      <p className="text-muted-foreground">
                        We deliver genuine prophetic words received through prayer and the Holy Spirit, never generic or automated messages.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <Heart className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Compassionate Service</h3>
                      <p className="text-muted-foreground">
                        We treat every client with love, respect, and pastoral care, understanding the sacred trust placed in us.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <Award className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Excellence</h3>
                      <p className="text-muted-foreground">
                        We are committed to delivering detailed, accurate, and transformative prophetic words with professional excellence.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* About John S */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Meet John S - Your Spiritual Advisor</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    John S is an experienced spiritual advisor and prophet who has been walking in prophetic ministry since 2015. With a deep passion for biblical wisdom and genuine love for helping believers, John has dedicated his life to helping others hear from God and discover their divine purpose.
                  </p>
                  <p>
                    <strong>Prophetic Experience:</strong> Over 10 years of active prophetic ministry with hundreds of documented accurate prophecies that have come to pass in clients' lives.
                  </p>
                  <p>
                    <strong>Biblical Foundation:</strong> Extensive study of Scripture with focus on prophetic ministry, spiritual gifts, and biblical counseling principles.
                  </p>
                  <p>
                    <strong>Global Impact:</strong> Served clients in over 30 countries, speaking multiple languages including English, French, and Arabic to reach believers worldwide.
                  </p>
                  <p>
                    <strong>Proven Track Record:</strong> Maintained a 5.0-star rating across 490+ client reviews, with testimonies of breakthrough, healing, and transformation.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Clients Choose Us</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Proven Accuracy</h3>
                      <p className="text-muted-foreground">490+ five-star reviews from clients who experienced accurate, life-changing prophetic words</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Fast Delivery</h3>
                      <p className="text-muted-foreground">Receive your personalized prophetic word within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Personalized Guidance</h3>
                      <p className="text-muted-foreground">Every word is specifically tailored to your unique situation and spiritual journey</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Biblical Foundation</h3>
                      <p className="text-muted-foreground">All prophetic words include relevant Scripture references and biblical validation</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Ongoing Support</h3>
                      <p className="text-muted-foreground">Questions welcome - we provide clarification and support as you walk out your word</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-8 pb-8 text-center">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Join 490+ Satisfied Clients</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Experience the clarity, breakthrough, and divine direction that comes from receiving an authentic prophetic word. Your destiny awaits!
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <Link to="/">
                      <Button size="lg" className="text-lg px-8">
                        Explore Our Services
                      </Button>
                    </Link>
                    <Link to="/testimonials">
                      <Button size="lg" variant="outline" className="text-lg px-8">
                        Read Testimonials
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;