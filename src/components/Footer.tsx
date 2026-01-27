import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-20 ">
              <img src="/logo_stride.png" alt="" />
              </div>
              <span className="font-display font-bold text-2xl text-foreground tracking-tight">
                STRIDE
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Passos firmes para o crescimento do seu negócio. 
              Estratégia, performance e execução.
            </p>
            <div className="flex items-center gap-4">
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/stridedigital.br/" 
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {["Social Media", "Landing Pages", "Tráfego Pago", "Consultoria"].map((item) => (
                <li key={item}>
                  <a 
                    href="#servicos" 
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item}
                   
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:stridedigital01@gmail.com" className="hover:text-primary transition-colors">
                  stridedigital01@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5551980881688" className="hover:text-primary transition-colors">
                  +55 51 9 8088-1688
                </a>
              </li>
              <li>São Leopoldo, RS</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 STRIDE. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              to="/politica-de-privacidade"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>

            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
