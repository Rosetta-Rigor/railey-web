import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DarkVeil from './DarkVeil.jsx'

export default function Hero3D() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        maxHeight: 900,
        overflow: 'hidden',
      }}
    >
      {/* DarkVeil animated shader background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <DarkVeil
          hueShift={99}
          speed={2}
          scanlineFrequency={0.5}
          warpAmount={0.7}
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(180deg, rgba(10,10,26,0.15) 0%, rgba(10,10,26,0.5) 50%, rgba(10,10,26,0.9) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: 50,
            background: 'rgba(29, 209, 161, 0.12)',
            border: '1px solid rgba(29, 209, 161, 0.2)',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'var(--secondary)',
            marginBottom: 24,
            letterSpacing: 1,
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}>
            ✦ Your Go To Travel Agency For Affordable Palawan Adventures ✦
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #1dd1a1 50%, #f6b93b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))',
          }}>
            Experience Palawan
          </span>
          <br />
          <span style={{ color: 'var(--text-light)', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }}>
            Like Never Before
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: 600,
            marginBottom: 40,
            lineHeight: 1.7,
            fontWeight: 300,
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}
        >
          From the stunning lagoons of El Nido to the UNESCO Underground River — let us craft your perfect Palawan adventure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link to="/packages" className="btn btn-accent" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Explore Packages
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/about" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Learn More
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 60,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { value: '200+', label: 'Happy Travelers' },
            { value: '6+', label: 'Tour Packages' },
            { value: '4.9', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                background: 'var(--gradient-ocean)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.4))',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontWeight: 400,
                letterSpacing: 1,
                textShadow: '0 1px 8px rgba(0,0,0,0.5)',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          letterSpacing: 2,
          textTransform: 'uppercase',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
        Scroll
      </motion.div>
    </section>
  )
}
