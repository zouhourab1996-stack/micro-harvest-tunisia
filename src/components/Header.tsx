import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={mobile ? "flex flex-col gap-4 mt-8" : "hidden md:flex gap-4"}>
      <Link to="/" onClick={() => mobile && setOpen(false)}>
        <Button variant="ghost" className={mobile ? "w-full justify-start text-lg" : ""}>
          Home
        </Button>
      </Link>
      <Link to="/blog" onClick={() => mobile && setOpen(false)}>
        <Button variant="ghost" className={mobile ? "w-full justify-start text-lg" : ""}>
          Blog
        </Button>
      </Link>
      <Link to="/about" onClick={() => mobile && setOpen(false)}>
        <Button variant="ghost" className={mobile ? "w-full justify-start text-lg" : ""}>
          About
        </Button>
      </Link>
      <Link to="/testimonials" onClick={() => mobile && setOpen(false)}>
        <Button variant="ghost" className={mobile ? "w-full justify-start text-lg" : ""}>
          Testimonials
        </Button>
      </Link>
      <Link to="/contact" onClick={() => mobile && setOpen(false)}>
        <Button variant="outline" className={mobile ? "w-full justify-start text-lg" : ""}>
          Contact
        </Button>
      </Link>
    </div>
  );

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            Divine Guidance
          </Link>
          
          {/* Desktop Navigation */}
          <NavLinks />
          
          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <Link to="/" className="text-2xl font-bold text-primary mb-4" onClick={() => setOpen(false)}>
                  Divine Guidance
                </Link>
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
