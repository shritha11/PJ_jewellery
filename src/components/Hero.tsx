import { useEffect, useState } from "react"

import hero1 from "@/imports/hero1.png"
import hero2 from "@/imports/hero2.png"
import hero3 from "@/imports/hero3.png"
import hero4 from "@/imports/hero4.png"
import hero5 from "@/imports/hero5.png"

const heroImages = [hero1, hero2, hero3, hero4, hero5]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[520px] sm:h-[560px] lg:h-[600px] overflow-hidden bg-[#2b1212]">

      {/* Background images */}
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt="Indian bridal jewellery"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      {/* Slight bottom darkening */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 h-full flex items-center">

        <div className="max-w-2xl pt-8">

          {/* Eyebrow */}
          <p
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
            className="text-[#e4c477] text-sm sm:text-base tracking-[0.18em] uppercase mb-5"
          >
            Jewellery for every celebration
          </p>

          {/* Main heading */}
          <h1
            style={{ fontFamily: '"Rozha One:Regular", serif' }}
            className="text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6"
          >
            Seven ceremonies.
            <br />
            One <span className="text-[#d4a94f]">gold</span> story.
          </h1>

          {/* Description */}
          <p
            style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
            className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-xl mb-9"
          >
            From the turmeric of the haldi to the last dance at the reception —
            discover jewellery chosen for every part of the celebration, not just
            the big day.
          </p>

          {/* Main buttons */}
          <div className="flex flex-wrap gap-3 mb-6">

            <a
              href="#ceremony"
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#7a1c1c] text-white rounded-full hover:bg-[#5e1515] transition-all duration-300 shadow-lg"
            >
              Explore jewellery
            </a>

            <a
              href="/styling"
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/80 text-white rounded-full hover:bg-white hover:text-[#2b1212] transition-all duration-300"
            >
              Talk to a stylist
            </a>

          </div>

          {/* Secondary links */}
          <div
            style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
            className="flex flex-wrap gap-x-7 gap-y-2 text-white/80 text-base"
          >
            <a
              href="#ceremony"
              className="hover:text-[#e4c477] transition-colors"
            >
              Shop by occasion →
            </a>

            <a
              href="/jewellery"
              className="hover:text-[#e4c477] transition-colors"
            >
              Browse by jewellery type →
            </a>
          </div>

        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show hero image ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentImage
                ? "w-8 bg-[#d4a94f]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  )
}