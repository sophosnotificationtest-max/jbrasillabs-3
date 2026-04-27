import { Reveal } from "./Reveal";

const STATS = [
  { v: "+50", k: "Projetos entregues", note: "desde 2012" },
  { v: "100%", k: "Código nativo", note: "zero no-code" },
  { v: "0.8s", k: "LCP médio", note: "performance audit" },
  { v: "12", k: "Anos de prática", note: "engenharia web" },
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.k}
              delay={i * 80}
              className={`px-2 py-10 md:px-6 md:py-12 ${
                i !== 0 ? "lg:border-l border-border" : ""
              } ${i === 1 || i === 3 ? "border-l border-border lg:border-l" : ""} ${
                i >= 2 ? "border-t border-border lg:border-t-0" : ""
              }`}
            >
              <div className="font-display text-4xl md:text-5xl font-medium text-foreground tabular-nums tracking-tight">
                {s.v}
              </div>
              <div className="mt-3 text-sm text-foreground/80">{s.k}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.note}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
