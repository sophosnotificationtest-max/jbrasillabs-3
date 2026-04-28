import { Reveal } from "./Reveal";

type Service = {
  index: string;
  title: string;
  desc: string;
  bullets: string[];
  code: string[];
};

const SERVICES: Service[] = [
  {
    index: "01",
    title: "Landing Pages",
    desc: "Páginas de alta conversão com design futurista e performance extrema. Criadas para transformar visitantes em clientes.",
    bullets: ["Design Exclusivo", "Foco em Conversão", "Mobile First"],
    code: [
      "<LandingPage",
      "  performance='100'",
      "  conversion='optimized'",
      "  design='futuristic'",
      "/>",
    ],
  },
  {
    index: "02",
    title: "SEO Otimizado",
    desc: "Sua página no topo das buscas. Estrutura técnica impecável para garantir visibilidade orgânica desde o lançamento.",
    bullets: ["Meta Tags Dinâmicas", "Indexação Rápida", "Core Web Vitals"],
    code: [
      "export const metadata = {",
      "  title: 'SEO Otimizado',",
      "  ranking: 'Top 1',",
      "}",
    ],
  },
  {
    index: "03",
    title: "Performance Extrema",
    desc: "Carregamento instantâneo em qualquer dispositivo. Usamos as tecnologias mais modernas para garantir velocidade.",
    bullets: ["React & Vite", "Lighthouse 100", "Bundle Otimizado"],
    code: [
      "const stats = {",
      "  lcp: '0.8s',",
      "  interactive: 'instant',",
      "}",
    ],
  },
  {
    index: "04",
    title: "Suporte Contínuo",
    desc: "Não apenas entregamos a página, mas garantimos que ela continue performando e evoluindo com seu negócio.",
    bullets: ["Monitoramento 24/7", "Ajustes Rápidos", "Hospedagem Inclusa"],
    code: [
      "while (business.growing) {",
      "  support.ensure('success');",
      "}",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-36">
      <div className="container mx-auto">
        <Reveal className="max-w-3xl">
          <div className="eyebrow">// Capacidades</div>
          <h2 className="font-display mt-5 text-4xl md:text-5xl font-medium leading-[1.05] text-foreground text-balance">
            Quatro disciplinas. Uma equipe enxuta.{" "}
            <span className="text-muted-foreground">Sem terceirização.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2 border border-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.index} delay={i * 90}>
              <article className="group relative h-full bg-background p-8 md:p-10 transition-colors duration-500 ease-out-expo hover:bg-surface/60">
                {/* faded code background, revealed on hover */}
                <pre className="pointer-events-none absolute inset-0 overflow-hidden p-8 md:p-10 font-mono text-[12px] leading-6 text-green/0 transition-colors duration-700 ease-out-expo group-hover:text-green/15">
                  <code>{s.code.join("\n")}</code>
                </pre>

                <div className="relative">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-green">
                      /{s.index}
                    </span>
                    <span className="h-px w-16 bg-border transition-colors duration-500 group-hover:bg-green/60" />
                  </div>

                  <h3 className="font-display mt-8 text-2xl font-medium text-foreground tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  <ul className="mt-6 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 font-mono text-[12px] text-foreground/70"
                      >
                        <span className="h-px w-3 bg-green/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
