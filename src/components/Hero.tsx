
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, MessageSquare, UserCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-business");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/ano1/1200/800"}
          alt="ANO Insurance Solutions"
          fill
          className="object-cover"
          priority
          data-ai-hint="business office"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
      </div>

      <div className="container max-w-[1320px] mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4" />
              Ekskluzivni partner Aon grupe
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-headline">
              Vaš partner za<br />
              <span className="text-primary">najbolje osiguranje</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-xl leading-relaxed">
              ANO pomaže tvrtkama odabrati optimalno osiguranje, razumjeti različlite opcije, osigurati se od rizika. Dajemo vam potpunu podršku 24/7.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-md shadow-lg shadow-primary/20 font-bold">
                Kontaktirajte nas
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="lg" className="border-white text-secondary bg-white hover:bg-white/90 h-14 px-6 text-lg rounded-md font-bold transition-all shadow-lg">
                  Prijavi štetu
                </Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-md font-bold shadow-lg shadow-primary/20">
                  <UserCheck className="w-5 h-5 mr-2" />
                  MOJ ANO
                </Button>
              </div>
            </div>

            <p className="text-sm text-white/50 italic">
              "Složena vremena traže pametna rješenja."
            </p>
          </div>

          {/* Quick Chat Widget / AI Advisor Teaser */}
          <div className="hidden lg:flex justify-end animate-in fade-in slide-in-from-right duration-1000">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full max-md shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <MessageSquare className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">AI Savjetnik</h3>
                  <p className="text-white/60 text-sm">Pitaj me o osiguranju</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-3 text-sm text-white/90 italic">
                  "Kako osigurati tvrtku od cyber napada?"
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-sm text-white/90 italic">
                  "Koja je razlika između brokera i zastupnika?"
                </div>
                <Button variant="secondary" className="w-full bg-white text-secondary hover:bg-white/90 font-bold">
                  Isprobaj AI savjetnika
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
