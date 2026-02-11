/* Athletic Modernism with British Heritage
 * Contact page: Contact information and inquiry form
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Users } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nReply to: ${formData.email}`;
    const mailto = `mailto:londondesperados@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const contacts = [
    {
      icon: Users,
      title: "General Inquiries",
      name: "London Desperados CC",
      email: "londondesperados@gmail.com",
      phone: "07459 623673"
    },
    {
      icon: Users,
      title: "Club Chairman",
      name: "Jijin Karumathil Vellilapully",
      email: "kvjijinonline@gmail.com",
      phone: "07448 374934"
    },
    {
      icon: Users,
      title: "Club Secretary",
      name: "Noushad Chono Kadavath",
      email: "noushadck@gmail.com",
      phone: "07459 623673"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              GET IN TOUCH
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Whether you're interested in joining the club, have questions, or want to get involved, we'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                SEND US A MESSAGE
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Interested in joining the club"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself and your interest in the club..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  CONTACT INFORMATION
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reach out to our team directly for specific inquiries.
                </p>
              </div>

              {/* Key Contacts */}
              <div className="space-y-6">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Card key={index} className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-accent)' }}>
                              {contact.title}
                            </div>
                            <div className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                              {contact.name}
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                                  {contact.email}
                                </a>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                                  {contact.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Additional Info */}
              <Card className="border-2 bg-muted">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1" style={{ fontFamily: 'var(--font-subheading)' }}>
                          Location
                        </div>
                        <p className="text-sm text-muted-foreground">
                          London, United Kingdom
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Instagram className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1" style={{ fontFamily: 'var(--font-subheading)' }}>
                          Social Media
                        </div>
                        <a 
                          href="https://www.instagram.com/londondesperados/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          @londondesperados
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground diagonal-both">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            READY TO JOIN?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            We welcome players of all skill levels and backgrounds. Whether you're an experienced cricketer or just starting out, there's a place for you at London Desperados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:londondesperados@gmail.com">
              <Button size="lg" variant="default" className="text-base font-semibold" style={{ fontFamily: 'var(--font-subheading)' }}>
                Email Us
              </Button>
            </a>
            <a href="https://www.instagram.com/londondesperados/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base font-semibold border-secondary-foreground/30 hover:bg-background/20" style={{ fontFamily: 'var(--font-subheading)' }}>
                Follow on Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
