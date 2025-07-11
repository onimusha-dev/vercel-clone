
function Footer() {
    const li = (text: string, link: string = '/') => (
        <li key={text} className="text-sm">
            <a href={link} className="text-white/50 hover:text-white transition-colors duration-200">
                {text}
            </a>
        </li>
    )

    return (
        <footer className='mt-32 pb-16 px-6 md:px-12'>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="w-8 h-8 bg-white" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} />
                    </div>
                    
                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold">Products</h4>
                        <ul className="space-y-4">
                            {['AI', 'Enterprise', 'Fluid Compute', 'Next.js', 'Observability', 'Previews', 'Security', 'Turbo', 'v0'].map(item => li(item))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold">Resources</h4>
                        <ul className="space-y-4">
                            {['Community', 'Docs', 'Guides', 'Help', 'Integrations', 'Pricing', 'Templates'].map(item => li(item))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Blog', 'Careers', 'Changelog', 'Contact Us', 'Customers', 'Partners', 'Privacy Policy', 'Legal'].map(item => li(item))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold">Social</h4>
                        <ul className="space-y-4">
                            {['GitHub', 'LinkedIn', 'Twitter', 'YouTube'].map(item => li(item))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2 text-xs text-blue-400">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            All systems normal
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <p className="text-xs text-white/30">© 2024 Vercel Inc.</p>
                        <div className="flex items-center gap-4 grayscale opacity-50">
                            <div className="w-5 h-5 bg-white rounded-full" />
                            <div className="w-5 h-5 bg-white rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer