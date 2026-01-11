import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";

const HeroSection = () => {
  const openWhatsapp = () => {
    window.open(
      "https://wa.me/5551980881688?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Stride%20e%20quero%20falar%20com%20um%20especialista.",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Blurred Logo Background (orange style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left big logo */}
        <div
          className="absolute left-[-180px] top-[110px] h-[520px] w-[520px] opacity-[0.25] blur-[55px] "
          
          style={{
            backgroundImage: "url('/logo_stride.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            filter:
              "brightness(0) saturate(100%) invert(45%) sepia(95%) saturate(5000%) hue-rotate(5deg) blur(5px)",
          }}
        />

        {/* Right small logo */}
        <div
          className="absolute right-[-120px] bottom-[120px] h-[360px] w-[360px] opacity-[0.20] blur-[50px]"
          style={{
            backgroundImage: "url('/logo_stride.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            filter:
              "brightness(0) saturate(100%) invert(45%) sepia(95%) saturate(5000%) hue-rotate(5deg) blur(5px)",
          }}
        />
      </div>



      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--stride-orange) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--stride-orange) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Diagonal Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stride-orange/5 to-transparent transform skew-x-12" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-stride-orange/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-stride-orange/10 rounded-full blur-[100px]" />
      
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        {/* Logo central estilo Compass */}
      <div className="flex justify-center mb-14 animate-fade-in-up">
        <div className="relative flex items-center gap-5 justify-center">

          {/* Glow atrás */}
          <div className="absolute inset-0 bg-stride-orange/35 blur-[120px] rounded-full scale-150" />

          {/* Ícone */}
          <img
            src="/logo_stride.png"
            alt="Stride Digital"
            className="relative h-20 md:h-24 object-contain"
          />

          {/* Texto */}
          <div className="relative flex flex-col leading-none text-left">
            <span className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground">
              STRIDE
            </span>
            <span className="mt-1 text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase">
              Marketing Digital
            </span>
          </div>

        </div>
      </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Agência de Performance Digital
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl leading-tight mb-6 animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Entendemos o que o seu marketing realmente precisa</span>
            <br />
            <span className="text-foreground">e transformamos isso em uma estratégia </span>
            
            <span className="stride-gradient-text">clara, eficiente e escalável </span>

            <span className="text-foreground">para o crescimento do seu negócio</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
             Dê o próximo passo para evoluir sua {" "}
            <span className="text-foreground font-semibold">
              presença digital.
            </span>
          </p>

          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              className="group w-full sm:w-auto"
              onClick={openWhatsapp}
            >
              Quero crescer agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
