import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyStrideSection from "@/components/WhyStrideSection";
import MethodSection from "@/components/MethodSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ServicesWaveBar from "@/components/ServicesWaveBar";
import DeliverablesSection from "@/components/DeliverablesSection";
import CrossRibbons from "@/components/CrossRibbons";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="servicos-wavebar">
        <ServicesWaveBar /> 
        </section>

        <section id="servicos">
          <ServicesSection />
        </section>

        <section id="diferenciais">
          <WhyStrideSection />
        </section>

        <section id="entregaveis">  
        <DeliverablesSection />        
        </section>

        <section id="cross-ribbons">
        <CrossRibbons />
        </section>  

        <section id="metodo">
          <MethodSection />
        </section>

        <section id="cta">
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
