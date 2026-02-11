/* Athletic Modernism with British Heritage
 * About page: Club history, mission, leadership team
 */

import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Heart, Target } from "lucide-react";

const CRICKET_PITCH = "https://private-us-east-1.manuscdn.com/sessionFile/AQDYF8wraUGo4QcrPvkcIB/sandbox/Wcnfxd7EHUsL9LTbc5D6Si-img-3_1770505571000_na1fn_Y3JpY2tldC1waXRjaC1hZXJpYWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVFEWUY4d3JhVUdvNFFjclB2a2NJQi9zYW5kYm94L1djbmZ4ZDdFSFVzTDlMVGJjNUQ2U2ktaW1nLTNfMTc3MDUwNTU3MTAwMF9uYTFmbl9ZM0pwWTJ0bGRDMXdhWFJqYUMxaFpYSnBZV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kNyMIg4Db5x8BfevEYMwGTtQWzoEjr~~jDlqV95zHSDhxhchjBWo8bbX-Lri~jqqzhfl9TcGrssD9iMUO8LvGRKwrK0yBL4NpX60xl1hFhvuMc3fXRijIn-VA3Q3s-WLeyyFLWx3A2moDogRCbUpiUTqjspu1m8t4VkiWlCIufHZCk7-uakwrwKY6bHoZ~XLIp95wYlT5F3ibbz9OhCr4wJSuujTkf-vmknOxg9Ne6J36OPEA06A3fJ13h3LV0AtT3-7nmuAL81AP23cHvriGPcxtaCQCagyOk7gTWdIkwRlNMPlaqwnOK~IBI1W-imanq1xsKZKf7eioWplfSmWjA__";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We welcome diverse individuals from all backgrounds, united by our passion for cricket."
    },
    {
      icon: Trophy,
      title: "Competitive Excellence",
      description: "Striving for success while maintaining sportsmanship and respect for the game."
    },
    {
      icon: Heart,
      title: "Friendly Atmosphere",
      description: "Creating a sociable environment where friendships flourish on and off the field."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Supporting players of all levels to improve their cricketing abilities."
    }
  ];

  const leadership = [
    { name: "Jijin Karumathil Vellilapully", role: "Club Chairman & 1st XI Captain", email: "kvjijinonline@gmail.com", phone: "07448 374934" },
    { name: "Noushad Chono Kadavath", role: "Club Secretary & 2nd XI Captain", email: "noushadck@gmail.com", phone: "07459 623673" },
    { name: "Samir Chheda", role: "Club Treasurer", email: "samir_chheda2000@yahoo.com", phone: "07459 712536" },
    { name: "Hrishikesh Padmanabhan", role: "Fixture Secretary", email: "hrishikeshvattoli@gmail.com", phone: "07526 904748" },
  ];

  const milestones = [
    { year: "2019", event: "Club Established", detail: "London Desperados founded with a vision of inclusive cricket" },
    { year: "2019", event: "First Championship", detail: "Champions of Division-1 LSL" },
    { year: "2022", event: "UKMCL Success", detail: "Champions of UKMCL Saturday League" },
    { year: "2023", event: "MCCL Entry", detail: "Joined Middlesex County Cricket League, won Division 7" },
    { year: "2024", event: "Double Champions", detail: "Both teams won their respective divisions" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={CRICKET_PITCH} alt="Cricket Pitch" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              ABOUT US
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Discover the story behind London Desperados Cricket Club, our values, and the people who make our community thrive.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Mission Section */}
      <section className="pt-20 pb-36 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              OUR MISSION
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a friendly, sociable and inclusive club of Cricket Enthusiasts who share a passion for Cricket—be it playing, watching, discussing or celebrating it. We are a group of diverse individuals who come together under the community called Cricket. Anyone with similar interests and willing to join us is welcome.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-secondary text-secondary-foreground diagonal-both">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              OUR JOURNEY
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              From our founding in 2019 to becoming champions, here's our story
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-px h-full bg-primary/30 relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {milestone.event}
                  </h3>
                  <p className="text-secondary-foreground/80">
                    {milestone.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              LEADERSHIP TEAM
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated individuals who guide our club
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leadership.map((member, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-accent)' }}>
                    {member.role}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors truncate">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Phone:</span>
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              WHERE WE COMPETE
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              London Desperados competes in two prestigious cricket leagues
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    MIDDLESEX COUNTY CRICKET LEAGUE
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our Saturday league where both our 1st XI and 2nd XI teams compete in Division Five.
                  </p>
                  <a 
                    href="https://www.middlesexccl.com/clubhome.php?club=94" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    View MCCL Profile →
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    ESSEX SUNDAY LEAGUE
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our Sunday league competition where we claimed the championship title in 2024.
                  </p>
                  <a 
                    href="https://londondesperados.play-cricket.com/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    View Play-Cricket Profile →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
