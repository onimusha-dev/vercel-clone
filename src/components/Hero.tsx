import { motion, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import type { Variants } from "framer-motion"

function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const moveX = useTransform(springX, [0, 2000], [-20, 20])
  const moveY = useTransform(springY, [0, 1000], [-20, 20])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  }

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center py-12 md:py-24"
    >
      {/* Background Abstract Glows with Parallax */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] -z-1 opacity-50" 
      />
      
      <motion.div 
        style={{ x: useTransform(springX, [0, 2000], [20, -20]), y: useTransform(springY, [0, 1000], [20, -20]) }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] -z-1" 
      />

      <motion.div 
        style={{ x: moveX, y: moveY }}
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-purple-500/20 blur-[130px] -z-1" 
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[140px] -z-1" 
      />

      <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50 mb-8">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        Now supporting React 19
      </motion.div>

      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 text-gradient leading-tight"
      >
        Build and deploy <br /> on the AI Cloud.
      </motion.h1>

      <motion.p 
        variants={itemVariants}
        className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed"
      >
        Vercel provides the developer tools and cloud infrastructure <br className="hidden md:block" />
        to build, scale, and secure a faster, more personalized web.
      </motion.p>

      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all glow hover:scale-105 active:scale-95">
          Start Deploying
        </button>
        <button className="h-12 px-8 rounded-full bg-black border border-white/20 text-white font-semibold hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
          Get a Demo
        </button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mt-24 w-full"
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="py-12 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="text-xl font-bold italic tracking-tighter">Shopify</p>
          <p className="text-xl font-bold italic tracking-tighter">Nintendo</p>
          <p className="text-xl font-bold italic tracking-tighter">Under Armour</p>
          <p className="text-xl font-bold italic tracking-tighter">Loom</p>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    </motion.section>
  )
}

export default Hero