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
              <h3 className="text-xl font-bold mb-4">Tunisia Farm Project</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Building a sustainable agricultural future in Kasserine, Tunisia through the power of micro-donations.
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
                    About the Project
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('funds')} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    Fund Allocation
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
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                To demonstrate that small donations from many people can create lasting positive change in rural communities.
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 fill-current" /> for a sustainable future
            </p>
            <p className="text-primary-foreground/60 text-xs mt-2">
              © {new Date().getFullYear()} Tunisia Farm Project. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
