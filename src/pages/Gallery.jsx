import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'

export default function Gallery() {
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
          background: 'radial-gradient(ellipse at 50% 50%, rgba(246,185,59,0.04) 0%, transparent 50%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              tag="Gallery"
              title="Palawan Through Our Lens"
              subtitle="A visual journey through the stunning landscapes, hidden gems, and unforgettable moments that make Palawan the 'Last Frontier' of the Philippines."
            />
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <AnimatedSection className="section">
        <div className="container">
          <div style={{
            padding: '16px 0',
          }}>
            <GalleryGrid />
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionTitle
            tag="Join Us"
            title="Ready to Create Your Own Palawan Story?"
            subtitle="These photos could be yours. Book a tour and experience the magic of Palawan firsthand."
          />
          <Link
            to="/contact"
            className="btn btn-accent"
            style={{ fontSize: '1rem', padding: '16px 40px', marginTop: 16 }}
          >
            Book Your Adventure
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
