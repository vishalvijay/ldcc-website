"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Fixture, MatchResult } from "@/types/cricket";

interface FixtureTabsProps {
  fixtures: Fixture[];
  results: MatchResult[];
}

export default function FixtureTabs({ fixtures, results }: FixtureTabsProps) {
  return (
    <Tabs defaultValue="upcoming" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
        <TabsTrigger value="upcoming" className="text-base" style={{ fontFamily: 'var(--font-subheading)' }}>
          Upcoming Fixtures
        </TabsTrigger>
        <TabsTrigger value="results" className="text-base" style={{ fontFamily: 'var(--font-subheading)' }}>
          Recent Results
        </TabsTrigger>
      </TabsList>

      {/* Upcoming Fixtures */}
      <TabsContent value="upcoming" className="space-y-6">
        {fixtures.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No upcoming fixtures scheduled.</p>
          </div>
        ) : (
          fixtures.map((fixture) => (
            <a key={fixture.id} href={`https://londondesperados.play-cricket.com/website/results/${fixture.id}`} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-6 items-center">
                  {/* Date & Time */}
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                        {fixture.team}
                      </span>
                    </div>
                    <div className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {fixture.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {fixture.time}
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                      {fixture.competition}
                    </div>
                    <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      LONDON DESPERADOS
                    </div>
                    <div className="text-lg text-muted-foreground mb-2">vs</div>
                    <div className="text-xl font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                      {fixture.opponent}
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="text-right md:text-right">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                        Venue
                      </span>
                    </div>
                    <div className={`text-lg font-bold ${fixture.isHome ? "text-primary" : ""}`} style={{ fontFamily: 'var(--font-display)' }}>
                      {fixture.venue}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </a>
          ))
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            For the complete fixture list and live scores, visit our Play-Cricket profile
          </p>
          <a
            href="https://londondesperados.play-cricket.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            View Full Schedule on Play-Cricket &rarr;
          </a>
        </div>
      </TabsContent>

      {/* Recent Results */}
      <TabsContent value="results" className="space-y-6">
        {results.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No results available yet.</p>
          </div>
        ) : (
          results.map((result) => (
            <a key={result.id} href={`https://londondesperados.play-cricket.com/website/results/${result.id}`} target="_blank" rel="noopener noreferrer" className="block">
            <Card className={`border-2 cursor-pointer ${result.isWin ? 'border-primary/30 bg-primary/5' : 'border-border'}`}>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-6 items-center">
                  {/* Date */}
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                        {result.team}
                      </span>
                    </div>
                    <div className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {result.date}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {result.competition}
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="text-center">
                    <div className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      LONDON DESPERADOS
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{result.ourScore}</div>
                    <div className="text-lg text-muted-foreground mb-1">vs</div>
                    <div className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-subheading)' }}>
                      {result.opponent}
                    </div>
                    <div className="text-sm text-muted-foreground">{result.theirScore}</div>
                  </div>

                  {/* Result */}
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <Trophy className={`w-4 h-4 ${result.isWin ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                        Result
                      </span>
                    </div>
                    <div className={`text-lg font-bold ${result.isWin ? 'text-primary' : 'text-muted-foreground'}`} style={{ fontFamily: 'var(--font-display)' }}>
                      {result.result}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </a>
          ))
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            For detailed scorecards and match reports, visit our Play-Cricket profile
          </p>
          <a
            href="https://londondesperados.play-cricket.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            View Full Results on Play-Cricket &rarr;
          </a>
        </div>
      </TabsContent>
    </Tabs>
  );
}
