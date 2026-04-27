import { useEffect, useState } from "react";

const LINES = [
  { prompt: "$", text: "npm run build" },
  { out: "▲ Compiled successfully in 412ms" },
  { prompt: "$", text: "next start --port 3000" },
  { out: "✓ Lighthouse: 100  LCP: 0.8s  TTI: 1.2s" },
];

export function TerminalCard() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = LINES[step];
    if (!current) return;
    if ("text" in current && current.text) {
      let i = 0;
      const id = window.setInterval(() => {
        i++;
        setTyped(current.text!.slice(0, i));
        if (i >= current.text!.length) {
          window.clearInterval(id);
          window.setTimeout(() => {
            setStep((s) => s + 1);
            setTyped("");
          }, 500);
        }
      }, 55);
      return () => window.clearInterval(id);
    } else {
      const id = window.setTimeout(() => {
        setStep((s) => (s + 1 >= LINES.length ? 0 : s + 1));
      }, 1100);
      return () => window.clearTimeout(id);
    }
  }, [step]);

  const visible = LINES.slice(0, step);

  return (
    <div className="surface-card relative w-full overflow-hidden">
      {/* window header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          ~/jbrasil-labs · zsh
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-green">live</span>
        </div>
      </div>

      <div className="font-mono text-[13px] leading-7 px-5 py-5 min-h-[260px]">
        {visible.map((l, i) =>
          "prompt" in l ? (
            <div key={i} className="text-foreground/90">
              <span className="text-green">{l.prompt}</span>{" "}
              <span>{l.text}</span>
            </div>
          ) : (
            <div key={i} className="text-muted-foreground">{l.out}</div>
          )
        )}
        {LINES[step] && "prompt" in LINES[step] && (
          <div className="text-foreground/90">
            <span className="text-green">{LINES[step].prompt}</span>{" "}
            <span className="caret">{typed}</span>
          </div>
        )}
      </div>

      {/* bottom metrics strip */}
      <div className="grid grid-cols-3 border-t border-border">
        {[
          { k: "Lighthouse", v: "100" },
          { k: "LCP", v: "0.8s" },
          { k: "Bundle", v: "84kb" },
        ].map((m) => (
          <div key={m.k} className="border-r border-border px-4 py-3 last:border-r-0">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
            <div className="font-display text-lg text-green tabular-nums">{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
