import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#sobre", label: "Sobre" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out-expo ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center border border-green/60 bg-green/10">
            <span className="font-mono text-[11px] font-medium text-green">JB</span>
          </span>
          <span className="font-display text-[15px] font-medium tracking-tight text-foreground">
            JBrasil <span className="text-muted-foreground">Labs</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="btn-scan group inline-flex h-9 items-center gap-2 border border-border bg-surface px-4 font-mono text-[12px] uppercase tracking-wider text-foreground transition-colors hover:border-green/60"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green pulse-dot" />
          Iniciar projeto
        </a>
      </div>
    </header>
  );
}
