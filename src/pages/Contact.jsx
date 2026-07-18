import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
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
          background: 'radial-gradient(ellipse at 30% 70%, rgba(29,209,161,0.06) 0%, transparent 50%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              tag="Contact"
              title="Let's Plan Your Palawan Trip"
              subtitle="Have a question? Want a custom package? Just want to say hi? We'd love to hear from you."
            />
          </motion.div>
        </div>
      </div>

      {/* Contact Grid */}
      <AnimatedSection className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 40, alignItems: 'start' }}>
            {/* Form */}
            <ContactForm />

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div className="glass" style={{
                padding: '32px 28px',
                borderRadius: 20,
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  marginBottom: 20,
                }}>
                  Get in Touch
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      label: 'Address',
                      value: 'Puerto Princesa City, Palawan, Philippines 5300',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                      label: 'Phone',
                      value: '+63 912 345 6789',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ),
                      label: 'Email',
                      value: 'hello@raileystravel.com',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      ),
                      label: 'Office Hours',
                      value: 'Monday – Saturday: 8:00 AM – 6:00 PM',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      gap: 14,
                      padding: '14px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 12,
                    }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'rgba(29, 209, 161, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{
                          fontSize: '0.8rem',
                          color: 'var(--secondary)',
                          fontWeight: 600,
                          letterSpacing: 1,
                          textTransform: 'uppercase',
                          marginBottom: 2,
                        }}>
                          {item.label}
                        </div>
                        <div style={{
                          fontSize: '0.92rem',
                          color: 'white',
                        }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social / Map */}
              <div className="glass" style={{
                padding: '32px 28px',
                borderRadius: 20,
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  marginBottom: 16,
                }}>
                  Follow Our Adventures
                </h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  marginBottom: 20,
                  lineHeight: 1.6,
                }}>
                  Follow us on social media for daily Palawan inspiration, travel tips, and special offers!
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { name: 'Facebook', color: '#1877F2' },
                    { name: 'Instagram', color: '#E4405F' },
                    { name: 'Twitter', color: '#1DA1F2' },
                    { name: 'TikTok', color: '#000000' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        flex: 1,
                        padding: '12px 8px',
                        borderRadius: 12,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        textAlign: 'center',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        transition: 'var(--transition)',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `${social.color}22`
                        e.target.style.borderColor = `${social.color}44`
                        e.target.style.color = social.color
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.03)'
                        e.target.style.borderColor = 'rgba(255,255,255,0.06)'
                        e.target.style.color = 'var(--text-muted)'
                      }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
