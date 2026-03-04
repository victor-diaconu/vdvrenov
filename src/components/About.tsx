import { CheckCircle, Award, Users, MapPin } from "lucide-react";

const values = [
{
  icon: CheckCircle,
  title: "Qualidade",
  description: "Garantimos que os nossos trabalhos correspondem às mais altas expectativas dos nossos clientes."
},
{
  icon: Award,
  title: "Profissionalismo",
  description: "Uma equipa dedicada que trabalha com rigor, organização e foco em bons resultados."
},
{
  icon: Users,
  title: "Confiança",
  description: "Relações duradouras baseadas em transparência e compromisso com os clientes."
}];


const About = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Especialistas em transformar{" "}
              <span className="text-primary">espaços</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A VDVRenov é uma empresa de remodelações e obras gerais que atua nas Caldas da Rainha e arredores. 
              Dedicamo-nos a transformar e valorizar espaços, sempre de acordo com as necessidades e a visão de cada cliente. 
              Oferecemos soluções completas e personalizadas, garantindo qualidade, rigor e atenção a cada detalhe.
            </p>

            
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Caldas da Rainha, Portugal</span>
            </div>
          </div>

          {/* Values grid */}
          <div className="space-y-6">
            {values.map((value, index) =>
            <div
              key={value.title}
              className="flex gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default About;