import Hero from "./Hero"
import Section1 from "./Section-1"
import Section2 from "./Section-2"
import Section3 from "./Section-3"
import FeaturesGrid from "./FeaturesGrid"
import Testimonials from "./Testimonials"
import Pricing from "./Pricing"

function Home() {
    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24 space-y-48">
            <Hero />
            <Section1 />
            <FeaturesGrid />
            <Section2 />
            <Testimonials />
            <Section3 />
            <Pricing />
        </main>
    )
}

export default Home