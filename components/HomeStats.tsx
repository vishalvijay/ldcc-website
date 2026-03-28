"use client";

import { Trophy, Calendar, Users, Target } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { icon: "Trophy" as const, value: "5+", label: "Championships Won" },
  { icon: "Users" as const, value: "40+", label: "Active Players" },
  { icon: "Calendar" as const, value: "7", label: "Years Established" },
  { icon: "Target" as const, value: "2", label: "Competitive Teams" },
];

const iconMap = { Trophy, Calendar, Users, Target };

export default function HomeStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon];
        return (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                {stat.label}
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
