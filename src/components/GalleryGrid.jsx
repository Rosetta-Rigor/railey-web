import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  { src: '/images/el-nido.avif', title: 'El Nido Lagoon', category: 'Beach' },
  { src: '/images/subterranean-river-ppc.jfif', title: 'Underground River', category: 'Adventure' },
  { src: '/images/puerto-princesa-balayong-park.jfif', title: 'Balayong Park', category: 'Culture' },
  { src: '/images/646205044_915915711159403_903168063845602095_n.jpg', title: 'Palawan Sunset', category: 'Beach' },
  { src: '/images/647372035_1694539155046223_177040390575603868_n.jpg', title: 'Island Paradise', category: 'Beach' },
  { src: '/images/744953210_3850628045231974_6814558146317264708_n.jpg', title: 'Marine Life', category: 'Adventure' },
  { src: '/images/c5be6416-b218-4069-bfad-570e51071afc.jfif', title: 'Port Barton Beach', category: 'Beach' },
  { src: '/images/da29a380-f42f-405d-a9a7-6160ece5f60a.jfif', title: 'Palawan Nature', category: 'Nature' },
  { src: '/images/f15803da-a8da-4a80-8955-d222ca01b295.jfif', title: 'Tropical Escape', category: 'Nature' },
  { src: '/images/16e46779-beeb-4a16-8c14-9c829f4589db.jfif', title: 'Coastal Views', category: 'Beach' },
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div style={{
        columns: '3 280px',
        columnGap: 16,
      }}>
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            style={{
              breakInside: 'avoid',
              marginBottom: 16,
              cursor: 'pointer',
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(255,255,255,0.03)',
            }}
            onClick={() => setSelected(img)}
          >
            <motion.img
              src={img.src}
              alt={img.title}
              style={{
                width: '100%',
                display: 'block',
                transition: 'transform 0.5s ease',
              }}
              whileHover={{ scale: 1.05 }}
            />
            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(transparent 40%, rgba(10,10,26,0.85))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 20,
                pointerEvents: 'none',
              }}
            >
              <h4 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                color: 'white',
                marginBottom: 4,
              }}>
                {img.title}
              </h4>
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--secondary)',
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}>
                {img.category}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0,0,0,0.9)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
              cursor: 'pointer',
            }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  color: 'white',
                }}>
                  {selected.title}
                </h3>
                <span style={{
                  fontSize: '0.8rem',
                  color: 'var(--secondary)',
                  fontWeight: 500,
                }}>
                  {selected.category}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.5)'}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
