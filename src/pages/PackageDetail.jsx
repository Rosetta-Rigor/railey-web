import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import tourPackages from '../data/tourPackages.js'

export default function PackageDetail() {
  const { id } = useParams()
  const pkg = tourPackages.find(p => p.id === Number(id))

  if (!pkg) {
    return (
      <div style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: 16 }}>
          Package Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          The package you're looking for doesn't exist.
        </p>
        <Link to="/packages" className="btn btn-primary">
          View All Packages
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '60vh',
        minHeight: 400,
        maxHeight: 600,
        overflow: 'hidden',
      }}>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={pkg.images[0]}
          alt={pkg.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,26,0.2) 0%, rgba(10,10,26,0.8) 100%)',
        }} />

        {/* Back button */}
        <div style={{
          position: 'absolute',
          top: 100,
          left: 24,
          zIndex: 2,
        }}>
          <Link
            to="/packages"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem',
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: 50,
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Packages
          </Link>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px 24px',
            zIndex: 2,
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              {pkg.featured && <span className="badge badge-featured">Featured</span>}
              <span className="badge badge-duration" style={{ background: 'rgba(0,0,0,0.4)' }}>
                {pkg.duration}
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: 8,
            }}>
              {pkg.title}
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 16,
            }}>
              {pkg.subtitle}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{pkg.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: 'var(--accent)' }}>★</span>
                <span style={{ fontWeight: 600 }}>{pkg.rating}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>({pkg.reviews} reviews)</span>
              </div>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--accent)',
              }}>
                {pkg.price}
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                  / person
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container" style={{ marginTop: 60 }}>
        <div className="grid-2" style={{ gap: 48, alignItems: 'start' }}>
          {/* Left Column */}
          <div>
            {/* Description */}
            <AnimatedSection>
              <SectionTitle
                tag="Overview"
                title={pkg.title}
                align="left"
              />
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                fontSize: '1rem',
                marginBottom: 40,
              }}>
                {pkg.description}
              </p>
            </AnimatedSection>

            {/* Highlights */}
            <AnimatedSection>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.4rem',
                marginBottom: 20,
                color: 'white',
              }}>
                Tour Highlights
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {pkg.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      background: 'rgba(29, 209, 161, 0.04)',
                      borderRadius: 12,
                      border: '1px solid rgba(29, 209, 161, 0.08)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Itinerary */}
            <AnimatedSection style={{ marginTop: 48 }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.4rem',
                marginBottom: 20,
                color: 'white',
              }}>
                Itinerary
              </h3>
              <div style={{
                position: 'relative',
                paddingLeft: 32,
              }}>
                {/* Timeline line */}
                <div style={{
                  position: 'absolute',
                  left: 11,
                  top: 8,
                  bottom: 8,
                  width: 2,
                  background: 'linear-gradient(180deg, var(--secondary), var(--accent))',
                  borderRadius: 1,
                }} />
                {pkg.itinerary.map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      position: 'relative',
                      paddingBottom: 32,
                      paddingLeft: 20,
                    }}
                  >
                    {/* Dot */}
                    <div style={{
                      position: 'absolute',
                      left: -25,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--secondary)' : 'rgba(255,255,255,0.15)',
                      border: '2px solid var(--bg-dark)',
                    }} />
                    <span className="badge badge-duration" style={{
                      background: 'rgba(29, 209, 161, 0.1)',
                      color: 'var(--secondary)',
                      marginBottom: 8,
                      display: 'inline-block',
                    }}>
                      Day {day.day}
                    </span>
                    <h4 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.1rem',
                      color: 'white',
                      marginBottom: 6,
                    }}>
                      {day.title}
                    </h4>
                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}>
                      {day.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column — Sidebar */}
          <div style={{ position: 'sticky', top: 100 }}>
            <AnimatedSection>
              <div className="glass" style={{ padding: '32px 28px', borderRadius: 20 }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  marginBottom: 24,
                }}>
                  Package Details
                </h3>

                {/* Price */}
                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  marginBottom: 24,
                  background: 'rgba(246, 185, 59, 0.06)',
                  borderRadius: 16,
                  border: '1px solid rgba(246, 185, 59, 0.12)',
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    {pkg.price}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    per person
                  </div>
                </div>

                {/* Includes */}
                <div style={{ marginBottom: 24 }}>
                  <h4 style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: 'var(--secondary)',
                    marginBottom: 12,
                  }}>
                    ✓ Included
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {pkg.includes.map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Excludes */}
                <div style={{ marginBottom: 28 }}>
                  <h4 style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: 'var(--accent-orange)',
                    marginBottom: 12,
                  }}>
                    ✗ Not Included
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {pkg.excludes.map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="btn btn-accent"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    padding: '16px',
                  }}
                >
                  Book This Package
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <p style={{
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  marginTop: 12,
                }}>
                  Free cancellation up to 48 hours before
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
