import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Personal projects & non-commercial use.",
    features: ["Global Edge Network", "Automatic SSL", "Deploy from GitHub", "Unlimited Projects"],
    button: "Start for Free",
    featured: false
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "For professional developers and teams.",
    features: ["Everything in Hobby", "Advanced Analytics", "Team Collaboration", "Priority Support", "custom Domains"],
    button: "Start 14-day Pro Trial",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scale with security and isolation.",
    features: ["Everything in Pro", "Single Sign-on (SSO)", "99.99% Uptime SLA", "Dedicated Support", "Custom Security"],
    button: "Contact Sales",
    featured: false
  }
]

function Pricing() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section id="pricing" className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Ready to scale?</h2>
        <p className="text-white/50 text-xl">Choose the plan that's right for you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`flex flex-col p-8 rounded-3xl transition-all duration-300 ${
              plan.featured 
                ? 'bg-white text-black ring-4 ring-white/10' 
                : 'glass text-white'
            }`}
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.period && <span className="opacity-50 font-medium">{plan.period}</span>}
              </div>
              <p className={`mt-4 text-sm ${plan.featured ? 'text-black/60' : 'text-white/50'}`}>
                {plan.description}
              </p>
            </div>

            <ul className="space-y-4 mb-12 flex-1">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check className={`w-4 h-4 ${plan.featured ? 'text-blue-600' : 'text-blue-400'}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-full font-bold transition-all active:scale-95 ${
              plan.featured 
                ? 'bg-black text-white hover:bg-black/90' 
                : 'bg-white text-black hover:bg-white/90'
            }`}>
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
