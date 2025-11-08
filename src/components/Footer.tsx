import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Honor Bruce Higgins</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Supporting Lori, Maddie, and Ryan as they navigate life without their beloved husband and father.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    Bruce's Story
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('funds')} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    How Donations Help
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Our Purpose</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                To honor Bruce's legacy by showing his family that our community stands with them during this difficult time.
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 fill-current" /> in memory of Bruce Higgins
            </p>
            <p className="text-primary-foreground/60 text-xs mt-2">
              © {new Date().getFullYear()} Bruce Higgins Memorial Fund. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
