import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { About } from '@/components/sections/About/About'
import { CtaBanner } from '@/components/sections/CtaBanner/CtaBanner'
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp/FloatingWhatsApp'
import { navigateFromHeroCategory } from '@/utils/navigateCategory'
import styles from './LandingPage.module.css'

export function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero onSelectCategory={(id) => navigateFromHeroCategory(navigate, id)} />
        <About scrollOnMount />
      </main>
      <CtaBanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
