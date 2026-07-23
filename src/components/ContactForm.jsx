import { useState } from 'react'
import { motion } from 'framer-motion'
import BorderGlow from './BorderGlow.jsx'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', package: '', message: '' })
    }, 3000)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    color: 'white',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    transition: 'var(--transition)',
    outline: 'none',
  }

  return (
    <BorderGlow
      glowColor="40 91 60"
      backgroundColor="transparent"
      borderRadius={16}
      glowRadius={45}
      glowIntensity={1.2}
      edgeSensitivity={30}
      coneSpread={38}
      colors={['#f6b93b', '#e77f67', '#1dd1a1']}
      fillOpacity={0.35}
      style={{
        maxWidth: 600,
        margin: '0 auto',
        width: '100%',
      }}
    >
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass"
      style={{
        padding: '40px 36px',
        width: '100%',
      }}
    >
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.5rem',
        marginBottom: 8,
      }}>
        Send Us a Message
      </h3>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        marginBottom: 28,
        lineHeight: 1.6,
      }}>
        Tell us about your dream Palawan trip and we'll get back to you within 24 hours.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="grid-2" style={{ gap: 16 }}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'rgba(29, 209, 161, 0.4)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'rgba(29, 209, 161, 0.4)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
        </div>
        <div className="grid-2" style={{ gap: 16 }}>
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'rgba(29, 209, 161, 0.4)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <select
            name="package"
            value={form.package}
            onChange={handleChange}
            style={{ ...inputStyle, color: form.package ? 'white' : 'rgba(255,255,255,0.4)' }}
            onFocus={(e) => e.target.style.borderColor = 'rgba(29, 209, 161, 0.4)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            <option value="" style={{ background: '#1a1a2e' }}>Interested Package</option>
            <option value="El Nido" style={{ background: '#1a1a2e' }}>El Nido Paradise</option>
            <option value="Underground River" style={{ background: '#1a1a2e' }}>Underground River</option>
            <option value="City Tour" style={{ background: '#1a1a2e' }}>City & Culture Tour</option>
            <option value="Ultimate Combo" style={{ background: '#1a1a2e' }}>Ultimate Combo</option>
            <option value="Honda Bay" style={{ background: '#1a1a2e' }}>Honda Bay Hopping</option>
            <option value="Port Barton" style={{ background: '#1a1a2e' }}>Port Barton Escape</option>
            <option value="Custom" style={{ background: '#1a1a2e' }}>Custom Package</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Tell us about your trip — preferred dates, group size, special requests..."
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
          onFocus={(e) => e.target.style.borderColor = 'rgba(29, 209, 161, 0.4)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
      </div>

      <motion.button
        type="submit"
        className="btn btn-primary"
        style={{
          width: '100%',
          justifyContent: 'center',
          marginTop: 20,
          fontSize: '1rem',
          padding: '16px',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {submitted ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Message Sent!
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            Send Inquiry
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </span>
        )}
      </motion.button>
    </motion.form>
    </BorderGlow>
  )
}
