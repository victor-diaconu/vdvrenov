import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projetos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToServices = () => {
    const element = document.querySelector("#servicos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Centered large logo */}
          <div className="mb-8">
            <img
              src="/logo/wide.png"
              alt="VDVRenov"
              className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[28rem] object-contain"
            />
          </div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-green text-green-500 mb-4 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">Caldas da Rainha</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-in [animation-delay:0.1s] opacity-0">
            Transformamos a sua visão em realidade
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:0.2s] opacity-0">
            Projetos de remodelação completos, feitos à medida, com qualidade, profissionalismo e soluções inteligentes para cada espaço
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:0.3s] opacity-0">
            <Button
              onClick={handleScrollToServices}
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-lg transition-all duration-300">

              Serviços
            </Button>
            <Button
              onClick={handleScrollToProjects}
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-lg transition-all duration-300">

              Portfólio
            </Button>
            <Button
              onClick={handleScrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-elegant hover:shadow-medium transition-all duration-300 hover:-translate-y-1">

              Pedir Orçamento Grátis
            </Button>

          </div>

          {/* Trust indicators */}
          {/*           <div className="flex flex-wrap items-center justify-center gap-8 mt-16 animate-fade-in [animation-delay:0.4s] opacity-0">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll para baixo">

        <ArrowDown className="w-6 h-6" />
      </button>
    </section>);

};

export default Hero;