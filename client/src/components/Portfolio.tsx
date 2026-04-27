import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const WORKS = [
  {
    client: "Vivara Cred",
    sector: "Fintech B2C",
    title: "Plataforma de crédito com onboarding em 90 segundos",
    metric: "+38% conversão",
    year: "2024",
  },
  {
    client: "Norte Logística",
    sector: "Operações · SaaS",
    title: "Torre de controle com 12k entregas monitoradas por minuto",
    metric: "0.8s p95",
    year: "2024",
  },
  {
    client: "Aliá Saúde",
    sector: "Healthtech",
    title: "Telemedicina com prontuário próprio e fila inteligente",
    metric: "−42% no-show",
    year: "2023",
  },
];

export function Portfolio() {
  return (
    <section id="trabalhos" className="relative border-t border-border py-28 md:py-36">
      <div className="container mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">// Trabalhos selecionados</div>
            <h2 className="font-display mt-5 text-4xl md:text-5xl font-medium leading-[1.05] text-foreground text-balance">
              Produtos rodando em produção,{" "}
              <span className="text-muted-foreground">com tráfego real.</span>
            </h2>
          </div>
          <a
            href="#contato"
            className="btn-scan inline-flex h-11 items-center gap-2 border border-border px-5 font-mono text-[12px] uppercase tracking-wider text-foreground transition-colors hover:border-green/60"
          >
            Solicitar cases completos
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <ul className="mt-16 border-t border-border">
          {WORKS.map((w, i) => (
            <Reveal key={w.client} delay={i * 90}>
              <li>
                <a
                  href="#"
                  className="group grid grid-cols-12 items-center gap-4 border-b border-border py-8 transition-colors duration-500 ease-out-expo hover:bg-surface/40 md:py-10"
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-display text-xl font-medium text-foreground">
                      {w.client}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {w.sector}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <p className="text-[17px] leading-snug text-foreground/90 text-pretty">
                      {w.title}
                    </p>
                  </div>

                  <div className="col-span-6 md:col-span-2">
                    <span className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-green">
                      {w.metric}
                    </span>
                  </div>

                  <div className="col-span-6 flex items-center justify-end gap-3 md:col-span-1">
                    <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                      {w.year}
                    </span>
                    <span className="grid h-9 w-9 place-items-center border border-border text-foreground transition-all duration-500 ease-out-expo group-hover:border-green/60 group-hover:text-green">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
