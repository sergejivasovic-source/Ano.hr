"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Linkedin, Facebook, Mail } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    {
      title: "ANO",
      links: ["O nama", "Vrijednosti", "Tim", "Zašto raditi s nama"]
    },
    {
      title: "Usluge",
      links: ["Procjena rizika", "Reosiguranje", "Štete", "HR savjetovanje", "MOJ ANO"]
    },
    {
      title: "Osiguranja",
      links: ["Imovina", "Odgovornost", "Cyber", "Potraživanja", "Zdravstveno", "Putno"]
    },
    {
      title: "Servisi",
      links: ["Prijavi štetu", "MOJ ANO", "Dokumenti", "Česta pitanja"]
    },
    {
      title: "Kontakt",
      content: [
        "ANO d.o.o.",
        "Radnička cesta 80, Zagreb",
        "+385 1 2345 678",
        "info@ano.hr"
      ]
    },
    {
      title: "Pravne informacije",
      links: ["Uvjeti poslovanja", "Pravila privatnosti", "Kolačići", "Dokumenti"]
    }
  ];

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {footerLinks.map((col, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-6 text-primary">{col.title}</h3>
              <ul className="space-y-4">
                {col.links?.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
                {col.content?.map((text) => (
                  <li key={text} className="text-white/60 text-sm">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white font-bold p-1 rounded text-sm">ANO</div>
            <p className="text-white/40 text-sm">
              © {year || "2025"} ANO d.o.o. Sva prava pridržana. Ekskluzivni partner Aon grupe.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5 text-white/60" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook className="w-5 h-5 text-white/60" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 text-white/60" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
