import { Users, Heart, TrendingUp, Globe } from "lucide-react";

const WhyDonate = () => {
  const reasons = [
    {
      icon: Users,
      title: "Collective Power",
      description: "200,000 people donating €0.50 = €100,000+ raised for meaningful change"
    },
    {
      icon: Heart,
      title: "Accessible to Everyone",
      description: "Everyone can afford €0.50. No donation is too small when we work together"
    },
    {
      icon: TrendingUp,
      title: "Maximum Impact",
      description: "Small contributions add up to create lasting economic opportunities"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join supporters from around the world making a difference in rural Tunisia"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Small Donations Matter
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The power of micro-donations lies in their simplicity and accessibility. 
            When thousands of people contribute just €0.50 or €0.75, we can achieve extraordinary things together.
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
                The Math is Simple
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">€0.50</div>
                <div className="text-sm text-muted-foreground">Your donation</div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <div className="text-4xl font-bold text-accent mb-2">×200,000</div>
                <div className="text-sm text-muted-foreground">Supporters</div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <div className="text-4xl font-bold text-secondary mb-2">€100,000</div>
                <div className="text-sm text-muted-foreground">Total raised</div>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8 text-lg">
              Your €0.50 might seem small, but together with thousands of others, it builds a sustainable farm, 
              creates jobs, and transforms lives in Kasserine, Tunisia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;
