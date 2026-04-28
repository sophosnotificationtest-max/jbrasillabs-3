import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    duration: "2 horas",
    body: "Briefing rápido e estratégico. Alinhamos seus objetivos e definimos a estrutura ideal para sua conversão.",
  },
  {
    n: "02",
    title: "Design + Copy",
    duration: "12–24 horas",
    body: "Criação visual futurista e textos persuasivos focados em vendas, garantindo uma interface impecável.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    duration: "24 horas",
    body: "Codificação nativa em React com performance extrema e SEO integrado. Sua página pronta para o tráfego.",
  },
  {
    n: "04",
    title: "Deploy + evolução",
    duration: "contínuo",
    body: "CI/CD próprio, monitoramento de performance e ciclos de evolução baseados em métricas — não em achismo.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative border-t border-border py-28 md:py-36">
      <div className="container mx-auto">
        <Reveal className="max-w-3xl">
          <div className="eyebrow">// Processo</div>
          <h2 className="font-display mt-5 text-4xl md:text-5xl font-medium leading-[1.05] text-foreground text-balance">
            Quatro fases.{" "}
            <span className="text-muted-foreground">
              Previsível por desenho, não por sorte.
            </span>
          </h2>
        </Reveal>

        <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-12">
            <ol className="relative space-y-px">
              {/* vertical guide */}
              <div className="pointer-events-none absolute left-[68px] top-0 hidden h-full w-px bg-border md:block" />

              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <li className="group relative grid grid-cols-1 items-start gap-6 border-t border-border py-10 md:grid-cols-[140px_1fr_1fr] md:gap-12">
                    <div className="relative flex items-center gap-4">
                      <span className="grid h-9 w-9 place-items-center border border-border bg-background font-mono text-[12px] text-green transition-colors duration-500 group-hover:border-green/60">
                        {s.n}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:hidden">
                        {s.duration}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-medium text-foreground tracking-tight">
                        {s.title}
                      </h3>
                      <div className="mt-1 hidden font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:block">
                        {s.duration}
                      </div>
                    </div>

                    <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </li>
                </Reveal>
              ))}
              <div className="border-t border-border" />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
