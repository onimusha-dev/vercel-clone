import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

function Section1() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="group relative flex flex-col gap-8 p-8 md:p-12 glass rounded-3xl overflow-hidden hover:border-white/20 transition-colors"
            >
                <div>
                    <h2 className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-wider">Git-connected Deploys</h2>
                    <p className="text-2xl md:text-3xl font-bold leading-tight">From localhost to https, in seconds. Deploy from Git or your CLI.</p>
                </div>

                <div className="relative mt-8">
                    {/* Code Editor Mockup */}
                    <div className="rounded-xl border border-white/10 bg-black/50 overflow-hidden glow">
                        <div className="flex gap-1.5 p-3 border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>
                        <div className="p-4 font-mono text-sm space-y-2 opacity-70">
                            <div className="flex gap-4"><span className="text-white/20">1</span><span className="text-blue-300">console</span>.<span className="text-yellow-200">log</span>(<span className="text-green-300">"Hello Vercel..."</span>);</div>
                            <div className="flex gap-4"><span className="text-white/20">2</span><span className="text-purple-300">if</span>(<span className="text-white">true</span>) {'{'}</div>
                            <div className="flex gap-4"><span className="text-white/20">3</span>  <span className="text-blue-300">console</span>.<span className="text-yellow-200">log</span>(<span className="text-green-300">"Deploying now!"</span>);</div>
                            <div className="flex gap-4"><span className="text-white/20">4</span> {'}'};</div>
                        </div>
                    </div>
                    
                    {/* Floating Browser Mockup */}
                    <motion.div 
                        initial={{ x: 20, y: 20 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute -bottom-4 -right-4 w-64 glass rounded-xl shadow-2xl overflow-hidden border-white/20"
                    >
                        <div className="p-2 border-b border-white/10 flex justify-center">
                            <div className="px-3 py-0.5 rounded-full bg-white/5 text-[10px] text-white/40">vercel.app</div>
                        </div>
                        <div className="p-6 text-center space-y-2">
                            <div className="text-lg font-bold">Welcome</div>
                            <div className="text-[10px] text-white/40">Your site is live!</div>
                            <div className="pt-4">
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                        className="h-full bg-blue-500" 
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="group flex flex-col gap-8 p-8 md:p-12 glass rounded-3xl hover:border-white/20 transition-colors"
            >
                <div>
                    <h2 className="text-sm font-medium text-purple-400 mb-4 uppercase tracking-wider">Collaborative Pre-production</h2>
                    <p className="text-2xl md:text-3xl font-bold leading-tight">Every deploy is remarkable. Chat with your team on real UI, not just designs.</p>
                </div>

                <div className="mt-auto space-y-4">
                    {[
                        { text: "Hello Musa!", side: "left", color: "bg-white/10" },
                        { text: "Hey! Let's check the new UI.", side: "right", color: "bg-blue-600" },
                        { text: "Looks amazing with these animations!", side: "left", color: "bg-white/10" }
                    ].map((msg, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, x: msg.side === 'left' ? -20 : 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`px-4 py-2 rounded-2xl text-sm ${msg.color} ${msg.side === 'left' ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Section1