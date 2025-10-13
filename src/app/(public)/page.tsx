import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LogoCloudDemo from './components/LogoCloudDemo'
import ImpactChart from './components/ImpactChart'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import OriginStory from './components/OriginStory'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LogoCloudDemo />
      <ImpactChart />
      <Testimonials />
      <Process />
      <OriginStory />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
