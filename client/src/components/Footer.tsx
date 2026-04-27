import { useAnalytics } from "@/hooks/useAnalytics";

export function Footer() {
  const { trackConversions } = useAnalytics();
  const whatsappNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = () => {
    trackConversions.whatsappOpen();
    window.open(whatsappUrl, "_blank");
  };
  return (
    <footer id="sobre" className="border-t border-border bg-background">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center border border-green/60 bg-green/10">
                <span className="font-mono text-[11px] font-medium text-green">JB</span>
              </span>
              <span className="font-display text-[15px] font-medium tracking-tight text-foreground">
                JBrasil <span className="text-muted-foreground">Labs</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Engenharia digital de alta performance para empresas que tratam
              software como vantagem competitiva — não como custo.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green pulse-dot" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/80">
                Status: todos os sistemas operacionais
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Estúdio
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px] text-foreground/80">
              <li><a href="#servicos" className="transition-colors hover:text-green">Serviços</a></li>
              <li><a href="#processo" className="transition-colors hover:text-green">Processo</a></li>
              <li><a href="#trabalhos" className="transition-colors hover:text-green">Trabalhos</a></li>
              <li><a href="#contato" className="transition-colors hover:text-green">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Recursos
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px] text-foreground/80">
              <li><a href="#" className="transition-colors hover:text-green">Notas técnicas</a></li>
              <li><a href="#" className="transition-colors hover:text-green">Open source</a></li>
              <li><a href="#" className="transition-colors hover:text-green">Carreiras</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px] text-foreground/80">
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="transition-colors hover:text-green"
                >
                  WhatsApp: (11) 99999-9999
                </button>
              </li>
              <li className="text-muted-foreground">Curitiba · São Paulo · Remoto</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <span className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} JBrasil Labs · CNPJ 00.000.000/0001-00
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Build · main@a4f7c2 · pt-BR
          </span>
        </div>
      </div>
    </footer>
  );
}
