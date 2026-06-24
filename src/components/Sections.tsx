
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Search, 
  Settings, 
  Handshake, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  Car, 
  Ship, 
  Plane, 
  Briefcase, 
  Lock, 
  HeartPulse, 
  MapPin, 
  LifeBuoy,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// SECTION: Role Comparison
export function RoleComparison() {
  const roles = [
    {
      title: "Osiguravatelj",
      description: "Nudi samo vlastite police. Isključivo je fokusiran na prodaju svojih proizvoda.",
      icon: <Building2 className="w-8 h-8" />,
      highlight: false,
    },
    {
      title: "Zastupnik",
      description: "Zastupa jednog ili više osiguravatelja i fokusiran je samo na prodaju polica osiguranja koje zastupa.",
      icon: <Users className="w-8 h-8" />,
      highlight: false,
    },
    {
      title: "Broker",
      description: (
        <span>
          <strong>Jedini zastupa interese klijenta,</strong> analizira rizike, uspoređuje ponude svih osiguravatelja i savjetuje u odabiru najboljeg riješenja.
        </span>
      ),
      icon: <Search className="w-8 h-8" />,
      highlight: true,
    },
  ];

  return (
    <section id="o-nama" className="py-24 bg-background">
      <div className="container max-w-[1320px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 font-headline text-secondary">Zašto raditi s brokerom u osiguranju?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <Card key={idx} className={cn(
              "p-8 transition-all hover:-translate-y-2 border-none shadow-lg text-left",
              role.highlight ? "bg-primary text-white scale-105 ring-4 ring-primary/20" : "bg-accent/50 text-foreground"
            )}>
              <div className={cn("mb-6 flex justify-start", role.highlight ? "text-white" : "text-primary")}>
                {role.icon}
              </div>
              <CardTitle className="text-2xl mb-4 font-headline">{role.title}</CardTitle>
              <CardContent className={cn("p-0 text-lg leading-relaxed", role.highlight ? "text-white/90" : "text-muted-foreground")}>
                {role.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Process
export function Process() {
  const steps = [
    {
      step: "01",
      title: "Razumijemo vaše rizike",
      description: "Analiziramo poslovanje, izloženosti i potrebe kako bismo dobili širu sliku rizika."
    },
    {
      step: "02",
      title: "Uspoređujemo tržište",
      description: "Istražujemo dostupna osigurateljna rješenja i uspoređujemo uvjete, pokrića i mogućnosti."
    },
    {
      step: "03",
      title: "Podržavamo vas kroz cijeli proces",
      description: "Pomažemo pri ugovaranju, administraciji, prijavi šteta i daljnjem upravljanju policama."
    }
  ];

  return (
    <section className="py-24 bg-secondary text-white overflow-hidden">
      <div className="container max-w-[1320px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-headline">Tri koraka do optimalne police</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/10 -z-0"></div>
          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-primary/30 ring-8 ring-primary/10">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">{item.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Services
export function ServicesGrid() {
  const services = [
    {
      title: "Procjena rizika i osiguranje",
      description: "Identifikacija rizika, analiza potreba i prijedlog optimalnog rješenja.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Reosiguranje",
      description: "Podrška u kompleksnim aranžmanima i pristup međunarodnim tržištima.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Pomoć u štetama",
      description: "Stručna podrška u prijavi, praćenju i brzom rješavanju šteta.",
      icon: <Handshake className="w-6 h-6" />
    },
    {
      title: "Ljudski resursi",
      description: "Savjetovanje o benefitima zaposlenika i povezanim rizicima.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "MOJ ANO",
      description: "Digitalna platforma za pregled polica i dokumenata 24/7.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="usluge" className="py-24 bg-background">
      <div className="container max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline text-secondary">Naše usluge</h2>
            <p className="text-muted-foreground text-lg">Pružamo cjelovita rješenja za upravljanje rizicima i osiguranjem prilagođena vašem poslovanju.</p>
          </div>
          <Button variant="link" className="text-primary font-bold text-lg p-0 h-auto items-center">
            Pogledajte sve usluge <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all border-accent/20 bg-accent/5 p-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Insurance Types
export function InsuranceTypes() {
  const types = [
    { title: "Imovina", icon: <Building2 />, desc: "Zaštita poslovnih zgrada, opreme i zaliha." },
    { title: "Prekid rada", icon: <TrendingUp />, desc: "Pokriće gubitaka uslijed zastoja u poslovanju." },
    { title: "Građevinski projekti", icon: <Settings />, desc: "Osiguranje svih faza građenja i montaže." },
    { title: "Vozila", icon: <Car />, desc: "Upravljanje flotom i kasko osiguranja." },
    { title: "Plovila i zrakoplovi", icon: <Ship />, desc: "Specijalizirana rješenja za morski i zračni transport." },
    { title: "Odgovornost", icon: <ShieldCheck />, desc: "Zaštita od zahtjeva trećih osoba." },
    { title: "Cyber rizici", icon: <Lock />, desc: "Zaštita digitalne imovine i podataka." },
    { title: "Potraživanja", icon: <FileText />, desc: "Osiguranje naplate od kupaca." },
    { title: "Zdravstveno i životno", icon: <HeartPulse />, desc: "Benefiti za vaše zaposlenike." }
  ];

  return (
    <section id="osiguranja" className="py-24 bg-accent/20">
      <div className="container max-w-[1320px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-headline text-secondary">Osiguranja za različite poslovne rizike</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {types.map((type, idx) => (
            <Card key={idx} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center bg-accent/50 rounded-lg">
                  {React.cloneElement(type.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <CardTitle className="text-lg font-headline">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto text-primary text-sm font-bold">
                  Saznajte više <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION: Damage Claim Call to Action
export function DamageClaimCta() {
  return (
    <section className="py-20">
      <div className="container max-w-[1100px] mx-auto px-4">
        <div className="bg-secondary rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="flex-1 p-10 lg:p-16 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Trebate prijaviti štetu?</h2>
            <p className="text-white/70 text-lg">
              Odaberite vrstu osiguranja i započnite prijavu štete uz jasne upute i podršku ANO tima. Tu smo da vas vodimo kroz svaki korak.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 justify-start">Imovina</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 justify-start">Vozila</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 justify-start">Zdravstveno</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 justify-start">Ostalo</Button>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 w-full sm:w-auto">
                Prijavi štetu
              </Button>
              <span className="text-white/50 text-sm">Niste sigurni odakle krenuti? Kontaktirajte nas.</span>
            </div>
          </div>
          <div className="md:w-1/3 relative min-h-[300px]">
            <Image 
              src="https://picsum.photos/seed/ano3/600/400" 
              alt="Damage Support" 
              fill 
              className="object-cover"
              data-ai-hint="customer support"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
