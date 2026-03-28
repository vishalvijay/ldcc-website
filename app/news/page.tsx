import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const LONDON_GROUND = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-5_1770505556000_na1fn_bG9uZG9uLWNyaWNrZXQtZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTVfMTc3MDUwNTU1NjAwMF9uYTFmbl9iRzl1Wkc5dUxXTnlhV05yWlhRdFozSnZkVzVrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wlci0vd~1JOVUKJXaoheql28L5gM6y~byl~XvxfxP2zKGb3UXMf~T1EDEQORb6rbdaRAgebHPppxuzYN7EGR61QV1eK6gggpDXGDEYyRZ~vhP9v4MdGTp6-KpYdRqxCoteDV19w59KWiczFBn9QSbKdxZz6DgD4Yj0HAlj9id~7xVi22ynrz~zDEcZ6tyVTj9RCbdXkTDsd~5HDryoDyPGGVlX2dIw36AGMCUjjjcQCpU4OszuR404nf9eitpGEShme37SS-GOEFWHwhl0XWoXPKsbRI8FdQWqFks6cAt92EqS5B8JTGApJeayw23~BtkFzFEY0wwdRH4w3OXotdnQ__";

const newsArticles = [
  {
    title: "Double Championship Glory: 2024 Season Review",
    date: "December 15, 2024",
    category: "Season Review",
    excerpt: "London Desperados concluded the 2024 season with unprecedented success, securing championship titles in both MCCL Division 6 (1st XI) and MCCL (2nd XI), alongside the Essex Sunday League crown. This remarkable achievement marks our most successful season since establishment.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
  },
  {
    title: "Vishnu Vasudev Reaches 400-Run Milestone",
    date: "October 8, 2024",
    category: "Player Achievement",
    excerpt: "Congratulations to Vishnu Vasudev for an outstanding season, becoming our top run scorer with 404 runs. His consistent performances throughout the season have been instrumental in our championship success.",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80",
  },
  {
    title: "Prakash Harjani's Record-Breaking Bowling Figures",
    date: "September 20, 2024",
    category: "Match Report",
    excerpt: "Prakash Harjani delivered a match-winning performance with career-best figures of 6/18, dismantling the opposition batting lineup. This marks his second five-wicket haul of the season, cementing his position as our leading wicket-taker.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
  },
  {
    title: "1st XI Secures Thrilling Victory Against United Sporting CC",
    date: "September 6, 2024",
    category: "Match Report",
    excerpt: "In a nail-biting finish, London Desperados 1st XI chased down 149 runs with just 2 wickets remaining. The victory keeps our championship hopes alive as we head into the final matches of the season.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
  },
  {
    title: "Dominant Display: 111-Run Victory Over Ealing Hanwellians",
    date: "August 23, 2024",
    category: "Match Report",
    excerpt: "London Desperados posted a commanding 224 runs before bowling out Ealing Hanwellians for just 113, securing a comprehensive 111-run victory. The all-round team performance showcased our championship credentials.",
    image: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=800&q=80",
  },
  {
    title: "Season 2025 Fixtures Announced",
    date: "March 1, 2025",
    category: "Club News",
    excerpt: "We're excited to announce our fixture list for the 2025 season. Both teams will be competing in MCCL Division Five, with matches starting in May. Check our Fixtures page for the complete schedule.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
  },
];

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={LONDON_GROUND} alt="Cricket Ground" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              LATEST NEWS
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Stay informed with the latest updates, match reports, and club announcements from London Desperados.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* News Grid */}
      <section className="pt-20 pb-36 bg-background bg-dots">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <ScrollReveal key={index} delay={index * 100}>
              <Card className="border-2 card-hover-lift hover:border-primary group overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded" style={{ fontFamily: 'var(--font-accent)' }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold group/btn" style={{ fontFamily: 'var(--font-subheading)' }}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground diagonal-both">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            FOLLOW US FOR LIVE UPDATES
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            Get real-time match updates, behind-the-scenes content, and team news by following us on Instagram.
          </p>
          <a
            href="https://www.instagram.com/londondesperados/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="default" className="text-base font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
              Follow @londondesperados
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
