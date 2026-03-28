import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, TrendingUp } from "lucide-react";

const TEAM_CELEBRATION = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-2_1770505564000_na1fn_dGVhbS1jZWxlYnJhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTJfMTc3MDUwNTU2NDAwMF9uYTFmbl9kR1ZoYlMxalpXeGxZbkpoZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MhyRBc~T3ij~gpnHx4XnyaSUz90NigaydbkspFAhRTQR~v202tPn0KQQMVbgBzNtYnJSiQRET5qwMSZ3XIRu71yeaCdEGFkXLpien-UXR5tRY3NNPOWILerd-NrQhtM9GHTJYOKPjIVeYTOjWdoItR~-9a7uXP8shpvpyjgwftOOK0W44JnEwpwCMvkldXS2mJtkIJsAwLPqkq67ZUy9NLDnKyHmi~DqCSFOvdsS1IUUS5lG9-dHp9UKXCXScj1XXlYWhlSyfulyvTD7IBccYhwZkeQrC6~9jNO5hIrRd75dLMskDdHFGlXK7JREjcNKZN~eNcmUAT4wS3VZP3D4Gw__";

const teams = [
  {
    name: "1st XI",
    captain: "Jijin Vellilapully",
    division: "MCCL Division Five",
    achievements: ["MCCL Division 6 Champions 2024", "MCCL Division 7 Champions 2023"],
    description: "Our premier team competing in the Middlesex County Cricket League, showcasing the highest level of competitive cricket within the club.",
  },
  {
    name: "2nd XI",
    captain: "Noushad Chono Kadavath",
    division: "MCCL Division Five",
    achievements: ["MCCL Champions 2024"],
    description: "Our second team provides opportunities for developing players while maintaining competitive standards in league cricket.",
  },
];

const hallOfFame = {
  batting: [
    { title: "Top Run Scorer", player: "Vishnu Vasudev", stat: "404 Runs", team: "Season to Date" },
    { title: "Highest Individual Score", player: "Aadarsh Praveen", stat: "95 Score", team: "1st XI" },
  ],
  bowling: [
    { title: "Top Wicket Taker", player: "Varun Prabhakar", stat: "40 Wickets", team: "Season to Date" },
    { title: "Best Bowling Figures", player: "Prakash Harjani", stat: "6/18", team: "1st XI" },
    { title: "Most Five Wicket Hauls", player: "Prakash Harjani", stat: "2 Times", team: "1st XI" },
  ],
};

const currentStandings = [
  { position: 1, team: "London Sportif CC", points: 135 },
  { position: 2, team: "United Sports CC", points: 127 },
  { position: 3, team: "London Desperados CC", points: 121, highlight: true },
  { position: 4, team: "Perivale Phoenicians CC", points: 119 },
  { position: 5, team: "London Superkings CC", points: 119 },
];

export default function Teams() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={TEAM_CELEBRATION} alt="Team" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              OUR TEAMS
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Meet the players and teams that represent London Desperados in competitive cricket across multiple leagues.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Teams Section */}
      <section className="pt-20 pb-36 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teams.map((team, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {team.name}
                      </h2>
                      <p className="text-sm text-primary font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                        {team.division}
                      </p>
                    </div>
                    <Trophy className="w-12 h-12 text-primary" />
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-sm text-muted-foreground uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                        Captain
                      </span>
                      <p className="text-lg font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                        {team.captain}
                      </p>
                    </div>

                    <div>
                      <span className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block" style={{ fontFamily: 'var(--font-accent)' }}>
                        Recent Achievements
                      </span>
                      <ul className="space-y-2">
                        {team.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {team.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-20 bg-secondary text-secondary-foreground diagonal-both">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              HALL OF FAME
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Celebrating outstanding individual performances from the current season
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Batting */}
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                <TrendingUp className="w-8 h-8 text-primary" />
                BATTING
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {hallOfFame.batting.map((record, index) => (
                  <Card key={index} className="border-2 border-secondary-foreground/20 bg-background/5">
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                        {record.title}
                      </div>
                      <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {record.stat}
                      </div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-subheading)' }}>
                        {record.player}
                      </div>
                      <div className="text-sm text-secondary-foreground/70">
                        {record.team}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bowling */}
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                <Trophy className="w-8 h-8 text-primary" />
                BOWLING
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {hallOfFame.bowling.map((record, index) => (
                  <Card key={index} className="border-2 border-secondary-foreground/20 bg-background/5">
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                        {record.title}
                      </div>
                      <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {record.stat}
                      </div>
                      <div className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-subheading)' }}>
                        {record.player}
                      </div>
                      <div className="text-sm text-secondary-foreground/70">
                        {record.team}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Standings */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                CURRENT STANDINGS
              </h2>
              <p className="text-lg text-muted-foreground">
                1st XI Division Five - 2025 Season
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Middlesex County Cricket League
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left p-4 font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                          Position
                        </th>
                        <th className="text-left p-4 font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                          Team
                        </th>
                        <th className="text-right p-4 font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentStandings.map((standing, index) => (
                        <tr
                          key={index}
                          className={`border-b border-border ${standing.highlight ? 'bg-primary/5' : ''}`}
                        >
                          <td className="p-4">
                            <span className={`text-2xl font-bold ${standing.highlight ? 'text-primary' : ''}`} style={{ fontFamily: 'var(--font-display)' }}>
                              {standing.position}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`font-semibold ${standing.highlight ? 'text-primary' : ''}`} style={{ fontFamily: 'var(--font-subheading)' }}>
                              {standing.team}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <span className={`text-xl font-bold ${standing.highlight ? 'text-primary' : ''}`} style={{ fontFamily: 'var(--font-display)' }}>
                              {standing.points}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
