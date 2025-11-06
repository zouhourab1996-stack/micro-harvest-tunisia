import { Sprout, Droplets, Shield, Home } from "lucide-react";

const AboutProject = () => {
  const features = [
    {
      icon: Droplets,
      title: "Artesian Well",
      description: "Drill a sustainable water source for irrigation and livestock"
    },
    {
      icon: Shield,
      title: "Protective Fence",
      description: "Secure the 10-hectare farmland for safe operations"
    },
    {
      icon: Home,
      title: "Poultry House",
      description: "Build modern facilities for chicken farming"
    },
    {
      icon: Sprout,
      title: "Fruit Trees & Livestock",
      description: "Plant olive, almond, pomegranate, fig trees and raise cows and sheep"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building a Sustainable Future in Kasserine
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This agricultural project aims to transform 10 hectares of land in Kasserine, Tunisia into a thriving, 
            sustainable farm. With your support, we'll create jobs, provide fresh food, and demonstrate the power 
            of community-driven development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300 border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-accent/10 rounded-xl p-8 border border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Long-Term Impact
          </h3>
          <p className="text-muted-foreground leading-relaxed text-center">
            This project will provide sustainable income for local families, create employment opportunities, 
            contribute to food security in the region, and serve as a model for agricultural development in Tunisia. 
            Your micro-donation is an investment in the future of an entire community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
