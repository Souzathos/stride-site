import ScrollRibbon from "@/components/ScrollRibbon";

const ribbonWords = [
  "Gestão de Tráfego",
  "Criação de Sites",
  "Branding",
  "Performance",
  "Execução",
  "Conteúdo Estratégico",
  "Aquisição de Clientes",
  "Crescimento",
];

export default function CrossRibbons() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-secondary/50 to-background pointer-events-none">
      {/* “Bridge” entre seções */}
      <div className="relative h-[220px] sm:h-[240px] md:h-[260px]">
        {/* FITA DE TRÁS (mais escura, quase invisível) */}
        <div
          className="
            absolute inset-x-0 top-1/2
            z-0
            drop-shadow-[0_14px_35px_rgba(0,0,0,0.55)]
          "
          style={{
            transform: "translateY(-10%) translateZ(0)", // mais pra cima
            filter: "blur(2px)", // deixa “sumida” igual referência
          }}
        >
          <ScrollRibbon
            words={ribbonWords}
            angle={3.5}
            speed={0.45}
            className="scale-[1.10] md:scale-[1.18]"
            textClassName="text-white/45"
            borderClassName="border-stride-orange"
            bgClassName="bg-black/80"
            glowClassName="via-stride-orange/5"
          />
        </div>

        {/* FITA DA FRENTE (principal) */}
        <div
          className="
            absolute inset-x-0 top-1/2
            z-10
            drop-shadow-[0_22px_60px_rgba(0,0,0,0.80)]
          "
          style={{
            transform: "translateY(-40%) translateZ(0)", // mais pra baixo (cruza no meio)
            
          }}
        >
          <ScrollRibbon
            words={ribbonWords}
            angle={-3.6}
            speed={0.55}
            className="scale-[1.16] md:scale-[1.24]"
            textClassName="text-white/85"
            borderClassName="border-stride-orange"
            bgClassName="bg-black/65"
            glowClassName="via-stride-orange/12"
          />
        </div>
      </div>
    </section>
  );
}
