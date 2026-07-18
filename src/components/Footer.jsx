import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(255, 255, 255, 0.02)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '60px 0 30px',
      marginTop: 80,
    }}>
      <div className="container">
        <div className="grid-4" style={{ gap: 40 }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #1dd1a1, #f6b93b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 16,
            }}>
              Railey's Travel & Tours
            </h3>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginBottom: 20,
            }}>
              Your trusted partner for unforgettable Palawan experiences. We handle everything — you just enjoy the trip.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['FB', 'IG', 'TW'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    transition: 'var(--transition)',
                  }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--secondary)',
              marginBottom: 20,
            }}>
              Quick Links
            </h4>
            {['Home', 'Packages', 'About', 'Gallery', 'Contact'].map((page) => (
              <Link
                key={page}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                style={{
                  display: 'block',
                  padding: '6px 0',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  transition: 'var(--transition)',
                }}
              >
                {page}
              </Link>
            ))}
          </div>

          {/* Tour Types */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--secondary)',
              marginBottom: 20,
            }}>
              Tour Types
            </h4>
            {[
              'Island Hopping',
              'Underground River',
              'City Tours',
              'Combo Packages',
              'Custom Trips',
            ].map((type) => (
              <Link
                key={type}
                to="/packages"
                style={{
                  display: 'block',
                  padding: '6px 0',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  transition: 'var(--transition)',
                }}
              >
                {type}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--secondary)',
              marginBottom: 20,
            }}>
              Contact Us
            </h4>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 2 }}>
              <p>📍 Puerto Princesa, Palawan</p>
              <p>📞 +63 912 345 6789</p>
              <p>✉️ hello@raileystravel.com</p>
              <p>🕐 Mon–Sat: 8AM – 6PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: 50,
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Railey's Travel & Tours. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Privacy Policy
            </Link>
            <Link to="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
