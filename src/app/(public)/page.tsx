import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LogoCloudDemo from './components/LogoCloudDemo'
import ImpactChart from './components/ImpactChart'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LogoCloudDemo />
      <ImpactChart />
      <Process />
      <CaseStudies />
    </main>
  )
}
