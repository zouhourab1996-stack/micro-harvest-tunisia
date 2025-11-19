import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Clock, Globe, Send } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";

const Contact = () => {
  const currentUrl = window.location.href;
  const whatsappNumber = "+21693816607";
  const email = "zouhourab1996@gmail.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Divine Spiritual Guidance Services",
    "description": "Get in touch with our prophetic ministry for questions, prayer requests, or to order your personalized prophetic word.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": whatsappNumber,
      "contactType": "Customer Service",
      "email": email,
      "availableLanguage": ["English", "French", "Arabic"],
      "areaServed": "Worldwide"
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Get Your Prophetic Word - WhatsApp & Email Support Available"
        description="Contact Divine Spiritual Guidance Services for prophetic words, spiritual guidance, or questions. Available via WhatsApp, email, and phone. Serving clients worldwide in multiple languages."
        keywords="contact prophetic ministry, order prophetic word, spiritual guidance contact, prophetic services support, WhatsApp spiritual advisor"
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
                Get in Touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                Ready to receive your prophetic word or have questions? We're here to help you 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 md:mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">
                      Fastest way to reach us. Order your prophetic word instantly!
                    </p>
                    <a 
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-4">
                      Send us detailed questions or prayer requests
                    </p>
                    <a href={`mailto:${email}`}>
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">{email}</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-4">
                      Call us directly for urgent matters
                    </p>
                    <a href={`tel:${whatsappNumber}`}>
                      <Button variant="outline" className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">{whatsappNumber}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Service Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>WhatsApp Support:</strong> 24/7 Available</p>
                      <p><strong>Email Response:</strong> Within 12 hours</p>
                      <p><strong>Prophetic Word Delivery:</strong> 24-48 hours</p>
                      <p className="text-sm mt-4 italic">
                        We serve clients worldwide across all time zones
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Languages We Serve</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>English:</strong> Full service available</p>
                      <p><strong>French:</strong> Complete prophetic services</p>
                      <p><strong>Arabic:</strong> Full spiritual guidance</p>
                      <p className="text-sm mt-4 italic">
                        Serving 30+ countries with personalized care
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Order CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-8 pb-8 text-center">
                  <Send className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Order Your Prophetic Word?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Skip the wait and order directly via WhatsApp. Get your personalized prophetic word delivered within 24-48 hours!
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <a 
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi! I want to order a prophetic word`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="text-lg px-8">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Order via WhatsApp
                      </Button>
                    </a>
                    <Link to="/">
                      <Button size="lg" variant="outline" className="text-lg px-8">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Check out our blog for answers to common questions about prophetic words and spiritual guidance
                </p>
                <Link to="/blog">
                  <Button variant="outline">
                    Visit Our Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;