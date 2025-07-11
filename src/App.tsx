import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import BackgroundAnimation from "./components/BackgroundAnimation"

function App() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the motion
  const springConfig = { damping: 25, stiffness: 700 }
  const spotlightX = useSpring(mouseX, springConfig)
  const spotlightY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden">
      <BackgroundAnimation />
      
      {/* Dynamic Spotlight */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        <Header />
        <Home />
        <Footer />
      </motion.div>
    </div>
  )
}




export default App
