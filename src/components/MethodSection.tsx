import { Search, Lightbulb, Play, RefreshCw, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análise",
    description: "Mergulhamos no seu negócio para entender mercado, concorrência e oportunidades."
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Estratégia",
    description: "Criamos um plano de ação personalizado com metas claras e mensuráveis."
  },
  {
    icon: Play,
    number: "03",
    title: "Execução",
    description: "Implementamos as campanhas e ações com agilidade, precisão e foco em resultados."
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Otimização",
    description: "Analisamos os dados e refinamos continuamente para maximizar resultados."
  },
  {
    icon: Rocket,
    number: "05",
    title: "Escala",
    description: "Multiplicamos o que funciona para acelerar o crescimento exponencial."
  }
];

const MethodSection = () => {
  return (
    <section id="metodo" className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-2 h-32 bg-gradient-to-b from-primary to-transparent rounded-full opacity-50" />
      <div className="absolute bottom-20 left-10 w-2 h-32 bg-gradient-to-t from-primary to-transparent rounded-full opacity-50" />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            NOSSO MÉTODO
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Do diagnóstico à <span className="stride-gradient-text">escala</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo validado que já acelerou o crescimento de dezenas de empresas
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow indicator for connection */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/50">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
