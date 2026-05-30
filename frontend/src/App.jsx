import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AboutPage } from './pages/AboutPage'
import { ProductsPage } from './pages/ProductsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/contacto" element={<ContactPage />} />
    </Routes>
  )
}
