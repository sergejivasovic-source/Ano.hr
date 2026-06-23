
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ShieldAlert, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            isScrolled || isMobileMenuOpen ? "text-secondary" : "text-white"
          )}>
            Insurance Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium text-sm hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Service CTAs & Language */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className={cn(
              "border-primary text-primary hover:bg-primary/10 font-bold",
              !isScrolled && "bg-white text-secondary border-white hover:bg-white/90"
            )}
          >
            <ShieldAlert className="w-4 h-4 mr-2" />
            Prijavi štetu
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold">
            <UserCheck className="w-4 h-4 mr-2" />
            MOJ ANO
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>HR</DropdownMenuItem>
              <DropdownMenuItem>EN</DropdownMenuItem>
              <DropdownMenuItem>SI</DropdownMenuItem>
              <DropdownMenuItem>BIH</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className={cn(
            "lg:hidden p-2",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white dark:bg-secondary z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium border-b border-border pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="w-full justify-start border-primary text-primary font-bold">
              <ShieldAlert className="w-4 h-4 mr-2" />
              Prijavi štetu
            </Button>
            <Button className="w-full justify-start bg-primary text-white font-bold">
              <UserCheck className="w-4 h-4 mr-2" />
              MOJ ANO
            </Button>
            <div className="flex gap-4 pt-4 border-t border-border">
              <span className="text-sm font-bold">HR</span>
              <span className="text-sm text-muted-foreground">EN</span>
              <span className="text-sm text-muted-foreground">SI</span>
              <span className="text-sm text-muted-foreground">BIH</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
