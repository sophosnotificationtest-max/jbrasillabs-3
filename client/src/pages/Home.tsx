import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
// Portfolio removido
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import WhatsAppWidget from '@/components/WhatsAppWidget';
import CookieConsent from '@/components/CookieConsent';

const Home = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <StatsBar />
      <Services />
      <Process />
      <CTA />
      <Footer />
      
      {/* Mantendo componentes funcionais do repositório original */}
      <WhatsAppWidget phoneNumber="5547992813583" />
      <CookieConsent />
    </main>
  );
};

export default Home;
