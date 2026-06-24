
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id="kontakt" className="py-24 bg-white">
        <div className="container max-w-[1320px] mx-auto px-4">
          <div className="h-[600px] flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">Učitavanje kontakt forme...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="container max-w-[1320px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-headline">Razgovarajmo o vašim rizicima</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pošaljite upit i javit će vam se ANO stručni tim za osiguranje i upravljanje rizicima. Naš pristup temelji se na razumijevanju specifičnosti vašeg poslovanja.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Nazovite nas</p>
                  <p className="text-xl font-bold text-secondary">+385 1 2345 678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">E-mail</p>
                  <p className="text-xl font-bold text-secondary">info@ano.hr</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Adresa</p>
                  <p className="text-xl font-bold text-secondary">Radnička cesta 80, 10000 Zagreb</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/30 p-8 md:p-12 rounded-3xl border border-accent/20 shadow-sm">
            <form className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ime i prezime</Label>
                <Input id="name" placeholder="Vaše ime" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Tvrtka</Label>
                <Input id="company" placeholder="Naziv tvrtke" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="vasa@email.hr" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" placeholder="+385..." className="bg-white" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="subject">Predmet</Label>
                <Input id="subject" placeholder="Tema upita" className="bg-white" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message">Poruka</Label>
                <Textarea id="message" placeholder="Kako vam možemo pomoći?" className="min-h-[120px] bg-white" />
              </div>
              <div className="sm:col-span-2 flex items-start space-x-2 pt-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                  Prihvaćam uvjete obrade osobnih podataka u svrhu rješavanja ovog upita.
                </Label>
              </div>
              <Button className="sm:col-span-2 h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg">
                Pošaljite upit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
