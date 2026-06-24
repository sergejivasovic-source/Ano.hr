
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Globe, ShieldAlert, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nama", href: "#o-nama" },
    { name: "Usluge", href: "#usluge" },
    { name: "Osiguranja", href: "#osiguranja" },
    { name: "Novosti", href: "#novosti" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const languages = ["HR", "EN", "SI", "BIH"];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled 
          ? "bg-white shadow-md py-3 dark:bg-secondary" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary text-white font-bold text-2xl px-3 py-1 rounded">ANO</div>
          <span className={cn(
            "hidden sm:block font-headline font-bold text-xl tracking-tight transition-colors",
            isScrolled ? "text-secondary dark:text-white" : "text-white"
          )}>
            Insurance Solutions
          </span>
        </Link>

        {/* Right Actions & Hamburger Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                "border-primary text-primary hover:bg-primary/10 font-bold transition-all",
                !isScrolled && "bg-white text-secondary border-white hover:bg-white/90"
              )}
            >
              <ShieldAlert className="w-4 h-4 mr-2" />
              Prijavi štetu
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20">
              <UserCheck className="w-4 h-4 mr-2" />
              MOJ ANO
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "transition-colors hover:bg-primary/10",
                  isScrolled ? "text-foreground" : "text-white hover:text-white"
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col border-l-primary/10">
              <SheetHeader className="text-left pb-6 border-b">
                <SheetTitle className="text-2xl font-bold flex items-center gap-2">
                   <div className="bg-primary text-white px-2 py-0.5 rounded text-sm">ANO</div>
                   Izbornik
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 overflow-y-auto py-8 space-y-10">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Navigacija</p>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium p-3 rounded-lg hover:bg-primary/5 hover:text-primary transition-all flex items-center justify-between group"
                    >
                      {link.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  ))}
                </nav>

                {/* Language Selection */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    <Globe className="w-3 h-3" />
                    Jezik / Language
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Button 
                        key={lang} 
                        variant="ghost" 
                        size="sm"
                        className={cn(
                          "font-bold",
                          lang === "HR" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {lang}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Only CTAs (visible in menu on small screens) */}
              <div className="lg:hidden flex flex-col gap-3 pt-6 border-t mt-auto">
                <Button variant="outline" className="w-full justify-start border-primary text-primary font-bold">
                  <ShieldAlert className="w-4 h-4 mr-2" />
                  Prijavi štetu
                </Button>
                <Button className="w-full justify-start bg-primary text-white font-bold">
                  <UserCheck className="w-4 h-4 mr-2" />
                  MOJ ANO
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
