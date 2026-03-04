import { Home, Paintbrush, Wrench, Hammer, ArrowRight, Layers, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "Azulejos e Ladrilhos",
    description:
      "Instalação profissional de azulejos e ladrilhos para cozinhas, casas de banho. Interiores e exteriores.",
    features: ["Cerâmicos", "Porcelânicos", "Manutenção","Interiores", "Exteriores"],
  },
  {
    icon: Home,
    title: "Pavimentos",
    description:
      "Instalação e reparação de pavimentos interiores e exteriores.",
    features: ["Parquet", "Laminados", "Cerâmicos","Interiores", "Exteriores"],
  },
  {
    icon: Paintbrush,
    title: "Pintura e Acabamentos",
    description:
      "Serviços de pintura interior e exterior e acabamentos de alta qualidade.",
    features: ["Pintura interior", "Pintura exterior"],
  },
  {
    icon: Layers,
    title: "Pladur e Tetos Falsos",
    description:
      "Instalação de sistemas de pladur e tetos falsos para melhor acabamento acústico e térmico.",
    features: ["Pladur", "Gesso", "Isolamento"],
  },
  {
    icon: Zap,
    title: "Eletricidade e Canalização",
    description:
      "Trabalhos de eletricidade, canalização e reparações.",
    features: ["Instalações elétricas", "Canalização", "Reparações"],
  },
  {
    icon: Hammer,
    title: "Soluções de Remodelação e Obras à Medida",
    description:
      "Projetos personalizados de remodelação completa, integrando todos os serviços para transformação total do espaço.",
    features: ["Cozinhas", "Casas de banho", "Quartos", "Exterior", "Fachadas", "Obras gerais"],
  },
];

const Services = () => {
  const handleContactClick = () => {
    const element = document.querySelector("#contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Soluções completas para a sua{" "}
            <span className="text-primary">renovação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços de renovação e obras à medida, adaptados às suas necessidades e orçamento.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card border-border/50 hover:border-accent/30 shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  onClick={handleContactClick}
                  className="text-primary hover:text-accent p-0 h-auto font-medium group/btn"
                >
                  Saber mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
