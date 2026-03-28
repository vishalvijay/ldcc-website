export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              PRIVACY POLICY
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Last updated: February 2026
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              1. INTRODUCTION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              London Desperados Cricket Club (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our club.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              2. INFORMATION WE COLLECT
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-8 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide when contacting us or joining the club.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Communications:</strong> Records of correspondence if you contact us through our contact form or email.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-8 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process membership applications and manage club activities</li>
              <li>Send you updates about fixtures, results, and club news</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              4. DISCLOSURE OF YOUR INFORMATION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with league organizations (MCCL, Essex Sunday League) as required for competition registration and with service providers who assist us in operating our website, subject to confidentiality agreements.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              5. DATA SECURITY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              6. YOUR RIGHTS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under UK data protection law, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-8 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              7. COOKIES
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some parts of the website may not function properly without cookies.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              8. THIRD-PARTY LINKS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our website may contain links to third-party websites (such as Play-Cricket and Instagram). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              9. CHILDREN&apos;S PRIVACY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our website is not directed to children under 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              10. CHANGES TO THIS POLICY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated &ldquo;Last updated&rdquo; date.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              11. CONTACT US
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg mb-8">
              <p className="text-muted-foreground mb-2">
                <strong>Email:</strong> <a href="mailto:londondesperados@gmail.com" className="text-primary hover:underline">londondesperados@gmail.com</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong> <a href="tel:07459623673" className="text-primary hover:underline">07459 623673</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
