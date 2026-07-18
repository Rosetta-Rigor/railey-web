import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'
import PackageCard from '../components/PackageCard.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import tourPackages from '../data/tourPackages.js'

const filters = ['All', 'Featured', 'Day Trip', 'Multi-Day', 'Beach', 'Adventure']

export default function Packages() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? tourPackages
    : activeFilter === 'Featured'
      ? tourPackages.filter(p => p.featured)
      : activeFilter === 'Day Trip'
        ? tourPackages.filter(p => p.duration.includes('Day') && !p.duration.includes('Days'))
        : activeFilter === 'Multi-Day'
          ? tourPackages.filter(p => p.duration.includes('Days'))
          : tourPackages

  return (
    <div>
      {/* Hero Banner */}
      <div style={{
        padding: '160px 0 80px',
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0a3d62 50%, #072a45 100%)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(29,209,161,0.08) 0%, transparent 50%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              tag="Packages"
              title="Choose Your Palawan Adventure"
              subtitle="From budget-friendly day trips to all-inclusive multi-day expeditions — find the perfect package for your dream vacation."
            />
          </motion.div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky',
        top: 72,
        zIndex: 10,
        backdropFilter: 'blur(12px)',
      }}>
        <div className="container" style={{
          display: 'flex',
          gap: 4,
          padding: '12px 24px',
          overflowX: 'auto',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 20px',
                borderRadius: 50,
                border: 'none',
                background: activeFilter === filter
                  ? 'var(--gradient-ocean)'
                  : 'rgba(255,255,255,0.04)',
                color: activeFilter === filter ? 'white' : 'var(--text-muted)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'var(--transition)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter)
                  e.target.style.background = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter)
                  e.target.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              {filter === 'Featured' && '★ '}{filter}
            </button>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      <AnimatedSection className="section">
        <div className="container">
          <motion.div
            layout
            className="grid-3"
            style={{ alignItems: 'stretch', gap: 28 }}
          >
            {filtered.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <PackageCard pkg={pkg} index={i} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.2rem' }}>No packages match this filter.</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Bottom CTA */}
      <AnimatedSection className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionTitle
            tag="Custom"
            title="Don't See What You're Looking For?"
            subtitle="We offer fully customizable tour packages. Tell us your preferences and we'll build the perfect itinerary."
          />
          <Link to="/contact" className="btn btn-accent" style={{ fontSize: '1rem', padding: '16px 40px', marginTop: 16 }}>
            Build Your Custom Package
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
