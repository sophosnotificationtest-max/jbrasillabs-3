import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useAnalytics } from "@/hooks/useAnalytics";

export function CTA() {
  const { trackConversions } = useAnalytics();
  const whatsappNumber = "5511999999999"; // Mantendo o número do repositório original
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um diagnóstico técnico para meu projeto.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackConversions.whatsappOpen();
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="relative overflow-hidden border-t border-border py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 glow-radial" />

      <div className="container relative mx-auto text-center">
        <Reveal>
          <div className="eyebrow inline-block">// Próximo passo</div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mx-auto mt-6 max-w-4xl text-5xl md:text-7xl font-medium leading-[1.02] text-foreground text-balance tracking-tight">
            Pronto para escalar{" "}
            <span className="text-muted-foreground">sem trocar a fundação?</span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Resposta em até 24h úteis via WhatsApp. Triagem técnica e cronograma realista
            antes de qualquer proposta comercial.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="btn-scan group inline-flex h-12 items-center gap-2.5 bg-green px-7 font-mono text-[13px] font-medium uppercase tracking-wider text-background transition-colors hover:bg-green/90 active:scale-[0.98]"
            >
              Falar pelo WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="btn-scan inline-flex h-12 items-center gap-2.5 border border-border px-6 font-mono text-[13px] uppercase tracking-wider text-foreground transition-colors hover:border-border-strong active:scale-[0.98]"
            >
              Agendar diagnóstico
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
