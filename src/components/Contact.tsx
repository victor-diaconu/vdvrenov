import { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to FormSubmit (https://formsubmit.co/)
      // FormSubmit forwards the data to vdvrenov@gmail.com
      const response = await fetch("https://formsubmit.co/vdvrenov@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto consigo brevemente.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Failed to send email", err);
      toast({
        title: "Erro ao enviar",
        description:
          "Ocorreu um erro ao tentar enviar a mensagem. Por favor tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Peça o seu orçamento grátis
          </h2>

        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                <a
                  href="tel:+351969706614"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +351 969 706 614
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:vdvrenov@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  vdvrenov@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                <p className="text-muted-foreground">
                  Caldas da Rainha, Portugal
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="px-14 pt-6 border-t border-border ">
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/people/VDVRenov/61581317054101/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/vdvrenov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border/50 rounded-2xl p-8 shadow-soft"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O seu nome"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@exemplo.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+351 900 000 000"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2 mb-8">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva o seu projeto ou questão..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {isSubmitting ? (
                  "A enviar..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
