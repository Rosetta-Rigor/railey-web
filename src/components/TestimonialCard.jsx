import { motion } from 'framer-motion'
import BorderGlow from './BorderGlow.jsx'

const testimonials = [
  {
    name: 'Maria Santos',
    location: 'Manila, Philippines',
    text: 'Absolutely incredible experience! Railey planned everything perfectly — from airport pickup to the Underground River tour. The team was so professional and friendly. Will definitely book again!',
    rating: 5,
    image: null,
  },
  {
    name: 'James & Sarah Cooper',
    location: 'Sydney, Australia',
    text: "We were blown away by El Nido! The island hopping was world-class, and Railey's team made sure we had the best spots all to ourselves. Best decision we made for our Philippines trip.",
    rating: 5,
    image: null,
  },
  {
    name: 'Kenji Tanaka',
    location: 'Tokyo, Japan',
    text: 'The Ultimate Combo package was worth every peso! Five days of pure paradise. Our guide was knowledgeable, the food was amazing, and every detail was handled with care.',
    rating: 5,
    image: null,
  },
  {
    name: 'Lisa & Mark Williams',
    location: 'London, UK',
    text: "We don't usually book tours, but Railey's made us feel like family. The Port Barton escape was magical — swimming with turtles was a dream come true. Highly recommended!",
    rating: 5,
    image: null,
  },
]

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <BorderGlow
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
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card"
        style={{
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          height: '100%',
        }}
      >
        {/* Stars */}
        <div style={{ display: 'flex', gap: 4 }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{
              color: i < testimonial.rating ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
              fontSize: '1rem',
            }}>
              ★
            </span>
          ))}
        </div>

        {/* Quote icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>

        <p style={{
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          fontStyle: 'italic',
          flex: 1,
        }}>
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          paddingTop: 12,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'var(--gradient-ocean)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: 'white',
          }}>
            {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{testimonial.name}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{testimonial.location}</div>
          </div>
        </div>
      </motion.div>
    </BorderGlow>
  )
}

export { testimonials }
