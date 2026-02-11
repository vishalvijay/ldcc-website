/* Athletic Modernism with British Heritage
 * Fixtures page: Upcoming matches and recent results
 */

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CRICKET_EQUIPMENT = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-4_1770505572000_na1fn_Y3JpY2tldC1lcXVpcG1lbnQtZGV0YWls.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTRfMTc3MDUwNTU3MjAwMF9uYTFmbl9ZM0pwWTJ0bGRDMWxjWFZwY0cxbGJuUXRaR1YwWVdscy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CF1jhtoljO~RzIF4q8kpddkVR02-WAkzQo6AsV99w3Kdi-G~QHwNisZBHChl0HjSgtrqXTnKqY~c7AI6Qx5tHT5SkrPkLmbxnNnNBRjX65-wJz8w2hQlGFNXpuuYakPYk5DPYWcOwo34LzdeOxJaU1Dicf6qhHB7Vr~ddwiqR2Nap2SSpUJgTZvuzGS0wjQSCDnp3T42RNyv2lQf6QJ-XEXpnN4FWKEmRAbbc-78JPP4E9F0y2f~3tXAyxLK67nG2PDqBUjMkMbw7tZEPcEZMoknF1GyyUimTqRy4RV7m8dYu3G5BsNbh7Mmz-9-FbJIptDIlG1~XrGJJoVeLubtsA__";

export default function Fixtures() {
  const upcomingFixtures = [
    { date: "Saturday, May 9, 2026", time: "12:30 PM", team: "1st XI", opponent: "New Calypsonians CC", venue: "Home Ground", competition: "MCCL Division Five" },
    { date: "Saturday, May 16, 2026", time: "12:30 PM", team: "1st XI", opponent: "Peshwa CC", venue: "Away", competition: "MCCL Division Five" },
    { date: "Saturday, May 23, 2026", time: "12:30 PM", team: "1st XI", opponent: "London Superkings CC", venue: "Home Ground", competition: "MCCL Division Five" },
    { date: "Saturday, May 30, 2026", time: "12:30 PM", team: "1st XI", opponent: "South Harrow CC", venue: "Away", competition: "MCCL Division Five" },
    { date: "Saturday, June 6, 2026", time: "12:30 PM", team: "1st XI", opponent: "Perivale Phoenicians CC", venue: "Home Ground", competition: "MCCL Division Five" },
  ];

  const recentResults = [
    { 
      date: "Sunday, September 14, 2024", 
      team: "1st XI", 
      opponent: "2nd XI", 
      result: "Won by 11 runs",
      ourScore: "216/2 (20.0)",
      theirScore: "205/7 (20.0)",
      competition: "Internal Match"
    },
    { 
      date: "Saturday, September 6, 2024", 
      team: "1st XI", 
      opponent: "United Sporting CC", 
      result: "Won by 2 wickets",
      ourScore: "150/8 (29.4)",
      theirScore: "149 all out (29.3)",
      competition: "MCCL"
    },
    { 
      date: "Saturday, August 30, 2024", 
      team: "1st XI", 
      opponent: "New Calypsonians CC", 
      result: "Lost by 2 wickets",
      ourScore: "137 all out (36.1)",
      theirScore: "138/8 (39.4)",
      competition: "MCCL"
    },
    { 
      date: "Saturday, August 23, 2024", 
      team: "1st XI", 
      opponent: "Ealing Hanwellians CC", 
      result: "Won by 111 runs",
      ourScore: "224 all out (38.0)",
      theirScore: "113 all out (18.2)",
      competition: "MCCL"
    },
    { 
      date: "Saturday, August 16, 2024", 
      team: "1st XI", 
      opponent: "London Sportif CC", 
      result: "Lost by 179 runs",
      ourScore: "101 all out (27.0)",
      theirScore: "280 all out (43.0)",
      competition: "MCCL"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={CRICKET_EQUIPMENT} alt="Cricket Equipment" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              FIXTURES & RESULTS
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Stay updated with our match schedule and recent performance. Come support the team at our home ground.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Fixtures and Results Tabs */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
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
              {upcomingFixtures.map((fixture, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
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
                        <div className={`text-lg font-bold ${fixture.venue.includes("Home") ? "text-primary" : ""}`} style={{ fontFamily: 'var(--font-display)' }}>
                          {fixture.venue}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

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
                  View Full Schedule on Play-Cricket →
                </a>
              </div>
            </TabsContent>

            {/* Recent Results */}
            <TabsContent value="results" className="space-y-6">
              {recentResults.map((result, index) => {
                const isWin = result.result.toLowerCase().includes("won");
                return (
                  <Card key={index} className={`border-2 ${isWin ? 'border-primary/30 bg-primary/5' : 'border-border'}`}>
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
                            <Trophy className={`w-4 h-4 ${isWin ? 'text-primary' : 'text-muted-foreground'}`} />
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                              Result
                            </span>
                          </div>
                          <div className={`text-lg font-bold ${isWin ? 'text-primary' : 'text-muted-foreground'}`} style={{ fontFamily: 'var(--font-display)' }}>
                            {result.result}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

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
                  View Full Results on Play-Cricket →
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              MATCH DAY INFORMATION
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    SPECTATORS WELCOME
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All our home matches are open to spectators. Come along and support the team! Check the fixture list for match times and locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    LIVE UPDATES
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Follow our Instagram (@londondesperados) for live match updates, scores, and highlights from every game.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
