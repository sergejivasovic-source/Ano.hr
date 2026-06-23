
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RoleComparison, Process, ServicesGrid, InsuranceTypes, DamageClaimCta } from "@/components/Sections";
import { ContactSection } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { AdvisorChat } from "@/components/AdvisorChat";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, UserCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <RoleComparison />
        <Process />
        <ServicesGrid />
        <InsuranceTypes />
        <DamageClaimCta />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating AI Advisor Chat */}
      <AdvisorChat />

      {/* Mobile Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border p-3 flex justify-around items-center">
        <Button variant="ghost" className="flex flex-col gap-1 h-auto text-[10px] font-bold">
          <Phone className="w-5 h-5" />
          NAZOVI
        </Button>
        <Button variant="ghost" className="flex flex-col gap-1 h-auto text-[10px] font-bold text-primary">
          <ShieldAlert className="w-5 h-5" />
          PRIJAVI ŠTETU
        </Button>
        <Button variant="ghost" className="flex flex-col gap-1 h-auto text-[10px] font-bold">
          <UserCheck className="w-5 h-5" />
          MOJ ANO
        </Button>
      </div>
    </div>
  );
}
