import { useEffect } from 'react'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Contact } from '@/components/sections/Contact/Contact'
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp/FloatingWhatsApp'
import styles from './LandingPage.module.css'

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.page}>
      <Header solid />
      <main>
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
