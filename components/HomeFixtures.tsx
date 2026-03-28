"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { Fixture } from "@/types/cricket";

interface HomeFixturesProps {
  fixtures: Fixture[];
}

export default function HomeFixtures({ fixtures }: HomeFixturesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {fixtures.map((fixture) => (
        <Card key={fixture.id} className="border-2 hover:border-primary transition-colors">
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
              {fixture.date}
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              VS {fixture.opponent}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="font-semibold">{fixture.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Venue:</span>
                <span className={`font-semibold ${fixture.isHome ? "text-primary" : ""}`}>
                  {fixture.isHome ? "Home" : "Away"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
