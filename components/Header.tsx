"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316570993/NZsijcYfRRUbPMEc.png";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Teams", path: "/teams" },
    { label: "Fixtures", path: "/fixtures" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img
                src={LOGO_URL}
                alt="London Desperados"
                className="h-12 w-12 transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  LONDON DESPERADOS
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                  Est. 2019
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors relative cursor-pointer ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  style={{ fontFamily: 'var(--font-subheading)' }}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                variant="default"
                className="font-semibold"
                style={{ fontFamily: 'var(--font-subheading)' }}
              >
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block py-2 text-base font-medium transition-colors cursor-pointer ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                    style={{ fontFamily: 'var(--font-subheading)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  variant="default"
                  className="w-full font-semibold"
                  style={{ fontFamily: 'var(--font-subheading)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
