import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function PackageCard({ pkg, index = 0 }) {
  const cardRef = useRef()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/packages/${pkg.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            perspective: 1000,
            transformStyle: 'preserve-3d',
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            height: '100%',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
          >
            {/* Image */}
            <div style={{
              position: 'relative',
              height: 220,
              overflow: 'hidden',
            }}>
              <motion.img
                src={pkg.images[0]}
                alt={pkg.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                whileHover={{ scale: 1.08 }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(transparent, rgba(10,10,26,0.9))',
              }} />

              {/* Badges */}
              <div style={{
                position: 'absolute',
                top: 12,
                left: 12,
                right: 12,
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                {pkg.featured && (
                  <span className="badge badge-featured">Featured</span>
                )}
                <span className="badge badge-duration" style={{
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                }}>
                  {pkg.duration}
                </span>
              </div>

              {/* Price tag */}
              <div style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: 50,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                }}>
                  {pkg.price}
                </span>
                <span style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginLeft: 4,
                }}>
                  / pax
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{
              padding: '20px 24px 24px',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(30px)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}>
                  {pkg.location}
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.35rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: 6,
              }}>
                {pkg.title}
              </h3>

              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: 16,
                lineHeight: 1.5,
              }}>
                {pkg.subtitle}
              </p>

              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
                marginBottom: 16,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {pkg.description}
              </p>

              {/* Rating & CTA */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 16,
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>★</span>
                  <span style={{
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: 'white',
                  }}>
                    {pkg.rating}
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}>
                    ({pkg.reviews} reviews)
                  </span>
                </div>

                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}>
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
      </Link>
    </motion.div>
  )
}
