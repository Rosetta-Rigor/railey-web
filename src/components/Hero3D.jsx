import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function FloatingIsland() {
  const meshRef = useRef()

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.1 + pointer.y * 0.3
    meshRef.current.rotation.y = t * 0.1 + pointer.x * 0.5
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.15
  })

  return (
    <group ref={meshRef}>
      {/* Main shape — distorted torus knot representing island rings */}
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.6, 0.5, 180, 24]} />
        <MeshDistortMaterial
          color="#1dd1a1"
          emissive="#0a3d62"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.15}
          speed={2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color="#f6b93b"
          emissive="#e77f67"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
          distort={0.1}
          speed={1.5}
        />
      </mesh>

      {/* Orbiting ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.4, 0.04, 32, 64]} />
        <meshBasicMaterial color="#1dd1a1" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.0, 0.03, 32, 64]} />
        <meshBasicMaterial color="#f6b93b" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

function ParticleField() {
  const count = 400
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [])

  const pointsRef = useRef()
  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02
    pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#1dd1a1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function Hero3D() {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: 600,
      maxHeight: 900,
      overflow: 'hidden',
    }}>
      {/* 3D Canvas Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#1dd1a1" />
          <pointLight position={[-5, -3, 2]} intensity={0.5} color="#f6b93b" />
          <directionalLight position={[0, 5, 10]} intensity={0.3} />
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <FloatingIsland />
          </Float>
          <ParticleField />
          <Stars radius={30} depth={60} count={800} factor={4} saturation={0} fade speed={0.5} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(10,10,26,0.3) 0%, rgba(10,10,26,0.6) 50%, rgba(10,10,26,0.9) 100%)',
        zIndex: 1,
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
          }}>
            ✦ Palawan's Premier Travel Agency
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
          }}>
            Experience Palawan
          </span>
          <br />
          <span style={{ color: 'var(--text-light)' }}>
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
            { value: '500+', label: 'Happy Travelers' },
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
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontWeight: 400,
                letterSpacing: 1,
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
