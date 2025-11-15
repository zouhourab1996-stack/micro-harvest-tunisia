import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely amazing experience! The prophetic word I received was incredibly accurate and gave me the guidance I needed. Highly recommend!",
    service: "Divine Word for 2025"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "John has a true gift. The blessing prayer brought peace to my life and clarity about my future. Worth every penny!",
    service: "Prophetic Blessings"
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "The spiritual guidance was exactly what I needed. Very professional and delivered quickly. Will definitely order again!",
    service: "Biblical Word"
  },
  {
    name: "David K.",
    rating: 5,
    text: "Powerful and transformative! The prophetic word helped me make important life decisions. Thank you so much!",
    service: "Word for Your Life"
  },
  {
    name: "Lisa P.",
    rating: 5,
    text: "I was skeptical at first, but the accuracy and depth of the spiritual reading blew me away. Truly blessed to have found this service!",
    service: "Divine Word for 2025"
  },
  {
    name: "Robert T.",
    rating: 5,
    text: "Outstanding service! The biblical guidance provided was insightful and encouraging. My faith has been strengthened tremendously.",
    service: "Biblical Word"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have received spiritual guidance and prophetic words
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.service}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
