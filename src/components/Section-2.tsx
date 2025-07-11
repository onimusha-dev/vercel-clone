import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

function Section2() {
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
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="relative flex flex-col w-full p-8 md:p-12 glass rounded-3xl overflow-hidden min-h-[400px]"
            >
                <div className="z-10">
                    <h2 className="text-sm font-medium text-orange-400 mb-4 uppercase tracking-wider">Observability</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Route-aware observability.</h3>
                    <p className="text-lg md:text-xl text-white/50 max-w-xl">Monitor and analyze the performance and traffic of your projects with precision.</p>
                </div>
                
                {/* Decorative Chart Mockup */}
                <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-1/2 md:h-2/3 opacity-30 md:opacity-100">
                    <div className="relative w-full h-full p-8 flex items-end gap-1">
                        {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 40].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="flex-1 bg-gradient-to-t from-blue-500/50 to-blue-400 rounded-t-sm"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col gap-8 p-8 md:p-12 glass rounded-3xl hover:border-white/20 transition-colors"
                >
                    <div>
                        <h2 className="text-sm font-medium text-cyan-400 mb-4 uppercase tracking-wider">Vercel AI Gateway</h2>
                        <p className="text-2xl font-bold leading-tight">
                            <span className="text-white">Deploy AI in seconds. </span>
                            <span className="text-white/50">Access all major models through a single, unified interface.</span>
                        </p>
                    </div>
                    <div className="mt-auto py-8 flex justify-center">
                        <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center animate-spin-slow">
                            <div className="w-16 h-16 rounded-full bg-blue-500 blur-2xl opacity-20" />
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col gap-8 p-8 md:p-12 glass rounded-3xl hover:border-white/20 transition-colors"
                >
                    <div>
                        <h2 className="text-sm font-medium text-emerald-400 mb-4 uppercase tracking-wider">Instant Rollbacks</h2>
                        <p className="text-2xl font-bold leading-tight">
                            <span className="text-white">Go ahead, deploy on Friday.</span>
                            <span className="text-white/50"> Safely manage releases with automated deployments.</span>
                        </p>
                    </div>
                    
                    <div className="mt-auto space-y-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <div className="text-sm font-mono text-white/60">main <span className="text-white">jvjb4ynna</span></div>
                            </div>
                            <div className="text-xs text-white/20">Active</div>
                        </div>
                        <div className="p-4 rounded-xl border border-dashed border-white/10 flex items-center justify-between opacity-50">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="text-sm font-mono text-white/60">main <span className="text-white">gigj178pv</span></div>
                            </div>
                            <button className="text-[10px] px-2 py-1 rounded bg-white/10 text-white hover:bg-white/20 transition-colors">Rollback</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Section2