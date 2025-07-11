import { motion } from "framer-motion"

function Header() {
    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 md:px-12 glass'
        >
            <div className="flex items-center gap-8">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-white transition-transform group-hover:scale-110" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} />
                    <span className="font-bold tracking-tight text-xl hidden sm:block">Vercel</span>
                </a>

                <nav className="hidden lg:flex items-center gap-1">
                    {['Products', 'Solutions', 'Resources', 'Enterprise', 'Docs', 'Pricing'].map((item) => (
                        <button key={item} className="px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200">
                            {item}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-3">
                <button className="hidden sm:block px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors">
                    Log In
                </button>
                <button className="px-4 py-1.5 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95">
                    Sign Up
                </button>
                {/* Mobile Menu Icon would go here */}
            </div>
        </motion.header>
    )
}

export default Header