import { useEffect, useMemo, useRef } from "react";

type RibbonProps = {
  words: string[];
  className?: string;
  speed?: number; // velocidade base
  angle?: number; // inclinação em graus

  // NOVOS (pra controlar cada fita)
  textClassName?: string;
  borderClassName?: string;
  bgClassName?: string;
  glowClassName?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ScrollRibbon({
  words,
  className = "",
  speed = 0.55,
  angle = -2.2,

  textClassName = "text-white/85",
  borderClassName = "border-stride-orange/70",
  bgClassName = "bg-black/70",
  glowClassName = "via-stride-orange/10",
}: RibbonProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // largura do "bloco" base que vamos usar pra loop
  const blockWRef = useRef(0);

  const content = useMemo(() => {
    return words.join("  •  ");
  }, [words]);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    let raf = 0;

    // posição atual (px)
    let x = 0;

    // velocidade atual (px/frame)
    let v = 0;

    // para detectar direção do scroll
    let lastScrollY = window.scrollY;

    const measure = () => {
      // bloco 1: mede a largura real do conteúdo
      const first = track.querySelector<HTMLElement>("[data-block='1']");
      const w = first?.scrollWidth ?? first?.offsetWidth ?? 0;
      blockWRef.current = w;

      // se o x ficou fora, traz pro range (evita salto)
      if (w > 0) x = x % w;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScrollY; // + desceu, - subiu
      lastScrollY = y;

      // impulso horizontal (suave)
      const impulse = clamp(dy * 0.08, -6, 6);
      v += impulse;
    };

    const tick = () => {
      // fricção (inércia)
      v *= 0.92;

      // movimento: base + impulso
      x -= speed + v;

      const w = blockWRef.current;

      // LOOP perfeito: mantém x sempre no range [-w, 0]
      // assim o conteúdo duplicado nunca “acaba”
      if (w > 0) {
        // mantém negativo (pra sempre andar pra esquerda)
        if (x <= -w) x += w;
        if (x > 0) x -= w;
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    // init
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed, content]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ transform: `skewY(${angle}deg)` }}
    >
      {/* faixa */}
      <div className={`h-24 justify-center text-xl content-center relative ${bgClassName} backdrop-blur-xl border-y ${borderClassName}`}>
        {/* brilho sutil (laranja) */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent ${glowClassName} to-transparent`}
        />

        {/* fade nas laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-background via-background/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-background via-background/70 to-transparent z-10" />

        {/* track */}
        <div className="py-3 md:py-4">
          <div
            ref={trackRef}
            className="flex items-center whitespace-nowrap will-change-transform"
          >
            {/* bloco 1 */}
            <div
              data-block="1"
              className="flex items-center whitespace-nowrap px-6"
            >
              <span className={`${textClassName} font-bold tracking-wide`}>
                {content}
              </span>
            </div>

            {/* bloco 2 (duplicado) */}
            <div className="flex items-center whitespace-nowrap px-6">
              <span className={`${textClassName} font-bold tracking-wide`}>
                {content}
              </span>
            </div>

            {/* bloco 3 (extra) — evita qualquer “buraco” em telas ultra-wide */}
            <div className="flex items-center whitespace-nowrap px-6">
              <span className={`${textClassName} font-bold tracking-wide`}>
                {content}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
