import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactGA from "react-ga4";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contacto", label: "Contacto" }];


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
  setIsOpen(false);
  
  // Track the click
  ReactGA.event({
    category: "Navigation",
    action: "Clicked Nav Link",
    label: href,
  });

  console.log("Nav clicked →", href);

  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ?
          "bg-card/95 backdrop-blur-md shadow-soft border-b border-border" :
          "bg-transparent"}`
      }>

      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
           <div className="flex items-center gap-2">
            <img
              src="/logo/vdvrenov.png"
              alt="VDV Renov Logo"
               className="h-16 object-contain"
            />
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="flex items-center gap-2">

              <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
                VDV<span className="text-gray-950">Renov</span>
              </span>
            </a>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300">

                {link.label}
              </a>
            )}
            <Button
              onClick={() => handleNavClick("#contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 shadow-soft hover:shadow-medium transition-all duration-300">

              Orçamento
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) =>
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors">

                    {link.label}
                  </a>
                )}
                <Button
                  onClick={() => handleNavClick("#contacto")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">

                  Peça um Orçamento
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>);

};

export default Header;