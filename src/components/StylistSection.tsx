import { useState } from "react"
import STYLIST_BOUTIQUE from "../imports/boutique-bg.png"
import STYLIST_BRIDAL from "../imports/main-event-bg.png"
import STYLIST_TEMPLE from "../imports/heritage-bg.png"
import STYLIST_FESTIVE from "../imports/festive-bg.png"
import STYLIST_JEWELLERY from "../imports/daily-bg.png"
export default function StylistSection() {
    
    const stylistCards = [
  {
    title: "Beyond jewellery",
    subtitle: "Boutique",
    image: STYLIST_BOUTIQUE,
    href: "/boutique",
    className: "col-span-2 h-48 sm:h-52",
  },
  {
    title: "The main event",
    subtitle: "Bridal Collection",
    image: STYLIST_BRIDAL,
    href: "/bridal-collections",
    className: "col-span-1 h-36 sm:h-40",
  },
  {
    title: "Heritage",
    subtitle: "Temple Line",
    image: STYLIST_TEMPLE,
    href: "/jewellery/temple",
    className: "col-span-1 h-36 sm:h-40",
  },
  {
    title: "Diwali & Sangeet",
    subtitle: "Festive Edit",
    image: STYLIST_FESTIVE,
    href: "/jewellery/festive",
    className: "col-span-1 h-36 sm:h-40",
  },
  {
    title: "Everyday Gold",
    subtitle: "Jewellery",
    image: STYLIST_JEWELLERY,
    href: "/jewellery",
    className: "col-span-1 h-36 sm:h-40",
  },
]
  return (
    <section className="bg-[#faf6ee] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="flex-1 w-full">
            <h2
              style={{ fontFamily: '"Rozha One:Regular", serif' }}
              className="text-[#b88b2b] text-3xl sm:text-4xl lg:text-5xl italic mb-5 leading-snug"
            >
              Find jewellery for
              <br />
              your moment
            </h2>

            <p
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="text-[#5a3a2a] text-base sm:text-lg leading-relaxed mb-7 max-w-md"
            >
              Not sure what works for the occasion? Tell us what you're dressing
              for and we'll help you choose.
            </p>

            <a
              href="/styling"
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="inline-flex items-center justify-center
                         bg-[#7a1c1c] text-white
                         text-sm sm:text-base
                         px-7 py-3 rounded-full
                         hover:bg-[#5e1515]
                         transition-colors"
            >
              Talk to a Stylist
            </a>
          </div>

          {/* RIGHT SIDE — CLICKABLE CARDS */}
          <div className="w-full md:w-[520px] lg:w-[570px] shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {stylistCards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className={`
                    relative
                    ${card.className}
                    rounded-2xl
                    overflow-hidden
                    group
                    block
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                    duration-300
                  `}
                >
                  {/* IMAGE */}
                  <img
                    src={card.image}
                    alt={`${card.title} ${card.subtitle}`}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* DARK OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/20
                      group-hover:bg-black/35
                      transition-colors
                      duration-300
                    "
                  />

                  {/* TEXT */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      justify-end
                      p-4
                      sm:p-5
                    "
                  >
                    <p
                      style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
                      className="
                        text-white
                        text-lg
                        sm:text-xl
                        leading-tight
                        drop-shadow-md
                      "
                    >
                      {card.title}
                    </p>

                    <p
                      style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                      className="
                        text-white
                        text-sm
                        sm:text-base
                        opacity-95
                        drop-shadow-md
                      "
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}