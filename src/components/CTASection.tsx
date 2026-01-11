import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const openWhatsapp = () => {
    window.open(
      "https://wa.me/5551980881688?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20Stride",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />

      {/* Glowing Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Diagonal Lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              hsl(var(--stride-orange) / 0.1) 50px,
              hsl(var(--stride-orange) / 0.1) 51px
            )`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Pronto para crescer?
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Crescimento não é sorte.
            <br />
            <span className="stride-gradient-text">É estratégia.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Vamos juntos transformar o potencial do seu negócio em resultados reais.
            O próximo passo está a um clique de distância.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              className="group w-full sm:w-auto"
              onClick={openWhatsapp}
            >
              Quero dar o próximo passo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 pt-12 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">
              Junte-se a STRIDE para escalar vez mais seu negócio com marketing de performance.
            </p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-8 bg-muted/30 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
