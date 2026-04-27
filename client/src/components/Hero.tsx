import { ArrowRight } from "lucide-react";
import { TerminalCard } from "./TerminalCard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background: deep black + grid + radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-70" />
      <div className="pointer-events-none absolute inset-0 glow-radial" />
      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-border bg-surface/60 px-3 py-1.5 animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-green pulse-dot" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/80">
                Engenharia digital de alta performance
              </span>
            </div>

            <h1
              className="font-display mt-7 text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[1.02] text-foreground text-balance animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Transformamos complexidade em{" "}
              <span className="text-muted-foreground">
                produtos digitais
              </span>{" "}
              rápidos<span className="text-green">.</span>
            </h1>

            <p
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              Agências tradicionais entregam lentidão e código legado em meses. Nós entregamos
              arquitetura nativa, escalável e impecável — em semanas.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="#contato"
                className="btn-scan group inline-flex h-12 items-center gap-2.5 bg-green px-6 font-mono text-[13px] font-medium uppercase tracking-wider text-background transition-colors hover:bg-green/90 active:scale-[0.98]"
              >
                Iniciar projeto
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
              </a>
              <a
                href="#trabalhos"
                className="btn-scan inline-flex h-12 items-center gap-2.5 border border-border bg-transparent px-6 font-mono text-[13px] uppercase tracking-wider text-foreground transition-colors hover:border-border-strong active:scale-[0.98]"
              >
                Ver portfólio
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 animate-fade-up"
              style={{ animationDelay: "560ms" }}
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Stack:
              </span>
              {["React", "Node.js", "Next.js", "Supabase", "AWS", "TypeScript"].map((t) => (
                <span key={t} className="font-mono text-[12px] tracking-tight text-foreground/70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — terminal */}
          <div className="lg:col-span-5 lg:pt-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
