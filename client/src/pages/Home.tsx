/* Athletic Modernism with British Heritage
 * Home page: Hero, Achievements, Upcoming Fixtures, Latest News
 * Diagonal momentum architecture with asymmetric layouts
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Trophy, Calendar, Users, Target } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-1_1770505560000_na1fn_aGVyby1jcmlja2V0LWFjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTFfMTc3MDUwNTU2MDAwMF9uYTFmbl9hR1Z5YnkxamNtbGphMlYwTFdGamRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Z6UIcxMLhtCfCyS8hkCGl0UB5RrhWINyzja5p5CjRSUmUIDydmIgj-rNvOon8PK3HH-itxeSNtWogaiSC~qe5NWp3BH9yc2YXhOMsYlrbzLdukCKC0H-7IjCRYPvzCVG0iJEXJq9YCk6U3R-EpakbSphVYS55VDMpaTOoLvTMsp3OgJMvmN8OnW7RcwlhQeAxclJEACbEdCv7kANlEnEH1Afz09NHdwsUxL-Hd9A~aHW~oImhvIXssaDYmd35cUHjhXcUiX7e1-6bcS3DZeK1MDHAcuTVgTKBUGF0T7TanyhID93q7Rw4~2AoQUN2j4zcjIwlR6mMJiWWNUqG2n0Yg__";

const TEAM_CELEBRATION = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-2_1770505564000_na1fn_dGVhbS1jZWxlYnJhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTJfMTc3MDUwNTU2NDAwMF9uYTFmbl9kR1ZoYlMxalpXeGxZbkpoZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MhyRBc~T3ij~gpnHx4XnyaSUz90NigaydbkspFAhRTQR~v202tPn0KQQMVbgBzNtYnJSiQRET5qwMSZ3XIRu71yeaCdEGFkXLpien-UXR5tRY3NNPOWILerd-NrQhtM9GHTJYOKPjIVeYTOjWdoItR~-9a7uXP8shpvpyjgwftOOK0W44JnEwpwCMvkldXS2mJtkIJsAwLPqkq67ZUy9NLDnKyHmi~DqCSFOvdsS1IUUS5lG9-dHp9UKXCXScj1XXlYWhlSyfulyvTD7IBccYhwZkeQrC6~9jNO5hIrRd75dLMskDdHFGlXK7JREjcNKZN~eNcmUAT4wS3VZP3D4Gw__";

export default function Home() {
  const achievements = [
    { year: "2024", title: "MCCL Division 6 Champions", team: "1st XI" },
    { year: "2024", title: "MCCL Champions", team: "2nd XI" },
    { year: "2024", title: "Essex Sunday League Champions", team: "" },
    { year: "2023", title: "MCCL Division 7 Champions", team: "" },
  ];

  const upcomingFixtures = [
    { date: "May 9, 2026", opponent: "New Calypsonians CC", time: "12:30 PM", venue: "Home" },
    { date: "May 16, 2026", opponent: "Peshwa CC", time: "12:30 PM", venue: "Away" },
    { date: "May 23, 2026", opponent: "London Superkings CC", time: "12:30 PM", venue: "Home" },
  ];

  const stats = [
    { icon: Trophy, value: "5+", label: "Championships Won" },
    { icon: Users, value: "40+", label: "Active Players" },
    { icon: Calendar, value: "7", label: "Years Established" },
    { icon: Target, value: "2", label: "Competitive Teams" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetric with diagonal energy */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-foreground/95 to-foreground">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={HERO_IMAGE} 
            alt="Cricket Action" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary/40 rounded-md">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: 'var(--font-accent)' }}>
                Est. 2019 • London
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              LONDON<br />DESPERADOS
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-subheading)' }}>
              A friendly, sociable and inclusive club fostering cricketing excellence in the heart of London.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="default" className="text-base font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                  Join Our Club
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-base font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20" style={{ fontFamily: 'var(--font-subheading)' }}>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section - Diagonal with celebration image */}
      <section className="relative py-24 bg-secondary text-secondary-foreground diagonal-both">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={TEAM_CELEBRATION} 
                  alt="Team Celebration" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>2024</div>
                  <div className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>Champions</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                OUR ACHIEVEMENTS
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                Since our establishment in 2019, London Desperados has consistently demonstrated excellence on the cricket field, securing multiple championship titles across different leagues and divisions.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background/10 rounded-lg border border-secondary-foreground/20">
                    <div className="flex-shrink-0">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                          {achievement.year}
                        </span>
                        {achievement.team && (
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                            {achievement.team}
                          </span>
                        )}
                      </div>
                      <div className="text-base font-medium" style={{ fontFamily: 'var(--font-subheading)' }}>
                        {achievement.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" className="mt-8 border-secondary-foreground/30 hover:bg-background/20" style={{ fontFamily: 'var(--font-subheading)' }}>
                  View Full History
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Fixtures Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              UPCOMING FIXTURES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our upcoming matches and come support the team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingFixtures.map((fixture, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
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
                      <span className={`font-semibold ${fixture.venue === "Home" ? "text-primary" : ""}`}>
                        {fixture.venue}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fixtures">
              <Button variant="default" size="lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                View All Fixtures
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
          }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              JOIN THE DESPERADOS
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Whether you're an experienced cricketer or just starting out, we welcome players of all skill levels. Be part of a diverse, inclusive community united by the love of cricket.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-base font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
