import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "351969706614"; // Replace with actual number
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os vossos serviços."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-elegant hover:shadow-medium transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale connosco!
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
