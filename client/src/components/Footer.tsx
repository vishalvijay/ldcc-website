/* Athletic Modernism with British Heritage
 * Footer with contact info, social links, and copyright
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316570993/NZsijcYfRRUbPMEc.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="London Desperados" className="h-12 w-12" />
              <div>
                <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  LONDON DESPERADOS
                </div>
                <div className="text-xs text-secondary-foreground/70 uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                  Est. 2019
                </div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              A friendly, sociable and inclusive club fostering cricketing excellence in London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--font-subheading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Teams", "Fixtures", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    <span className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--font-subheading)' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-primary" />
                <a href="mailto:londondesperados@gmail.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  londondesperados@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-primary" />
                <a href="tel:07459623673" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  07459 623673
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>

          {/* Social and League Info */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--font-subheading)' }}>
              Follow Us
            </h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/londondesperados/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                @londondesperados
              </a>
              <div className="pt-4 border-t border-secondary-foreground/20">
                <p className="text-xs text-secondary-foreground/70 leading-relaxed">
                  Playing in MCCL Saturday League (Middlesex) and Essex Sunday League
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} London Desperados Cricket Club. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy">
                <span className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors cursor-pointer">
                  Terms of Use
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
