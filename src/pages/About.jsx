import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BorderGlow from '../components/BorderGlow.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div style={{
        padding: '160px 0 80px',
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0a3d62 50%, #072a45 100%)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 30%, rgba(246,185,59,0.06) 0%, transparent 50%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              tag="About Us"
              title="Your Palawan Travel Partners"
              subtitle="Founded by Marissa Austria in 2022 — honest service, unbeatable value, and a deep love for Palawan."
            />
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <AnimatedSection className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 60, alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: 20,
                lineHeight: 1.3,
              }}>
                From Humble Beginnings to{' '}
                <span style={{
                  background: 'var(--gradient-ocean)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Palawan's Rising Star
                </span>
              </h3>
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: 16,
              }}>
                Railey's Travel and Tours was established by{' '}
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Marissa Austria</strong> in{' '}
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>2022</strong>. What began as a small,
                passionate operation built on nothing but honesty and determination has grown into
                a trusted name in Palawan tourism. We started slow, but we made a promise from
                day one — to provide honest, quality services that travelers could count on.
              </p>
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: 16,
              }}>
                Our selling point is simple: we offer the{' '}
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>most affordable tour packages</strong>{' '}
                in Palawan while keeping the quality as best as we possibly could. We believe
                that incredible experiences shouldn't come with a hefty price tag — everyone
                deserves to fall in love with these islands without breaking the bank.
              </p>
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
              }}>
                Today, our agency has grown to partner with more than{' '}
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>5 local businesses</strong>{' '}
                and has proudly serviced more than{' '}
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>200 customers</strong> — and
                we're just getting started. Every tour, every smile, every "wow" moment from our
                guests fuels our passion to keep doing what we do best.
              </p>
              <div style={{
                marginTop: 28,
                padding: '20px 24px',
                background: 'linear-gradient(135deg, rgba(29,209,161,0.08) 0%, rgba(246,185,59,0.06) 100%)',
                borderRadius: 12,
                borderLeft: '3px solid var(--accent)',
              }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.5px',
                  margin: 0,
                }}>
                  "Affordable Escapes, Unforgettable Memories"
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: 6,
                  marginBottom: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}>
                  — Our Motto
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass" style={{
                padding: 32,
                borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(29,209,161,0.04) 0%, rgba(10,61,98,0.08) 100%)',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 20,
                }}>
                  {[
                    { value: '200+', label: 'Happy Travelers' },
                    { value: '4', label: 'Years of Excellence' },
                    { value: '4.9', label: 'Average Rating' },
                    { value: '5+', label: 'Business Partners' },
                  ].map((stat) => (
                    <BorderGlow
                      key={stat.label}
                      glowColor="162 69 47"
                      backgroundColor="transparent"
                      borderRadius={16}
                      glowRadius={35}
                      glowIntensity={1}
                      edgeSensitivity={25}
                      coneSpread={40}
                      animated
                      colors={['#1dd1a1', '#55efc4', '#f6b93b']}
                      fillOpacity={0.3}
                    >
                    <div style={{
                      textAlign: 'center',
                      padding: '24px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                    }}>
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        background: 'var(--gradient-ocean)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: 4,
                      }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {stat.label}
                      </div>
                    </div>
                    </BorderGlow>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="section section-dark">
        <div className="container">
          <SectionTitle
            tag="Values"
            title="What We Stand For"
            subtitle="Our core values guide everything we do — from planning your itinerary to waving goodbye at the airport."
          />
          <div className="grid-3" style={{ marginTop: 20 }}>
            {[
              {
                icon: '🤝',
                title: 'Trust & Transparency',
                text: 'No hidden fees, no surprise charges. What you see is what you pay. We believe honest business is the only way to build lasting relationships.',
              },
              {
                icon: '🌿',
                title: 'Sustainable Tourism',
                text: "We're committed to preserving Palawan's natural beauty. We follow eco-friendly practices, support conservation efforts, and educate travelers on responsible tourism.",
              },
              {
                icon: '❤️',
                title: 'Personalized Service',
                text: "You're not just a booking number. We take time to understand your preferences, dietary needs, and travel style to craft a truly personalized experience.",
              },
              {
                icon: '🌟',
                title: 'Quality First',
                text: 'From hand-picked accommodations to vetted tour guides, we never compromise on quality. If it\'s not excellent, it\'s not Railey\'s.',
              },
              {
                icon: '🤗',
                title: 'Local Expertise',
                text: 'Our team is 100% Palaweno. We know the best times, the safest routes, the tastiest local food spots, and the most breathtaking viewpoints.',
              },
              {
                icon: '💪',
                title: '24/7 Support',
                text: "Travel hiccups happen — we've got your back. Our team is available around the clock to handle any issues during your trip.",
              },
            ].map((value, i) => (
              <BorderGlow
                key={i}
                glowColor="40 91 60"
                backgroundColor="transparent"
                borderRadius={16}
                glowRadius={45}
                glowIntensity={1}
                edgeSensitivity={28}
                coneSpread={38}
                animated
                colors={['#f6b93b', '#e77f67', '#1dd1a1']}
                fillOpacity={0.4}
              >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card"
                style={{
                  padding: '32px 24px',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{value.icon}</div>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  marginBottom: 12,
                  color: 'white',
                }}>
                  {value.title}
                </h4>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}>
                  {value.text}
                </p>
              </motion.div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionTitle
            tag="Let's Talk"
            title="Ready to Experience Palawan with Us?"
            subtitle="Send us a message and let's start planning your dream Palawan adventure."
          />
          <Link
            to="/contact"
            className="btn btn-accent"
            style={{ fontSize: '1rem', padding: '16px 40px', marginTop: 16 }}
          >
            Get in Touch
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
