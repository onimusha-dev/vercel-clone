import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Shield, Zap, Globe, Cpu, BarChart3, Users } from "lucide-react"

const features = [
  {
    title: "Global Edge Network",
    description: "Your site is fast for every user, no matter where they are in the world.",
    icon: Globe,
    className: "md:col-span-2",
  },
  {
    title: "Secure by Design",
    description: "DDoS protection and SSL are standard on every project.",
    icon: Shield,
    className: "md:col-span-1",
  },
  {
    title: "Instant Infrastructure",
    description: "Deploy in seconds without managing servers or configuration.",
    icon: Zap,
    className: "md:col-span-1",
  },
  {
    title: "Performance Insights",
    description: "Understand your core web vitals and real-user metrics.",
    icon: BarChart3,
    className: "md:col-span-1",
  },
  {
    title: "Team Collaboration",
    description: "Work together with preview deployments and automated feedback.",
    icon: Users,
    className: "md:col-span-1",
  },
  {
    title: "Serverless Functions",
    description: "Write code and let us handle the scaling and availability.",
    icon: Cpu,
    className: "md:col-span-1",
  },
]

function FeaturesGrid() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Everything you need to build.</h2>
        <p className="text-white/50 text-xl max-w-3xl mx-auto">
          From the first line of code to the final deployment, Vercel is built for speed and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`p-8 glass rounded-3xl group hover:border-white/20 transition-all ${feature.className}`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
              <feature.icon className="w-6 h-6 text-white/70" />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesGrid
