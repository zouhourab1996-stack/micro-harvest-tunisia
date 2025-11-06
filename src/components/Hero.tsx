import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  const currentSupporters = 45000;
  const targetSupporters = 200000;
  const progressPercentage = (currentSupporters / targetSupporters) * 100;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Small Donations Can Change Lives
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Donate just €0.50 to help build a sustainable farm in Kasserine, Tunisia. 
            Together, we can create lasting change for local communities.
          </p>
          
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-elevated">
            <div className="flex justify-between items-center mb-3">
              <span className="text-foreground font-semibold">Campaign Progress</span>
              <span className="text-primary font-bold">{currentSupporters.toLocaleString()} of {targetSupporters.toLocaleString()} supporters</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 mb-2">
              <div 
                className="h-3 rounded-full transition-all duration-500"
                style={{ 
                  width: `${progressPercentage}%`,
                  background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))'
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {Math.round(progressPercentage)}% funded • {targetSupporters - currentSupporters} supporters needed
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-elevated">
              Donate €0.50 Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
