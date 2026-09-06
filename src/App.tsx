import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import SplashScreen from "./components/SplashScreen"
import BridalOccasionPage from "./pages/BridalOccasionPage"
import Chatbot from "./components/Chatbot"

import Home from "./pages/Home"
import Jewellery from "./pages/Jewellery"
import BridalCollections from "./pages/BridalCollections"
import Boutique from "./pages/Boutique"
import Styling from "./pages/Styling"
import About from "./pages/About"
import FAQPage from "./pages/FAQPage"
import TempleJewellery from "./pages/TemplateJewellery"
import Enquire from "./pages/Enquire"
import FestiveJewellery from "./pages/FestiveJewellery"

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#faf6ee]">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/jewellery"
            element={<Jewellery />}
          />

          <Route
            path="/bridal-collections"
            element={<BridalCollections />}
          />

          <Route
  path="/bridal-collections/:occasion"
  element={<BridalOccasionPage />}
/>

          <Route
            path="/boutique"
            element={<Boutique />}
          />

          <Route
            path="/styling"
            element={<Styling />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/faq"
            element={<FAQPage />}
          />

          <Route
            path="/jewellery/temple"
            element={<TempleJewellery />}
          />

          <Route
            path="/jewellery/festive"
            element={<FestiveJewellery />}
          />

          <Route
            path="/enquire"
            element={<Enquire />}
          />
        </Routes>

        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  )
}