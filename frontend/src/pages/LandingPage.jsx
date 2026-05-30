import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { Services } from '@/components/sections/Services/Services'
import { Products } from '@/components/sections/Products/Products'
import { Upholstery } from '@/components/sections/Upholstery/Upholstery'
import { Gallery } from '@/components/sections/Gallery/Gallery'
import { CtaBanner } from '@/components/sections/CtaBanner/CtaBanner'
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp/FloatingWhatsApp'
import { navigateFromHeroCategory } from '@/utils/navigateCategory'
import styles from './LandingPage.module.css'

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero onSelectCategory={(id) => navigateFromHeroCategory(navigate, id)} />
        <Services />
        <Products />
        <Upholstery />
        <Gallery />
      </main>
      <CtaBanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
