import { useState } from "react"
export default function CeremonySection() {
  const [activeRegion, setActiveRegion] = useState("Telugu")
  const [activeOccasion, setActiveOccasion] = useState("Wedding day")
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
  "All",
  "Earrings",
  "Bracelets",
  "Pendants",
  "Rings",
  "Chains",
]
const occasions = [
  "Mehendi",
  "Sangeet",
  "Haldi",
  "Wedding day",
  "Reception",
  "Cocktail Party",
]
const NECKLACE1 =
  "https://images.unsplash.com/photo-1722410180687-b05b50922362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const NECKLACE2 =
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const NECKLACE3 =
  "https://images.unsplash.com/photo-1721807644561-9efcabee5c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const EARRINGS1 =
  "https://images.unsplash.com/photo-1706076876111-28bf14ec6169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const EARRINGS2 =
  "https://images.unsplash.com/photo-1654781456542-fdd1683c79c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const BOUTIQUE_IMG =
  "https://images.unsplash.com/photo-1756483509254-3cc48a5a15b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
const TEAM_IMG =
  "https://images.unsplash.com/photo-1708534246055-d7b149acb731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
const regions = ["Telugu", "Tamil", "Kerala", "Bengali", "Punjabi"]
const productGrid = [
  { img: NECKLACE1, label: "Temple Necklace Set" },
  { img: EARRINGS2, label: "Jhumka Earrings" },
  { img: NECKLACE2, label: "Layered Haaram" },
  { img: EARRINGS1, label: "Chandbali Drops" },
  { img: NECKLACE3, label: "Bridal Choker" },
]

  return (
    <section id="ceremony" className="bg-[#f5ede0] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <p
          style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
          className="text-[#b88b2b] text-sm text-center uppercase tracking-widest mb-2"
        >
          RIVAAH · The Wedding Journey
        </p>
        <h2
          style={{ fontFamily: '"Rozha One:Regular", serif' }}
          className="text-[#2b1212] text-4xl sm:text-5xl text-center mb-4"
        >
          Jewellery, mapped to the ceremony
        </h2>
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-[#5a3a2a] text-lg text-center max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Each moment of the wedding calls for something different — pick the
          ceremony, see what actually works for it.
        </p>

        {/* Region tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className={`px-7 py-3 rounded-full text-sm transition-colors ${
                activeRegion === r
                  ? "bg-[#7a1c1c] text-white"
                  : "bg-white text-[#2b1212] border border-[#d4b078] hover:bg-[#f0e6d0]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Occasion tabs */}
        <div className="flex flex-wrap gap-8 justify-center mb-6">
          {occasions.map((o) => (
            <button
              key={o}
              onClick={() => setActiveOccasion(o)}
              style={{
                fontFamily:
                  o === activeOccasion
                    ? '"Mukta:Bold", sans-serif'
                    : '"Mukta:Regular", sans-serif',
              }}
              className={`text-lg pb-1 transition-colors border-b-3 ${
                activeOccasion === o
                  ? "border-[#b88b2b] text-[#b88b2b]"
                  : "border-transparent text-[#5a3a2a] hover:text-[#b88b2b]"
              }`}
            >
              {o}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                activeCategory === c
                  ? "bg-[#2b1212] text-white"
                  : "bg-white text-[#2b1212] border border-[#d4b078] hover:bg-[#f0e6d0]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product grid */}
<div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
  {productGrid.map((p) => (
    <div
      key={p.label}
      className="shrink-0 snap-start w-44 sm:w-52 rounded-2xl overflow-hidden bg-white shadow-sm group"
    >
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <img
          src={p.img}
          alt={p.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Enquire button */}
        <a
          href="#enquire"
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            bg-[#7a1c1c]
            text-white
            px-5
            py-2.5
            rounded-full
            text-sm
            sm:text-base
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            whitespace-nowrap
            shadow-lg
          "
          style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
        >
          Enquire →
        </a>
      </div>

      <div className="p-3">
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-[#2b1212] text-base sm:text-lg"
        >
          {p.label}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}