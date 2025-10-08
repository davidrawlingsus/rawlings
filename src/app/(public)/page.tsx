import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LogoWall from './components/LogoWall'
import ImpactChart from './components/ImpactChart'
import Process from './components/Process'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LogoWall />
      <ImpactChart />
      <Process />
    </main>
  )
}
