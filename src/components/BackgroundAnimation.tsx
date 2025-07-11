import { motion } from "framer-motion"
import { useMemo } from "react"

export default function BackgroundAnimation() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Moving Grid */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0px 0px", "24px 24px"] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 grid-bg opacity-[0.07]"
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-500/20 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Occasional Light Beams */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
          delay: 2,
        }}
        className="absolute top-1/4 left-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -rotate-45 blur-sm"
      />
      
      <motion.div
        animate={{
          x: ["200%", "-100%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
          delay: 5,
        }}
        className="absolute bottom-1/4 right-0 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rotate-45 blur-sm"
      />
    </div>
  )
}
