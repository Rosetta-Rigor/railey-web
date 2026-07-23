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
                      value: 'Magbanua Subdivision, Libis, San Pedro, Puerto Princesa, Philippines, 5300',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                      label: 'Phone',
                      value: '0953 254 5077',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.498 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.15-.67.15-.198.3-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      ),
                      label: 'WhatsApp',
                      value: (
                        <a
                          href="https://wa.me/639196729666"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#25D366',
                            textDecoration: 'none',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            transition: 'opacity 0.3s ease',
                          }}
                          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                          onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                          +63 919 672 9666
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      ),
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ),
                      label: 'Email',
                      value: 'raileyspalawantours@yahoo.com',
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      ),
                      label: 'Office Hours',
                      value: 'ALWAYS OPEN',
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
                    { name: 'Facebook', color: '#1877F2', link: 'https://web.facebook.com/profile.php?id=100069375394847' },
                    { name: 'WhatsApp', color: '#25D366', link: 'https://wa.me/639196729666' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target={social.link !== '#' ? '_blank' : undefined}
                      rel={social.link !== '#' ? 'noopener noreferrer' : undefined}
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
