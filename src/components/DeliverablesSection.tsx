import {
  Search,
  Sparkles,
  Users,
  Megaphone,
  PenLine,
  Presentation,
} from "lucide-react";

const deliverables = [
  {
    icon: Search,
    title: "Diagnóstico Estratégico",
    description:
      "Mapeamos seu negócio, mercado, público e números para identificar gargalos e oportunidades — decisões guiadas por dados, não por achismo.",
  },
  {
    icon: Sparkles,
    title: "Posicionamento e Branding",
    description:
      "Construímos uma marca forte e desejada. Ajustamos identidade, mensagem e presença para você ser a escolha natural do seu público.",
  },
  {
    icon: Users,
    title: "Aquisição de Clientes e Funil de Vendas",
    description:
      "Estruturamos a jornada completa do cliente (atração → conversão), com estratégia e ofertas pensadas para gerar vendas previsíveis.",
  },
  {
    icon: Megaphone,
    title: "Gestão de Tráfego Pago",
    description:
      "Planejamento, execução e otimização de campanhas (Meta/Google) com foco em escala, CAC controlado e ROI mensurável.",
  },
  {
    icon: PenLine,
    title: "Conteúdo e Presença Digital",
    description:
      "Conteúdo estratégico para construir autoridade, aumentar confiança e manter sua marca presente no dia a dia do seu público.",
  },
  {
    icon: Presentation,
    title: "Acompanhamento e Otimização Contínua",
    description:
      "Rotina de análise + plano de ação. Ajustes e otimizações constantes para manter performance e crescimento mês após mês.",
  },
];

export default function DeliverablesSection() {
  return (
    <section
      id="entregaveis"
      className="relative py-24 overflow-hidden bg-[#F6F7FB]"
    >
      {/* fundo sutil (claro) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F7FB] to-white" />
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-stride-orange/10 blur-[120px]" />
        <div className="absolute -bottom-48 -left-48 w-[640px] h-[640px] rounded-full bg-stride-orange/10 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Logo + glow */}
          <div className="relative flex justify-center mb-7 animate-fade-in-up">
            {/* glow atrás da logo */}
            <div className="absolute -inset-6 mx-auto w-44 h-20 md:w-56 md:h-24 rounded-full bg-stride-orange/20 blur-[32px]" />
            <img
              src="/logo_stride.png"
              alt="Stride Digital"
              className="relative h-16 md:h-20 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
            />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl animate-fade-in-up animation-delay-100 text-black">
            Estes são os principais entregáveis que geram resultados todos os
            meses na <span className="text-primary">Stride</span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4 animate-fade-in-up animation-delay-200">
            Um plano claro, execução consistente e otimização contínua — sem
            achismo.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-5">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-black/95 border border-black/80 shadow-[0_10px_35px_rgba(0,0,0,0.25)] px-6 py-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-stride-orange/70 animate-fade-in-up"
                style={{ animationDelay: `${220 + idx * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-stride-orange/15 border border-stride-orange/35">
                    <Icon className="h-5 w-5 text-stride-orange" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-white text-lg">
                      <span className="text-stride-orange">{item.title}</span>
                    </h3>
                    <p className="mt-1 text-white/75 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* espaço pro “elemento decorativo” */}
        <div className="hidden lg:block absolute left-0 bottom-0 w-[420px] h-[420px] pointer-events-none opacity-70">
          {/* depois a gente coloca um SVG/PNG com blur aqui */}
        </div>
      </div>
    </section>
  );
}
