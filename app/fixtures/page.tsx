import { Card, CardContent } from "@/components/ui/card";
import { fetchFixtures, fetchResults } from "@/lib/play-cricket";
import FixtureTabs from "@/components/FixtureTabs";

const CRICKET_EQUIPMENT = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-4_1770505572000_na1fn_Y3JpY2tldC1lcXVpcG1lbnQtZGV0YWls.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTRfMTc3MDUwNTU3MjAwMF9uYTFmbl9ZM0pwWTJ0bGRDMWxjWFZwY0cxbGJuUXRaR1YwWVdscy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CF1jhtoljO~RzIF4q8kpddkVR02-WAkzQo6AsV99w3Kdi-G~QHwNisZBHChl0HjSgtrqXTnKqY~c7AI6Qx5tHT5SkrPkLmbxnNnNBRjX65-wJz8w2hQlGFNXpuuYakPYk5DPYWcOwo34LzdeOxJaU1Dicf6qhHB7Vr~ddwiqR2Nap2SSpUJgTZvuzGS0wjQSCDnp3T42RNyv2lQf6QJ-XEXpnN4FWKEmRAbbc-78JPP4E9F0y2f~3tXAyxLK67nG2PDqBUjMkMbw7tZEPcEZMoknF1GyyUimTqRy4RV7m8dYu3G5BsNbh7Mmz-9-FbJIptDIlG1~XrGJJoVeLubtsA__";

export default async function Fixtures() {
  const [fixtures, results] = await Promise.all([
    fetchFixtures().catch(() => []),
    fetchResults().catch(() => []),
  ]);

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
