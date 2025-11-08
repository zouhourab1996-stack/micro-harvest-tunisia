import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Facebook } from "lucide-react";

const CallToAction = () => {
  const shareUrl = window.location.href;
  const shareText = "Please help support the Higgins family. Bruce was a decorated Boston Police Detective who touched countless lives.";
  
  const handleFacebookShare = () => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent("Honor Bruce Higgins: Support His Beloved Family - Help Lori, Maddie, and Ryan during this difficult time");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
  };
  
  const handleWhatsApp = () => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(`${shareText} Every donation helps.`);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  };

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
            Honor Bruce's Legacy Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Your donation shows Lori, Maddie, and Ryan that they are not alone. Help us carry on Bruce's legacy and take care of the family he loved so deeply.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <form action="https://www.paypal.com/donate" method="post" target="_blank" className="flex flex-wrap gap-4 justify-center">
              <input type="hidden" name="business" value="anistouati74@gmail.com" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="item_name" value="Support for Bruce Higgins Family" />
              
              <Button 
                type="submit"
                name="amount"
                value="5"
                size="lg" 
                className="bg-card text-primary hover:bg-card/90 text-lg px-10 py-7 shadow-elevated border-2 border-primary-foreground/20"
              >
                Donate $5
              </Button>
              <Button 
                type="submit"
                name="amount"
                value="10"
                size="lg" 
                className="bg-card text-primary hover:bg-card/90 text-lg px-10 py-7 shadow-elevated border-2 border-primary-foreground/20"
              >
                Donate $10
              </Button>
              <Button 
                type="submit"
                size="lg" 
                className="bg-card text-primary hover:bg-card/90 text-lg px-10 py-7 shadow-elevated border-2 border-primary-foreground/20"
              >
                Custom Amount
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Spread the Word
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Help spread awareness about Bruce's story and support for his family. Share this campaign with your network.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={handleFacebookShare}
                size="lg"
                className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white border-0"
              >
                <Facebook className="mr-2 h-5 w-5" />
                Share on Facebook
              </Button>
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Share on WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-12 text-primary-foreground/80 text-sm">
            <p>✓ Secure payment processing • ✓ 100% goes to the family • ✓ Direct support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
