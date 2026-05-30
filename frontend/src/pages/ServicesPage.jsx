import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { ServiceCatalog } from '@/components/sections/ServiceCatalog/ServiceCatalog'
import { CtaBanner } from '@/components/sections/CtaBanner/CtaBanner'
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp/FloatingWhatsApp'
import { navigateFromHeroCategory } from '@/utils/navigateCategory'
import styles from './LandingPage.module.css'

export function ServicesPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const svcFromNav = location.state?.svc ?? null

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero
          variant="services"
          onSelectCategory={(id) =>
            navigateFromHeroCategory(navigate, id, { replace: id === 'tapizado' })
          }
        />
        <ServiceCatalog scrollToId={svcFromNav} scrollOnMount />
      </main>
      <CtaBanner variant="advisory" />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
