import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { fetchFixtures } from "@/lib/play-cricket";
import HomeFixtures from "@/components/HomeFixtures";
import HomeStats from "@/components/HomeStats";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-1_1770505560000_na1fn_aGVyby1jcmlja2V0LWFjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTFfMTc3MDUwNTU2MDAwMF9uYTFmbl9hR1Z5YnkxamNtbGphMlYwTFdGamRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Z6UIcxMLhtCfCyS8hkCGl0UB5RrhWINyzja5p5CjRSUmUIDydmIgj-rNvOon8PK3HH-itxeSNtWogaiSC~qe5NWp3BH9yc2YXhOMsYlrbzLdukCKC0H-7IjCRYPvzCVG0iJEXJq9YCk6U3R-EpakbSphVYS55VDMpaTOoLvTMsp3OgJMvmN8OnW7RcwlhQeAxclJEACbEdCv7kANlEnEH1Afz09NHdwsUxL-Hd9A~aHW~oImhvIXssaDYmd35cUHjhXcUiX7e1-6bcS3DZeK1MDHAcuTVgTKBUGF0T7TanyhID93q7Rw4~2AoQUN2j4zcjIwlR6mMJiWWNUqG2n0Yg__";

const achievements = [
  { year: "2024", title: "MCCL Division 6 Champions", team: "1st XI" },
  { year: "2024", title: "MCCL Champions", team: "2nd XI" },
  { year: "2024", title: "Essex Sunday League Champions", team: "" },
  { year: "2023", title: "MCCL Division 7 Champions", team: "" },
];

export default async function Home() {
  const fixtures = (await fetchFixtures().catch(() => [])).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-foreground/95 to-foreground">
        {/* Background Image with Ken Burns effect */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Cricket Action"
            className="w-full h-full object-cover opacity-25 hero-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50"></div>
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 bg-dots opacity-30"></div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-[30%] w-48 h-48 rounded-full bg-primary/8 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div
              className="hero-fade-in-up inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-primary/15 border border-primary/40 rounded-full backdrop-blur-md"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'var(--font-accent)' }}>
                Est. 2019 &bull; London
              </span>
            </div>

            <h1
              className="hero-fade-in-up text-6xl md:text-8xl lg:text-9xl text-white mb-2 leading-[0.9] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', animationDelay: '0.4s' }}
            >
              LONDON<br />
              <span className="gradient-text">DESPERADOS</span>
            </h1>

            {/* Animated accent line */}
            <div className="hero-accent-line w-32 h-1.5 bg-gradient-to-r from-primary to-primary/50 mb-8 rounded-full"></div>

            <p
              className="hero-fade-in-up text-xl md:text-2xl text-white/85 mb-10 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-subheading)', animationDelay: '0.6s' }}
            >
              A friendly, sociable and inclusive club fostering cricketing excellence in the heart of London.
            </p>

            <div className="hero-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.8s' }}>
              <Link href="/contact">
                <Button size="lg" variant="default" className="hero-pulse-glow text-base font-semibold px-8 h-13" style={{ fontFamily: 'var(--font-subheading)' }}>
                  Join Our Club
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-base font-semibold bg-white/5 border-white/20 text-white hover:bg-white/15 backdrop-blur-sm px-8 h-13" style={{ fontFamily: 'var(--font-subheading)' }}>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Stats Section */}
      <section className="pt-8 pb-28 bg-background bg-dots">
        <div className="container">
          <HomeStats />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-24 pt-32 pb-36 lg:py-24 bg-secondary text-secondary-foreground diagonal-both overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Instagram Reel */}
            <ScrollReveal className="order-2 lg:order-1">
              <div className="flex justify-center px-4 sm:px-0">
                <div className="relative w-full" style={{ maxWidth: '400px' }}>
                  <div className="rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10" style={{ height: 'clamp(400px, 80vw, 600px)' }}>
                    <iframe
                      src="https://www.instagram.com/reel/DBg8UzpCCXa/embed/?hidecaption=true"
                      className="border-0 w-full"
                      style={{ height: 'clamp(500px, 100vw, 750px)' }}
                      scrolling="no"
                      allowFullScreen
                      title="London Desperados Achievement Reel"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 shimmer-badge text-primary-foreground p-4 sm:p-6 rounded-xl shadow-xl z-10">
                    <div className="text-2xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>2024</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>Champions</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  OUR ACHIEVEMENTS
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                  Since our establishment in 2019, London Desperados has consistently demonstrated excellence on the cricket field, securing multiple championship titles across different leagues and divisions.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="flex items-start gap-4 p-4 bg-background/10 rounded-xl border border-secondary-foreground/15 hover:bg-background/15 hover:border-primary/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                            {achievement.year}
                          </span>
                          {achievement.team && (
                            <span className="text-xs px-2.5 py-1 bg-primary/20 text-primary rounded-full uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                              {achievement.team}
                            </span>
                          )}
                        </div>
                        <div className="text-base font-medium" style={{ fontFamily: 'var(--font-subheading)' }}>
                          {achievement.title}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={400}>
                <Link href="/about">
                  <Button variant="outline" className="mt-8 border-secondary-foreground/30 hover:bg-background/20 hover:border-primary/50 transition-all duration-300" style={{ fontFamily: 'var(--font-subheading)' }}>
                    View Full History
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Fixtures Section */}
      <section className="py-24 bg-background bg-dots">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                UPCOMING FIXTURES
              </h2>
              <div className="glow-divider w-24 mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check out our upcoming matches and come support the team
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <HomeFixtures fixtures={fixtures} />
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link href="/fixtures">
                <Button variant="default" size="lg" className="px-8 h-13" style={{ fontFamily: 'var(--font-subheading)' }}>
                  View All Fixtures
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
          }}></div>
        </div>
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-white/5 blur-3xl"></div>

        <div className="container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                JOIN THE DESPERADOS
              </h2>
              <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto">
                Whether you&apos;re an experienced cricketer or just starting out, we welcome players of all skill levels. Be part of a diverse, inclusive community united by the love of cricket.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-base font-semibold px-10 h-13 shadow-xl hover:shadow-2xl transition-shadow" style={{ fontFamily: 'var(--font-subheading)' }}>
                  Get In Touch
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
