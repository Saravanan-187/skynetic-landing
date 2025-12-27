import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import PainPoints from '../components/PainPoints'
import Advantage from '../components/Advantage'
import Pricing from '../components/Pricing'
import Faqs from '../components/Faqs'
import Testimonials from '../components/Testimonials'
import CtaStrip from '../components/CtaStrip'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <section className="relative overflow-hidden text-white">
        <div className="relative z-10">
          <Hero />
          <Stats />
        </div>
      </section>
      <PainPoints />
      <Advantage />
      <Pricing />
      <Testimonials />
      <Faqs />
      <CtaStrip />
      <Footer />
    </div>
  )
}

export default Home

