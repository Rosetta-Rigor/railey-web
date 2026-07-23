import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero3D from '../components/Hero3D.jsx'
import PackageCard from '../components/PackageCard.jsx'
import TestimonialCard, { testimonials } from '../components/TestimonialCard.jsx'
import BorderGlow from '../components/BorderGlow.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import tourPackages from '../data/tourPackages.js'

function ParallaxSection({ children, speed = 0.15 }) {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100])
  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

export default function Home() {
  const featured = tourPackages.filter(p => p.featured)

  return (
    <div>
      {/* ─── 3D Hero ─── */}
      <Hero3D />

      {/* ─── Featured Packages ─── */}
      <section className="section section-gradient">
        <div className="container">
          <SectionTitle
            tag="Explore"
            title="Featured Tour Packages"
            subtitle="Hand-picked Palawan experiences that our travelers love the most."
          />
          <div className="grid-3">
            {featured.slice(0, 3).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: 48 }}
          >
            <Link to="/packages" className="btn btn-secondary" style={{ padding: '14px 36px' }}>
              View All Packages
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <AnimatedSection className="section">
        <div className="container">
          <ParallaxSection speed={0.08}>
            <SectionTitle
              tag="Why Railey's"
              title="The Railey's Difference"
              subtitle="We don't just book trips — we craft unforgettable Palawan memories."
            />
          </ParallaxSection>
          <div className="grid-4" style={{ marginTop: 20 }}>
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: 'Local Experts',
                text: 'Born and raised in Palawan. We know every hidden cove, best photo spot, and the perfect time to visit.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: 'All-Inclusive',
                text: 'From airport pickup to accommodation and meals — we handle every single detail.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                ),
                title: 'Hassle-Free',
                text: 'No planning stress. Just tell us your dates and we deliver a seamless Palawan experience.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                title: '5-Star Service',
                text: "Rated 4.9/5 by our travelers. We don't rest until you're smiling.",
              },
            ].map((item, i) => (
              <BorderGlow
                key={item.title}
                glowColor="162 69 47"
                backgroundColor="transparent"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                edgeSensitivity={28}
                coneSpread={38}
                animated
                colors={['#1dd1a1', '#55efc4', '#f6b93b']}
                fillOpacity={0.35}
              >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card"
                style={{
                  padding: '32px 24px',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(29, 209, 161, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  {item.icon}
                </div>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  color: 'white',
                  marginBottom: 12,
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}>
                  {item.text}
                </p>
              </motion.div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── Testimonials ─── */}
      <AnimatedSection className="section section-dark">
        <div className="container">
          <SectionTitle
            tag="Testimonials"
            title="What Our Travelers Say"
            subtitle="Real stories from travelers who experienced Palawan with Railey's."
          />
          <div className="grid-4" style={{ alignItems: 'stretch' }}>
            {testimonials.slice(0, 4).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── CTA Banner ─── */}
      <AnimatedSection>
        <div className="container" style={{ padding: '80px 24px' }}>
          <div className="glass" style={{
            padding: '60px 40px',
            textAlign: 'center',
            borderRadius: 24,
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(29,209,161,0.05) 0%, rgba(246,185,59,0.05) 100%)',
          }}>
            {/* Decorative circles */}
            <div style={{
              position: 'absolute',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(29,209,161,0.08), transparent)',
              top: -100,
              right: -50,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              width: 250,
              height: 250,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(246,185,59,0.06), transparent)',
              bottom: -80,
              left: -60,
              pointerEvents: 'none',
            }} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <SectionTitle
                tag="Book Now"
                title="Ready for Your Palawan Adventure?"
                subtitle="Let's plan your dream trip. No pressure, no pushy sales — just expert advice."
              />
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
                <Link to="/contact" className="btn btn-accent" style={{ fontSize: '1rem', padding: '16px 36px' }}>
                  Plan My Trip
                </Link>
                <Link to="/packages" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
                  View Packages
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
