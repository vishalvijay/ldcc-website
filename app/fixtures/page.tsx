import { Card, CardContent } from "@/components/ui/card";
import { fetchFixtures, fetchResults } from "@/lib/play-cricket";
import FixtureTabs from "@/components/FixtureTabs";
import type { Fixture, MatchResult } from "@/types/cricket";

const CRICKET_EQUIPMENT = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-4_1770505572000_na1fn_Y3JpY2tldC1lcXVpcG1lbnQtZGV0YWls.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTRfMTc3MDUwNTU3MjAwMF9uYTFmbl9ZM0pwWTJ0bGRDMWxjWFZwY0cxbGJuUXRaR1YwWVdscy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CF1jhtoljO~RzIF4q8kpddkVR02-WAkzQo6AsV99w3Kdi-G~QHwNisZBHChl0HjSgtrqXTnKqY~c7AI6Qx5tHT5SkrPkLmbxnNnNBRjX65-wJz8w2hQlGFNXpuuYakPYk5DPYWcOwo34LzdeOxJaU1Dicf6qhHB7Vr~ddwiqR2Nap2SSpUJgTZvuzGS0wjQSCDnp3T42RNyv2lQf6QJ-XEXpnN4FWKEmRAbbc-78JPP4E9F0y2f~3tXAyxLK67nG2PDqBUjMkMbw7tZEPcEZMoknF1GyyUimTqRy4RV7m8dYu3G5BsNbh7Mmz-9-FbJIptDIlG1~XrGJJoVeLubtsA__";

const fallbackFixtures: Fixture[] = [
  { id: 1, date: "Saturday, 9 May 2026", time: "12:30 PM", rawDate: new Date(2026, 4, 9), team: "1st XI", opponent: "New Calypsonians CC", venue: "Home Ground", competition: "MCCL Division Five", isHome: true },
  { id: 2, date: "Saturday, 16 May 2026", time: "12:30 PM", rawDate: new Date(2026, 4, 16), team: "1st XI", opponent: "Peshwa CC", venue: "Away", competition: "MCCL Division Five", isHome: false },
  { id: 3, date: "Saturday, 23 May 2026", time: "12:30 PM", rawDate: new Date(2026, 4, 23), team: "1st XI", opponent: "London Superkings CC", venue: "Home Ground", competition: "MCCL Division Five", isHome: true },
  { id: 4, date: "Saturday, 30 May 2026", time: "12:30 PM", rawDate: new Date(2026, 4, 30), team: "1st XI", opponent: "South Harrow CC", venue: "Away", competition: "MCCL Division Five", isHome: false },
  { id: 5, date: "Saturday, 6 June 2026", time: "12:30 PM", rawDate: new Date(2026, 5, 6), team: "1st XI", opponent: "Perivale Phoenicians CC", venue: "Home Ground", competition: "MCCL Division Five", isHome: true },
];

const fallbackResults: MatchResult[] = [
  { id: 101, date: "Sunday, 14 September 2024", rawDate: new Date(2024, 8, 14), team: "1st XI", opponent: "2nd XI", result: "Won by 11 runs", ourScore: "216/2 (20.0)", theirScore: "205/7 (20.0)", competition: "Internal Match", isWin: true },
  { id: 102, date: "Saturday, 6 September 2024", rawDate: new Date(2024, 8, 6), team: "1st XI", opponent: "United Sporting CC", result: "Won by 2 wickets", ourScore: "150/8 (29.4)", theirScore: "149 all out (29.3)", competition: "MCCL", isWin: true },
  { id: 103, date: "Saturday, 30 August 2024", rawDate: new Date(2024, 7, 30), team: "1st XI", opponent: "New Calypsonians CC", result: "Lost by 2 wickets", ourScore: "137 all out (36.1)", theirScore: "138/8 (39.4)", competition: "MCCL", isWin: false },
  { id: 104, date: "Saturday, 23 August 2024", rawDate: new Date(2024, 7, 23), team: "1st XI", opponent: "Ealing Hanwellians CC", result: "Won by 111 runs", ourScore: "224 all out (38.0)", theirScore: "113 all out (18.2)", competition: "MCCL", isWin: true },
  { id: 105, date: "Saturday, 16 August 2024", rawDate: new Date(2024, 7, 16), team: "1st XI", opponent: "London Sportif CC", result: "Lost by 179 runs", ourScore: "101 all out (27.0)", theirScore: "280 all out (43.0)", competition: "MCCL", isWin: false },
];

export default async function Fixtures() {
  let fixtures: Fixture[];
  let results: MatchResult[];

  try {
    [fixtures, results] = await Promise.all([
      fetchFixtures(),
      fetchResults(),
    ]);
    if (fixtures.length === 0) fixtures = fallbackFixtures;
    if (results.length === 0) results = fallbackResults;
  } catch {
    fixtures = fallbackFixtures;
    results = fallbackResults;
  }

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
          <FixtureTabs fixtures={fixtures} results={results} />
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
