import {
  BarChart3,
  Brain,
  Flag,
  Megaphone,
  Rocket,
  Workflow,
} from "lucide-react";

type Item = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  { label: "Criação de Sites", Icon: Rocket },
  { label: "Resultados", Icon: BarChart3 },
  { label: "Estratégia", Icon: Workflow },
  { label: "Inteligência Artificial", Icon: Brain },
  { label: "Anúncios Online", Icon: Megaphone },
  { label: "Posicionamento", Icon: Flag },
  { label: "Automações", Icon: Workflow },
];

export default function ServicesWaveBar() {
  return (
    <section className="relative w-full">
      <div className="wavebar wavebar-enter">
        <div className="wavebar-inner">
          {/* wave por cima dos itens */}
          <div className="wavebar-scan" aria-hidden="true" />

          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-3">
            {/* MOBILE: scroll horizontal */}
            <div className="wavebar-scroll sm:hidden">
              <div className="flex items-center gap-6 whitespace-nowrap pr-12">
                {items.map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-stride-orange/45 bg-stride-orange/10">
                      <Icon className="h-5 w-5 text-stride-orange" />
                    </div>
                    <span className="text-[14px] font-medium text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP/TABLET: sem scroll */}
            <div className="hidden sm:flex items-center justify-between gap-8">
              {items.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 whitespace-nowrap"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-stride-orange/45 bg-stride-orange/10">
                    <Icon className="h-5 w-5 text-stride-orange" />
                  </div>
                  <span className="text-sm md:text-[15px] font-medium text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fade nas laterais */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 md:w-44 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 md:w-44 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />
        </div>
      </div>
    </section>
  );
}
