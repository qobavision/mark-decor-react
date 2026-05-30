import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { ProductCatalog } from '@/components/sections/ProductCatalog/ProductCatalog'
import { CtaBanner } from '@/components/sections/CtaBanner/CtaBanner'
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp/FloatingWhatsApp'
import { navigateFromHeroCategory } from '@/utils/navigateCategory'
import styles from './LandingPage.module.css'

export function ProductsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const catFromNav = location.state?.cat
  const [productCat, setProductCat] = useState(catFromNav ?? 'roller')

  useEffect(() => {
    if (catFromNav) {
      setProductCat(catFromNav)
    }
  }, [catFromNav])

  const handleCategory = (id) => {
    navigateFromHeroCategory(navigate, id, { onProductCategory: setProductCat })
  }

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero variant="products" onSelectCategory={handleCategory} />
        <ProductCatalog
          activeId={productCat}
          onSelect={setProductCat}
          scrollOnMount
        />
      </main>
      <CtaBanner variant="choose" />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
