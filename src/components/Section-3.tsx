import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

function Section3() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }
    }

    return (
        <section className="space-y-8">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[120px] -z-1" />
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
                    Scale your <span className="text-white">Enterprise</span> without compromising <span className="text-blue-500">Security</span>.
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 pt-8">
                    <button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 glow">
                        Start Building
                    </button>
                    <button className="h-12 px-8 rounded-full bg-black border border-white/20 text-white font-semibold hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
                        Talk to an Expert
                    </button>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex flex-col gap-6 p-8 glass rounded-3xl border-dashed"
                >
                    <h3 className="text-2xl font-bold">Ready to deploy?</h3>
                    <p className="text-white/60">Start building with a free account. Speak to an expert for your Pro or Enterprise needs.</p>
                    <div className="pt-4">
                        <a href="/" className="text-blue-400 font-medium hover:underline flex items-center gap-2">
                            Explore Enterprise <span className="text-xl">→</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex flex-col gap-6 p-8 glass rounded-3xl border-dashed"
                >
                    <h3 className="text-2xl font-bold">Try the product tour</h3>
                    <p className="text-white/60">Explore Vercel Enterprise with an interactive product tour, trial, or a personalized demo.</p>
                    <div className="pt-4">
                        <button className="h-10 px-6 rounded-full border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors">
                            Take the Tour
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Section3