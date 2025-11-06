import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Join thousands of supporters worldwide. Your €0.50 or €0.75 donation will help build a sustainable 
            farm, create jobs, and transform lives in Kasserine, Tunisia. Together, we can achieve the extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-card text-primary hover:bg-card/90 text-lg px-10 py-7 shadow-elevated border-2 border-primary-foreground/20"
            >
              <Heart className="mr-2 h-6 w-6 fill-current" />
              Donate €0.50
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-7 shadow-elevated"
            >
              <Heart className="mr-2 h-6 w-6 fill-current" />
              Donate €0.75
            </Button>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Spread the Word
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Can't donate right now? You can still help by sharing this campaign with your friends, 
              family, and social networks. Every share brings us closer to our goal!
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Campaign
            </Button>
          </div>

          <div className="mt-12 text-primary-foreground/80 text-sm">
            <p>✓ Secure payment processing • ✓ Tax-deductible • ✓ 100% transparency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
