import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/bruce-higgins-family.jpg";

const Hero = () => {
  const currentRaised = 187740;
  const targetAmount = 200000;
  const progressPercentage = (currentRaised / targetAmount) * 100;

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
            Honor Bruce Higgins: Support His Beloved Family
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Help support Lori, Maddie, and Ryan as they navigate life without their incredible husband and father. 
            Bruce was a decorated Boston Police Detective who touched countless lives.
          </p>
          
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-elevated">
            <div className="flex justify-between items-center mb-3">
              <span className="text-foreground font-semibold">Campaign Progress</span>
              <span className="text-primary font-bold">${currentRaised.toLocaleString()} raised of ${targetAmount.toLocaleString()}</span>
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
              {Math.round(progressPercentage)}% funded • ${(targetAmount - currentRaised).toLocaleString()} remaining
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="business" value="anistouati74@gmail.com" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="item_name" value="Support for Bruce Higgins Family" />
              <Button type="submit" size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-elevated">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Read Bruce's Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
