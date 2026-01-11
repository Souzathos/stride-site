import { TrendingUp, Target, Zap, MessageSquare, Brain } from "lucide-react";

const differentials = [
  {
    icon: TrendingUp,
    title: "Crescimento com estratégia",
    description:
      "Não acreditamos em crescimento aleatório. Cada ação é planejada para gerar resultados consistentes.",
  },
  {
    icon: Target,
    title: "Foco em resultado",
    description:
      "Métricas que importam: vendas, leads qualificados e ROI. Tudo mensurável e transparente.",
  },
  {
    icon: Zap,
    title: "Execução rápida",
    description:
      "Agilidade sem perder qualidade. Implementamos, testamos e otimizamos em ciclos curtos.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação direta",
    description:
      "Sem enrolação. Você sabe exatamente o que está acontecendo com seu investimento.",
  },
  {
    icon: Brain,
    title: "Mentalidade de performance",
    description:
      "Cada real investido precisa retornar multiplicado. Essa é nossa obsessão.",
  },
];

const WhyStrideSection = () => {
  return (
    <section
      id="diferenciais"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* BACKGROUND “clareador” (fica por trás do conteúdo, mas dentro da section) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* leve “neblina” pra quebrar o preto chapado */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

        {/* orbs: usando bg-primary + mix-blend-screen pra realmente iluminar */}
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[130px] mix-blend-screen opacity-70" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-primary/14 blur-[150px] mix-blend-screen opacity-70" />
        <div className="absolute -bottom-56 left-1/3 h-[620px] w-[620px] rounded-full bg-primary/10 blur-[170px] mix-blend-screen opacity-70" />

        {/* pattern bem sutil */}
        <div className="absolute inset-0 opacity-[0.035]">
          <div className="absolute top-1/4 left-0 w-96 h-96 border border-primary rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 border border-primary rounded-full" />
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              POR QUE A STRIDE?
            </span>

            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
              Performance é <br />
              <span className="stride-gradient-text">nossa essência</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Aqui, marketing não é sobre likes ou seguidores. É sobre faturamento, escala e resultado.
            </p>

            {/* Feature Highlight */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    Parceria, não fornecedor
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Trabalhamos como uma extensão do seu time, alinhados aos seus
                    objetivos de negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Differentials */}
          <div className="space-y-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStrideSection;
