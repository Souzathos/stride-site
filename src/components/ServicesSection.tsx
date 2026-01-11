import { Share2, Layout, Target, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media",
    description: "Gestão estratégica de redes sociais com conteúdo que engaja, posiciona e converte. Construímos sua presença digital com consistência e resultados reais.",
    features: ["Planejamento de conteúdo", "Design profissional", "Análise de métricas", "Gestão de comunidade"]
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Criamos páginas estratégicas que transformam visitantes em clientes. Design moderno, performance máxima e experiência focada em resultados.",
    features: ["Design responsivo", "Otimização para conversão", "Otimização contínua de conversão (CRO)", "Carregamento rápido"]
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Transformamos investimento em anúncios em crescimento real para o seu negócio.",
    features: ["Gestão profissional de Meta Ads e Google Ads", "Estratégias de remarketing para recuperar oportunidades", "Otimização contínua de campanhas", "Análise de ROI e performance em tempo real"]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-24 bg-secondary/30">
      {/* Diagonal Top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background stride-diagonal" />
      
      <div className="container mx-auto px-6 pt-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            O QUE FAZEMOS
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Soluções que <span className="stride-gradient-text">impulsionam</span> seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços integrados de marketing digital para acelerar o crescimento da sua empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
