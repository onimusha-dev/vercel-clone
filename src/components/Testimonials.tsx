import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const testimonials = [
  {
    quote: "Vercel is the gold standard for developer experience. It's transformed how we ship code.",
    author: "Musa",
    role: "Lead Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Musa"
  },
  {
    quote: "The speed and reliability of the edge network is unmatched. Our users feel the difference.",
    author: "Susie",
    role: "Product Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Susie"
  },
  {
    quote: "Deploying has never been so stress-free. Automated previews are a game changer.",
    author: "Alex",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  }
]

function Testimonials() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  }

  return (
    <section className="space-y-12 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Loved by developers worldwide.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="p-8 glass rounded-3xl space-y-6 flex flex-col justify-between"
          >
            <p className="text-lg text-white/80 italic">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full bg-white/10" />
              <div>
                <p className="font-bold text-sm tracking-tight">{t.author}</p>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
