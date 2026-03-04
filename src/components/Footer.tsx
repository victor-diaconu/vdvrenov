import { Facebook, Instagram, ArrowUp } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contacto", label: "Contacto" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="inline-block mb-4"
            >
              <span className="text-2xl font-serif font-bold">
                VDV<span className="text-accent">Renov</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Transformamos espaços com 
              qualidade, confiança e profissionalismo.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/people/VDVRenov/61581317054101/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/vdvrenov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contactos</h3>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href="tel:+351969706614" className="hover:text-accent transition-colors">
                  +351 969 706 614
                </a>
              </li>
              <li>
                <a href="mailto:vdvrenov@gmail.com" className="hover:text-accent transition-colors">
                  vdvrenov@gmail.com
                </a>
              </li>
              <li>Caldas da Rainha, Portugal</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} VDVRenov. Todos os direitos reservados.
          </p>
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
