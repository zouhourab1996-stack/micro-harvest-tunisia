import { Heart, HandHeart, Users, Shield } from "lucide-react";

const WhyDonate = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Honor His Memory",
      description: "Bruce touched countless lives through his service, coaching, and friendship"
    },
    {
      icon: Users,
      title: "Support His Family",
      description: "Help Lori, Maddie, and Ryan navigate life without their rock and foundation"
    },
    {
      icon: HandHeart,
      title: "Ease Financial Burden",
      description: "Your donation helps cover expenses during this incredibly difficult time"
    },
    {
      icon: Shield,
      title: "Community Strength",
      description: "Show the family they're not alone and that Bruce's legacy lives on"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Your Support Matters
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every donation honors Bruce's legacy and shows his family they are not alone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                A Legacy of Love
              </h3>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-muted-foreground mb-6 italic">
                "To know Bruce was to love him. He was truly a one of a kind person, and the type of friend you only get once in a lifetime."
              </p>
              <p className="text-lg text-muted-foreground">
                God Bless you Bruce, you are already so missed and will forever be missed, but never forgotten. We will try our best to carry on your legacy and we will take care of Lori, Maddie, and Ryan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;
